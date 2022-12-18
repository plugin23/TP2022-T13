# Návrh prototypov

Súčasťou tímového projektu je aj návrh prototypov, ktorý nám pomôže pri vizualizácii nášho PDF zobrazovača. Počas navrhovania sme postupne prešli cez tri fázy prototypovania.
- **Sketches** 
- **Low fidelity prototype**
- **High fidelity prototype**

Každá z fáz mala osobitný význam a výsledok, vďaka ktorému sme sa spätne vedeli zamyslieť aj nad úlohami, ktoré s návrhom prototypov úzko súvisia. Postupne si preberieme všetky tri fázy.

## Sketches

Každý z členov tímu mal za úlohu spraviť náčrt (angl. sketch) hlavnej prvotnej obrazovky so zobrazenou stranou PDF dokumentu. Tieto náčrty mali slúžiť predovšetkým na zosúladenie myšlienky celého tímu o rozpoložení jednotlivých prvkov na obrazovke. Členovia tímu mali rôznorodé nápady a po spoločnom prehodnotení jednotlivých náčrtov sme zostavili jeden spoločný, podľa ktorého budeme tvoriť low a high fidelity prototypy.

## Low fidelity prototyp

Tento prototyp mal za úlohu jednoducho vizualizovať všetky podstatné obrazovky nášho PDF zobrazovača. Zároveň sme v nástroji Figma okrem samotnej vizualizácie doplnili základne interakcie medzi obrazovkami. Low fidelity prototyp sme robili bez použitia komponentov, ktoré by sa v určitých prípadoch žiadali. Následne malé zmeny a úpravy, ktoré by mohli byť aplikované globálne na všetky, prípadne viaceré obrazovky sme museli upravovať ručne pre každú obrazovku. Princíp vytvorenia a použitia kompomentov sme následne aplikovali pri high fidelity prototoype.

V tejto fázi prototypovania sme ako tím vyhodnotili, že vykonáme druhú iteráciu. V druhej iterácii sme našli nedostatky, ktoré treba odstrániť alebo doplniť. Väčšinou to boli detaili, ale zabudli sme na podstatnú vec a to tlačidlo pre stiahnutie PDF dokumentu.

Nástroj Figma poskytuje možnosť exportovať jednotlivé rámce (angl. frames), ktoré v našom prípade znamenali jednotlivé obrazovky. K dispozícii je kompletný PDF súbor s navrhnutým low fidelity prototypom:

Export obrazoviek- [:closed_book: Low Fidelity Prototyp](@site/static/pdf/Low_Fidelity_Prototype.pdf).

*Ukážka low fidelity prototypu - obrazovka s PDF dokumentom a náhľadmi ďalších strán:*

![Low fidelity ukažka](@site/static/img/low_fidelity_example.png)

## High fidelity prototyp

Pri tejto fázy sme vychádzali najmä z low fidelity prototypu. Hlavným cieľom bolo priniesť o niečo lepšiu predstavu vizualizácie smerom k implementačnej časti. Pri tvorení tohto prototypu sme používali na viacero prvkov obrazoviek a to komponenty a varianty ku komponentom (funkcionality nástroja Figma), čim sme zabezpečili efektívnejšiu prácu a jednoduchý prístup k zmenám, ktoré sa prejavia na inštanciách komponentov a nás to odbremení od manuálnej oprave alebo práci. Zároveň sme pridali rôzne prvky interakcie ako "hovering", vyskakovacie okno a pod. Samotné interakcie medzi jednotilivými prvkami boli kompletné, narozdiel od low fidelity prototypu.

Pri high fidelity prototype sme odstránili tlačidlo a ikonku ```Settings```, ktorý bol pôvodne v low fidelity prototype. Naopak sme pridali tlačidlo a ikonku ```Home```, ktorá nás vráti na základnú obrazovku, kde máme zobrazenú stranu PDF dokumentu. Táto funkcionalita nám v low fidelity prototype nefigurovala. Zároveň sme zapracovali zistené nedostatky a nezrovnalisti v akceptačných testov a v liste funkcionalít.

Export obrazoviek a kompomentov - [:closed_book: High Fidelity Prototyp](@site/static/pdf/High_Fidelity_Prototype.pdf).

*Ukážka High fidelity prototypu - obrazovka s PDF dokumentom a náhľadmi ďalších strán:*

![High fidelity ukažka](@site/static/img/high_fidelity_example.png)

## Výstup z návrhu prototypovania

Medzi výstupy zaradíme samotné tri fázy, v ktorých vidíme progres, ktorý sme počas práce na tímovom projekte dosiahli. High fidelity prototyp nám do určitej mieri pomôže pri samotnej implemetačnej časti. Na prototypovaní a jednotlivých fázach pracovali postupne všetci členovia, každý priložil ruku k dielu a na toto bola potrebná dobrá komunikácia a tímová súhra. S odstupom času zároveň veľmi pozitívne vnímame fakt, že vďaka návrhu prototypom sme sa spätne zamýšľali nad súvisiacimi úlohami a robili potrebné zmeny a vylepšenia a to najmä pri akceptačných testov a liste funkcionalít PDF zobrazovača.

*Autor: Jakub Sorád*