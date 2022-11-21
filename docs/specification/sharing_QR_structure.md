# Štruktúra zdieľacieho QR kódu
Pri zdieľaní dokumentu má používateľ možnosť vygenerovať link, QR kód alebo oboje. Vďaka tomuto linku/QR kódu bude môcť svoj dokument zazdieľať s ďalšími používateľmi. Cieľom tohto QR kódu bude uľahčenie načítania dokumentu pre používateľa, ktorý má k dispozícii QR reader. Keďže informácie v QR kóde nie sú nijakým spôsobom utajované pred používateĽmi, nemusia byť šifrované.

## Dáta v zdieľacom QR kóde
V tomto QR kóde sa budú nachádzať viaceré dáta, ktoré budú poskytovať informácie o dokumente ktorý bol zdieľaný.

- **document_url** - link URL k dokumentu, ktorý bol zdieľaný
- **document_id** - id dokumentu
- **user_id** - id používateľa, ktorý tento dokument zdieľa
- **generated_at** -  časová pečiatka vo forme dátumu, kedy bol dokument pre používateľa
vygenerovaný.
- **expires_at** - časová pečiatka vo forme dátumu, kedy QR kód stratí platnosť.

## Spôsob generovania QR kódu
Pri tomto QR kóde budeme pracovať s JSON formátom podobne ako pri ďalších QR kódoch používaných na eliminovanie neoprávneného zdieľania a kopírovania dokumentov. Príklad JSON-u je nasledovný.
![Príklad JSON formátu pri zdieľacom QR kóde](@site/static/img/sharing_QR_json.png)


## Generovanie
Zdieľací QR kód budeme generovať na frontende vždy po jeho vyžiadaní od používateľa, ktorý chce zdieľať dokument týmto spôsobom. Pri zdieľaní taktiež bude zvolený dátum expirácie, ktorý bude defaultne 48 hodín, no používateľ ho bude môcť zmeniť. Keďže sa bude tento typ QR kódu vytvárať na frontende, budeme na jeho generovanie používať React. Pokiaľ máme pripravené dáta, môžeme v Reacte veľmi jednoducho vytvoriť/generovať unikátny QR kód, ktorý obsahuje práve naše dáta. Ukážka jednoduchého kódu, ktorý vygeneruje QR kód:

![Vytvorenie QR kódu v Reacte](@site/static/img/QR_react_example.png)

*Autor: Matej Lánik*