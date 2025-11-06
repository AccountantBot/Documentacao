import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  caption: string;
  Icon: React.ComponentType<{className?: string}>;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Painel web & automações',
    caption: 'Controle granular sem abrir mão da autonomia do usuário.',
    Icon: ({className}) => (
      <span className={clsx(styles.featureEmoji, className)} role="img" aria-label="Automation">
        ⚙️
      </span>
    ),
    description: (
      <>
        Autorize contratos, defina limites de gasto e acompanhe o histórico
        on-chain em tempo real no dashboard.
      </>
    ),
  },
  {
    title: 'Nativo no Telegram',
    caption: 'Conversas viram fluxos de pagamento verificáveis.',
    Icon: ({className}) => (
      <span className={clsx(styles.featureEmoji, className)} role="img" aria-label="Chat">
        💬
      </span>
    ),
    description: (
      <>
        O bot entende linguagem natural, organiza despesas e coleta aprovações
        com reações, transformando chats em obrigações claras.
      </>
    ),
  },
  {
    title: 'Stack preparada para escala',
    caption: 'Scroll L2, NestJS, Prisma, Foundry e RainbowKit.',
    Icon: ({className}) => (
      <span className={clsx(styles.featureEmoji, className)} role="img" aria-label="Lightning">
        ⚡️
      </span>
    ),
    description: (
      <>
        Arquitetura modular com contratos gasless, API pública em roadmap e
        integrações prontas para tokens ERC-20.
      </>
    ),
  },
];

function Feature({title, caption, Icon, description}: FeatureItem) {
  return (
    <article className={styles.featureCard}>
      <Icon className={styles.featureIcon} />
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureCaption}>{caption}</p>
      <p className={styles.featureDescription}>{description}</p>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
