import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Grid from '@mui/material/Grid';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    {/* <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: `url('/img/bg_splash.png')`}} > */}
        {/* <div className='bg-splash'>
          <img src={useBaseUrl('img/bg_splash.svg')} />
        </div> */}
      <Grid container spacing={3} className="perspective-container">
        <Grid item xs={6} className="hero hero--primary bgimg"/>
        <Grid item xs={5}>
          <Grid container direction="column" spacing={2} style={{display: 'flex'}}>
            <Grid item  className="hero__subtitle tagline" style={{display: 'flex', alignItems: 'left', paddingRight: 50}}>
              <p>{siteConfig.tagline}</p>
            </Grid>
            {/* <Grid item style={{alignItems: 'left', textAlign: "center", paddingRight: 50}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas elementum venenatis nisl sagittis mattis. Suspendisse.
              </p>
            </Grid> */}
          </Grid>
          <Grid item xs={3}/>
        </Grid>
      </Grid>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Homepage for the Orchestrate Platforms and Applications (OPA) on AWS solution">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
