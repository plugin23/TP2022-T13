# Metodika verziovania a práce s repozitárom

Tento dokument obsauje odporúčané postupy a pravidlá používané pri práci s repozitárom,
nástrojom **git** a platformou **GitHub**, na ktorej sa repozitár nachádza.

## Klonovanie repozitára

Bežný **GitHub workflow** je keď si používateľ, ktorý sa chce spolupodieľať na vývoji našej aplikácie
"forkne" repozitár, pomocou tlačidla **Fork** na [stránke repozitára](https://github.com/EvilFlowersCatalog/EvilFlowersViewer).
To vytvorí kópiu repozitára, na ktorej môže používateľ pracovať bez toho aby ovplyvňoval originálny repozitár.

Po vytvorení kópie originálneho repozitára je možné vytvoriť jeho lokálny klon v súborovom systéme pomocou príkazu

```shell
git clone https://github.com/user/EvilFlowersViewer.git
```

## Vetvy

### Štruktúra vetiev

- **`master`** - východzia vetva obsahujúca kód v produkcii
- **`dev`** - vývojová vetva (staging prostedie), obsahujúca kód vo vývoji
- **`feat/<číslo tasku v Jire>`** - pridávanie nových funkcionalít, ktoré sa mergujú do `dev` vetvy
- **`fix/<číslo tasku v Jire>`** - opravy chýb

### Užitočné príkazy na prácu s vetvami

#### Zobrazenie všetkých aktívnych vetiev v repozitári

```shell
git branch
```

#### Aktualizácia lokálnych vetiev

```shell
git fetch
```

#### Vytvorenie novej vetvy s aktuálnymi necommitnutými zmenami

```shell
git checkout -b <názov vetvy>
```

#### Prepnutie na inú vetvu

```shell
git switch <názov vetvy>
```

## Commit

Po dokončení úlohy alebo jej časti sa vytvára commit, čím sa progress uloží do aktuálnej vetvy.
Každý commit musí spĺňať stanovené pravidlá a kódu v commite by nemalo byť príliš veľa aby sa dal
jednoduchšie čítať.

### Pravidlá commitovania

- Commit správa by mala byť výstižná a krátka, dodatočné informácie o zmenách radšej napísať do Pull Requestu
- Jeden commit pokrýva jednu zmysluplnú časť kódu
- Necommitovať formátovacie zmeny spolu s novými funkcionalitami

### Užitočné príkazy na prácu s commitmi

#### Commit so správou

```shell
git commit -m "<text správy>"
```

## Pull request

Názov pull requestu by mal byť **výstižný** a popisovať funkcionalitu, ktorú chce vývojár zapracovať do aplikácie.
Každý pull request musí obsahovať aj popis, v ktorom vývojár hlbšie opíše zmeny, ktoré obsahuje. Taktiež
by mal obsahovať aj **číslo tasku v Jire**, s ktorým súvisí.

Na úspešný merge do `dev` vetvy musí byť kód skontrolovaný aspoň **jedným** členom tímu a schválený **SCRUM masterom**.
Po úspešnom merge sa vetva, z ktorej sa vytvoril pull request vymaže.

## Verziovanie

Každá verzia dodržuje následujúci formát: **`v<major>.<minor>.<patch>`** (pr. **v1.0.1**) a pri verziovaní sa riadime
[pravidlami sémantického verziovania](https://semver.org/). 

- **Major** verzia sa zvyšuje, ak aplikácia obsahuje nové nekompatibilné zmeny
- **Minor** verzia sa zvyšuje, ak aplikácia obsahuje nové spätne kompatibilné funkcionality
- **Patch** verzia sa zvyšuje, ak aplikácia obsahuje spätne kompatibilné opravy chýb

## Publikovanie

Pred publikovaním novej verzie je nutné sa uistiť že aktuálna verzia aplikácie v `dev` vetve je pripravená 
na jej publikovanie a neobsahuje chyby. Pre publikovanie je nutné vytvoriť pull request z `dev` vetvy do `master`
vetvy. Tento pull request by mal obsahovať popis k novým funkcionalitám novej verzie.

Po mergnutí pull requestu sa v **GitHube** vytvorí nový release s tagom, ktorý nesie názov publikovanej verzie. pr **v1.0.1**.
Podobne aj do poznámok release sa uvádza popis k novým funkcionalitám.

Po vytvorení nového releasu s konkrétnym tagom verzie **GitHub** spustí akciu, ktorá aplikáciu pripraví (build) na publikovanie
a po dokončení buildu je vypublikuje do [npm.js](https://npmjs.com/).

*Autor: Rastislav Balcerčík*

