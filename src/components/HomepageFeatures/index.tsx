import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type MemberItem = {
  title: string;
  role: string;
  imageUrl: string;
};

const TeamList: MemberItem[] = [
  {
    title: "Bc. Rastislav Balcerčík",
    role: "Project Manager",
    imageUrl: require("@site/static/img/rasto.jpeg").default,
  },
  {
    title: "Bc. Juraj Valiček",
    role: "Frontend Developer",
    imageUrl: require("@site/static/img/juro1.jpeg").default,
  },
  {
    title: "Bc. Jakub Sorád",
    role: "Backend Developer & Tester",
    imageUrl: require("@site/static/img/kubo.jpeg").default,
  },
  {
    title: "Bc. Róbert Szabó",
    role: "Backend Developer",
    imageUrl: require("@site/static/img/robo.jpeg").default,
  },
  {
    title: "Bc. Daniel Cok",
    role: "Full Stack Developer",
    imageUrl: require("@site/static/img/dano.jpeg").default,
  },
  {
    title: "Bc. Matej Lánik",
    role: "Frontend Developer",
    imageUrl: require("@site/static/img/mato.jpeg").default,
  },
];

function Member({ title, role, imageUrl }: MemberItem) {
  return (
    <div className={"col col--6"}>
      <div className="text--center">
        <img src={imageUrl} className={clsx(`${styles.imageStyle}`)} />
      </div>
      <div className="text--center padding-horiz--md margin--md">
        <h2>{title}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <p>
          <h1 className="hero__title">O projekte</h1>
        </p>
        <div className={clsx("row", styles.about_project)}>
          <p className="col">
            Cieľom projektu je navrhnúť a podľa požiadaviek používateľov
            digitálnej knižnice Elvíra implementovať zabezpečenú verziou PDF
            zobrazovača, ktorý ponúkne používateľovi príjemné používateľské
            rozhranie s bežnými funkcionalitami pre manipuláciu s dokumentom.
          </p>
          <p className="col">
            PDF Viewer bude obohatený o možnosť generovania citácií, editácie a
            zdieľania podľa požiadaviek čítateľa. Hotová aplikácia bude
            open-source riešenie dostupné ako npm balíček a implementovaná tak
            aby bola použiteľná na webe postavenom najmodernejšími frameworkami
            a knižnicami ako napr. React, Vue alebo Angular.
          </p>
        </div>
        <p>
          <h1 className="hero__title">Náš tím</h1>
        </p>
        <div className="row">
          <div className="col col--12">
            <div className="text--center">
              <img
                src={require("@site/static/img/kubod.jpeg").default}
                className={clsx(styles.firstImage)}
              />
            </div>
            <div className="text--center padding-horiz--md margin--md">
              <h2>Ing. Jakub Dubec</h2>
              <p>Product Owner</p>
            </div>
          </div>
          {TeamList.map((props, idx) => (
            <Member key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
