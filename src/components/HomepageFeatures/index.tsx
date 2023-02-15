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
    title: '传道',
    Svg: require('@site/static/img/cncf.svg').default,
    description: (
      <>
        <p>
          乞火不若取燧，<br/>
          寄汲不若凿井。<br/>
          ——《淮南子》
        </p>
      </>
    ),
  },
  {
    title: '授业',
    Svg: require('@site/static/img/kubernetes.svg').default,
    description: (
      <>
          业精于勤，荒于嬉；<br/>
          行成于思，毁于随。<br/>
          ——《进学解》
      </>
    ),
  },
  {
    title: '解惑',
    Svg: require('@site/static/img/stackoverflow.svg').default,
    description: (
      <>
        <p>
          不贵其师，不爱其资；<br/>
          虽智大迷，是谓要妙。<br/>
          ——《道德经》
        </p>
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
