---
id: intro
title: Visão Geral do Projeto
sidebar_label: Introdução
---

# AccountantBot

> A forma Web3 de dividir despesas entre amigos — **sem taxas de gas**, **sem fricção**, **sem custódia**.  
> Construído na **Scroll**, com UX de mensageiro e automação inteligente via IA.

---

## Contexto

Dividir contas entre amigos nunca foi tão simples — ou tão caótico.  
Planilhas, prints, lembretes e mensagens intermináveis são parte do cotidiano de grupos em viagens, eventos ou repúblicas.

Mas em um mundo cada vez mais digital e descentralizado, por que **ainda não existe uma maneira autônoma e transparente** de fazer isso?

O **AccountantBot** nasce justamente dessa dor:  
tornar a divisão de despesas **automática, confiável e sem intermediários**, usando o poder da blockchain — **sem que o usuário perceba** que está usando blockchain.

---

## A Ideia

O AccountantBot combina:
- a **simplicidade do Telegram** com  
- a **segurança da Scroll** (camada 2 do Ethereum) e  
- a **inteligência de automação via IA**.

Tudo isso em uma experiência de uso tão fluida quanto conversar com um amigo.

---

## O Que é o AccountantBot?

O **AccountantBot** é um bot integrado ao Telegram que permite:
1. Criar divisões de gastos em grupo (ex: restaurante, viagem, evento);
2. Registrar os participantes e valores via linguagem natural;
3. Obter aprovações sem gas (via EIP-712);
4. Liquidar automaticamente os valores via contrato inteligente.

A interface web atua como **painel de controle**, onde o usuário:
- autoriza o contrato,  
- define limites de gasto,  
- conecta sua conta do Telegram,  
- e acompanha o histórico de transações.

---

## Como Funciona

1. **Usuário adiciona o bot** ao grupo do Telegram.  
2. **Envia uma mensagem**, como “vamos dividir o almoço igualmente”.  
3. O bot interpreta a mensagem, calcula e exibe o resumo.  
4. Cada pessoa **aprova via reação**.  
5. Quando todos aprovam, o **contrato na Scroll executa** o pagamento.  
6. O **painel web** reflete o histórico on-chain em tempo real.

> Tudo isso sem o usuário pagar taxas de gas — o backend faz o relaying automático.

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-------------|
| **Frontend** | Next.js + RainbowKit + Viem |
| **Backend** | NestJS + Prisma + PostgreSQL |
| **Smart Contracts** | Solidity + Foundry (Scroll) |
| **Bot** | Telegram Bot API + Nest Webhook |
| **Blockchain** | Scroll L2 (zkEVM) |
| **Assinaturas** | EIP-712 gasless approvals |
| **AI Layer (futuro)** | NLP para entendimento contextual de mensagens |

---

## Por Que Web3?

- **Transparência:** cada pagamento é rastreável e verificável.  
- **Segurança:** os fundos nunca deixam a wallet sem autorização.  
- **Interoperabilidade:** funciona com qualquer token ERC-20 (USDC, BRLx, DAI).  
- **Escalabilidade:** Scroll garante transações rápidas e baratas.  
- **Automação:** elimina burocracia e risco de inadimplência.

---

## Diferenciais

| Ponto | Descrição |
|--------|------------|
| **Zero Custódia** | O contrato apenas coordena, nunca segura fundos. |
| **Gasless UX** | Usuário assina mensagens, o relayer executa. |
| **Integração Telegram** | Interação natural com grupos e reações. |
| **IA Conversacional (roadmap)** | O bot entende e reage a linguagem humana. |
| **API Pública (roadmap)** | Qualquer app poderá integrar a lógica de split. |

---

## Estrutura da Documentação

| Seção | Conteúdo |
|-------|-----------|
| [Modelo de Negócio](./3-business-model.md) | Estratégia de monetização, público e receita |
| [Experiência do Usuário](./4-user-experience.md) | Personas, jornada, decisões de design |
| [Arquitetura Técnica](./5-technical-architecture.md) | Backend, API, contratos e integração |
| [Roadmap e Visão Futura](./6-roadmap.md) | Plano de evolução e metas até 2030 |

---

## Nossa Visão

> “Tornar o Web3 invisível — e a confiança, automática.”

Acreditamos que o futuro das finanças colaborativas está nas **interfaces conversacionais** que unem automação, transparência e usabilidade.

O **AccountantBot** é o primeiro passo dessa jornada:
uma ponte entre **o mundo social e o mundo financeiro descentralizado.**

---

### Repositórios e Links

| Item | Link |
|------|------|
| Repositório principal | [github.com/accountantbot](https://github.com/accountantbot) |
| Smart Contracts | `/contracts` (Foundry / Solidity) |
| Backend | `/api` (NestJS / Prisma) |
| Frontend | `/web` (Next.js / RainbowKit) |
| Bot | `/bot` (NestJS / Telegram API) |

---

> “Do grupo do Telegram direto para o contrato inteligente.”  
> — *AccountantBot Team*
