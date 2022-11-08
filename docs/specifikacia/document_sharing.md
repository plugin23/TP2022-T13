# Proces zdieľania dokumentu medzi používateľmi

V tomto dokumente popisujeme proces zdieľania dokumentu. Konkrétne je zdieľanie užitočné pre pedagóga, 
aby mohol zazdieľať konkrétne dielo, príp. jeho časť pre študentov. 
Taktiež si môžu študenti zdieľať diela/ich úseky medzi sebou.

Potrebujeme zabezpečiť zdieľanie tak, aby sa k dokumentu dostali iba osoby, pre ktoré je určený. 
Potrebujeme sa zamyslieť aj nad konkrétnym spôsobom zdieľania dokumentu, 
aby bolo jednoduché ho zdieľať pre konkrétnu skupinu ľudí a 
zároveň nebolo pre študenta príliš zložité, resp. zdĺhavé sa k zdieľanému dokumentu dostať.

## Navrhnutý proces

Proces prebieha vygenerovaním linku, ktorý smeruje k zdieľanému dielu, 
prípadne jeho konkrénemu úseku, ktorý zdieľame adresátom.
Link obsahuje informácie o diele, zdieľanom rozsahu a expiračnej dobe linku.
Expiračnú dobu linku nastaví používateľ, ktorý zdieľa dielo.
Tieto informácie budú zašifrované do uid64 pre udržanie normálnej dĺžky linku a obštrukcii informácii v ňom.
Pri zdieľaní sú možnosti zazdieľať celý dokument, či jeho konkrétnu stranu alebo rozsah. 
Automaticky sa doplní strana, na ktorej sa používateľ nachádza.
Okrem linku sa dá vygenerovať aj QR kód. Pre otvorenie diela je potrebné byť prihlásený do systému a teda aj 
v prípade získania linku na zdieľanie inou skupinou, máme istotu, že stále sa k nemu 
dokážu dostať iba používatelia s prístupom do systému. 
Zdieľané dielo sa bude vytvárať ako ďalšie PDF, ktoré 
bude obsahovať okrem ďalších, tiež informáciu o tom kto ho zdieľal v QR vodoznaku.


![SeqDiagram](@site/static/img/share_sequence.png) 





*Autor: Juraj Valiček*

