# Komponenty

Diagram komponentov reprezentuje komponenty front-endu aplikácie. Diagram komponentov
je rozdelený do viacerých vnorených komponentov.

![ComponentsDiagram](@site/static/img/components_diagram.png)

## API Provider

Komponent **API Provider**
obaľuje vnorené komponenty Reactovej aplikácie. Tieto komponenty tvoria časť
aplikácie, ktorá je prístupná používateľa vo forme používateľského prostredia.
Vďaka API Provider komponentu možné pristupovať k Viewer API z akéhokoľvek miesta v
aplikácii pomocou hooku `useContext` bez posúvania properties do hlbšie vnorených komponentov.

## [Viewer API](components)

Predstavuje rozhranie, ktorým komponenty pristupujú ku funkcionalitám Viewera. Ide
o rozhranie, ktoré pristupuje k funkcionalitám ako je napr. renderovanie strán,
manipulácia s dokumentom, navigácia alebo textové operácie pomocou high-level
funkcií.