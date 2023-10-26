import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/time_savings.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/write_code.svg').default,
    description: (
      <>
        Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a.
      </>
    ),
  },
  {
    title: 'Better Cloud Developer Experience',
    Svg: require('@site/static/img/cloud_developer.svg').default,
    description: (
      <>
        Placerat orci nulla pellentesque dignissim enim sit amet 
        venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam
      </>
    ),
  },
  {
    title: 'Templated Environments',
    Svg: require('@site/static/img/regulations.svg').default,
    description: (
      <>
        Standards - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: 'Cloud Acceleration',
    Svg: require('@site/static/img/person_go_fast.svg').default,
    // Svg: require('@site/static/img/cloud_accelerate.svg').default,
    description: (
      <>
        Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a.
      </>
    ),
  },
  {
    title: 'Powered by Backstage',
    Svg: require('@site/static/img/Backstage_Icon_Teal.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
