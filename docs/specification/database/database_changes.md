# Potrebné zmeny v databázovom modeli

Do databázového modelu je potrebné pridať 3 tabuľky: **custom_acquisitions**, **annotations** a **share_links**.

Záznamy v tabuľke **custom_acquisitions** predstavujú páry cudzích kľúčov **user_id** a **acquisition_id**.

Tabuľka **annatations** je bližšie popísaná v dokumente [Anotačná vrstva](annotation_db_mode..md) a tabuľka **share_links** je popísanná v dokumente [Databázový model pre zdieľanie dokumentu](./document_sharing_database_model.md).

![Časť databázového modelu zachytávajúceho zmeny v databáze](@site/static/img/db_changes.png)