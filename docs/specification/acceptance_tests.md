# Akceptačné testy

####  Vstupný test č.1 
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ musí mať platné prihlasovacie údaje do systému Elvíra. |
| **Výstupné podmienky** | Používateľ je úspešne prihlásený. |
|**Postup**| Používateľ si zapne stránku Elvíra, na základe čoho mu je zobrazený formulár, ktorý žiada jeho prihlasovacie údaje. Používateľ zadá správne prihlasovacie údaje, po ktorých je úspešne presmerovaný na domovskú stránku knižnice so svojím účtom.
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.2
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ nemá platné prihlasovacie údaje do systému Elvíra. |
| **Výstupné podmienky** | Používateľ nie je úspešne prihlásený. |
|**Postup**| Používateľ si zapne stránku Elvíra, na základe čoho mu je zobrazený formulár, ktorý žiada jeho prihlasovacie údaje. Používateľ zadá nesprávne prihlasovacie údaje, po ktorých mu je zobrazený error s oznamom, že jeho prihlasovacie údaje sú nesprávne. Následne je presmerovaný na prihlasovaciu obrazovku.
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.3
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ je úspešne prihlásený do systému Elvíra. |
| **Výstupné podmienky** | Používateľ má otvorené PDF. |
|**Postup**| Používateľ si ručne alebo pomocou vyhľadávaču na stránke nájde PDF, ktoré chce otvoriť. Zobrazí sa mu náhľad, a ak k danému PDF bude mať prístup, otvorí ho a zobrazí sa mu celé.
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.4
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ vyznačí časť PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište zvolí znak vyznačenia. Následne vykoná danú akciu kliknutím na miesto ktoré chce vyznačiť. Časť dokumentu je vyznačená. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.5 
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ bude presmerovaný na hľadanú časť PDF. |
|**Postup**| Používateľ si z lišty zvolí možnosť "Search". Následne sa mu zobrazí grafický element, do ktorého zadá text, ktorý v dokumente vyhľadáva. Dokument sa posunie na prvý výskyt hľadaného textu, ktorý bude spolu s ďaľšími výskytmi vyznačený. Následne sa bude môcť posúvať medzdi ďalšími výskytmi v dokumente.
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.6
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ si úspešne zväčší požadovaný obrázok alebo text. |
|**Postup**| Používateľ si z lišty zvolí možnosť zoom, alebo na ňu použije klávesovú skratku. Následne si prescrolluje PDF na časť ktorú potrebuje priblížiť a kliknutím na ňu si ju priblíži. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.7
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ je úspešne prihlásený v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ má k dispozícii náhlad k metadátam požadovaného dokumentu. |
|**Postup**| Používateľ si ručne alebo pomocou vyhľadávaču na stránke nájde PDF, ktoré chce otvoriť. Následne si zvolí možnosť zobrazenia metadát, čím sa mu zobrazí grafický element so všetkými metadátami k zvolenému dokumentu (názov dokumentu, veľkosť, autor, predmet, kľúčové slová, dátum vytvorenia, dátum posledného upravenia, veľkosť strany, verzia PDF, počet strán). |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.8 
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľovi sa zobrazia všetky citácie označeného textu na aktuálnej strane. |
|**Postup**| Používateľ vyznačí časť dokumentu, alebo klikne na odkaz na citovaný text. Dokument následne zobrazí všetky zdroje v označenom texte, ktoré sú citované bez potreby posúvania sa na spodnú časť dokumentu.  |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.9
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľovi sa vygenerujú všetky požadované citácie.  |
|**Postup**| Používateľ označí všetky časti dokumentu, ktorých citácie chce vygenerovať. Následne si z lišty zvolí generovanie citácií, po čom mu bude zobrazený náhľad všetkých označených citácií. Po stlačení tlačidla  "generovať citácie" mu bude vygenerované nové PDF, v ktorom sa budú nachádzať všetky označené citácie.  |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.10
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ má úspešne exportované PDF. |
|**Postup**| Používateľ si vo zvolenom pdf na lište rozklikne možnosť Export, kde si zvolí potrebné parametre. Následne stlačením tlačidla sa mu PDF súbor exportuje podľa zadaných kritérií. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.11
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ má úspešne exportované vybrané strany z PDF. |
|**Postup**| Používateľ si vo zvolenom pdf na lište rozklikne možnosť Export, kde si zvolí export konkrétnych strán a ďalšie parametre. Následne zvolí strany dokumentu, ktoré bude chcieť exportovať a stlačením tlačidla sa mu exportuje PDF súbor zvolených strán podľa zadaných kritérií. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.12
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ vykoná orezanie PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište zvolí orezanie dokumentu. Následne označí časť dokumentu, ktorú chce orezať a dokument bude orezaný podľa jeho požiadaviek. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.13
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ zakreslí do PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište zvolí možnosť kreslenia. Následne vykoná danú akciu kreslením do dokumentu. Dokument bude upravený podĺa používateľových požiadaviek.|
| **Výsledok** | PASS/FAIL |


*Autor: Matej Lánik*
