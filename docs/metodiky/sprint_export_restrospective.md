# Metodika exportu a restrospektívy šprintov

Táto metodika slúži na zjednotenie spôsobu exportu a tiež aj retrospektívy ku každému ukončenému šprintu v našom projekte

## Export

Hlavou úlohou exportu je vytvorenie PDF súboru so všetkými dostupnými detailami k jednotlivým issues šprintu. Tým, že máme nastavený Team-managed projekt sme museli manuálne zapnúť funkcionalitu, ktorá nám dokáže zobrazovať štatistiky zo šprintov. Pre generovanie PDF súboru použijeme nasledovný postup:

1. Na domovskej stránke Jira projektu sa dostaneme do sekcie *Reports*
2. Klikneme na *Sprint burndown chart*
3. V pravej časti obrazovky si všetky issues zobrazíme kliknutím na *View in issue navigator*
4. Otvorí sa nám nová karta a tieto issues vieme exportovať kliknutím na tlačidlo *Export*
5. Zobrazí sa dropdown menu a zvolíme možnosť *Print details*
6. Otvorí sa nám karta, ktoré vieme tlačiť a uložiť do PDF súboru. Pravý klik na kartu a klikneme *Tlačiť*
7. Zobrazí sa nám ďalšie samostatné okno, kde klikneme *Uložiť* (predvolený formát je PDF)

Takto vieme získavať PDF exporty z každého šprintu, čo nám uľahčí prácu a v prípade potreby sa vždy budeme vediet pozrieť spätne, aký bol stav úloh a ich detaily.

## Restrospektívy

Úvod pre retrospektívu predstavuje základné info, na aký účel nám retrospektíva slúži a tiež čitateľ/člen tímu bude mať k dispozícií klikateľný link, ktorý mu na druhom okne v prehliadači otvorí vyššie spomenutý PDF súbor vygenerovaného exportu. Tento PDF súbor je vhodný pokiaľ by sme potrebovali podrobné informácie ku každej úlohe, jej pridelenie, úspešnosť, stav a tiež aj zodpovedného člena a pod.

Klikateľný link bude mat jednotnú podobe pri všetkých retrospektívach a to: 
- :closed_book: Šprint č.X (kde 'X' je číslo konkrétneho šprintu)

### Burndown graf šprintu

Výsledok každého šprintu bude aj burndown graf, na ktorom štručne popíšeme jeho priebeh a aké dôsledky nám z neho vyplývajú. Môžeme sa o neho oprieť aj pri vypracovaní záverečnej sumarizácie.

*Príklad burndown grafu*

![Burndown1](@site/static/img/burndown1.png) 

### Záverečná sumarizácia

Pri sumarizácií použijeme pre prehľadnosť tabuľku s dvoma stĺpcami, ktoré vyjadrujú:
- veci, prístupy, výsledky s ktorými sme boli v šprinte spokojní
- veci, prístupy, výsledky, na ktorých je treba popracovať a do budúcna ich zlepšiť

*Šablóna pre tabuľku záverečnej sumarizácie*

| S čím sme boli spokojní | Čo treba do budúcna zlepšiť |
| --- | ----------- |
| spokojnosť 1 | nespokojnosť 1 |
| spokojnosť 2  | nespokojnosť 2 |
| spokojnosť 3 | |
| spokojnosť 4 | |




*Autor: Jakub Sorád*

