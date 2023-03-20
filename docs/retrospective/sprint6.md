# Retrospetíva šprintu č. 6

Podrobnosti o jednotlivých úlohách a ich stavu sú k dispozícií vo vygenerovanom a vyexportovanom PDF súbore z nástroja Jira.

Export s podrobnými informáciami - [:closed_book: Šprint č.6](@site/static/pdf/sprintExport6.pdf).

## Burndown graf šprintu

Počas šprintu chýbajú opäť formálne detaily v Jire. Epicky, popis k úlohám. Niektoré storky, ku ktorým budú pripojené ďalšie úlohy sú označené v stave **In Progress** a bude sa na nich pracovať aj v ďalších šprintoch.

V tomto šprinte sa nám podarilo úspešne dokončiť všetky implementačné úlohy. Menšia komplikácia nastava v úlohe injektovania demo ukážky EvilFlowersViewera v našej webovej stránke. Tento problém sa pokúsime vyriešiť a budeme sa tomu prioritne venovať v nasledujúcom šprinte.

Sumár funkcionalíť a úloh, ktoré boli implementované v požadovanej kvalite:

- renderovanie dokumentu pri zoomovaní
- pridanie tlačidiel a funckionality zoom-in, zoom-out a fit-to-page
- full-textové vyhľadávanie v dokumente a zobrazenie výsledkov
- navigačný panel a dropdowny, spolu s tailwind tooltips pri prechádzaní myšou
- modálne okná pri sharingu a pri sťahovaní dokumentu
- možnosť stiahnuť dokument
- zverejnenie nášho vievera ako verejný NPM balíček pod verziou 0.1.0 a automatizácia zverejnovania
- otestovanie tejto verzie

Počas testovania sme narazili aj na jeden problém, ktorý bol odstránený a taktiež zaznamenaný v Jire. DocumentProvider neposkytoval funkcie, objekty a premenné tam, kde to bolo žiaduce. Tento bug bol vyriešený promptne a ostatní členovia mohli ďalej pracovať.

Na úlohách sa pracovalo priebežne, najintenzívnejšie počas posledných dní cez víkend, kde sa riešenia zároveň testovali a vytvárali sa pull-requesty na hlavného repozitára.

![Burndown6](@site/static/img/burndown6.png)

## Záverečná sumarizácia

| **S čím sme boli spokojní**               | **Čo treba zlepšiť**                            |
| ----------------------------------------- | ----------------------------------------------- |
| Priebežné testovanie a nahadzovanie bugov | Vždy pridať popis ku každej úlohe, storke, bugu |
| Implementačné úlohy dokončené včas        | Treba aktualizovať a pridať Epicky              |
|                                           | Kontrolovať pred commitom Typescript chyby      |

_Autor: Jakub Sorád_
