# Databázový model pre zdieľanie dokumentu

Používatelia môžu zdieľať dokumenty(pokiaľ je zdieľanie dokumentu povolené) s ostatnými ľudmi priamo z nášho Viewera. Pre zdieľanie sa vygeneruje unikátna URL adresa odkazujúca na zdieľaný dokument.

Zmeny v databázovom modeli závisia od toho, ktorý dokument budeme zdieľať. Ak budeme zdieľať všeobecný dokument, budeme potrebovať ukladať cudzí kľúč **acquistion_id** a **user_id** pre identifikovanie dokumentu a používateľa, ktorý daný dakument zdieľa. Ak budeme zdieľať dokument vygenerovaný pre používateľa, ako cudzí kľúč nám postačuje **custom_acquisition_id**, nakoľko informácia o používateľovi je dohladateľná v druhej tabuľke. V takomto prípade by bolo možné zdieľať aj anotačnú vrstvu(ak existuje), ktorá je prepojená s vygenerovaným dokumentom.

Pre ukladanie rozsahu strán, ktoré budú zdieľané, sa bude používať formát `JSON`. Do poľa sa budú ukladať čísla konkrétnych strán, pre rozsah sa pridá JSON pole s dvomi číslami reprezentujúcimi prvú a poslednú stranu rozsahu.

## Návrh zmien v databázovom modeli

Pridanie tabuľky **shared_acquisitions** s nasledovnými stĺpcami:

- **`<PK>` id**: uuid
- **`<FK>`  acquisition_id + user_id / custom_acquisition_id** - všetky typu uuid
- **created_at**: timestamp with timezone
- **expire_date**: timestamp with timezone / **expire_time**: time
- **url**: text/varchar
- **range**: JSON

*Autor: Róbert Szabó*
