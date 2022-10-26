import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Logo from '@site/static/img/T16.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('row', styles.rowheight)}>
          <div className='col col--5'>
            <Logo className={styles.logo}/>
          </div>
          <div className={clsx('col', styles.titlecol)}>
            <h2 className={styles.title}>ELVÍRA</h2>
            <h2 className={styles.subtitle}>Digitálna knižnica</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Elvíra"
      description="Tímový projekt tímu T16">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
