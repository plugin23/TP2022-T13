import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type MemberItem = {
  css: string;
  title: string;
  role: string;
  imageUrl: string;
};

type ProjectItem = {
  logo: string;
  description: string;
};

const TeamList: MemberItem[] = [
  {
    css: 'col-xl',
    title: 'Ing. Jakub Dubec',
    role: 'Product Owner',
    imageUrl: require('@site/static/img/kubod.jpeg').default,
  },
  {
    css: 'col col--6',
    title: 'Bc. Rastislav Balcerčík',
    role: 'Project Manager',
    imageUrl: require('@site/static/img/rasto.jpeg').default,
  },
  {
    css: 'col col--6',
    title: 'Bc. Juraj Valiček',
    role: 'Web Developer',
    imageUrl: require('@site/static/img/juro1.jpeg').default,
  },
  {
    css: 'col col--6',
    title: 'Bc. Jakub Sorád',
    role: 'Software Developer & Tester',
    imageUrl: require('@site/static/img/kubo.jpeg').default,
  },
  {
    css: 'col col--6',
    title: 'Bc. Róbert Szabó',
    role: 'Software Developer',
    imageUrl: require('@site/static/img/robo.jpeg').default,
  },
  {
    css: 'col col--6',
    title: 'Bc. Daniel Cok',
    role: 'Software Developer',
    imageUrl: require('@site/static/img/dano.jpeg').default,
  },
  {
    css: 'col col--6',
    title: 'Bc. Matej Lánik',
    role: 'Software Developer',
    imageUrl: require('@site/static/img/mato.jpeg').default,
  },
];

const ProjectList: ProjectItem[] = [
  {
    logo: '',
    description: 'Cieľom projektu je navrhnúť a podľa požiadaviek používateľov digitálnej knižnice Elvíra implementovať zabezpečenú verziou PDF zobrazovača, ktorý ponúkne používateľovi príjemné používateľské rozhranie s bežnými funkcionalitami pre manipuláciu s dokumentom.',
  },
  {
    logo: '',
    description: 'PDF Viewer bude obohatený o možnosť generovania citácií, editácie a zdieľania podľa požiadaviek čítateľa. Hotová aplikácia bude open-source riešenie dostupné ako npm balíček a implementovaná tak aby bola použiteľná na webe postavenom najmodernejšími frameworkami a knižnicami ako napr. React, Vue alebo Angular.',
  },
];


function Member({css, title, role, imageUrl}: MemberItem) {
  return (
    <div className={clsx(`${(css.includes('xl')) ? 'col-xl-12': 'col col--6'}`)}>
      <div className="text--center">
        <img src={imageUrl} className={clsx(`${(css.includes('xl')) ? styles.firstImage: styles.imageStyle}`)} />
      </div>
      <div className="text--center padding-horiz--md margin--md">
        <h2>{title}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}

function Point({logo, description}: ProjectItem) {
  return (
    <div className={clsx('col col--4', styles.rowwidth)}>
      <div className="text--center">
        <img src={logo} className={clsx()} />
      </div>
      <div className="text--center padding-horiz--md margin--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <p><h1 className="hero__title">O projekte</h1></p>
        <div className={clsx('row justify-content-center', styles.rowwidth)}>
          {ProjectList.map((props, idx) => (
              <Point key={idx} {...props} />
            ))}
        </div>
        <p><h1 className="hero__title">Náš tím</h1></p>
        <div className="row">
          {TeamList.map((props, idx) => (
            <Member key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
