# Povolenia dokumentu

Používateľ, pridávajúci dokumenty do digitálnej knižnice by mal mať možnosť
explicitne nastavovať pre každý dokument povolenia, pre jednotlivé funkcionality.
Pr. administrátor chce zakázať tlačenie dokumentu, preto pri jeho nahrávaní do systému
zaškrtne vstupné pole, ktoré zamedzí používateľovi, resp. aspoň neponúkne možnosť
tento dokument vytlačiť. Táto špecifikácia obsahuje základný set povolení a odporúčania
akým spôsobom je možné riešiť tento problém na back-ende ale aj front-ende knižnice.

## Databázová štruktúra

Keďže každý dokument bude obsahovať viacero možností na povolenia alebo zakázanie
funkcionalít, pridávať stĺpce do tabuľky `acquisitions` alebo `entries` nie je najvhodnejšie riešenie,
pretože štruktúra by sa len zväčšovala a strácala na prehľadnosti.

Najvhodnejším riešením sa pri väčšom počte povolení zdá byť *JSON* štruktúra, ktorou zbytočne
nepridávame ďalšie stĺpce ale použijeme len jeden stĺpec typu `jsonb`, ktorý obsahuje objekt s
`key: value` pármi, kde `key` je názov povolenia a `value` hodnota, ktorá bližšie špecifikuje spravanie.
Použitím tohto typu stĺpca dosiahneme, že nad stĺpcom vieme robiť
rôzne operácie, napr. nájsť dokumenty, ktoré majú zakázané zdieľanie.

## Štruktúra povolení

- **text_layer** - povoľuje pri zobrazovaní PDF
  renderovanie textovej vrstvy

- **annotation_layer** - umožňuje pri zobrazovaní PDF
  renderovanie anotačnej vrstvy, ak nejaká v dokumente existuje

- **print** - funkcionalita, ktorá na front-ende povoľuje
  zobrazenie tlačidla pre tlač dokumentu

- **share** - povoľuje na front-ende zdieľanie alebo export dokumentu

- **citations** - povoľuje čítateľovi generovať citácie

- **render_type** - nastavením tohto povolenia na **1** spôsobí, že dokument
  sa na front-ende vyrenderuje po stranách (používateľ uvidí len jednu stranu). Ak je nastavené na
  **2** - dokument sa vyrenderuje celý a používateľ môže scrollovať celý dokument naraz. Číslovanie je
  zameniteľné za iný typ, napr. `string`. V budćnosti je možné pridávať ďalšie spôsoby renderovania.

## Príklad štruktúry

```json
{
  text_layer: true,
  annotation_layer: true,
  print: false,
  share: false,
  citations: true,
  render_type: 1
}
```

*Autor: Rastislav Balcerčík*
