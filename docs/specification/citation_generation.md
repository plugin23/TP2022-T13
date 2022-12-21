# Generovanie citácií

Možnosť generovať citácie uľahčí študentovi prácu pri citácii diel z našej aplikácie.
Druhy citácie, ktoré generujeme sú BibTeX a štandard IEEE. Pre generovanie použijeme 
knižnicu [citation-js](https://citation.js.org/), ktorá dokáže vygenerovať BiBTeX citáciu 
z formátu CSL-JSON. Informácie vo formáte CSL-JSON získame po zavolaní koncového bodu API.

Pomocou knižnice [citation-js](https://citation.js.org/) dokážeme zo získaných informácii vo 
formáte CSL-JSON vygenerovať citáciu BiBTeX. Pre IEEE citáciu si vytvoríme náš vlastný parser 
z formátu CSL-JSON, keďže potrebné informácie sa zhodujú s BiBTeX citáciou.
Schéma formátu CSL-JSON je v [Github](https://github.com/citation-style-language/schema/blob/master/schemas/input/csl-data.json) 
repozitári Citation Style Language (CSL).

### Formát BiBTeX citácie

BiBTeX citácia môže ale nemusí obsahovať veľké množstvo atribútov. 
V prípade generovania citácii diel nám dostupný rátame hlavne zo základnými informáciami
ukázanými v príklade.

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

IEEE štandard pracuje s rovnakými informáciami ako BiBTeX citácia avšak citácia je vygenerovaná vo forme "čistého" textu.

```
M. Zahid, Z. Mehmmod and I. Inayat, "Evolution in software architecture recovery techniques — A survey," 2017 
13th International Conference on Emerging Technologies (ICET), 2017, pp. 1-6, doi: 10.1109/ICET.2017.8281704.
```

*Autor: Juraj Valiček*

