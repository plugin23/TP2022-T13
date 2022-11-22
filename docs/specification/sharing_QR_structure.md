# Štruktúra zdieľacieho QR kódu
Pri zdieľaní dokumentu sa používateľovi vygeneruje link a QR kód. Vďaka tomuto linku/QR kódu bude môcť svoj dokument zdieľať s ďalšími používateľmi. Cieľom tohto QR kódu bude uľahčenie načítania dokumentu pre používateľa, ktorý má k dispozícii QR reader. Keďže informácia v QR kóde nie je nijakým spôsobom utajovaná pred používateľmi, nemusia byť šifrované.

## Dáta v zdieľacom QR kóde
V payloade QR kódu sa bude nachádzať plaintext URL s jej protokolom, ktorá bude linkom na zdieľaný dokument. V tomto QR kóde sa musí nachádzať čo najmenej dát, aby bol čo najjednoduchší na načítanie QR readermi. 

## Generovanie
Zdieľací QR kód budeme generovať na frontende vždy po jeho vyžiadaní od používateľa, ktorý chce zdieľať dokument týmto spôsobom. Pri zdieľaní taktiež bude zvolený dátum expirácie, ktorý bude môcť používateľ nastaviť. Keďže sa bude tento typ QR kódu vytvárať na frontende, budeme na jeho generovanie používať React. Pokiaľ máme pripravené dáta, môžeme v Reacte veľmi jednoducho vytvoriť/generovať unikátny QR kód, ktorý obsahuje práve naše dáta. Ukážka jednoduchého kódu, ktorý vygeneruje QR kód:

![Vytvorenie QR kódu v Reacte](@site/static/img/QR_react_example.png)

*Autor: Matej Lánik*