// q/cat_b.js — «B» toifasi: yengil avtomobillar va 3,5 t gacha yuk avtomobillari (B, BE)
// Manba: Yo'l harakati qoidalari (VM 12.04.2022 y. 172-son qarori, amaldagi tahrir) va 3-ilova.
// Xavfsiz haydash bo'yicha savollar «(Xavfsiz haydash tavsiyalari)» deb belgilangan.

// ===================== B toifasi doirasi (8-band, 3-ilova) =====================
QC(["B","BE"], "catB", "Ruxsat etilgan to'liq vazni aynan 3 500 kg bo'lgan yuk furgonini (tirkamasiz) boshqarish uchun qaysi toifa yetarli?",
  ["«B»", "«C»", "«BE»", "«D»"],
  "«B» toifasi ruxsat etilgan to'liq vazni 3 500 kg dan oshmaydigan avtotransport vositalarini qamraydi, 3 500 kg shu chegaraga kiradi (YHQ 8-band).");
QC(["B","BE"], "catB", "Ruxsat etilgan to'liq vazni 3 600 kg bo'lgan yuk furgonini boshqarish uchun «B» toifasi yetarlimi?",
  ["Yo'q, «C» toifasi kerak", "Ha, bu «B» chegarasiga kiradi", "Ha, agar tirkama ulanmagan bo'lsa", "Yo'q, «BE» toifasi kerak"],
  "Ruxsat etilgan to'liq vazni 3 500 kg dan ortiq avtotransport vositalari «C» toifasiga kiradi (YHQ 8-band).");
QC(["B","BE"], "catB", "Haydovchi o'rindig'idan tashqari 7 ta o'rindig'i bor yengil avtomobilni (miniven) boshqarish uchun qaysi toifa kerak?",
  ["«B»", "«D»", "«BE»", "«C»"],
  "Haydovchi o'rindig'idan tashqari o'rindiqlar soni sakkiztadan ortiq bo'lmagan avtotransport vositalari «B» toifasiga kiradi (YHQ 8-band).");
QC(["B","BE"], "catB", "Haydovchi o'rindig'idan tashqari 9 ta o'rindiqli yo'lovchi mikroavtobusini boshqarish uchun qaysi toifa kerak?",
  ["«D»", "«B»", "«BE»", "«C»"],
  "Haydovchidan tashqari o'rindiqlar soni sakkiztadan ortiq yo'lovchi tashish vositasi «D» toifasiga kiradi, «B» chegarasi — 8 ta o'rindiq (YHQ 8-band).");
QC(["B","BE"], "catB", "«B» toifadagi avtomobil bazasida ishlab chiqarilgan, qo'l bilan boshqariladigan avtomobil qaysi toifaga kiradi?",
  ["«B»", "«A1»", "«BE»", "«D»"],
  "«B» toifasiga shuningdek ushbu avtomobillar bazasida ishlab chiqarilgan qo'l bilan boshqariladigan avtotransport vositalari ham kiradi (YHQ 8-band).");
QC(["B","BE"], "catB", "Jihozlangan vazni 1 200 kg bo'lgan yengil avtomobilga ruxsat etilgan to'liq vazni 1 500 kg bo'lgan tirkama ulamoqchisiz. Qaysi toifa kerak?",
  ["«BE»", "«B»", "«C»", "«CE»"],
  "Tirkamaning ruxsat etilgan to'liq vazni avtomobilning jihozlangan vaznidan ortiq bo'lsa, bunday tarkib «BE» toifasini talab qiladi (YHQ 8-band).");
QC(["B","BE"], "catB", "Ruxsat etilgan to'liq vazni 600 kg bo'lgan yengil tirkamani «B» toifali avtomobilga ulab yurish uchun qo'shimcha toifa kerakmi?",
  ["Yo'q, «B» toifasi yetarli", "Ha, tirkama uchun «BE» toifasi kerak", "Ha, «C» toifasi kerak", "Ha, «CE» toifasi kerak"],
  "Tirkamasining ruxsat etilgan to'liq vazni 750 kg dan ortiq bo'lmagan «B» toifadagi avtomobil ham «B» toifasiga kiradi (YHQ 8-band).");
QC(["B","BE"], "catB", "3-ilova tasnifiga ko'ra eng katta vazni 0,6 t bo'lgan yengil avtomobil tirkamasi qaysi toifaga kiradi?",
  ["O1", "O2", "O3", "N1"],
  "O1 toifasi — eng katta vazni 0,75 t dan oshmaydigan tirkamalar (YHQ 3-ilova).");
QC(["B","BE"], "catB", "3-ilova tasnifiga ko'ra eng katta vazni 1,5 t bo'lgan tirkama qaysi toifaga kiradi?",
  ["O2", "O1", "O3", "O4"],
  "O2 toifasi — eng katta vazni 0,75 t dan ortiq, lekin 3,5 t dan oshmaydigan tirkamalar (YHQ 3-ilova).");
QC(["B","BE"], "catB", "3-ilova tasnifiga ko'ra yuk tashishga mo'ljallangan, eng katta vazni 2,8 t bo'lgan furgon qaysi toifaga kiradi?",
  ["N1", "M1", "N2", "O2"],
  "N1 toifasi — yuk tashish uchun mo'ljallangan, eng katta vazni 3,5 t dan oshmaydigan avtotransport vositalari (YHQ 3-ilova).");
QC(["B","BE"], "catB", "3-ilova tasnifiga ko'ra eng katta vazni 4 t bo'lgan yuk avtomobili qaysi toifaga kiradi (shuning uchun «B» bilan boshqarib bo'lmaydi)?",
  ["N2", "N1", "N3", "M2"],
  "N2 toifasi — eng katta vazni 3,5 t dan ortiq, lekin 12 t dan oshmaydigan yuk avtomobillari (YHQ 3-ilova).");
QC(["B","BE"], "catB", "Eski namunadagi haydovchilik guvohnomasi bilan boshqa shaxsga tegishli avtomobilni boshqarish uchun guvohnomadan tashqari yana nima bo'lishi kerak?",
  ["Guvohnomaning taloni", "Avtomaktab sertifikati", "Tibbiy ma'lumotnoma", "Notarial guvohnoma nusxasi"],
  "Eski namunadagi guvohnoma bo'lsa, o'ziga tegishli bo'lmagan transport vositasini boshqarish uchun uning taloni mavjud bo'lishi kerak (YHQ 8-band).");

// ===================== Tezlik (78–81-bandlar) =====================
QC(["B","BE"], "catB", "Aholi punktidan tashqarida tirkamasiz va tirkamali yengil avtomobil uchun eng yuqori tezliklar o'rtasidagi farq qancha?",
  ["20 km/soat", "10 km/soat", "30 km/soat", "40 km/soat"],
  "Aholi punktidan tashqarida yengil avtomobilga 100 km/soat, tirkamali yengil avtomobilga 80 km/soat ruxsat etiladi (YHQ 79-band).");
QC(["B","BE"], "catB", "Ruxsat etilgan to'liq vazni 3 t bo'lgan pikapga (yuk avtomobili) tirkama ulangan. Aholi punktidan tashqarida eng yuqori tezlik:",
  ["70 km/soat", "80 km/soat", "90 km/soat", "100 km/soat"],
  "79-bandda tirkamali yuk avtomobillariga aholi punktidan tashqarida 70 km/soatdan oshirmasdan harakatlanish belgilangan (YHQ 79-band).");
QC(["B","BE"], "catB", "Tuman markazi bo'lmagan aholi punktida tirkamali yengil avtomobil uchun eng yuqori tezlik (belgilar yo'q):",
  ["70 km/soat", "60 km/soat", "80 km/soat", "50 km/soat"],
  "Aholi punktlarida (shahar va markazlardan tashqari) transport vositalariga 70 km/soatgacha ruxsat etiladi, tirkama uchun alohida past chegara bu yerda belgilanmagan (YHQ 78-band).");
QC(["B","BE"], "catB", "Avtomobilingiz texnik tavsifnomasidagi eng yuqori tezlik 90 km/soat. Aholi punktidan tashqaridagi yo'lda qanday tezlikdan oshirish taqiqlanadi?",
  ["90 km/soat", "100 km/soat", "80 km/soat", "110 km/soat"],
  "Tezlikni transport vositasining texnik tavsifnomasida ko'rsatilgan eng yuqori tezlikdan oshirish taqiqlanadi (YHQ 81-band).");
QC(["B","BE"], "catB", "Texnik tavsifiga ko'ra eng yuqori tezligi 78–80-bandlardagi chegaradan past bo'lgan yengil avtomobilga qaysi taniqlik belgisi o'rnatiladi?",
  ["«Tezlik cheklangan»", "«Haydovchilikni endi boshlagan»", "«Avtopoyezd»", "«Katta o'lchamli yuk»"],
  "Texnik tavsifnomadagi eng yuqori tezligi 78, 79, 80-bandlardagi tezlikdan kam bo'lgan mexanik transport vositasiga «Tezlik cheklangan» belgisi o'rnatiladi (YHQ 176-band).");
QC(["B","BE"], "catB", "Avtomobilingizga «Tezlik cheklangan» belgisi (60 km/soat) o'rnatilgan. Aholi punktidan tashqarida qanday tezlikdan oshirish mumkin emas?",
  ["60 km/soat", "100 km/soat", "80 km/soat", "90 km/soat"],
  "Tezlikni transport vositasiga o'rnatilgan «Tezlik cheklangan» taniqlik belgisida ko'rsatilganidan oshirish taqiqlanadi (YHQ 81-band).");
QC(["B","BE"], "catB", "Shahar ichida, 60 km/soat ruxsat etilgan ko'chada nosoz yengil avtomobilni shatakka olib ketmoqdasiz. Eng yuqori tezlik:",
  ["50 km/soat", "60 km/soat", "40 km/soat", "70 km/soat"],
  "Mexanik transport vositasini shatakka olgan transport vositasiga har qanday yo'lda 50 km/soatdan oshirish ruxsat etilmaydi (YHQ 80-band).");
QC(["B","BE"], "catB", "Aholi punktidan tashqarida tirkamali yengil avtomobilda 3.24 «90» belgisi ta'sir oralig'idasiz. Eng yuqori tezlik:",
  ["80 km/soat", "90 km/soat", "100 km/soat", "70 km/soat"],
  "3.24 belgisi faqat ko'rsatilganidan ortiq tezlikni taqiqlaydi, tirkamali yengil avtomobil uchun belgilangan 80 km/soat chegarasi saqlanadi (YHQ 79-band).");
QC(["B","BE"], "catB", "Aholi punktidan tashqarida to'liq vazni 3,5 t bo'lgan va 3,6 t bo'lgan yuk avtomobillari (tirkamasiz) uchun eng yuqori tezliklar farqi qancha?",
  ["20 km/soat", "10 km/soat", "Farq yo'q", "30 km/soat"],
  "3,5 t gacha yuk avtomobiliga 100 km/soat, 3,5 t dan ortiq yuk avtomobiliga 80 km/soat ruxsat etiladi (YHQ 79-band).");

// ===================== Yo'lovchilar, bolalar, kamarlar =====================
QC(["B","BE"], "catB", "Old o'rindiqda 14 yoshli o'smir o'tiribdi. U xavfsizlik kamarini taqishi shartmi?",
  ["Ha, old o'rindiq yo'lovchisi taqishi shart", "Yo'q, 16 yoshgacha kamar ixtiyoriy", "Faqat aholi punktidan tashqarida yurganda shart", "Yo'q, kamar faqat haydovchiga majburiy"],
  "Haydovchi va old o'rindiqdagi yo'lovchilar harakatni boshlashdan oldin kamar taqishlari shart; istisno faqat orqa o'rindiqdagi 12 yoshgacha bolalarga tegishli (YHQ 9-band).");
QC(["B","BE"], "catB", "Old o'rindiqda 5 yoshli bolani onasining tizzasida (bolalarni ushlab turuvchi qurilmasiz) tashish:",
  ["Taqiqlanadi", "Ona kamar taqqan bo'lsa mumkin", "Shahar ichida mumkin", "Qisqa masofaga mumkin"],
  "12 yoshga to'lmagan bolalarni bolalarni ushlab turuvchi maxsus qurilma o'rnatilmagan avtomobilning old o'rindig'ida tashish taqiqlanadi (YHQ 159-band).");
QC(["B","BE"], "catB", "Texnik tavsifnomaga ko'ra avtomobilingizda haydovchidan tashqari 4 ta o'rindiq bor. 5 nafar yo'lovchi olish:",
  ["Taqiqlanadi", "Beshinchisi bola bo'lsa mumkin", "Faqat shahar ichida mumkin", "Qisqa masofaga mumkin"],
  "Odam soni transport vositasining texnik tavsifnomasida ko'zda tutilgan miqdordan ortiq bo'lganda odam tashish taqiqlanadi (YHQ 159-band).");
QC(["B","BE"], "catB", "Yo'lovchilar soni me'yorda, lekin yuk bilan birga avtomobilning haqiqiy vazni ishlab chiqaruvchi belgilagan ruxsat etilgan vazndan oshdi. Bu:",
  ["Ruxsat etilmaydi", "Yo'lovchilar soni me'yorda bo'lgani uchun mumkin", "Faqat aholi punktida mumkin", "Tezlik 60 km/soatdan oshmasa mumkin"],
  "Odam tashishda transport vositasining haqiqiy vazni ishlab chiqargan korxona belgilagan ruxsat etilgan vazndan oshmasligi kerak (YHQ 159-band).");
QC(["B","BE"], "catB", "Ruxsat etilgan to'liq vazni 3 t bo'lgan pikapning ochiq yukxonasida bolalarni tashish:",
  ["Taqiqlanadi", "Borti 1,3 m bo'lsa mumkin", "Kattalar kuzatib borsa mumkin", "60 km/soatdan sekin bo'lsa mumkin"],
  "Bolalarni yuk avtomobillarining yukxonasida tashish taqiqlanadi (YHQ 159-band).");
QC(["B","BE"], "catB", "Yengil avtomobilga ulangan tirkama-uychada harakat vaqtida odam tashish:",
  ["Taqiqlanadi", "Faqat kattalarni tashish mumkin", "Uychada kamar bo'lsa mumkin", "Faqat aholi punktida mumkin"],
  "Yuk tashiladigan tirkamalar va tirkama-uychalarning yukxonasida odam tashish taqiqlanadi (YHQ 159-band).");
QC(["B","BE"], "catB", "Kasalligi tufayli kamar taqa olmaydigan old o'rindiq yo'lovchisiga kamar taqmaslikka qaysi holatda ruxsat beriladi?",
  ["Tibbiy ma'lumotnomasi bo'lsa", "Haydovchi rozilik bersa", "Yo'lovchi 60 yoshdan oshgan bo'lsa", "Safar 5 km dan qisqa bo'lsa"],
  "SSV belgilagan ro'yxatdagi kasallik bo'yicha tibbiy ma'lumotnomasi bor bemorlarga kamar taqmaslikka ruxsat beriladi (YHQ 9-band).");
QC(["B","BE"], "catB", "Konstruksiyasida kamar ko'zda tutilgan yengil avtomobilni haydovchi o'zi kamar taqmasdan boshqarishi:",
  ["Taqiqlanadi", "Shahar ichida ruxsat etiladi", "40 km/soatgacha ruxsat etiladi", "Qisqa masofada ruxsat etiladi"],
  "Haydovchiga konstruksiyada kamar ko'zda tutilgan bo'lsa, o'zi kamar taqmagan holda boshqarish taqiqlanadi (YHQ 12-band).");
QC(["B","BE"], "catB", "Harakat paytida haydovchiga salondan qaysi tana qismini chiqarish taqiqlanmagan?",
  ["Qo'lini", "Boshini", "Boshi va yelkasini", "Oyog'ini"],
  "Haydovchiga avtomobil salonidan o'z tana qismlarini (qo'ldan tashqari) chiqargan holda harakatlanish taqiqlanadi (YHQ 12-band).");
QC(["B","BE"], "catB", "Yengil avtomobilda yo'lovchilarni tushirayotganda haydovchi qaysi talabga rioya qilishi kerak?",
  ["To'liq to'xtagach, xavfsiz tushishini ta'minlash", "Sekin harakatda tushishga ruxsat berish", "Yo'lovchi o'zi javob beradi, talab yo'q", "Avariya ishorasini yoqib, harakat davomida eshik ochish"],
  "Haydovchi transport vositasi to'liq to'xtagandan keyin yo'lovchilarning chiqishi va tushishida xavfsizligini ta'minlashi, to'liq to'xtamaguncha eshiklarni ochmasligi shart (YHQ 158-band).");

// ===================== Yuk tashish (161–163-bandlar) =====================
QC(["B","BE"], "catB", "Yengil avtomobilning tom yukxonasidagi yuk balandligi 1,2 m. Bunday yuk bilan harakatlanish:",
  ["Mumkin emas — 1 m dan oshmasligi kerak", "Mumkin — chegara 1,5 m", "Mumkin — chegara 2 m", "Mumkin, agar yuk yengil va mahkam bog'langan bo'lsa"],
  "Yengil avtomobil tomidagi yukxonadagi yukning balandligi 1 metrdan oshmasligi kerak (YHQ 162-band).");
QC(["B","BE"], "catB", "Tom yukxonasiga maxsus moslama bilan mahkamlangan elektrosamokat balandligi 1,1 m. Bu:",
  ["Ruxsat — bunday vositalarga 1 m cheklovi qo'llanmaydi", "Taqiqlanadi — tomdagi har qanday yuk 1 m dan oshmasligi kerak", "Ruxsat, faqat aholi punktidan tashqarida", "Taqiqlanadi — tomda faqat velosiped tashish mumkin"],
  "Maxsus moslamalar bilan mustahkamlangan velosipedlar va individual harakatlanish vositalarini tashish 1 m balandlik chegarasidan mustasno (YHQ 162-band).");
QC(["B","BE"], "catB", "Tom yukxonasidagi taxtalar avtomobil gabaritidan orqaga 0,7 m chiqib turibdi. Bu:",
  ["Ruxsat etilmaydi — 0,5 m dan oshmasligi kerak", "Ruxsat etiladi — 1 m gacha mumkin", "Ruxsat, «Katta o'lchamli yuk» belgisi bo'lsa", "Ruxsat etiladi, agar yuk uchiga qizil mato bog'lansa"],
  "Yengil avtomobil tomidagi yukning uzunligi avtomobil gabaritidan 0,5 metrdan oshmasligi kerak (YHQ 162-band).");
QC(["B","BE"], "catB", "Orqaga o'rnatilgan velosiped tashuvchi moslamadagi velosipedlar orqa davlat raqam belgisini to'sib qo'ydi. YHQga ko'ra:",
  ["Bunday yuk tashishga yo'l qo'yilmaydi", "Kunduzi ruxsat etiladi", "Ruxsat, agar old davlat raqami yaxshi ko'rinsa", "Shahar tashqarisida ruxsat"],
  "Yuk tashqi yoritish asboblarini, davlat raqam belgilarini va taniqlik belgilarini to'smagan taqdirdagina tashishga yo'l qo'yiladi (YHQ 162-band).");
QC(["B","BE"], "catB", "Yo'lda tom yukxonasidagi yuk siljib, avtomobil muvozanati buzila boshladi. Haydovchi nima qilishi shart?",
  ["Buzilishni bartaraf etish, iloji bo'lmasa harakatni to'xtatish", "Tezlikni oshirib, manzilga tezroq yetish", "Avariya ishorasini yoqib, harakatni davom ettirish", "Yo'lovchidan yukni oyna orqali qo'lda ushlab borishni so'rab, davom etish"],
  "Yuk talablarga javob bermasa, haydovchi buzilishni bartaraf etish choralarini ko'rishi, iloji bo'lmasa keyingi harakatlanishni to'xtatishi shart (YHQ 162-band).");
QC(["B","BE"], "catB", "Yengil avtomobil tirkamasidagi yuk yon tomondan gabaritning chetki qismidan 0,5 m chiqib turibdi. Nima talab qilinadi?",
  ["«Katta o'lchamli yuk» belgisi bilan belgilash", "Hech qanday belgi talab qilinmaydi", "«Avtopoyezd» belgisini o'rnatish", "Faqat avariya ishorasini yoqib, sekin harakatlanish"],
  "Yon tomonga gabaritning chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk «Katta o'lchamli yuk» belgisi bilan belgilanishi kerak (YHQ 163-band).");
QC(["B","BE"], "catB", "Pikapning ochiq yukxonasida qum tashilmoqda, yo'lga chang ko'tarilib, qum sochilmoqda. YHQ bo'yicha qanday talab buzilgan?",
  ["Yuk yopilishi va chang ko'tarmasligi kerak edi", "Bunday yuk faqat tungi vaqtda tashilishi kerak edi", "Qum faqat tirkamada tashilishi kerak edi", "Talab buzilmagan, bu ruxsat etilgan"],
  "Ochiq platformada to'kiladigan yuklar brezent yoki qalin material bilan yopilishi, yuk chang ko'tarmasligi va yo'lni ifloslamasligi kerak (YHQ 162-band).");

// ===================== 3-ilova: M1/N1 nosozliklari =====================
QC(["B","BE"], "catB", "Yengil avtomobilingiz shinasidagi protektor naqshining qoldiq balandligi 1,8 mm. Undan foydalanish:",
  ["Ruxsat etiladi — chegara 1,6 mm", "Taqiqlanadi — yengil avtomobil uchun chegara 2,0 mm", "Taqiqlanadi — chegara 3,0 mm", "Faqat yozda ruxsat etiladi"],
  "M1 toifasi uchun protektor qoldiq balandligi 1,6 mm dan kam bo'lsa foydalanish taqiqlanadi; 1,8 mm bu me'yordan yuqori (YHQ 3-ilova, 5.1).");
QC(["B","BE"], "catB", "Yengil avtomobilga ulangan O1 toifali tirkama shinasining protektor qoldig'i 1,4 mm. Bu:",
  ["Taqiqlovchi nosozlik — me'yor 1,6 mm", "Ruxsat — tirkamalar uchun me'yor 1,0 mm", "Ruxsat — tirkama shinasiga me'yor yo'q", "Ruxsat — 0,8 mm dan ko'p bo'lsa yetarli"],
  "M1, N1, O1, O2 toifalari uchun protektor qoldiq balandligi 1,6 mm dan kam bo'lmasligi kerak (YHQ 3-ilova, 5.1).");
QC(["B","BE"], "catB", "Yengil avtomobil orqa o'qining bir g'ildiragiga sovuqqa chidamli (qishki), ikkinchisiga chidamsiz (yozgi) shina o'rnatilgan. Bu:",
  ["Foydalanishni taqiqlovchi shart", "O'lchami va naqshi bir xil bo'lsa ruxsat", "Faqat qishda ruxsat", "Faqat orqa o'qda ruxsat"],
  "Bitta o'qqa sovuqqa chidamli va chidamsiz shinalar o'rnatilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.5).");
QC(["B","BE"], "catB", "Yengil avtomobilning bitta o'qiga radial va diagonal konstruksiyali shinalar o'rnatilgan. Undan foydalanish:",
  ["Taqiqlanadi", "Bosim bir xil bo'lsa mumkin", "Shahar ichida mumkin", "60 km/soatgacha mumkin"],
  "Transport vositasining bitta o'qiga har xil konstruksiyali (diagonal va radial) shinalar o'rnatilishi taqiqlovchi shartdir (YHQ 3-ilova, 5.5).");
QC(["B","BE"], "catB", "Yengil avtomobilga uning turiga mos kelmaydigan o'lchamdagi shinalar o'rnatilgan. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Faqat zaxira g'ildirak bo'lsa mumkin", "Protektor yangi bo'lsa mumkin", "Faqat orqa o'qda mumkin"],
  "Shina o'lchamlari yoki yo'l qo'yilgan og'irlik transport vositasining turiga mos kelmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.4).");
QC(["B","BE"], "catB", "M1 toifadagi avtomobilning oldingi o'qiga ikkinchi ta'mirlash klassi bo'yicha qayta tiklangan shinalar o'rnatilgan. Bu:",
  ["Taqiqlovchi shart", "Ruxsat etilgan holat", "Faqat qishda taqiqlanadi", "Faqat taksi uchun taqiqlanadi"],
  "M1 toifadagi avtomobillarning oldingi o'qiga ikkinchi ta'mirlash klassi bo'yicha qayta tiklangan shina o'rnatish taqiqlanadi (YHQ 3-ilova, 5.7).");
QC(["B","BE"], "catB", "M1 toifadagi yengil avtomobil rul boshqaruvining lyuft yig'indisi 15°. Undan foydalanish:",
  ["Taqiqlanadi — M1 uchun chegara 10°", "Ruxsat — M1 uchun chegara 20°", "Ruxsat — M1 uchun chegara 25°", "Ruxsat — shaxsiy avtomobilda lyuft me'yorlanmaydi"],
  "M1 toifasi uchun yo'l qo'yilgan lyuft 10°, undan katta bo'lsa foydalanish taqiqlanadi (YHQ 3-ilova, 2.1).");
QC(["B","BE"], "catB", "N1 toifadagi (3,5 t gacha) yuk furgonida rul lyuft yig'indisi 15°. 3-ilovaga ko'ra:",
  ["Ruxsat etiladi — N1 uchun chegara 20°", "Taqiqlanadi — N1 uchun ham chegara 10°", "Taqiqlanadi — N1 uchun chegara 5°", "Ruxsat etiladi — N1 uchun chegara 30°"],
  "M2, M3, N1 toifalari uchun yo'l qo'yilgan lyuft 20°, shuning uchun 15° me'yor doirasida (YHQ 3-ilova, 2.1).");
QC(["B","BE"], "catB", "To'liq jihozlangan yengil avtomobilni to'xtab turish tormozi 20 foizli qiyalikda ushlab turolmayapti. Bu:",
  ["Nosozlik — kamida 25 foiz bo'lishi kerak", "Me'yor — yengil avtomobilga 16 foiz yetarli", "Me'yor — talab faqat yuk avtomobiliga", "Me'yor — qiyalik 20 foizdan oshmasa"],
  "To'liq jihozlangan yengil avtomobillarni to'xtab turish tormozi kamida 25 foizli qiyalikda ushlab turishi kerak (YHQ 3-ilova, 1.6).");
QC(["B","BE"], "catB", "Avtomobil old yon oynalarining yorug'lik o'tkazuvchanligi 65 foiz, ruxsatnoma yo'q. Undan foydalanish:",
  ["Taqiqlanadi — kamida 70 foiz kerak", "Ruxsat — chegara 50 foiz", "Ruxsat — chegara 60 foiz", "Ruxsat — 70 foiz talabi faqat old oynaga tegishli"],
  "Old va yon oynalarning yorug'lik o'tkazuvchanligi 70 foizdan kam bo'lsa (ruxsatnomasiz) foydalanish taqiqlanadi (YHQ 3-ilova, 7.4).");
QC(["B","BE"], "catB", "Yengil avtomobilning old yon oynalari qoraytirilgan, ammo belgilangan tartibda ruxsatnoma olingan. 70 foizlik talab qo'llaniladimi?",
  ["Yo'q, ruxsatnoma asosidagi oynalar istisno", "Ha, ruxsatnoma ahamiyatsiz", "Ha, ruxsatnoma faqat orqa oynalarga beriladi", "Yo'q, faqat kunduzi istisno"],
  "Ruxsatnoma asosida tusi o'zgartirilgan (qoraytirilgan) avtotransport vositalarining oynalari 70 foizlik talabdan mustasno (YHQ 3-ilova, 7.4).");
QC(["B","BE"], "catB", "Avtomobilning tovushli ishorasi (signal) ishlamayapti. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Faqat shaharda taqiqlanadi", "Nosozlik hisoblanmaydi", "Faqat taksi uchun taqiqlanadi"],
  "Tovushli ishora ishlamasa, transport vositasidan foydalanish taqiqlanadi (YHQ 3-ilova, 7.2).");
QC(["B","BE"], "catB", "Konstruksiyada ko'zda tutilgan orqa o'rindiq bosh suyanchiqlari olib tashlangan. Bu:",
  ["Taqiqlovchi shart", "Ruxsat etilgan qulaylik", "Faqat bolalar bo'lsa taqiq", "Faqat taksi uchun taqiq"],
  "Konstruksiyada ko'zda tutilgan xavfsizlik kamarlari va o'rindiqlarning bosh suyanchiqlari bo'lmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.13).");
QC(["B","BE"], "catB", "Yengil avtomobilning chap tashqi orqani ko'rish ko'zgusi sinib tushdi. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "O'ng ko'zgu bo'lsa ruxsat", "Ichki ko'zgu bo'lsa ruxsat", "Kunduzi ruxsat etiladi"],
  "Orqa tomonni ko'rsatuvchi ko'zgular soni, joylashuvi va turi belgilangan talablarga mos kelmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.1).");
QC(["B","BE"], "catB", "Yengil avtomobilning ishlatilgan gazlarni chiqarib tashlash tizimi (glushitel) teshilib, buzuq. Bu:",
  ["Foydalanishni taqiqlovchi shart", "Faqat shovqin kuchli bo'lsa taqiq", "Ruxsat etilgan kichik nuqson", "Faqat tex ko'rikda tekshiriladi"],
  "Ishlatilgan gazlarni chiqarib tashlash tizimi buzuq bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 6.3).");
QC(["B","BE"], "catB", "Avtomobil ishlatilgan gazlaridagi zararli moddalar va tutash darajasi belgilangan me'yordan ortiq. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Faqat ekologik zonada taqiqlanadi", "Faqat yuk avtomobiliga taqiq", "Faqat dizel dvigatelga taqiq"],
  "Ishlab chiqarilgan gazlar tarkibida zararli moddalar yoki tutash darajasi me'yordan ortiq bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 6.1).");
QC(["B","BE"], "catB", "Yengil avtomobil gidravlik tormoz yuritmasidan suyuqlik sizib chiqmoqda. Bu:",
  ["Taqiqlovchi nosozlik", "Tormoz ishlasa ruxsat", "Suyuqlik qo'shilsa ruxsat", "Faqat shahardan tashqarida taqiq"],
  "Gidravlik tormoz yuritmasining zichligi (germetikligi) buzilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 1.3).");
QC(["B","BE"], "catB", "Avtomobilga ishlab chiqaruvchi ko'zda tutmagan turdagi tormoz suyuqligi quyilgan. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Tormoz samarali bo'lsa ruxsat", "Faqat yozda ruxsat", "Faqat qisqa safarga ruxsat"],
  "Transport vositasining shu turida ko'zda tutilmagan tormoz suyuqligi yoki boshqa qismlar qo'llanilsa, foydalanish taqiqlanadi (YHQ 3-ilova, 1.1).");
QC(["B","BE"], "catB", "Galogen faralarga ishlab chiqaruvchi ko'zda tutmagan lampalar o'rnatilgan. 3-ilovaga ko'ra bu:",
  ["Taqiqlovchi shart", "Yorug'roq bo'lgani uchun ruxsat", "Faqat kunduzi ruxsat", "Faqat old faralarda ruxsat"],
  "Yoritish asboblarida ishlab chiqaruvchi korxona tomonidan ko'zda tutilmagan lampalardan foydalanilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.4).");
QC(["B","BE"], "catB", "Qishda faralar va orqa chiroqlar loy bilan qoplanib, yorug'ligi sezilarli pasaydi. 3-ilovaga ko'ra bu:",
  ["Foydalanishni taqiqlovchi shart", "Faqat tuman va yomg'irda taqiqlovchi shart", "Nosozlik emas, ob-havo holati", "Faqat yuk avtomobiliga taqiq"],
  "Tashqi yoritgichlar va nur qaytargichlar belgilangan tartibda ishlamayotgan yoki ifloslangan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.3).");
QC(["B","BE"], "catB", "Ishlab chiqarilishi to'xtatilgan yengil avtomobilga boshqa rusumdagi avtomobilning tashqi yoritgichlarini o'rnatish:",
  ["Ruxsat etiladi", "Taqiqlanadi", "Faqat DYHXX ruxsatnomasi bilan", "Faqat orqa chiroqlar uchun ruxsat"],
  "Ishlab chiqarilishi to'xtatilgan yengil avtomobillarga boshqa turdagi va rusumdagi transport vositalarining tashqi yoritgichlarini o'rnatishga ruxsat etiladi (YHQ 3-ilova, 3.1).");
QC(["B","BE"], "catB", "Avtomobilning old qismidagi nur qaytargichlar qanday rangda bo'lishi kerak?",
  ["Oq", "Qizil", "Zarg'aldoq", "Ko'k"],
  "Old qismga oq rangdan boshqa rangli nur qaytargichlar o'rnatilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.6).");
QC(["B","BE"], "catB", "Avtomobil tomiga ishlab chiqaruvchi ko'zda tutmagan nostandart yukxona tegishli ruxsatsiz o'rnatilgan. Bu:",
  ["Foydalanishni taqiqlovchi shart", "Yuk bo'lmasa ruxsat", "Faqat yuk bilan taqiq", "Yukxona mahkam o'rnatilgan bo'lsa ruxsat"],
  "Konstruksiyasida ko'zda tutilmagan nostandart yukxonalar belgilanmagan joyda va ruxsatsiz o'rnatilsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.8).");
QC(["B","BE"], "catB", "Yengil avtomobil yonilg'i idishining qopqog'i yo'qolgan. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Yonilg'i to'kilmasa ruxsat", "Faqat yozda ruxsat", "Nosozlik hisoblanmaydi"],
  "Konstruksiyada ko'zda tutilgan yonilg'i idishining qopqoqlari bo'lmasa yoki nosoz bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.5).");
QC(["B","BE"], "catB", "Konstruksiyada ko'zda tutilgan loy to'sgichlar yengil avtomobildan olib tashlangan. Bu:",
  ["Taqiqlovchi shart", "Faqat yomg'irda taqiq", "Ruxsat etilgan o'zgartirish", "Faqat yuk avtomobiliga taqiq"],
  "Transport vositasi konstruksiyasida ko'zda tutilgan orqa himoya vositasi, loy to'sgichlar bo'lmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.7).");
QC(["B","BE"], "catB", "Yengil tirkama ulagichida konstruksiyada ko'zda tutilgan ehtiyot po'lat arqon (zanjir) yo'q. Bu:",
  ["Taqiqlovchi shart", "Tirkama yengil bo'lsa ruxsat", "Faqat shahardan tashqarida taqiq", "Ulagich soz bo'lsa ruxsat"],
  "Tirkamaning tortish-tirkash moslamasi nosoz hamda konstruksiyada ko'zda tutilgan ehtiyot po'lat arqon (zanjir) yo'q bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.9).");
QC(["B","BE"], "catB", "Yengil avtomobilda tibbiyot qutichasi, avariya belgisi va jilet bor, ammo o't o'chirgich yo'q. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Shahar ichida ruxsat", "Faqat taksi uchun taqiq", "Kamchilik, lekin foydalanishga ruxsat"],
  "M1 va N1 toifadagi avtomobillar tibbiyot qutichasi, o't o'chirgich, avariya belgisi (yoki qizil chiroq) va nur qaytargichli jilet bilan jihozlanmagan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.10).");
QC(["B","BE"], "catB", "N1 toifadagi yuk furgoni uchun majburiy jihozlar ro'yxati M1 yengil avtomobilnikidan farq qiladimi?",
  ["Yo'q, ro'yxat bir xil", "Ha, qo'shimcha 2 ta o't o'chirgich", "Ha, oyna sindirish bolg'achasi qo'shiladi", "Ha, tibbiyot qutichasi talab qilinmaydi"],
  "3-ilovada M1, N1, N2, N3 toifalari uchun bir xil ro'yxat: tibbiyot qutichasi, o't o'chirgich, avariya belgisi (yoki qizil chiroq) va jilet (YHQ 3-ilova, 7.10).");
QC(["B","BE"], "catB", "N1 toifadagi (3,5 t gacha) yuk furgonida g'ildirak tirgaklari (kamida 2 ta) bo'lishi majburiymi?",
  ["Yo'q, bu talab M3, N2, N3 ga tegishli", "Ha, barcha N toifalariga majburiy", "Ha, tirkama ulanganda har doim majburiy", "Ha, faqat qishda majburiy"],
  "O'zi yurib ketishidan saqlovchi kamida ikkita tirgak M3, N2, N3 toifadagi transport vositalari uchun talab qilinadi (YHQ 3-ilova, 7.10).");
QC(["B","BE"], "catB", "Ichki ko'zguga osilgan katta bezak buyumi haydovchining oldinga ko'rinishini to'smoqda. 3-ilovaga ko'ra:",
  ["Bu foydalanishni taqiqlovchi shart", "Ko'zgu qisman ko'rinsa, ruxsat etiladi", "Faqat tunda taqiqlanadi", "Faqat taksilarga taqiqlanadi"],
  "Salondagi va yon ko'zgulardagi ko'rinishni cheklaydigan buyum yoki jihozlar taqilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.3).");
QC(["B","BE"], "catB", "Davlat raqam belgisi o'rnatish usuli belgilangan talablarga javob bermaydi (raqam qisman yopilgan). Bu:",
  ["Taqiqlovchi shart", "Raqam o'qilsa ruxsat", "Faqat orqa raqamga taqiq", "Shahar ichida ruxsat"],
  "Davlat raqam belgilari yoki ularni o'rnatish usuli belgilangan talablarga javob bermasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.15).");

QC(["B","BE"], "catB", "Yengil avtomobilda haydovchi o'rindig'ining holatini sozlovchi qurilma ishlamay qoldi. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "O'rindiq qotib qolsa ruxsat", "Faqat taksilarga taqiq", "Nosozlik hisoblanmaydi"],
  "Konstruksiyada ko'zda tutilgan haydovchi o'rindig'i holatini sozlovchi qurilma nosoz bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.5).");

// ===================== Foydalanish taqiqlari, taniqlik belgilari =====================
QC(["B","BE"], "catB", "Ruxsatnoma talab etiladigan qayta jihozlash yengil avtomobilda ruxsatsiz bajarilgan. Undan foydalanish:",
  ["Taqiqlanadi", "Tex ko'rikdan o'tsa mumkin", "Faqat shaxsiy maqsadda mumkin", "Faqat shahar ichida mumkin"],
  "Ruxsatnoma talab etilgan hollarda tegishli ruxsatsiz qayta jihozlangan transport vositalaridan foydalanish taqiqlanadi (YHQ 179-band).");
QC(["B","BE"], "catB", "Kuzovida yo'nalishsiz taksi rangli chizmasi, tomida taksi chirog'i bor avtomobil haydovchisida yo'lovchi tashish ruxsatnomasi yo'q. Bu avtomobildan foydalanish:",
  ["Taqiqlanadi", "Yo'lovchisiz bo'lsa mumkin", "Taksi chirog'i o'chiq bo'lsa mumkin", "Shaxsiy maqsadda mumkin"],
  "Taksi rangli chizmasi va (yoki) taksi chirog'i bo'lgan transport vositasidan haydovchida yo'lovchi tashish ruxsatnomasi bo'lmasa foydalanish taqiqlanadi (YHQ 179-band).");
QC(["B","BE"], "catB", "Yengil avtomobil tirkamasining orqa devoriga davlat raqamini katta o'lchamda yozish talab etiladimi?",
  ["Yo'q, yengil avtomobil tirkamalari istisno", "Ha, barcha turdagi tirkamalar uchun majburiy", "Ha, 750 kg dan og'ir bo'lsa", "Ha, shahar tashqarisida yurganda"],
  "Kuzov orqa devoriga raqam yozish talabi yuk avtomobillari, avtobuslar va tirkamalarga tegishli, yengil avtomobillar tirkamalari bundan mustasno (YHQ 175-band).");
QC(["B","BE"], "catB", "Yengil avtomobil tirkamasiga alohida davlat raqam belgisi o'rnatilishi kerakmi?",
  ["Ha, tirkamada ham bo'lishi shart", "Yo'q, avtomobil raqami yetarli", "Faqat 750 kg dan og'ir tirkamaga", "Faqat shahar tashqarisida yurganda"],
  "Mexanik transport vositalari va tirkamalarning ko'zda tutilgan joylarida tegishli namunadagi davlat raqam belgilari o'rnatilgan bo'lishi shart (YHQ 175-band).");
QC(["B","BE"], "catB", "Yengil avtomobilga tirkama ulandi. «Avtopoyezd» taniqlik belgisi o'rnatilishi kerakmi?",
  ["Yo'q, u yuk avtomobili va traktorlarga", "Ha, har qanday tirkama bilan", "Ha, 750 kg dan og'ir tirkama ulangan bo'lsa", "Ha, faqat tunda harakatlanganda"],
  "«Avtopoyezd» belgisi tirkamali yuk avtomobillari va g'ildirakli traktorlar (1,4 t va undan yuqori), tutashtirilgan avtobus va trolleybuslarga o'rnatiladi (YHQ 176-band).");
QC(["B","BE"], "catB", "Yengil avtomobilingizga turumlangan (shipli) shinalar o'rnatdingiz. «Turumlangan» belgisi qayerga o'rnatiladi?",
  ["Avtomobilning orqasiga", "Old va orqa tomoniga", "Old oynaning o'ng burchagiga", "Faqat old tomoniga"],
  "«Turumlangan» belgisi turumlangan shinali mexanik transport vositalarining orqasiga o'rnatiladi (YHQ 176-band).");
QC(["B","BE"], "catB", "«Haydovchilikni endi boshlagan» belgisi qaysi haydovchilar boshqarayotgan avtomobilga o'rnatiladi?",
  ["Haydovchilik staji 2 yildan kam bo'lganlar", "Haydovchilik staji 1 yildan kam bo'lganlar", "Haydovchilik staji 3 yildan kam bo'lganlar", "Haydovchilik staji 6 oydan kam bo'lganlar"],
  "Bu belgi haydovchilik staji 2 yildan kam bo'lgan haydovchilar boshqarayotgan mexanik transport vositalariga tegishli (YHQ 176-band).");
QC(["B","BE"], "catB", "«Haydovchilikni endi boshlagan» belgisi qanday ko'rinishda va qayerga o'rnatiladi?",
  ["Sariq kvadrat, qora «!», orqa tomonga", "Oq uchburchak, qora «O'», old va orqaga", "Ko'k kvadrat, oq «!», old tomonga", "Sariq doira, uchta qora nuqta, orqaga"],
  "Belgi — tomonlari 150 mm bo'lgan sariq kvadrat, ichida qora «!» tasviri; transport vositasining orqasiga o'rnatiladi (YHQ 176-band).");
QC(["B","BE"], "catB", "Nogironligi bo'lgan bolani tashiyotgan yengil avtomobilga qaysi taniqlik belgisi o'rnatilishi mumkin?",
  ["«Nogironligi bo'lgan shaxs»", "«Bolalar guruhini tashish»", "«Shifokor»", "«Kar haydovchi»"],
  "«Nogironligi bo'lgan shaxs» belgisi nogironligi bo'lgan shaxslarni yoki nogironligi bo'lgan bolalarni tashiyotgan transport vositalariga ham o'rnatiladi (YHQ 176-band).");
QC(["B","BE"], "catB", "Shaxsiy yengil avtomobilga tegishli ruxsatsiz sirena yoki ratsiya o'rnatish:",
  ["Taqiqlanadi", "O'chiq tursa mumkin", "Faqat ratsiya mumkin", "Faqat shahardan tashqarida mumkin"],
  "Haydovchiga tegishli ruxsatsiz transport vositalariga maxsus texnik jihoz (ratsiya, sirena va shu kabilar) o'rnatish taqiqlanadi (YHQ 12-band).");
QC(["B","BE"], "catB", "Harakat paytida navigatsiya ilovasidagi manzilni telefonni qo'lda ushlab o'zgartirish:",
  ["Taqiqlanadi", "Svetoforgacha bo'lsa mumkin", "Tezlik past bo'lsa mumkin", "Shahar tashqarisida mumkin"],
  "Boshqarish paytida telefondan foydalanish taqiqlanadi; faqat quloqchin yoki qo'llarni ishlatmasdan so'zlashuv imkonini beruvchi uskunalar orqali gaplashish mustasno (YHQ 12-band).");

// ===================== To'xtash, to'xtab turish, belgilar =====================
QC(["B","BE"], "catB", "Ruxsat etilgan to'liq vazni 3 t bo'lgan yuk furgoni 5.15 va 7.6.3 belgilari bilan belgilangan trotuar chetida to'xtab tura oladimi?",
  ["Yo'q, yuk furgoniga ruxsat yo'q", "Ha, 3,5 t gacha barcha transportga ruxsat", "Ha, yuk tushirish vaqtida istalgan muddat", "Ha, avariya ishorasi yoqilsa"],
  "Trotuar chetida to'xtab turishga faqat yengil avtomobillar, mototsikllar, mopedlar, skuterlar, velosipedlar va shu kabilarga tegishli belgilar bo'lganda ruxsat etiladi (YHQ 89-band).");
QC(["B","BE"], "catB", "Qatnov qismidan ajratilgan kengaytirilgan joyda (cho'ntakda) yengil avtomobilni chetga burchak ostida qo'yish:",
  ["Xalaqit bermasa ruxsat etiladi", "Taqiqlanadi, faqat parallel", "Faqat 7.6.1 qo'shimcha belgisi bo'lsa", "Faqat mototsikllarga ruxsat"],
  "Qatnov qismining ayrim kengaytirilib ajratilgan joylarida boshqa ishtirokchilarga xalaqit bermaslik sharti bilan boshqacha tartibda qo'yishga ham ruxsat etiladi (YHQ 89-band).");
QC(["B","BE"], "catB", "Aholi punktidagi bir tomonlama yo'lda ruxsat etilgan to'liq vazni 3 t bo'lgan furgonni chap tomonda to'xtatib turish (boshqa taqiq yo'q):",
  ["Ruxsat etiladi", "Faqat yuk ortish-tushirish uchun", "Taqiqlanadi", "Faqat 10 daqiqagacha"],
  "Bir tomonlama yo'lda chap tomonda to'xtash ruxsat etilgan; faqat yuk ortish-tushirish cheklovi 3,5 t dan ortiq yuk transportiga tegishli (YHQ 88-band).");
QC(["B","BE"], "catB", "3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan» belgisida vazn ko'rsatilmagan. Ruxsat etilgan to'liq vazni 3 t bo'lgan furgon bu yerda harakatlana oladimi?",
  ["Ha, belgi 3,5 t dan ortiqlarga tegishli", "Yo'q, belgi barcha yuk avtomobillariga", "Faqat yuksiz harakatlanayotgan bo'lsa ruxsat", "Faqat ish kunlari"],
  "Vazn ko'rsatilmagan 3.4 belgisi ruxsat etilgan to'liq vazni 3,5 tonnadan ortiq yuk avtomobillari harakatini taqiqlaydi (YHQ 1-ilova, 3.4).");
QC(["B","BE"], "catB", "Turar joy dahasida ruxsat etilgan to'liq vazni 3 t bo'lgan furgonni dvigatelni o'chirib to'xtatib turish uchun maxsus ajratilgan joy shartmi?",
  ["Yo'q, talab 3,5 t dan ortiqlarga", "Ha, barcha yuk avtomobillariga", "Ha, agar furgonda yuk bo'lsa shart", "Yo'q, lekin 1 soatgacha"],
  "Turar joy dahalarida maxsus ajratilgan joydan tashqarida to'xtab turish taqiqi ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobillariga tegishli (YHQ 124-band).");
QC(["B","BE"], "catB", "Yo'l belgisi 7.4.9 qo'shimcha belgisi bilan o'rnatilgan. Uning ta'siri kimga tatbiq etiladi?",
  ["Elektromobillarga", "Yengil avtomobillarga", "Yo'nalishsiz taksilarga", "Barcha transport vositalariga"],
  "7.4.9 qo'shimcha belgisi bilan o'rnatilgan belgining ta'siri elektromobillarga tatbiq etiladi (YHQ 1-ilova, 7.4.9).");
QC(["B","BE"], "catB", "Yo'l belgisi 7.4.10 qo'shimcha belgisi bilan o'rnatilgan. Uning ta'siri qaysi yengil transportga tatbiq etiladi?",
  ["Yo'nalishsiz taksilarga", "Yo'nalishli taksilarga", "Elektromobillarga", "Barcha yengil avtomobillarga"],
  "7.4.10 qo'shimcha belgisi bilan o'rnatilgan belgining ta'siri yo'nalishsiz taksilarga tatbiq etiladi (YHQ 1-ilova, 7.4.10).");
QC(["B","BE"], "catB", "6.3.2 servis belgisi nimani bildiradi?",
  ["Ko'p tarmoqli yonilg'i quyish shoxobchasi", "Elektromobillarni quvvatlash shoxobchasi", "Avtomobillarni yuvish joyi", "Avtomobillarga texnik xizmat ko'rsatish joyi"],
  "6.3.2 — avtomobillarga ko'p tarmoqli yonilg'i quyish shoxobchasi; 6.3.3 — elektromobillarni quvvatlash, 6.4 — texnik xizmat, 6.5 — yuvish joyi (YHQ 1-ilova, 6.3.2).");
QC(["B","BE"], "catB", "Avtomobilingiz «o'rta» ekologik toifaga ega. 3.35 belgisi o'rnatilgan ekologik zonaga kirish:",
  ["Taqiqlanadi", "Faqat dam olish kunlari mumkin", "Mumkin, faqat «zararli» taqiqlangan", "Dvigatel issiq bo'lsa mumkin"],
  "3.35 belgisi ekologik zona hududida «o'rta» va «zararli» ekologik toifalarga ega avtotransport vositalari harakatini taqiqlaydi (YHQ 1-ilova, 3.35).");
QC(["B","BE"], "catB", "Yengil avtomobil va tirkamadan iborat tarkib uzunligi 8 m. Aholi punktidan tashqaridagi ikki tasmali ikki tomonlama yo'lda (quvib o'tish ruxsat, oqim siyrak) nima talab qilinadi?",
  ["Quvib o'tuvchilarga joy qoldirib masofa saqlash", "Faqat yo'l yoqasidan harakatlanish", "Tezlikni 50 km/soatgacha kamaytirish", "Har 5 km da to'xtab, orqadagilarni o'tkazib yuborish"],
  "Uzunligi 7 metrdan ortiq transport vositalari (tarkiblari) haydovchilari quvib o'tayotganlar oldingi qatoriga bemalol qayta tizilishi uchun masofa saqlashlari kerak (YHQ 74-band).");

// ===================== Shatakka olish =====================
QC(["B","BE"], "catB", "Nosoz yengil avtomobilni egiluvchan ulagich bilan shatakka olmoqdasiz. Shatakdagi avtomobil salonida rulda haydovchidan tashqari yo'lovchilar bo'lishi mumkinmi?",
  ["Ha, yengil avtomobil uchun bu taqiqlanmagan", "Yo'q, shatakdagi avtomobilda faqat haydovchi bo'ladi", "Faqat bitta yo'lovchi mumkin", "Faqat qattiq ulagichda mumkin"],
  "Odam bo'lishi shatakdagi avtobus, trolleybus, yuk avtomobili yukxonasida (qisman ortishda — kabinada ham) taqiqlanadi; yengil avtomobil saloni bu ro'yxatda yo'q (YHQ 143-band).");
QC(["B","BE"], "catB", "Egiluvchan ulagichga kamida nechta ogohlantiruvchi taniqlik belgisi (bayroqcha) o'rnatiladi?",
  ["2 ta", "1 ta", "3 ta", "4 ta"],
  "Egiluvchan ulagichga kamida ikkita taniqlik belgisi o'rnatiladi (YHQ 177-band).");
QC(["B","BE"], "catB", "Yengil avtomobilni qattiq ulagich bilan shatakka olmoqdasiz, avtomobillar orasidagi masofa 3,5 m. Bu:",
  ["Ruxsat — 4 m dan oshmasligi kerak", "Qoidabuzarlik — kamida 4 m kerak", "Qoidabuzarlik — 4–6 m bo'lishi kerak", "Ruxsat — 8 m gacha mumkin"],
  "Qattiq ulagich bilan shatakka olishda masofa 4 metrdan ko'p bo'lmasligi kerak (YHQ 144-band).");
QC(["B","BE"], "catB", "Egiluvchan ulagich (tros) bilan shatakka olishda avtomobillar orasidagi masofa 3 m. Bu:",
  ["Qoidabuzarlik — 4–6 m bo'lishi kerak", "Ruxsat — 4 m dan oshmasa bo'ldi", "Ruxsat — 2–3 m tavsiya etiladi", "Ruxsat — tros bilan masofa me'yorlanmaydi"],
  "Egiluvchan ulagich bilan shatakka olishda transport vositalari orasidagi masofa 4–6 metr oralig'ida bo'lishi kerak (YHQ 144-band).");

// ===================== Xavfsiz haydash tavsiyalari =====================
QC(["B","BE"], "catB", "Quruq yo'lda oldingi avtomobilgacha xavfsiz oraliqni oddiy usulda qanday baholash tavsiya etiladi?",
  ["Kamida 2–3 soniyalik vaqt oralig'i", "Doimo 10 metr oraliq", "Bir avtomobil uzunligi oraliq", "Oldingi raqam o'qilsa, bu yetarli oraliq"],
  "Oldingi avtomobil biror belgidan o'tgach, siz shu joyga kamida 2–3 soniyadan keyin yetib kelishingiz kerak (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Ho'l yoki sirpanchiq yo'lda «soniyalar qoidasi» bo'yicha oraliqni qanday o'zgartirish tavsiya etiladi?",
  ["Kamida ikki baravar oshirish", "O'zgartirmaslik kerak", "Ikki baravar qisqartirish", "Faqat 1 soniyaga oshirish yetarli"],
  "Ilashish kamayganda tormoz yo'li uzayadi, shuning uchun oraliqni kamida ikki baravar oshirish tavsiya etiladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "ABS tormoz yo'lini har doim qisqartiradimi?",
  ["Yo'q, asosiy foydasi — boshqaruvni saqlash", "Ha, har qanday qoplamada ikki baravar", "Ha, ayniqsa yumshoq qor va shag'alda", "Ha, shuning uchun oraliqni qisqartirsa bo'ladi"],
  "ABS g'ildiraklar qulflanishining oldini olib, tormozlashda rul bilan boshqarish imkonini saqlaydi; ayrim qoplamalarda tormoz yo'li qisqarmasligi ham mumkin (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Old g'ildirak yetakchi avtomobilda sirpanchiq burilish ichida gazni keskin bosish ko'pincha nimaga olib keladi?",
  ["Old g'ildiraklar sirpanib, tashqariga suriladi", "Orqa qism darhol burilish ichkarisiga savrulib ketadi", "Avtomobil burilishga keskinroq kiradi", "Tormoz tizimi avtomatik ishga tushadi"],
  "Old yetakchi avtomobilda tortish kuchi old g'ildiraklar ilashuvini «yeb qo'yadi», natijada avtomobil burilishdan tashqariga suriladi; gazni ravon bo'shatish kerak (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Orqa g'ildirak yetakchi avtomobilda qorli burilishda gazni keskin bosish qanday xavf tug'diradi?",
  ["Orqa o'q sirpanib, avtomobil savrulishi mumkin", "Old g'ildiraklar qulflanib, rul butunlay ishlamay qoladi", "Avtomobil yanada barqaror bo'lib qoladi", "Tezlik avtomatik ravishda kamayadi"],
  "Orqa yetakchi g'ildiraklarga ortiqcha tortish kuchi berilsa, ular ilashuvni yo'qotib, orqa qism sirpanishi (savrulish) boshlanadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Barqarorlik tizimi (ESP) asosan nima qiladi?",
  ["G'ildiraklarni alohida tormozlab, yo'nalishni saqlaydi", "Tormoz yo'lini ikki baravar qisqartiradi", "Shinalarning yo'lga ilashuvini oshiradi", "Har qanday tezlik va qoplamada burilishni xavfsiz qiladi"],
  "ESP sirpanish boshlanganda alohida g'ildiraklarni tormozlab va dvigatel quvvatini kamaytirib, avtomobilni yo'nalishda ushlashga yordam beradi, lekin fizika chegaralarini oshirmaydi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Qayta tizilishdan oldin «ko'r zona»ni tekshirishning to'g'ri usuli qaysi?",
  ["Ko'zgulardan so'ng yelka orqali qisqa qarash", "Faqat ichki ko'zguga qarash yetarli", "Faqat burilish ko'rsatkichini yoqish", "Tezlikni oshirib, qo'shni tasmaga tezda o'tib olish"],
  "Ko'zgular yon tomondagi barcha sohani ko'rsatmaydi, shuning uchun qayta tizilishdan oldin yelka orqali qisqa qarash tavsiya etiladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Tashqi yon ko'zgularni qanday sozlash tavsiya etiladi?",
  ["O'z kuzovingiz ozgina, asosan qo'shni tasma ko'rinsin", "Ko'zguda asosan o'z kuzovingizning yon qismi ko'rinsin", "Pastga, g'ildiraklar ko'rinadigan qilib", "Ichki ko'zgu bilan bir xil soha ko'rinsin"],
  "Yon ko'zguda o'z avtomobilingiz cheti ozgina ko'rinib, qolgan qismi qo'shni tasmani qamrab olsa, ko'r zona kichrayadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Katta yuk avtomobili yonida harakatlanayotganda yengil avtomobil uchun qaysi joy eng xavfli?",
  ["Uning yonida va ortida, ko'zgusida ko'rinmaydigan joy", "Undan 100 m oldinda, uning ko'zgusida yaxshi ko'rinadigan joy", "Qarama-qarshi tasmada, undan uzoqroqda", "Undan 5 soniya orqada, markazda"],
  "Yuk avtomobilining yon va orqa qismida katta ko'r zonalar bor; u yerda uzoq yurmaslik va ko'zgusida ko'rinadigan joyda bo'lish tavsiya etiladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Tunda qarama-qarshi avtomobil faralari ko'zni qamashtirayotganda nigohni qayerga qaratish tavsiya etiladi?",
  ["Yo'lning o'ng cheti yoki chizig'iga", "To'g'ridan-to'g'ri faralarga", "Qarama-qarshi tasma o'rtasiga, faralar chetiga", "Asboblar paneliga"],
  "Nigohni o'ng chetga qaratish yo'nalishni saqlashga yordam beradi va ko'zning qamashishini kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Haydovchida «mikrouyqu» xavfi qaysi paytlarda eng yuqori bo'ladi?",
  ["Tungi soat 2–6 oralig'ida va tushdan keyin", "Ertalab soat 9–11 oralig'ida, nonushtadan keyin", "Faqat qisqa shahar safarlarida", "Faqat ovqatdan oldin"],
  "Organizmning tabiiy ritmi tufayli tun ikkinchi yarmi va tushdan keyingi soatlarda uyquchanlik kuchayadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Uzoq safarda dam olish bo'yicha keng tarqalgan tavsiya qaysi?",
  ["Har 2 soatda kamida 15 daqiqa tanaffus", "Har 6 soatda 5 daqiqa tanaffus", "Charchamaguncha to'xtamaslik", "Faqat yonilg'i tugaganda yoki quyishda to'xtash"],
  "Har 2 soatda (taxminan 200 km) kamida 15 daqiqalik tanaffus charchoq to'planishining oldini oladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Haydovchida kuchli charchoq belgilari paydo bo'ldi. Eng samarali chora qaysi?",
  ["Xavfsiz joyda to'xtab, dam olish yoki qisqa uxlash", "Oynani ochib, musiqani baland qo'yish", "Kofe ichib, safarni davom ettirish", "Tezlikni oshirib, safarni imkon qadar tezroq tugatish"],
  "Oyna ochish yoki musiqa charchoqni faqat qisqa vaqtga yashiradi; ishonchli chora — to'xtab dam olish (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Quyidagilardan qaysi biri haydovchi charchog'ining belgisi hisoblanadi?",
  ["Tez-tez esnash va tasmadan chiqib ketish", "Ko'zgularga muntazam ravishda qarab turish odati", "Tezlikni yo'lga mos tanlash", "Oraliq masofani bir xil saqlash"],
  "Tez-tez esnash, ko'z qovoqlarining og'irlashishi, tasmada «suzish» va belgilarni o'tkazib yuborish charchoq belgilaridir (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Chaqaloq uchun bolalar o'rindig'ini qanday o'rnatish tavsiya etiladi?",
  ["Harakatga teskari, orqaga qaragan holda", "Harakat yo'nalishiga, oldinga qaragan holda", "Old o'rindiqda, oldinga qaratib", "Orqa o'rindiqda, yonga qaratib"],
  "Orqaga qaragan o'rindiq to'qnashuvda chaqaloqning boshi va bo'ynini yaxshiroq himoya qiladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Old yostiqchasi (airbag) faol bo'lgan old o'rindiqqa orqaga qaragan bolalar o'rindig'ini o'rnatish:",
  ["Xavfli — yostiqcha o'chirilishi kerak", "Xavfsiz — yostiqcha bolani himoya qiladi", "Xavfsiz — kamar bilan mahkamlansa", "Xavfsiz — bola uxlab ketsa"],
  "Ochilgan yostiqcha orqaga qaragan o'rindiqqa katta kuch bilan uriladi va bolaga og'ir jarohat yetkazishi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Bolani kattalar qo'lida (tizzasida) tashish nima uchun xavfli?",
  ["To'qnashuvda kattalar bolani ushlab qololmaydi", "Bola haydovchini chalg'itmaydi", "Faqat uzoq safarda noqulay", "Xavfli emas, onaning kamari bolani ham himoya qiladi"],
  "Hatto past tezlikdagi to'qnashuvda ham inersiya kuchi shunchalik kattaki, bolani qo'lda ushlab qolish imkonsiz (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Orqa eshiklardagi «bolalar qulfi» nima uchun xizmat qiladi?",
  ["Eshik ichkaridan ochilishining oldini oladi", "Oynalarni avtomatik yopib qo'yadi", "Bolalar kamarini yechib bo'lmaydigan qilib qo'yadi", "Eshikni tashqaridan bloklaydi"],
  "Bolalar qulfi yoqilganda orqa eshikni faqat tashqaridan ochish mumkin, bu harakatda tasodifiy ochilishning oldini oladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Issiq kunda bolani yopiq avtomobilda «bir necha daqiqaga» qoldirish:",
  ["Qisqa muddatga ham hayot uchun xavfli", "Oyna ozgina ochiq qoldirilsa, xavfsiz hisoblanadi", "Soyada bo'lsa xavfsiz", "10 daqiqagacha xavfsiz"],
  "Yopiq salonda harorat bir necha daqiqada keskin ko'tariladi, bola organizmi esa tez qiziydi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Bolaga qo'shimcha o'rindiq (buster) odatda qachongacha tavsiya etiladi?",
  ["Bo'yi taxminan 135–150 sm ga yetguncha", "Bola 3 yoshga to'lguncha", "Bola maktabga borguncha, yoshidan qat'i nazar", "Vazni 10 kg ga yetguncha"],
  "Kattalar kamari to'g'ri (yelka va son ustidan) o'tishi uchun bola bo'yi taxminan 135–150 sm bo'lguncha buster ishlatiladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Yoqilg'i tejash uchun eng samarali haydash odati qaysi?",
  ["Ravon tezlanish va sekinlashishni oldindan rejalash", "Har svetoforda tez start olish", "Doimo past uzatmada, yuqori aylanishlarda harakatlanish", "Oxirgi lahzada keskin tormozlash"],
  "Yo'l vaziyatini oldindan ko'rib, ravon tezlanish va inersiyadan foydalanish yoqilg'i sarfini sezilarli kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Shinalardagi havo bosimi me'yordan past bo'lsa nima bo'ladi?",
  ["Sarf oshadi, boshqaruv yomonlashadi", "Sarf kamayadi, yo'lga ilashish esa oshadi", "Faqat shovqin kamayadi", "Tormoz yo'li qisqaradi"],
  "Past bosim dumalash qarshiligini oshiradi, shina qiziydi, boshqaruvchanlik va barqarorlik yomonlashadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Bo'sh tom yukxonasi (boks)ni doim olib yurish yoqilg'i sarfiga qanday ta'sir qiladi?",
  ["Havo qarshiligi oshib, sarf ko'payadi", "Sarfga mutlaqo ta'sir qilmaydi", "Avtomobil barqarorligi oshib, sarf kamayadi", "Faqat shaharda sarfni oshiradi"],
  "Tomdagi yukxona aerodinamik qarshilikni oshiradi, ayniqsa yuqori tezlikda sarf sezilarli ko'payadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Mexanik uzatmali avtomobilda tejamkor haydash uchun uzatmalarni qanday almashtirish tavsiya etiladi?",
  ["Dvigatelni qiynamay, imkon qadar erta yuqoriga", "Har uzatmada maksimal aylanishgacha", "Doimo 2-uzatmada yurish", "Yuqori uzatmaga faqat shahar tashqarisida o'tish"],
  "Past aylanishlarda (dvigatelni qiynamagan holda) yuqori uzatmada yurish yoqilg'i sarfini kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Shina bosimini qachon tekshirish to'g'ri hisoblanadi?",
  ["Sovuq shinada, ishlab chiqaruvchi me'yorida", "Uzoq safardan so'ng darhol, shina qizib turganda", "Faqat ko'z bilan, shina ko'rinishiga qarab", "Faqat yilda bir marta, qish oldidan"],
  "Qizigan shinada bosim yuqori ko'rinadi, shuning uchun tekshiruv sovuq shinada, ishlab chiqaruvchi ko'rsatgan qiymatga ko'ra bajariladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Rulni ushlashning tavsiya etiladigan holati qaysi?",
  ["Soat siferblatidagi «9 va 3» holati", "Bir qo'l bilan «12» holatida", "Ikki qo'l bilan pastdan «6» holatida", "Bir qo'l rulda, biri richagda doimo"],
  "«9 va 3» holati rulni aniq boshqarish va xavfsiz manyovr qilish imkonini beradi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "O'rindiqning bosh suyanchig'i qanday sozlanishi kerak?",
  ["Yuqori qismi taxminan bosh tepasi darajasida", "Bo'yin darajasida, boshdan biroz uzoqroq qilib", "Eng pastki holatda", "Yelka darajasida"],
  "To'g'ri sozlangan bosh suyanchig'i orqadan zarbada bo'yinning keskin egilishidan himoya qiladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Haydovchi o'rindig'ining pedallargacha masofasi qanday tanlanadi?",
  ["Tormoz to'liq bosilganda tizza ozgina bukik qolsin", "Oyoq pedalga zo'rg'a yetsin, tizza to'liq to'g'ri bo'lsin", "Tizzalar rulga tegib tursin", "Faqat qulaylikka qarab, pedallarsiz"],
  "Tizza ozgina bukik bo'lsa, tormozni to'liq kuch bilan bosish mumkin va to'qnashuvda oyoq jarohati kamayadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Xavfsizlik kamarining yelka qismi qanday o'tishi kerak?",
  ["Yelka o'rtasi va ko'krak orqali", "Bo'yin ustidan", "Qo'ltiq ostidan", "Yelkadan tashqarida, qo'l ustidan"],
  "Kamar yelka o'rtasidan va ko'krak suyagi orqali, bel qismi esa son suyaklari ustidan o'tishi kerak (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Salonda mahkamlanmagan og'ir buyumlar (orqa tokchada, o'rindiqda) nima uchun xavfli?",
  ["Keskin tormozda oldinga uchib, jarohat yetkazadi", "Ular faqat yoqilg'i sarfini biroz oshirishi mumkin", "Faqat shovqin chiqaradi", "Xavfli emas, ular yengil"],
  "To'qnashuvda buyumning og'irligi tezlikka mutanosib ravishda ko'p barobar ortadi va u yo'lovchilarni jarohatlashi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Bordyurli ko'chada nishablikka qarab (pastga) to'xtab turishda qo'shimcha xavfsizlik chorasi qaysi?",
  ["Old g'ildiraklarni bordyur tomonga burish", "G'ildiraklarni to'g'ri qoldirish", "Old g'ildiraklarni qatnov qismi tomonga burish", "Neytral uzatmani qoldirish"],
  "Avtomobil o'z-o'zidan yurib ketsa, bordyurga burilgan g'ildiraklar uni to'xtatadi; to'xtab turish tormozini ham tortish kerak (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Burilishda tezlikni qachon kamaytirish to'g'ri?",
  ["Burilishga kirishdan oldin, to'g'ri chiziqda", "Burilish o'rtasida, rul burilgan holda keskin tormozlab", "Burilishdan chiqqandan keyin", "Burilish ichida gazni oshirib"],
  "Burilishdan oldin to'g'ri chiziqda sekinlashish shinalar ilashuvini burilish uchun saqlab qoladi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Chuqur ko'lmakdan o'tgandan keyin tormozlar bo'yicha nima qilish tavsiya etiladi?",
  ["Yengil bosib quritish va ishlashini tekshirish", "Tezlikni oshirib, havoda quritish", "To'xtab turish tormozini biroz ko'tarib harakatlanish", "Tormozga umuman tegmaslik"],
  "Ho'l tormoz kolodkalari samaradorligini yo'qotadi; bir necha marta yengil bosish ularni quritadi (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Harakat paytida old shina to'satdan yorilsa, qanday harakat qilish kerak?",
  ["Rulni mahkam ushlab, keskin tormozsiz sekinlashish", "Darhol tormozni oxirigacha bosish", "Rulni yorilgan shinaga teskari tomonga keskin burish", "Gazni oshirib, yo'nalishni tiklash"],
  "Keskin tormoz yoki rul harakati boshqaruvni yo'qotishga olib keladi; rulni mahkam ushlab, ravon sekinlashib, yo'l chetiga chiqish kerak (Xavfsiz haydash tavsiyalari).");
QC(["B","BE"], "catB", "Qishki shinalardan foydalanish qachon afzal hisoblanadi?",
  ["Havo harorati doimiy +7°C dan past bo'lganda", "Faqat qor yoqqan kunlarda", "Havo harorati +20°C dan past bo'lgan barcha kunlarda", "Faqat tog' yo'llarida"],
  "+7°C dan past haroratda yozgi shina rezinasi qotib, ilashuvi yomonlashadi, qishki shina esa yumshoq qoladi (Xavfsiz haydash tavsiyalari).");
