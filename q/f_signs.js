// q/f_signs.js — Yo'l belgilari va yo'l chiziqlari (YHQ 1- va 2-ilovalar)
// Manba: YHQ (VM 12.04.2022 y. 172-son qarori), 1-ilova «Yo'l belgilari», 2-ilova «Yo'l chiziqlari» (lex.uz/docs/-5953883, 2026 yilgacha kiritilgan o'zgarishlar bilan).

// ===================== RASMLI SAVOLLAR: BELGILAR =====================
Q("signs", "Bu belgi nimani talab qiladi?",
  ["To'xtash chizig'i (u bo'lmasa qatnov qismi cheti) oldida to'xtab, yo'l berishni", "Tezlikni kamaytirib, faqat zarur bo'lgandagina to'xtab, yo'l berishni", "Faqat ro'paradan kelayotgan transport vositalariga yo'l berishni", "Temir yo'l kesishmasidagina to'xtashni, chorrahada esa yo'l berishni"],
  "2.5 «To'xtamasdan harakatlanish taqiqlangan» belgisida to'xtash majburiy, so'ng kesib o'tilayotgan yo'ldagi transportga yo'l beriladi (YHQ 1-ilova, 2.5).", "stop");
Q("signs", "Bu belgi temir yo'l kesishmasi oldida o'rnatilgan bo'lsa, to'xtash chizig'i yo'q joyda haydovchi qayerda to'xtashi kerak?",
  ["Belgi oldida", "Eng yaqin relsdan 5 metr oldin", "Shlagbaum yonida", "Belgidan keyin 10 metr o'tib"],
  "2.5 belgisi temir yo'l kesishmasi yoki karantin maskanidan oldin o'rnatilsa, to'xtash chizig'i oldida, u bo'lmasa belgi oldida to'xtash kerak (YHQ 1-ilova, 2.5).", "stop");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Yo'l bering!»", "«To'xtamasdan harakatlanish taqiqlangan»", "«Ro'para harakatlanishning ustunligi»", "«Ikkinchi darajali yo'l bilan kesishuv»"],
  "2.4 «Yo'l bering!» — haydovchi kesib o'tilayotgan yo'ldagi transport vositalariga yo'l berishi kerak (YHQ 1-ilova, 2.4).", "giveway");
Q("signs", "Bu belgi ostida 7.13 «Asosiy yo'lning yo'nalishi» belgisi bo'lsa, haydovchi kimga yo'l berishi kerak?",
  ["Asosiy yo'ldan harakatlanayotgan transport vositalariga", "Faqat o'ng tomondan kelayotgan transport vositalariga", "Ikkinchi darajali yo'ldagi barcha transport vositalariga", "Faqat yo'nalishli transport vositalariga"],
  "7.13 belgisi bo'lganda 2.4 belgisi asosiy yo'ldan harakatlanayotgan transport vositalariga yo'l berishni talab qiladi (YHQ 1-ilova, 2.4).", "giveway");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Kirish taqiqlangan»", "«Harakatlanish taqiqlangan»", "«Mexanik transport vositalarining harakatlanishi taqiqlangan»", "«Bir tomonlama harakatli yo'lning oxiri»"],
  "3.1 «Kirish taqiqlangan» — barcha transport vositalarining kirishi taqiqlanadi (YHQ 1-ilova, 3.1).", "noentry");
Q("signs", "Bu belgining talabi qaysi transport vositalariga ta'sir qilmaydi?",
  ["Yo'nalishli transport vositalariga", "Taksometri yoqilgan yengil taksilarga", "Ruxsat etilgan to'liq vazni 3,5 t gacha yuk avtomobillariga", "Mototsikl va mopedlarga"],
  "3.1 — 3.3, 3.18.1, 3.18.2, 3.19, 3.27 belgilarga amal qilish yo'nalishli transport vositalariga ta'sir qilmaydi (YHQ 1-ilova, 3-bo'lim).", "noentry");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Asosiy yo'l»", "«Asosiy yo'lning oxiri»", "«Ro'paradagi harakatlanishga nisbatan imtiyoz»", "«Teng ahamiyatli yo'llar kesishuvi»"],
  "2.1 «Asosiy yo'l» harakat tartibga solinmagan chorrahalarda oldin o'tish huquqini beradi (YHQ 1-ilova, 2.1).", "mainroad");
Q("signs", "Bu belgi qayerga o'rnatiladi?",
  ["Asosiy yo'l boshiga va chorrahalarning bevosita oldiga", "Faqat aholi punktiga kiraverishda, 5.22 belgisi bilan birga", "Chorrahadan 150 — 300 metr oldin", "Faqat svetoforli chorrahalar oldiga"],
  "2.1 «Asosiy yo'l» belgisi asosiy yo'l boshiga va chorrahalarning bevosita oldiga o'rnatiladi (YHQ 1-ilova, 2.1).", "mainroad");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Asosiy yo'lning oxiri»", "«Asosiy yo'l»", "«Barcha cheklovlarning oxiri»", "«Avtomobillar uchun mo'ljallangan yo'lning oxiri»"],
  "Qora chiziq bilan kesilgan sariq romb — 2.2 «Asosiy yo'lning oxiri» (YHQ 1-ilova, 2.2).", "mainroadend");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Harakatlanish taqiqlangan»", "«Kirish taqiqlangan»", "«To'xtash taqiqlangan»", "«Barcha cheklovlarning oxiri»"],
  "3.2 «Harakatlanish taqiqlangan» — barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 1-ilova, 3.2).", "nomotion");
Q("signs", "«Nogiron» tanish belgisi o'rnatilgan avtomobilni boshqarayotgan nogiron haydovchi bu belgi talabidan chetga chiqishi mumkinmi?",
  ["Ha, mumkin", "Yo'q, faqat 7.18 belgisi bo'lsa mumkin", "Faqat yo'nalishli transport sifatida mumkin", "Faqat kunduzi mumkin"],
  "Nogiron haydovchilar 3.2, 3.3 va 3.28 belgilari talablaridan chetga chiqishlari mumkin (YHQ 1-ilova, 3-bo'lim).", "nomotion");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«To'xtash taqiqlangan»", "«To'xtab turish taqiqlangan»", "«Oyning toq kunlarida to'xtab turish taqiqlangan»", "«Harakatlanish taqiqlangan»"],
  "3.27 «To'xtash taqiqlangan» — transport vositalarining to'xtashi va to'xtab turishi taqiqlanadi (YHQ 1-ilova, 3.27).", "nostopping");
Q("signs", "Bu belgi ta'sir hududida yo'nalishsiz yengil taksi qachon to'xtashi mumkin?",
  ["Yo'lovchilarni tushirish-chiqarish vaqtida", "Taksometr yoqilgan bo'lsa, istalgan maqsadda", "Faqat soat 19:00 dan 21:00 gacha", "Faqat 7.18 belgisi bo'lganda"],
  "3.27 belgisi yo'nalishsiz yengil taksilarga yo'lovchilarni tushirish-chiqarish (yuklarni ortish-tushirish) vaqtida ta'sir qilmaydi (YHQ 1-ilova, 3.27).", "nostopping");
Q("signs", "Bu belgi qaysi yo'l chizig'i bilan birgalikda qo'llanishi mumkin (bunda ta'sir hududi chiziq uzunligi bilan aniqlanadi)?",
  ["1.4 (sariq yaxlit chiziq)", "1.10 (sariq uzuq chiziq)", "1.17 (sariq rangli chiziq)", "1.2 (enli sidirg'a chiziq)"],
  "3.27 belgisi 1.4 chizig'i bilan birgalikda qo'llanishi mumkin, bunda ta'sir hududi chiziq uzunligi bilan aniqlanadi (YHQ 1-ilova, 3-bo'lim).", "nostopping");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«To'xtab turish taqiqlangan»", "«To'xtash taqiqlangan»", "«Oyning juft kunlarida to'xtab turish taqiqlangan»", "«Kirish taqiqlangan»"],
  "3.28 «To'xtab turish taqiqlangan» — transport vositalarining to'xtab turishi taqiqlanadi, to'xtash esa taqiqlanmaydi (YHQ 1-ilova, 3.28).", "noparking");
Q("signs", "Bu belgi qaysi transport vositalariga taalluqli emas?",
  ["Taksometri ishlab turgan taksilarga", "Barcha yengil taksilarga", "Yuk ortib-tushirayotgan yuk avtomobillariga", "Avtobuslarga"],
  "3.28 — 3.30 belgilari taksometri ishlab turgan taksilarga taalluqli emas (YHQ 1-ilova, 3-bo'lim).", "noparking");
Q("signs", "Bu belgi yo'lning o'ng tomonida o'rnatilgan. Uning ta'siri qaysi tomonga tarqaladi?",
  ["Faqat belgi o'rnatilgan tomonga", "Yo'lning ikkala tomoniga", "Faqat qarama-qarshi tomonga", "Butun chorraha hududiga"],
  "3.10, 3.27 — 3.30 belgilari yo'lning qaysi tomonida o'rnatilgan bo'lsa, ta'siri faqat o'sha tomonga amal qiladi (YHQ 1-ilova, 3-bo'lim).", "noparking");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Piyodalar o'tish joyi» (axborot-ko'rsatgich belgisi)", "«Piyodalar o'tish joyi» (ogohlantiruvchi belgi)", "«Piyodalar yo'lkasi» (buyuruvchi belgi)", "«Piyodalarning yer ustidan o'tish joyi»"],
  "Ko'k to'rtburchakdagi belgi — 5.16.1, 5.16.2 «Piyodalar o'tish joyi» axborot-ko'rsatgich belgisi (YHQ 1-ilova, 5.16.1, 5.16.2).", "crossing");
Q("signs", "Oldida 1.14.1 — 1.14.2 chizig'i bo'lmagan o'tish joyida yo'lning o'ng tomonidagi bu belgi (5.16.2) qayerga o'rnatiladi?",
  ["O'tish joyining old (yaqin) chegarasiga", "O'tish joyining orqa (uzoq) chegarasiga", "O'tish joyidan 50 metr oldin", "O'tish joyi o'rtasiga, yo'l ustiga"],
  "5.16.2 belgisi o'ng tomonga o'tish joyining old chegarasiga, 5.16.1 belgisi chap tomonga orqa chegarasiga o'rnatiladi (YHQ 1-ilova, 5.16.1, 5.16.2).", "crossing");
Q("signs", "Bu ogohlantiruvchi belgi nimani bildiradi?",
  ["«Boshqa xavf-xatarlar»", "«Ta'mirlash ishlari»", "«Diqqat, boshqariladigan to'siq»", "«Tirbandlik»"],
  "1.30 «Boshqa xavf-xatarlar» — ogohlantiruvchi belgilarda ko'zda tutilmagan xavf-xatarlar bo'lgan yo'l qismini bildiradi (YHQ 1-ilova, 1.30).", "danger");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Quvib o'tish taqiqlangan»", "«Yuk avtomobillarida quvib o'tish taqiqlangan»", "«Ro'para harakatlanishning ustunligi»", "«Quvib o'tish taqiqlangan hududning oxiri»"],
  "3.20 «Quvib o'tish taqiqlangan» belgisi (YHQ 1-ilova, 3.20).", "noovertake");
Q("signs", "Bu belgi ta'sir hududida qaysi transport vositasini quvib o'tishga ruxsat etiladi?",
  ["Soatiga 40 km dan kam tezlikda harakatlanayotgan yakka transport vositasini", "Soatiga 60 km dan kam tezlikda harakatlanayotgan har qanday transportni", "Faqat velosiped va ot-aravani", "Faqat to'xtab turgan yo'nalishli transport vositasini"],
  "3.20 belgisi soatiga 40 km dan kam tezlikda harakatlanayotgan yakka transport vositasidan boshqalarini quvib o'tishni taqiqlaydi (YHQ 1-ilova, 3.20).", "noovertake");
Q("signs", "Chorrahalari bo'lmagan yo'lda aholi punkti ichida o'rnatilgan bu belgi qayergacha ta'sir qiladi?",
  ["Aholi punktining oxirigacha", "Belgidan 100 metrgacha", "Birinchi yo'l chetidagi hovliga chiqish joyigacha", "Keyingi piyodalar o'tish joyigacha"],
  "3.20 belgisi eng yaqin chorrahagacha, chorraha bo'lmasa — aholi punktining oxirigacha ta'sir qiladi; hovlilardan chiqish joylari ta'sirni tugatmaydi (YHQ 1-ilova, 3-bo'lim).", "noovertake");
Q("signs", "Bu belgi nimani bildiradi?",
  ["40 km/soatdan ortiq tezlikda harakatlanish taqiqlanadi", "40 km/soat tavsiya etilgan tezlik", "Eng kam tezlik — 40 km/soat", "40 km/soatdan sekin transportni quvib o'tish mumkin"],
  "3.24 «Yuqori tezlik cheklangan» — belgida ko'rsatilganidan ortiq tezlikda harakatlanish taqiqlanadi (YHQ 1-ilova, 3.24).", "speed40");
Q("signs", "Aholi punktiga yetmasdan o'rnatilgan bu belgining ta'siri qaysi belgigacha saqlanadi?",
  ["5.22 «Aholi punktining boshlanishi» belgisigacha", "Belgidan keyingi birinchi chorrahagacha", "5.23 «Aholi punktining oxiri» belgisigacha", "1.23 «Ta'mirlash ishlari» belgisigacha"],
  "Aholi punktlariga yetmasdan o'rnatilgan 3.24 belgisining ta'siri 5.22 belgisigacha kuchini saqlaydi (YHQ 1-ilova, 3-bo'lim).", "speed40");
Q("signs", "Bu belgining ta'sir oralig'ini qaysi usul bilan aniqlashtirib (tugatib) bo'lmaydi?",
  ["7.2.3 qo'shimcha axborot belgisi bilan takror o'rnatish", "3.25 «Yuqori tezlik cheklangan hududning oxiri» belgisi", "Boshqa tezlik ko'rsatilgan 3.24 belgisi", "7.2.1 «Ta'sir oralig'i» qo'shimcha axborot belgisi"],
  "3.24 ta'siri 3.25, 7.2.1 yoki boshqa qiymatli 3.24 belgisi bilan aniqlashtiriladi; 7.2.3 bilan takror o'rnatish 3.27 — 3.30 belgilari uchun qo'llanadi (YHQ 1-ilova, 3-bo'lim).", "speed40");
Q("signs", "Bu belgi nimani talab qiladi?",
  ["Faqat to'g'riga harakatlanishni", "Bir tomonlama harakatli yo'lga chiqishni", "Faqat yo'nalishli transport harakatlanishini", "Tasma bo'yicha to'g'riga harakatlanishni tavsiya qiladi"],
  "4.1.1 «Harakatlanish to'g'riga» — faqat ko'rsatilgan yo'nalishda harakatlanishga ruxsat etiladi (YHQ 1-ilova, 4.1.1).", "straight");
Q("signs", "Yo'l qismi boshlanishida o'rnatilgan bu belgi o'ng tomondagi hovlilarga burilishni taqiqlaydimi?",
  ["Yo'q, taqiqlamaydi", "Ha, eng yaqin chorrahagacha taqiqlaydi", "Ha, aholi punkti oxirigacha taqiqlaydi", "Faqat yuk avtomobillari uchun taqiqlaydi"],
  "Yo'l qismi boshida o'rnatilgan 4.1.1 belgisi yaqin chorrahagacha amal qiladi va o'ngdagi hovlilarga burilishni taqiqlamaydi (YHQ 1-ilova, 4.1.1 — 4.1.6).", "straight");
Q("signs", "Bu belgi nimani talab qiladi?",
  ["Faqat o'ngga harakatlanishni", "O'ngga burilishni taqiqlaydi", "To'siqni o'ngdan aylanib o'tishni", "Xavfli burilish haqida ogohlantiradi"],
  "4.1.2 «Harakatlanish o'ngga» — faqat ko'rsatilgan yo'nalishda harakatlanishga ruxsat etiladi (YHQ 1-ilova, 4.1.2).", "rightonly");
Q("signs", "Bu belgi talabi kimga joriy qilinmaydi?",
  ["Yo'nalishli transport vositalariga", "Taksometri yoqilgan taksilarga", "Mototsikl va mopedlarga", "Ruxsat etilgan to'liq vazni 3,5 t gacha yuk avtomobillariga"],
  "4.1.1 — 4.1.6 belgilarining ta'siri yo'nalishli transport vositalariga joriy qilinmaydi (YHQ 1-ilova, 4-bo'lim).", "rightonly");
Q("signs", "Bu belgi nimani taqiqlaydi?",
  ["Qayrilishni", "Chapga burilishni", "Orqaga harakatlanishni", "Quvib o'tishni"],
  "3.19 «Qayrilish taqiqlangan» belgisi (YHQ 1-ilova, 3.19).", "nouturn");
Q("signs", "Bu belgi nimani taqiqlaydi?",
  ["Chapga burilishni", "Qayrilishni", "O'ngga burilishni", "Kirishni"],
  "3.18.2 «Chapga burilish taqiqlanadi» belgisi (YHQ 1-ilova, 3.18.2).", "noleft");
Q("signs", "Bu belgi qaysi joyga tatbiq etiladi?",
  ["U oldiga o'rnatilgan kesishmaga", "Belgidan keyingi barcha chorrahalarga", "Aholi punktining oxirigacha bo'lgan barcha kesishmalarga", "Belgidan 100 metr masofagacha"],
  "3.18.1 va 3.18.2 belgilari qaysi kesishma oldiga o'rnatilsa, shu kesishmaga tatbiq etiladi (YHQ 1-ilova, 3-bo'lim).", "noleft");
Q("signs", "Bu ogohlantiruvchi belgi nimani bildiradi?",
  ["«Shlagbaumli temir yo'l kesishmasi»", "«Shlagbaumsiz temir yo'l kesishmasi»", "«Diqqat, boshqariladigan to'siq»", "«Tramvay yo'li bilan kesishuv»"],
  "1.1 «Shlagbaumli temir yo'l kesishmasi» belgisi (YHQ 1-ilova, 1.1).", "railbarrier");
Q("signs", "Aholi punktidan tashqarida bu belgi necha marta o'rnatiladi?",
  ["Ikki marta — ikkinchisi xavfli joyga kamida 50 metr qolganda", "Bir marta — xavfli joydan 150 — 300 metr oldin, 7.1.1 belgisi bilan", "Ikki marta — ikkinchisi relsdan 5 metr oldin", "Uch marta — har 100 metrda"],
  "Aholi punktlaridan tashqarida 1.1, 1.2, 1.9, 1.10, 1.21 va 1.23 belgilari takrorlanadi; ikkinchisi xavfli qism boshlanishiga kamida 50 metr qolganda o'rnatiladi (YHQ 1-ilova, 1-bo'lim).", "railbarrier");
Q("signs", "Bu ogohlantiruvchi belgi nimani bildiradi?",
  ["«Ikki tomonlama harakatlanish»", "«Bir tomonlama harakatli yo'l»", "«Reversiv harakatlanish»", "«Ro'paradagi harakatlanishga nisbatan imtiyoz»"],
  "1.19 «Ikki tomonlama harakatlanish» — qarama-qarshi harakatlanish qismi boshlanishini bildiradi (YHQ 1-ilova, 1.19).", "twoway");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Bir tomonlama harakatli yo'l»", "«Harakatlanish to'g'riga»", "«Bir tomonlama harakatli yo'lga chiqish»", "«Avtomagistral»"],
  "5.5 — transport vositalari butun kenglik bo'yicha bir yo'nalishda harakatlanadigan yo'l yoki qatnov qismi (YHQ 1-ilova, 5.5).", "oneway");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Oxiri berk yo'l»", "«Kirish taqiqlangan»", "«Asosiy yo'lning oxiri»", "«Turar joy dahasi»"],
  "5.19.1 — 5.19.4 «Oxiri berk yo'l» — yo'lning ko'rsatilgan yo'nalishda oxiri berkligini bildiradi (YHQ 1-ilova, 5.19).", "deadend");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«To'xtab turish joyi»", "«Pullik to'xtab turish joyi»", "«Yo'nalishsiz taksilar to'xtab turish joyi»", "«Avtobus va (yoki) trolleybus to'xtash joyi»"],
  "5.15 «To'xtab turish joyi» axborot-ko'rsatgich belgisi (YHQ 1-ilova, 5.15).", "parking");
Q("signs", "Bu belgi ostidagi 7.7 qo'shimcha axborot belgisi nimani bildiradi?",
  ["Dvigatelni ishlatmasdan to'xtab turishga ruxsat etilganini", "To'xtab turishning eng ko'p muddati cheklanganini", "Estakada yoki ko'zdan kechirish chuqurchasi borligini", "Joy faqat nogironlar uchun ajratilganini"],
  "7.7 «Dvigatelni ishlatmasdan to'xtab turish joyi» — 5.15 belgisi bilan belgilangan joyda dvigatelni ishlatmasdan to'xtab turishga ruxsat etilganini ko'rsatadi (YHQ 1-ilova, 7.7).", "parking");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["«Piyodalar o'tish joyi»", "«Bolalar»", "«Velosiped yo'lkasi bilan kesishuv»", "«Piyodalarning yo'l yoqasidan yurishi mumkin bo'lgan hudud»"],
  "1.20 «Piyodalar o'tish joyi» ogohlantiruvchi belgisi (YHQ 1-ilova, 1.20).", "w_crossing");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["«Svetofor bilan tartibga solish»", "«Shlagbaumli temir yo'l kesishmasi»", "«Diqqat, boshqariladigan to'siq»", "«Tirbandlik»"],
  "1.8 — harakatlanish svetofor bilan tartibga solinadigan chorraha, piyodalar o'tish joyi yoki yo'l qismini bildiradi (YHQ 1-ilova, 1.8).", "w_light");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["Kichik radiusli yoki ko'rinishi cheklangan o'ngga burilish", "Birinchisi o'ngga bo'lgan bir nechta xavfli burilish", "Faqat o'ngga harakatlanish majburiyati", "Burilishning yo'nalishi (T-simon chorraha)"],
  "1.11.1 «Xavfli burilish» (o'ngga) — kichik radiusli yoki ko'rinishi cheklangan burilish joyi (YHQ 1-ilova, 1.11.1).", "w_curve");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["Yo'lning ikki tomonlama torayishi", "Yo'lning o'ngga torayishi", "Ko'tarma ko'prik", "Ikki tomonlama harakatlanish"],
  "1.18.1 — ikki tomonlama torayish, 1.18.2 — o'ngga, 1.18.3 — chapga torayish (YHQ 1-ilova, 1.18.1 — 1.18.3).", "w_narrow");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["«Teng ahamiyatli yo'llar kesishuvi»", "«Ikkinchi darajali yo'l bilan kesishuv»", "«Aylanma harakatlanish bilan kesishuv»", "«Asosiy yo'l»"],
  "1.6 «Teng ahamiyatli yo'llar kesishuvi» ogohlantiruvchi belgisi (YHQ 1-ilova, 1.6).", "w_equal");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Ikkinchi darajali yo'l bilan kesishuv»", "«Teng ahamiyatli yo'llar kesishuvi»", "«Ikkinchi darajali yo'l bilan tutashuv»", "«Tramvay yo'li bilan kesishuv»"],
  "2.3.1 «Ikkinchi darajali yo'l bilan kesishuv» imtiyoz belgisi (YHQ 1-ilova, 2.3.1).", "w_secondary");
Q("signs", "Uchburchak shakliga qaramay, bu belgi YHQ 1-ilovasida qaysi guruhga kiritilgan?",
  ["Imtiyoz belgilari", "Ogohlantiruvchi belgilar", "Axborot-ko'rsatgich belgilari", "Qo'shimcha axborot belgilari"],
  "2.3.1 — 2.3.3 belgilari 2-bo'lim «Imtiyoz belgilari» tarkibida (YHQ 1-ilova, 2.3.1).", "w_secondary");
Q("signs", "Aholi punktida bu belgi chorrahadan qancha masofada o'rnatiladi?",
  ["50 — 100 metr", "150 — 300 metr", "10 — 15 metr", "Bevosita chorraha oldida"],
  "2.3.1 — 2.3.3 belgilari aholi punktlarida kesishmagacha 50 — 100 metr, tashqarida 150 — 300 metr masofada o'rnatiladi (YHQ 1-ilova, 2.3).", "w_secondary");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Bir izli temir yo'l»", "«Ko'p izli temir yo'l»", "«Shlagbaumli temir yo'l kesishmasi»", "«Tramvay yo'li bilan kesishuv»"],
  "1.3.1 «Bir izli temir yo'l» belgisi shlagbaum bilan jihozlanmagan temir yo'l kesishmasi oldida o'rnatiladi (YHQ 1-ilova, 1.3.1).", "stAndrew");
Q("signs", "Bu belgi eng yaqin relsdan qanday masofada o'rnatiladi?",
  ["20 metrdan kam bo'lmagan", "50 metrdan kam bo'lmagan", "10 — 15 metr", "150 — 300 metr"],
  "1.3.1 va 1.3.2 belgilari bevosita temir yo'l kesishmalari oldida, eng yaqin relsdan 20 metrdan kam bo'lmagan masofada o'rnatiladi (YHQ 1-ilova, 1-bo'lim).", "stAndrew");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Piyodalar yo'lkasi» — faqat piyodalar yurishiga ruxsat", "«Piyodalar o'tish joyi»", "«Piyodaning harakatlanishi taqiqlangan»", "«Piyodalarning yo'l yoqasidan yurishi mumkin bo'lgan hudud»"],
  "4.6 «Piyodalar yo'lkasi» — faqat piyodalar yurishiga ruxsat etiladi (YHQ 1-ilova, 4.6).", "pedpath");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Ko'rsatilgan yoki undan yuqori tezlikda harakatlanishga ruxsat", "Ko'rsatilganidan ortiq tezlikda harakatlanish taqiqlanadi", "Yo'lning shu qismida tavsiya etilgan harakatlanish tezligi", "Eng kam tezlik belgilangan yo'lning oxiri"],
  "4.7 «Eng kam tezlik» — faqat belgida ko'rsatilgan yoki undan yuqori tezlikda harakatlanishga ruxsat etiladi (YHQ 1-ilova, 4.7).", "minspeed");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Yuqori tezlik cheklangan hududning oxiri»", "«Eng kam tezlik belgilangan yo'lning oxiri»", "«Barcha cheklovlarning oxiri»", "«Tavsiya etilgan tezlik»"],
  "3.25 «Yuqori tezlik cheklangan hududning oxiri» (YHQ 1-ilova, 3.25).", "speedend");
Q("signs", "Bu belgi nimani bildiradi?",
  ["«Barcha cheklovlarning oxiri»", "«Quvib o'tish taqiqlangan hududning oxiri»", "«Yuqori tezlik cheklangan hududning oxiri»", "«Avtomagistralning oxiri»"],
  "3.31 «Barcha cheklovlarning oxiri» — bir nechta taqiqlovchi belgilar bir vaqtda amal qiladigan hududlarning oxiri (YHQ 1-ilova, 3.31).", "allend");
Q("signs", "Bu belgi qaysi belgining ta'sirini tugatmaydi?",
  ["3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan»", "3.20 «Quvib o'tish taqiqlangan»", "3.24 «Yuqori tezlik cheklangan»", "3.26 «Tovush moslamalaridan foydalanish taqiqlangan»"],
  "3.31 belgisi 3.16, 3.20, 3.22, 3.24, 3.26 — 3.30 belgilari hududining oxirini bildiradi; 3.4 bu ro'yxatda yo'q (YHQ 1-ilova, 3.31).", "allend");
Q("signs", "Bu belgi nimani taqiqlaydi?",
  ["Haqiqiy umumiy vazni belgida ko'rsatilganidan ortiq transport vositalari harakatini", "Har qanday o'qiga tushadigan og'irligi ko'rsatilganidan ortiq transport harakatini", "Ruxsat etilgan to'liq vazni 5 tonnadan ortiq yuk avtomobillarida quvib o'tishni", "Uzunligi 5 metrdan ortiq transport vositalari harakatini"],
  "3.11 «Vazn cheklangan» — haqiqiy umumiy vazni ko'rsatilganidan ortiq transport vositalari va ularning tarkiblari harakati taqiqlanadi (YHQ 1-ilova, 3.11).", "weight5");

// ===================== BELGILAR GURUHLARI VA UMUMIY QOIDALAR =====================
Q("signs", "Ogohlantiruvchi belgilar haydovchidan nimani talab qiladi?",
  ["Xavfli yo'l qismiga yaqinlashganini bilib, sharoitga qarab chora ko'rishni", "Belgida ko'rsatilgan harakatlanish tartibiga qat'iy amal qilishni", "Chorrahalarda belgilangan navbat bilan o'tishni", "Ko'rsatilgan obyektlar joylashuviga e'tibor berishni"],
  "Ogohlantiruvchi belgilar xavfli yo'l qismiga yaqinlashish haqida axborot berib, tegishli chora ko'rishni talab qiladi (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Imtiyoz belgilari nimani belgilaydi?",
  ["Chorrahalar va tor yo'l qismlarida harakatlanish navbatini", "Yo'l harakatiga ayrim taqiq va muayyan cheklovlarni", "Muayyan harakatlanish tartibini va yo'nalishlarini", "Aholi punktlari va manzillarning joylashuvini"],
  "Imtiyoz belgilari chorrahalarda, qatnov qismlari kesishgan joylarda, yo'lning tor qismlarida harakatlanish navbatini belgilaydi (YHQ 1-ilova, 2-bo'lim).");
Q("signs", "Taqiqlovchi belgilarning vazifasi qaysi javobda to'g'ri ko'rsatilgan?",
  ["Harakatga ayrim taqiqlar, cheklovlar kiritadi yoki ularni bekor qiladi", "Muayyan harakatlanish tartibini belgilaydi yoki bekor qiladi", "Xavfli yo'l qismi haqida oldindan axborot beradi", "Boshqa belgilar ta'sirini aniqlashtiradi yoki cheklaydi"],
  "Taqiqlovchi belgilar yo'l harakatiga ayrim taqiqlar, muayyan cheklovlar kiritadi yoki ularni bekor qiladi (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "Buyuruvchi belgilarning vazifasi nima?",
  ["Muayyan harakatlanish tartibini belgilaydi yoki bekor qiladi", "Harakatga taqiq va cheklovlar kiritadi", "Harakatlanish navbatini belgilaydi", "Xizmat ko'rsatish obyektlari haqida ma'lumot beradi"],
  "Buyuruvchi belgilar muayyan harakatlanish tartibini belgilaydi yoki bekor qiladi (YHQ 1-ilova, 4-bo'lim).");
Q("signs", "Qo'shimcha axborot belgisi (umumiy qoidaga ko'ra) qayerga joylashtiriladi?",
  ["Birga joriy etilgan belgining bevosita tagiga", "Birga joriy etilgan belgining ustiga yoki yon tomoniga", "Asosiy belgidan 50 metr oldinga", "Yo'lning qarama-qarshi tomoniga"],
  "Qo'shimcha axborot belgilari qaysi belgi bilan birga joriy etilsa, bevosita shu belgi tagiga joylashtiriladi (YHQ 1-ilova, 7-bo'lim).");
Q("signs", "Vaqtincha (ko'chma tirgakdagi) va doimiy belgilar ma'no jihatidan zid kelsa, haydovchi nimaga amal qiladi?",
  ["Vaqtincha o'rnatilgan belgilarga", "Doimiy belgilarga", "Yo'l chiziqlariga", "Qaysi biri ko'proq cheklasa, o'shanga"],
  "Vaqtincha va doimiy belgilar zid kelganda haydovchilar vaqtincha o'rnatilgan belgilarga amal qilishlari kerak (YHQ 1-ilova, 7-bo'lim).");
Q("signs", "Vaqtincha yo'l belgilari qaysi rangda bo'ladi?",
  ["Sariq rangda", "Ko'k rangda", "Yashil rangda", "To'q sariq-qora rangda"],
  "Vaqtincha yo'l belgilari sariq rangda bo'ladi (YHQ 1-ilova, 7-bo'lim).");
Q("signs", "Belgilangan tartibda o'rnatilgan elektron yo'l belgilari qanday kuchga ega?",
  ["Odatdagi yo'l belgilari bilan bir xil kuchga", "Faqat tavsiyaviy kuchga, majburiy emas", "Faqat tunda va yomon ob-havoda majburiy kuchga", "Doimiy belgilardan ustun kuchga"],
  "Belgilangan tartibda o'rnatilgan elektron yo'l belgilari odatdagi yo'l belgilari bilan bir xil kuchga ega (YHQ 1-ilova).");
Q("signs", "Yo'l belgisi (shu jumladan vaqtincha belgi) va yotiq yo'l chizig'i ma'nosi zid kelsa, haydovchi nimaga amal qiladi?",
  ["Yo'l belgisiga", "Yotiq yo'l chizig'iga", "Qaysi biri yangi bo'lsa, o'shanga", "Svetofor bo'lmasa, chiziqqa"],
  "Belgilar va yotiq chiziqlar ma'nosi zid kelganda yoki chiziqlarni farqlab bo'lmasa, haydovchilar yo'l belgilariga amal qilishi kerak (YHQ 2-ilova, 1-bo'lim).");

// ===================== OGOHLANTIRUVCHI BELGILAR: MASOFALAR =====================
Q("signs", "Aholi punktida 1.1, 1.2, 1.5 — 1.32 ogohlantiruvchi belgilari xavfli joydan qancha oldin o'rnatiladi?",
  ["50 — 100 metr", "150 — 300 metr", "100 — 150 metr", "20 — 50 metr"],
  "Aholi punktlarida 50 — 100 metr, aholi punktlaridan tashqarida 150 — 300 metr oldin o'rnatiladi (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Aholi punktidan tashqarida 1.1, 1.2, 1.5 — 1.32 ogohlantiruvchi belgilari xavfli joydan qancha oldin o'rnatiladi?",
  ["150 — 300 metr", "50 — 100 metr", "300 — 500 metr", "100 — 200 metr"],
  "Aholi punktlaridan tashqarida bu belgilar xavfli joydan 150 — 300 metr oldin o'rnatiladi (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Ogohlantiruvchi belgi odatdagidan boshqa masofada o'rnatilgan bo'lsa, bu masofa qanday ko'rsatiladi?",
  ["7.1.1 «Obyektgacha bo'lgan masofa» qo'shimcha belgisi bilan", "7.2.1 «Ta'sir oralig'i» qo'shimcha belgisi bilan", "Belgining sariq foni va qora hoshiyasi bilan", "1.27 yotiq chizig'i bilan qatnov qismida"],
  "Zaruriyat bo'lganda ogohlantiruvchi belgilar 7.1.1 qo'shimcha axborot belgisida ko'rsatilgan boshqa masofada ham o'rnatilishi mumkin (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Aholi punktlaridan tashqarida qaysi belgi takrorlab o'rnatiladi?",
  ["1.21 «Bolalar»", "1.20 «Piyodalar o'tish joyi»", "1.8 «Svetofor bilan tartibga solish»", "1.11.1 «Xavfli burilish»"],
  "Aholi punktlaridan tashqarida 1.1, 1.2, 1.9, 1.10, 1.21 va 1.23 belgilari takrorlanadi (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Aholi punktidan tashqarida takrorlanadigan ogohlantiruvchi belgilardan ikkinchisi qayerda o'rnatiladi?",
  ["Xavfli qism boshlanishiga kamida 50 metr qolganda", "Xavfli qism boshlanishiga 150 — 300 metr qolganda", "Bevosita xavfli qism boshida", "Birinchi belgidan 300 metr keyin"],
  "Ikkinchi belgi yo'lning xavfli qismi boshlanishiga kamida 50 metr qolganda o'rnatiladi (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Qatnov qismida qisqa muddatli ishlar olib borilsa, 1.23 «Ta'mirlash ishlari» belgisi qayerda o'rnatilishi mumkin?",
  ["Ish joyiga 10 — 15 metr yetmasdan (7.1.1 belgisisiz)", "Ish joyiga 50 — 100 metr yetmasdan (7.1.1 belgisi bilan)", "Bevosita ish joyida, to'siq ustida", "Ish joyidan 150 — 300 metr oldin, ikki marta"],
  "Qisqa muddatli yo'l ishlarida 1.23 belgisi ish joyiga 10 — 15 metr yetmasdan, 7.1.1 belgisisiz o'rnatilishi mumkin (YHQ 1-ilova, 1-bo'lim).");
Q("signs", "Nishablik va balandlik ketma-ket kelsa, 1.13 va 1.14 belgilari qayerda o'rnatilishi mumkin?",
  ["Bevosita nishablik va balandlik oldida", "Faqat 150 — 300 metr oldin", "Faqat 7.2.1 belgisi bilan birga", "Faqat nishablik oxirida"],
  "Nishablik va balandlik ketma-ket kelsa, 1.13 va 1.14 belgilari bevosita ular oldiga o'rnatilishi mumkin (YHQ 1-ilova, 1-bo'lim).");

// ===================== OGOHLANTIRUVCHI BELGILAR: MA'NOSI =====================
Q("signs", "1.9 «Ko'tarma ko'prik» belgisi nimani bildiradi?",
  ["Ko'tarma ko'prik yoki solda kesib o'tishni", "Daryo yoki suv havzasi qirg'og'iga chiqishni", "Tunnelga yaqinlashishni", "Tik balandlikni"],
  "1.9 «Ko'tarma ko'prik» — ko'tarma ko'prik yoki solda kesib o'tish (YHQ 1-ilova, 1.9).");
Q("signs", "1.12.2 «Xavfli burilishlar» belgisi nimani bildiradi?",
  ["Birinchi burilishi chapga bo'lgan xavfli burilishlar qismi", "Birinchi burilishi o'ngga bo'lgan xavfli burilishlar qismi", "Chapga bitta xavfli burilish", "T-simon chorrahada chapga burilish yo'nalishi"],
  "1.12.1 — birinchi burilish o'ngga, 1.12.2 — birinchi burilish chapga (YHQ 1-ilova, 1.12).");
Q("signs", "1.16 «Notekis yo'l» belgisi qanday yo'l qismini bildiradi?",
  ["O'nqir-cho'nqir, o'ydim-chuqur joylar bo'lgan qism", "Qatnov qismi o'ta sirpanchiq bo'lgan qism", "Sun'iy notekislik o'rnatilgan qism", "Tosh ko'chishi va tushishi mumkin bo'lgan qism"],
  "1.16 «Notekis yo'l» — o'nqir-cho'nqir, o'ydim-chuqur joylar, ko'prikning yo'lga notekis tutashuvi kabi qismlar (YHQ 1-ilova, 1.16).");
Q("signs", "1.17 «Tosh otilishi xavfi» belgisi nimani bildiradi?",
  ["G'ildirak ostidan shag'al, tosh otilib chiqishi mumkin bo'lgan qism", "Tosh ko'chishi, surilishi va tushishi mumkin bo'lgan qism", "Qatnov qismi notekis bo'lgan qism", "Ta'mirlash ishlari olib borilayotgan qism"],
  "1.17 — transport vositasi g'ildiragi ostidan shag'al, tosh va shunga o'xshashlarning otilib chiqish ehtimoli bo'lgan yo'l qismi (YHQ 1-ilova, 1.17).");
Q("signs", "1.26 «Toshlar tushishi» belgisi nimani bildiradi?",
  ["Tosh ko'chishi, surilishi va tushishi mumkin bo'lgan qism", "G'ildirak ostidan tosh otilishi mumkin bo'lgan qism", "Qatnov qismi o'ta sirpanchiq bo'lgan qism", "Qatnov qismi notekis bo'lgan qism"],
  "1.26 «Toshlar tushishi» — tosh ko'chishi, surilishi va tushishi mumkin bo'lgan yo'l qismi (YHQ 1-ilova, 1.26).");
Q("signs", "1.21 «Bolalar» belgisi nimani bildiradi?",
  ["Bolalarning qatnov qismiga chiqib qolish ehtimolini", "Maktab yoki maktabgacha ta'lim tashkiloti joylashuvini", "Faqat bolalar uchun mo'ljallangan piyodalar o'tish joyini", "Bolalar muassasasi hududiga kirish taqiqlanganini"],
  "1.21 «Bolalar» — bolalar muassasalariga yaqin yo'lning qatnov qismidan bolalarning chiqib qolish ehtimolini bildiradi (YHQ 1-ilova, 1.21).");
Q("signs", "1.20 «Piyodalar o'tish joyi» ogohlantiruvchi belgisi qanday belgilangan o'tish joyiga yaqinlashishni bildiradi?",
  ["5.16.1, 5.16.2, 5.48 belgilari va (yoki) 1.14.x, 1.29.x chiziqlari bilan", "Faqat svetofor bilan tartibga solinadigan o'tish joyiga", "Faqat 4.6 «Piyodalar yo'lkasi» belgisi va 1.25 chizig'i bilan belgilangan", "Faqat yer osti yoki yer usti piyodalar o'tish joyiga"],
  "1.20 belgisi 5.16.1, 5.16.2, 5.48 belgilari va (yoki) 1.14.1 — 1.14.4, 1.29.1 — 1.29.3 chiziqlari bilan belgilangan o'tish joyini bildiradi (YHQ 1-ilova, 1.20).");
Q("signs", "1.31 «Sun'iy yo'l notekisligi» belgisi nima uchun qo'llaniladi?",
  ["Tezlikni majburiy kamaytiruvchi notekislik haqida ogohlantirish", "Tabiiy o'nqir-cho'nqir yo'l qismi haqida ogohlantirish", "Ta'mirlanayotgan yo'l qismini aylanib o'tish yo'nalishini ko'rsatish", "Shovqin chiziqlari chizilgan qism haqida ogohlantirish"],
  "1.31 — sun'iy notekislik o'rnatilgan qismga yaqinlashish haqida ogohlantiradi; tezlikni majburiy kamaytirish uchun qo'llaniladi (YHQ 1-ilova, 1.31).");
Q("signs", "1.32 «Tirbandlik» belgisi qayerga o'rnatiladi?",
  ["Tirbandlikka kirishdan oldin, uni aylanib o'tish mumkin bo'lgan joyga", "Bevosita tirbandlik boshlangan joyga, 7.2.1 belgisi bilan", "Faqat svetoforli chorraha oldiga, svetofor bilan birga", "Faqat avtomagistrallarga kirishda"],
  "1.32 belgisi tirbandlik hosil bo'lgan yo'l yoki chorrahaga kirish oldidan uni aylanib o'tish imkoniyati bo'lgan joyga o'rnatiladi (YHQ 1-ilova, 1.32).");
Q("signs", "1.33 «Qatnov qismi kesishmasi hududi» belgisi qachon chorrahaga kirishni taqiqlaydi?",
  ["Tirbandlik sabab to'xtab, ko'ndalang harakatga to'sqinlik qiladigan bo'lsa", "Svetoforning sariq ishorasi yongan bo'lsa, istisnosiz", "Chorrahada piyodalar bo'lsa yoki ular o'tishni boshlagan bo'lsa", "Har doim, faqat yo'nalishli transportga ruxsat bor"],
  "1.33 — oldinda tirbandlik tufayli majburiy to'xtab, ko'ndalang yo'nalishdagi transportga to'sqinlik tug'diradigan bo'lsa chorrahaga kirish taqiqlanadi (YHQ 1-ilova, 1.33).");
Q("signs", "1.34 «Diqqat, boshqariladigan to'siq» belgisi nima haqida ogohlantiradi?",
  ["Oldinda boshqariladigan to'suvchi qurilma borligi haqida", "Shlagbaumli temir yo'l kesishmasi haqida (aholi punktida)", "Bojxona nazorat punkti oldidagi majburiy to'xtash haqida", "Yo'lning ta'mirlanayotgan qismi haqida"],
  "1.34 — boshqariladigan to'suvchi qurilmaga yetmasdan o'rnatiladi va oldinda to'suvchi qurilma borligi haqida ogohlantiradi (YHQ 1-ilova, 1.34).");
Q("signs", "1.24 «Mol haydab o'tish» belgisi qaysi belgi bilan adashtirilmasligi kerak?",
  ["1.25.1 «Yovvoyi hayvonlar»", "1.21 «Bolalar»", "1.27 «Yonlama shamol»", "1.22 «Velosiped yo'lkasi bilan kesishuv»"],
  "1.24 — «Mol haydab o'tish», 1.25.1 — «Yovvoyi hayvonlar»; ikkalasi hayvonlar bilan bog'liq, ammo ma'nosi farqli (YHQ 1-ilova, 1.24, 1.25.1).");

// ===================== IMTIYOZ BELGILARI =====================
Q("signs", "2.1 «Asosiy yo'l» belgisi qanday huquq beradi?",
  ["Harakat tartibga solinmagan chorrahalarda oldin o'tish huquqini", "Svetoforli chorrahalarda qizil chiroqda o'tish huquqini", "Yo'lning tor qismida ro'paradagilarga nisbatan imtiyozni", "Har qanday chorrahada to'xtamasdan o'tish huquqini"],
  "2.1 «Asosiy yo'l» harakat tartibga solinmagan chorrahalarda oldin o'tish huquqini beradi (YHQ 1-ilova, 2.1).");
Q("signs", "2.3.2 va 2.3.3 belgilari nimani bildiradi?",
  ["2.3.2 — o'ngdan, 2.3.3 — chapdan tutashuv", "2.3.2 — chapdan, 2.3.3 — o'ngdan tutashuv", "2.3.2 — o'ngga, 2.3.3 — chapga torayish", "2.3.2 — o'ngga, 2.3.3 — chapga xavfli burilish"],
  "2.3.2 — tutashuv o'ngdan, 2.3.3 — tutashuv chapdan (YHQ 1-ilova, 2.3.2, 2.3.3).");
Q("signs", "2.6 «Ro'para harakatlanishning ustunligi» belgisi nimani talab qiladi?",
  ["Tor qismdagi yoki unga yaqin ro'paradagi transportga yo'l berishni", "Ro'paradan kelayotgan transport sizga yo'l berishini kutishni", "Tor qismga faqat tovush ishorasi berib kirishni", "Tor qismda faqat qatnov qismining o'ng chetidan yurishni"],
  "2.6 — qarama-qarshi harakatni qiyinlashtiradigan hollarda tor qismga kirish taqiqlanadi; tor qismdagi yoki unga yaqin ro'paradagi transportga yo'l beriladi (YHQ 1-ilova, 2.6).");
Q("signs", "Aholi punktidan tashqarida chorraha oldiga 2.5 belgisi o'rnatilgan bo'lsa, 7.1.2 qo'shimcha belgisi qaysi belgi bilan o'rnatiladi?",
  ["2.4 «Yo'l bering!» belgisi bilan", "2.1 «Asosiy yo'l» belgisi bilan", "1.6 «Teng ahamiyatli yo'llar kesishuvi» bilan", "3.27 «To'xtash taqiqlangan» bilan"],
  "7.1.2 — aholi punktlaridan tashqarida chorraha oldiga 2.5 o'rnatilgan bo'lsa, 2.4 belgisi bilan o'rnatilib, chorrahagacha masofani ko'rsatadi (YHQ 1-ilova, 7.1.2).");
Q("signs", "2.5 «To'xtamasdan harakatlanish taqiqlangan» belgisi temir yo'l kesishmasidan tashqari yana qayerdan oldin o'rnatilishi mumkin?",
  ["Karantin maskanidan oldin", "Avtomagistralga kirishdan oldin", "Maktab oldidagi o'tish joyidan oldin", "Yoqilg'i quyish shoxobchasidan oldin"],
  "2.5 belgisi temir yo'l kesishmasi yoki karantin maskanidan oldin o'rnatilishi mumkin (YHQ 1-ilova, 2.5).");
Q("signs", "3.17.3 «Nazorat joyi» belgisi qaysi belgi bilan birga o'rnatilishi mumkin?",
  ["2.5 «To'xtamasdan harakatlanish taqiqlangan»", "2.4 «Yo'l bering!»", "3.1 «Kirish taqiqlangan»", "1.34 «Diqqat, boshqariladigan to'siq»"],
  "3.17.3 belgisi 2.5 belgisi bilan birga o'rnatilishi mumkin (YHQ 1-ilova, 3.17.3).");

// ===================== TAQIQLOVCHI BELGILAR =====================
Q("signs", "3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan» belgisi (vazn ko'rsatilmagan bo'lsa) qaysi yuk avtomobillarini taqiqlaydi?",
  ["Ruxsat etilgan to'liq vazni 3,5 tonnadan ortiq", "Ruxsat etilgan to'liq vazni 2,5 tonnadan ortiq", "Haqiqiy vazni 5 tonnadan ortiq", "Har qanday vazndagi"],
  "3.4 belgisi ruxsat etilgan to'liq vazni 3,5 tonnadan (vazn ko'rsatilmagan bo'lsa) ortiq yuk avtomobillarini taqiqlaydi (YHQ 1-ilova, 3.4).");
Q("signs", "3.4 belgisi qaysi yuk avtomobillarining harakatlanishini taqiqlamaydi?",
  ["Bortiga qiya oq chiziq tortilgan yoki odam tashishga mo'ljallangan", "Tirkamasi bo'lgan va to'liq vazni 3,5 tonnadan oshmaydigan", "Ruxsat etilgan to'liq vazni 4 tonna bo'lgan", "Xavfli yuk tashiyotgan"],
  "3.4 belgisi bortlariga qiya oq chiziq tortilgan yoki odamlarni tashish uchun mo'ljallangan yuk avtomobillarini taqiqlamaydi (YHQ 1-ilova, 3.4).");
Q("signs", "3.4 belgisi yuk avtomobillaridan tashqari yana kimlarning harakatlanishini taqiqlaydi?",
  ["Traktorlar va o'ziyurar uskunalarning", "Avtobuslar va trolleybuslarning", "Mototsikl va elektromototsikllarning", "Tirkamali yengil avtomobillarning"],
  "3.4 belgisi traktorlar va o'ziyurar uskunalarning harakatlanishini ham taqiqlaydi (YHQ 1-ilova, 3.4).");
Q("signs", "3.5.1 belgisi kimlarning harakatlanishini taqiqlaydi?",
  ["Skuter, moped va kichik hajmdagi mototransport vositalarining", "Mototsikl va elektromototsikllarning", "Velosiped va mopedlarning", "Individual harakatlanish vositalari (elektrosamokat va h.k.)ning"],
  "3.5.1 — «Skuter va mopedlar, shuningdek, kichik hajmdagi mototransport vositalarining harakatlanishi taqiqlangan» (YHQ 1-ilova, 3.5.1).");
Q("signs", "3.7 «Tirkama bilan harakatlanish taqiqlangan» belgisi nimani taqiqlaydi?",
  ["Yuk avtomobillari va traktorlarning tirkama bilan harakatini hamda mexanik TVni shatakka olishni", "Barcha transport vositalarining, shu jumladan yengil avtomobillarning tirkama bilan harakatini", "Faqat yarim tirkamali avtopoyezdlar harakatini", "Faqat traktorlarning tirkama bilan harakatini"],
  "3.7 — yuk avtomobillari va traktorlarning barcha turdagi tirkamalar bilan harakati, shuningdek mexanik TVni shatakka olish taqiqlanadi (YHQ 1-ilova, 3.7).");
Q("signs", "3.8 «Ot-arava harakatlanishi taqiqlangan» belgisi yana nimani taqiqlaydi?",
  ["Otliqlar, yuk ortilgan hayvonlar va chorva haydab o'tishni", "Velosipedda va mopedda harakatlanishni", "Traktorlar va o'ziyurar uskunalarning harakatini", "Piyodalar va individual harakatlanish vositalarini"],
  "3.8 — ot-arava (chana), otliqlar, yuk ortilgan hayvonlar harakati va chorva (poda) haydab o'tish taqiqlanadi (YHQ 1-ilova, 3.8).");
Q("signs", "3.12 «O'qqa tushadigan og'irlik cheklangan» belgisi nimani taqiqlaydi?",
  ["Har qanday o'qiga tushadigan haqiqiy og'irligi ortiq TV harakatini", "Haqiqiy umumiy vazni ko'rsatilganidan ortiq TV harakatini", "Ruxsat etilgan to'liq vazni 3,5 tonnadan ortiq TV harakatini", "Gabarit balandligi ko'rsatilganidan ortiq TV harakatini"],
  "3.12 — har qanday o'qiga tushadigan haqiqiy og'irlik belgida ko'rsatilganidan ortiq TV harakatlanishi taqiqlanadi (YHQ 1-ilova, 3.12).");
Q("signs", "3.16 «Eng kam oraliq» belgisi nimani taqiqlaydi?",
  ["Ko'rsatilganidan kam bo'ylama oraliqda harakatlanishni", "Ko'rsatilganidan kam tezlikda harakatlanishni", "Ko'rsatilganidan kam yon oraliqda quvib o'tishni", "Oldingi transportdan ko'rsatilgan masofada to'xtashni"],
  "3.16 — belgida ko'rsatilganidan kam bo'ylama oraliq masofada harakatlanish taqiqlanadi (YHQ 1-ilova, 3.16).");
Q("signs", "3.17.1 «Bojxona» belgisi nimani taqiqlaydi?",
  ["Bojxona (nazorat punkti) oldida to'xtamasdan o'tib ketishni", "Bojxona hududiga har qanday transport vositasining kirishini", "Bojxona oldida 5 daqiqadan ortiq to'xtab turishni", "Bojxona oldida qayrilib olishni"],
  "3.17.1 — bojxona (nazorat punkti) oldida to'xtamasdan o'tib ketish taqiqlanadi (YHQ 1-ilova, 3.17.1).");
Q("signs", "3.17.2 «Xavf-xatar» belgisi kimlarning keyingi harakatini taqiqlaydi?",
  ["Istisnosiz barcha transport vositalarining", "Maxsus xizmat transportidan boshqa barcha transportning", "Faqat yuk avtomobillarining", "Faqat xavfli yuk tashiyotgan transportning"],
  "3.17.2 — YTH, avariya, yong'in yoki boshqa xavf-xatar tufayli istisnosiz barcha transport vositalarining harakati taqiqlanadi (YHQ 1-ilova, 3.17.2).");
Q("signs", "3.22 «Yuk avtomobillarida quvib o'tish taqiqlangan» belgisi qaysi yuk avtomobillariga tegishli?",
  ["To'liq vazni 3,5 tonnadan ortiq", "To'liq vazni 2,5 tonnadan ortiq", "Tirkamali har qanday", "Xavfli yuk tashiyotgan"],
  "3.22 — to'liq vazni 3,5 tonnadan ortiq yuk avtomobillarida barcha transport vositalarini quvib o'tish taqiqlanadi (YHQ 1-ilova, 3.22).");
Q("signs", "3.22 belgisi ta'sir hududida 3,5 tonnadan og'ir yuk avtomobili qaysi transportni quvib o'tishi mumkin?",
  ["Traktorni", "Yengil avtomobilni", "Avtobusni", "Mototsiklni"],
  "3.22 da istisno: soatiga 40 km dan kam tezlikdagi TV, traktor, ot-arava, velosipedni quvib o'tish mumkin (YHQ 1-ilova, 3.22).");
Q("signs", "3.20 belgisi ta'sirini tugatuvchi belgi qaysi?",
  ["3.21 «Quvib o'tish taqiqlangan hududning oxiri»", "3.23 «Yuk avtomobillarida quvib o'tish taqiqlangan hududning oxiri»", "2.2 «Asosiy yo'lning oxiri»", "3.25 «Yuqori tezlik cheklangan hududning oxiri»"],
  "3.20, 3.22, 3.24 belgilari ta'siri mos ravishda 3.21, 3.23, 3.25 belgilari va 7.2.1 belgisi orqali aniqlashtiriladi (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "3.26 «Tovush moslamalaridan foydalanish taqiqlangan» belgisi ta'sirida tovush ishorasi qachon berilishi mumkin?",
  ["Yo'l-transport hodisasining oldini olish uchun", "Quvib o'tish haqida ogohlantirish uchun", "Tunda chorrahaga yaqinlashganda", "Piyodani chaqirish uchun"],
  "3.26 — YTHning oldini olish hollaridan boshqa vaziyatlarda tovush moslamasidan foydalanish taqiqlanadi (YHQ 1-ilova, 3.26).");
Q("signs", "3.27 «To'xtash taqiqlangan» belgisi qaysi transport vositalariga ta'sir qilmaydi?",
  ["Xizmat vazifasidagi, mayoqcha va maxsus rangli sxemali TVga", "Avariya ishorasi yoqilgan har qanday transport vositasiga", "Yuk ortib-tushirayotgan yuk avtomobillariga", "Ruxsat etilgan to'liq vazni 3,5 t gacha bo'lgan TVga"],
  "3.27 — ko'k yoki qizil yaltiroq mayoqcha va maxsus rangli bo'yoq sxemalari bilan belgilangan, xizmat vazifasini bajarayotgan TV bundan mustasno (YHQ 1-ilova, 3.27).");
Q("signs", "3.29 belgisi nimani bildiradi?",
  ["Oyning toq kunlarida to'xtab turish taqiqlangan", "Oyning juft kunlarida to'xtab turish taqiqlangan", "Oyning toq kunlarida to'xtash taqiqlangan", "Dam olish kunlarida to'xtab turish taqiqlangan"],
  "3.29 — «Oyning toq kunlarida to'xtab turish taqiqlangan», 3.30 — juft kunlarida (YHQ 1-ilova, 3.29, 3.30).");
Q("signs", "3.29 va 3.30 belgilari qatnov qismining qarama-qarshi tomonlarida o'rnatilgan. Har ikkala tomonda qachon to'xtab turishga ruxsat etiladi?",
  ["Soat 19:00 dan 21:00 gacha", "Soat 18:00 dan 20:00 gacha", "Soat 20:00 dan 22:00 gacha", "Soat 07:00 dan 09:00 gacha"],
  "Bunday holatda har ikkala tomonda soat 19:00 dan 21:00 gacha to'xtab turishga ruxsat etiladi (joyini o'zgartirish vaqti) (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "Portlovchi va tez alangalanuvchi yuk tashiyotgan transport harakatini qaysi belgi taqiqlaydi?",
  ["3.33", "3.32", "3.17.2", "3.4"],
  "3.33 — «Portlovchi va tez alangalanuvchi yukni tashiyotgan transport vositasining harakati taqiqlangan» (YHQ 1-ilova, 3.33).");
Q("signs", "3.35 belgisi qaysi avtotransport vositalarining ekologik zona hududida harakatlanishini taqiqlaydi?",
  ["«O'rta» va «zararli» ekologik toifadagilarning", "Faqat dizel dvigatelli avtomobillarning", "Ishlab chiqarilganiga 10 yildan oshganlarning", "Faqat yuk avtomobillarining"],
  "3.35 — ekologik zona hududida «o'rta» va «zararli» ekologik toifalarga ega avtotransport vositalari harakatlanishi taqiqlangan (YHQ 1-ilova, 3.35).");
Q("signs", "3.35 belgisi ekologik zona hududiga kirishdan qancha oldin o'rnatiladi?",
  ["150 — 300 metr", "50 — 100 metr", "250 — 500 metr", "10 — 15 metr"],
  "3.35 belgisi ekologik zona hududiga kirishdan 150 — 300 metr oldin o'rnatiladi (YHQ 1-ilova, 3.35).");
Q("signs", "3.2 — 3.8 belgilari ta'sir oralig'ida yashovchi fuqaroga tegishli avtomobilga ta'sir qiladimi?",
  ["Yo'q, lekin u eng yaqin chorrahadan kirib-chiqishi kerak", "Ha, istisnosiz ta'sir qiladi va kirish mumkin emas", "Yo'q, u istalgan joydan kirib-chiqishi mumkin", "Faqat soat 19:00 dan 21:00 gacha ta'sir qilmaydi"],
  "3.2 — 3.8 belgilari ta'sir oralig'ida yashovchi yoki ishlovchi fuqarolarga tegishli TVga ta'sir qilmaydi; ular yaqin chorrahadan kirib yoki chiqib ketishlari kerak (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "Qo'shimcha 7.18 «Nogironlar mustasno» belgisi bo'lganda «Nogiron» tanish belgili avtomobil qaysi belgi ta'sir doirasida to'xtashi mumkin?",
  ["3.27 «To'xtash taqiqlangan»", "3.1 «Kirish taqiqlangan»", "3.17.1 «Bojxona»", "3.20 «Quvib o'tish taqiqlangan»"],
  "7.18 belgi bo'lganda 3.27 belgisining ta'sir doirasida to'xtashga ruxsat etiladi (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "Yo'lga yondosh hududlardan (hovlilardan) chiqish joylari 3.20, 3.24 kabi belgilar ta'sirini to'xtatadimi?",
  ["Yo'q, ularning oldida tegishli belgi bo'lmasa, ta'sir yo'qolmaydi", "Ha, har qanday yo'l chetidagi chiqish ta'sirni tugatadi", "Faqat aholi punktidan tashqarida tugatadi", "Faqat dala yo'llari bilan kesishganda tugatadi"],
  "Yondosh hududlardan chiqish joylarida, dala va o'rmon yo'llari bilan kesishgan joylarda tegishli belgi bo'lmasa, belgilar ta'siri yo'qolmaydi (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "3.16 va 3.26 belgilari ta'sir doirasi qanday aniqlashtirilishi mumkin?",
  ["7.2.1 «Ta'sir oralig'i» qo'shimcha belgisi bilan", "3.31 belgisi bilan takror o'rnatib", "7.2.3 belgisi bilan takror o'rnatib", "1.27 yoki 1.28 yotiq chizig'i bilan"],
  "3.16 va 3.26 belgilari ta'sir doirasi 7.2.1 qo'shimcha axborot belgisi bilan aniqlashtiriladi (YHQ 1-ilova, 3-bo'lim).");
Q("signs", "3.27 — 3.30 belgilari amal qilish oralig'ining oxiri qanday ko'rsatiladi?",
  ["Belgi 7.2.3 bilan takrorlanadi yoki 7.2.2 bilan qo'llaniladi", "3.31 «Barcha cheklovlarning oxiri» belgisi bilan", "Keyingi piyodalar o'tish joyi yoki chorraha bilan", "1.4 yoki 1.10 chizig'ining boshlanishi bilan"],
  "3.27 — 3.30 belgilarining amal qilish oralig'i oxiriga ular 7.2.3 bilan takror o'rnatiladi yoki 7.2.2 bilan qo'llaniladi (YHQ 1-ilova, 3-bo'lim).");

// ===================== BUYURUVCHI BELGILAR =====================
Q("signs", "Chapga burilishga ruxsat beruvchi 4.1.3 belgisi qayrilib olishga ruxsat beradimi?",
  ["Ha, ruxsat beradi", "Yo'q, qayrilish taqiqlanadi", "Faqat 5.11.1 belgisi bo'lsa", "Faqat yo'nalishli transportga"],
  "Chapga burilishga ruxsat beruvchi 4.1.x belgilari qayrilib olishga ham ruxsat beradi (YHQ 1-ilova, 4.1.1 — 4.1.6).");
Q("signs", "4.1.1 — 4.1.6 belgilari qaysi joyga tatbiq etiladi?",
  ["Oldiga o'rnatilgan qatnov qismlari kesishmasiga", "Keyingi barcha chorrahalarga, 3.31 belgisigacha", "Aholi punktining oxirigacha", "Belgidan 200 metr masofagacha"],
  "4.1.1 — 4.1.6 belgilari qaysi kesishmadan oldin o'rnatilsa, ta'siri shu kesishmaga joriy qilinadi (YHQ 1-ilova, 4-bo'lim).");
Q("signs", "4.1.6 belgisi qanday yo'nalishlarda harakatlanishga ruxsat beradi?",
  ["O'ngga yoki chapga", "To'g'riga yoki o'ngga", "To'g'riga yoki chapga", "Faqat to'g'riga"],
  "4.1.4 — to'g'riga yoki o'ngga, 4.1.5 — to'g'riga yoki chapga, 4.1.6 — o'ngga yoki chapga (YHQ 1-ilova, 4.1.6).");
Q("signs", "4.2.1 belgisi nimani bildiradi?",
  ["To'siqni chapdan aylanib o'tishni", "To'siqni o'ngdan aylanib o'tishni", "To'siqni istalgan tomondan aylanib o'tishni", "Harakatlanish chapga"],
  "4.2.1 — «To'siqni chapdan aylanib o'tish», 4.2.2 — o'ngdan, 4.2.3 — o'ngdan yoki chapdan (YHQ 1-ilova, 4.2).");
Q("signs", "4.2.1 — 4.2.3 belgilari bilan birgalikda to'siqning uzoqdan ko'rinishini ta'minlash uchun qaysi qo'shimcha belgi o'rnatiladi?",
  ["7.22.1 — 7.22.3 «To'siq»", "7.12 «Xavfli yo'l yoqasi»", "7.14 «Harakatlanish tasmasi»", "7.23 «Navbat bilan o'tish»"],
  "7.22.1 — 7.22.3 «To'siq» belgilari 4.2.1 — 4.2.3 belgilari bilan birgalikda o'rnatiladi (YHQ 1-ilova, 7.22).");
Q("signs", "4.4 «Yengil avtomobillar harakati» belgisi qaysi yuk avtomobillarining harakatlanishiga ruxsat beradi?",
  ["Ruxsat etilgan to'liq vazni 3,5 tonnadan oshmaydiganlarning", "Ruxsat etilgan to'liq vazni 5 tonnadan oshmaydiganlarning", "Hech bir yuk avtomobilining", "Faqat bortiga qiya oq chiziq tortilganlarning"],
  "4.4 — yengil avtomobillar, avtobus, mototsikllar va boshqalar hamda to'liq vazni 3,5 tonnadan oshmaydigan yuk avtomobillari harakatiga ruxsat etiladi (YHQ 1-ilova, 4.4).");
Q("signs", "4.5 «Velosiped yo'lkasi» belgisi bilan belgilangan yo'lkadan piyodalar qachon yurishi mumkin?",
  ["Trotuar yoki piyodalar yo'lkasi bo'lmasa", "Hech qanday holatda yura olmaydi", "Faqat velosipedchilar bo'lmaganda", "Velosipedni yetaklab yurgandagina"],
  "4.5 — faqat velosiped va individual harakatlanish vositalariga ruxsat; trotuar yoki piyodalar yo'lkasi bo'lmasa, piyodalar ham yurishi mumkin (YHQ 1-ilova, 4.5).");
Q("signs", "4.6.3 belgisidagi yo'lakda piyodalar va velosipedchilar harakati qanday ajratilishi mumkin?",
  ["1.1, 1.25, 1.26 chiziqlari, konstruktiv yoki boshqa usulda", "Faqat 1.5 uzuq chizig'i bilan, ikki tomondan", "Faqat bordyur yoki panjara bilan", "Ajratilmaydi, ular birgalikda harakatlanadi"],
  "4.6.3 — 1.1, 1.25 va 1.26 yotiq chiziqlari yordamida, konstruktiv tarzda yoxud boshqa usulda harakat ajratilgan yo'lak (YHQ 1-ilova, 4.6.3).");
Q("signs", "4.9.2 belgisi nimani bildiradi?",
  ["Xavfli yuk tashiyotgan TVga chapga harakatlanishga ruxsat", "Xavfli yuk tashiyotgan TVga o'ngga harakatlanishga ruxsat", "Xavfli yuk tashiyotgan TVga to'g'riga harakatlanishga ruxsat", "Xavfli yuk tashiyotgan TV harakati taqiqlangan"],
  "4.9.1 — to'g'riga, 4.9.2 — chapga, 4.9.3 — o'ngga (YHQ 1-ilova, 4.9).");
Q("signs", "Ustida 4.7 «Eng kam tezlik» tasviri bo'lgan 5.8.3 «Tasmaning boshlanishi» belgisida, ko'rsatilgan tezlikda yura olmaydigan haydovchi nima qilishi kerak?",
  ["Asosiy tasmadan qo'shimcha tasmaga qayta tizilishi", "Avariya ishorasini yoqib asosiy tasmada davom etishi", "Yo'l yoqasida to'xtashi", "Chap tasmaga o'tishi"],
  "Bunday holda ko'rsatilgan yoki undan katta tezlikda harakatlana olmaydigan TV haydovchisi asosiy tasmadan qo'shimcha tasmaga qayta tizilishi kerak (YHQ 1-ilova, 5.8.3).");

// ===================== AXBOROT-KO'RSATGICH BELGILARI =====================
Q("signs", "5.3 «Avtomobillar uchun mo'ljallangan yo'l» belgisi qanday yo'lni bildiradi?",
  ["Avtomobil, avtobus, mototsikl, moped, skuter uchun mo'ljallangan", "Faqat yengil avtomobillar va 3,5 t gacha yuk avtomobillari uchun", "Avtomagistral harakat tartibi o'rnatilgan", "Faqat yo'nalishli transport uchun mo'ljallangan"],
  "5.3 — faqat avtomobillar, avtobus hamda mototsikllar, elektromototsikllar, mopedlar, skuterlar va kichik hajmdagi mototransport harakati uchun mo'ljallangan yo'l (YHQ 1-ilova, 5.3).");
Q("signs", "5.8.1 yoki 5.8.2 belgisi chetki chap tasmadan chapga burilishga ruxsat bersa, shu tasmadan qayrilishga ruxsat bormi?",
  ["Ha, ruxsat beriladi", "Yo'q, qayrilish taqiqlanadi", "Faqat 4.1.3 belgisi bo'lsa", "Faqat svetofor yashil bo'lsa"],
  "Chetki chap bo'lakdan chapga burilishga ruxsat beruvchi 5.8.1 va 5.8.2 belgilari shu tasmadan qayrilishga ham ruxsat beradi (YHQ 1-ilova, 5.8).");
Q("signs", "Chorrahadan oldin o'rnatilgan 5.8.1 belgisining ta'siri (boshqa shu turkum belgilar bo'lmasa) qayergacha tatbiq etiladi?",
  ["Butun chorrahaga", "Faqat chorrahaga kirishgacha", "Keyingi chorrahagacha", "Belgidan 100 metrgacha"],
  "Chorrahadan oldin o'rnatilgan 5.8.1 va 5.8.2 belgilari ta'siri, shu turkumdagi boshqa belgilar bo'lmasa, butun chorrahaga tatbiq etiladi (YHQ 1-ilova, 5.8).");
Q("signs", "5.8.5 «Tasma oxiri» belgisi nimani bildiradi?",
  ["Ko'tarilishdagi qo'shimcha tasma yoki tezlanish tasmasi oxirini", "Uch tasmali yo'lda o'rta tasma qismining oxirini", "Yo'nalishli transport uchun ajratilgan tasmaning oxirini", "Reversiv harakatlanish tasmasining oxirini"],
  "5.8.5 — balandlikka ko'tarilishdagi qo'shimcha tasmaning yoki tezlanish tasmasining oxiri; 5.8.6 — uch tasmali yo'lda o'rta tasmaning oxiri (YHQ 1-ilova, 5.8.5).");
Q("signs", "Yo'lning o'ng tomoniga o'rnatilgan 5.9 «Yo'nalishli transport vositalari uchun mo'ljallangan tasma» belgisi qaysi tasmaga tatbiq etiladi?",
  ["O'ng tasmaga", "Chap tasmaga", "Barcha tasmalarga", "O'rta tasmaga"],
  "Yo'lning o'ng tomoniga o'rnatilgan 5.9 belgisining ta'siri o'ng tasmaga tatbiq etiladi (YHQ 1-ilova, 5.9).");
Q("signs", "5.11.1 «Qayrilib olish joyi» belgisi bo'lgan joyda nima taqiqlanadi?",
  ["Chapga burilish", "Qayrilib olish", "O'ngga burilish", "To'xtash"],
  "5.11.1 «Qayrilib olish joyi» — chapga burilish taqiqlanadi (YHQ 1-ilova, 5.11.1).");
Q("signs", "5.14 belgisi nimani bildiradi?",
  ["Yo'nalishsiz taksilar to'xtab turish joyini", "Avtobus va trolleybus to'xtash joyini", "Pullik to'xtab turish joyini", "Tramvay to'xtash joyini"],
  "5.14 — «Yo'nalishsiz taksilar to'xtab turish joyi» (YHQ 1-ilova, 5.14).");
Q("signs", "5.18 «Tavsiya etilgan tezlik» belgisiga qayergacha amal qilinadi?",
  ["Belgiga eng yaqin chorrahagacha", "Aholi punktining oxirigacha", "3.25 belgisigacha", "Belgidan 1 km masofagacha"],
  "5.18 — tavsiya etilgan tezlik; belgiga eng yaqin chorrahagacha amal qilinadi (YHQ 1-ilova, 5.18).");
Q("signs", "5.18 belgisi ogohlantiruvchi belgi bilan birga qo'llansa, uning ta'sir oralig'i qanday aniqlanadi?",
  ["Xavfli qismning uzunligi bilan", "Eng yaqin chorrahagacha", "Aholi punktining oxirigacha", "7.1.1 belgisidagi masofa bilan"],
  "5.18 belgisi ogohlantiruvchi belgi bilan qo'llansa, ta'sir oralig'i xavfli qismning uzunligi bilan aniqlanadi (YHQ 1-ilova, 5.18).");
Q("signs", "5.20.1 «Yo'nalishlarning dastlabki ko'rsatkichi» belgisining past qismida nima ko'rsatiladi?",
  ["Belgidan chorrahagacha bo'lgan masofa", "Yo'lning raqami va yo'nalishi", "Ruxsat etilgan eng yuqori tezlik", "Keyingi aholi punktigacha bo'lgan masofa"],
  "5.20.1 belgisining past qismida belgi o'rnatilgan joydan chorrahagacha bo'lgan masofa ko'rsatiladi (YHQ 1-ilova, 5.20.1).");
Q("signs", "5.20.1 belgisi yana qanday maqsadda qo'llaniladi?",
  ["3.11 — 3.15 belgilari o'rnatilgan qismni aylanib o'tish yo'nalishini", "Vaqtincha yopilgan yo'lni chetlab o'tish chizmasini ko'rsatish", "Reversiv harakatni tashkil etish uchun", "Murakkab chorrahada taqiqlangan burilishni ko'rsatish"],
  "5.20.1 belgisi 3.11 — 3.15 taqiqlovchi belgilaridan biri o'rnatilgan qismlarni aylanib o'tish yo'nalishini ko'rsatish uchun ham qo'llaniladi (YHQ 1-ilova, 5.20.1).");
Q("signs", "Aholi punktidan tashqarida 5.20.1, 5.21.1 belgilarida obyekt nomi yashil yoki ko'k rangda ko'rsatilgan bo'lsa, bu nimani anglatadi?",
  ["U yerga avtomagistral yoxud boshqa yo'l orqali borish mumkinligini", "Obyekt shu aholi punktining o'zida joylashganini", "Obyekt turizm obyekti yoki turizm axborot markazi ekanini", "U yerga faqat yuk avtomobillari borishi mumkinligini"],
  "Yashil yoki ko'k rang obyektga avtomagistral yoxud boshqa yo'l orqali harakatlanish mumkinligini, oq rang esa obyekt shu aholi punktida joylashganini anglatadi (YHQ 1-ilova, 5-bo'lim).");
Q("signs", "5.22 va 5.24 «Aholi punktining boshlanishi» belgilarining farqi nimada?",
  ["5.22 da aholi punkti talablari amal qiladi, 5.24 da — yo'q", "5.22 da talablar amal qilmaydi, 5.24 da amal qiladi", "5.22 shaharlar uchun, 5.24 esa qishloqlar uchun", "Farqi yo'q, faqat foni rangi boshqacha"],
  "5.22 — aholi punktlarida harakat tartibi talablari amal qiladigan, 5.24 — amal qilinmaydigan joylarning nomi va boshlanishini bildiradi (YHQ 1-ilova, 5.22, 5.24).");
Q("signs", "5.28 «Kilometr belgisi» nimani bildiradi?",
  ["Yo'lning boshi yoki oxirigacha bo'lgan masofani", "Keyingi aholi punktigacha bo'lgan masofani", "Obyektgacha bo'lgan masofani", "Chorrahagacha bo'lgan masofani"],
  "5.28 «Kilometr belgisi» — yo'lning boshi yoki oxirigacha bo'lgan masofani bildiradi (km); 5.27 aholi punktlarigacha masofani ko'rsatadi (YHQ 1-ilova, 5.28).");
Q("signs", "5.33 «To'xtash chizig'i» belgisi nimani bildiradi?",
  ["Taqiqlovchi ishorada transport to'xtaydigan joyni", "To'xtash taqiqlangan joyning boshlanishini", "Avtobus va trolleybus to'xtash joyini", "2.4 «Yo'l bering!» oldidagi to'xtash joyini"],
  "5.33 «To'xtash chizig'i» — svetoforning (tartibga soluvchining) taqiqlovchi ishorasida transport to'xtaydigan joyni bildiradi (YHQ 1-ilova, 5.33).");
Q("signs", "5.35 «Reversiv harakatlanish» belgisi nimani bildiradi?",
  ["Tasmalarda harakat yo'nalishi o'zgarishi mumkin bo'lgan qism boshini", "Bir tomonlama yo'l ikki tomonlama harakatlanishga o'tishini", "Qayrilib olish joyi va qayrilib olish oralig'ini", "Bir tomonlama harakatli yo'lga chiqishni"],
  "5.35 — bir yoki bir necha tasmada harakat yo'nalishi qarama-qarshi tomonga o'zgarishi mumkin bo'lgan yo'l qismining boshlanishi (YHQ 1-ilova, 5.35).");
Q("signs", "5.42 «Qizil chiroqda o'ngga harakatlanish» belgisi bo'lganda qizil chiroqda o'ngga burilayotgan haydovchi nima qilishi shart?",
  ["Piyodalarga va boshqa transport vositalariga yo'l berishi", "Faqat chapdan kelayotgan transportga yo'l berishi", "Avval to'liq to'xtab, so'ng imtiyoz bilan o'tishi", "Faqat tovush ishorasi berib o'tishi"],
  "5.42 bo'lganda xavfsizlik choralarini ko'rib o'ngga burilish mumkin, bunda piyodalarga va boshqa transport vositalariga yo'l berish shart (YHQ 1-ilova, 5.42).");
Q("signs", "5.43 «Radar» belgisi statsionar radar nazoratidagi joydan qanday masofada o'rnatiladi?",
  ["250 metrdan kam va 500 metrdan ko'p bo'lmagan", "50 — 100 metr (aholi punktida), 150 — 300 metr (tashqarida)", "150 — 300 metr", "1 kilometrdan kam bo'lmagan"],
  "5.43 belgisi statsionar radarlar nazoratidagi joylarga kamida 250 metr va 500 metrdan ko'p bo'lmagan masofada o'rnatiladi (YHQ 1-ilova, 5.43, 2026 y. tahriri).");
Q("signs", "5.41 «Foto va video qayd etish» belgisi qayerda o'rnatiladi?",
  ["Statsionar elektron qurilmalar nazorat qiladigan joylarda", "Faqat yo'l-transport hodisasi sodir bo'lgan joylarda", "Faqat avtomagistrallar va avtomobil yo'llari boshida", "Faqat pullik to'xtab turish joylarida"],
  "5.41 belgisi Qoidalar talabiga rioya etilishi statsionar elektron qurilmalar orqali nazoratga olingan joylarga o'rnatiladi (YHQ 1-ilova, 5.41).");
Q("signs", "5.46 «Maktab» belgisi qayerda o'rnatiladi?",
  ["Maktab yoki maktabgacha ta'lim tashkilotlari oldida", "Faqat bolalar dam olish maskanlari oldida", "Maktabdan 150 — 300 metr oldin", "Faqat svetoforli o'tish joylarida"],
  "5.46 «Maktab» — maktab yoki maktabgacha ta'lim tashkilotlari oldida o'rnatiladi (YHQ 1-ilova, 5.46).");
Q("signs", "5.48 «Baland piyodalar o'tish joyi» belgisi qaysi belgilar bilan birga qo'llaniladi?",
  ["5.16.1 — 5.16.2 «Piyodalar o'tish joyi»", "1.31 «Sun'iy yo'l notekisligi»", "5.17.3, 5.17.4 «Piyodalarning yer ustidan o'tish joyi»", "4.6 «Piyodalar yo'lkasi»"],
  "5.48 «Baland piyodalar o'tish joyi» 5.16.1 — 5.16.2 yo'l belgilari bilan birga qo'llaniladi (YHQ 1-ilova, 5.48).");
Q("signs", "5.30.1 — 5.30.3 belgilari kimlar uchun tavsiya etilgan harakat yo'nalishini ko'rsatadi?",
  ["Yuk avtomobillari, traktorlar va o'ziyurar moslamalar uchun", "Xavfli yuk tashiyotgan transport vositalari uchun", "Yo'nalishli transport vositalari uchun", "Velosipedchilar va IHV uchun"],
  "5.30.1 — 5.30.3 — chorrahada yuk avtomobillari, traktorlar va o'ziyurar moslamalarga biror yo'nalish taqiqlangan bo'lsa, ularga tavsiya etilgan yo'nalishlarni ko'rsatadi (YHQ 1-ilova, 5.30).");

// ===================== SERVIS BELGILARI =====================
Q("signs", "6.3.3 servis belgisi nimani bildiradi?",
  ["Elektromobillarni quvvatlash shoxobchasini", "Ko'p tarmoqli yonilg'i quyish shoxobchasini", "Avtomobillarga yonilg'i quyish shoxobchasini", "Elektr quvvatlashli avtomobil qo'yish joyini"],
  "6.3.1 — yonilg'i quyish shoxobchasi, 6.3.2 — ko'p tarmoqli, 6.3.3 — elektromobillarni quvvatlash shoxobchasi (YHQ 1-ilova, 6.3).");

// ===================== QO'SHIMCHA AXBOROT BELGILARI =====================
Q("signs", "7.1.1 «Obyektgacha bo'lgan masofa» belgisi nimani ko'rsatadi?",
  ["Belgidan xavfli joy yoki cheklov boshlanadigan joygacha masofani", "Xavfli joyning yoki cheklov hududining uzunligini", "Yo'lning boshi yoki oxirigacha masofani", "Yo'ldan chetdagi manzilgacha masofani"],
  "7.1.1 — belgidan xavfli joy, cheklov kiritiladigan joy yoki oldindagi muayyan joygacha masofani ko'rsatadi (YHQ 1-ilova, 7.1.1).");
Q("signs", "7.2.1 «Ta'sir oralig'i» belgisi ogohlantiruvchi belgi bilan qo'llansa, nimani ko'rsatadi?",
  ["Xavfli joyning uzunligini", "Xavfli joygacha bo'lgan masofani", "Belgining amal qilish vaqtini", "Xavfli joy qaysi tomonda ekanini"],
  "7.2.1 — ogohlantiruvchi belgilar bilan belgilangan xavfli joyning uzunligini yoki taqiqlovchi va axborot belgilari ta'sir oralig'ini ko'rsatadi (YHQ 1-ilova, 7.2.1).");
Q("signs", "7.2.4 qo'shimcha belgisi nimani bildiradi?",
  ["Haydovchi 3.27 — 3.30 belgilari ta'sir doirasida ekanini", "3.27 — 3.30 belgilari ta'sir oralig'i oxirini", "3.27 — 3.30 belgilari ta'siri saqlangan oraliqni", "Maydon chetida to'xtash taqiqi yo'nalishini"],
  "7.2.4 — haydovchilarga 3.27 — 3.30 belgilari ta'sir doirasida ekanliklari haqida axborot beradi (YHQ 1-ilova, 7.2.4).");
Q("signs", "7.2.3 qo'shimcha belgisi nimani ko'rsatadi?",
  ["3.27 — 3.30 belgilari ta'sir oralig'i oxirini", "3.27 — 3.30 belgilari ta'siri saqlangan oraliqni", "Xavfli joyning uzunligini", "3.20 belgisi ta'siri oxirini"],
  "7.2.2 — ta'sir saqlangan oraliqni, 7.2.3 — 3.27 — 3.30 belgilari ta'sir oralig'i oxirini ko'rsatadi (YHQ 1-ilova, 7.2.3).");
Q("signs", "Yo'l belgisi 7.4.1 qo'shimcha belgisi bilan o'rnatilgan bo'lsa, uning ta'siri kimga tatbiq etiladi?",
  ["To'liq vazni 3,5 t dan ortiq yuk tashuvchi (tirkamali ham) TVga", "Barcha yuk avtomobillariga, vaznidan qat'i nazar", "Faqat tirkamali yengil avtomobillarga", "Faqat avtobuslar va yo'nalishli taksilarga"],
  "7.4.1 bilan o'rnatilgan belgining ta'siri yuk tashuvchi, shu jumladan tirkamali, to'liq vazni 3,5 tonnadan ortiq TVga tatbiq etiladi (YHQ 1-ilova, 7.4).");
Q("signs", "Yo'l belgisi 7.4.3 qo'shimcha belgisi bilan o'rnatilgan bo'lsa, uning ta'siri kimga tatbiq etiladi?",
  ["Yengil avtomobillarga", "Elektromobillarga", "Yo'nalishsiz taksilarga", "Yuk avtomobillariga"],
  "7.4.3 — yengil avtomobillarga, 7.4.9 — elektromobillarga, 7.4.10 — yo'nalishsiz taksilarga tatbiq etiladi (YHQ 1-ilova, 7.4).");
Q("signs", "5.15 belgisi bilan qo'llangan 7.9 qo'shimcha belgisi nimani ko'rsatadi?",
  ["To'xtab turishning eng ko'p muddatini", "To'xtab turish pullik ekanini", "Dvigatelni ishlatmasdan turish shartini", "Joy nogironlar uchun ekanini"],
  "7.9 «To'xtab turish muddati cheklangan» — 5.15 belgisi o'rnatilgan joyda to'xtab turishning eng ko'p muddatini ko'rsatadi (YHQ 1-ilova, 7.9).");
Q("signs", "7.12 «Xavfli yo'l yoqasi» belgisi qaysi belgi bilan qo'llaniladi?",
  ["1.23 «Ta'mirlash ishlari»", "1.15 «Sirpanchiq yo'l»", "1.16 «Notekis yo'l»", "1.30 «Boshqa xavf-xatarlar»"],
  "7.12 — yo'l ishlari sababli yo'l yoqasiga chiqish xavfli ekani haqida ogohlantiradi; 1.23 belgisi bilan qo'llaniladi (YHQ 1-ilova, 7.12).");
Q("signs", "7.15 «Ko'zi ojiz piyodalar» belgisi qaysi belgilar bilan qo'llaniladi?",
  ["1.20, 5.16.1, 5.16.2 belgilari hamda svetofor bilan", "Faqat 1.21 «Bolalar» belgisi bilan", "4.6 «Piyodalar yo'lkasi» belgisi bilan", "5.46 «Maktab» belgisi va 1.14.4 chizig'i bilan"],
  "7.15 — 1.20, 5.16.1, 5.16.2 belgilari hamda svetofor bilan qo'llaniladi; o'tish joyidan ko'zi ojiz piyodalar foydalanishi mumkinligini bildiradi (YHQ 1-ilova, 7.15).");
Q("signs", "7.17 «Nogironlar» qo'shimcha belgisi qaysi belgi bilan qo'llaniladi?",
  ["5.15 «To'xtab turish joyi»", "3.27 «To'xtash taqiqlangan»", "3.28 «To'xtab turish taqiqlangan»", "5.14 «Yo'nalishsiz taksilar to'xtab turish joyi»"],
  "7.17 «Nogironlar» 5.15 belgisi bilan qo'llaniladi; joy «Nogiron» taniqlik belgili TV uchun ajratilganini ko'rsatadi (YHQ 1-ilova, 7.17).");
Q("signs", "7.18 «Nogironlar mustasno» qo'shimcha belgisi nimani bildiradi?",
  ["Belgi ta'siri «Nogiron» belgili TVga joriy etilmasligini", "To'xtab turish joyi nogironlar uchun ajratilganini", "Nogironlar uchun alohida harakat tasmasi borligini", "Nogironlar aravachasi uchun o'tish joyi borligini"],
  "7.18 — belgilarning ta'siri «Nogiron» taniqlik belgisi o'rnatilgan TVga joriy etilmaydi (YHQ 1-ilova, 7.18).");
Q("signs", "7.21 «Evakuator ishlamoqda» qo'shimcha belgisi nimani ko'rsatadi?",
  ["3.27 — 3.30 ta'sir oralig'ida to'xtagan TV evakuatsiya qilinishini", "Yo'lda evakuator transport vositalarini tortib ketayotganini", "Avariyali TV uchun maxsus to'xtash joyi borligini", "Shatakka olish taqiqlanganini"],
  "7.21 — 3.27 — 3.30 belgilari ta'sir oralig'ida to'xtagan TV majburiy evakuatsiya qilinishini ko'rsatadi (YHQ 1-ilova, 7.21).");

// ===================== RASMLI SAVOLLAR: YO'L CHIZIQLARI =====================
Q("markings", "Bu oq yaxlit chiziq (1.1) qatnov qismi o'rtasida bo'lsa, uni bosib o'tish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, quvib o'tishni tugatayotganda", "Ha, chapga burilish uchun", "Ha, agar ro'parada transport bo'lmasa"],
  "1.1 va 1.3 chiziqlarini bosib o'tish taqiqlanadi (qatnov qismi chetini bildiruvchi 1.1 bundan mustasno) (YHQ 2-ilova, 1-bo'lim).", "m_solid");
Q("markings", "Bu chiziq (1.1) vazifalaridan biri qaysi javobda to'g'ri ko'rsatilgan?",
  ["Qarama-qarshi yo'nalishdagi oqimlarni ajratadi", "Tezlanish bo'lagini asosiy bo'lakdan ajratadi", "Chorrahadagi harakatlanish tasmalarini bildiradi", "To'xtab turish taqiqlangan joyni bildiradi"],
  "1.1 — qarama-qarshi yo'nalishdagi oqimlarni ajratadi, xavfli joylarda bo'lak chegarasini, kirish taqiqlangan qism va to'xtab turish joyi chegarasini bildiradi (YHQ 2-ilova, 1.1).", "m_solid");
Q("markings", "Bu oq uzuq chiziq (1.5) qanday vazifani bajaradi?",
  ["2–3 tasmali yo'lda qarama-qarshi oqimlarni yoki tasmalarni ajratadi", "Faqat avtomagistralda qatnov qismi chetini bildiradi", "1.1 yoki 1.11 chizig'iga yaqinlashish haqida ogohlantiradi", "Faqat chorrahadagi harakatlanish tasmalarini bildiradi"],
  "1.5 — ikki yoki uch tasmali yo'llarda qarama-qarshi oqimlarni ajratadi; bir yo'nalishdagi tasmalar chegarasini bildiradi (YHQ 2-ilova, 1.5).", "m_dashed");
Q("markings", "Bu kabi oq uzuq chiziqlarni (1.5 — 1.8) qaysi tomondan bosib o'tish mumkin?",
  ["Istalgan tomondan", "Faqat chap tomondan", "Faqat o'ng tomondan", "Faqat quvib o'tishni tugatayotganda"],
  "1.2, 1.5 — 1.8 chiziqlarini istalgan tomondan bosib o'tish mumkin (YHQ 2-ilova, 1-bo'lim).", "m_dashed");
Q("markings", "Yaxlit va uzuq chiziq yonma-yon (1.11). Uzuq chiziq sizning tomoningizda bo'lsa, uni bosib o'tish mumkinmi?",
  ["Ha, mumkin", "Yo'q, taqiqlanadi", "Faqat quvib o'tishni tugatayotganda", "Faqat yo'nalishli transportga mumkin"],
  "1.11 chizig'ini uzuq chiziq tomonidan bosib o'tishga ruxsat etiladi (YHQ 2-ilova, 1-bo'lim).", "m_combo");
Q("markings", "1.11 chizig'ini yaxlit chiziq tomonidan qachon bosib o'tish mumkin?",
  ["Faqat quvib yoki aylanib o'tishni tugatayotganda", "Chapga burilish yoki qayrilib olish uchun", "Yo'l yoqasida to'xtash uchun", "Hech qanday holatda bosib o'tilmaydi"],
  "1.11 chizig'ini sidirg'a chiziq tomonidan faqat quvib yoki aylanib o'tishni tugatayotganda bosib o'tishga ruxsat etiladi (YHQ 2-ilova, 1-bo'lim).", "m_combo");
Q("markings", "Qatnov qismi chetidagi bu sariq yaxlit chiziq (1.4) nimani bildiradi?",
  ["To'xtash taqiqlangan joyni", "To'xtab turish taqiqlangan joyni", "Yo'nalishli transport bekatini", "Qatnov qismi chetini"],
  "1.4 — to'xtash taqiqlangan joyni bildiradi; yakka holda yoki 3.27 belgisi bilan qo'llaniladi (YHQ 2-ilova, 1.4).", "m_yellow_solid");
Q("markings", "Bu chiziq (1.4) qayerga chiziladi?",
  ["Qatnov qismi chetiga yoki yo'l chetidagi to'siq ustiga", "Faqat bordyurning yon yuzasiga, tik chiziq sifatida", "Faqat qatnov qismi o'rtasiga", "Faqat trotuar ustiga"],
  "1.4 yo'lning qatnov qismi chetiga yoki yo'l chetidagi to'siq ustidan chiziladi (YHQ 2-ilova, 1.4).", "m_yellow_solid");
Q("markings", "Qatnov qismi chetidagi bu sariq uzuq chiziq (1.10) nimani bildiradi?",
  ["To'xtab turish taqiqlangan joyni", "To'xtash taqiqlangan joyni", "Yo'nalishli transport bekatini", "Taksilar to'xtab turish joyini"],
  "1.10 — to'xtab turish taqiqlangan joyni bildiradi; yakka holda yoki 3.28 belgisi bilan qo'llaniladi (YHQ 2-ilova, 1.10).", "m_yellow_dashed");
Q("markings", "Bu chiziq (1.10) qaysi belgi bilan birga qo'llaniladi?",
  ["3.28 «To'xtab turish taqiqlangan»", "3.27 «To'xtash taqiqlangan»", "3.29 «Oyning toq kunlarida to'xtab turish taqiqlangan»", "5.15 «To'xtab turish joyi»"],
  "1.10 chizig'i yakka holda yoki 3.28 belgisi bilan qo'llaniladi (YHQ 2-ilova, 1.10).", "m_yellow_dashed");

// ===================== YOTIQ CHIZIQLAR: MATN SAVOLLAR =====================
Q("markings", "Yotiq yo'l chiziqlaridan qaysilari sariq rangda bo'ladi?",
  ["1.4, 1.10 va 1.17", "1.1, 1.4 va 1.10", "1.4, 1.12 va 1.17", "1.9, 1.10 va 1.23"],
  "Yotiq chiziqlar oq rangda bo'ladi, 1.4, 1.10 va 1.17 chiziqlar sariq rangda bo'ladi (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "1.24 chizig'i qanday ko'rinishda bo'ladi?",
  ["2x2 metrli ko'k asosda sariq rangli shaxs tasviri", "Oq asosda ko'k rangli nogironlar aravachasi tasviri", "Sariq asosda qora rangli piyoda tasviri", "1x1 metrli oq asosda qizil «P» harfi"],
  "1.24 — 2x2 metr o'lchamdagi ko'k asosda sariq rangda nogironligi bo'lgan shaxsning tasviri tushirilgan bo'ladi (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "Qor yoki loy sabab yo'l chiziqlari ko'rinmasa, nima qilinishi kerak?",
  ["Chiziqlar ma'nosiga mos yo'l belgilari o'rnatilishi kerak", "Chiziqlar talablari bekor bo'ladi", "Haydovchilar avvalgi chiziqlar joylashuvini taxmin qiladi", "Faqat svetofor o'rnatiladi"],
  "Yo'l chiziqlarini ko'rish imkoniyati bo'lmasa, shu qismda chiziqlar ma'nosiga mos keladigan yo'l belgilari o'rnatilishi kerak (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "Vaqtincha va doimiy yo'l chiziqlari ma'nosi zid kelsa, haydovchi nimaga amal qiladi?",
  ["Vaqtincha yo'l chiziqlariga", "Doimiy yo'l chiziqlariga", "Ikkalasidan ham qat'iyrog'iga", "Faqat oq rangli chiziqlarga"],
  "Vaqtincha va doimiy yo'l chiziqlari zid kelsa, haydovchilar vaqtincha yo'l chiziqlariga amal qilishi kerak (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "Qaysi holatda 1.1 chizig'ini bosib o'tish taqiqlanmaydi?",
  ["U qatnov qismining chetini bildirish uchun qo'llanilgan bo'lsa", "U to'xtab turish joyi chegarasini bildirgan bo'lsa", "U qarama-qarshi oqimlarni ajratgan bo'lsa", "U kirish taqiqlangan qism chegarasini bildirsa"],
  "1.1 va 1.3 chiziqlarini bosib o'tish taqiqlanadi, qatnov qismining chetini bildirish uchun qo'llanilgan 1.1 chizig'i bundan mustasno (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "1.2 chizig'i (enli sidirg'a chiziq) nimani bildiradi?",
  ["Avtomagistrallarda qatnov qismi chetini", "Tezlanish bo'lagi chegarasini", "Qarama-qarshi oqimlarni ajratishni", "To'xtash chizig'ini"],
  "1.2 (enli sidirg'a chiziq) — avtomagistrallarda qatnov qismi chetini bildiradi (YHQ 2-ilova, 1.2).");
Q("markings", "1.3 chizig'i qayerda qo'llaniladi?",
  ["4 va undan ortiq bo'lakli yo'lda qarama-qarshi oqimlarni ajratishda", "Ikki yoki uch tasmali yo'llarda qarama-qarshi oqimlarni ajratishda", "Reversiv bo'laklar chegarasini belgilashda", "Avtomagistral qatnov qismi chetini belgilashda"],
  "1.3 — to'rt va undan ortiq harakatlanish bo'lagi bo'lgan yo'llarda qarama-qarshi yo'nalishdagi oqimlarni ajratadi (YHQ 2-ilova, 1.3).");
Q("markings", "1.6 chizig'i (yaqinlashish chizig'i) qanday ko'rinishda bo'ladi?",
  ["Har bir chizig'i oraliqdan uch barobar uzun uzuq chiziq", "Chiziqlari va oraliqlari teng qisqa uzuq chiziq", "Enli uzuq chiziq", "Yaxlit va uzuq chiziq yonma-yon"],
  "1.6 — har bir chiziq uzunligi ular orasidagi masofadan uch barobar katta bo'lgan uzuq-uzuq chiziq (YHQ 2-ilova, 1.6).");
Q("markings", "1.6 chizig'i nima haqida ogohlantiradi?",
  ["1.1 yoki 1.11 chizig'iga yaqinlashish haqida", "To'xtash chizig'i (1.12) ga yaqinlashish haqida", "Piyodalar o'tish joyiga yaqinlashish haqida", "Qatnov qismi torayishi haqida"],
  "1.6 — qarama-qarshi yoki bir yo'nalishdagi oqimlarni ajratuvchi 1.1 yoki 1.11 chizig'iga yaqinlashayotganlik haqida ogohlantiradi (YHQ 2-ilova, 1.6).");
Q("markings", "1.8 chizig'i (enli uzuq chiziq) nimani bildiradi?",
  ["Tezlanish yoki sekinlashish bo'lagi chegarasini", "Avtomagistralda qatnov qismi chetini", "Chorrahadagi harakatlanish tasmalarini", "Velosiped bo'lagi chegarasini"],
  "1.8 (enli uzuq-uzuq chiziq) — tezlashish yoki sekinlashish bo'lagi bilan asosiy bo'lak orasidagi chegarani bildiradi (YHQ 2-ilova, 1.8).");
Q("markings", "1.9 chizig'i nimani belgilaydi?",
  ["Reversiv harakat tashkil etilgan bo'laklar chegarasini", "Yo'nalishli transport uchun ajratilgan bo'lakni", "Tezlanish bo'lagi bilan asosiy bo'lak chegarasini", "Qayrilib olish joyi chegarasini"],
  "1.9 — reversiv harakat tashkil etilgan bo'laklarning chegarasini belgilaydi (YHQ 2-ilova, 1.9).");
Q("markings", "Reversiv svetoforlar bo'lmasa yoki o'chirilgan bo'lsa, 1.9 chizig'ini qachon bosib o'tishga ruxsat etiladi?",
  ["Faqat u haydovchining o'ng tomonida bo'lsa", "Faqat u haydovchining chap tomonida bo'lsa", "Istalgan tomondan", "Hech qachon bosib o'tilmaydi"],
  "Reversiv svetoforlar bo'lmaganda yoki o'chirilganda 1.9 chizig'ini faqat u haydovchining o'ng tomonida bo'lsa bosib o'tishga ruxsat etiladi (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "Reversiv svetofor o'chirilganda 1.9 chizig'i bilan ajratilgan bo'lakdagi haydovchi nima qilishi kerak?",
  ["Darhol 1.9 chizig'idan o'ngga qayta tizilishi", "Bo'lak oxirigacha harakatni davom ettirishi", "To'xtab, svetofor yonishini kutishi", "Chapdagi bo'lakka o'tishi"],
  "Reversiv svetofor o'chirilganda haydovchilar darhol 1.9 chizig'idan o'ngga qayta tizilishlari kerak (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "Reversiv svetofor yoqilgan paytda bir yo'nalishli tasmalarni ajratayotgan 1.9 chizig'ini bosib o'tish mumkinmi?",
  ["Ha, istalgan tomondan", "Faqat o'ng tomondan", "Faqat chap tomondan", "Yo'q, taqiqlanadi"],
  "Reversiv svetofor yoqilgan paytda bir yo'nalishli tasmalarni ajratayotgan 1.9 chizig'ini istalgan tomondan bosib o'tishga ruxsat etiladi (YHQ 2-ilova, 1-bo'lim).");
Q("markings", "1.11 chizig'i qayrilib olish yoki to'xtash maydonchalariga kirish-chiqish joylarida nimani ko'rsatadi?",
  ["Harakat faqat bir yo'nalishda ruxsat etilganini", "To'xtash va to'xtab turish taqiqlanganini", "Harakat ikki tomonlama ekanini", "Yo'nalishli transport bo'lagini"],
  "1.11 — qayrilib olish, to'xtash maydonchalari va shunga o'xshashlarga kirish-chiqish joylarida harakat faqat bir yo'nalishda ruxsat etilganini ko'rsatadi (YHQ 2-ilova, 1.11).");
Q("markings", "1.12 chizig'i (to'xtash chizig'i) nimani ko'rsatadi?",
  ["2.5 belgisi yoki taqiqlovchi ishorada to'xtash joyini", "Yo'l berish uchun zarur bo'lganda to'xtash joyini", "To'xtash taqiqlangan joyning boshlanishini", "Yo'nalishli transport bekatini"],
  "1.12 — 2.5 belgisi yoki svetoforning (tartibga soluvchining) taqiqlovchi ishorasida haydovchi to'xtashi kerak bo'lgan joyni ko'rsatadi (YHQ 2-ilova, 1.12).");
Q("markings", "1.13 chizig'i nimani ko'rsatadi?",
  ["Yo'l berish uchun zarur bo'lganda to'xtash joyini", "Svetoforning taqiqlovchi ishorasida to'xtash joyini", "Piyodalar o'tish joyining chegarasini", "To'xtab turish taqiqlangan joyni"],
  "1.13 — kesishayotgan yo'ldagi transportga yo'l berish uchun to'xtash zarur bo'lganda to'xtash joyini ko'rsatadi (YHQ 2-ilova, 1.13).");
Q("markings", "1.21 chizig'i («STOP» yozuvi) 2.5 belgisi bilan qo'llanganda nima haqida ogohlantiradi?",
  ["1.12 chizig'iga yaqinlashish haqida", "1.13 chizig'iga yaqinlashish haqida", "Temir yo'l kesishmasi haqida", "Piyodalar o'tish joyi haqida"],
  "1.21 («STOP» yozuvi) — 2.5 belgisi bilan qo'llanganda haydovchini 1.12 chizig'iga yaqinlashayotgani haqida ogohlantiradi (YHQ 2-ilova, 1.21).");
Q("markings", "1.14.2 chizig'i qanday ko'rinishda bo'ladi?",
  ["Oq-sariq rangli «zebra»", "Oq rangli «zebra»", "Oq-qizil rangli «zebra»", "Ko'k-oq rangli «zebra»"],
  "1.14.1 — oq rangli, 1.14.2 — oq-sariq rangli «zebra» (YHQ 2-ilova, 1.14).");
Q("markings", "Oq-qizil rangli 1.14.4 yo'l chizig'i qayerda piyodalar o'tish joyini belgilaydi?",
  ["Maktab va maktabgacha ta'lim muassasalari oldida", "Shifoxonalar va poliklinikalar oldida", "Temir yo'l vokzallari oldida", "Faqat svetoforli chorrahalarda"],
  "1.14.4 — oq-qizil rangli chiziq maktab va maktabgacha ta'lim muassasalari oldida piyodalar o'tish joyini belgilaydi (YHQ 2-ilova, 1.14.4).");
Q("markings", "Sariq rangdagi 1.17 chizig'i nimani bildiradi?",
  ["Yo'nalishli transport bekatlari va taksilar to'xtab turish joyini", "To'xtash taqiqlangan joyni (qatnov qismi chetida)", "To'xtab turish taqiqlangan joyni (qatnov qismi chetida)", "Nogironlar uchun to'xtab turish joyini"],
  "1.17 — yo'nalishli transport vositalarining bekatlari hamda taksilarning to'xtab turish joylarini bildiradi (YHQ 2-ilova, 1.17).");
Q("markings", "1.18 chizig'idagi chetki chap tasmadan chapga burilishga ruxsat beruvchi yo'naltirgich qayrilishga ruxsat beradimi?",
  ["Ha, shu tasmadan qayrilishga ham ruxsat beradi", "Yo'q, faqat chapga burilishga ruxsat beradi", "Faqat 5.11.1 belgisi ham bo'lsa ruxsat beradi", "Faqat aholi punktidan tashqarida ruxsat beradi"],
  "1.18 — chetki chap tasmadan chapga burilishga ruxsat beruvchi yo'naltirgich shu tasmadan qayrilishga ham ruxsat beradi (YHQ 2-ilova, 1.18).");
Q("markings", "1.18 chizig'ida oxiri berk yo'l tasviri nima uchun chiziladi?",
  ["Shu yo'nalishdagi yon qatnov qismiga burilish taqiqlanganini", "Oldinda berk ko'cha borligini ko'rsatish uchun", "Tasma tugashini va qayta tizilish zarurligini", "To'xtash taqiqlanganini ko'rsatish uchun"],
  "Oxiri berk yo'l tasvirlangan 1.18 chizig'i shu yo'nalishdagi yon tomonda joylashgan qatnov qismiga burilish taqiqlanganini ko'rsatish uchun chiziladi (YHQ 2-ilova, 1.18).");
Q("markings", "1.19 chizig'i nima haqida ogohlantiradi?",
  ["Qatnov qismi torayishi yoki 1.1/1.11 chizig'iga yaqinlashish", "1.13 chizig'iga (yo'l berish joyiga) yaqinlashish haqida", "Piyodalar o'tish joyiga yoki 1.14.x chizig'iga yaqinlashish", "Sun'iy notekislikka yaqinlashish haqida"],
  "1.19 — qatnov qismining toraygan joyiga yoki qarama-qarshi oqimlarni ajratuvchi 1.1 yoki 1.11 chizig'iga yaqinlashish haqida ogohlantiradi (YHQ 2-ilova, 1.19).");
Q("markings", "1.25 va 1.26 chiziqlari nimani bildiradi?",
  ["1.25 — piyodalar yo'lkasi (qismi), 1.26 — velosiped yo'lkasi yoki tasmasi", "1.25 — velosiped yo'lkasi, 1.26 — piyodalar yo'lkasi", "1.25 — piyodalar o'tish joyi, 1.26 — velosiped yo'lkasi kesishuvi", "1.25 — yo'nalishli transport bo'lagi, 1.26 — taksi bekati"],
  "1.25 — piyodalar yo'lkasi yoki birgalikdagi yo'lkaning piyodalar qismi, 1.26 — velosiped yo'lkasi yoki velosiped tasmasi (YHQ 2-ilova, 1.25, 1.26).");
Q("markings", "1.27 va 1.28 chiziqlari nimani takrorlaydi?",
  ["1.27 — ogohlantiruvchi, 1.28 — taqiqlovchi yo'l belgilarini", "1.27 — taqiqlovchi, 1.28 — ogohlantiruvchi belgilarini", "1.27 — buyuruvchi, 1.28 — axborot belgilarini", "1.27 — imtiyoz, 1.28 — servis belgilarini"],
  "1.27 — ogohlantiruvchi yo'l belgilarini, 1.28 — taqiqlovchi yo'l belgilarini takrorlovchi chiziq (YHQ 2-ilova, 1.27, 1.28).");
Q("markings", "1.31 «Shovqin chiziqlari» nima maqsadda va qanday chiziladi?",
  ["Haydovchi hushyorligini oshirish uchun termoplast yordamida", "Tezlikni majburiy kamaytirish uchun beton bo'rtiq ko'rinishida", "Maktab hududini belgilash uchun oq-qizil bo'yoq bilan", "Tirbandlik hududini belgilash uchun sariq bo'yoq bilan"],
  "1.31 — xavfli burilishlarda va o'tish joylariga yaqinlashuvda haydovchilar hushyorligini oshirish maqsadida termoplast yordamida chiziladigan «Shovqin chiziqlari» (YHQ 2-ilova, 1.31).");

// ===================== TIK CHIZIQLAR =====================
Q("markings", "Tik chiziqlar qanday vazifani bajaradi?",
  ["Inshootlar o'lchamini ko'rsatib, ko'z bilan chamalashga xizmat qiladi", "Qatnov qismida harakat tasmalari va ularning yo'nalishini ajratadi", "To'xtash va to'xtab turish taqiqlarini bildiradi", "Piyodalar o'tish joyini belgilaydi"],
  "Tik chiziqlar yo'l inshootlari va jihozlari yuzalariga chizilgan oq-qora (sariq-qora, qizil-oq) chiziqlar bo'lib, ko'z bilan chamalash vositasi sifatida xizmat qiladi (YHQ 2-ilova, 2-bo'lim).");
Q("markings", "2.2 tik chizig'i nimani bildiradi?",
  ["Tunnel, ko'prik, yo'l o'tkazgich va estakadalarning pastki peshtoqini", "Ko'prik va estakadalarning tik elementlarini (ustunlarini)", "Ajratish mintaqalaridagi dumaloq ustunlarni", "Xavfli joylardagi bordyurni"],
  "2.1 — inshootlarning tik elementlarini, 2.2 — tunnellar, ko'priklar, yo'l o'tkazgich va estakadalarning pastki peshtoqini bildiradi (YHQ 2-ilova, 2.2).");
Q("markings", "2.5 tik chizig'i qayerdagi yo'l to'siqlarining yon yuzalarini bildiradi?",
  ["Kichik radiusli burilish, tik nishablik kabi xavfli joylardagi", "Boshqa (xavfli hisoblanmaydigan) yo'l qismlaridagi", "Faqat ko'priklar va yo'l o'tkazgichlardagi", "Faqat tunnellarga kirishdagi"],
  "2.5 — kichik radiusli burilish, tik nishablik va boshqa xavfli joylardagi to'siqlarning yon yuzalarini; 2.6 — boshqa joylardagi to'siqlarni bildiradi (YHQ 2-ilova, 2.5).");
