# Akceptačné testy

####  Vstupný test č.1
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ musí mať platné prihlasovacie údaje do systému Elvíra. |
| **Výstupné podmienky** | Používateľ je úspešne prihlásený. |
|**Postup**| Používateľ si zapne stránku Elvíra, na základe čoho mu je zobrazený formulár, ktorý žiada jeho prihlasovacie údaje. Používateľ zadá správne prihlasovacie údaje, po ktorých je úspešne presmerovaný na domovskú stránku knižnice so svojím účtom.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.2
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ nemá platné prihlasovacie údaje do systému Elvíra. |
| **Výstupné podmienky** | Používateľ nie je úspešne prihlásený. |
|**Postup**| Používateľ si zapne stránku Elvíra, na základe čoho mu je zobrazený formulár, ktorý žiada jeho prihlasovacie údaje. Používateľ zadá nesprávne prihlasovacie údaje, po ktorých mu je zobrazený error s oznamom, že jeho prihlasovacie údaje sú nesprávne. Následne je presmerovaný na prihlasovaciu obrazovku.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.3 
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ je úspešne prihlásený do systému Elvíra. |
| **Výstupné podmienky** | Používateľ má otvorené PDF. |
|**Postup**| Používateľ si ručne alebo pomocou vyhľadávaču na stránke nájde PDF, ktoré chce otvoriť. Zobrazí sa mu náhľad, a ak k danému PDF bude mať prístup, otvorí ho a zobrazí sa mu celé.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.4
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ bude mať zobrazenú novú stranu stranu. |
|**Postup**| Používateľ si pomocou tlačidla na dolnej lište zobrazí náhľad všetkých strán PDF. Po zobrazení tohto náhľadu klikne na jednu zo strán. Vybraná strana mu bude zobrazená, a taktiež bude vyznačená v náhľade.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.5
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ zvýrazní časť PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište zvolí možnosť upravenia dokumentu (znak ceruzky). Zobrazí sa mu lišta, z ktorej vyberie možnosť zvýraznenia. Následne vykoná danú akciu vybraním si farby zvýrazňovača a označí miesto, ktoré chce zvýrazniť. Časť dokumentu je zvýraznená. |
| **Výsledok** | PASS/FAIL |


####  Vstupný test č.6
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ zakreslí do PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište zvolí možnosť upravenia dokumentu (znak ceruzky). Zobrazí sa mu lišta, z ktorej vyberie možnosť kreslenia. Následne vykoná danú akciu zakreslením do dokumentu. Dokument bude upravený podĺa používateľových požiadaviek.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.7
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ pridá poznámku do PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište zvolí možnosť upravenia dokumentu (znak ceruzky). Zobrazí sa mu lišta, z ktorej vyberie možnosť pridania poznámky. Následne vykoná danú akciu zvolením miesta v dokumente, na ktoré môže zapísať svoju poznámku. Dokument bude upravený podĺa používateľových požiadaviek.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.8
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ bude presmerovaný na hľadanú časť PDF. |
|**Postup**| Používateľ si z lišty zvolí možnosť "Search". Následne sa mu zobrazí grafický element, do ktorého zadá text, ktorý v dokumente vyhľadáva. Dokument sa posunie na prvý výskyt hľadaného textu, ktorý bude spolu s ďaľšími výskytmi vyznačený. Následne sa bude môcť posúvať medzi ďalšími výskytmi v dokumente.
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.9
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ si úspešne zväčší požadovaný obrázok alebo text. |
|**Postup**| Používateľ si z lišty zvolí možnosť priblíženia dokumentu, alebo na ňu použije klávesovú skratku. Následne sa mu dokument priblíži a používateľ sa následne posunie na časť dokumentu, ktorú si chcel priblížiť. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.10
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ si úspešne oddiali požadovaný obrázok alebo text. |
|**Postup**| Používateľ si z lišty zvolí možnosť oddialenia dokumentu, alebo na ňu použije klávesovú skratku. Následne sa mu dokument oddiali a používateľ sa následne posunie na časť dokumentu, ktorú si chcel oddialiť . |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.11
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ si úspešne nastaví PDF tak, aby bolo viditeľné v maximálnej šírke monitora/displeja. |
|**Postup**| Používateľ si z lišty zvolí možnosť fit to page, alebo na ňu použije klávesovú skratku. Následne sa mu dokument zobrazí v maximálnej šírke monitora/displeja. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.12
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ má k dispozícii náhľad k metadátam požadovaného dokumentu. |
|**Postup**| Používateľ si z lišty zvolí možnosť zobrazenia metadát dokumentu. Následne sa mu zobrazí grafický element so všetkými metadátami k otvorenému dokumentu (názov dokumentu, ID dokumentu, veľkosť, autor, predmet, kľúčové slová, dátum vytvorenia, dátum posledného upravenia, veľkosť strany, verzia PDF, počet strán). |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.13
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľovi sa exportujú všetky citácie podľa požadovaných kritérií. |
|**Postup**| Používateľ si zvolí z lišty možnosť exportovania citácií. Zobrazí sa mu grafický element, v ktorom si zvolí z akej časti dokumentu (z konkrétnych strán/z celého dokumentu) a v akom formáte chce exportovať citácie. Používateľovi sa v grafickom elemente vypíšu citácie v požadovanom formáte . |
| **Výsledok** | PASS/FAIL |


####  Vstupný test č.14
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľovi bol vygenerovaný link a QR kód na zdieľanie požadovanej časti PDF. |
|**Postup**| Používateľ si vo zvolenom PDF na lište rozklikne možnosť zdieľania dokumentu, zobrazí sa mu grafický element, v ktorom si zvolí časť dokumentu (celý dokument/rozsah strán/jednotlivé strany), ktoré chce zdieľať. Následne nastaví dátum expirácie zdieľaného linku. Ďalej stlačením tlačidla generovania sa mu zobrazí ďalší grafický element, ktorý obsahuje link a QR kód na časť dokumentu podľa zadaných kritérií. |
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.15
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ má úspešne exportované vybrané strany z PDF. |
|**Postup**| Používateľ si vo zvolenom pdf na lište rozklikne možnosť Export. Zobrazí sa mu grafický element, kde si zvolí konkrétne strany, ktoré chce exportovať. Stlačením tlačidla export sa mu následne sa mu zobrazí grafický element, ktorý oznamuje úspešný export. Používateľ má prístup k zvoleným exportovaným stranám.|
| **Výsledok** | PASS/FAIL |

####  Vstupný test č.16
|   |   |
|---|---|
|**Vstupné podmienky**| Používateľ má otvorené PDF v systéme Elvíra. |
| **Výstupné podmienky** | Používateľ má exportované celé PDF. |
|**Postup**| Používateľ si vo zvolenom pdf na lište rozklikne možnosť Export. Zobrazí sa mu grafický element, kde si zvolí možnosť exportovania celého PDF. Stlačením tlačidla export sa mu následne sa mu zobrazí grafický element, ktorý oznamuje úspešný export. Používateľ má prístup k exportovanému PDF.|
| **Výsledok** | PASS/FAIL |

*Autor: Matej Lánik*
