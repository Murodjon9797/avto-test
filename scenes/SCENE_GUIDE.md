# Animatsion vaziyat yozish qo'llanmasi (SCN builder)

Fayllar `webapp/scenes/*.js` — `webapp/scenes.js` dan KEYIN yuklanadi. Har bir vaziyat:

```js
A(SCN.cross() + SCN.car({...}) + ...,          // 1) sahna (SVG ichki qismi)
  "Savol matni?",                               // 2) savol (sahnaga qarab javob beriladigan, aniq)
  ["TO'G'RI javob", "Chalg'ituvchi 1", "Chalg'ituvchi 2", "Chalg'ituvchi 3"],  // 3) birinchi — har doim to'g'ri
  "Izoh: nima uchun (YHQ NN-band).");          // 4) izoh
```
`A()` va `SCN` scenes.js da e'lon qilingan. Global konstantalar: `ME` (= "#e53935", sizning qizil mashinangiz), `RAILS` (to'g'ri yo'lda x≈232..254 dagi vertikal temir yo'l), `RED_BLINK(x,y)` (temir yo'l kesishmasidagi ikki qizil miltillovchi chiroq).

## Koordinatalar (viewBox 0 0 300 300, yuqori = shimol, o'ng tomonlama harakat)

### `SCN.cross(o)` — to'rt tomonlama chorraha
Yo'llar: vertikal x∈[120,180], gorizontal y∈[120,180]; o'q chiziqlari x=150, y=150.
Qatorlar: shimolga ketish **x=165**, janubga **x=135**, sharqqa **y=165**, g'arbga **y=135**.
Opsiyalar: `{stop:true}` (janubdan kelish uchun to'xtash chizig'i y=186), `{rails:true}` (gorizontal tramvay izi y=160..170), `{ring:true}` (aylanma).

Chorraha oldida to'xtash (mashina markazi, uzunligi 28):
| Qayerdan | Yo'l (`path`) |
|---|---|
| janubdan | `M165,300 L165,196` |
| shimoldan | `M135,0 L135,104` |
| sharqdan | `M300,135 L196,135` |
| g'arbdan | `M0,165 L104,165` |

Chorrahadan o'tish (`loop:true` bilan): janubdan to'g'riga `M165,320 L165,-20`; janubdan o'ngga `M165,320 L165,190 Q165,165 190,165 L320,165`; janubdan chapga `M165,320 L165,185 Q165,135 110,135 L-20,135`; g'arbdan to'g'riga `M-20,165 L320,165`; sharqdan to'g'riga `M320,135 L-20,135`; shimoldan to'g'riga `M135,-20 L135,320`. Boshqa yo'nalishlarni shu mantiq bilan tuzing (o'ng burilish — kichik radius, chap burilish — markazdan o'tib keng radius).

Har bir yo'nalish uchun svetofor (haydovchining o'ng tomonida) va belgi joyi:
| Kimga | Svetofor | Belgi (`SCN.sign(key,x,y)`) |
|---|---|---|
| janubdan kelayotganga | `SCN.light(186,192,state)` | `(186,200)` |
| shimoldan | `SCN.light(93,72,state,180)` | `(92,78)` |
| sharqdan | `SCN.light(191,86,state,270)` | `(196,96)` |
| g'arbdan | `SCN.light(95,178,state,90)` | `(96,196)` |

### `SCN.tjunction(o)` — T-chorraha
Gorizontal yo'l y∈[120,180] (butun kenglik), faqat JANUBIY tarmoq x∈[120,180]. Shimolda yo'l yo'q. `{stop:true}` — janubiy tarmoqda to'xtash chizig'i.

### `SCN.straight(o)` — to'g'ri ikki tomonlama yo'l
Qatnov qismi y∈[100,200], o'q y=150 (`{solidCenter:true}` — yaxlit). Sharqqa qator **y=170**, g'arbga **y=130**. Trotuar y 90..100 va 200..210. Zebra: `SCN.zebra(x,100,22,100)`.

### `SCN.oneway3()` — bir tomonlama 3 qatorli yo'l (hammasi sharqqa)
Qatorlar y=110 (chap), y=150 (o'rta), y=190 (o'ng). Qatnov qismi y∈[90,210].

### Boshqa
- `SCN.zebraH(x,y,w,h)` — vertikal yo'lni kesuvchi zebra (masalan, janubiy tarmoqda `SCN.zebraH(120,190,60,18)`).
- Tun: fondan keyin `<rect width="300" height="300" fill="#0b1020" opacity=".72"/>`.
- Qo'shimcha bezak: `SCN.tree(x,y,r)`, `SCN.house(x,y,w,h)`, `SCN.bush(x,y)`, `SCN.dash(x1,y1,x2,y2)`, `SCN.solid(x1,y1,x2,y2,w)`.
- Matn yorlig'i (masalan masofa): `<text x=".." y=".." font-size="11" fill="#fff" font-family="Arial">50 m</text>`.

## Transport: `SCN.car(o)`
- `path` (SVG yo'l), `color`, `label` ("Siz" — qizil yorliq; boshqalar: "A", "B", "C", "Avt", "T", "103"...).
- To'xtab turuvchi (standart): yo'l bo'ylab silliq sekinlashib, oxirida turadi, tormoz chiroqlari yonadi. `hold` (0..1, default 0.55) — harakat vaqti ulushi; `dur` (default 4 s).
- `loop:true` — to'xtamay, doimiy harakat.
- `keyPoints:"0;0;1", keyTimes:"0;0.4;1"` — avval kutadi, keyin harakatlanadi (masalan bekatdan chiqayotgan avtobus).
- `kind`: "car" | "bus" | "tram". `blink`: "L" | "R" | "H" (avariya). `siren:true` — ko'k-qizil mayoq. `reverse:true` — orqaga yurish (mashina oldi yo'l boshiga qaraydi).
- Joyida turgan mashina: `path:"M210,184 L210.5,184"` (juda qisqa yo'l).

## Piyoda: `SCN.person({path, loop:true, dur, color, small:true (bola), cane:true (oq hassa)})`

## Svetofor holatlari: `SCN.light(x,y,state,rot)`
`green`, `red`, `yellow`, `redyellow`, `off`, `yblink` (sariq miltillaydi), `g2y` (yashil→sariq), `r2g` (qizil→qizil+sariq→yashil), `redarrow` (qizil + o'ngga yashil strelka), `redleft` (qizil + chapga yashil strelka). `rot` gradus: 0 — janubga qaragan, 90 — g'arbga, 180 — shimolga, 270 — sharqqa.

## Tartibga soluvchi: `SCN.controller(x,y,pose,rot)`
`pose`: "side" (qo'llar yon tomonga), "up" (qo'l yuqoriga — ✋ belgisi bilan), "forward" (o'ng qo'l oldinga uzatilgan). `rot=0` da KO'KRAGI JANUBGA (sariq uchburchak ko'krak tomonda), uning o'ng qo'li g'arb tomonda. `rot=90` — ko'kragi g'arbga, `180` — shimolga, `270` — sharqqa. Savol matnida qaysi tomondan yaqinlashayotganingizni ("uning chap tomonidan", "ko'kragi tomonidan") ham aniq yozing.

## Sifat qoidalari
- Sahna va savol birga BIR ma'noli bo'lsin: kerakli ma'lumot (belgi, svetofor, burilish chirog'i) rasmda yoki matnda aniq ko'rinsin.
- Mashinalar bir-birining ustiga tushmasin; to'xtash nuqtalari jadvaldagidek.
- Har bir qoida YHQ matnidan tekshirilgan bo'lsin (manba: `C:/Users/user/AppData/Local/Temp/claude/132db88ea822d5b6/56ac5930-f45d-4244-bde2-48f1a18ade62/scratchpad/src/lex.txt` — YHQ to'liq matni ilovalari bilan; uzpdd sahifalari `src/p<bob>.html`).
- Chalg'ituvchilar ishonarli bo'lsin (boshqa mashina, boshqa navbat, boshqa qoida). "Hech qachon", "Faqat tunda" kabi to'ldiruvchilar taqiqlanadi.
- Faqat lotin o'zbek, apostrof — oddiy ASCII '.
