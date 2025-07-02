import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Update feature items to match NoteX AI's real features
const FeatureList = [
  {
    title: 'AI-powered Notes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Instantly summarize, translate, and enhance your notes with powerful AI tools. Create flashcards, mindmaps, quizzes, podcasts, and more with a single tap.
      </>
    ),
  },
  {
    title: 'Multi-language Support',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        NoteX AI supports 13+ interface languages, 50+ transcription languages, and translation in over 100 languages. Take notes in your language, anywhere.
      </>
    ),
  },
  {
    title: 'Smart Organization',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Organize notes with folders, filters, and bulk actions. Effortlessly search, sort, and manage all your content in one place with a modern, intuitive interface.
      </>
    ),
  },
];

function Feature({title, Svg, description}: {title: string; Svg: React.ComponentType<React.ComponentProps<'svg'>>; description: ReactNode;}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
