# Retrospetíva šprintu č. 9

Podrobnosti o jednotlivých úlohách a ich stavu sú k dispozícií vo vygenerovanom a vyexportovanom PDF súbore z nástroja Jira.

Export s podrobnými informáciami - [:closed_book: Šprint č.9](@site/static/pdf/sprintExport9.pdf).

## Burndown graf šprintu

Šprint č.9 nám nepriniesol veľkú spokojnosť. S viacerými úlohami nastali mierne kompikácie a neustále sa na nich pracuje. Viacero úloh zostali v stave **QA**, pretože boli pripravené a vytvorené pull requesty, ale bolo nutné zapracovať na detailoch a menších opravách. Bude sa na nich pracovať v šprinte č.10 spolu s ďalšími funkcionalitami.

**Robo** pracoval na **redizajne** bottom baru, modálnych okien a upravil aj vizuál Outlines (Obsah dokumentu).

**Juro** mal za úlohu venovať sa implementácií **anotačnej vrsty**. Táto úloha priniesla viacero kompikácií a je komplexnejšia viac, ako sa pôvodne predpokladalo. Pokračovať v práci bude na tejto úlohe aj v šprinte č.10. **Debouncing** je až na pár detailov plne funkčný.

**Maťo** pracoval na upravovaní zobrazovania a štýlovania **metadát** dokumentu, dokončenie je naplánované v ďalšom šprinte.

**Daniel** sa bude venovať implementácií a pokračovať v **Component props** úlohe v ďalšom šprinte. Úloha na **Citácie** je pripravená a počkáme keď bude pripravená backendová časť.

**Jakub** fixol problém s **Obsahom dokumentu**. Úloha sa dokončí v šprinte č.10, kde sa funkcionalita spojí s novým stylingom, ktorý spravil Robo. Druhá úloha na **Error boundary** je implementovaná, ale po konzultácií s Rasťom bude potrebné výstup zobraziť niekde v samotnom vieweri a nie ako samostatnú stránku. Dopracuje sa táto funkcionalita v ďalšom šprinte.

**Rasťo** sa venoval **integrácii** EvilFlowersViewera do FE Elvíry, bolo nutné rozbehať EvilFlowersCatalog, ktorý sa výrazne za posledné 2 semestre zmenil keďže vedúci tímu Jakub Dubec na ňom pracoval a implementoval vylepšenia, takže bolo treba vo frontende elvíry prerobiť volanie API aj celkovo štruktúru requestov a responses. Rasťo vyriešil aj z časti **autentifikáciu**. Následne získavanie entries vo frontende elvíry, získavanie acquisitions pre konkrétny entry a následne jeho zobrazovanie v našom Vieweri, ktorý je integrovaný do frontendu Elvíry - ešte tu zostáva integrovať viacero zmien aby to bolo použiteľné. Plánuje potom spraviť aj PR do FE repzitára Elvíry.

![Burndown9](@site/static/img/burndown9.png)

## Záverečná sumarizácia

| **S čím sme boli spokojní**                    | **Čo treba zlepšiť**                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| Integrácia EFViewera do FE Elvíry              | Dotiahnutie úloh do stavu DONE                                                       |
| Ujednotenie dizajnu na ďalších funkcionalitách | Rychlejšia spatná väzba na otázky v tímovom kanále                                   |
|                                                | Aj napriek iným predmetom venovať priebežne čas úlohám a neriešiť na poslednú chviľu |

_Autor: Jakub Sorád_
