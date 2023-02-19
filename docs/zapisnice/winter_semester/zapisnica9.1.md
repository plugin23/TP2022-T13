# Zápisnica stretnutia č. 9.1

**Dátum**: Utorok - 6.12 2022  
**Typ stretnutia**: Stretnutie vedúceho tímu a členov tímu   
**Vedúci tímu**: Ing. Jakub Dubec     
**Čas strenutia**: 9:00     
**Miesto stretnutia**: FIIT STU Meeting room - 5. poschodie   
**Zapisovateľ**: Rastislav Balcerčík

## Prítomnosť

- [x] **Ing. Jakub Dubec**
- [x] **Bc. Rastislav Balcerčík** 
- [x] **Bc. Daniel Cok**
- [x] **Bc. Matej Lánik**
- [x] **Bc. Jakub Sorád**
- [x] **Bc. Róbert Szabó**
- [x] **Bc. Juraj Valiček**

## Priebeh stretnutia

Na úvod stretnutia sme každý zhodnotili svoju prácu a prínos v tímovom projekte.
Každý z členov si navrhol za svoju prácu známku. Diskusia ohľadom posledného stretnutia v tomto semestri. Stretnutie bude naplánované a bude prebiehať online.

Budúci týždeň nebude otvorený nový šprint, ale máme sa zamyslieť nad úlohami, ktoré by sme behom toho týždňa ešte vedeli spravit a zdokumentovať na webovú stránku. Zároveň padla poznámka, aby sme mali všetko pripravené na letný semester a prvý šprint v letnom semestri bude už čisto implementačného charakteru.

Rasťo odprezentoval **implementačné úlohy**. Všetky boli pripravené a v dokončenom stave. Vedúci tímu bol s výsledkami spokojný.

Matej prezentoval úlohu, kde sa venoval **akceptačným testom**. Prebehli úpravy na základe low a high fidelity prototypov. Taktiež zmeny súviseli aj s feature listom, kde sme mali funkcionalitu, ktorá nezodpovedala našim požiadavkám a bola odstránená.

Nasledovalo odprezentovanie úlohy zmien **databázového modelu** pre zdieľanie dokumentu, ktorú mal pridelenú Robo. Už pred stretnutím túto úlohu komunikoval a je považovaná za hotovú.

Juraj prezentoval **generovanie citácií**. Nenašiel knižnice na generovanie, ktoré potrebujeme. Venoval sa knižnici [citation.js](https://citation.js.org/), ktorá ale pracuje už s BibTex formátom a vie tento formátovať napríklad na **CSL-JSON** formát. Ohľadom csljson formátu sa rozvinula diskusia, že je vhodná ďalšia analýza **CSL-JSON** formátu s ktorým pracuje [citation.js](https://citation.js.org/) knižnica. Venovali sme sa problematike backendu a techniky na rozlíšenie či je dokument *article, proceedings* atď., každý z nich má iné *properties*.

Jurajov druhá úloha na **bezpečné posielanie dokumentu** je v progrese, ale dokončí sa budúci týždeň. V prípade nejasností bude v komunikácií priamo s vedúcim tímu, pre ktorého je tento task dôležitý z hladiska následnej implementácie.

Daniel prezentoval **high fidelity prototyp**. Táto úloha bola komplexnejšie a skladala sa z viacerých úloh. Priblížil spôsob práce a tiež aj problematiku kompomentov, kde obrazovky boli komponenty. Vyriešil to použitím prvku *Frame* v nástroji Figma. Pri niektorých obrazovkách nie sú dokončené interakcie. Tieto detaily sa zapracujú. Vznikla aj diskusia ohľadom `Settings` tlačidla, ktoré vo výslednej aplikácií nemusí vôbec byť, ak nenájdeme vhodné funkcionality, ktoré by sme naň zavesili.

Jakub odprezentoval svoj progress na **high fidelity prototypoch**. Venoval sa vytváraniu komponentov, variantám komponentov a ich interakciám. Bola otvorená diskusia ohľadom zdokumentovania procesu a výsledkov low a high fidelity prototypov, ktoré by bolo vhodné doplniť na stránku nášho projektu.

**Network monitoring** bol spoločný task na ktorom pracoval Jakub, Matej a Robo. Odprezentoval sa dokument, ktorý obsahoval analýzu viacerých PDF zobrazovačov ako napr. *ACM eReader* a *Kramerius*. Analyzovala sa premávka, ktorá prichádza do aplikácie pri manipulácii s dokumentom. Počas prezentácie sme paralelne skontrolovali či vybrané zobrazovače PDF obsahujú textovú vrstvu a prešli jej štruktúrou.

Vedúci projektu Jakub Dubec spomenul že sa začal venovať implementácii S3 storage pre Evil Flowers a spomenul aj ďalšie nevyhnutné zmeny, ktoré bude treba implementovať.

Na záver sme zhrnulu organizčné veci, ktoré sme spomenuli v úvode, išlo najmä o plánovanie práce v letnom semestri a ďalšia práca na projekte.

## Stav predošlých uloh

- uzatvorili sme akceptačné testy
- implementačné úlohy sú splnené
- pri high-fidelity prototype chýbajú niektoré interakcie
- úloha bezpečné posielanie dokumentu je rozpracovaná
- zmeny v databázovom modeli sú zapracované podľa požiadaviek
- analýza sieťovej prevádzky v aplikáciách iných zobrazovačov bola vhodne zdokumentovaná

## Naplánované úlohy
- dokončiť interakcie v high-fidelity prototype
- zdokumentovať bezpečné posielanie dokumentov
- doplniť do implementácie nevyhnutné veci
- zdokumentovať low a high fidelity prototypy