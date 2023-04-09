# Retrospetíva šprintu č. 7

Podrobnosti o jednotlivých úlohách a ich stavu sú k dispozícií vo vygenerovanom a vyexportovanom PDF súbore z nástroja Jira.

Export s podrobnými informáciami - [:closed_book: Šprint č.7](@site/static/pdf/sprintExport7.pdf).

## Burndown graf šprintu

Tento šprint sme pracovali na viacerých implementačných úlohách a zároveň bol zameraný aj na refaktoring a tiež aj dokumentáciu. Dokumentovali sme samotný Viewer vo fome README súboru
a tiež aj zdrojový kód. S refaktoringom a dokumentovaním sme boli v tomto šprinte spokojní.

Úlohy na ktorých sme pracovali:

- demo - konfigurácia build parametrov, riešenie konfliktov s peer dependencies a celkovo aby bolo možné nás viewer importovať do iných aplikácií
- refaktoring funkcionality na asynchrónne, aby bežali v event loope a optimalizácia vyhľadávania, kde sa dedumpovalo a nehľadalo sa na každý chatacter input keď zadávame dlhšie slovo
- dokumentácia vo forme readme
- zmena a použitie svg obrázkov namiesto React ikoniek
- metadata PDF dokumentu
- pridanie anotačnej vrstvy, klikateľné URL linky v PDF dokumente
- pridávanie properties do nášho Viewera
- highlightovanie nájdeného textu
- zobrazovanie sekcii dokumentu/ table of contets, ktoré vieme tlačidlo zobraziť a skryť. Samotné sekcie sú klikateľné a je implementovaná logika prepnutia sa na stranu, kde sa daná sekcia nachádza

Niektoré úlohy sa budú prenášať do šprintu č.8. Ich funkcionalita nie je 100% dokončená a preto sa dokončia v ďalšom šprinte.

- potrebné je odstrániť problém pri rendere canvasu pri highlightovaná nájdeného textu
- úloha na anotačnú vrstvu sa presúva do ďalšieho šprintu spolu a k nej pribudnú aj spojené podúlohy
- pri zobrazovaní metadát je nutné upraviť štýlovanie
- Viewer a jeho properties - zmenit interface a import celého PDF namiesto stringu
- je potrebné dokončiť zobrazovanie rozšíreného sidebaru
- pri zobrazovaní sekcii je potrebné dokončiť prepínanie na danú stranu. Riešiť sa bude problematika samotného PDF dokumentu a tiež aj pdfjs funkcii getDestination() a getPageIndex(). Logika prepínania je už funkná a predpripravená (pri kliknutí na ľubovoľnú sekciu momentálne vždy vyrenderujeme hard coded číslo strany)

Počas šprintu sa našlo viacero bugov a chýb, ktoré boli vyriešené čo najrýchlejšie, aby sa mohlo pokračovať v práci na úlohe. Riešili a vyriešili sme nasledovné reportované bugy:

- neošetrené nesprávne vstupy pre zobrazenie konkrétnej strany PDF dokumentu
- Bundle nám neobsahoval tailwind
- Outline-y neboli dostupné z nášho vzorového PDF dokumentu

S priebehom šprintu sme neboli spokojní. Musíme presunúť pomerne veľa implementačných úloh, ktoré sme nedotiahli do stavu **Done**. Niektoré úlohy boli náročnejšie a aj z časového hľadiska sme ich podcenili.

![Burndown7](@site/static/img/burndown7.png)

## Záverečná sumarizácia

| **S čím sme boli spokojní**                   | **Čo treba zlepšiť**                       |
| --------------------------------------------- | ------------------------------------------ |
| Viewer demo sa podarilo injektovať na stránku | Opakované riešenie vecí v posledných dňoch |
| Promptné vyriešenie viacerých bugov           | Dokončovanie úloh!                         |
| Refaktoring a práca na dokumentácii           | Zobrazovanie dema - CSS overwrite problém  |

_Autor: Jakub Sorád_
