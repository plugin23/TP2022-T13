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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae quam tempus arcu luctus faucibus. Ut tincidunt elit id tellus molestie laoreet at sit amet quam. Quisque pretium consequat elit, et sodales ex consequat eu. Nam sed maximus dolor. Fusce a lorem mollis, tempor magna et, consectetur nulla. Mauris vitae dui at mi aliquam vehicula vel luctus mi.',
  },
  {
    logo: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae quam tempus arcu luctus faucibus. Ut tincidunt elit id tellus molestie laoreet at sit amet quam. Quisque pretium consequat elit, et sodales ex consequat eu. Nam sed maximus dolor. Fusce a lorem mollis, tempor magna et, consectetur nulla. Mauris vitae dui at mi aliquam vehicula vel luctus mi.',
  },
  {
    logo: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae quam tempus arcu luctus faucibus. Ut tincidunt elit id tellus molestie laoreet at sit amet quam. Quisque pretium consequat elit, et sodales ex consequat eu. Nam sed maximus dolor. Fusce a lorem mollis, tempor magna et, consectetur nulla. Mauris vitae dui at mi aliquam vehicula vel luctus mi.',
  },
];

//  {styles.firstImage:css.includes('xl')}
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
