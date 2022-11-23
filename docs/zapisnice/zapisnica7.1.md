# Zápisnica stretnutia č. 7.1

**Dátum**: Utorok - 22.11 2022  
**Typ stretnutia**: Stretnutie vedúceho tímu a členov tímu   
**Vedúci tímu**: Ing. Jakub Dubec     
**Čas strenutia**: 9:00     
**Miesto stretnutia**: FIIT STU Meeting room - 5. poschodie   
**Zapisovateľ**: Jakub Sorád

## Prítomnosť

- [x] **Ing. Jakub Dubec**
- [ ] **Bc. Rastislav Balcerčík** - neprítomný zo zdravotných dôvodov
- [x] **Bc. Daniel Cok**
- [x] **Bc. Matej Lánik**
- [x] **Bc. Jakub Sorád** - pripojený cez online meeting zo zdravotných dôvodov
- [x] **Bc. Róbert Szabó**
- [x] **Bc. Juraj Valiček**

## Priebeh stretnutia

Členovia sa fyzicke stretli v miestnosti a jeden z členov bol pripojený cez Google Meet.
Pre lepšiu prezentáciu bol pôvodný plán použiť dataprojektor v miestnosti, to sa ale nepodarilo.

Úvodné slová boli venované vedúcim tímu zápisniciam, ktoré by mali byť v určitých prípadoch a témach napísané **vecnejšie a podrobnejšie**.

V krátkosti sme sa vyjadrili k momentálnemu šprintu, jeho stavu a zastavili sme sa pri spomenutej nezrovnalisti ohľadom taskov na QR kódy. Táto téma otvorila diskusiu pridelovania taskov dvoma spôsobmi:
- **pridelenie členovi ucelenú časť práce** a na nej pracovať
- **pridelovanie úloh striedavo**

Vyjadrili sme každý jednotlivé pozitíva aj zápory.  Pri úlohách, ktoré ešte nie sú implementačného charakteru môžeme pokojne zvoliť spôsob na striedačku/prípadne prvý spôsob. Je to možno časovo náročnejšie, ale potom každý člen bude mať informácie a vedomosti ohľadom všetkých taskov (research, dokumentácie, procesy).
Pri úlohách implementačného charakteru do budúcna bude vhodnejšie zvoliť prvý spôsob, kde jeden člen bude kontinuálne pracovať na svojom celku.
Spomenuli sme aj naše stretnutie, ktoré prebiehalo včera, s ktorým sme boli ako členovia spokojní a boli vyjasnené viaceré problémy. Budúce stretnutia by bolo ideálne, ak by ale boli naplánované na skorší deň pred uzavretním šprintu.

Dalšia fáza bolo prezentovanie **low fidelity návrhu**. Samotný návrh a user flows si vyskúšal aj vedúci tímu. Opísali sme stav pri prvej iterácií návrhu a taktiež aké zmeny sa udiali v druhej iterácií. Popri diskusii sme ďalej načrtli témy, ktoré priamo súvisia s naším projektom:
- v nasledujúcom šprinte sa budeme venovať exportu citácií (plaintextové) - vybrať štandardizovaný formát a skúmať existujúce riešenia
- tieto dáta na citácie nebudeme získavať z DOI (už by sme používali externú službu, čomu sa chceme vyhnúť) - napríklad. API volanie späť na EF katalóg, kedže samotný PDF dokument nemusí priamo obsahovať všetky údaje na korektné a správne vytvorenie citácie
- dôležitá poznámka ohľadom citácii: pri získavaní citácií/exporte nechceme aby to používateľovi do počítača stiahlo súbor v ktorom budú  citácie. Takýto prístup nepoužijeme. Chceme, aby mal citácie v štandardizovanom formáte u nás vo vieweri hneď k dispozicií.
S low fidelity návrhom súvisia aj dokumenty *Zoznam funkcionalít* a tiež aj *Akceptačné testy*, ktoré budú aktualizované na webovej stránke

Pri prezentovaní tasku na **Vodoznak a štruktúru QR kódu** sa nevyskytli žiadne ďalšie otázky, kedže väčšina z nich bola vyriešená hneď v úvode stretnutia. QR kód bude umiestnený na každej strane dokumentu, nebude zasahovať do samotného textu.

Druhý task na **QR kód na zdielanie a jeho štruktúru** prebehla zaujimavá diskusia, kde sme sa všetci pritomní zhodli na nasledujúcich detailoch:
- QR bude obsahovať výhradne iba URL (čo pôvodne navrhoval člen tímu)
- čítanie QR kódu z dataprojektoru - obmedziť redundanciu dát (namiesto *document_url* dať iba *url*). Čím viac dát, tým by mohla byť citlivosť na chybu v QR kóde.
- nesmieme zabudnúť, že zdielanie musí byť cez HTTPS, v opačnom prípade by mala čítačka problém

Riešili sme aj ukladanie dokumentov pri sharovaní.
- tabuľka s *acquisition_id*, *user_id*, *annotation_layer* do databázového modelu - ukladáme potrebné údaje a čisto anotačnú vrstvu
- navrhnúť procesy na anotačné vrstvy (čo keď budú viaceré anotačné vrsty?)
- zamyslieť sa aj nad spätnými procesmi anotačnej vrstvy - schovanie, vymazanie alebo vytvorenie novej anotačnej vrstvy

Vedúci tímu priblížil aj problematiku akvizícií a generovania QR kódov do pätičky strán dokumentu. Zamýšlali sme sa nad dvoma spôsobmi
- vždy keď používateľ si vyžiada dokument (ušetríme storage)
- napríklad. generovať QR kód raz za deň (situácia, kedy sa používateľ vráti behom dňa na ten istý dokument 8x, aby sme nezahlcovali generovaním QR kódu 8x). Tu by mohlo vzniknúť riziko, ak by chcelo niekoľko stoviek študentov otvárať dokumenty a ukladať informácie by bolo náročné pre storage a použitú veľkosť.

Zatiaľ padlo rozhodnutie generovať to po každý krát a budeme sledovať správanie a efektivitu takéhoto riešenia.
V prípade, že dokument je veľký a používateľ by dlhšie čakal na generovanie QR kódu do dokumentu, nesmieme v budúcnosti zabudnúť aj na UX prvok v podobe napr. *loading ikony*.

Mali by sme navrhnúť fyzické volanie URLiek. Ako vyzerá komunikácia so serverom, čo sa bude diať.
Chránené PDF budeme preberať po stranách. Otázka ako sa budú preberať PDF strany pri menších náhľadoch, chceme použiť asynchrónny alebo synchronny proces. Je potreba ju zodpovedať v tomto nasledujúcom šprinte.

Pri úlohe na **databázový model pre zdieľanie dokumentov** (pridanie tabuľky) bude dôležité používať pár *acquisition_id* a *user_id*.
Do tabuľky by bolo vhodné doplniť aj `typ`, ktorý bude označovať, či je dokument *personal* alebo *shared*.
Smerom do budúcna sme sa zamýšlali aj nad zdielaním anotačnej vrstvy.

V **dokumente procese renderovania** boli všetky veci jasné a zrozumiteľné. Vylepšenia, ktorá sa vykonali neboli k ním ďalšie pripomienky.

Súčasne s nami bol v miestnosti aj vedúci knižnice, ktoré prišiel neskôr a prebiehala debata o fungovaní anotačnej vrstvy a ako sa budú zobrazovať QR kódy.

Úloha **bezpečného fetchovania** bola odprezentovaná aj s vylepšenia oproti minulému šprintu. Pri procese preberania strán je vhodné riešiť expiráciu public key. Aby neexpiroval po dňoch. Zamyslieť sa nad public key na každý dokument, ktorý používateľ číta. Nemali by sme použiť jeden public key na viacero dokumentov. Zodpovedať na otázku, či má pre nás implementácia PKI prínos v našom projekte.

Pozrieť sa na existujúce riešenia (ACM, Media info, Science Direct) a zistiť v *Network Monitoring*, ako si pýtajú strany dokumentu. Chceme zistiť, čo sú to za requesty (bitové obrázky, pdfko, sú tam hlavičky, session cookies...). Výstupom bude dokument s nájdenými výsledkami a screenshotmi, ktoré nám môžu pomôcť v našom projekte.

Záver stretnutia bol venovaný inštrukciám a úlohám, ktoré nás čakajú v ďalšom šprinte. Sú to analytické úlohy, high fidelity prototypovanie. Jeden z členov sa už bude venovať repozitáru, ktorý bude pripravený na implementáciu. Zároveň chceme mať jednu úlohu implementačnú, ktorej úloha bude napríklad zobrazenie prázdnej strany PDF, prípade niečo základné.
Do retrospektívy spomenúť aj prehodnocovanie story pointov v porovnaní s náročnosťou úlohy a venovaným časom.

Hlavným cieľom na šprint je **pripraviť všetky podklady pre vedúceho projektu**, aby sa mohol venovať implementácií potrebných častí na back-ende.

## Stav predošlých uloh

- vačšina procesov sú finálne dokončené, na niektorých je nutné spraviť drobné úpravy
- low fidelity prototyp je dokončený (sketche, prvá aj druhá iterácia, user flows)
- úlohy na QR kódy sú v dokončenom stave, pri zdielanom QR kóde sa spraví zmena vo forme používania iba URL linky
- návrh databázového modelu pre anotačnú vrstvu je dokončený
- návrh databázového modelu pre zdielanie QR kódu čakajú drobné úpravy

## Naplánované úlohy

- v priebehu dnešného dňa dokončiť a zapracovať pripomienky, vytvoriť tasky na ďalší šprint a aktuálny šprint ukončiť
- updatovať akceptačné testy na základe low fidelity návrhu
- spoločne spraviť retrospektívu tohto šprintu a zhodnotiť ho
- research v oblastí generovania citácií
- analýza existujúcich PDF viewerov a ich správania pomocou requestov a Network monitoringu
- High fidelity prototyp (vytvaranie compomentov, graficky návrh, kompletné user flows)
- návrhu komunikácie s HTTP serverom
- jednoduchý implementačný základný task (napr. zobraziť prazdnu PDF stranu)