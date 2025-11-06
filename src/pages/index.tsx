import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Finanças colaborativas Web3</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title ?? 'AccountantBot'}
          </Heading>
          <p className={styles.heroSubtitle}>
            Divida despesas com o seu grupo sem planilhas, sem fricção e sem
            taxas de gas. Uma experiência de chat com liquidação automática na
            Scroll.
          </p>
          <ul className={styles.heroHighlights}>
            <li>Assinaturas gasless via EIP-712</li>
            <li>Bot nativo no Telegram com UX conversacional</li>
            <li>Contratos inteligentes controlam o fluxo, nunca os fundos</li>
          </ul>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Conheça a visão geral
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.buttonGhost)}
              to="/docs/6-roadmap">
              Veja o roadmap
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ValueProps(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Por que o AccountantBot importa?</Heading>
          <p>
            Automatizamos a divisão de contas para grupos que vivem no Telegram,
            unindo transparência on-chain com uma experiência familiar de chat.
          </p>
        </div>
        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <Heading as="h3" className={styles.cardTitle}>
              Gasless por padrão
            </Heading>
            <p>
              Os usuários assinam mensagens EIP-712 e o relayer executa tudo na
              Scroll. Nada de taxas surpresa — só confirme e pronto.
            </p>
          </article>
          <article className={styles.card}>
            <Heading as="h3" className={styles.cardTitle}>
              Zero custódia
            </Heading>
            <p>
              Os contratos inteligentes coordenam o fluxo sem tocar nos fundos.
              Confiança matemática, autonomia total para o usuário.
            </p>
          </article>
          <article className={styles.card}>
            <Heading as="h3" className={styles.cardTitle}>
              IA no circuito
            </Heading>
            <p>
              Compreensão de linguagem natural para interpretar comandos como
              “vamos dividir o jantar igualmente” e aplicar a lógica de split.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function HowItWorks(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Como tudo acontece</Heading>
          <p>Do grupo do Telegram direto para os contratos inteligentes.</p>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.timelineStep}>1</span>
            <div>
              <Heading as="h3" className={styles.timelineTitle}>
                Crie o grupo e convide o bot
              </Heading>
              <p>
                O AccountantBot participa da conversa e entende a intenção do
                gasto a partir de linguagem natural.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineStep}>2</span>
            <div>
              <Heading as="h3" className={styles.timelineTitle}>
                Todos aprovam sem pagar gas
              </Heading>
              <p>
                Cada participante assina uma mensagem off-chain. Reações e
                comandos confirmam os valores que o contrato irá liquidar.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineStep}>3</span>
            <div>
              <Heading as="h3" className={styles.timelineTitle}>
                Liquidação automática na Scroll
              </Heading>
              <p>
                O backend relaya a transação, atualiza o painel web e deixa tudo
                registrado on-chain, sem custódia centralizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubLinks(): ReactNode {
  const repos = [
    {
      name: 'AccountantBot (Org)',
      href: 'https://github.com/AccountantBot',
      description: 'Hub com projetos, issues públicas e discussões da comunidade.',
    },
    {
      name: 'Backend',
      href: 'https://github.com/AccountantBot/AccountantBot-Backend',
      description: 'API NestJS + Prisma responsável por automações e relaying.',
    },
    {
      name: 'Frontend',
      href: 'https://github.com/AccountantBot/Frontend',
      description: 'Dashboard web com Next.js, RainbowKit e integração Web3.',
    },
    {
      name: 'Documentação',
      href: 'https://github.com/AccountantBot/Documentacao',
      description: 'Este site Docusaurus com visão, arquitetura e roadmap.',
    },
    {
      name: 'Blockchain',
      href: 'https://github.com/AccountantBot/Blockchain',
      description: 'Contratos inteligentes em Solidity + Foundry para Scroll.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Código aberto e comunidade</Heading>
          <p>
            Explore os repositórios e contribua com discussões, issues e PRs para
            acelerar o roadmap do AccountantBot.
          </p>
        </div>
        <div className={styles.repoGrid}>
          {repos.map((repo) => (
            <Link
              key={repo.href}
              className={styles.repoCard}
              to={repo.href}
              target="_blank"
              rel="noopener noreferrer">
              <span className={styles.repoName}>{repo.name}</span>
              <span className={styles.repoDescription}>{repo.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocsCTA(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Pronto para explorar?</Heading>
          <p>
            A documentação aprofunda a visão de negócio, decisões de UX e
            arquitetura técnica do AccountantBot.
          </p>
        </div>
        <div className={styles.linksGrid}>
          <Link className={styles.docLink} to="/docs/2-solution">
            Estratégia de solução
          </Link>
          <Link className={styles.docLink} to="/docs/3-business-model">
            Modelo de negócio
          </Link>
          <Link className={styles.docLink} to="/docs/4-user-experience">
            Experiência do usuário
          </Link>
          <Link className={styles.docLink} to="/docs/5-technical-architecture">
            Arquitetura técnica
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title ?? 'AccountantBot'}
      description="Automação para dividir despesas com liquidação on-chain na Scroll.">
      <HomepageHeader />
      <main>
        <ValueProps />
        <HomepageFeatures />
        <HowItWorks />
        <GitHubLinks />
        <DocsCTA />
      </main>
    </Layout>
  );
}
