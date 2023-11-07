import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { Feature, FeatureItem } from './HomepageFeature';

type FeatureGroup = {
  direction: "ltr" | "rtl";
  FeatureItems: FeatureItem[]
}

const EnterpriseFeatureList: FeatureItem[] = [
  {
    title: 'Single Pane of Glass',
    customTextStyle:{minHeight:'350px'},
    Svg: require('@site/static/img/dashboard.svg').default,
    description: (
      <>
       Provision and monitor all environments, resources, and applications in one place
      </>
    ),
  },
  {
    title: 'Enterprise Ready',
    customTextStyle:{minHeight:'350px'},
    Svg: require('@site/static/img/global_enterprise.svg').default,
    description: (
      <>
       Built with common enterprise patterns: self-managed provisioning, compliant, SCM for IAC and policy statements, and automated operations via pipelines
       </>
    ),
  },
  {
    // title: 'Pleasurable Developer Experience',
    title: 'Empower Your Developers',
    customTextStyle:{minHeight:'350px'},
    Svg: require('@site/static/img/cloud_developer.svg').default,
    description: (
      <>
        Return to the classic days of writing application code on your local environment, you won’t even notice it’s AWS!
      </>
    ),
  },
];

const opaDescription : FeatureItem[] = [
  {
    title: 'OPA on AWS',
    Svg: require('@site/static/img/regulations.svg').default,
    noSVG:true,
    minHeight:'300px',
    customTextStyle:{fontSize:'24px', textAlign:'left', maxWidth:'65%', margin:'auto'},
    description: (
      <>
       <b>Orchestrate Platforms and Applications (OPA) on AWS </b>is an open source reference implementation that ties together AWS services into an enterprise-ready offering. By abstracting AWS services, OPA on AWS allows application developers to focus on what they do best – write application logic! <br/> <br/> Platform engineering teams can promote best practices at-scale, while providing a productive and pleasurable experience for non-cloud developers
      </>
    ),
  },
]


const SpeedFeatureList: FeatureItem[] = [
  {
    title: 'Templated Environments',
    customTextStyle:{minHeight:'350px'},
    Svg: require('@site/static/img/regulations.svg').default,
    description: (
      <>
        Includes out of the box environments, applications, patterns, and resources and add more easily
      </>
    ),
  },
  {
    title: 'Cloud Acceleration',
    customTextStyle:{minHeight:'350px'},
    Svg: require('@site/static/img/person_go_fast.svg').default,
    // Svg: require('@site/static/img/cloud_accelerate.svg').default,
    description: (
      <>
        No cloud skills? No problem! Build applications on AWS without knowing AWS
      </>
    ),
  },
  {
    // title: 'Powered by Backstage.io',
    title: 'Pluggable Architecture',
    customTextStyle:{minHeight:'350px'},
    Svg: require('@site/static/img/multi-feature.svg').default,
    description: (
      <>
        Built on the CNCF Backstage developer portal, enjoy 100’s of plugins to customize the developer experience
      </>
    ),
  },
];

const ScaleFeatureList: FeatureItem[] = [
  {
    title: 'Increase Productivity, Reduce Costs',
    Svg: require('@site/static/img/time_savings.svg').default,
    description: (
      <>
        Save time and money by scaling your cloud talent and increasing productivity across the board
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/write_code.svg').default,
    description: (
      <>
       Build applications easy, fast, and at scale while maintaining your security standards and guardrails
      </>
    ),
  },
  {
    title: 'Scale Development',
    Svg: require('@site/static/img/scale.svg').default,
    description: (
      <>
       Build hundreds of apps on hundreds of environments for hundreds of teams - on AWS cloud
       </>
    ),
  },
];

const FeatureList: FeatureItem[] = [
  {
    title: 'Single pane of glass',
    Svg: require('@site/static/img/time_savings.svg').default,
    description: (
      <>
       Provision and monitor all environments, resources, and applications in one place.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/write_code.svg').default,
    description: (
      <>
       Build applications easy, fast, and at scale while maintaining your security standards and guardrails.
      </>
    ),
  },
  {
    title: 'Pleasurable Developer Experience',
    Svg: require('@site/static/img/cloud_developer.svg').default,
    description: (
      <>
        Return to the classic days of writing application code on your local environment, you won’t even notice it’s AWS!
      </>
    ),
  },
  {
    title: 'Templated Environments',
    Svg: require('@site/static/img/regulations.svg').default,
    description: (
      <>
        Includes out of the box environments, applications, patterns, and resources and add more easily.
      </>
    ),
  },
  {
    title: 'Cloud Acceleration',
    Svg: require('@site/static/img/person_go_fast.svg').default,
    // Svg: require('@site/static/img/cloud_accelerate.svg').default,
    description: (
      <>
        No cloud skills? No problem! Build applications on AWS without knowing AWS.
      </>
    ),
  },
  {
    title: 'Powered by Backstage.io',
    Svg: require('@site/static/img/Backstage_Icon_Teal.svg').default,
    description: (
      <>
        Enjoy the 100+ of available plugins, and maintain your own tooling and preferences, while enjoying all the advantages that AWS has to offer.
      </>
    ),
  },
  {
    title: 'increase productivity, reduce costs',
    Svg: require('@site/static/img/time_savings.svg').default,
    description: (
      <>
        Save time and money by scaling your cloud talent and increasing productivity across the board
      </>
    ),
  },
  {
    title: 'Enterprise-ready',
    Svg: require('@site/static/img/time_savings.svg').default,
    description: (
      <>
       Built with common enterprise patterns: self-managed provisioning, compliant, SCM for IAC and policy statements, and automated operations via pipelines      
       </>
    ),
  },
  {
    title: 'Scale Development',
    Svg: require('@site/static/img/time_savings.svg').default,
    description: (
      <>
       Build hundreds of apps on hundreds of environments for hundreds of teams - on AWS cloud
       </>
    ),
  },
];

const opaImageList : FeatureItem [] = [
  {
    title: '',
    Svg: require('@site/static/img/dashboard.svg').default,
    noSVG: true,
    minHeight:'570px',
    description: (
      <>
       <span class="imageSubtitle">AWS Software catalog in a click of a button </span> <img width={'100%'} src="img/opa/opa-screenshot11.png"/>
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/write_code.svg').default,
    noSVG: true,
    minHeight:'570px',
    description: (
      <>
        <span class="imageSubtitle">Scale the use of AWS Services using templates</span> <img width={'100%'} src="img/opa/opa-screenshot22.png"/>
      </>
    ),
  },
  {
    // title: 'Pleasurable Developer Experience',
    title: '',
    Svg: require('@site/static/img/cloud_developer.svg').default,
    noSVG: true,
    minHeight:'570px',
    description: (
      <>
      <span class="imageSubtitle">Manage your applications using a single interface </span> <img width={'100%'} src="img/opa/opa-screenshot33.png"/>
      </>
    ),
  },
]

const FeatureRowList: FeatureGroup[] = [
  {
    direction: "ltr",
    FeatureItems: EnterpriseFeatureList,
  },
  {
    direction: "ltr",
    FeatureItems: opaDescription,
  },
  {
    direction: "ltr",
    FeatureItems: SpeedFeatureList,
  },
  {
    direction: "ltr",
    FeatureItems: opaImageList,
  },
  {
    direction: "ltr",
    FeatureItems: ScaleFeatureList,
  },
]

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      {FeatureRowList.map((props, idx1) => (
        <section key={idx1} className={clsx("row", styles.features, styles.featureRow)}>
          {props.FeatureItems.map((props, idx2) => (
            <Feature key={idx2} {...props} />
          ))}
        </section>
      ))}
    </div>
  );
}
