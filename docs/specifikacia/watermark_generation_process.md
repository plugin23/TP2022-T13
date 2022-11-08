# Proces generovania footerov 

Na obrázku nižšie sa nachádza sekvenčný diagram procesu tvorby footerov pre PDF súbory. Proces prebieha tak, že nám na backend príde očakávaný Base64, ktorý je prekonvertovaný na PDF. Následne sa vygeneruje QR kód, v ktorom sa budú nachádzať informácie o licencii PDF, vlastníkovi, čase vygenerovania. Vytvorí sa prvá strana, v ktorej sa budú nachádzať informácie o licencii PDF, ako aj údaje o vlastníkovi. PDF je následne  rozdelené na jednotlivé strany, na ktorých koniec sa bude pridávať footer, v ktorom sa bude nachádzať vyššie spomínaný QR kód, meno používateľa, pre ktorého je PDF licencované spolu s dátumom a časom vytvorenia.

![Sekvenčný diagram procesu generovania PDF footerov](@site/static/img/footer_sequence_diagram.png)

*Autor: Matej Lánik*