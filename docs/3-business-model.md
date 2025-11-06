---
id: business-model
title: Modelo de Negócio e Monetização
sidebar_label: Negócio e Monetização
---

# Modelo de Negócio — AccountantBot

## 1. Contexto de Mercado

A economia de grupos e a divisão de despesas cresceram exponencialmente com o aumento de **viagens coletivas, coworkings, eventos e finanças colaborativas**.  
Ao mesmo tempo, o mercado Web3 começa a buscar **casos de uso cotidianos**, que gerem **confiança e utilidade real** — e não apenas especulação.

> O mercado global de “social payments” deve ultrapassar **US$ 3 trilhões até 2030**  
> *(fonte: Allied Market Research, 2024)*

### Tendências que convergem para o AccountantBot

| Tendência | Oportunidade |
|------------|--------------|
| Crescimento dos apps de finanças sociais | Geração Z quer dividir e pagar em grupo com transparência |
| Adoção de stablecoins e redes L2 | Viabiliza microtransações com custo quase zero |
| Popularização de bots (Telegram / Discord) | Nova interface universal de automação financeira |
| Economia da confiança | Blockchain permite provas públicas de pagamento e aprovação |

---

## 2. Proposta de Valor

O **AccountantBot** é o **primeiro bot Web3 de divisão de despesas com UX de mensageiro e execução automatizada on-chain**.

> “Do grupo do Telegram direto para o contrato inteligente — sem precisar saber o que é blockchain.”

### Benefícios-Chave

- **Conversacional** — resolve tudo via Telegram  
- **Gasless** — aprovações e execuções sem custo para o usuário  
- **Sem custódia** — tokens nunca saem da carteira sem autorização  
- **Social + Financeiro** — conecta pessoas e elimina atritos  
- **Inteligente** — IA entende linguagem natural e automatiza os splits  

---

## 3. Modelo de Monetização

### 3.1. Estrutura de Receita

| Fonte | Descrição | Estágio |
|-------|------------|---------|
| **1. Taxa de Serviço (B2C)** | Pequena taxa sobre splits automáticos realizados (ex: 0.5% por transação) | MVP / curto prazo |
| **2. API-as-a-Service (B2B)** | Integração para fintechs, apps de eventos e wallets usarem o bot como backend de divisão on-chain | médio prazo |
| **3. White Label SaaS** | Versão customizada para empresas (ex: viagens corporativas, eventos, comunidades cripto) | médio prazo |
| **4. Cashback e Parcerias** | Receita indireta por parcerias com stablecoins, exchanges e programas de fidelidade | longo prazo |
| **5. Tokenomics (futuro)** | Token de governança + pontos de reputação para early users e power users | longo prazo |

---

### 3.2. Unidade Econômica (MVP)

#### Suposições
- 100 mil usuários ativos / ano  
- Ticket médio de R$ 200 por split  
- 3 splits médios por usuário / mês  
- Taxa de serviço: 0,5%

#### Receita anual estimada

```

100.000 usuários x 3 splits/mês x 12 meses = 3.6M splits/ano
3.6M splits x R$200 = R$720M movimentados
0.5% fee → R$3.6M de receita bruta anual

```

> Margem bruta esperada: **~80%**, dado o baixo custo de infraestrutura em L2.

---

## 4. Go-to-Market Strategy

### 4.1. Público-Alvo Inicial

1. **Universitários e jovens adultos (18–30 anos)**  
   — costumam dividir viagens, festas, aluguéis e deliverys.  
2. **Comunidades Web3 / cripto early adopters**  
   — entusiastas da Scroll, Base e Polygon.  
3. **Fintechs e apps de eventos**  
   — integração via API para experiência Web3 invisível.

---

### 4.2. Estratégia de Lançamento

| Fase | Ação | Canal |
|------|------|--------|
|  MVP | Lançamento no Telegram e Scroll Sepolia | Comunidades Web3, hackathons |
|  Beta Público | Parcerias com DAOs e fintechs estudantis | Discord / Twitter / Telegram |
| Escala | Distribuição via Telegram Store e integração em wallets | Scroll Ecosystem, Wallet SDKs |

---

### 4.3. Estratégia de Aquisição

| Canal | Ação |
|--------|------|
| **Social Proof** | Casos de uso reais compartilhados em comunidades |
| **Referral Program** | Recompensa para quem convidar amigos (em stablecoins) |
| **Influenciadores Web3** | Campanhas com microinfluencers cripto e tech |
| **Eventos e hackathons** | Demonstrações em feiras, universidades e DAOs |
| **Parcerias Scroll** | Incentivos do ecossistema L2 para usuários early |

---

## 5. Vantagem Competitiva

###  Tecnológica
- Uso de **EIP-712** para assinaturas gasless e seguras.  
- Execução 100% **non-custodial**.  
- Backend escalável (NestJS + PostgreSQL + Scroll RPC).  
- **Infra Web2.5:** UX acessível com blockchain invisível.

###  Estratégica
- Integração nativa com Telegram (900M+ usuários).  
- Time focado em UX e acessibilidade Web3.  
- API aberta para uso B2B (fintechs, wallets e DAOs).

###  Defensabilidade
- Contratos e arquitetura open source.  
- Marca + UX proprietária (linguagem do bot, tom conversacional).  
- Rede de usuários integrada a Telegram — alto switching cost.

---

## 6. Roadmap

| Fase | Meta | Status |
|------|------|--------|
| **Q4 2025** | MVP funcional (Scroll + Telegram + Painel Web) | Concluído |
| **Q1 2026** | Lançamento Beta Público com cashback |  Em desenvolvimento |
| **Q2 2026** | API pública para fintechs e wallets |  Planejado |
| **Q3 2026** | Programa de fidelidade com pontos (Accountant Points) |  Planejado |
| **Q4 2026** | Suporte multichain (Base, Polygon) |  Planejado |
| **2027+** | Token de governança + DAO de usuários | Futuro |

---

## 7. Métricas-Chave (KPIs)

| Indicador | Meta | Descrição |
|------------|------|-----------|
| **Tx Processadas** | 100k/mês | Volume total de splits liquidados |
| **Usuários ativos** | 50k/mês | Contas conectadas Telegram + Wallet |
| **Conversão free → premium** | 12% | Taxa de adesão à versão com cashback |
| **Ticket médio split** | R$ 180 | Valor médio das divisões |
| **NPS (Satisfação)** | > 80 | Medido via Telegram feedback loop |

---

## 8. Parcerias Estratégicas

| Parceiro | Papel |
|-----------|-------|
| **Scroll** | Rede principal (L2 zkRollup) |
| **Rabby / MetaMask / Rainbow** | Integração com carteiras gasless |
| **Telegram Open Platform** | Canal de distribuição nativo |
| **Fintechs universitárias / startups Web3** | Parcerias de cashback e engajamento |
| **Provedores de stablecoins (USDC, BRLx)** | Liquidez para splits automáticos |

---

## 9. Projeção de Crescimento

| Ano | Usuários | Splits/ano | Receita Estimada |
|------|-----------|-------------|------------------|
| 2025 | 10.000 | 360.000 | R$ 300 mil |
| 2026 | 100.000 | 3.6M | R$ 3.6 milhões |
| 2027 | 500.000 | 18M | R$ 18 milhões |
| 2028 | 1 milhão | 36M | R$ 36 milhões |

> Crescimento projetado com base em adoção de Telegram + redes L2 e expansão via API B2B.

---

## 10. Impacto e Visão de Futuro

O **AccountantBot** redefine como grupos lidam com dinheiro:
- elimina intermediários bancários,
- traz transparência total,
- e insere o usuário comum na economia Web3 — **sem que ele precise saber o que é Web3**.

