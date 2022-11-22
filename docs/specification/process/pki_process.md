# PKI proces fetchovania

Cieľom špecifikácie PKI procesu je zistit, že za akych podmienok je možné a či je vôbec potrebné implementovať PKI do nášho PDF vieweru.

## Sekvenčný diagram

![Sekvenčný diagram procesu fetchovania(updated)](@site/static/img/fetching_sequence_updated.png)

## Otázky - odpovede

#### 1.Kedy sa použije PKI?
Overenie PKI sa použije vždy, ak užívateľ požiada o prístup do nedbotlivého PDF.

#### 2.Kde sa klúče vytvárajú?
Dvojica private=public kez sú generované na strane servera.
#### 3.Ako kľúče rotujú?
Podstatou PKI je, že private key nikdy nerotuje, zostáva na strane servera. Public key bude voľne dostupný užívateľom. 

#### 4.Akú majú kľuče životnosť?
Žitovnosť kľučov bude definovaná priemerným časom používania pdf viewera užívateľmi. Predpoklad: 20 - 60 min.
Po expirácií kľučov je potrebné zopakovať PKI proces opať.

#### 5.Kde bude ukladaný public key?
Public key používateľa bude ukladaný do cache pamate prehliadača.

#### 6.Koľko kľučov bude používateľ potrebovať?
Pre zvýšenie bezpečnosti sme navrhli generovanie private - public kľučov ku každej žiadanej akvizícii.
1 akvizícia = 1 pár private - public kľučov


## Návrhy na pokročilú implementáciu 
Použitie PDF editora by bolo obmedzené pre užívateľov s certifikátom edurom. 


## Zhodnotenie

Detailnou analýzou PKI pre náš PDF editor sme dospeli k záveru, že implementácia PKI zvýši bezpešnosť našej aplikácie nami navrhnutou metódou.

*Autor: Daniel Cok*

