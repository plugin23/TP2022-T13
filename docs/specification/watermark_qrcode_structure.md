# Vodoznak a štruktúra QR kódu

Ochrana dokumentov je jedna zo základných vecí, ktoré je nutné pokryť a riešiť v našom projekte. Cieľom je, aby sme vo veľkej miere eliminovali neoprávnené kopírovanie,
rozposielanie chránených PDF dokumentov. Spôsob, aký budeme aplikovať v našom PDF vieweri je použitie vodoznakom ("watermarks") na každej strane dokumentu pomocou unikátneho QR kódu. Zároveň chceme docieliť to, aby tento QR kód nebol v rámci strany dokumentu invazívny a aby nevzbudzoval zbytočnú pozornosť používateľa. V prípade, ak by sa predsa používateľ rozhodol napríklad pomocou QR kode readera naskenovať daný QR kód, informácie z neho budu preňho z prvotného pohľadu nezaujímavé.

## Štruktúra QR kódu a jeho dáta

Bude sa skladať z podstatných dát, ktoré v prípade neopráveného nakladania s PDF dokumentom slúžia na jednoznačnú identifikáciu. Typ dát, ktoré použijeme je inšpirovaný a nadväzuje na [databázový model](@site/static/img/evil_flowers_catalog.png) Evil Flowers.

- `id` - identifikátor dokumentu/akvizície (knihy, zbierky a pod.)
- `creator_id` - identifikátor používateľa, pre ktorého je dokument vygenerovaný. V prípade neoprávneného rozosielania vieme jednoznačne zistiť, ktorý používateľ dokument rozposlal alebo robil úkony, ktoré nie sú v súlade s pravidlami.
- `title` - názov dokumentu
- `is_public` - true/false hodnota obsahujúca infomáciu, či je dokument Open Access alebo nie
- `created_at` - časová pečiatka vo forme dátumu, kedy bol dokument pre používateľa vygenerovaný. 

## Spôsob generovania watermarku

V tejto kapitole prejdeme samotný spôsob akým štýlom budeme QR generovať s možnosťou spätného procesu v prípade potreby.

### JSON formát

Ukladať a pracovať s dátami v JSON formáte v komnbinácii s QR kódom sa javí ako vhodná voľba. Potrebné dáta si preto budete reprezentovať v JSON formáte a ukážka môže vyzerať nasledovane:

```json
{
    "id": 99565656, 
    "user_id": 564521654, 
    "acquisition_id": 989556, 
    "title": "Nazov knihy",
    "is_public": true, 
    "created_at": "2022-11-191-15:08:29.9072"
}
```

### Generovanie

Pokiaľ máme pripravené dáta, môžeme v Pythone veľmi jednoducho vytvoriť/generovať unikátny QR kód, ktorý obsahuje práve naše dáta.
Ukážka jednoduchého kódu, ktorý vygeneruje QR kód:

Inštalácia knižnice [qrcode](https://pypi.org/project/qrcode/) pre QR kód:
```shell
$ pip install qrcode
```

Zdrojový kód jednoduchého generovania QR kódu:
```python
import qrcode
import json

# Origin data object 
data = {
    "id": 99565656, 
    "user_id": 564521654, 
    "acquisition_id": 989556, 
    "title": "Nazov knihy",
    "is_public": True, 
    "created_at": "2022-11-191-15:08:29.9072"
}
 
# Instance of QR code class
qr = qrcode.QRCode(version = 1,
                   box_size = 5,
                   border = 5)

# converting into JSON: 
dataJSON = json.dumps(data)
qr.add_data(dataJSON)

qr.make(fit = True)
img = qr.make_image(fill_color = 'black',
                    back_color = 'white')
 
img.save('watermark_qrcode_example.png')
```

Výstupom je samotný QR kód:

![QR_example](@site/static/img/watermark_qrcode_example.png) 

### Spätná interpretácia

Z QR kódu pri spätnej interpretácii vieme vyčítať informácie. Tento prístup je vhodný v scenári, keď by sa stal incident, že chránený vygenerovaný PDF dokument s vodoznakom v podobe QR kódu je neoprávnene kopírovaný, rozposielaný. Pri dekódovaní QR sa nám zobrazia pôvodné informácie a vieme identifikovať používateľa, ktorý sa tohto činu dopustil, tiež aj o aký dokument sa jednalo a kedy bol tento dokument pôvodne pre používateľa generovaný.

Príklad, kedy vyššie zobrazený QR sme spätne dekódovali a dostanene pôvodné informácie:
![QR_code_decoded](@site/static/img/qrcode_decoded.png) 

### Šifrovanie

V našom riešení pomocou QR kódov je vhodné použiť aj šifrovanie, ktoré by pôvodné JSON dáta zašifrovalo a až potom by sme generovali QR kód. Následne ak by sme potrebovali získať informácie o používateľovi, dokumente a čase, tak by sme z QR kódu získali zašifrované dáta, pomocou kľuča by sa vykonalo dešifrovanie a dostali by sme sa k pôvodným dátam.
Toto by nám zabezpečilo ešte väčšiu "nezaujímavosť" pre bežného používateľa, ktorý by chcel pomocou QR code readera vyskúšať, aký výstup mu QR kód poskytune. Výstupom by pre používateľa boli iba rôzne znaky, ktoré by pre neho neboli zaujímavé, čo je presne stav, ktorý chceme dosiahnuť.

#### cryptography

Na šifrovanie môžeme použiť knižnicu [cryptography](https://cryptography.io/en/latest/), ktorá v sebe obsahuje šifrovacie štandardy. Na jednoduchom príklade je vysvetlený celý proces šifrovania a dešifrovania údajov, ktoré budú obsahovať QR kód.

Nainštalovanie knižnice:
```shell
$ pip install cryptography
```

Pôvodné dáta a importy knižníc:
```python
from cryptography.fernet import Fernet
import json

# Origin data object 
data = {
    "id": 99565656, 
    "user_id": 564521654, 
    "acquisition_id": 989556, 
    "title": "Nazov knihy",
    "is_public": True, 
    "created_at": "2022-11-191-15:08:29.9072"
}
dataJSON = json.dumps(data)
```
Vygenerujeme kľúč, ktorý použijeme pre šifrovanie a následné dešifrovanie (použili sme Fernet, ale môžeme použiť aj iné metódy šifrovania). Následne dostaneme inštanciu Fernet classy s klúčom.

```python
key = Fernet.generate_key()
fernet = Fernet(key)
```

V tomto bloku vykonáme šifrovanie a dešifrovanie. Potom porovnáme výstupy a vidíme, že sme naše dáta o dokumentoch v JSON formáte sú úspešne zašifrované a tiež sme dokázali vykonať aj spätnú interpretáciu, ktorá je vidieť v konzoli.
```python
encryptedData = fernet.encrypt(dataJSON.encode())
decryptedData = fernet.decrypt(encryptedData).decode()

print("Original Data: ", dataJSON)
print("Encrypted Data: ", encryptedData)
print("Decrypted Data: ", decryptedData)
```


*Výstup z konzoli:*
```console
Original Data:  {"id": 99565656, "user_id": 564521654, "acquisition_id": 989556, "title": "Nazov knihy","is_public": true, "created_at": "2022-11-191-15:08:29.9072"}

Encrypted Data:  b'gAAAAABje9qgbm-ST3bQeezKsujFDpOWRPn4N8NKXK4l0bNwHIijy35vrV89a-s2HzxU7otApaiYPOnURtCw_zcB_XD7IsebQxFUmACx7ULWdjaByVZ0bEMTfWQMiIEzphwnL116f_4j...'

Decrypted Data:  {"id": 99565656, "user_id": 564521654, "acquisition_id": 989556, "title": "Nazov knihy","is_public": true, "created_at": "2022-11-191-15:08:29.9072"}
```

## Vizualizácia vodoznaku v dokumente

Nami navrhnutý vodoznak má nasledovné vlastnosti:
- **malá veľkosť**
- **nepriehladnosť**
- **nezasahuje do textu dokumentu**

*Ukážka strany PDF dokumentu:*

![QR_code_fullopacity](@site/static/img/watermark_qrcode_fullopacity.png) 

Pre vylepšenie ochrany dokumentov by bolo možné aplikovať generovanie QR kódu takým štýlom, že na každej strane by sa nachádzal na inej pozícií, čo by mohlo stažiť a znechutiť používateľovi, aby rozposielal a prekopirovával strany.

V našom projekte budeme zobrazovať menší QR kód, ktorý nebude zasahovať do textu. Z hľadiska vizuálneho aj implementačného je to podľa nášho uváženia vhodné riešenie.

*Autor: Jakub Sorád*