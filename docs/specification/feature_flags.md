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

Najvhodnejším riešením sa pri väčšom počte povolení zdá byť symbolická notácia, ktorou zbytočne
nepridávame ďalšie stĺpce, pre každé povolenie do tabuliek ale použijeme len jeden jediný stĺpec
`permissions` alebo `features`, ktorý obsahuje reťazec znakov. Keďže pracujeme s SQL databázou,
stĺpec je typu `varchar` s dĺžkou *n*.

## Štruktúra symblickej notácie

Raťazec obsahuje príznaky `T` - ak je funkcionalita povolená alebo `F` - ak je zakázaná. 
Takáto štruktúra je jednoducho rozšíriteľná a udržateľná.
Všetky funkcionality sú implicitne povolené. Reťazec obsahuje *n* po sebe nasledujúcich znakov,
kde *n* je počet povolení v nasledujúcom poradí:

- **Textová vrstva** - povoľuje pri zobrazovaní PDF
  renderovanie textovej vrstvy

- **Anotačná vrstva** - umožňuje pri zobrazovaní PDF
  renderovanie anotačnej vrstvy, ak nejaká v dokumente existuje

- **Tlač dokumentu** - funkcionalita, ktorá na front-ende povoľuje
  zobrazenie tlačidla pre tlač dokumentu

- **Zdieľanie dokumentu** - povoľuje na front-ende zdieľanie alebo export dokumentu

- **Generovanie citácii** - povoľuje čítateľovi generovať citácie

- **Renderovanie po stranách** - nastavením tohto povolenia na `T` spôsobí, že dokument
  sa na front-ende vyrenderuje po stranách (používateľ uvidí len jednu stranu). Ak je nastavené na
  `F` - dokument sa vyrenderuje celý a používateľ môže scrollovať celý dokument naraz.

## Príklad symbolickej notácie

- Ak administrátor povolí všetky funkcionality pre dokument, reťazec znakov v symbolickej notácii
bude vyzerať následovne: **`TTTTTT`**.

- Pre zakázanie funkcionalít zdieľania a tlačenia dokumentu, reťazec vyzerá následovne: **`TTFFTT`**

- Ak sú všetky funkcionality zakázané, reťazec vyzerá následovne: **`FFFFFF`**

*Autor: Rastislav Balcerčík*
