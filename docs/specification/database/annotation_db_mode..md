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

...TODO