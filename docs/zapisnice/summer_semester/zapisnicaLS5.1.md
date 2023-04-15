# Zápisnica stretnutia č. 5.1

**Dátum**: Štvrtok - 6.4. 2022  
**Typ stretnutia**: Stretnutie vedúceho tímu a členov tímu  
**Vedúci tímu**: Ing. Jakub Dubec  
**Čas strenutia**: 10:00  
**Miesto stretnutia**: FIIT STU Kancelária - 5. poschodie  
**Zapisovateľ**: Róbert Szabó

## Prítomnosť

- [x] **Ing. Jakub Dubec**
- [x] **Bc. Rastislav Balcerčík**
- [x] **Bc. Daniel Cok**
- [x] **Bc. Jakub Sorád**
- [x] **Bc. Róbert Szabó**

## Priebeh stretnutia

Na začiatku stretnutia sme sa venovali problému integrácie projektu s EvilFlowers. Najlepšie riešenie bude pravdepodobne spustenie vlsatnej inštancie EvilFlowers pomocou dockera. 

Následne sme prezentovali progres na projekte. Rasťo v predchádzajúcom šprinte implementoval *debounce* funkciu, aby sa nevyhľadával text po stlačení každého tlačidla pri písaní reťazca. Taktiež sa zaoberal pridaním dema nášho projektu na tímovú stránku, avšak momentálne je problém so štýlovaním, nakoľko vzniká konflik medzi našim projektom a dokosaurom. Pravdepodbne sa teda demo umiestni na samostnatnej doméne. Začala sa aj dokumentácia projektu. Daniel implentoval zobrazovanie metadát súboru. Vytvoril aj základnú konfiguráciu funkcionalít nášho viewra. Tá sa ale ešte doplní o spôsob, akým vstupuje samotný súbor, ktorý sa má zobraziť. Jakub opravil chybu s prepínaním strán pri prezeraní súboru. Pracoval aj na zobrazení stomovej štruktúry dokumentu, ktorá sa momentálne iba zobrazuje. Presmerovanie na stranu, ktorá obsahuje zvolenú sekciu, je rozpracované a bude dokončené v tomto šprinte. Taktiež spísal [retrospektívu k predchádzajúcemu šprintu](../../retrospective/sprint7.md). Róbert pracoval na zvýraznení vyhľadaného textu po kliknutí na výsledok vyhľadávania. Momentálne je implementácia síce funkčná, ale je potrebné ju ešte refaktorovať. 

Vedúci projektu nám pripomenul, že dizajn aplikácie by nemal trpieť na úkor funkcionality. Taktiež sa máme sústrediť na čitateľnosť, listovanie v súbore, zdieľanie súboru a potenciálne zakázanie funkcionalít ako napr. stiahnutie súboru. Preberali sme aj otázku licencovania, kde sme zvažovali MIT a GNU2 licencie. Momentálne sa prikláňame skôr k MIT licencii. Existuje aj možnosť licencovať rôzne časti projektu inými licenciami.


## Stav projektu

- pridanie dema na stránku tímového projektu
- dokončené a rozrobené funkcionality, spisovanie dokumentácie

## Naplánované úlohy

- integrácia na EvilFlowers
- zlepšenie dizajnu a celkového vzhľadu viewra
- dokončenie rozpracovaných funkcionalít

_Autor: Róbert Szabó_
