# Štruktúra zdieľacieho QR kódu
Pri zdieľaní dokumentu sa používateľovi vygeneruje link a QR kód. Vďaka tomuto linku/QR kódu bude môcť svoj dokument zdieľať s ďalšími používateľmi. Cieľom tohto QR kódu bude uľahčenie načítania dokumentu pre používateľa, ktorý má k dispozícii QR reader. Keďže informácia v QR kóde nie je nijakým spôsobom utajovaná pred používateĽmi, nemusia byť šifrované.

## Dáta v zdieľacom QR kóde
V QR kóde sa bude nachádzať iba url, ktorá bude linkom na zdieľaný dokument. V tomto QR kóde sa musí nachádzať čo najmenej dát, aby bol čo najjednoduchší na načítanie QR readermi. 

- **url** - link URL k dokumentu, ktorý bol zdieľaný

## Spôsob generovania QR kódu
Pri tomto QR kóde budeme pracovať s JSON formátom podobne ako pri ďalších QR kódoch používaných na eliminovanie neoprávneného zdieľania a kopírovania dokumentov. Príklad JSON-u je nasledovný.
![Príklad JSON formátu pri zdieľacom QR kóde](@site/static/img/sharing_QR_json.png)


## Generovanie
Zdieľací QR kód budeme generovať na frontende vždy po jeho vyžiadaní od používateľa, ktorý chce zdieľať dokument týmto spôsobom. Pri zdieľaní taktiež bude zvolený dátum expirácie, ktorý bude môcť používateľ nastaviť. Keďže sa bude tento typ QR kódu vytvárať na frontende, budeme na jeho generovanie používať React. Pokiaľ máme pripravené dáta, môžeme v Reacte veľmi jednoducho vytvoriť/generovať unikátny QR kód, ktorý obsahuje práve naše dáta. Ukážka jednoduchého kódu, ktorý vygeneruje QR kód:

![Vytvorenie QR kódu v Reacte](@site/static/img/QR_react_example.png)

*Autor: Matej Lánik*