# Metodika bezpecneho fetchovania

Tento dokument obsauje strucny popis, ako zvysit bezpecnost komunikacie medzi back-endom a front-endom.
Nakolko je nas back-end implementovany v jazyku python, budeme sa primarne sustredit na pouzitie prave v pythone.

## Čo je to kryptografia s verejným kľúčom (public key cryptography)?

Kryptografia s verejným kľúčom je metóda šifrovania alebo podpisovania údajov pomocou dvoch rôznych kľúčov a sprístupnenia jedného z kľúčov, verejného kľúča, komukoľvek. Druhý kľúč je známy ako súkromný kľúč. Údaje zašifrované verejným kľúčom je možné dešifrovať iba súkromným kľúčom. Kvôli tomuto použitiu dvoch kľúčov namiesto jedného je kryptografia s verejným kľúčom známa aj ako **asymetrická kryptografia**. Je široko používaný, najmä pre **TLS/SSL**, ktorý umožňuje **HTTPS**.

## Čo je to kryptografický kľúč (cryptographic key)?

V kryptografii je kľúčom časť informácie, ktorá sa používa na zakódovanie údajov tak, aby sa javili ako náhodné; často je to veľké číslo alebo reťazec čísel a písmen. Keď sa nezašifrované údaje, nazývané aj čistý text, vložia do kryptografického algoritmu pomocou kľúča, čistý text vyjde na druhej strane ako náhodne vyzerajúce údaje. Každý, kto má správny kľúč na dešifrovanie údajov, ich však môže vrátiť do formy obyčajného textu.

Predpokladajme napríklad, že vezmeme textovú správu „ahoj“ a zašifrujeme ju kľúčom; povedzme, že kľúč je "2jd8932kd8." Naše jednoduché „ahoj“, zašifrované týmto kľúčom, teraz znie „X5xJCSycg14=", čo vyzerá ako náhodný odpad. Ak ho však dešifrujeme rovnakým kľúčom, dostaneme späť „ahoj“.

Čistý text + kľúč = šifrový text:

ahoj + 2jd8932kd8 = X5xJCSycg14=
Šifrovaný text + kľúč = čistý text:

X5xJCSycg14= + 2jd8932kd8 = ahoj
Toto je príklad symetrickej kryptografie, v ktorej sa používa iba jeden kľúč. V kryptografii s verejným kľúčom by namiesto toho existovali dva kľúče. Verejný kľúč by šifroval údaje a súkromný kľúč by ich dešifroval.

## Ako TLS/SSL používa kryptografiu s verejným kľúčom?

Kryptografia s verejným kľúčom je mimoriadne užitočná na vytvorenie bezpečnej komunikácie cez internet (cez HTTPS). Certifikát **SSL/TLS webovej lokality**, ktorý je verejne zdieľaný, obsahuje verejný kľúč a súkromný kľúč je nainštalovaný na **pôvodnom serveri** – „vlastní ho“ webová lokalita.

**TLS handshake** používajú kryptografiu verejného kľúča na overenie identity pôvodného servera a na výmenu údajov, ktoré sa používajú na generovanie kľúčov relácie. Algoritmus výmeny kľúčov, ako je RSA alebo Diffie-Hellman, používa pár verejného a súkromného kľúča na odsúhlasenie kľúčov relácie, ktoré sa používajú na symetrické šifrovanie po dokončení nadviazania spojenia. Klienti a servery sa dokážu dohodnúť na nových kľúčoch relácie pre každú komunikačnú reláciu, takže zlí aktéri nie sú schopní dešifrovať komunikáciu, aj keď identifikujú alebo ukradnú jeden z kľúčov relácie z predchádzajúcej relácie.

## Pouzitie v pythone

### Libraries

- **`cryptography`** - vygeneruje par public/private RSA kľúčov
- **`cryptosyspki`** - vygeneruje par public/private SHA-256