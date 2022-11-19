# Viewer API

Viewer API predstavuje jadro aplikácie pracujúce s pdf.js API a implementuje funkcie na renderovanie a manipuláciu s dokumentom.
Poskytuje high-level API, ktorá sprístupňuje tieto funkcionality ostatným komponentom.

## Rendering

#### `ViewerAPI.renderPage(options: PageOptions)`

Volaním funkcie `renderPage` s argumentom `options` vyrenderuje stranu v zadefinovanom HTML Elemente typu
Canvas.

```ts
interface RenderOptions {
  pageNumber?: number
  textLayer?: boolean
}
```

`pageNumber` - voliteľný atribút špecifikujúci, ktorá strana dokumentu sa má vyrenderovať. Ak nie je zadefinovaný,
renderuje sa prvá strana dokumentu.

`textLayer` - voliteľný atribút špecifikujúci, či sa má vyrenderovať aj textová vrstva strany. Ak nie je zadefinovaný,
východzie nastavenie renderuje stranu aj s textovou vrstvou.

#### `ViewerAPI.nextPage()`

Vyrenderuje stranu dokumentu, následujúcu po aktuálne vyrenderovanej strane ak je to možné. Ak už je vyrenderovaná
posledná strana dokumentu, funkcia vráti `false`.

#### `ViewerAPI.prevPage()`

Podobne ako predošlá funkcia, jej volanie vyrenderuje predchádzajúcu stranu, ak je to možné, inak vráti `false`.

#### `Viewer.getDocumentLength()`

Volanie funkcie `getDocumentLength` vracia celé číslo, reprezentujúce počet strán v dokumente.
Funkcia je vhodná na použitie pri navigácii v dokumente a paginácii.

## Vyhľadávanie

#### `ViewerAPI.search(options: SearchOptions)`

Umožňuje full-textové hľadanie v textovom kontexte dokumentu. Funkcia vracia výsledky hľadania vo formáte zadefinovanom
v rozhraní `SearchResult`.

```ts
interface SearchOptions {
  pattern: string
  currentPage?: boolean
  caseSensitive?: boolean
  matchWord?: boolean
}
```

`pattern` - povinný atribút, predstavuje hľadaný výraz, môže byť aj vo forme platného regulérneho výrazu

`currentPage` - voliteľný atribút, špecifikujúci, či sa má vyhľadávať len na aktuálnej vyrenderovanej strane, defaultne hľadá v celom dokumente

`caseSensitive` - voliteľný atribút, špecifikujúci, či sa má vyhľadávať v móde rozlišovania veľkých a malých písmen

`matchWord` - voliteľný atribút, špecifikujúci, či sa má vyhľadávať v móde, v ktorom výsledky vracajú len nájdené
celé slová

```ts
interface SearchResult {
  pattern: string
  matchPreview: string
  page: number
  annotation: {
    x: number
    y: number
    width: number
    height: number
  }
}
```

Výsledky hľadania funkcia vracia pole výsledkov vo formáte `SearchResult`
definovanom v rozhraní vyššie. Každý výsledok obsahuje vyhľadávaný výraz,
náhľad nájdeného textu, číslo strany, na ktorej sa
výraz nachádza a pozícia tohto nájdeného výrazu, ktorú je potom možné použiť na zvýraznenie
na vyrenderovanej strane.

#### `ViewerAPI.renderFoundPattern(searchResult: SearchResult)`

Funkcia, ktorá v dokumente zvýrazní konkrétny výraz. Ak sa výraz nachádza na odlišnej
strane ako je momentálne vyrenderovaná, zavolá aj `renderPage` s konkrétnym číslom strany ešte
pred vyrenderovaním zvýrazňovacieho elementu.

## Manipulácia s dokumentom

#### `ViewerAPI.zoom(value?: number)`

Volaním funkcie `zoom` sa vyrenderovaná strana dokumentu priblíži na hodnotu priblíženia, špecifikovanú
v argumente funkcie. Táto hodnota je voliteľná a ak nie je poskytnutá v argumente, dokument sa zväčší na
najbližšiu vyššiu možnú hodnotu.

#### `ViewerAPI.unzoom()`

Funkcia `unzoom` slúži na resetovanie hodnoty priblíženia. Jej volaním sa nastaví hodnota priblíženia na 1.

## Citácie

#### `ViewerAPI.generateCitation(options: CitationOptions)`

Volaním funkcie `generateCitation` Viewer vygeneruje podľa poskytnutých parametrov v argumente funkcie
citáciu spĺňajúcu citačné normy. Umožňuje generovať aj citácie vybraného textu alebo strán. Na vygenerovanie
sa použijú metadáta dokumentu, ktoré sú súčasťou dokumentového kontextu.

```ts
interface CitationOptions {
  format: 'plain' | 'bibtex'
  pages?: {
    from: number
    to: number
  }
  citedText?: string
}
```

`format` - prepínač, ktorý určuje aký typ citácie sa vygeneruje

`pages` - voliteľný parameter, špecifikujúci, ktoré konkrétne strany do citácie zahrnúť

`citedText` - voliteľný parameter, špecifikujúci konkrétny text, ktorý sa má do citácie zahrnúť

## Export a zdieľanie

#### `ViewerAPI.exportDocument(options: ExportOptions)`

Dokument je možné exportovať pomocou funkcie `exportDocument`. Ten je po zavolaní pripravený na stiahnutie.
Do argumentu funkcie je možné poslať formát exportovaného dokumentu a dokonca je možné vybrať, ktoré strany
sa exportujú.

```ts
interface ExportOptions {
  format: 'pdf'
  pages?: {
    from: number
    to: number
  } | number[]  
}
```

`format` - prepínač, ktorý určuje v akom formáte sa vygeneruje export

`pages` - voliteľný parameter, umožňujúci vybrať interval alebo špecifikovať konkrétne strany, ktoré sa do exportu zahrnú

#### `ViewerAPI.shareDocument(lifetime: number)`

Volaním funkcie `shareDocument` sa spustí proces zdieľania dokumentu - vytvorí sa unikátna URL s
platnosťou špecifikovanou v argumente funkcie. Ten sa následne zobrazí v dialógovom okne spolu s QR kódom tejto URL.

`number` - životnosť prístupovej URL v minútach, `-1` pre URL s nekončiaciou platnosťou

*Autor: Rastislav Balcerčík*
