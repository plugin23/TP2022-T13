# Proces zobrazenia dokumentu

Na zobrazenie PDF dokumentu sa používa PDF.js. Prijatú base64, ktorá predstavuje PDF dokument, transformuujeme na binárny reťazec. Ten sa poskytne PDF.js API, z ktorého získame samotný PDF súbor. Následne sa vykreslí prvá stránka PDF súboru do canvas a vykreslí sa aj textová vrstva danej strany.

![Sekvenčný diagram procesu renderovania dokumentu](@site/static/img/document_rendering_process.png)

*Autor: Róbert Szabó*