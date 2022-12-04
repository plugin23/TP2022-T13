# Zápisnica stretnutia č. 8.1

**Dátum**: Utorok - 29.11 2022  
**Typ stretnutia**: Stretnutie vedúceho tímu a členov tímu   
**Vedúci tímu**: Ing. Jakub Dubec     
**Čas strenutia**: 9:00     
**Miesto stretnutia**: FIIT STU Meeting room - 5. poschodie   
**Zapisovateľ**: Matej Lánik

## Prítomnosť

- [x] **Ing. Jakub Dubec**
- [x] **Bc. Rastislav Balcerčík** 
- [x] **Bc. Daniel Cok**
- [x] **Bc. Matej Lánik**
- [x] **Bc. Jakub Sorád**
- [x] **Bc. Róbert Szabó**
- [x] **Bc. Juraj Valiček** - pripojený cez online meeting zo zdravotných dôvodov

## Priebeh stretnutia

Členovia sa fyzicke stretli v miestnosti a jeden z členov bol pripojený cez Google Meet.
Plánovalo sa použiť dataprojektor pomocou redukcie, no to sa opäť nepodarilo.

Na začiatku sme preberali známkovanie tímového projektu, ktorému sa budeme bližšie venovať budúci týždeň. Ďalej sme riešili retrospektívu, ktorá stále nebola na stránke, no problém bol iba v zlom pull requeste, takže tento problém bol vyriešený hneď na mieste. Ďalšou časťou stretnutia bolo prezentovanie progressu jednotlivých taskov.

S prezentáciou svojich taskov začal scrum master, ktorý ukazoval pripravený codebase pre ostatných členov. Tento task už bol viacmenej doriešený, no ešte v ňom spraví menšie zmeny a pôjde do pull requestu. Taktiež padla pripomienka vedúceho tímu, že eventuálne budeme musieť komunikovať s najnovšou verziou EvilFlowers.

 Následne róbert preberal svoj task - databázový model. Vysvetloval hlavne navrhnuté zmeny v databázovom modely, kde popísal nutnosť pridania troch tabuliek. Taktiež tu padla výhrada vedúceho tímu, kde nesúhlasil s názvom tabuľky custom, a taktiež sa riešila problematika vlastných dátových typov v MySQL.
 
  Ďalej sme riešili návrh UX, kde sme sa vyjadrovali k nedostatku z low fidelity návrhov, pri ktorých sme nepoužívali komponenty. Pre efektívnejšiu prácu budeme tieto komponenty musieť použiť pri high fidelity návrhoch v tomto šprinte. Ďalej sme riešili pridelenie taskov, keďže Matej aj Róbert mali iba jeden task. Vedúcemu tímu sme vysvetlili, že aj keď títo dvaja členovia majú iba po jednom tasku, tak sa budú podielať na ostatných (hlavne high fidelity a network monitoringu ostatných PDF viewrov), keďže figma neponúka možnosť pridelenia jedného tasku viacerým členom. 
  
  Ďalej sme diskutovali o riešení high fidelity diagramov, ktoré sa postupne začínajú robiť. Matej taktiež poznamenal, že po ich dokončovaní bude podľa nich finalizovať akceptačné testy, ktoré sa po tomto šprinte (alebo na konci semestra) uzatvoria, a budú otvorené až pri záverečnom testovaní Elvíry. 
  
  Jakub hovoril o svojich taskoch kde padla pripomienka k network monitoringu PDF viewroch, vedúci tímu tu navrhol riešenie exportovania jednotlivých requestov do .har file-u.
  
  Daniel tiež predstavil svoje tasky, kde vedúci nemal žiadne veľké výhrady, a teda bližšie vyjadrenie k nim bude nasledovať na konci šprintu. 
  
  Juraj následne riešil citácie, kde sme dostali za úlohu zhodnúť sa na Slovenskej norme pre citácie, a hlavne sa znova spomenul problém sťahovania BibTeX do počítaču. 

Nasledovala voľná diskusia, kde sa rozprávalo o budúcnosti Elvíry v ďalších rokoch. Riešili sa aj potrebné dokumenty na odovzdanie, ktoré vraj máme vo veľmi dobrom stave. Vedúci tímu začal už taktiež začal implementovať backend, a my budeme musieť vymyslieť jednotlivé endpointy a poradie ich volaní. Na záver sa rozprávalo o swaggeri ako možnom nástroji na dokumentáciu tohto typu, s čím vedúci súhlasil.

## Stav predošlých uloh

- scrum master má takmer dokončený codebase pre ostatných členov tímu
- zmeny v databázovom modeli sú taktiež dokončené
- začína sa pracovať na high fidelity prototypoch
- po ich dokončení sa upravia aj finálne akceptačné testy
- pracuje sa aj na analýze network monitoringu iných PDF viewrov

## Naplánované úlohy

- finálne uzatvorenie akceptačných testov na konci šprintu
- swagger dokumentácia volaní 
- navrhnutie známkovania TP