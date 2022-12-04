# Databázový model pre zdieľanie dokumentu

Používatelia môžu zdieľať dokumenty(pokiaľ je zdieľanie dokumentu povolené) s ostatnými ľudmi priamo z nášho Viewera. Pre zdieľanie sa vygeneruje unikátna URL adresa odkazujúca na zdieľaný dokument.

Zmeny v databázovom modeli závisia od toho, ktorý dokument budeme zdieľať. Ak by sme zdieľali všeobecný dokument, potrebovali by sme ukladať cudzí kľúč **acquistion_id** a **user_id** pre identifikovanie dokumentu a používateľa, ktorý daný dakument zdieľa. Ak by sme zdieľali dokument vygenerovaný pre používateľa, ako cudzí kľúč by nám postačoval **user_acquisition_id**, nakoľko informácia o používateľovi je dohladateľná v druhej tabuľke. V takomto prípade by bolo možné zdieľať aj anotačnú vrstvu(ak existuje), ktorá je prepojená s vygenerovaným dokumentom.

Rozhodli sme sa pre použitie **custom_acquisition_id**, nakoľko pár **acquisition_id** a **user_id** bude evidovaný vo vlastnej tabuľke.

Pre ukladanie rozsahu strán, ktoré budú zdieľané, sa bude používať formát `int4multirange`.

## Návrh zmien v databázovom modeli

Pridanie tabuľky **user_acquisitions** s flagom pre zdieľanie s nasledovnými stĺpcami:

- **`<PK>` id**: uuid
- **created_at**: timestamp with timezone
- **`<FK>` user_id**: uuid
- **`<FK>` acquisition_id**: uuid
- **is_shared**: boolean
- **expire_at**: timestamp with timezone
- **share_page_range**: int4multirange
- **url**: text

*Autor: Róbert Szabó*
