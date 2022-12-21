# Generovanie citácií

Možnosť generovať citácie uľahčí študentovi prácu pri citácii diel z našej aplikácie.
Druhy citácie, ktoré generujeme sú BibTeX a štandard IEEE. Počas analýzy problému
generovania citácií sme neobjavili žiadne knižnice, ktoré by pokryli naše potreby.

Generujeme citáciu na základe informácií z metadát dokumentu alebo databázy vo formáte CSL-JSON, 
ktoré získame pri prebraní dokumentu do aplikácie.
Metadáta potrebné na vytvorenie citácie formátu BiBTeX alebo štandardu IEEE sú
rovnaké ako metadáta zobrazované našou aplikáciou.

Pomocou knižnice [citation-js](https://citation.js.org/) dokážeme zo získaných dát vo 
formáte CSL-JSON vygenerovať citáciu BiBTeX. Pre IEEE citáciu si vytvoríme náš vlastný parser 
z formátu CSL-JSON, keďže potrebné informácie sa zhodujú s BiBTeX citáciou.
Schéma formátu CSL-JSON je v [Github](https://github.com/citation-style-language/schema/blob/master/schemas/input/csl-data.json) 
repozitári citation-js knižnice.

### Formát BiBTeX citácie

BiBTeX citácia môže ale nemusí obsahovať všetky tieto informácie ako vidíme napr. pri atribútoch _volume_ a _number_.
BiBTex citácia môže mať veľké množstvo atribútov, zaoberáme sa či je potrebné ich všetky využiť, resp. či také informácie 
budeme mať vôbec k dispozícií.

```
@INPROCEEDINGS{8281704,
  author={Zahid, Maryam and Mehmmod, Zahid and Inayat, Irum},
  booktitle={2017 13th International Conference on Emerging Technologies (ICET)},
  title={Evolution in software architecture recovery techniques — A survey},
  year={2017},
  volume={},
  number={},
  pages={1-6},
  doi={10.1109/ICET.2017.8281704}
}
```

### IEEE štandard

IEEE štandard pracuje s rovnakými informáciami ako BiBTeX citácia avšak citácia je vygenerovaná vo forme textu a nie istého druhu objektu.

```
M. Zahid, Z. Mehmmod and I. Inayat, "Evolution in software architecture recovery techniques — A survey," 2017 
13th International Conference on Emerging Technologies (ICET), 2017, pp. 1-6, doi: 10.1109/ICET.2017.8281704.
```

*Autor: Juraj Valiček*

