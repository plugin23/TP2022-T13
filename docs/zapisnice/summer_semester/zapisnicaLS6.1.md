# Zápisnica stretnutia č. 6.1

**Dátum**: Štvrtok - 20.4. 2023  
**Typ stretnutia**: Stretnutie vedúceho tímu a členov tímu  
**Vedúci tímu**: Ing. Jakub Dubec  
**Čas strenutia**: 10:00  
**Miesto stretnutia**: FIIT STU Kancelária - 5. poschodie  
**Zapisovateľ**: Juraj Valiček

## Prítomnosť

- [x] **Ing. Jakub Dubec**
- [ ] **Bc. Rastislav Balcerčík**
- [x] **Bc. Daniel Cok**
- [x] **Bc. Matej Lánik**
- [x] **Bc. Jakub Sorád**
- [x] **Bc. Róbert Szabó**
- [x] **Bc. Juraj Valiček**

## Priebeh stretnutia

Stretnutie sme začali priamo progress reportom úloh, dokončených a pokračujúcich do tohto šprintu. Na stretnutí nebol Rastislav Balcerčík, scram master, jeho úlohu prebral Matej Lánik. Práve Rasťo vykonal aj grafický revamp aplikácie s modernejším dizajnom a podieľal sa na pozadí niekoľkých úloh. Matej upravoval čítanie metadát kvôli exportu rôznych druhov dokumentov, no napokon bude potrebné univerzálne riešenie neskôr pri získavaní metadát z EvilFlowers. Juraj dokončil debouncing načítania strán, pre optimalizáciu aplikácie a obmedzenie záťaže EvilFlowers. S tvorbou anotačnej vrstvy, vrátane grafických elementov v dokumentoch má zatiaľ problémy a prenáša úlohu do tohto šprintu. Kubo dokončil table of contents, avšak pri exportoch rôznych druhov nevie vždy vytvoriť navigáciu ale iba vypísať dané kapitoly. Dano vytváral props pre komponenty, ktoré budú obsahovať informácie pre inicializáciu našej aplikácie. Mal problémy s neurčitosťou niekoľkých vstupov, kedy použil type any. Robo dokončil full-text search a previews výsledkov z predošlej iterácie.

Ďalším bodom stretnutia bola diskusia ďalších krokov vo vývoji a ich priorít. Členovia tímu by mali rozbehnúť docker image pre EvilFlowers na účely testovania. Vyriešiť spôsob preberania dokumentu (celý dokument či po stranách). Úprava responzivity aplikácie a ďalšie quality of life vylepšenia (bind kláves na posúvanie strán, zoom vykonávaný v aplikácii nie browser). Doplniť dokumentáciu, ako fungujú funkcionality, aké sú vstupy, výstupy. Hlavná priorita je na dokončenie funkcionalít a prepojenie s EvilFlowers.

## Stav projektu

- demo zverejnené a funkčné
- upravený grafický dizajn
- pripravený na EF integráciu

## Naplánované úlohy

- testovanie integrácie EvilFlowers
- dokončenie anotačnej vrstvy
- zlepšenie responzivity vzhľadu
- dopĺňanie dokumentácie

_Autor: Juraj Valiček_
