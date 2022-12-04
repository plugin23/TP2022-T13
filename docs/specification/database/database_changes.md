# Potrebné zmeny v databázovom modeli

Do databázového modelu je potrebné pridať 2 tabuľky: **user_acquisitions** a **annotations**

Záznamy v tabuľke **user_acquisitions** predstavujú páry cudzích kľúčov **user_id** a **acquisition_id**. Taktiež nesú flag **is_shared** a **share_page_range** pre určenie rozsahu strán, ktoré sú zdieľané.

Tabuľka **annatations** je bližšie popísaná v dokumente [Anotačná vrstva](annotation_db_mode..md).

![Časť databázového modelu zachytávajúceho zmeny v databáze](@site/static/img/db_changes.png)

*Autor: Róbert Szabó*