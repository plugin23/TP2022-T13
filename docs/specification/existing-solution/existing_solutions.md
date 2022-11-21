# Existujúce npm balíčky

Tento dokument obsahuje analýzu existujúcich riešení pre zobrazovanie a
manipuláciu s PDF dokumentami vo forme voľne dostupných npm balíčkov. Táto
analýza nám pomôže vybrať najvhodnejší nástroj, resp. treťostranovú aplikáciu,
na ktorej budeme stavať náš PDF viewer. V rámci tejto analýzy sme sa konkrétne
venovali nástrojom, ktoré už majú implementovanú logiku vykresľovania jednotlivých
vrstiev, ktorú v rámci nášho riešenia primárne implementovať nebudeme.

## [react-pdf](https://www.npmjs.com/package/react-pdf)

react-pdf je open-source riešenie, ktoré obaľuje pdf.js do Reactového komponentu,
čím je vhodný práve pre projekty vytvorené knižnicou React. Obsahuje väčšinu
funkcionalít, ktorú bežný používateľ potrebuje. Podľa aktivity a jedná o stále
udržiavaný projekt, ktorý udržiava jeho autor *Wojciech Maj*. Patrí medzí najpopulárnejšie
balíčky na npmjs, práve kvôli cielenej komunite Reactu.

## [ngx-extended-pdf-viewer](https://www.npmjs.com/package/ngx-extended-pdf-viewer)

ngx-extended-pdf-viewer je podobne ako [react-pdf](#react-pdf) wrapper pre pdf.js
cielený pre jednu konkrétnu platformu, v tomto prípade Angular. Toto riešenie obsahuje
detailnú dokumentáciu a používateľské rozhranie veľmi podobné originálnemu pdf.js.
Popularitou sa vzďaluje od react-pdf ale stále sa jedná o udržiavaný projekt najmä 
jeho autorom *Stephan Rauh*. Tento PDF viewer používa aj aktuálne riešenie Elvíra
na zobrazovanie dokumentov dostupných v jej knižnici. Keďže front-endová čas Elvíry
je napísaná v Angulare, je pochopiteľné prečo na vykresľovanie používa práve tento
Angularový komponent.

## [ng2-pdf-viewer](https://www.npmjs.com/package/ng2-pdf-viewer)

ng2-pdf-viewer je populárnejšia alternatíva pre platformu Angular. Jedná sa o 
podobné riešenie ako ngx-extended-pdf-viewer, práve kvôli tomu že je tiež
postavený na pdf.js od Mozilly. Tento projekt už ale podľa všetkého nie je udržiavaný o čom
svedčí aj aktivita v jeho repozitári na [githube](https://github.com/VadimDez/ng2-pdf-viewer),
ktorá sa zastavila koncom roka 2021.

## [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist)

Spomínaný pdf.js, vytvorený spoločnosťou Mozilla, patrí medzi najpoužívanejšie
webové zobrazovače (nielen) PDF dokumentov o čom svedčí aj prieskum najpoužívanejších
npm balíčkov popísaných vyššie, ktoré ho len obaľujú pre jednoducheiš použitie v
konkrétnych projektoch alebo na ňom prípadne stavajú ďalšie funkcionality. Tento PDF
viewer je používaný ako natívny v prehliadačoch ako je napr. Firefox alebo Chrome.
Jedná sa teda o veľmi dobre udržiavaný projekt, ktorý sa vo svojom odvetví stal v
podstate štandardom. 

## [vue-pdf](https://www.npmjs.com/package/vue-pdf)

Podobne ako Angular a React aj posledný z trojice najpopulárnejších JavaScriptových
frameworkov Vue má svoj wrapper pre pdf.js. Funkcionalitou veľmi podobný predošlým 
riešeniam.

## Zhodnotenie

Prieskumom najpopulárnejších balíčkov sme zistili že nástroj [pdf.js](https://www.npmjs.com/package/pdfjs-dist)
je lídrom v zobrazovaní dokumentov vo webovom prostredí. Vyššie vymenované balíčky, 
ktoré ho obaľujú sú funkcionalitami takmer totožné, platforma je pri výbere faktor,
ktorý zaváži viac. 

Aktuálne riešenie Elvíry už obsahuje wrapper pre pdf.js,
ktorý ale nie je vhodný na rozširovanie podobne ako ostatné spomínané wrappery, 
pretože nie sú dostatočne modulárne, čo by sťažovalo pridávanie nových funkcionalít
do existujúcich riešení. 

pdf.js implementuje high-level API, vďaka ktorému dokážeme
vytvoriť riešenie zodpovedajúce našim požiadavkám a manipulovať
s ním na nižšej úrovni ako je napr. preberanie dokumentov a zabezpečenie, 
kvôli čomu naše riešenie budeme stavať práve na ňom a nechávame si 
otvorené dvere aj pre vlastné UI a UX, ktoré budeme primárne
implementovať podľa požiadavok používateľov Elvíry.

*Autor: Rastislav Balcerčík*