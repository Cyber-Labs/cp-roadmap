import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Understanding algorithms',
    imageUrl: 'img/undraw_solution_mindset.svg',
    description: (
      <>
        Understand all the algorithms and data structures well. You should be
        able to figure out when to use a particular data structure or algorithm.
        It's rightly said that "You don't have to be great to start, but you
        have to start to be great."
      </>
    ),
  },
  {
    title: 'Practice',
    imageUrl: 'img/undraw_Process.svg',
    description: (
      <>
        Practice the set of questions given to you, after each session. Make
        sure, you try them, by yourself. You should look at the editorial,
        hints, etc. only when you have given enough time to a question and
        still, you are not able to figure out the correct approach. Never say "I
        can't" because you can and you will, it takes practice to become
        perfect.
      </>
    ),
  },
  {
    title: 'Regular contests',
    imageUrl: 'img/undraw_exams.svg',
    description: (
      <>
        As, giving timed contests, helps to handle problems under pressure and
        boosts your time management skills. Give the contests on various online
        judges, regularly, as instructed <a href="./docs/roadmap/stl/implementation-and-regular-contests#regular-contests">here</a>. Try to <b>upsolve</b> 1
        or 2 problems after every contest.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Competitive Programming`}
      description="Competitive Programming roadmap and resources by cyberlabs. The complete roadmap for competitive programming, along with practice questions for each topic">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/roadmap/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
