# Retrospetíva šprintu č. 8

Podrobnosti o jednotlivých úlohách a ich stavu sú k dispozícií vo vygenerovanom a vyexportovanom PDF súbore z nástroja Jira.

Export s podrobnými informáciami - [:closed_book: Šprint č.8](@site/static/pdf/sprintExport8.pdf).

## Burndown graf šprintu

V tomto šprinte bolo hlavným cieľom dokončiť úlohy, ktoré sa nestihli z minulého šprintu. Zároveň prebehol aj redesign násho Viewera. S priebehom šprintu môžeme byť v určitom smere spokojní, ale vo všeobecnosti sme sa mohli dostať k úspešnemu dokončeniu viac úloh, najmä tých implementačných. Je nutné ale poznamenať, že počas tohto šprintu sme veľa času venovali odovdávaniu zadaniam a museli sme zvládnuť semestrálny zápočet.

**Robo** v tomto šprinte dokončil zvýrazňovanie nájdeného textu v dokumente. Poznamenal, že je ešte potrebné spraviť webworkera na uvoľnenie hlavného vlákna. Ako druhú úlohu implementoval funkčné náhľady stránok dokumentu. Aj samotné kliknutie na náhľad a následné zobrazenie príslušnej strany je plne funkčné. Počet náhľadov sa dá jednoducho nastaviť cez props nášho Viewera. V budúcnosti možno bude vhodné vylepšiť design, ale hlavná funkcionalita aj vizuál spĺňa zadané parametre kvality.

**Dano** počas šprintu pracoval na úlohách, ktoré bolo potrebné dokončiť a tiež mal aj úlohu na export citácií. Úloha na **metadáta** je hotová. Nasledne úloha na **komponenty a jeho "properties"** čaká kontrolu, potencionálne nedostatky sa fixnú a bude to pripravené na mergnutie do dev vetvy Viewera. Z dôvodu spomínaného časovo náročného týždňa sa úloha na **exportovanie citácií** nestihla spraviť a Dano na nej bude pracovať tento šprint.

**Maťo** implementoval **sidebary do Viewera** a sú plne pripravené na to, aby sme mohli implementovať nadväzujúce funkcionality. Zároveň ešte **vytvoril druhý PDF dokument**, ktorý môžeme použiť aj v prípade prezentovania aktuálneho stavu projektu.

**Juro** tento šprint mal pridelené úlohy na **PDF anotačnú vrstvu** a tiež aj na **dedump rendering**. Úlohy si prenáša do tohto šprintu z dôvodu časovej náročnosti.

**Jakub** pracoval na úlohe s **navigáciou a sekciami dokumentu**. V minulom šprinte nebolo funkčné preklikávanie na stranu z danej sekcie. V tomto šprinte prišiel aj mierny redesign tohto tasku (hlavne v nastavení farebných tónov), ale bude potrebné ho určite doladiť a odstrániť invazívne vizuálne prvky. Zároveň sa ku koncu šprintu prišlo na špecifickú štruktúru objektu s "outlines" (sekcie dokumentu), pretože PDF dokument generovaný z MS word má úplne inú štruktúru ako generovaný Latex PDF dokument. Bude potrebné rozvetviť tento task a vyriešiť aj túto problematiku. Začal pracovať aj na **ošetrovaní vstupného PDF dokumentu**. Zatiaľ sa pracuje na zisťovaní validného Base64 súbora a zobrazení informácie užívateľovi, o nedostupnosti a nesprávnosti vstupného PDF dokumentu.

**Rasťo** v tomto šprinte elegatne vyriešil svoje tri úlohy. V prvom prípade vyriešil **problém so zobrazovaním Dema nášho Viewera**, ktorý je odteraz nasadený a dostupný na samostatnej doméne a predídeme štýlovacím konfliktom s Docosaurus stránkou. Jeho druhý task spočíval v **kompletnom redesigne Viewera**. Na tomto novom vizuáli budeme stavať nasledujúce úlohy, aby sme zachovali konzistentnosť. Zároveň sa venoval aj **responzivite stránky** a v tomto šprinte vďaka jeho dvom implementačným a redesign taskom je aktuálna verzia Evil Flowers Viewera v stave, ktorý je prezentovateľný.

![Burndown8](@site/static/img/burndown8.png)

## Záverečná sumarizácia

| **S čím sme boli spokojní**                             | **Čo treba zlepšiť**                                   |
| ------------------------------------------------------- | ------------------------------------------------------ |
| Vyriešenie dostupnosti dema EvilFlowers Viewera         | Konzistencia pri nozvosloví v pull requestoch          |
| Redesign a responzivita                                 | Time manažment, aby sa stihlo vačšie % taskov dokončiť |
| Predpripravené sidebary                                 |                                                        |
| Pridanie viacerých funkcionalít (page previews, TOC...) |                                                        |

_Autor: Jakub Sorád_
