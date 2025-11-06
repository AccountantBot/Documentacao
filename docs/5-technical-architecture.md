---
id: technical-architecture
title: Arquitetura Técnica
sidebar_label: Arquitetura e Backend
---

# Arquitetura Técnica — AccountantBot

## 1. Visão Geral

O **AccountantBot** combina três camadas principais:

1. **Interface Conversacional (Telegram + Front Web)**  
   Captura intenções do usuário e aciona as operações.

2. **Backend (NestJS + Prisma + PostgreSQL)**  
   Atua como orquestrador: registra dados, valida permissões e chama os contratos on-chain.

3. **Smart Contracts (Solidity + Scroll)**  
   Gerencia a lógica de divisão de gastos, autorizações e liquidação on-chain.

---

## 2. Diagrama de Arquitetura

```

```
                ┌────────────────────────┐
                │        Usuário         │
                │ Telegram / WebApp      │
                └────────────┬───────────┘
                             │
                             ▼
               ┌──────────────────────────┐
               │ AccountantBot (Telegram) │
               │ Interpreta comandos e    │
               │ mensagens com IA         │
               └────────────┬─────────────┘
                             │
                Webhook / API REST (NestJS)
                             │
                             ▼
             ┌──────────────────────────────┐
             │      Backend (NestJS)        │
             │ Prisma ORM + PostgreSQL      │
             │ Chamada aos contratos via    │
             │ ethers.js / viem             │
             └────────────┬─────────────────┘
                             │
                             ▼
            ┌──────────────────────────────┐
            │ Smart Contracts (Scroll L2)  │
            │ SplitCoordinator.sol         │
            │ SplitRegistry.sol            │
            └──────────────────────────────┘
```

```

---

## 3. Backend — NestJS

### Estrutura de pastas

```

/backend
├── src/
│   ├── app.module.ts
│   ├── users/
│   ├── splits/
│   ├── transactions/
│   ├── telegram/
│   └── blockchain/
├── prisma/
│   ├── schema.prisma
├── .env
└── Dockerfile

````

### Principais responsabilidades

| Módulo | Descrição |
|--------|------------|
| **UsersModule** | Registra usuários e integra com Telegram e wallet |
| **SplitsModule** | Cria, atualiza e liquida divisões de gastos |
| **TransactionsModule** | Gerencia histórico off-chain e status on-chain |
| **BlockchainModule** | Conecta-se à Scroll (via ethers.js/viem) |
| **TelegramModule** | Webhook que recebe e envia mensagens com o bot |

---

### API — Principais Rotas REST

| Método | Endpoint | Descrição |
|--------|-----------|-----------|
| `POST /users` | Cria um novo usuário (Telegram + wallet) |
| `GET /users/:id` | Retorna perfil e autorizações |
| `POST /splits` | Cria uma nova divisão de gastos |
| `POST /splits/:id/approve` | Registra aprovação de um participante |
| `POST /splits/:id/execute` | Executa a liquidação no contrato Scroll |
| `GET /transactions/:userId` | Lista histórico de interações e pagamentos |
| `POST /webhook/telegram` | Recebe mensagens e comandos do bot |

---

## 4. Banco de Dados — Prisma + PostgreSQL

### Schema do Prisma

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id             String   @id @default(uuid())
  telegramId     String   @unique
  username       String?
  walletAddress  String   @unique
  createdAt      DateTime @default(now())
  splits         Split[]  @relation("UserSplits")
}

model Split {
  id            String         @id @default(uuid())
  description   String
  totalAmount   Float
  token         String
  status        SplitStatus    @default(PENDING)
  creatorId     String
  creator       User           @relation(fields: [creatorId], references: [id])
  participants  Participant[]  @relation("SplitParticipants")
  createdAt     DateTime       @default(now())
}

model Participant {
  id          String   @id @default(uuid())
  userId      String
  splitId     String
  amount      Float
  approved    Boolean  @default(false)
  user        User     @relation(fields: [userId], references: [id])
  split       Split    @relation(fields: [splitId], references: [id])
}

enum SplitStatus {
  PENDING
  APPROVED
  EXECUTED
  CANCELLED
}
````

---

## 5. Smart Contracts — Solidity (Scroll / Foundry)

### `SplitCoordinator.sol`

Gerencia a lógica principal de divisão e liquidação.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SplitCoordinator {
    struct Participant {
        address account;
        uint256 amount;
        bool approved;
    }

    struct Split {
        uint256 total;
        address token;
        address creator;
        bool executed;
        mapping(address => Participant) participants;
    }

    mapping(uint256 => Split) public splits;
    uint256 public splitCount;

    event SplitCreated(uint256 indexed id, address indexed creator, uint256 total);
    event Approved(uint256 indexed id, address indexed participant);
    event Executed(uint256 indexed id);

    function createSplit(address _token, address[] calldata _participants, uint256[] calldata _amounts)
        external
        returns (uint256)
    {
        require(_participants.length == _amounts.length, "Array mismatch");
        splitCount++;
        Split storage s = splits[splitCount];
        s.creator = msg.sender;
        s.token = _token;
        for (uint256 i; i < _participants.length; i++) {
            s.participants[_participants[i]] = Participant(_participants[i], _amounts[i], false);
        }
        emit SplitCreated(splitCount, msg.sender, s.total);
        return splitCount;
    }

    function approve(uint256 _id) external {
        Split storage s = splits[_id];
        Participant storage p = s.participants[msg.sender];
        require(!p.approved, "Already approved");
        p.approved = true;
        emit Approved(_id, msg.sender);
    }

    function execute(uint256 _id) external {
        Split storage s = splits[_id];
        require(!s.executed, "Already executed");
        s.executed = true;
        emit Executed(_id);
    }
}
```

### Funções principais

| Função          | Descrição                                            |
| --------------- | ---------------------------------------------------- |
| `createSplit()` | Cria uma nova divisão com os participantes e valores |
| `approve()`     | Marca a aprovação de cada participante               |
| `execute()`     | Realiza a liquidação final após todas as aprovações  |

---

### Deploy na Scroll

```bash
# Build
forge build

# Deploy na Scroll Sepolia
forge create src/SplitCoordinator.sol:SplitCoordinator \
  --rpc-url https://sepolia-rpc.scroll.io \
  --private-key $PRIVATE_KEY
```

---

## 6. Comunicação Backend ↔ Contrato

O **BlockchainService** no NestJS utiliza a biblioteca `viem` ou `ethers.js` para interagir com a Scroll:

```ts
import { Injectable } from '@nestjs/common';
import { createPublicClient, http, parseAbi } from 'viem';
import { scrollSepolia } from 'viem/chains';

@Injectable()
export class BlockchainService {
  private client = createPublicClient({
    chain: scrollSepolia,
    transport: http(process.env.SCROLL_RPC_URL),
  });

  private contract = {
    address: process.env.SPLIT_CONTRACT,
    abi: parseAbi([
      'function createSplit(address token, address[] participants, uint256[] amounts) returns (uint256)',
      'function approve(uint256 id)',
      'function execute(uint256 id)',
    ]),
  };

  async createSplit(token: string, participants: string[], amounts: bigint[]) {
    return await this.client.writeContract({
      ...this.contract,
      functionName: 'createSplit',
      args: [token, participants, amounts],
      account: process.env.RELAYER_WALLET,
    });
  }
}
```

---

## 7. Integração com Telegram

* Implementada via **NestJS Webhook** (`/webhook/telegram`).
* Mensagens são analisadas via **IA leve (Prompt + regex NLP)**.
* Ao detectar uma instrução como “dividir 200 entre 4 pessoas”, o backend:

  1. Identifica os usuários (via `telegramId`);
  2. Cria a divisão (`POST /splits`);
  3. Retorna mensagem formatada para o grupo;
  4. Espera aprovações (`/approve`);
  5. Executa (`/execute`) quando todos aprovam.

Fluxo simplificado:

```
Mensagem → NLP → API → Contrato → Resposta no chat
```

---

## 8. Segurança

| Camada       | Mecanismo          | Descrição                               |
| ------------ | ------------------ | --------------------------------------- |
| Autenticação | Assinatura EIP-712 | Aprovações sem gas                      |
| Custódia     | Non-custodial      | Tokens ficam nas wallets dos usuários   |
| Relayer      | Meta-transactions  | Backend paga o gas das execuções        |
| Storage      | Postgres + Hash    | Dados off-chain assinados e verificados |
| Contratos    | SafeMath / require | Validação completa on-chain             |

---

## 9. Stack Técnica

| Categoria       | Tecnologia                           |
| --------------- | ------------------------------------ |
| **Linguagem**   | TypeScript, Solidity                 |
| **Backend**     | NestJS                               |
| **ORM**         | Prisma                               |
| **Banco**       | PostgreSQL                           |
| **Infra**       | Docker + Railway / Supabase          |
| **Blockchain**  | Scroll (EVM compatible, L2 zkRollup) |
| **Bot**         | Telegram Bot API                     |
| **Libs Web3**   | ethers.js / viem                     |
| **Assinaturas** | EIP-712 (permit sem gas)             |
| **Deploy**      | Forge + Scroll RPC                   |

---

## 10. Fluxo Completo de Execução

```
Usuário envia mensagem no Telegram:
  → "dividir 100 reais entre 4 pessoas"

Bot interpreta e envia para backend:
  → /splits [total=100, participantes=4]

Backend cria split off-chain
  → Prisma registra Split com status "PENDING"

Backend chama contrato Scroll:
  → createSplit(token, addresses, amounts)

Participantes aprovam via emoji
  → /splits/:id/approve

Quando todos aprovam:
  → execute() no contrato Scroll

Contrato liquida o pagamento
  → Transação registrada e emitida on-chain
```

---

## 11. Considerações de Performance

* **L2 Scroll** garante transações baratas e rápidas (média < 2s).
* **Cache Redis** pode ser adicionado para requisições frequentes.
* O **Relayer** processa meta-transactions, permitindo *gasless UX*.
* O modelo é **stateless on-chain** (apenas IDs e aprovações persistem).

---

## 12. Futuras Extensões

| Módulo      | Evolução prevista                           |
| ----------- | ------------------------------------------- |
| IA          | Entendimento contextual (GPT + embeddings)  |
| Analytics   | Relatórios de gastos on-chain               |
| Wallet      | Login via Telegram Wallet / Lens Protocol   |
| Contratos   | Suporte a ERC-20 customizados               |
| Multi-chain | Integração Base e Polygon via bridge Scroll |

---
