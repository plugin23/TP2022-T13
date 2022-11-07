# Proces generovania footerov 

Na obrázku nižšie sa nachádza sekvenčný diagram procesu tvorby footerov pre PDF súbory. Proces prebieha tak, že nám na backend príde očakávaný Base64, ktorý je prekonvertovaný na PDF. PDF je následne  rozdelené na jednotlivé strany, na ktorých koniec sa bude pridávať footer, v ktorom sa bude nachádzať meno používateľa, pre ktorého je PDF licencované spolu s dátumom a časom vytvorenia.

*Autor: Matej Lánik*