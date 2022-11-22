# Anotačná vrstva

Anotačnú vrstvu tvoria používeteľské poznámky vo forme poznámok, nakreslených tvarov,
zvýraznení a iných neinvazívnych manipulácii s dokumentom, ktoré sa renderujú nad
dokumentom a jeho textovou vrstvou. Každý používateľ má možnosť takýmto spôsobom
upravovať a manipulovať s dokumentom. Pre tento účel je ale nutné ukladať jeho
anotačnú vrstvu, aby sa jeho rozpracované poznámky ukladali a pri ďalšom otvorení
ich našiel v rovnakom stave ako boli pred zavretím dokumentu.

## Vykresľovanie na front-ende

Pri zobrazovaní PDF v našom Vieweri, dáme používateľovi možnosť pracovať
s nástrojmi, ktoré vedia kresliť do tejto anotačnej vrstvy. Anotačná vrstva
sa na front-ende pri zobrazovaní PDF správa ako obyčajný `canvas` element,
vykreslený na vrchu dokumentu a nad textovou vrstvou. Pre kreslenie na toto
plátno použijeme jedno z existujúcich riešení alebo implementujeme vlastnú
sadu nástrojov.

## Ukladanie anotačnej vrstvy

Po zavolaní akcie pre uloženie anotačnej vrstvy na front-ende, vykreslené tvary a texty prekonvertujeme 
na formát `svg`, webovo priateľský formát, ktorý podporuje vektorovú grafiku. Ukladanie
môže prebiehať po akcii od používateľa, alebo môže prebiehať v intervaloch, čím používateľa
odbremení od zabúdania ukladania svojho progressu. Dáta vo formáte `svg` sú odoslané
na back-end knižnice, ktorá ich spracuje a uloží do databázy.

## Návrh databázovej štruktúry

Keďže každý používateľ dokáže upravovať anotačnú vrstvu v ktoromkoľvek svojom dokumente,
je nutné aby databázová štruktúra pre anotácie bola vo vzťahu s používateľom a taktiež dokumentom,
ku ktorému patrí. Vhodným riešením tohto problému je vytvoriť tabuľku `annotations`, ktorá bude obsahovať
cudzie kľúče na používateľa a dokument. Dáta vo formáte `svg`, môžu byť uložené v stĺpci `annotation_data`, keďže
formát `svg` môže byť uložený ako typ `string` alebo
tabuľka môže obsahovať stĺpec, s hodnotou URL, ktorá smeruje na anotačnú vrstvu, ktorá môže byť uložená napr. na S3 úložisku,
aby sa zbytočne nezahlcovala relačná databáza. Každá anotačná vrstva môže byť uložená samostatne, pre každú stranu
v dokumente, v takomto prípade by bolo nutné použiť aj stĺpec `page`.

### Databázový model

![Databázový model anotačnej vrstvy](@site/static/img/db_model_annotation.png)