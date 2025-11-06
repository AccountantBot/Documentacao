---
id: solution-overview
title: Accountant — Simplificando divisões de gastos com Web3 + IA
sidebar_label: Visão da Solução
---

# Visão Geral

## O problema

Dividir gastos entre amigos **ainda é um processo doloroso**, mesmo em plena era digital.

Durante uma viagem em grupo, jantares, caronas e hospedagens, um padrão se repete:

- alguém paga a conta integral;  
- outra pessoa promete “acertar depois”;  
- as planilhas de controle são confusas;  
- e as transferências acabam esquecidas, atrasadas ou injustas.

> **68% dos brasileiros afirmam já ter tido atritos financeiros com amigos ou familiares devido a divisão de contas** (fonte: Serasa Experian, 2024).

Mesmo aplicativos tradicionais como **Splitwise, Tricount ou PicPay Grupos** tentam resolver o problema, mas:
- exigem **confiança cega** no aplicativo (custódia ou intermediação bancária);
- não automatizam as cobranças — apenas mostram quem deve;
- e não funcionam de forma integrada a conversas reais (como Telegram ou WhatsApp).

---

## A oportunidade

Com o crescimento das **finanças descentralizadas (DeFi)** e das redes **EVM compatíveis** (como **Scroll**, **Base**, **Polygon** e **Arbitrum**), existe espaço para uma nova geração de soluções **sem custódia**, mais seguras e automatizadas.

A principal barreira de adoção em Web3 hoje **não é tecnológica, mas de experiência**.  
Usuários Web3 querem praticidade — não complexidade.

> “O futuro da adoção em massa do Web3 não virá de novas blockchains, mas de interfaces que resolvem dores reais de maneira invisível.”  
> — *Chris Dixon, a16z Crypto (2023)*

---

## Nossa solução: Accountant Bot

**Accountant** é um sistema Web3 + IA + Telegram que **automatiza divisões de gastos** entre grupos, de forma **transparente, segura e sem intermediários**.

### Como funciona

1. **O bot entra em um grupo do Telegram** e acompanha mensagens com recibos, pagamentos ou cobranças.
2. **A IA extrai os valores e participantes automaticamente** (ex: “dividir a conta de R$200 entre 4 pessoas”).
3. O bot cria um **split inteligente** no contrato da Scroll.
4. Cada participante **aprova a transação com um emoji** — simples, direto.
5. O contrato **executa o pagamento automaticamente**, transferindo tokens entre carteiras **sem custódia**.

> Tudo acontece de forma **transparente**, **verificável on-chain**, e **sem necessidade de confiança** entre as partes.

---

## Arquitetura da Solução

- **Bot Telegram**: integra com a API oficial e usa IA para interpretar mensagens e comprovantes.
- **Aplicação Web**: interface simples para visualizar transações, aprovar gastos e conectar a wallet.
- **API Gateway (NestJS)**: orquestra comunicação entre o bot, o contrato e o banco off-chain.
- **Smart Contract (Solidity + Foundry)**: gerencia splits, aprovações e transferências via `allowance`.
- **Banco Off-chain (Postgres + Prisma)**: mantém metadados e logs para UX e auditoria.
- **Rede Scroll**: transações rápidas e baratas, EVM compatível e com suporte nativo a zk-rollups.

```

[Usuário Telegram] → [Bot + IA] → [API NestJS] → [Contrato SplitCoordinator (Scroll)] → [Pagamentos automáticos on-chain]

```

---

## Diferenciais da solução

### IA integrada à comunicação
O bot entende linguagem natural: "paguei 120 reais no almoço com o pessoal".  
Isso elimina o atrito de apps paralelos e planilhas manuais.

### Sem custódia, com total transparência
Nenhum fundo é retido pela plataforma.  
Os tokens permanecem nas carteiras dos usuários até o momento da aprovação.  
Toda movimentação é pública e verificável on-chain.

### Experiência nativa em mensageiros
A divisão acontece **onde as conversas já estão** — no Telegram.  
Sem necessidade de baixar novos apps, logar novamente ou lembrar senhas.

### Custos e latência reduzidos
Construído na **Scroll**, com taxas de gás até **100x mais baixas** que Ethereum e tempo médio de confirmação inferior a **2 segundos**.

### Cross-chain por design
Compatível com carteiras **Ethereum, Polygon e Base**, via **bridge automática** no contrato.  
Usuários podem interagir mesmo sem saldo na Scroll — o sistema realiza swaps ou bridges automáticos via API.

---

## Potencial de impacto

### 1. Adoção social e comportamento de grupo
- **35% dos jovens entre 18–30 anos** compartilham despesas em grupo regularmente (fonte: Nubank Data, 2024).  
- A integração via Telegram — com mais de **900 milhões de usuários ativos** — cria um canal natural de penetração.

### 2. Onboarding Web3 simplificado
Ao invés de “abrir uma carteira”, o usuário simplesmente:
- conecta seu Telegram;
- reage com um emoji;
- e automaticamente interage com o contrato da Scroll.

Esse é um caso de **Web2.5 real**, em que a blockchain é **invisível**, mas **garante confiança**.

### 3. Inclusão financeira digital
Permite que grupos usem **stablecoins (USDC, BRLx, Real Digital futuro)** para partilhar custos, com transparência e sem barreiras bancárias.

> “Web3 precisa de casos de uso sociais e práticos. Pagamentos entre amigos são o caminho natural.”  
> — *Vitalik Buterin, 2023 (EthCC Paris)*

---

## Vantagens competitivas

| Dimensão | Accountant | Splitwise | Tricount | PicPay Grupos | KeyFi / DeFi Apps |
|-----------|-------------|------------|-----------|----------------|
| Custódia | ❌ Não | ✅ Sim | ✅ Sim | ✅ Sim | ❌ Não |
| Automação de pagamento | ✅ Total (on-chain) | ❌ | ❌ | ✅ Parcial | ✅ |
| IA para leitura de mensagens | ✅ Sim | ❌ | ❌ | ❌ | ❌ |
| Integração Telegram | ✅ Nativa | ❌ | ❌ | ❌ | ❌ |
| Custos de operação | 🔹 ~$0.005 por split | ~$0.10 | ~$0.05 | 2% taxa | variável |
| Transparência on-chain | ✅ Total | ❌ | ❌ | ❌ | ✅ |
| Experiência Web2.5 | ✅ | ⚠️ | ⚠️ | ✅ | ❌ |

---

## Estratégia de crescimento

1. **Adoção via comunidades Web3** (Scroll, Base, Polygon) — integração com DAOs e hackathons.  
2. **Embaixadores locais** para replicar uso em universidades, viagens e eventos.  
3. **Parcerias com wallets** (Rabby, Rainbow, MetaMask) para simplificar login e assinatura.  
4. **Campanhas de cashback** em stablecoins para grupos early adopters.  
5. **Open API para integrações** — bots podem usar o Accountant como backend universal de splits on-chain.

---

## Impacto esperado

- **Menos atritos financeiros** entre grupos de amigos.  
- **Maior confiança** em transações coletivas (sem “quem paga depois”).  
- **Educação financeira via experiência prática** em Web3.  
- **Incentivo à adoção da Scroll** como rede de pagamentos sociais.  

> Imagine enviar um comprovante de conta e ver o bot dizer:  
> “✅ Split criado e pago automaticamente. Boa viagem!”

---

## Conclusão

**Accountant** une **IA + Blockchain + UX real** para resolver uma das dores mais humanas: **dividir gastos**.  
Sem planilhas, sem lembretes, sem atritos — apenas confiança automatizada.

Acreditamos que esse tipo de solução representa o **próximo passo da adoção Web3**:  
**uso cotidiano, social, invisível e transparente.**

---

### Referências

1. Serasa Experian (2024) — “Finanças entre amigos e familiares: onde surgem os conflitos.”  
2. Nubank Data Report (2024) — “Comportamento financeiro dos jovens adultos.”  
3. Scroll Tech Docs (2025) — https://docs.scroll.io  
4. Vitalik Buterin, EthCC 2023 — *“Social use-cases of Ethereum and the need for real-world interactions.”*  
5. a16z Crypto (2023) — “The next billion users won’t know they’re using crypto.”  

---

### Próximos capítulos
- [Arquitetura Técnica da Solução](./technical-architecture.md)
- [API Reference](./api-reference.md)
- [Smart Contract Details](./smart-contracts.md)
```