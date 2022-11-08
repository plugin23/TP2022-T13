# Metodika manažmentu úloh

Dokument vysvetluje a popisuje spôsob manažmentu úloh v našom tíme pri práci s nástrojom Jira.
Obsahuje súhrn dôležitých pravidiel a postupov, ktoré je potrebné v tíme jednotne dodržiavať na dosiahnutie
prehľadného a zrozumiteľného systému manažmentu a pridelovania úloh.

## Typy issues

Počas manažmentu úloh budeme rozdelovať viaceré typy "issues", ktorými definujeme rôzne funkcionality alebo komplexné/menšie celky nášho projektu:
- **Epic** - Môžeme ho nazvať ako rodičovský typ issue. Zastrešuje skupinu Stories a popisuje, obaluje komplexnú funkcionalitu projektu
- **Story** - je to funkcionalita alebo požiadavka z pohľadu používateľa. Používateľ môže byť napr. samotný zákazník, ktorý interaguje s aplikáciou, prípadne to môže byť aj z pohšadu programátora alebo iného člena development tímu. Stories by mali by definované jazykom, ktorý je zrozumitelný pre každého. Kždá Story bude nalinkovaná na príslušný Epic
- **Task** - Riešenie konkrétnejšieho problému alebo funkcionality. Task bude pridelený konkrétnemu členovi tímu. Každý task bude prelinkovaný na Story, ktorá tomu prislúcha. Tiež task bude pridelený k Epicu.
- **Bug** - Popisuje chybu alebo popisuje stav, ktorý je nutné opraviť a dať do stavu funkčného. Bug bude nalinkovaný ku konkrétnemu Tasku a tiež aj k Story.

### Kontextové polia issues

Každý z typov issues obsahuje nasledovné polia:
- **Summary (povinné)** - Hlavný názov issue
- **Description** - Priestor pre podrobnejší popis a vysvetlenie
- **Status** - aktuálny status (napr. To Do, In Progress...)

Pre issue type *Epic* používame dodatočné polia:
- **Start date** - začiatočný dátum
- **Due date** - konečný dátum (pre zobrazenie v roadmape šprintov)

Pre issue type *Story* používame dodatočné polia:
- **Sprint** - pridelenie Story do špecifického šprintu

Pre issue typy *Task* a *Bug* používame dodatočné polia:
- **Assignee** - člen tímu, ktorému je issue pridelený a preberá zaň zodpovednosť
- **Priority** - nastavenie priority
    - Low
    - Medium
    - High
    - Highest
- **Story points estimate** - počet pridelených story pointov
- **Sprint** - pridelenie Tasku/Bugu do šprintu
- **Time tracking** - informácia o čase strávenom pri issue


### Typy stavov pre issue

Pri jasné identifikovaniu stavu issue budeme používať štyri typy stavov:
- **To Do** - issue, ktorý sa má riešiť
- **In Progress** - issue, na ktorom sa začalo pracovať alebo sa stále pracuje
- **QA** - stav, kedy je vytvorený pull request a prebieha kontrola, validácia členmi a Scrum mastrom.
- **Done** - issue, ktoré je uspešne vyriešený, fixnutý alebo  implementovaný

Worklow pre *Epic a Stories* je nasledovný:


![Story/Epic workflow](@site/static/img/story_epic_workflow.png) 

Workflow pre *Task a Bug* je nasledovný:


![Task/Bug workflow](@site/static/img/task_bug_workflow.png)

## Pridelovanie story pointov

Každý task bude mať pridelený určitý počet Story pointov. Story pointy určujú a sú používané ako meradlo veľkosti/náročnosti tasku. V našom projektovom manažmentu budeme používať počet od 1 po 6, pričom:
- **1-2 points** - task, ktorého náročnosť považujeme zložitosťou ľahký
- **3-4 points** - tento typ taskov bude stredne náročný
- **5-6 points** - task ohodnotený týmto počtom bodov bude náročnosti najtažší/najkomplexnejší

## Práva členov

Náš projekt v Jire je nastavený ako *team-management* projekt, pre nás je toto nastavenie ideálne. Každý člen tímu má plné práva na vytvorenie issues, pridelovať úlohy, updatovať stavy. Všetky tieto úkony sú ale dostatočne a vpred konzultované členmi tímu a samotným vedúcim projektu.

*Autor: Jakub Sorád*

