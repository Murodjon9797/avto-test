// q/cat_a.js — «A» toifasi: mototsikl va elektromototsikl haydovchilari uchun savollar
// (A1 — moped, skuter va kichik hajmdagi mototransportga oid qoidalar ham qisman kiritilgan)

// ===================== Toifalar va atamalar (6, 8-band) =====================
QC(["A"], "catA", "Amaldagi tahrirdagi YHQ bo'yicha elektromototsiklni boshqarish uchun qaysi toifadagi guvohnoma kerak?",
  ["«A» toifasi", "«A1» toifasi", "«B» toifasi", "«A1» yoki «B» toifasi"],
  "8-bandga ko'ra «A» toifasi mototsikllar va elektromototsikllarni o'z ichiga oladi (YHQ 8-band).");
QC(["A"], "catA", "Yon tirkamali (kajavali) mototsikl qaysi toifaga kiradi?",
  ["«A» toifasiga", "«B» toifasiga", "«A1» toifasiga", "«BE» toifasiga"],
  "Mototsikl ta'rifi yon tirkamasiz yoki yon tirkamali (kajavali) vositalarni qamraydi, mototsikllar esa «A» toifasiga kiradi (YHQ 8-band).");
QC(["A"], "catA", "Dvigatel ish hajmi 49 sm3, konstruktiv tezligi 45 km/soat bo'lgan ikki g'ildirakli vosita YHQ bo'yicha nima hisoblanadi?",
  ["Moped", "Mototsikl", "Skuter", "Elektromototsikl"],
  "Moped — dvigatel ish hajmi 25 sm3 dan 50 sm3 gacha, konstruktiv tezligi 25–50 km/soat bo'lgan vosita (YHQ 6-band).");
QC(["A"], "catA", "Elektrodvigatel quvvati 5 kVt, konstruktiv tezligi 90 km/soat bo'lgan ikki g'ildirakli vosita qanday ataladi?",
  ["Elektromototsikl", "Skuter", "Moped", "Individual harakatlanish vositasi"],
  "Elektromototsikl — elektrodvigatel quvvati 4 kVt va undan ortiq, konstruktiv tezligi 50 km/soat va undan ortiq vosita (YHQ 6-band).");
QC(["A"], "catA", "Elektrodvigatel quvvati 2 kVt, konstruktiv tezligi 45 km/soat bo'lgan ikki g'ildirakli vosita qanday ataladi?",
  ["Skuter", "Elektromototsikl", "Mototsikl", "Kichik hajmdagi mototransport"],
  "Skuter — elektrodvigatel quvvati 0,25 kVt dan 4 kVt gacha, konstruktiv tezligi 25 km/soatdan ortiq, 50 km/soatdan oshmaydigan vosita (YHQ 6-band).");
QC(["A"], "catA", "«A1» toifasidagi kichik hajmdagi mototransport vositasining eng yuqori konstruktiv tezligi qanchadan oshmasligi kerak?",
  ["25 km/soat", "40 km/soat", "50 km/soat", "20 km/soat"],
  "«A1» ta'rifiga ko'ra kichik hajmdagi mototransport vositasining eng yuqori konstruktiv tezligi 25 km/soatdan oshmaydi (YHQ 8-band).");
QC(["A"], "catA", "Kichik hajmdagi mototransport vositasining ichki yonuv dvigateli ish hajmi qancha bo'ladi («A1» ta'rifi bo'yicha)?",
  ["25 sm3 gacha", "50 sm3 gacha", "125 sm3 gacha", "10 sm3 gacha"],
  "«A1» — ish hajmi 25 sm3 gacha bo'lgan ichki yonuv dvigateli yoki 0,25 kVt gacha quvvatli kichik mototransport vositalarini ham qamraydi (YHQ 8-band).");
QC(["A"], "catA", "Elektrosamokat kabi individual harakatlanish vositalari «A1» toifasiga kiradimi?",
  ["Yo'q, ular «A1» ta'rifidan istisno qilingan","Ha, quvvatidan qat'i nazar «A1» ga kiradi","Ha, agar tezligi 25 km/soatdan oshsa kiradi","Yo'q, ular «A» toifasiga kiritilgan"],
  "«A1» ta'rifida individual harakatlanish vositalari alohida istisno sifatida ko'rsatilgan (YHQ 8-band).");
QC(["A"], "catA", "Moped tavsifiga ega kvadritsikl (kvadrotsikl) YHQ bo'yicha nimaga tenglashtiriladi?",
  ["Mopedga", "Mototsiklga", "Yengil avtomobilga", "Traktorga"],
  "Moped tavsiflariga ega kvadritsikl, tritsikl va shunga o'xshash vositalar mopedlarga tenglashtiriladi (YHQ 6-band).");
QC(["A"], "catA", "Uch g'ildirakli, dvigatel hajmi 600 sm3 bo'lgan vosita mototsikl hisoblanadimi?",
  ["Ha, mototsikl uch (to'rt) g'ildirakli ham bo'ladi","Yo'q, mototsikl faqat ikki g'ildirakli bo'ladi","Yo'q, u yengil avtomobil toifasiga kiradi","Faqat kajavasi bo'lsa mototsikl hisoblanadi"],
  "Mototsikl ta'rifi ikki yoxud uch (to'rt) g'ildirakli, kajavali yoki kajavasiz vositalarni qamraydi (YHQ 6-band).");

// ===================== Yosh talablari (149, 165-band) =====================
QC(["A"], "catA", "17 yoshli o'rganuvchi o'quv muddati yakunida quyidagi toifalardan qaysi biriga guvohnoma olishi mumkin?",
  ["«A»", "«B»", "«C»", "«BE»"],
  "«A» toifasi uchun 16 yosh, «B» va «C» uchun 18 yosh, «BE» uchun 19 yosh talab qilinadi (YHQ 149-band).");
QC(["A"], "catA", "15 yoshli o'smir yo'lda quyidagilardan qaysi birini boshqarishi mumkin?",
  ["Velosipedni", "Mopedni", "Skuterni", "Mototsiklni"],
  "Velosiped 14 yoshdan, moped, skuter va kichik hajmdagi mototransport 16 yoshdan boshqarilishi mumkin (YHQ 165-band).");
QC(["A"], "catA", "Kichik hajmdagi mototransport vositasini yo'lda boshqarishga necha yoshdan ruxsat etiladi?",
  ["16 yoshdan", "14 yoshdan", "18 yoshdan", "12 yoshdan"],
  "Moped, skuter va kichik hajmdagi mototransport vositalarini boshqarish 16 yoshdan kichik bo'lmagan shaxslarga ruxsat etiladi (YHQ 165-band).");

// ===================== Motoshlem, yo'lovchi majburiyatlari (9, 11, 12, 23, 24-band) =====================
QC(["A"], "catA", "Mototsiklchi uchun YHQda qanday bosh kiyimi talab qilinadi?",
  ["Maxsus motoshlem, qadalgan holda","Istalgan velosiped shlemi, qadalgan holda","Qurilish kaskasi yoki boshqa qattiq bosh kiyim","Motoshlem, qadash esa ixtiyoriy"],
  "Mototsikl va elektromototsiklda haydovchi va yo'lovchilar maxsus motoshlem kiyishlari va uni qadab olishlari shart (YHQ 9-band).");
QC(["A"], "catA", "Siz mototsiklda yo'lga chiqmoqchisiz. Yo'lovchingiz shlemni kiydi, lekin tasmasini qadamadi. Nima qilasiz?",
  ["Shlem qadalmaguncha harakatni boshlamayman", "Yo'lda ketayotib qadab olishini aytaman", "Sekin yursam, qadamasa ham bo'ladi", "Faqat trassaga chiqqanda qadashini so'rayman"],
  "Yo'lovchi harakatdan oldin motoshlemni qadab olishi shart, haydovchi esa buni ogohlantirishi kerak (YHQ 23-band).");
QC(["A"], "catA", "Yo'lovchilarni motoshlem kiyish va qadash zarurligi haqida ogohlantirish kimning majburiyati?",
  ["Mototsikl haydovchisining", "Yo'lovchining o'zining", "IIO xodimining", "Transport vositasi egasining"],
  "Haydovchi yo'lovchilarni mototsiklda motoshlem kiyish va qadab olish zarurligi haqida ogohlantirishga majbur (YHQ 11-band).");
QC(["A"], "catA", "Elektromototsiklda motoshlem talabi qanday?",
  ["Haydovchi ham, yo'lovchi ham kiyib qadaydi","Elektr vositalarga bu talab qo'yilmaydi","Faqat 50 km/soatdan tez yurganda kiyiladi","Faqat haydovchi uchun majburiy hisoblanadi"],
  "9-band motoshlem talabini mototsikl bilan bir qatorda elektromototsiklga ham tatbiq etadi (YHQ 9-band).");
QC(["A"], "catA", "Mototsikl yo'lovchisiga harakatlanish vaqtida nima taqiqlanadi?",
  ["Haydovchini boshqarishdan chalg'itish", "Oyoqlarini tiragichga qo'yib o'tirish", "Ko'ndalang tutqichni ushlab o'tirish", "Haydovchi bilan birga burilishga egilish"],
  "Yo'lovchilarga harakatlanish vaqtida haydovchini boshqarishdan chalg'itish (unga xalaqit berish) taqiqlanadi (YHQ 24-band).");
QC(["A"], "catA", "Yo'lovchi mototsiklga qachon va qaysi tomondan chiqishi kerak?",
  ["To'liq to'xtagach, trotuar yoki yo'l yoqasi tomondan","Sekin harakatlanayotganda, istalgan tomondan","To'liq to'xtagach, faqat qatnov qismi tomondan","Dvigatel o'chirilgandan keyin, faqat chap tomondan"],
  "Yo'lovchilar transport vositasiga faqat u to'liq to'xtagandan so'ng trotuar yoki yo'l yoqasi tomondan chiqishi kerak (YHQ 23-band).");
QC(["A"], "catA", "Mototsikl haydovchisi harakatlanish vaqtida telefondan qanday foydalanishi mumkin?",
  ["Quloqchin orqali, qo'llarni ishlatmasdan","Qo'lda ushlab, qisqa vaqt gaplashib","Svetoforda turganda qo'lda ushlab","Faqat ovozli xabar yozish uchun qo'lda"],
  "Haydovchiga boshqarish paytida telefondan foydalanish taqiqlanadi, quloqchin orqali qo'llarni ishlatmasdan so'zlashish bundan mustasno (YHQ 12-band).");
QC(["A"], "catA", "Aholi punktida mototsiklni dvigatel shovqini belgilangan me'yordan baland qilib boshqarish:",
  ["Taqiqlanadi", "Kunduzi ruxsat etiladi", "Sport mototsikllariga ruxsat etiladi", "Bo'sh ko'chalarda ruxsat etiladi"],
  "Aholi punktlarida dvigatel shovqinini belgilangan me'yordan baland qilib foydalanish haydovchiga taqiqlanadi (YHQ 12-band).");
QC(["A"], "catA", "Siz mototsiklda ketyapsiz, oldinda transport vositalarining tashkiliy jamlanmasi (kolonna) harakatlanmoqda. Ular orasiga kirib olish:",
  ["Taqiqlanadi", "Mototsikl ixcham bo'lgani uchun mumkin", "Yaqinni yorituvchi fara yoqilsa mumkin", "Faqat aholi punktidan tashqarida mumkin"],
  "Haydovchiga transport vositalarining tashkiliy jamlanmasi harakatiga xalaqit berish va ular orasiga kirish taqiqlanadi (YHQ 12-band).");
QC(["A"], "catA", "Qorong'ida majburiy to'xtagan haydovchining nur qaytargichli jilet kiyish majburiyati (11-band) qaysi haydovchilar uchun belgilangan?",
  ["Yengil va yuk avtomobili, avtobus, traktor","Faqat mototsikl va moped haydovchilari","Barcha haydovchilar, shu jumladan mototsiklchilar","Faqat avtobus va yuk avtomobili haydovchilari"],
  "11-band «e» kichik bandida bu talab yengil va yuk avtomobili, avtobus va g'ildirakli traktor haydovchilari uchun ko'rsatilgan (YHQ 11-band).");

// ===================== Yo'lovchi tashish (159-band) =====================
QC(["A"], "catA", "Siz mototsiklda 10 yoshli jiyaningizni orqa o'rindiqda olib ketmoqchisiz. U motoshlem kiygan. Bu:",
  ["Taqiqlanadi — 12 yoshga to'lmagan","Ruxsat — bola shlem kiygani uchun","Ruxsat — aholi punkti ichida bo'lsa","Ruxsat — tezlik 40 km/soatdan kam bo'lsa"],
  "12 yoshga to'lmagan bolalarni mototsikl va elektromototsiklning orqa o'rindig'ida tashish taqiqlangan (YHQ 159-band).");
QC(["A"], "catA", "13 yoshli o'smirni mototsikl orqa o'rindig'ida (yo'lovchi joyi bor, shlem qadalgan) tashish:",
  ["Ruxsat etiladi", "Taqiqlanadi — 14 yoshgacha", "Taqiqlanadi — 16 yoshgacha", "Faqat kajava bo'lsa mumkin"],
  "Taqiq faqat 12 yoshga to'lmagan bolalarga tegishli; konstruksiyada ko'zda tutilgan joyda, motoshlem bilan tashish mumkin (YHQ 159-band).");
QC(["A"], "catA", "Skuterning orqa o'rindig'ida 11 yoshli bolani tashish:",
  ["Taqiqlanadi", "Kattalar ushlab tursa mumkin", "Tezlik 25 km/soatdan kam bo'lsa mumkin", "Bola shlem kiysa mumkin"],
  "159-band 12 yoshga to'lmagan bolalarni moped, skuter va kichik hajmdagi mototransport orqa o'rindig'ida tashishni ham taqiqlaydi (YHQ 159-band).");
QC(["A"], "catA", "Texnik tavsifnomasida bitta yo'lovchi joyi ko'zda tutilgan mototsiklda ikki yo'lovchi tashish:",
  ["Taqiqlanadi", "Yo'lovchilar bola bo'lsa mumkin", "Qisqa masofada mumkin", "Ikkalasi shlem kiysa mumkin"],
  "Odam soni texnik tavsifnomada ko'zda tutilgan miqdordan ortiq bo'lganda tashish taqiqlanadi (YHQ 159-band).");
QC(["A"], "catA", "Elektromototsiklning yukxonasida (bagaj qutisida) odam tashish:",
  ["Taqiqlanadi", "Bola bo'lsa ruxsat etiladi", "Shlem kiyilsa ruxsat etiladi", "Aholi punktida ruxsat etiladi"],
  "Yuk mototsikllari, elektromototsikllar, mopedlar va skuterlarning yukxonasida odam tashish taqiqlangan (YHQ 159-band).");
QC(["A"], "catA", "Mototsiklda yo'lovchini yoqilg'i bakining ustida, haydovchi oldida o'tqazib tashish:",
  ["Taqiqlanadi — bu ko'zda tutilgan joy emas","Bola bo'lsa ruxsat etiladi, kattaga emas","Ikkalasi shlem kiysa ruxsat etiladi","Aholi punktida sekin yurilsa ruxsat"],
  "Mototsikllarda konstruksiyada ko'zda tutilgan joylardan tashqarida odam tashish taqiqlangan (YHQ 159-band).");

// ===================== Tezlik (68, 78, 79-band) =====================
QC(["A"], "catA", "Toshkent shahrida (boshqa belgilar bo'lmasa) mototsiklning eng yuqori ruxsat etilgan tezligi qancha?",
  ["60 km/soat", "70 km/soat", "80 km/soat", "50 km/soat"],
  "Toshkent va Nukus shaharlarida, viloyat va tuman markazlarida hamda shaharlarda tezlik 60 km/soatdan oshmasligi kerak (YHQ 78-band).");
QC(["A"], "catA", "Tuman markazi bo'lmagan qishloq aholi punktida mototsiklning eng yuqori tezligi (belgilar bo'lmasa):",
  ["70 km/soat", "60 km/soat", "80 km/soat", "90 km/soat"],
  "Aholi punktlarida umumiy cheklov 70 km/soat; 60 km/soat esa shaharlar, viloyat va tuman markazlarida amal qiladi (YHQ 78-band).");
QC(["A"], "catA", "Siz mototsiklda aholi punktidan tashqaridagi yo'lda ketyapsiz, yoningizdagi yengil avtomobillar 100 km/soatda harakatlanmoqda. Sizga ruxsat etilgan eng yuqori tezlik:",
  ["80 km/soat", "100 km/soat", "90 km/soat", "70 km/soat"],
  "Aholi punktidan tashqarida yengil avtomobillarga 100 km/soat, mototsikl va elektromototsikllarga esa 80 km/soat ruxsat etiladi (YHQ 79-band).");
QC(["A"], "catA", "Aholi punktidan tashqarida qaysi transport vositasi bilan mototsiklning eng yuqori tezligi bir xil?",
  ["Tirkamali yengil avtomobil","Tirkamasiz yengil avtomobil","Shaharlararo qatnovdagi avtobus","Tirkamali yuk avtomobili"],
  "79-bandda tirkamali yengil avtomobillar, mototsikllar va elektromototsikllar bir guruhda — 80 km/soat (YHQ 79-band).");
QC(["A"], "catA", "Aholi punktidan tashqaridagi avtomagistralda (boshqa belgi bo'lmasa) elektromototsiklning eng yuqori tezligi:",
  ["80 km/soat", "100 km/soat", "110 km/soat", "90 km/soat"],
  "Aholi punktidan tashqarida mototsikl va elektromototsikllarga 80 km/soatdan oshmaydigan tezlik belgilangan (YHQ 79-band).");
QC(["A"], "catA", "Belgilar bilan ko'rsatilgan maktab yonida (300 m oralig'ida) mototsiklning eng yuqori tezligi:",
  ["30 km/soat", "20 km/soat", "40 km/soat", "50 km/soat"],
  "Belgilar o'rnatilgan maktab va maktabgacha ta'lim tashkilotlariga 300 metrdan kam masofada tezlik 30 km/soatdan oshmasligi kerak (YHQ 78-band).");
QC(["A"], "catA", "Turar joy dahasida, uylar orasidagi hududda mototsiklning eng yuqori tezligi:",
  ["20 km/soat", "10 km/soat", "30 km/soat", "40 km/soat"],
  "Turar joy dahalari va yondosh hududlarda tezlik 20 km/soatdan oshmasligi kerak (YHQ 78-band).");
QC(["A"], "catA", "Nosozlik sababli tezligini 40 km/soatdan oshira olmayotgan mototsikl ko'p tasmali yo'lda qayerda harakatlanishi kerak?",
  ["Chetki o'ng qatorda", "Istalgan qatorda", "O'rta qatorda", "Chap qatorda, avariya ishorasi bilan"],
  "Tezligini 40 km/soatdan oshira olmaydigan transport vositalari manyovrlardan tashqari faqat chetki o'ng qatorda harakatlanadi (YHQ 68-band).");

// ===================== Yorituv asboblari va ishoralar (44, 45, 46, 134–138-band) =====================
QC(["A"], "catA", "Mototsiklda kunduzi yaqinni yorituvchi fara yoqish talabi qachon amal qiladi?",
  ["Doimo — ob-havo va joydan qat'i nazar","Faqat aholi punktidan tashqarida yurganda","Faqat kuchli yog'ingarchilik bo'lganda","Faqat orqa o'rindiqda yo'lovchi bo'lganda"],
  "138-band mototsikl, elektromototsikl, skuter va mopedlarni sutkaning yorug' vaqtida yaqinni yorituvchi farani yoqish shart bo'lgan hollar qatorida alohida ko'rsatadi (YHQ 138-band).");
QC(["A"], "catA", "Kunduzi mototsiklda yaqinni yorituvchi fara o'rniga nimani yoqish mumkin?",
  ["Tumanga qarshi faralarni", "Faqat gabarit chiroqlarini", "Avariya ishorasini", "Orqa tumanga qarshi chiroqni"],
  "138-bandda ko'zda tutilgan hollarda yaqinni yorituvchi fara o'rniga tumanga qarshi faralardan foydalanish mumkin (YHQ 137-band).");
QC(["A"], "catA", "Sutkaning yorug' vaqtida yaqinni yorituvchi faraning yoqilishi YHQ bo'yicha nima hisoblanadi?",
  ["Ogohlantiruvchi ishora", "Taqiqlovchi ishora", "Tartibga soluvchi ishora", "Avariya ishorasi"],
  "Kunduzi yaqinni yorituvchi faraning yoqilishi ogohlantiruvchi ishoralar qatoriga kiradi (YHQ 44-band).");
QC(["A"], "catA", "Yaxshi yoritilgan tunnelda mototsiklda qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Uzoqni yoki yaqinni yorituvchi fara", "Faqat gabarit chiroqlari", "Faqat tumanga qarshi faralar", "Chiroq shart emas — tunnel yoritilgan"],
  "Tunnellarda yo'lning yoritilganligidan qat'i nazar mexanik transport vositalarida uzoqni yoki yaqinni yorituvchi fara yoqilgan bo'lishi kerak (YHQ 134-band).");
QC(["A"], "catA", "Tunda yoritilmagan trassada mototsiklda ketyapsiz. Qarshidan avtomobil kelmoqda. Uzoqni yorituvchi farani yaqiniga kamida qancha masofada almashtirasiz?",
  ["150 metr", "50 metr", "100 metr", "300 metr"],
  "Qarama-qarshi yo'nalishdagi transport vositasiga kamida 150 metr qolganda yaqinni yorituvchi faraga o'tish kerak (YHQ 135-band).");
QC(["A"], "catA", "Qarshidan kelayotgan avtomobil farasi mototsiklchining ko'zini qamashtirdi. U nima qilishi kerak?",
  ["Avariya ishorasini yoqib, tasmada qolib sekinlashish va to'xtash","Uzoqni yorituvchi farani yoqib, javob ishorasi berish","Darhol chap tasmaga o'tib, qarshi oqimdan uzoqlashish","Tezlikni oshirib, avtomobil yonidan tezroq o'tib ketish"],
  "Ko'zi qamashgan haydovchi avariya ishoralarini yoqishi, harakatlanish bo'lagini o'zgartirmasdan tezlikni kamaytirishi va to'xtashi kerak (YHQ 135-band).");
QC(["A"], "catA", "Tunda yoritilmagan yo'l chetida to'xtab turgan mototsiklda qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Gabarit chiroqlari", "Uzoqni yorituvchi fara", "Faqat stop-signal", "Burilish ko'rsatkichi"],
  "Sutkaning qorong'i vaqtida yo'lning yoritilmagan qismida to'xtagan yoki to'xtab turgan transport vositasida gabarit chiroqlari yoqilgan bo'lishi kerak (YHQ 136-band).");
QC(["A"], "catA", "Mototsiklingizning burilish ko'rsatkichlari ishlamayapti. Chapga burilishdan oldin qanday ishora berasiz?",
  ["Chap qo'lni yonga uzatib", "O'ng qo'lni yonga uzatib", "Chap qo'lni yuqoriga ko'tarib", "Ovozli ishora berib"],
  "Chapga burilish ishorasi — chap qo'lni yonga uzatish yoki o'ng qo'lni tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tarish (YHQ 45-band).");
QC(["A"], "catA", "Mototsiklchi chap qo'lini tirsakdan to'g'ri burchak ostida bukib, yuqoriga ko'tardi. Bu ishora nimani bildiradi?",
  ["O'ngga burilishni", "Chapga burilishni", "To'xtashni", "Quvib o'tishga ruxsatni"],
  "O'ngga burilish ishorasi — o'ng qo'lni yonga uzatish yoki chap qo'lni tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tarish (YHQ 45-band).");
QC(["A"], "catA", "Stop-signal ishlamay qolgan mototsiklchi to'xtash ishorasini qo'l bilan qanday beradi?",
  ["Chap yoki o'ng qo'lni yuqoriga ko'tarib","Chap qo'lni pastga, yerga tomon tushirib","O'ng qo'lni yonga gorizontal uzatib","Ikkala qo'lni bir vaqtda yonga uzatib"],
  "To'xtash ishorasi chap yoki o'ng qo'lni yuqoriga ko'tarib beriladi (YHQ 45-band).");
QC(["A"], "catA", "Mototsiklchining qo'l bilan beriladigan burilish ishorasini qachon tugatishiga ruxsat etiladi?",
  ["Manyovrni bevosita bajarishdan oldin", "Faqat manyovr tugagandan keyin", "Chorrahadan chiqib, 50 m yurgach", "Ishora umuman berilmasa ham bo'ladi"],
  "Qo'l bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin — ikki qo'l bilan boshqaruv uchun bu muhim (YHQ 46-band).");

// ===================== Shatakka olish (145-band) =====================
QC(["A"], "catA", "Ikki g'ildirakli mototsiklingiz yo'lda buzildi. Do'stingiz uni yengil avtomobil bilan arqonda shatakka olmoqchi. Bu:",
  ["Taqiqlanadi", "Arqon 4–6 m bo'lsa ruxsat", "Qattiq ulagich bilan ruxsat", "Kunduzi ruxsat"],
  "Ikki g'ildirakli mototsikl va elektromototsikllarni shatakka olish taqiqlangan (YHQ 145-band).");
QC(["A"], "catA", "145-banddagi mototsikl bilan shatakka olish taqiqi qaysi mototsikllarga tegishli?",
  ["Ikki g'ildirakli mototsikllarga","Faqat kajavali mototsikllarga","Faqat elektromototsikllarga","Faqat 125 sm3 dan kichik mototsikllarga"],
  "145-band ikki g'ildirakli mototsikl, elektromototsikl, moped va skuter bilan shatakka olishni hamda ularni shatakka olishni taqiqlaydi (YHQ 145-band).");
QC(["A"], "catA", "Elektromototsikl bilan buzilgan skuterni shatakka olish:",
  ["Taqiqlanadi", "Egiluvchan ulagichda ruxsat", "Kunduzi va quruq yo'lda ruxsat", "50 km/soatdan oshmasa ruxsat"],
  "Ikki g'ildirakli elektromototsikl bilan shatakka olish ham, skuterni shatakka olish ham taqiqlangan (YHQ 145-band).");
QC(["A"], "catA", "Ikki g'ildirakli mototsikl yo'lda tuzatib bo'lmaydigan darajada buzildi. YHQga mos ravishda uni qanday olib ketish mumkin?",
  ["Evakuatorga ortib olib ketish", "Avtomobil bilan arqonda shatakka olish", "Boshqa mototsikl bilan shatakka olish", "Velosiped bilan tortib ketish"],
  "Nosozlik bartaraf etilmasa, vositani evakuator yoki shatakka olish orqali olib borish mumkin, lekin ikki g'ildirakli mototsiklni shatakka olish taqiqlangan (YHQ 145-band).");

// ===================== To'xtash va to'xtab turish (72, 89-band) =====================
QC(["A"], "catA", "Kajavasiz ikki mototsiklni qatnov qismida qanday qo'yish mumkin?",
  ["Ikki qator qilib, chetga parallel", "Faqat bir qator qilib, chetga parallel", "Chetga perpendikulyar, uch qator", "Faqat trotuar ustiga"],
  "Kajavasi bo'lmagan ikki g'ildirakli transport vositalarini qatnov qismida ikki qator qilib qo'yishga ruxsat etiladi (YHQ 89-band).");
QC(["A"], "catA", "Mototsiklni qatnov qismiga chegaradosh trotuar chetida qo'yish qachon mumkin?",
  ["5.15 bilan 7.6.2, 7.6.3, 7.6.6–7.6.9 dan biri bo'lsa","Piyodalar uchun 1 m joy qolsa, har qanday joyda","Faqat 5.15 belgisining o'zi o'rnatilgan bo'lsa","Faqat tungi vaqtda, hech qanday belgisiz ham"],
  "Trotuar chetida mototsikllarning to'xtab turishi 5.15 belgisi bilan birga 7.6.2, 7.6.3, 7.6.6–7.6.9 belgilaridan biri o'rnatilgan joylarda ruxsat etiladi (YHQ 89-band).");
QC(["A"], "catA", "Qatnov qismining kengaytirilib, undan ajratilgan joyida mototsikllarni qanday qo'yish mumkin?",
  ["Xalaqit bermasa, boshqacha tartibda ham","Faqat bir qator qilib, chetga parallel","Faqat ikki qator qilib, chetga parallel","U yerda to'xtab turish umuman taqiqlangan"],
  "Qatnov qismining kengaytirilib ajratilgan joylarida boshqa ishtirokchilarga xalaqit bermaslik sharti bilan boshqacha tartibda qo'yishga ham ruxsat etiladi (YHQ 89-band).");
QC(["A"], "catA", "Tirbandlikda mototsiklda trotuar ustidan o'tib ketish:",
  ["Taqiqlanadi", "Piyodalar bo'lmasa ruxsat", "Sekin yurilsa ruxsat", "Ovozli ishora bilan ruxsat"],
  "Mexanik transport vositalarining trotuarlar, piyodalar yo'lkalari va yo'l yoqalarida harakatlanishi taqiqlanadi (YHQ 72-band).");
QC(["A"], "catA", "Tirbandlikni yo'l yoqasidan mototsiklda aylanib o'tish:",
  ["Taqiqlanadi", "Yo'l yoqasi bo'sh bo'lsa ruxsat", "Faqat aholi punktidan tashqarida ruxsat", "Tezlik 20 km/soatdan kam bo'lsa ruxsat"],
  "72-band mexanik transport vositalarining yo'l yoqalarida harakatlanishini taqiqlaydi (YHQ 72-band).");

// ===================== Tasmalar, quvib o'tish, filtrlanish (65, 67, 70, 73, 166-band) =====================
QC(["A"], "catA", "Siz mototsiklda tirbandlikdasiz. Tasmalar chiziq bilan ajratilgan. Ikki qator avtomobil orasidan, chiziq ustidan o'tib ketish mumkinmi?",
  ["Yo'q, harakat tasma ichida bo'lishi kerak","Ha, mototsiklga bu alohida ruxsat etilgan","Ha, agar 20 km/soatdan sekin yurilsa","Ha, agar avariya ishorasi yoqib qo'yilsa"],
  "Qatnov qismi chiziqlar bilan tasmalarga ajratilgan bo'lsa, harakat qat'iy belgilangan tasmalarda bo'lishi kerak; uzuq chiziqni faqat qayta tizilishda bosib o'tish mumkin (YHQ 70-band).");
QC(["A"], "catA", "Aholi punktidan tashqarida mototsiklda o'ng tasma bo'sh bo'lsa, chap tasmada harakatlanish:",
  ["Taqiqlanadi", "Tezlik 80 km/soat bo'lsa ruxsat", "Kunduzi ruxsat", "Mototsikllarga ruxsat"],
  "Aholi punktlaridan tashqarida haydovchilar o'ng chetga yaqinroq harakatlanadi; o'ng tasmalar bo'sh bo'lganda chap tasmalarni egallash taqiqlanadi (YHQ 67-band).");
QC(["A"], "catA", "Mototsiklda oldingi avtomobil ortidan qanday masofada harakatlanish kerak?",
  ["U keskin tormozlasa, to'qnashmaydigan masofada","Doimo aniq 5 metr — tezlikdan qat'i nazar","Mototsikl kichik bo'lgani uchun masofa shart emas","Faqat trassada kamida 50 metr, shaharda emas"],
  "Haydovchi oldingi vosita keskin tormoz berganda to'qnashib ketmaslik kafolatini beradigan oraliq masofani saqlashi kerak (YHQ 73-band).");
QC(["A"], "catA", "Velosipedchini mototsiklda quvib o'tayotganda qanday talabga rioya qilinadi?",
  ["Xavfsiz yonlama oraliq saqlanadi","Ovozli ishora berib, yaqindan o'tiladi","Yonlama oraliq faqat avtomobillar uchun shart","Velosipedchi yo'l yoqasiga chiqishi shart"],
  "Haydovchi yo'l harakati xavfsizligini ta'minlaydigan yonlama oraliq masofani saqlashi kerak (YHQ 73-band).");
QC(["A"], "catA", "To'rt tasmali ikki tomonlama yo'lda mototsiklda qarama-qarshi yo'nalish tasmasiga chiqib quvib o'tish:",
  ["Taqiqlanadi", "Yo'l bo'sh bo'lsa ruxsat", "Mototsikllarga ruxsat", "Kunduzi ruxsat"],
  "To'rt va undan ortiq tasmali ikki tomonlama yo'llarda qarama-qarshi yo'nalish tasmalariga chiqish taqiqlanadi (YHQ 65-band).");
QC(["A"], "catA", "Mopedda (A1) ikki kishi yonma-yon ketmoqchi. YHQ bo'yicha mopedlar qanday harakatlanadi?",
  ["Chetki o'ng bo'lakda, bir qator bo'lib","Ikki qator bo'lib, yonma-yon, o'ng bo'lakda","Istalgan bo'lakda, bir qator bo'lib","Chap bo'lakda, ikki qator bo'lib"],
  "Mopedlar yo'lning chetki o'ng bo'lagida, imkoni boricha o'ng tomonida bir qator bo'lib harakatlanadi (YHQ 166-band).");
QC(["A"], "catA", "Mopedda yo'l yoqasidan harakatlanishga qachon ruxsat etiladi?",
  ["Piyodalarga xalaqit bermasa", "Faqat dvigatel o'chirilgan holda", "Faqat tirbandlik bo'lsa", "Faqat aholi punktida"],
  "Velosiped va mopedlarga piyodalarga xalaqit bermasa, yo'l yoqasidan harakatlanishga ham ruxsat etiladi (YHQ 166-band).");

// ===================== Avtomagistral (121-band) =====================
QC(["A"], "catA", "Siz 50 sm3 lik mopeddasiz. Avtomagistralga chiqish:",
  ["Taqiqlanadi", "O'ng tasmada ruxsat", "Kunduzi ruxsat", "Yaqinni yorituvchi fara bilan ruxsat"],
  "Avtomagistrallarda mopedlar, skuterlar va kichik hajmdagi mototransport vositalarining harakatlanishi taqiqlanadi (YHQ 121-band).");
QC(["A"], "catA", "Quyidagi ikki g'ildirakli vositalardan qaysi biriga avtomagistralda harakatlanish taqiqlanmagan?",
  ["Mototsiklga", "Skuterga", "Mopedga", "Kichik hajmdagi mototransportga"],
  "121-band ro'yxatida skuterlar, mopedlar va kichik hajmdagi mototransport bor, mototsikllar esa yo'q (YHQ 121-band).");
QC(["A"], "catA", "Mototsiklingiz nosozligi sababli 40 km/soatdan tez yura olmayapti. Avtomagistralda harakatlanish:",
  ["Taqiqlanadi", "Avariya ishorasi bilan ruxsat", "Chetki o'ng tasmada ruxsat", "Yo'l yoqasidan ruxsat"],
  "Avtomagistrallarda holatiga ko'ra tezligi 40 km/soatdan kam bo'lgan transport vositalarining harakatlanishi taqiqlanadi (YHQ 121-band).");
QC(["A"], "catA", "Avtomagistralda mototsikl boshqarishni o'rgatish (o'rgatuvchi ishtirokida):",
  ["Taqiqlanadi", "Mototsikllarga ruxsat", "Kunduzi ruxsat", "O'ng tasmada ruxsat"],
  "Avtomagistrallarda transport vositasini o'rganish uchun boshqarish taqiqlanadi (YHQ 121-band).");

// ===================== Yo'nalishli transport tasmasi (132-band) =====================
QC(["A"], "catA", "Tirbandlik paytida 5.9 belgisi bilan ajratilgan avtobus tasmasi bo'sh. Siz mototsikldasiz. Nima qilasiz?",
  ["Umumiy tasmada qolaman — u yerga chiqish mumkin emas","Avtobus tasmasidan tez o'tib ketaman","Avtobus ko'rinmasa, qisqa masofaga chiqaman","Avtobus tasmasida bekatgacha yuraman"],
  "5.9, 5.10.1–5.10.3 belgilari bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to'xtashi taqiqlanadi (YHQ 132-band).");
QC(["A"], "catA", "5.9 belgisi bilan belgilangan tasma uzuq chiziq bilan ajratilgan. Siz mototsiklda o'ngga burilmoqchisiz. Qanday harakatlanasiz?",
  ["Burilishdan oldin shu tasmaga qayta tizilaman","Chap tasmadan turib to'g'ridan-to'g'ri burilaman","Tasmani kesib o'tmasdan oldin to'liq to'xtayman","Bu yerda o'ngga burilish umuman taqiqlangan"],
  "5.9 tasma uzuq chiziq bilan ajratilgan bo'lsa, burilmoqchi bo'lgan transport vositalari bu tasmaga qayta tizilishlari kerak (YHQ 132-band).");

// ===================== Belgilar (1-ilova) =====================
QC(["A"], "catA", "3.5 «Mototsikl va elektromototsikllar harakatlanishi taqiqlangan» belgisi ostidan mopedda o'tish:",
  ["Ruxsat — mopedga 3.5.1 belgisi taalluqli","Taqiqlanadi — moped ham mototsikl hisoblanadi","Faqat dvigatel o'chirilgan holda yetaklab","Faqat kunduzi va yo'lovchisiz ruxsat etiladi"],
  "3.5 belgisi mototsikl va elektromototsikllarga, 3.5.1 belgisi esa skuter, moped va kichik hajmdagi mototransportga tegishli (YHQ 1-ilova, 3.5).");
QC(["A"], "catA", "3.5.1 belgisi o'rnatilgan yo'lda mototsiklda harakatlanish:",
  ["Ruxsat etiladi", "Taqiqlanadi", "Faqat kajavali mototsiklga ruxsat", "Faqat elektromototsiklga ruxsat"],
  "3.5.1 belgisi faqat skuter, moped va kichik hajmdagi mototransportga taalluqli; mototsikllarni 3.5 belgisi taqiqlaydi (YHQ 1-ilova, 3.5.1).");
QC(["A"], "catA", "3.9 «Velosipedda harakatlanish taqiqlangan» belgisi qaysi vositalarga taalluqli?",
  ["Velosiped va mopedlarga", "Velosiped va mototsikllarga", "Faqat velosipedlarga", "Barcha ikki g'ildirakli vositalarga"],
  "3.9 belgisi velosipedda va mopedda harakatlanishni taqiqlaydi (YHQ 1-ilova, 3.9).");
QC(["A"], "catA", "3.3 «Mexanik transport vositalarining harakatlanishi taqiqlangan» belgisi mototsiklga ta'sir qiladimi?",
  ["Ha, mototsikl mexanik transport vositasi","Yo'q, belgi faqat avtomobillarga tegishli","Yo'q, belgi faqat yuk mashinalariga tegishli","Faqat kajavali mototsikllarga ta'sir qiladi"],
  "3.3 belgisi barcha mexanik transport vositalarining harakatini taqiqlaydi, mototsikl ham ular qatoriga kiradi (YHQ 1-ilova, 3.3).");
QC(["A"], "catA", "3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan» belgisi ostidan mototsiklda o'tish:",
  ["Ruxsat etiladi", "Taqiqlanadi", "Faqat yuksiz bo'lsa ruxsat", "Faqat kajavasiz bo'lsa ruxsat"],
  "3.4 belgisi yuk avtomobillari, transport tarkiblari, traktor va o'ziyurar uskunalarga taalluqli (YHQ 1-ilova, 3.4).");
QC(["A"], "catA", "4.5 «Velosiped yo'lkasi» belgisi bilan belgilangan yo'lkada mopedda harakatlanish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Dvigatel o'chirilsa ruxsat", "25 km/soatdan sekin bo'lsa ruxsat"],
  "4.5 belgisi faqat velosiped va individual harakatlanish vositalarida harakatlanishga ruxsat beradi (YHQ 1-ilova, 4.5).");
QC(["A"], "catA", "5.3 «Avtomobillar uchun mo'ljallangan yo'l» belgisi o'rnatilgan yo'lda mopedda harakatlanish:",
  ["Ruxsat etiladi", "Taqiqlanadi", "Faqat kunduzi ruxsat", "Faqat o'ng tasmada, 40 km/soatdan tez"],
  "5.3 belgisi avtomobil, avtobus, mototsikl, elektromototsikl, moped, skuter va kichik hajmdagi mototransport harakati uchun mo'ljallangan yo'lni bildiradi (YHQ 1-ilova, 5.3).");
QC(["A"], "catA", "«Nogironligi bo'lgan shaxs» taniqlik belgisi o'rnatilgan mototsiklni boshqarayotgan nogiron haydovchi qaysi belgilar talabidan chetga chiqishi mumkin?",
  ["3.2, 3.3 va 3.28", "3.1, 3.5 va 3.20", "3.4, 3.24 va 3.27", "3.1, 3.2 va 3.3"],
  "«Nogiron» belgisi bilan belgilangan mototsikllarni boshqarayotgan nogiron haydovchilar 3.2, 3.3 va 3.28 belgilari talablaridan chetga chiqishlari mumkin (YHQ 1-ilova, 3.28).");
QC(["A"], "catA", "Staji 2 yildan kam bo'lgan mototsiklchi mototsikliga «Haydovchilikni endi boshlagan» belgisini o'rnatishi shartmi?",
  ["Yo'q, mototsikllar bu talabdan istisno","Ha, mototsiklning orqa tomoniga o'rnatadi","Ha, old va orqa tomoniga o'rnatadi","Faqat yo'lovchi tashiyotgan bo'lsa o'rnatadi"],
  "176-band bu belgini mexanik transport vositalariga talab qiladi, lekin traktor, mototsikl, elektromototsikl, moped va skuterlar bundan istisno (YHQ 176-band).");

// ===================== Yuk tashish (161, 162-band) =====================
QC(["A"], "catA", "Mototsiklda katta quti olib ketyapsiz, u orqa chiroq va davlat raqamini to'sib qo'ydi. Harakatlanish:",
  ["Taqiqlanadi — avval bartaraf etish kerak","Kunduzi ruxsat — chiroq kerak emas","Quti mahkam bog'langan bo'lsa ruxsat","Sekin, o'ng chetdan yurilsa ruxsat"],
  "Yuk tashqi yoritish asboblari va davlat raqam belgisini to'smasligi kerak; aks holda kamchilikni bartaraf etish yoki harakatni to'xtatish shart (YHQ 162-band).");
QC(["A"], "catA", "Mototsiklda yuk tashishga qaysi shart bajarilganda yo'l qo'yiladi?",
  ["Yuk muvozanat va ko'rinishni buzmasa","Yuk og'irligi 30 kg dan oshmasa","Yuk faqat yo'lovchi qo'lida tutib turilsa","Yuk faqat kajavada joylashtirilgan bo'lsa"],
  "Yuk tashishga u haydovchi ko'rinishini cheklamasa, boshqarishni qiyinlashtirmasa va muvozanatni buzmasa yo'l qo'yiladi (YHQ 162-band).");
QC(["A"], "catA", "Mototsiklda yuk tashiyotgan haydovchining harakatlanish vaqtidagi majburiyati:",
  ["Yukning holatini kuzatib borish","Har 10 km da to'xtab, yukni qayta bog'lash","Butun yo'l davomida avariya ishorasini yoqib yurish","Yuk bilan tezlikni 40 km/soatdan oshirmaslik"],
  "Haydovchi harakatni boshlashdan oldin yuk mahkamlanganiga ishonch hosil qilishi va harakatlanishda uning holatini kuzatib borishi kerak (YHQ 161-band).");
QC(["A"], "catA", "Mototsikl orqasiga bog'langan yuk qo'l bilan beriladigan ishoralarni ko'rishni to'sib qo'ysa:",
  ["Bunday holda yuk tashishga yo'l qo'yilmaydi","Burilish chiroqlari ishlasa, bu ahamiyatsiz","Faqat tunda yuk tashishga yo'l qo'yilmaydi","Yo'lovchi ishorani takrorlab tursa bo'ladi"],
  "162-bandga ko'ra yuk qo'l bilan beriladigan ishoralarni ko'rishni to'smasligi kerak (YHQ 162-band).");

// ===================== Texnik holat — 3-ilova =====================
QC(["A"], "catA", "Mototsikl orqa shinasining protektor naqshi qoldiq balandligi 0,7 mm. Undan foydalanish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat aholi punktida ruxsat", "Faqat quruq havoda ruxsat"],
  "Mototsikl, elektromototsikl, moped va skuterlar uchun protektor qoldiq balandligi 0,8 mm dan kam bo'lsa foydalanish taqiqlanadi (YHQ 3-ilova, 5.1).");
QC(["A"], "catA", "Skuter shinasining protektor naqshi qoldiq balandligi 1,0 mm. 3-ilova bo'yicha:",
  ["Foydalanish mumkin — me'yor 0,8 mm","Taqiqlanadi — skuter uchun me'yor 1,6 mm","Taqiqlanadi — skuter uchun me'yor 1,2 mm","Taqiqlanadi — skuter uchun me'yor 2,0 mm"],
  "Skuter va mopedlar uchun eng kam qoldiq balandlik 0,8 mm; 1,0 mm bu me'yordan ortiq (YHQ 3-ilova, 5.1).");
QC(["A"], "catA", "Mototsikl shinasi yon qismida kord ko'rinib turgan kesik bor. Undan foydalanish:",
  ["Taqiqlanadi", "Protektor 0,8 mm dan ko'p bo'lsa mumkin", "Bosim to'g'ri bo'lsa mumkin", "Faqat orqa g'ildirakda bo'lsa mumkin"],
  "Shinalarda kordning ko'rinishiga olib kelgan tashqi nuqsonlar (teshilgan, kesilgan, yorilgan) bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.2).");
QC(["A"], "catA", "Konstruksiyasida ko'zda tutilgan rul tebranishini pasaytiruvchi moslama (dempfer) nosoz bo'lgan mototsikldan foydalanish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat yo'lovchisiz ruxsat", "Faqat 60 km/soatgacha ruxsat"],
  "Mototsikllarda tebranishni pasaytiruvchi moslama (dempfer) nosoz bo'lsa yoki umuman bo'lmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 2.3).");
QC(["A"], "catA", "Konstruksiyasida ko'zda tutilgan xavfsizlik yoyi (duga) olib tashlangan mototsikldan foydalanish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat shahar ichida ruxsat", "Faqat yo'lovchisiz ruxsat"],
  "Mototsikl va elektromototsikllarda konstruksiyada ko'zda tutilgan xavfsizlik yoyi (duga) bo'lmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.11).");
QC(["A"], "catA", "Mototsiklda yo'lovchi uchun konstruksiyada ko'zda tutilgan oyoq tiragichlari olib tashlangan. Undan foydalanish:",
  ["Taqiqlanadi", "Yo'lovchi tashilmasa ham ruxsat", "Faqat kajavali bo'lsa ruxsat", "Faqat kunduzi ruxsat"],
  "Konstruksiyada ko'zda tutilgan oyoq tiragich yoki egardagi yo'lovchi uchun ko'ndalang tutqich bo'lmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.12).");
QC(["A"], "catA", "Kajavali mototsiklda qanday jihozlar bo'lishi shart?",
  ["Tibbiyot qutichasi va avariya belgisi","O't o'chirgich va tibbiyot qutichasi","Nur qaytargichli jilet va o't o'chirgich","Tirgak, jilet va o't o'chirgich to'plami"],
  "Kajavali mototsikl va elektromototsikllar tibbiyot qutichasi va majburiy to'xtaganlikni bildiruvchi belgi bilan jihozlanishi kerak (YHQ 3-ilova, 7.10).");
QC(["A"], "catA", "Mototsikl ramasi bilan yon tirkama (kajava) ramasi mahkamlangan joyda lyuft paydo bo'ldi. Bu:",
  ["Foydalanishni taqiqlovchi nosozlik", "Kichik nuqson — foydalanish mumkin", "Faqat yo'lovchi tashishga ta'sir qiladi", "Faqat texnik ko'rikda tekshiriladi"],
  "Mototsikl yoki elektromototsikl ramasi bilan yon tirkama ramasi mahkamlangan joyda lyuft bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.9).");
QC(["A"], "catA", "Mototsikl spidometri ishlamay qoldi. 3-ilovaning 7.6-bandi bo'yicha:",
  ["Mototsikllar bu banddan istisno qilingan","Foydalanish darhol taqiqlanadi","Faqat aholi punktida foydalanish taqiqlanadi","Faqat tunda foydalanish taqiqlanadi"],
  "7.6-bandda spidometr nosozligi bo'yicha talabdan mototsikl, elektromototsikl, skuter va mopedlar istisno qilingan (YHQ 3-ilova, 7.6).");
QC(["A"], "catA", "Konstruksiyasida ko'zda tutilgan orqani ko'rsatuvchi ko'zgulari olib tashlangan mototsikldan foydalanish:",
  ["Taqiqlanadi", "Ruxsat — mototsiklchi boshini burib qaraydi", "Faqat bitta ko'zgu bo'lsa ruxsat", "Faqat trassada taqiqlanadi"],
  "Orqa tomonni ko'rsatuvchi ko'zgular soni, joylashuvi va turi talablarga mos kelmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.1).");
QC(["A"], "catA", "Mototsiklning tovushli ishorasi (signal) ishlamayapti. Undan foydalanish:",
  ["Taqiqlanadi", "Kunduzi ruxsat", "Fara bilan ishora berilsa ruxsat", "Shahar tashqarisida ruxsat"],
  "Tovushli ishora ishlamasa, transport vositasidan foydalanish taqiqlanadi (YHQ 3-ilova, 7.2).");
QC(["A"], "catA", "Mototsiklning orqa burilish chiroqlari qizil rangli qilib almashtirildi. Bu:",
  ["Taqiqlanadi — sariq yoki zarg'aldoq kerak","Ruxsat — orqa chiroqlar qizil bo'lishi mumkin","Ruxsat — asosiysi chiroq miltillab tursa","Taqiqlanadi — ular faqat oq rangda bo'ladi"],
  "Orqa qismida sariq yoki zarg'aldoqdan boshqa rangli burilish chiroqlari o'rnatilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.6).");
QC(["A"], "catA", "Mototsiklning orqa tomoniga ko'k rangli yoritgich o'rnatildi. Bu:",
  ["Taqiqlanadi", "Bezak sifatida ruxsat", "Faqat tunda taqiqlanadi", "Yoqilmasa ruxsat"],
  "Orqa qismida qizildan boshqa rangli tashqi yoritgichlar o'rnatilgan bo'lsa, foydalanish taqiqlanadi (orqaga harakat, raqam yoritgichi va burilish chiroqlari bundan mustasno) (YHQ 3-ilova, 3.6).");
QC(["A"], "catA", "Mototsikl farasining nur yo'nalishi buzilgan (yuqoriga qarab qolgan). Bu:",
  ["Foydalanishni taqiqlovchi nosozlik","Kunduzi yurishga ta'sir qilmaydigan nuqson","Ruxsat — mototsiklda faqat bitta fara bor","Faqat texnik ko'rikda ahamiyatli nuqson"],
  "Yorituvchi chiroq nurining yo'nalishi buzilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.2).");
QC(["A"], "catA", "Mototsiklning gidravlik tormoz yuritmasidan suyuqlik oqmoqda (germetiklik buzilgan). Bu:",
  ["Foydalanishni taqiqlovchi nosozlik","Suyuqlik qo'shib tursa, yurish mumkin","Orqa tormozda bo'lsa, yurish mumkin","Faqat tunda foydalanish taqiqlanadi"],
  "Gidravlik tormoz yuritmasining zichligi (germetikligi) buzilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 1.3).");
QC(["A"], "catA", "Mototsiklning chiqindi gazlarni chiqarish tizimi (glushitel) buzuq. 3-ilova bo'yicha:",
  ["Foydalanish taqiqlanadi", "Faqat aholi punktida taqiqlanadi", "Kunduzi ruxsat etiladi", "Faqat sport mototsikllariga ruxsat"],
  "Ishlab chiqarilgan gazlarni chiqarib tashlash tizimi buzuq bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 6.3).");
QC(["A"], "catA", "Yo'lda mototsiklda foydalanishni taqiqlovchi nosozlik paydo bo'ldi va uni joyida tuzatib bo'lmaydi. Haydovchi nima qilishi mumkin?",
  ["Ehtiyot choralari bilan ta'mirlash yoki to'xtash joyiga olib borish","Boshqa mototsikl bilan shatakka olinib, istalgan manzilga ketish","Odatdagidek, nosozlikka e'tibor bermay harakatni davom ettirish","Mototsiklni yo'l o'rtasida qoldirib, yordam chaqirishga ketish"],
  "3-ilovadagi nosozlik bartaraf etilmasa, zarur ehtiyot choralari bilan ta'mirlash yoki to'xtab turish joyiga olib borish choralari ko'riladi (YHQ 12-band).");

// ===================== Xavfsiz haydash tavsiyalari (30 ta) =====================
QC(["A"], "catA", "Mototsiklda eng qisqa tormoz yo'lini qanday olish mumkin?",
  ["Ikkala tormozni birga, ravon kuchaytirib bosish","Faqat orqa tormozni keskin va to'liq bosish","Faqat dvigatel bilan, uzatmani pasaytirib tormozlash","Old tormozni bir zumda keskin, to'liq bosish"],
  "Ikkala tormozni birga, ravon kuchaytirib qo'llash eng qisqa va barqaror to'xtashni beradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Quruq asfaltda to'g'ri chiziqda tormozlanganda tormoz kuchining katta qismini qaysi tormoz beradi?",
  ["Old tormoz", "Orqa tormoz", "Ikkalasi teng — 50/50", "Dvigatel tormozi"],
  "Tormozlanishda og'irlik oldinga ko'chadi, shuning uchun to'xtatish kuchining asosiy qismi old g'ildirakka to'g'ri keladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Burilish (qiyalik) paytida keskin tormoz berish zarur bo'lib qoldi. Mototsiklchi uchun eng xavfsiz yondashuv qaysi?",
  ["Avval mototsiklni tiklab, keyin tormozlash","Qiyalikni oshirib, old tormozni keskin bosish","Debryajni bosib, tormozsiz chiqib ketishga urinish","Faqat orqa tormozni oxirigacha to'liq bosish"],
  "Qiyalikda shina ilashishining bir qismi burilishga sarflanadi; tik holatda tormozlash sirpanish xavfini kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Burilishga kirishda tezlikni qachon kamaytirish kerak?",
  ["Burilishdan oldin, to'g'ri chiziqda","Burilishning eng chuqur nuqtasida, qiyalikda","Burilishdan chiqayotganda, gaz qo'shishdan oldin","Burilish o'rtasida, faqat old tormoz bilan"],
  "Tezlik burilishdan oldin kamaytiriladi, burilish ichida esa gaz ravon ushlab turiladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Burilishda mototsiklchi nigohini qayerga qaratishi kerak?",
  ["Burilish chiqishi tomon, borish yo'nalishiga","To'g'ridan-to'g'ri old g'ildirakning oldiga","Spidometr va boshqa asboblar paneliga","Yo'l chetidagi to'siq yoki ustunlarga"],
  "Mototsikl odatda nigoh tomonga yo'naladi; burilish chiqishiga qarash to'g'ri traektoriyani ushlashga yordam beradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Taxminan 30 km/soatdan yuqori tezlikda mototsiklni chapga og'dirish uchun rulga qanday ta'sir qilinadi (kontrrulyovka)?",
  ["Rulning chap dastasini oldinga bosish", "Rulning o'ng dastasini oldinga bosish", "Rulni chapga keskin burish", "Rulni tortib, orqaga og'ish"],
  "Kontrrulyovkada burilish tomonidagi dastani oldinga bosish mototsiklni shu tomonga og'diradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Yo'lda kutilmagan to'siq paydo bo'ldi, tezlik yuqori. To'siqni tez aylanib o'tish uchun qaysi usul samarali?",
  ["Aylanish tomonidagi dastani qisqa bosish","Faqat tanani og'dirib, rulga umuman tegmaslik","Rulni teskari tomonga kuch bilan burash","Ikkala tormozni bosib, rulni keskin burash"],
  "Kontrrulyovka — kerakli tomondagi dastani bosish — mototsiklni tez og'dirib, to'siqni aylanib o'tishga imkon beradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Uzoq quruq kunlardan keyin yomg'ir endi boshlandi. Mototsiklchi nimani bilishi kerak?",
  ["Dastlabki daqiqalarda yo'l juda sirpanchiq bo'ladi","Yomg'ir boshida shinaning ilashishi yaxshilanadi","Asfalt faqat bir soatdan keyin sirpanchiq bo'ladi","Ho'l yo'lda tormoz yo'li quruqdagidan qisqaradi"],
  "Yomg'irning boshida suv asfaltdagi moy va changni ko'tarib, sirpanchiq qatlam hosil qiladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Ho'l yo'lda mototsiklda ayniqsa sirpanchiq bo'ladigan joylar qaysilar?",
  ["Bo'yalgan chiziqlar va lyuk qopqoqlari","Toza, g'adir-budur quruq asfalt qismlari","Yo'lning o'rta qismi, har qanday holatda","Ko'prik ustidagi quruq, yopiq qismlar"],
  "Ho'l bo'yoq chiziqlari, metall lyuk qopqoqlari va relslar asfaltga nisbatan ancha sirpanchiq (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Ho'l yo'lda mototsiklda tormozlash va burilish qanday bajariladi?",
  ["Ravon, keskin harakatlarsiz, kam qiyalik bilan","Quruq yo'ldagidek, odatdagi kuch va qiyalik bilan","Faqat old tormoz bilan, keskin va qisqa bosib","Burilishda gazni keskin qo'shib, tezroq chiqib"],
  "Ho'l yo'lda ilashish kamayadi, shuning uchun gaz, tormoz va rul harakatlari ravon, qiyalik esa kichikroq bo'lishi kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Ho'l yo'lda mototsiklda oldingi transportgacha bo'lgan masofani qanday tanlash kerak?",
  ["Quruq yo'ldagidan kattaroq", "Quruq yo'ldagi bilan bir xil", "Kichikroq — ko'rinish yaxshi bo'lishi uchun", "Faqat tunda kattaroq"],
  "Ho'l yo'lda tormoz yo'li uzayadi, shuning uchun masofani oshirish kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Quruq yo'lda oldingi transport ortidan kamida qanday vaqt oralig'i tavsiya etiladi?",
  ["Kamida 2 soniya","Yarim soniya","Kamida 1 soniya","Aniq 10 soniya"],
  "Kamida 2 soniyalik oraliq reaksiya va tormozlash uchun vaqt beradi; yomon sharoitda u oshiriladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Nega mototsiklchi avtomobilning «ko'r zonasi»da uzoq yurmasligi kerak?",
  ["Haydovchi uni ko'zguda ko'rmasligi mumkin","U yerda havo oqimi juda kuchli bo'ladi","Bu yo'l chiziqlarini buzish hisoblanadi","U yerda tezlik cheklovi pastroq bo'ladi"],
  "Ko'r zonada mototsiklchi ko'zgularda ko'rinmaydi, avtomobil qayta tizilganda to'qnashuv xavfi tug'iladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Qayta tizilishdan oldin ko'zgulardan tashqari mototsiklchi yana nima qilishi kerak?",
  ["Yelka osha qarab, ko'r zonani tekshirish","Qisqa ovozli ishora berib ogohlantirish","Fara chiroqlarini o'chirib-yoqib ogohlantirish","Tezlikni keskin oshirib, oldinga chiqib olish"],
  "Ko'zgular hamma joyni ko'rsatmaydi; qisqa yelka osha qarash ko'r zonadagi vositani aniqlaydi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Chorrahada qarshidan kelayotgan avtomobil chapga burilmoqchi. Mototsiklchi uchun eng xavfsiz yondashuv:",
  ["U sizni ko'rmagan bo'lishi mumkin deb sekinlashish","U albatta yo'l beradi deb tezlikni saqlash","Ovozli ishora berib, tezlikni oshirib o'tish","Uzoqni yorituvchi farani yoqib, to'xtamay o'tish"],
  "Ko'p to'qnashuvlar haydovchi mototsiklni sezmay chapga burilganda sodir bo'ladi; tayyor turish va sekinlashish xavfni kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Tasma ichida mototsiklning joylashuvini tanlashda asosiy maqsad nima?",
  ["Ko'rinish va xavfdan yetarli uzoqlik","Doimo tasmaning eng o'ng chetida yurish","Doimo tasma chizig'iga yaqin yurish","Avtomobil ortida, ko'rinmasdan yurish"],
  "Tasmadagi joylashuv boshqalarga yaxshi ko'rinish va xavf manbalaridan yetarli oraliqni ta'minlashi kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Mototsiklchi uchun qaysi himoya kiyimi to'plami tavsiya etiladi?",
  ["Shlem, qo'lqop, kurtka, shim va baland poyabzal","Faqat shlem va oddiy quyosh ko'zoynagi","Shlem, shortik va yengil yozgi krossovka","Faqat yorqin rangli yengil kurtka va shlem"],
  "Yiqilganda teri va bo'g'imlarni himoya qilish uchun shlemdan tashqari qo'lqop, mustahkam kiyim va poyabzal kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Nega mototsiklchiga yorqin yoki nur qaytaruvchi kiyim tavsiya etiladi?",
  ["Boshqalarga yaxshiroq ko'rinish uchun","Havo qarshiligini kamaytirish uchun","Bu YHQda barcha uchun majburiy bo'lgani uchun","Dvigatel issig'idan oyoqlarni himoya uchun"],
  "Mototsikl kichik siluetga ega; yorqin va nur qaytaruvchi kiyim uni boshqalarga sezilarli qiladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Mototsikl shlemi kuchli zarbaga uchradi, tashqi tomondan shikast ko'rinmaydi. Nima qilish tavsiya etiladi?",
  ["Shlemni almashtirish", "Ishlatishda davom etish", "Faqat oynasini almashtirish", "Faqat tasmasini almashtirish"],
  "Zarbadan keyin shlemning ichki yutuvchi qatlami ko'rinmas shikastlanishi mumkin, shuning uchun u almashtiriladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Har bir safar oldidan mototsiklda qisqa tekshiruvga nimalar kiradi?",
  ["Shina bosimi, tormoz, chiroq va zanjir","Faqat bakdagi yoqilg'i miqdori","Faqat ko'zgular va oynaning tozaligi","Faqat akkumulyator kuchlanishi va moy rangi"],
  "Shina, tormoz, yorituv va uzatma holatini oldindan tekshirish yo'ldagi nosozlik xavfini kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "ABS (blokirovkaga qarshi tizim) bilan jihozlangan mototsiklda favqulodda tormozlash qanday bajariladi?",
  ["Ikkala tormozni qat'iy bosib ushlab turish","Tormozni tez-tez bosib-qo'yib yuborish","Faqat orqa tormozni oxirigacha bosish","Faqat dvigatel bilan, uzatmani tushirib tormozlash"],
  "ABS g'ildirak blokirovkasining oldini oladi, shuning uchun favqulodda holatda ikkala tormoz qat'iy bosib turiladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Yo'lovchi bilan harakatlanganda mototsiklchi nimani hisobga olishi kerak?",
  ["Tormoz yo'li uzayadi, boshqaruv o'zgaradi","Mototsikl barqarorroq, tormoz yo'li qisqaradi","Faqat yoqilg'i sarfi oshadi, boshqasi o'zgarmaydi","Faqat tezlanish yaxshilanadi, boshqasi o'zgarmaydi"],
  "Qo'shimcha og'irlik tormoz yo'lini uzaytiradi va boshqaruvni og'irlashtiradi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Mototsikl yo'lovchisi burilishlarda o'zini qanday tutishi kerak?",
  ["Haydovchi bilan bir xil tomonga og'ishi","Burilishga teskari tomonga og'ishi","Tik o'tirib, umuman og'masligi","Oyog'ini yerga tushirishga tayyor turishi"],
  "Yo'lovchi haydovchi bilan bir xil og'ishi muvozanatni saqlaydi; teskari og'ish boshqaruvni buzadi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Temir yo'l relslari yoki tramvay izlarini mototsiklda qanday kesib o'tish xavfsizroq?",
  ["To'g'ri burchakka yaqin, tik holatda","Relsga parallel, o'tkir burchak ostida","Tezlikni oshirib, qiyalik bilan","Old tormozni bosib turgan holda, qiyalikda"],
  "O'tkir burchakda g'ildirak rels bo'ylab sirpanishi mumkin; to'g'ri burchakka yaqin kesish xavfsizroq (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Burilishda yo'lda shag'al yoki qum to'plami ko'rindi. To'g'ri harakat qaysi?",
  ["Oldindan sekinlashib, tik va ravon o'tish","Aynan uning ustida keskin tormoz berish","Uning ustida qiyalikni yanada oshirish","Gazni keskin qo'shib, tezda o'tib ketish"],
  "Bo'sh qoplamada ilashish kam; keskin tormoz yoki qiyalik sirpanishga olib keladi (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Mototsiklchi oldidagi to'siqqa tikilib qolsa (nishonga qotish), nima yuz berishi mumkin?",
  ["Mototsikl aynan to'siq tomon yo'naladi","Mototsikl o'z-o'zidan sekinlashib to'xtaydi","Atrofdagi ko'rinish sezilarli yaxshilanadi","Tormoz yo'li sezilarli darajada qisqaradi"],
  "Mototsikl nigoh tomonga boradi; shuning uchun xavfga emas, chiqish yo'liga qarash kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Katta yuk avtomobilini quvib o'tishda mototsiklchi nimaga tayyor bo'lishi kerak?",
  ["Havo oqimining kuchli zarbasiga","Ko'rinishning birdan yaxshilanishiga","Yo'l ilashishining sezilarli oshishiga","Tezlikning o'z-o'zidan kamayishiga"],
  "Katta transport atrofidagi havo oqimi mototsiklni chetga surishi mumkin, shuning uchun rulni mahkam va bo'shashgan holda ushlash kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Tunda mototsiklda harakatlanishda qaysi tavsiya to'g'ri?",
  ["Fara yoritgan masofada to'xtay oladigan tezlik","Kunduzgidan tezroq yurish — yo'l bo'shroq","Faqat gabarit chiroqlari yoqilgan holda yurish","Shlem oynasini butun yo'l davomida ochiq tutish"],
  "Tunda tezlik fara yoritadigan masofada to'xtash imkonini berishi kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Mototsiklchida charchoq va diqqat pasayishi sezildi. Eng to'g'ri qaror:",
  ["Xavfsiz joyda to'xtab, dam olish", "Tezlikni oshirib, tezroq yetib borish", "Musiqani baland qo'yib davom etish", "Shlem oynasini ochib davom etish"],
  "Charchoq reaksiyani sekinlashtiradi; mototsiklda bu ayniqsa xavfli, shuning uchun to'xtab dam olish kerak (Xavfsiz haydash tavsiyalari).");
QC(["A"], "catA", "Yuqori tezlikda mototsikl rulida tebranish (shimmi) boshlandi. Qaysi harakat tavsiya etiladi?",
  ["Rulni bo'sh ushlab, gazni ravon kamaytirish","Gazni keskin qo'shib, tezlikni oshirish","Old tormozni bir zumda keskin bosish","Rulni kuch bilan qarama-qarshi tomonga burash"],
  "Rulni bo'sh ushlab, gazni ravon kamaytirish tebranishni so'ndiradi; keskin harakatlar holatni yomonlashtiradi (Xavfsiz haydash tavsiyalari).");
