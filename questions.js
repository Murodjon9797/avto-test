// =====================================================================
//  SAVOLLAR BAZASI — O'zbekiston Respublikasi Yo'l harakati qoidalari
//  (VM 12.04.2022 yildagi 172-son qarori bilan tasdiqlangan YHQ) asosida.
//  Savollar mualliflik — rasmiy imtihon savollarining nusxasi emas.
//
//  Yangi savol qo'shish:  Q(mavzu, savol, [TO'G'RI, xato1, xato2, ...], izoh, rasm)
//  • To'g'ri javob HAR DOIM ro'yxatda birinchi yoziladi — ilova o'zi aralashtiradi.
//  • rasm — SIGNS dagi kalit yoki "img/fayl.png" / "img/fayl.gif".
//  • Yangi savollarni faqat OXIRIGA qo'shing (id tartib bo'yicha beriladi,
//    foydalanuvchilarning xatolar ro'yxati id ga bog'langan).
// =====================================================================

const SIGNS = {
  stop: `<svg viewBox="0 0 100 100"><polygon points="30,2 70,2 98,30 98,70 70,98 30,98 2,70 2,30" fill="#fff"/><polygon points="31,6 69,6 94,31 94,69 69,94 31,94 6,69 6,31" fill="#d32f2f"/><text x="50" y="60" font-size="26" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">STOP</text></svg>`,
  giveway: `<svg viewBox="0 0 100 100"><polygon points="4,8 96,8 50,94" fill="#d32f2f"/><polygon points="20,17 80,17 50,74" fill="#fff"/></svg>`,
  noentry: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><rect x="18" y="42" width="64" height="16" fill="#fff"/></svg>`,
  mainroad: `<svg viewBox="0 0 100 100"><polygon points="50,2 98,50 50,98 2,50" fill="#fff" stroke="#333" stroke-width="2"/><polygon points="50,16 84,50 50,84 16,50" fill="#fbc02d"/></svg>`,
  mainroadend: `<svg viewBox="0 0 100 100"><polygon points="50,2 98,50 50,98 2,50" fill="#fff" stroke="#333" stroke-width="2"/><polygon points="50,16 84,50 50,84 16,50" fill="#fbc02d"/><line x1="22" y1="78" x2="78" y2="22" stroke="#111" stroke-width="8"/></svg>`,
  nomotion: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="34" fill="#fff"/></svg>`,
  nostopping: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#1565c0"/><line x1="25" y1="25" x2="75" y2="75" stroke="#d32f2f" stroke-width="9"/><line x1="75" y1="25" x2="25" y2="75" stroke="#d32f2f" stroke-width="9"/></svg>`,
  noparking: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#1565c0"/><line x1="25" y1="25" x2="75" y2="75" stroke="#d32f2f" stroke-width="9"/></svg>`,
  crossing: `<svg viewBox="0 0 100 100"><rect x="2" y="2" width="96" height="96" rx="6" fill="#1565c0"/><polygon points="50,10 92,88 8,88" fill="#fff"/><circle cx="52" cy="38" r="6" fill="#111"/><path d="M50 46 L46 64 L38 80 M47 62 L58 80 M49 50 L60 58 M49 50 L40 58" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  danger: `<svg viewBox="0 0 100 100"><polygon points="50,4 97,92 3,92" fill="#d32f2f"/><polygon points="50,20 83,83 17,83" fill="#fff"/><rect x="46" y="38" width="8" height="28" fill="#111"/><rect x="46" y="70" width="8" height="8" fill="#111"/></svg>`,
  noovertake: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#fff"/><rect x="26" y="40" width="20" height="30" rx="5" fill="#d32f2f"/><rect x="54" y="40" width="20" height="30" rx="5" fill="#111"/></svg>`,
  speed40: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#fff"/><text x="50" y="63" font-size="36" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">40</text></svg>`,
  straight: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565c0"/><polygon points="50,16 70,40 57,40 57,82 43,82 43,40 30,40" fill="#fff"/></svg>`,
  rightonly: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565c0"/><path d="M38 82 V50 Q38 40 48 40 H62" stroke="#fff" stroke-width="13" fill="none"/><polygon points="60,26 82,40 60,54" fill="#fff"/></svg>`,
  nouturn: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#fff"/><path d="M62 74 V44 Q62 30 50 30 Q38 30 38 44 V58" stroke="#111" stroke-width="8" fill="none"/><polygon points="28,56 48,56 38,70" fill="#111"/><line x1="25" y1="25" x2="75" y2="75" stroke="#d32f2f" stroke-width="8"/></svg>`,
  noleft: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#fff"/><path d="M60 76 V52 Q60 44 52 44 H40" stroke="#111" stroke-width="9" fill="none"/><polygon points="42,32 24,44 42,56" fill="#111"/><line x1="25" y1="25" x2="75" y2="75" stroke="#d32f2f" stroke-width="8"/></svg>`,
  railbarrier: `<svg viewBox="0 0 100 100"><polygon points="50,4 97,92 3,92" fill="#d32f2f"/><polygon points="50,20 83,83 17,83" fill="#fff"/><rect x="30" y="56" width="40" height="7" fill="#111"/><rect x="33" y="50" width="5" height="25" fill="#111"/><rect x="47" y="50" width="5" height="25" fill="#111"/><rect x="61" y="50" width="5" height="25" fill="#111"/></svg>`,
  twoway: `<svg viewBox="0 0 100 100"><polygon points="50,4 97,92 3,92" fill="#d32f2f"/><polygon points="50,20 83,83 17,83" fill="#fff"/><path d="M42 78 V48" stroke="#111" stroke-width="6"/><polygon points="34,50 50,50 42,38" fill="#111"/><path d="M58 42 V72" stroke="#111" stroke-width="6"/><polygon points="50,70 66,70 58,82" fill="#111"/></svg>`,
  oneway: `<svg viewBox="0 0 100 100"><rect x="2" y="2" width="96" height="96" rx="6" fill="#1565c0"/><polygon points="50,12 74,38 58,38 58,88 42,88 42,38 26,38" fill="#fff"/></svg>`,
  deadend: `<svg viewBox="0 0 100 100"><rect x="2" y="2" width="96" height="96" rx="6" fill="#1565c0"/><rect x="42" y="34" width="16" height="56" fill="#fff"/><rect x="22" y="18" width="56" height="16" fill="#d32f2f"/></svg>`,
  parking: `<svg viewBox="0 0 100 100"><rect x="2" y="2" width="96" height="96" rx="6" fill="#1565c0"/><text x="50" y="74" font-size="64" font-weight="700" text-anchor="middle" font-family="Arial" fill="#fff">P</text></svg>`,
};

const TOPICS = {
  anim: "🎬 Animatsion vaziyatlar",
  general: "Umumiy qoidalar va hujjatlar",
  lights: "Svetofor va tartibga soluvchi",
  warnings: "Ogohlantiruvchi va avariya ishoralari",
  maneuver: "Manyovr va yo'ldagi joylashuv",
  speed: "Harakatlanish tezligi",
  overtaking: "Quvib o'tish",
  stopping: "To'xtash va to'xtab turish",
  junction: "Chorrahalar",
  crossing: "Piyodalar o'tish joylari va bekatlar",
  railway: "Temir yo'l kesishmalari",
  special: "Maxsus va yo'nalishli transport",
  lighting: "Tashqi yoritish asboblari",
  towing: "Shatakka olish",
  people: "Odam tashish, o'qitish, magistral",
  signs: "Yo'l belgilari",
  safety: "Xavfsizlik, texnik holat, tibbiy yordam",
};

const QUESTIONS = [];
function Q(topic, q, options, explain, img) {
  QUESTIONS.push({ id: QUESTIONS.length + 1, topic, q, options, answer: 0, explain, img });
}

// ---------------------------------------------------------------- UMUMIY
Q("general", "Haydovchi o'zi bilan qaysi hujjatni olib yurishi shart?",
  ["Transport vositasi toifasiga mos haydovchilik guvohnomasini", "Faqat pasportni", "Mehnat daftarchasini", "Tibbiy kartani"],
  "YHQ 7-band: tegishli toifadagi haydovchilik guvohnomasi, transport vositasini ro'yxatdan o'tkazish guvohnomasi va majburiy sug'urta polisi bo'lishi kerak.");
Q("general", "Majburiy fuqarolik javobgarligi sug'urta polisining qaysi shakli haqiqiy hisoblanadi?",
  ["Qog'oz ko'rinishida ham, elektron ko'rinishida ham", "Faqat qog'oz ko'rinishida", "Faqat notarial tasdiqlangan nusxasi", "Polis shart emas"],
  "YHQ 7-band: sug'urta polisining elektron shakli ham qabul qilinadi.");
Q("general", "«B» toifali guvohnoma qaysi transport vositalarini boshqarish huquqini beradi?",
  ["Ruxsat etilgan to'la vazni 3500 kg gacha va haydovchidan tashqari o'rindiqlari 8 tadan oshmaydigan avtomobillarni", "Har qanday yuk avtomobilini", "Avtobuslarni", "Mototsikllarni"],
  "YHQ 8-band: «B» — 3500 kg gacha, haydovchi o'rindig'idan tashqari 8 tadan ko'p bo'lmagan o'rindiqli avtomobillar.");
Q("general", "«D» toifasi qaysi transport vositalari uchun?",
  ["Haydovchidan tashqari 8 tadan ortiq o'rindiqli yo'lovchi tashish vositalari", "3500 kg dan og'ir yuk avtomobillari", "Mopedlar", "Tirkamali yengil avtomobillar"],
  "YHQ 8-band.");
Q("general", "«C» toifasi qaysi transport vositalari uchun?",
  ["Ruxsat etilgan to'la vazni 3500 kg dan ortiq avtomobillar", "Yengil avtomobillar", "Avtobuslar", "Tramvaylar"],
  "YHQ 8-band.");
Q("general", "«B» toifasidagi transport vositasini boshqarish huquqini olish uchun eng kichik yosh qancha?",
  ["18 yosh", "16 yosh", "17 yosh", "21 yosh"],
  "YHQ 149-band: «B» va «C» toifalari — 18 yosh.");
Q("general", "«A» toifasidagi transport vositasini boshqarish huquqi necha yoshdan beriladi?",
  ["16 yoshdan", "14 yoshdan", "18 yoshdan", "19 yoshdan"],
  "YHQ 149-band.");
Q("general", "«D» toifasi va tramvay, trolleybus boshqarish huquqi necha yoshdan beriladi?",
  ["21 yoshdan", "18 yoshdan", "19 yoshdan", "25 yoshdan"],
  "YHQ 149-band.");
Q("general", "«BE» va «CE» toifalari necha yoshdan beriladi?",
  ["19 yoshdan", "18 yoshdan", "20 yoshdan", "21 yoshdan"],
  "YHQ 149-band.");
Q("general", "Xavfsizlik kamarini qachon taqish kerak?",
  ["Harakatni boshlashdan oldin", "Shahar tashqarisiga chiqqanda", "Faqat tezlik 60 km/soatdan oshganda", "Faqat yo'l nazoratchisi ko'rsa"],
  "YHQ 9-band: haydovchi va oldingi o'rindiqdagi yo'lovchilar harakatlanishdan oldin kamar taqishi shart.");
Q("general", "Quyidagilardan kim xavfsizlik kamarini taqmasligi mumkin?",
  ["Amaliy mashg'ulot o'tkazayotgan haydovchilik instruktori", "Oldingi o'rindiqdagi yo'lovchi", "Shoshayotgan haydovchi", "Taksi yo'lovchisi oldingi o'rindiqda"],
  "YHQ 9-band: 12 yoshgacha orqa o'rindiqdagi bolalar, instruktorlar, tibbiy ma'lumotnomasi bor shaxslar va boshqalar istisno.");
Q("general", "Harakatlanish paytida telefondan foydalanish qachon mumkin?",
  ["Qo'llarni band qilmaydigan garnitura yoki qurilma orqali", "Qisqa qo'ng'iroq uchun qo'lda ushlab", "Faqat tirbandlikda qo'lda ushlab", "SMS yozish uchun"],
  "YHQ 12-band: qo'llarni band qilmaydigan maxsus qurilmasiz telefondan foydalanish taqiqlanadi.");
Q("general", "Mast holatda, shuningdek reaksiyani susaytiruvchi dori ta'sirida transport boshqarish:",
  ["Taqiqlanadi", "Kam miqdorda ruxsat etiladi", "Kechasi ruxsat etiladi", "Shahar tashqarisida ruxsat etiladi"],
  "YHQ 12-band.");
Q("general", "Haydovchi qaysi holatda transport vositasini boshqara olmaydi?",
  ["Charchagan, uyqusiragan yoki betob bo'lib, harakat xavfsizligiga tahdid solsa", "Kechasi", "Yomg'ir yog'ayotganda", "Yo'lovchisiz"],
  "YHQ 12-band.");
Q("general", "Haydovchi boshqaruvni kimga topshirishi taqiqlanadi?",
  ["Haydovchilik guvohnomasi bo'lmagan yoki mast shaxsga", "Sug'urta polisiga kiritilgan shaxsga", "Ishonchnomasi bor shaxsga", "Egasining yaqin qarindoshiga"],
  "YHQ 12-band.");
Q("general", "Haydovchi qachon tibbiy ko'rikdan yoki mastlikka tekshiruvdan o'tishi shart?",
  ["Yo'l harakati xavfsizligi xodimi talab qilganda", "Faqat YTHdan keyin, xohlasa", "Hech qachon", "Yiliga bir marta"],
  "YHQ 11-band.");
Q("general", "Qorong'ida majburiy to'xtagandan keyin qatnov qismiga chiqishda haydovchi nima kiyishi kerak?",
  ["Yorug'lik qaytaruvchi nimcha (jilet)", "Kaska", "Qo'lqop", "Hech narsa"],
  "YHQ 11-band.");
Q("general", "Mototsiklchi va uning yo'lovchisi harakatlanishda:",
  ["Mototsikl shlemini taqib, mahkamlab olishi shart", "Shlemni faqat shahar tashqarisida taqadi", "Faqat haydovchi shlem taqadi", "Shlem shart emas"],
  "YHQ 11-band.");
Q("general", "Kabinaning old qismida televizor yoki video ekranni yoqib qo'yish mumkinmi?",
  ["Taqiqlanadi", "Mumkin", "Faqat yo'lovchi ko'rsa mumkin", "Faqat tunda mumkin"],
  "YHQ 12-band.");
Q("general", "Ishlamaydigan tormoz yoki rul boshqaruvi bilan harakatlanish:",
  ["Taqiqlanadi", "Ehtiyotkorlik bilan mumkin", "Ta'mirlash joyigacha mumkin", "Shahar tashqarisida mumkin"],
  "YHQ 12-band.");
Q("general", "Yomg'ir yoki qor paytida oyna tozalagich ishlamasa:",
  ["Harakatlanish taqiqlanadi", "Tezlikni 20 km/soatgacha kamaytirib davom etish mumkin", "Avariya ishorasini yoqib davom etish mumkin", "Taqiq yo'q"],
  "YHQ 12-band.");
Q("general", "YTH sodir bo'lganda haydovchi birinchi navbatda nima qiladi?",
  ["Darhol to'xtaydi, avariya ishorasini yoqadi va avariya to'xtash belgisini qo'yadi", "Joydan uzoqlashadi", "Transport vositasini darhol yo'l chetiga oladi", "Faqat sug'urtaga qo'ng'iroq qiladi"],
  "YHQ 13-band.");
Q("general", "YTHdan keyin hodisaga aloqador narsalarni joyidan qo'zg'atish mumkinmi?",
  ["Yo'q, qo'zg'atmaslik kerak", "Ha, yo'lni bo'shatish uchun darhol", "Faqat guvohlar ruxsat bersa", "Ha, har doim"],
  "YHQ 13-band: transport vositasi va hodisaga aloqador ashyolar joyidan qo'zg'atilmaydi (boshqa harakatga to'sqinlik qilsa — oldin qayd etiladi).");
Q("general", "Jabrlanuvchini boshqa transportda yuborishning imkoni bo'lmasa haydovchi nima qiladi?",
  ["O'z transport vositasida eng yaqin tibbiy muassasaga olib boradi, so'ng hodisa joyiga qaytadi", "Tez yordamni kutib, hech narsa qilmaydi", "Uyiga olib ketadi", "Hodisa joyini tark etadi"],
  "YHQ 13-band.");
Q("general", "Transport vositasi boshqa harakatga to'sqinlik qilsa, YTH joyini bo'shatishdan oldin nima qilinadi?",
  ["Guvohlar ishtirokida vositalarning joylashuvi, iz va ashyolar qayd etiladi (foto/video)", "Hech narsa — darhol bo'shatiladi", "Faqat sug'urtaga xabar beriladi", "Mashina belgisiz qoldiriladi"],
  "YHQ 13-band.");

// ---------------------------------------------------------------- SVETOFOR
Q("lights", "Svetoforning yashil miltillovchi ishorasi nimani bildiradi?",
  ["Harakatga ruxsat beradi va tez orada taqiqlovchi ishora yonishi haqida ogohlantiradi", "Harakatni taqiqlaydi", "Svetofor buzilgan", "Faqat piyodalarga ruxsat"],
  "YHQ 31-band.");
Q("lights", "Svetoforning sariq (miltillamaydigan) ishorasi nimani bildiradi?",
  ["Harakatni taqiqlaydi (42-band holatlari bundan mustasno) va ishoralar almashishini bildiradi", "Harakatga ruxsat beradi", "Tezlikni oshirishga ruxsat", "Faqat o'ngga burilishga ruxsat"],
  "YHQ 31-band.");
Q("lights", "Sariq miltillovchi ishora nimani bildiradi?",
  ["Harakatga ruxsat beradi, tartibga solinmagan chorraha yoki piyodalar o'tish joyi haqida ogohlantiradi", "Harakatni taqiqlaydi", "Faqat tramvaylarga ruxsat", "To'xtash majburiy"],
  "YHQ 31-band.");
Q("lights", "Qizil va sariq ishoralar bir vaqtda yonsa:",
  ["Harakat taqiqlanadi, tez orada yashil ishora yonadi", "Harakatga ruxsat beriladi", "Faqat o'ngga burilish mumkin", "Svetofor buzilgan, o'tish mumkin"],
  "YHQ 31-band.");
Q("lights", "Qizil miltillovchi ishora nimani bildiradi?",
  ["Harakatni taqiqlaydi", "Ehtiyotkorlik bilan harakatlanishga ruxsat beradi", "Faqat chapga burilishga ruxsat", "Hech narsani"],
  "YHQ 31-band.");
Q("lights", "Qo'shimcha seksiyaning ishorasi o'chiq bo'lsa:",
  ["Shu seksiya tartibga soladigan yo'nalishda harakat taqiqlanadi", "Shu yo'nalishda harakat ruxsat", "Asosiy ishoraga qarab harakatlaniladi", "Svetofor buzilgan hisoblanadi"],
  "YHQ 32-band.");
Q("lights", "Reversiv svetoforning qizil «X» ishorasi nimani bildiradi?",
  ["Shu qatorga kirish taqiqlanadi", "Shu qatorga kirish ruxsat", "Faqat avtobuslarga ruxsat", "Qator almashtirish majburiy"],
  "YHQ 35-band. Pastga qaratilgan yashil strelka — kirishga ruxsat.");
Q("lights", "Temir yo'l kesishmasidagi oq-oy rangli miltillovchi ishora nimani bildiradi?",
  ["Poyezd ko'rinmasa, kesishmadan o'tishga ruxsat", "O'tish taqiqlanadi", "Poyezd yaqinlashmoqda", "Shlagbaum buzilgan"],
  "YHQ 37-band.");
Q("lights", "Tartibga soluvchi qo'llarini yon tomonga uzatgan bo'lsa, uning chap va o'ng tomonidan kelayotganlar:",
  ["To'g'riga va o'ngga harakatlanishi mumkin", "Faqat chapga burilishi mumkin", "To'xtashi shart", "Istalgan yo'nalishda harakatlanishi mumkin"],
  "YHQ 38-band. Ko'krak va orqa tomondan harakat taqiqlanadi.");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Uning chap tomonidan kelayotgan haydovchi:",
  ["Barcha yo'nalishlarda harakatlanishi mumkin", "Faqat o'ngga burilishi mumkin", "To'xtashi shart", "Faqat qayrilib olishi mumkin"],
  "YHQ 38-band: chap tomondan — barcha yo'nalishlarga, ko'krak tomondan — faqat o'ngga.");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Uning ko'kragi tomonidan kelayotgan haydovchi:",
  ["Faqat o'ngga burilishi mumkin", "To'g'riga yurishi mumkin", "Chapga burilishi mumkin", "To'xtashi shart"],
  "YHQ 38-band.");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Uning orqa va o'ng tomonidan kelayotgan haydovchilar:",
  ["Harakatlanishi taqiqlanadi", "Faqat o'ngga burila oladi", "To'g'riga yura oladi", "Barcha yo'nalishga yura oladi"],
  "YHQ 38-band.");
Q("lights", "Tartibga soluvchi qo'lini yuqoriga ko'targan bo'lsa:",
  ["Barcha yo'nalishlarda harakat taqiqlanadi (42-band holatlari bundan mustasno)", "Faqat to'g'riga ruxsat", "Faqat tramvaylarga ruxsat", "Faqat o'ngga burilishga ruxsat"],
  "YHQ 38-band.");
Q("lights", "Tartibga soluvchining ishoralari svetofor va yo'l belgilariga zid kelsa:",
  ["Tartibga soluvchining ishoralariga amal qilinadi", "Svetoforga amal qilinadi", "Yo'l belgilariga amal qilinadi", "Haydovchi o'zi hal qiladi"],
  "YHQ 43-band.");
Q("lights", "Svetofor ishoralari ustuvorlik belgilari talablariga zid bo'lsa:",
  ["Svetofor ishoralariga amal qilinadi", "Ustuvorlik belgilariga amal qilinadi", "O'ng tomondagiga yo'l beriladi", "Kim birinchi kelsa o'sha o'tadi"],
  "YHQ 43-band.");
Q("lights", "Sariq ishora yonganda keskin tormozlamasdan to'xtay olmagan haydovchi:",
  ["Harakatni davom ettirishi mumkin", "Keskin tormozlashi shart", "Orqaga yurishi kerak", "Chorraha o'rtasida to'xtashi kerak"],
  "YHQ 42-band.");
Q("lights", "Taqiqlovchi ishorada to'xtash chizig'i bo'lsa, haydovchi qaerda to'xtaydi?",
  ["To'xtash chizig'i oldida, uni bosib o'tmasdan", "Chiziq ustida", "Chorraha o'rtasida", "Piyodalar o'tish joyida"],
  "YHQ 41-band.");
Q("lights", "Svetoforlar ishlamayotgan bo'lsa, chorraha qanday hisoblanadi?",
  ["Tartibga solinmagan", "Tartibga solingan", "Ustuvor", "Yopiq"],
  "YHQ 98-band.");
Q("lights", "Tartibga soluvchi haydovchini qanday to'xtatishi mumkin?",
  ["Qo'l ishorasi yoki ovoz kuchaytirgich orqali", "Faqat hushtak bilan", "Faqat yozma talab bilan", "To'xtata olmaydi"],
  "YHQ 39-40-bandlar: hushtak — qo'shimcha ishora sifatida.");

// ---------------------------------------------------------------- OGOHLANTIRUVCHI ISHORALAR
Q("warnings", "Burilish ko'rsatkichi qachon yoqiladi?",
  ["Harakatni boshlash, qator almashtirish, burilish va to'xtashdan oldin", "Faqat chapga burilishda", "Manyovr tugagandan keyin", "Faqat kechasi"],
  "YHQ 45-band.");
Q("warnings", "Burilish ko'rsatkichi qachon o'chiriladi?",
  ["Manyovr tugashi bilanoq", "Keyingi chorrahada", "Bir daqiqadan so'ng", "Hech qachon o'chirilmaydi"],
  "YHQ 46-band.");
Q("warnings", "Ogohlantiruvchi ishora haydovchiga ustunlik beradimi?",
  ["Yo'q, bermaydi", "Ha, beradi", "Faqat shahar tashqarisida", "Faqat chapga burilishda"],
  "YHQ 46-band.");
Q("warnings", "Chapga burilish qo'l ishorasi qanday beriladi?",
  ["Chap qo'l yon tomonga uzatiladi yoki o'ng qo'l tirsakdan 90° bukilib yuqoriga ko'tariladi", "O'ng qo'l yon tomonga uzatiladi", "Qo'l pastga tushiriladi", "Ikkala qo'l ko'tariladi"],
  "YHQ 45-band.");
Q("warnings", "To'xtash haqidagi qo'l ishorasi qanday?",
  ["Chap yoki o'ng qo'l yuqoriga ko'tariladi", "Qo'l oldinga uzatiladi", "Qo'l silkitiladi", "Qo'l pastga tushiriladi"],
  "YHQ 45-band.");
Q("warnings", "Aholi punktida ovozli signal qachon berilishi mumkin?",
  ["Faqat YTHning oldini olish zarur bo'lganda", "Quvib o'tishdan oldin", "Do'stlarni chaqirish uchun", "Tirbandlikda"],
  "YHQ 48-band: quvib o'tish haqida ogohlantirish uchun ovozli signal faqat aholi punktidan tashqarida.");
Q("warnings", "Quvib o'tishda ovozli signal o'rniga nima ishlatish mumkin?",
  ["Faralarni qisqa yoqib-o'chirish", "Avariya ishorasi", "Tumanga qarshi chiroq", "Hech narsa"],
  "YHQ 49-band.");
Q("warnings", "Avariya ishorasi qaysi holatda yoqilishi shart?",
  ["YTH sodir bo'lganda", "Qisqa to'xtashda yo'lovchi tushirganda", "Yaxshi ko'rinishda quvib o'tishda", "Burilishda"],
  "YHQ 50-band: YTH, majburiy to'xtash, ko'zni qamashtirish, shatakka olish va bolalar tushayotganda.");
Q("warnings", "Haydovchining ko'zi faralardan qamashganda u nima qiladi?",
  ["Avariya ishorasini yoqadi, qatorni o'zgartirmay tezlikni kamaytiradi va to'xtaydi", "Uzoq yorug'likni yoqadi", "Qarama-qarshi qatorga o'tadi", "Tezlikni oshiradi"],
  "YHQ 50- va 135-bandlar.");
Q("warnings", "Avariya to'xtash belgisi aholi punktida transport vositasidan qanday masofada qo'yiladi?",
  ["Kamida 15 m", "Kamida 5 m", "Kamida 30 m", "Kamida 50 m"],
  "YHQ 51-band.");
Q("warnings", "Avariya to'xtash belgisi aholi punktidan tashqarida qanday masofada qo'yiladi?",
  ["Kamida 30 m", "Kamida 15 m", "Kamida 10 m", "Kamida 100 m"],
  "YHQ 51-band.");
Q("warnings", "Avariya ishorasi ishlamasa, to'satdan to'xtagan haydovchi nima qiladi?",
  ["Darhol avariya to'xtash belgisini qo'yadi", "Hech narsa qilmaydi", "Faralarni yoqadi", "Ovozli signal beradi"],
  "YHQ 51-band.");
Q("warnings", "Avariya ishorasi ishlamaydigan shatakdagi transport vositasining orqasiga nima o'rnatiladi?",
  ["Avariya to'xtash belgisi", "Qizil bayroq", "Hech narsa", "«Bolalar» belgisi"],
  "YHQ 52-band.");

// ---------------------------------------------------------------- MANYOVR
Q("maneuver", "Qator almashtirishda haydovchi kimga yo'l beradi?",
  ["O'tayotgan qatordagi yo'nalishini o'zgartirmay ketayotgan transport vositalariga", "Chap tomondagi barcha transportga", "Hech kimga", "Faqat avtobuslarga"],
  "YHQ 55-band.");
Q("maneuver", "Bir yo'nalishda ketayotgan ikki transport vositasi bir vaqtda qator almashtirsa, kim yo'l beradi?",
  ["Chapdagi haydovchi o'ngdagisiga", "O'ngdagi haydovchi chapdagisiga", "Tezligi kamrog'i", "Kattaroq transport"],
  "YHQ 55-band.");
Q("maneuver", "Yondosh hududdan yo'lga chiqishda haydovchi kimga yo'l beradi?",
  ["Yo'lda harakatlanayotgan piyoda va transport vositalariga", "Hech kimga", "Faqat avtobuslarga", "Faqat piyodalarga"],
  "YHQ 54-band.");
Q("maneuver", "O'ngga burilishda transport vositasi qanday harakatlanadi?",
  ["Qatnov qismining o'ng chetiga iloji boricha yaqin", "Qarama-qarshi qatorga kirib", "Yo'l o'rtasidan", "Istalgan qatordan"],
  "YHQ 57-band.");
Q("maneuver", "Burilishdan oldin transport vositasi qanday holatni egallaydi (belgilar boshqacha tartib belgilamagan bo'lsa)?",
  ["Shu yo'nalish uchun mo'ljallangan chekka holatni", "Istalgan holatni", "Doimo o'rta qatorni", "Doimo o'ng qatorni"],
  "YHQ 56-band.");
Q("maneuver", "Chorrahadan tashqarida chapga burilish yoki qayrilib olishda haydovchi kimga yo'l beradi?",
  ["Qarama-qarshi yo'nalishdagi transportga va bir yo'nalishdagi tramvayga", "Hech kimga", "Faqat piyodalarga", "Orqadagi transportga"],
  "YHQ 59-band.");
Q("maneuver", "Qayrilib olish qaysi joyda taqiqlanadi?",
  ["Piyodalar o'tish joylarida", "Keng yo'lda yaxshi ko'rinishda", "Yo'l chizig'i uzuq bo'lgan joyda", "Aholi punktidan tashqarida har doim"],
  "YHQ 62-band.");
Q("maneuver", "Ko'rinish masofasi qanchadan kam bo'lsa, qayrilib olish taqiqlanadi?",
  ["100 m", "50 m", "150 m", "300 m"],
  "YHQ 62-band.");
Q("maneuver", "Orqaga harakatlanish qaysi joyda taqiqlanadi?",
  ["Chorrahalarda", "Hovlida", "To'xtab turish joyida", "Yon yo'lda"],
  "YHQ 63-band: chorrahalarda va qayrilib olish taqiqlangan joylarda.");
Q("maneuver", "Tormozlash (sekinlashish) yo'lagi bo'lgan yo'ldan burilishda haydovchi:",
  ["O'z vaqtida shu yo'lakka o'tib, tezlikni faqat unda kamaytiradi", "Asosiy qatorda keskin tormozlaydi", "Yo'lakdan foydalanmaydi", "Tezlikni oshiradi"],
  "YHQ 61-band.");
Q("maneuver", "Tezlanish yo'lagidan harakat oqimiga qo'shilishda:",
  ["Yo'lakda tezlikni oshiradi va qo'shni qatordagilarga yo'l beradi", "Qo'shni qatordagilar unga yo'l beradi", "Yo'lak oxirida to'xtash majburiy", "Ovozli signal bilan qo'shiladi"],
  "YHQ 61-band.");
Q("maneuver", "Chorrahalardan boshqa joyda harakatlanish tartibi qoidalarda belgilanmagan bo'lsa, kimga yo'l beriladi?",
  ["O'ng tomondan yaqinlashayotgan transport vositasiga", "Chap tomondan yaqinlashayotganga", "Kattaroq transportga", "Tezroq ketayotganga"],
  "YHQ 60-band.");
Q("maneuver", "To'rt va undan ortiq qatorli ikki tomonlama yo'lda qarama-qarshi yo'nalish qatorlariga chiqish:",
  ["Taqiqlanadi", "Quvib o'tish uchun mumkin", "Chapga burilish uchun mumkin", "Tunda mumkin"],
  "YHQ 65-band.");
Q("maneuver", "Aholi punktidan tashqarida haydovchi qatnov qismida qanday joylashadi?",
  ["Iloji boricha o'ng chetga yaqin; o'ng qatorlar bo'sh bo'lsa chap qatorlarni egallamaydi", "Istalgan qatorda", "Doimo chap qatorda", "Yo'l o'rtasida"],
  "YHQ 67-band.");
Q("maneuver", "Tezligi 40 km/soatdan oshmaydigan transport vositalari qaysi qatorda harakatlanadi?",
  ["Eng o'ng chekka qatorda", "Chap qatorda", "O'rta qatorda", "Istalgan qatorda"],
  "YHQ 68-band.");
Q("maneuver", "Qarama-qarshi yo'nalishdagi tramvay izida harakatlanish:",
  ["Taqiqlanadi", "Boshqa qatorlar band bo'lsa mumkin", "Tunda mumkin", "Avtobuslarga mumkin"],
  "YHQ 69-band.");
Q("maneuver", "Oldindagi transport vositasigacha masofa qanday tanlanadi?",
  ["U keskin tormozlaganda to'qnashuvning oldini oladigan darajada", "Har doim 5 m", "Har doim 100 m", "Masofa ahamiyatsiz"],
  "YHQ 73-band.");
Q("maneuver", "Qarama-qarshi harakatlanish qiyin bo'lgan to'siq qaysi tomonda bo'lsa, kim yo'l beradi?",
  ["To'siq tomonidagi haydovchi", "Qarama-qarshi tomondagi haydovchi", "Kattaroq transport", "Kim tezroq bo'lsa"],
  "YHQ 75-band.");
Q("maneuver", "Ajratuvchi bo'lak, trotuar, velosiped yo'lkasida mexanik transport vositasida harakatlanish:",
  ["Taqiqlanadi (qoidalarda belgilangan istisnolardan tashqari)", "Tirbandlikda mumkin", "Qisqa masofaga mumkin", "Avariya ishorasi bilan mumkin"],
  "YHQ 72-band.");
Q("maneuver", "Uzuq chiziqlarni kesib o'tish qachon mumkin?",
  ["Qayta tizilish (qator almashtirish) paytida", "Hech qachon", "Faqat to'xtashda", "Faqat tunda"],
  "YHQ 70-band.");

// ---------------------------------------------------------------- TEZLIK
Q("speed", "Aholi punktlarida umumiy ruxsat etilgan eng yuqori tezlik:",
  ["70 km/soat", "60 km/soat", "80 km/soat", "90 km/soat"],
  "YHQ 78-band (alohida hududlarda 60 km/soat belgilanishi mumkin).");
Q("speed", "Belgi bilan ko'rsatilgan maktab va maktabgacha muassasa oldida, 300 m dan kam masofada tezlik:",
  ["30 km/soatdan oshmasligi kerak", "40 km/soatdan oshmasligi kerak", "50 km/soatdan oshmasligi kerak", "20 km/soatdan oshmasligi kerak"],
  "YHQ 78-band.");
Q("speed", "Turar joy dahalari va hovlilarda tezlik:",
  ["20 km/soatdan oshmasligi kerak", "30 km/soatdan oshmasligi kerak", "40 km/soatdan oshmasligi kerak", "10 km/soatdan oshmasligi kerak"],
  "YHQ 78-band.");
Q("speed", "Aholi punktidan tashqarida yengil avtomobil uchun eng yuqori tezlik:",
  ["100 km/soat", "90 km/soat", "110 km/soat", "120 km/soat"],
  "YHQ 79-band (yengil va 3,5 t gacha yuk avtomobillari).");
Q("speed", "Aholi punktidan tashqarida shaharlararo avtobus va mikroavtobus uchun eng yuqori tezlik:",
  ["90 km/soat", "100 km/soat", "80 km/soat", "70 km/soat"],
  "YHQ 79-band.");
Q("speed", "Aholi punktidan tashqarida mototsikllar va tirkama tortayotgan yengil avtomobillar uchun eng yuqori tezlik:",
  ["80 km/soat", "90 km/soat", "100 km/soat", "70 km/soat"],
  "YHQ 79-band.");
Q("speed", "Aholi punktidan tashqarida ruxsat etilgan to'la vazni 3,5 t dan ortiq yuk avtomobillari uchun eng yuqori tezlik:",
  ["80 km/soat", "90 km/soat", "100 km/soat", "60 km/soat"],
  "YHQ 79-band.");
Q("speed", "Yuk avtomobilining kuzovida odam tashiyotganda eng yuqori tezlik:",
  ["60 km/soat", "70 km/soat", "50 km/soat", "80 km/soat"],
  "YHQ 80-band.");
Q("speed", "Bolalarning tashkiliy guruhini tashiyotgan transport vositasi uchun eng yuqori tezlik:",
  ["60 km/soat", "70 km/soat", "80 km/soat", "50 km/soat"],
  "YHQ 80-band.");
Q("speed", "Mexanik transport vositasini shatakka olib ketayotganda eng yuqori tezlik:",
  ["50 km/soat", "40 km/soat", "60 km/soat", "70 km/soat"],
  "YHQ 80-band.");
Q("speed", "Bu belgi ta'sir hududida qanday tezlikda harakatlanish mumkin?",
  ["40 km/soatdan oshmagan tezlikda", "Kamida 40 km/soat tezlikda", "Faqat 40 km/soat aniq", "Belgi tezlikka taalluqli emas"],
  "«Eng yuqori tezlik cheklangan» belgisi — ko'rsatilgandan yuqori tezlik taqiqlanadi (YHQ 81-band).", "speed40");
Q("speed", "Transport vositasining texnik tavsifida ko'rsatilgan eng yuqori tezlikdan oshirib harakatlanish:",
  ["Taqiqlanadi", "Shahar tashqarisida mumkin", "Quvib o'tishda mumkin", "Mumkin"],
  "YHQ 81-band.");

// ---------------------------------------------------------------- QUVIB O'TISH
Q("overtaking", "Quvib o'tishni boshlashdan oldin haydovchi nimaga ishonch hosil qilishi kerak?",
  ["Ortidagi transport quvib o'tishni boshlamaganiga va oldindagisi chapga burilish ishorasini bermaganiga", "Faqat ovozli signal berganiga", "Faqat tezligi yetarliligiga", "Hech narsaga"],
  "YHQ 82-band.");
Q("overtaking", "Quvib o'tilayotgan transport chapga burilish ishorasini berib, burilishni boshlagan bo'lsa:",
  ["Uni o'ng tomondan quvib o'tish kerak", "Chap tomondan quvib o'tish kerak", "Ovozli signal berish kerak", "Quvib o'tish butunlay taqiqlanadi"],
  "YHQ 83-band.");
Q("overtaking", "Quvib o'tilayotgan haydovchiga tezlikni oshirish yoki boshqa usul bilan xalaqit berish:",
  ["Taqiqlanadi", "Mumkin", "Faqat shahar tashqarisida mumkin", "Faqat tunda mumkin"],
  "YHQ 84-band.");
Q("overtaking", "Tartibga solingan chorrahalarda quvib o'tish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat chapdan ruxsat", "Faqat yashil ishorada ruxsat"],
  "YHQ 86-band.");
Q("overtaking", "Tartibga solinmagan chorrahada quvib o'tish qachon taqiqlanadi?",
  ["Asosiy bo'lmagan yo'lda harakatlanayotganda", "Asosiy yo'lda harakatlanayotganda", "Hech qachon", "Har doim ruxsat"],
  "YHQ 86-band.");
Q("overtaking", "Temir yo'l kesishmasidan qancha masofa qolganda quvib o'tish taqiqlanadi?",
  ["100 m", "50 m", "150 m", "300 m"],
  "YHQ 86-band: kesishmada va undan oldin 100 m dan kam masofada.");
Q("overtaking", "Ko'priklar, estakadalar va ular ostida quvib o'tish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat kunduzi ruxsat", "Faqat yuk avtomobillariga taqiqlanadi"],
  "YHQ 86-band.");
Q("overtaking", "Quvib o'tayotgan yoki aylanib o'tayotgan transport vositasini quvib o'tish:",
  ["Taqiqlanadi", "Mumkin", "Faqat shahar tashqarisida mumkin", "Ovozli signal bilan mumkin"],
  "YHQ 86-band.");
Q("overtaking", "Ko'tarilish cho'qqisida va ko'rinish cheklangan joylarda quvib o'tish:",
  ["Taqiqlanadi", "Tez bajarilsa mumkin", "Faralar yoniq bo'lsa mumkin", "Ruxsat etiladi"],
  "YHQ 86-band.");
Q("overtaking", "Bu belgi nimani taqiqlaydi?",
  ["Quvib o'tishni", "Harakatni", "To'xtashni", "Chapga burilishni"],
  "«Quvib o'tish taqiqlangan» belgisi (3.20).", "noovertake");
Q("overtaking", "Quvib o'tish tugagach haydovchi nima qiladi?",
  ["Avvalgi harakat qatoriga qaytadi", "Chap qatorda davom etadi", "To'xtaydi", "Tezlikni kamaytiradi"],
  "YHQ 85-band.");
Q("overtaking", "Aholi punktidan tashqarida sekin yuruvchi og'ir transport ortida navbat hosil bo'lsa, uning haydovchisi:",
  ["Iloji boricha o'ngga suriladi, kerak bo'lsa to'xtab o'tkazib yuboradi", "Tezlikni oshiradi", "Chap qatorga o'tadi", "Hech narsa qilmaydi"],
  "YHQ 87-band.");
Q("overtaking", "Bir yo'nalishda harakatlanayotgan relssiz transport vositalarini qaysi tomondan quvib o'tish mumkin?",
  ["Ikkala tomondan ham (quvib o'tish xavfsiz bo'lsa)", "Faqat chapdan", "Faqat o'ngdan", "Quvib o'tish taqiqlangan"],
  "YHQ 83-band.");

// ---------------------------------------------------------------- TO'XTASH
Q("stopping", "To'xtash va to'xtab turish asosan qaerda ruxsat etiladi?",
  ["Yo'lning o'ng tomonida — yo'l yoqasida, u bo'lmasa qatnov qismi chetida", "Yo'lning o'rtasida", "Chorrahada", "Trotuarda istalgan joyda"],
  "YHQ 88-band.");
Q("stopping", "Piyodalar o'tish joyidan oldin qancha masofada to'xtash taqiqlanadi?",
  ["10 m dan kam", "5 m dan kam", "15 m dan kam", "30 m dan kam"],
  "YHQ 91-band.");
Q("stopping", "Yo'nalishli transport bekatida qancha masofada to'xtash taqiqlanadi?",
  ["Bekatdan oldin va keyin 15 m dan kam", "5 m dan kam", "30 m dan kam", "50 m dan kam"],
  "YHQ 91-band.");
Q("stopping", "Qatnov qismlari kesishmasida va kesishayotgan qatnov qismi chetiga qancha masofadan kamda to'xtash taqiqlanadi?",
  ["30 m", "5 m", "10 m", "50 m"],
  "YHQ 91-band.");
Q("stopping", "To'xtagan transport vositasi bilan yaxlit chiziq (ajratuvchi bo'lak) orasida qancha masofa qolsa to'xtash taqiqlanadi?",
  ["3 m dan kam", "1 m dan kam", "5 m dan kam", "10 m dan kam"],
  "YHQ 91-band.");
Q("stopping", "Ko'rinish masofasi qanchadan kam bo'lgan do'ngliklar yaqinida to'xtash taqiqlanadi?",
  ["100 m", "50 m", "150 m", "200 m"],
  "YHQ 91-band.");
Q("stopping", "Temir yo'l kesishmasidan qancha masofada to'xtab turish taqiqlanadi?",
  ["50 m (ikkala tomonda)", "10 m", "100 m", "30 m"],
  "YHQ 92-band.");
Q("stopping", "Tunnellarda to'xtash:",
  ["Taqiqlanadi", "Ruxsat", "Faqat avariya ishorasi bilan ruxsat", "Faqat kunduzi ruxsat"],
  "YHQ 91-band.");
Q("stopping", "Qayerda to'xtash taqiqlangan bo'lsa, u yerda to'xtab turish:",
  ["Ham taqiqlanadi", "Ruxsat etiladi", "Faqat 5 daqiqagacha ruxsat", "Kechasi ruxsat"],
  "YHQ 92-band.");
Q("stopping", "Aholi punktidan tashqarida dam olish yoki tunash uchun to'xtash qaerda mumkin?",
  ["Faqat buning uchun mo'ljallangan joylarda yoki yo'ldan tashqarida", "Qatnov qismida", "Yo'l yoqasida istalgan joyda", "Ko'prik ustida"],
  "YHQ 90-band.");
Q("stopping", "Transport vositasi eshigini ochish qachon taqiqlanadi?",
  ["Boshqa yo'l harakati qatnashchilariga xalaqit yoki xavf tug'dirsa", "Hech qachon", "Faqat kechasi", "Faqat yomg'irda"],
  "YHQ 94-band.");
Q("stopping", "Haydovchi o'z joyini tark etishdan oldin:",
  ["Transport vositasining o'z-o'zidan harakatlanishi va undan ruxsatsiz foydalanishning oldini olish choralarini ko'radi", "Dvigatelni o'chirmaydi", "Eshiklarni ochiq qoldiradi", "Hech narsa qilmaydi"],
  "YHQ 95-band.");
Q("stopping", "Taqiqlangan joyda majburan to'xtagan haydovchi nima qilishi kerak?",
  ["Transport vositasini yo'l chetiga olib, u yerdan olib ketish choralarini ko'radi", "Kutib turadi", "Ketib qoladi", "Hech narsa qilmaydi"],
  "YHQ 93-band.");
Q("stopping", "Bu belgi nimani taqiqlaydi?",
  ["To'xtash va to'xtab turishni", "Faqat to'xtab turishni", "Faqat yuk avtomobillarining to'xtashini", "Harakatni"],
  "«To'xtash taqiqlangan» (3.27).", "nostopping");
Q("stopping", "Bu belgi ta'sir hududida nimaga ruxsat?",
  ["Yo'lovchi chiqarish yoki tushirish uchun qisqa to'xtashga", "To'xtab turishga", "Hech narsaga", "Faqat taksiga uzoq to'xtashga"],
  "«To'xtab turish taqiqlangan» — to'xtash mumkin, to'xtab turish yo'q.", "noparking");
Q("stopping", "Aholi punktida qaysi yo'llarda chap tomonda to'xtash mumkin?",
  ["Har yo'nalishda bitta qatorli, o'rtasida tramvay izi yo'q yo'llarda va bir tomonlama yo'llarda", "Har qanday yo'lda", "Faqat magistrallarda", "Hech qaerda"],
  "YHQ 88-band.");

// ---------------------------------------------------------------- CHORRAHALAR
Q("junction", "O'ngga yoki chapga burilayotgan haydovchi kimga yo'l berishi shart?",
  ["Burilayotgan qatnov qismini kesib o'tayotgan piyodalar va velosipedchilarga", "Hech kimga", "Faqat avtobuslarga", "Orqadagi transportga"],
  "YHQ 96-band.");
Q("junction", "Chorraha ortida tirbandlik bo'lsa va to'xtab qolib boshqalarga xalaqit beradigan bo'lsangiz:",
  ["Chorrahaga chiqish taqiqlanadi", "Yashil ishorada chiqish mumkin", "Ovozli signal berib chiqish mumkin", "Avariya ishorasi bilan chiqish mumkin"],
  "YHQ 97-band.");
Q("junction", "Qaysi chorraha tartibga solingan hisoblanadi?",
  ["Harakat svetofor yoki tartibga soluvchi ishorasi bilan belgilanadigan", "Ustuvorlik belgilari o'rnatilgan", "Sariq miltillovchi ishorali", "Asosiy yo'l kesishgan"],
  "YHQ 98-band.");
Q("junction", "Aylanma harakatli chorrahada kim ustunlikka ega?",
  ["Aylana bo'ylab harakatlanayotgan transport vositalari", "Aylanaga kirayotganlar", "O'ng tomondan kelayotganlar", "Kattaroq transport"],
  "YHQ 98-band.");
Q("junction", "Tartibga solingan chorrahada yashil ishorada chapga burilayotgan haydovchi kimga yo'l beradi?",
  ["Qarama-qarshi tomondan to'g'riga va o'ngga ketayotgan transport vositalariga", "Hech kimga", "Orqadan kelayotganlarga", "Faqat tramvaylarga"],
  "YHQ 99-band.");
Q("junction", "Qizil ishora bilan birga qo'shimcha seksiyaning yashil strelkasi yonsa, strelka yo'nalishida ketayotgan haydovchi:",
  ["Boshqa yo'nalishlardan kelayotgan transport vositalariga yo'l beradi", "Hamma unga yo'l beradi", "To'xtashi shart", "Faqat piyodalarga yo'l beradi"],
  "YHQ 100-band.");
Q("junction", "Ruxsat beruvchi ishorada chorrahaga kirgan haydovchi:",
  ["Chiqishdagi svetofor ishoralaridan qat'i nazar mo'ljallangan yo'nalishda chorrahadan chiqadi", "Chorraha o'rtasida to'xtab kutadi", "Orqaga qaytadi", "Qizil ishorada to'xtaydi"],
  "YHQ 102-band (yo'lda to'xtash chiziqlari bo'lsa — har bir svetoforga amal qilinadi).");
Q("junction", "Yashil ishora yonganda haydovchi kimga yo'l berishi shart?",
  ["Chorrahani kesib o'tishni tugallayotgan transport va piyodalarga", "Hech kimga", "Faqat tramvayga", "Faqat orqadagilarga"],
  "YHQ 103-band.");
Q("junction", "Svetofor ishoralari bir vaqtda tramvay va relssiz transportga ruxsat bersa:",
  ["Tramvay harakat yo'nalishidan qat'i nazar ustunlikka ega", "Relssiz transport ustun", "O'ngdagisi ustun", "Kim birinchi kelsa"],
  "YHQ 101-band.");
Q("junction", "Teng bo'lmagan yo'llar chorrahasida ikkinchi darajali yo'ldagi haydovchi:",
  ["Asosiy yo'lda yaqinlashayotganlarga, ularning keyingi yo'nalishidan qat'i nazar yo'l beradi", "Faqat o'ngdagilarga yo'l beradi", "Hech kimga yo'l bermaydi", "Faqat to'g'riga ketayotganlarga yo'l beradi"],
  "YHQ 104-band.");
Q("junction", "Teng huquqli yo'llar chorrahasida relssiz transport haydovchisi kimga yo'l beradi?",
  ["O'ng tomondan yaqinlashayotgan transport vositalariga", "Chap tomondan yaqinlashayotganlarga", "Hech kimga", "Kichikroq transportga"],
  "YHQ 105-band.");
Q("junction", "Teng huquqli yo'llar chorrahasida tramvay relssiz transportga nisbatan:",
  ["Harakat yo'nalishidan qat'i nazar ustunlikka ega", "Har doim yo'l beradi", "O'ngdan kelsagina ustun", "Ustunlikka ega emas"],
  "YHQ 105-band.");
Q("junction", "Teng huquqli chorrahada chapga burilayotgan haydovchi kimga yo'l beradi?",
  ["Qarama-qarshi yo'nalishdan to'g'riga va o'ngga ketayotgan transportga", "Hech kimga", "Faqat chapdagilarga", "Orqadagilarga"],
  "YHQ 107-band.");
Q("junction", "Chorrahada asosiy yo'l yo'nalishini o'zgartirsa, asosiy yo'lda ketayotgan haydovchilar o'zaro:",
  ["Teng huquqli yo'llar chorrahasidan o'tish qoidalariga amal qiladi", "Har doim to'g'riga ketayotgan ustun", "Kattaroq transport ustun", "Kim tez bo'lsa o'tadi"],
  "YHQ 106-band.");
Q("junction", "Qorong'ilik, loy yoki qor tufayli qoplama borligini aniqlay olmasa va ustuvorlik belgilari bo'lmasa, haydovchi:",
  ["O'zini ikkinchi darajali yo'lda deb hisoblaydi", "O'zini asosiy yo'lda deb hisoblaydi", "Faqat o'ngdagiga yo'l beradi", "Ovozli signal beradi"],
  "YHQ 108-band.");
Q("junction", "Sariq miltillovchi ishorali chorraha qanday hisoblanadi?",
  ["Tartibga solinmagan", "Tartibga solingan", "Yopiq", "Aylanma"],
  "YHQ 98-band.");

// ---------------------------------------------------------------- PIYODALAR VA BEKATLAR
Q("crossing", "Tartibga solinmagan piyodalar o'tish joyiga yaqinlashgan haydovchi:",
  ["Tezlikni kamaytirib yoki to'xtab, qatnov qismini kesib o'tayotgan piyodalarga yo'l beradi", "Ovozli signal berib o'tadi", "Tezlikni oshiradi", "Faqat bolalarga yo'l beradi"],
  "YHQ 109-band.");
Q("crossing", "Qo'shni qatordagi transport tartibga solinmagan piyodalar o'tish joyi oldida sekinlashgan bo'lsa:",
  ["Uning oldida piyoda yo'qligiga ishonch hosil qilib davom etish mumkin", "Uni darhol quvib o'tish kerak", "Ovozli signal berish kerak", "Har doim to'xtash shart emas"],
  "YHQ 110-band.");
Q("crossing", "Tartibga solingan piyodalar o'tish joyida yashil ishora yonganda haydovchi:",
  ["Piyodalarning o'tishni yakunlashiga imkon beradi", "Piyodalarga signal beradi", "Darhol harakatlanadi", "Piyodalar uning ortidan o'tadi"],
  "YHQ 111-band.");
Q("crossing", "Oq hassa bilan ishora berayotgan ko'zi ojiz piyodaga:",
  ["Har qanday joyda yo'l berish shart", "Faqat piyodalar o'tish joyida yo'l beriladi", "Yo'l berish shart emas", "Faqat svetoforda yo'l beriladi"],
  "YHQ 113-band.");
Q("crossing", "Qatnov qismidagi bekatda turgan transportga piyodalar chiqayotgan yoki tushayotgan bo'lsa:",
  ["Eshik tomon ketayotgan va eshikdan kelayotgan piyodalarga yo'l beriladi", "Signal berib o'tiladi", "Tezlikni oshirib o'tiladi", "Piyodalar kutadi"],
  "YHQ 114-band.");
Q("crossing", "«Bolalarni tashish» belgisi va avariya ishorasi yoqilgan to'xtagan transport yonidan o'tishda:",
  ["Tezlikni kamaytirib, kerak bo'lsa to'xtab, bolalarni o'tkazib yuborish kerak", "Ovozli signal berish kerak", "Tezlikni oshirish kerak", "Hech narsa qilinmaydi"],
  "YHQ 115-band.");
Q("crossing", "Piyodalar o'tish joyi ortida tirbandlik bo'lsa va siz o'tish joyida to'xtab qolsangiz:",
  ["Piyodalar o'tish joyiga chiqish taqiqlanadi", "Chiqish mumkin", "Signal berib chiqish mumkin", "Avariya ishorasi bilan chiqish mumkin"],
  "YHQ 112-band.");
Q("crossing", "Aholi punktida bekatdan harakatlanayotgan avtobus va trolleybusga:",
  ["Yo'l berish kerak", "Yo'l berish shart emas", "Faqat chap qatorda yo'l beriladi", "Faqat kechasi yo'l beriladi"],
  "YHQ 133-band.");
Q("crossing", "Yo'nalishli transport uchun ajratilgan qatorga boshqa transport vositasi qachon kirishi mumkin?",
  ["Yondosh hududga kirish/chiqish uchun, kirish joyidan 50 m oralig'ida", "Tirbandlikda", "Quvib o'tish uchun", "Hech qachon"],
  "YHQ 115-2-band.");

// ---------------------------------------------------------------- TEMIR YO'L
Q("railway", "Shlagbaum yopiq yoki yopila boshlagan bo'lsa:",
  ["Kesishmaga chiqish taqiqlanadi", "Tez o'tib ketish kerak", "Svetofor yashil bo'lsa o'tish mumkin", "Ovozli signal berib o'tish mumkin"],
  "YHQ 118-band.");
Q("railway", "Shlagbaum bo'lmasa, taqiqlovchi ishorada haydovchi qaerda to'xtaydi?",
  ["Yaqin relsdan kamida 10 m masofada", "Relsga 1 m qolganda", "Kamida 5 m da", "Kamida 50 m da"],
  "YHQ 119-band.");
Q("railway", "To'xtash chizig'i va belgisi bo'lmasa, shlagbaumli kesishmada qaerda to'xtash kerak?",
  ["Shlagbaumdan kamida 5 m masofada", "Shlagbaum yonida", "Kamida 20 m da", "Kamida 50 m da"],
  "YHQ 119-band.");
Q("railway", "Kesishma oldida turgan transport vositalarini qarama-qarshi qatorga chiqib aylanib o'tish:",
  ["Taqiqlanadi", "Ruxsat", "Poyezd ko'rinmasa ruxsat", "Faqat yengil avtomobilga ruxsat"],
  "YHQ 118-band.");
Q("railway", "Kesishmada transport vositasi to'xtab qolsa, haydovchi birinchi navbatda:",
  ["Darhol yo'lovchilarni tushiradi va kesishmani bo'shatish choralarini ko'radi", "Mashina ichida kutadi", "Shlagbaumni ochadi", "Ta'mirlashni boshlaydi"],
  "YHQ 120-band.");
Q("railway", "Kesishmada qolib ketganda poyezdni to'xtatish uchun odamlar har tomonga qancha masofaga yuboriladi?",
  ["1000 m", "100 m", "300 m", "2000 m"],
  "YHQ 120-band.");
Q("railway", "Umumiy xavf ishorasi qanday beriladi?",
  ["Bitta uzun va uchta qisqa ovozli signal", "Uchta uzun signal", "To'xtovsiz signal", "Ikkita qisqa signal"],
  "YHQ 120-band.");
Q("railway", "Poyezdni to'xtatish ishorasi qanday beriladi?",
  ["Qo'lni aylantirib harakatlantirish (kunduzi yorqin mato, tunda mash'al yoki fonar bilan)", "Qo'lni yuqoriga ko'tarish", "Faralarni yoqib-o'chirish", "Ovozli signal"],
  "YHQ 120-band.");
Q("railway", "Shlagbaumni o'zboshimchalik bilan ochish:",
  ["Taqiqlanadi", "Poyezd ko'rinmasa ruxsat", "Kechasi ruxsat", "Navbatchi yo'q bo'lsa ruxsat"],
  "YHQ 118-band.");
Q("railway", "Tezligi soatiga 8 km dan kam transport vositasi kesishmadan qanday o'tadi?",
  ["Temir yo'l distansiyasi boshlig'ining ruxsati bilan", "Erkin o'tadi", "Faqat kechasi o'tadi", "O'tishi mumkin emas"],
  "YHQ 118-band.");
Q("railway", "Bu belgi nima haqida ogohlantiradi?",
  ["Shlagbaumli temir yo'l kesishmasi", "Yo'l ishlari", "Ko'prik", "Tor yo'l"],
  "Ogohlantiruvchi belgi — shlagbaumli temir yo'l kesishmasi.", "railbarrier");

// ---------------------------------------------------------------- MAXSUS VA YO'NALISHLI TRANSPORT
Q("special", "Ko'k yoki qizil yalt-yalt yonadigan chiroq va maxsus ovozli signalni yoqqan transport vositasiga:",
  ["Yo'l berish shart", "Yo'l berish shart emas", "Faqat chorrahada yo'l beriladi", "Uni quvib o'tish kerak"],
  "YHQ 26-band.");
Q("special", "Maxsus ishoralari yoqilgan tezkor xizmat transportini quvib o'tish:",
  ["Taqiqlanadi", "Ruxsat", "Shahar tashqarisida ruxsat", "Faqat chapdan ruxsat"],
  "YHQ 26-band.");
Q("special", "Ko'k yoki qizil chiroqlari yoqilgan holda to'xtab turgan maxsus transportga yaqinlashganda:",
  ["Zarur bo'lsa darhol to'xtay oladigan tezlikda harakatlanish kerak", "Tezlikni oshirish kerak", "Ovozli signal berish kerak", "Hech narsa qilinmaydi"],
  "YHQ 27-band.");
Q("special", "Sariq yoki to'q sariq yalt-yalt yonadigan chiroq ustunlik beradimi?",
  ["Yo'q, faqat xavf haqida ogohlantiradi", "Ha, beradi", "Faqat chorrahada", "Faqat tunda"],
  "YHQ 28-band.");
Q("special", "Ustunlikdan foydalanish uchun maxsus transport vositasida nima yoqilgan bo'lishi kerak?",
  ["Yalt-yalt yonadigan chiroq va maxsus ovozli signal birga", "Faqat chiroq", "Faqat ovozli signal", "Avariya ishorasi"],
  "YHQ 25-band.");
Q("special", "Chorrahalardan tashqarida tramvay izlari qatnov qismini kesib o'tgan joyda:",
  ["Tramvay relssiz transportga nisbatan ustun (depodan chiqish bundan mustasno)", "Relssiz transport ustun", "O'ngdagisi ustun", "Kattaroq transport ustun"],
  "YHQ 131-band.");
Q("special", "Yo'nalishli transport uchun ajratilgan qatorda boshqa transport vositalarining harakatlanishi va to'xtashi:",
  ["Taqiqlanadi", "Tirbandlikda ruxsat", "Kechasi ruxsat", "Ruxsat"],
  "YHQ 132-band.");

// ---------------------------------------------------------------- YORITISH
Q("lighting", "Tunnelda harakatlanganda faralar:",
  ["Yoritilganligidan qat'i nazar yoqiladi", "Faqat qorong'i tunnelda yoqiladi", "Yoqilmaydi", "Faqat gabarit chiroqlar yoqiladi"],
  "YHQ 134-band.");
Q("lighting", "Qarama-qarshi transportgacha qancha masofa qolganda uzoq yorug'lik yaqinga almashtiriladi?",
  ["Kamida 150 m", "Kamida 50 m", "Kamida 100 m", "Kamida 300 m"],
  "YHQ 135-band.");
Q("lighting", "Yo'l yoritilgan bo'lsa qaysi yorug'lik ishlatiladi?",
  ["Yaqin yorug'lik", "Uzoq yorug'lik", "Faqat gabarit", "Tumanga qarshi orqa chiroq"],
  "YHQ 135-band.");
Q("lighting", "Kunduzi yaqin yorug'lik qaysi holatda yoqilishi shart?",
  ["Mototsiklda harakatlanganda", "Har qanday yengil avtomobilda", "Faqat shaharda", "Hech qachon"],
  "YHQ 138-band: shuningdek kolonnada, yo'nalishli transportda, bolalar guruhini tashishda, shatakka olishda, kuchli yomg'ir yoki qorda.");
Q("lighting", "Orqa tumanga qarshi chiroqlardan qachon foydalaniladi?",
  ["Faqat ko'rinish yetarli bo'lmaganda", "Har doim kechasi", "Shaharda", "Tormozlashda"],
  "YHQ 140-band.");
Q("lighting", "Qorong'ida yoritilmagan joyda to'xtab turgan transport vositasida nima yoqilishi kerak?",
  ["Gabarit chiroqlar", "Uzoq yorug'lik", "Hech narsa", "Faqat salon chirog'i"],
  "YHQ 136-band.");
Q("lighting", "Kuchli yomg'ir yoki qor paytida kunduzi:",
  ["Yaqin yorug'lik yoqiladi", "Faralar yoqilmaydi", "Uzoq yorug'lik yoqiladi", "Faqat avariya ishorasi yoqiladi"],
  "YHQ 138-band.");
Q("lighting", "Mexanik transport vositasini shatakka olganda kunduzi:",
  ["Yaqin yorug'lik yoqiladi", "Faralar yoqilmaydi", "Faqat tumanga qarshi chiroq yoqiladi", "Uzoq yorug'lik yoqiladi"],
  "YHQ 138-band.");

// ---------------------------------------------------------------- SHATAKKA OLISH
Q("towing", "Egiluvchan bog'lam bilan shatakka olishda transport vositalari orasidagi masofa:",
  ["4–6 m", "1–2 m", "8–10 m", "10–15 m"],
  "YHQ 144-band.");
Q("towing", "Bikr bog'lam bilan shatakka olishda masofa:",
  ["4 m dan oshmasligi kerak", "6 m dan kam bo'lmasligi kerak", "10 m", "1 m dan oshmasligi kerak"],
  "YHQ 144-band.");
Q("towing", "Rul boshqaruvi ishlamaydigan transport vositasini shatakka olish:",
  ["Faqat qisman ortish usulida mumkin", "Egiluvchan bog'lam bilan mumkin", "Bikr bog'lam bilan mumkin", "Har qanday usulda mumkin"],
  "YHQ 145-band.");
Q("towing", "Sirpanchiq yo'lda shatakka olish uchun qaysi bog'lam taqiqlanadi?",
  ["Egiluvchan", "Bikr", "Qisman ortish", "Hech biri taqiqlanmaydi"],
  "YHQ 145-band.");
Q("towing", "Shatakdagi avtopoyezdning umumiy uzunligi qanchadan oshsa shatakka olish taqiqlanadi?",
  ["20 m", "10 m", "15 m", "25 m"],
  "YHQ 145-band.");
Q("towing", "Bir vaqtda ikki yoki undan ortiq transport vositasini shatakka olish:",
  ["Taqiqlanadi", "Ruxsat", "Faqat bikr bog'lamda ruxsat", "Shahar tashqarisida ruxsat"],
  "YHQ 145-band.");
Q("towing", "Egiluvchan yoki bikr bog'lam bilan shatakka olinayotgan avtobus salonida odamlarning bo'lishi:",
  ["Taqiqlanadi", "Ruxsat", "Faqat 5 kishigacha ruxsat", "Faqat kunduzi ruxsat"],
  "YHQ 143-band.");
Q("towing", "Mototsikl yordamida shatakka olish:",
  ["Taqiqlanadi", "Ruxsat", "Faqat moped uchun ruxsat", "Kunduzi ruxsat"],
  "YHQ 145-band.");

// ---------------------------------------------------------------- ODAM TASHISH, O'QITISH, MAGISTRAL
Q("people", "Yo'lovchilar transport vositasiga qachon chiqishi va tushishi mumkin?",
  ["Transport vositasi to'liq to'xtagandan keyin", "Sekin harakatlanayotganda", "Istalgan vaqtda", "Svetoforda yashil yonganda"],
  "YHQ 158-band.");
Q("people", "12 yoshgacha bola yengil avtomobilning oldingi o'rindig'ida qachon o'tirishi mumkin?",
  ["Bolalarni ushlab turuvchi maxsus qurilma bo'lsa", "Kattalar bilan bo'lsa", "Hech qachon", "Har doim"],
  "YHQ 159-band.");
Q("people", "12 yoshgacha bolalarni mototsiklning orqa o'rindig'ida tashish:",
  ["Taqiqlanadi", "Shlem bilan ruxsat", "Kunduzi ruxsat", "Ruxsat"],
  "YHQ 159-band.");
Q("people", "Yuk avtomobilining kuzovida bolalarni tashish:",
  ["Taqiqlanadi", "Kattalar hamrohligida ruxsat", "60 km/soat tezlikda ruxsat", "Ruxsat"],
  "YHQ 159-band.");
Q("people", "Yuk avtomobili kuzovida odam tashish uchun haydovchi qanday talabga javob berishi kerak?",
  ["«C» toifasiga ega bo'lib, shu toifada kamida 3 yil staji bo'lishi", "«B» toifasi yetarli", "1 yillik staj", "Hech qanday talab yo'q"],
  "YHQ 152-band (8 kishidan ortiq bo'lsa — «D» toifasi ham kerak).");
Q("people", "Bolalarning tashkiliy guruhini avtobusda tashishda:",
  ["Kamida bitta katta yoshli kuzatuvchi bo'lishi va «Bolalar guruhini tashish» belgisi o'rnatilishi kerak", "Kuzatuvchi shart emas", "Belgi shart emas", "Faqat tunda tashiladi"],
  "YHQ 156-band.");
Q("people", "Odam tashish uchun jihozlangan yuk kuzovi bortining balandligi qancha bo'lishi kerak?",
  ["Kamida 1,3 m", "Kamida 0,8 m", "Kamida 1 m", "Kamida 2 m"],
  "YHQ 153-band.");
Q("people", "Avtomagistralda qaysi harakat taqiqlanadi?",
  ["Orqaga harakatlanish", "100 km/soatda harakatlanish", "Chap qatorda quvib o'tish", "Yaqin yorug'lik bilan harakatlanish"],
  "YHQ 121-band.");
Q("people", "Avtomagistralda qayerda to'xtash mumkin?",
  ["Faqat maxsus to'xtash joylarida", "Yo'l yoqasida istalgan joyda", "Chap qatorda", "Ajratuvchi bo'lakda"],
  "YHQ 121-band.");
Q("people", "Avtomagistralda transport boshqarishni o'rgatish:",
  ["Taqiqlanadi", "Instruktor bilan ruxsat", "Kunduzi ruxsat", "Ruxsat"],
  "YHQ 121-band.");
Q("people", "Avtomagistralda yuk avtomobillari qaysi qatorda harakatlanishi taqiqlanadi?",
  ["Eng chap qatorda", "Eng o'ng qatorda", "O'rta qatorda", "Taqiq yo'q"],
  "YHQ 121-band.");
Q("people", "Turar joy dahasida kim ustunlikka ega?",
  ["Piyodalar", "Transport vositalari", "Velosipedchilar", "Yuk avtomobillari"],
  "YHQ 123-band.");
Q("people", "Turar joy dahasida qaysi harakat taqiqlanadi?",
  ["Dvigatelni o'chirmay to'xtab turish", "20 km/soat tezlikda harakatlanish", "Belgilangan joyda to'xtash", "Piyodalarga yo'l berish"],
  "YHQ 124-band.");
Q("people", "Turar joy dahasidan chiqishda haydovchi:",
  ["Boshqa yo'l harakati qatnashchilariga yo'l beradi", "Ustunlikka ega", "Signal berib chiqadi", "Faqat piyodalarga yo'l beradi"],
  "YHQ 126-band.");
Q("people", "Dastlabki haydashni o'rgatish qaerda o'tkaziladi?",
  ["Yopiq maydonchalar yoki avtodromlarda", "Shahar markazida", "Avtomagistralda", "Turar joy dahasida"],
  "YHQ 146-band.");
Q("people", "O'quv transport vositasida qanday qo'shimcha jihoz bo'lishi shart?",
  ["Instruktor uchun qo'shimcha tormoz va ilashish pedali, ko'zgu, GPS qurilmasi", "Faqat qo'shimcha ko'zgu", "Faqat belgi", "Hech narsa"],
  "YHQ 150-band.");
Q("people", "1.13 belgisi bilan belgilangan tik qiyalikda qanday harakatlanish taqiqlanadi?",
  ["Uzatma va ilashish ajratilgan holda (neytralda)", "Past uzatmada", "Yaqin yorug'lik bilan", "30 km/soat tezlikda"],
  "YHQ 130-band.");
Q("people", "Qiyalikda qarama-qarshi harakatlanish qiyin bo'lsa kim yo'l beradi?",
  ["Tepaga ko'tarilayotgan transport", "Pastga tushayotgan transport", "Kattaroq transport", "Kim tezroq bo'lsa"],
  "YHQ 128-band.");

// ---------------------------------------------------------------- YO'L BELGILARI
Q("signs", "Bu belgi nimani talab qiladi?",
  ["To'xtash chizig'i (u bo'lmasa — kesishayotgan qatnov qismi cheti) oldida to'xtash va yo'l berish", "Tezlikni kamaytirib yo'l berish", "Faqat yuk avtomobillari to'xtashi", "To'xtab turish taqiqlanadi"],
  "«To'xtamasdan harakatlanish taqiqlangan» belgisi.", "stop");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Yo'l bering", "Asosiy yo'l", "Xavfli burilish", "Kirish taqiqlangan"],
  "Ustuvorlik belgisi — kesib o'tilayotgan yo'ldagi transportga yo'l berish kerak.", "giveway");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Kirish taqiqlangan", "Harakatlanish taqiqlangan", "To'xtash taqiqlangan", "Bir tomonlama yo'l"],
  "Shu yo'nalishda barcha transport vositalarining kirishi taqiqlanadi.", "noentry");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Asosiy yo'l", "Asosiy yo'lning oxiri", "Teng huquqli yo'llar chorrahasi", "Yo'l bering"],
  "Sariq romb — «Asosiy yo'l». Tartibga solinmagan chorrahalardan ustunlik bilan o'tish huquqini beradi.", "mainroad");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Asosiy yo'lning oxiri", "Asosiy yo'l", "Yo'l bering", "Barcha cheklovlar oxiri"],
  "Qora chiziq bilan kesilgan sariq romb — «Asosiy yo'lning oxiri».", "mainroadend");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Harakatlanish taqiqlangan", "To'xtab turish taqiqlangan", "Aylanma harakat", "Tezlik cheklangan"],
  "Barcha transport vositalarining harakati taqiqlanadi.", "nomotion");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Piyodalar o'tish joyi", "Piyodalar yo'lkasi", "Bolalar", "Piyodalar harakati taqiqlangan"],
  "Axborot-ishora belgisi.", "crossing");
Q("signs", "Bu ogohlantiruvchi belgi nimani bildiradi?",
  ["Boshqa xavflar", "Yo'l ishlari", "Avtomagistral", "To'xtash joyi"],
  "Boshqa belgilar bilan ko'rsatilmagan xavfli joy.", "danger");
Q("signs", "Bu belgi nimani talab qiladi?",
  ["Faqat to'g'riga harakatlanish", "Bir tomonlama yo'l", "Faqat transport", "Ko'tarilish"],
  "Buyuruvchi belgi — «To'g'riga harakatlanish».", "straight");
Q("signs", "Bu belgi nimani talab qiladi?",
  ["Faqat o'ngga harakatlanish", "O'ngga burilish taqiqlangan", "Aylanma harakat", "Xavfli burilish"],
  "Buyuruvchi belgi — «O'ngga harakatlanish».", "rightonly");
Q("signs", "Bu belgi nimani taqiqlaydi?",
  ["Qayrilib olishni", "Chapga burilishni", "Orqaga yurishni", "Quvib o'tishni"],
  "«Qayrilib olish taqiqlangan».", "nouturn");
Q("signs", "Bu belgi nimani taqiqlaydi?",
  ["Chapga burilishni", "Qayrilib olishni", "O'ngga burilishni", "Kirishni"],
  "«Chapga burilish taqiqlangan».", "noleft");
Q("signs", "Bu ogohlantiruvchi belgi nimani bildiradi?",
  ["Ikki tomonlama harakat", "Bir tomonlama yo'l", "Qatorlar soni", "Quvib o'tish taqiqlangan"],
  "Bir tomonlama yo'l ikki tomonlama bo'lib boshlanadi.", "twoway");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Bir tomonlama yo'l", "Faqat to'g'riga harakatlanish", "Ikki tomonlama harakat", "Avtomagistral"],
  "Axborot-ishora belgisi — butun kengligi bo'yicha bir yo'nalishda harakatlanadigan yo'l.", "oneway");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Berk ko'cha", "Kirish taqiqlangan", "Chorraha", "To'xtash joyi"],
  "Axborot-ishora belgisi — o'tish imkoni yo'q yo'l.", "deadend");
Q("signs", "Bu belgi nimani bildiradi?",
  ["To'xtab turish joyi", "Piyodalar yo'lkasi", "Avtobus bekati", "Parking taqiqlangan"],
  "Axborot-ishora belgisi.", "parking");

// ---------------------------------------------------------------- XAVFSIZLIK, TEXNIK HOLAT, TIBBIY YORDAM
Q("safety", "Arterial qon ketishida (och qizil qon otilib chiqsa) birinchi navbatda nima qilinadi?",
  ["Jarohatdan yuqoriroqqa jgut qo'yiladi va vaqti yozib qo'yiladi", "Yara suv bilan yuviladi", "Jabrlanuvchiga suv beriladi", "Hech narsa qilinmaydi"],
  "Jgut qo'yilgan vaqt yozilgan qog'oz jgut ostiga qo'yiladi.");
Q("safety", "Vena qon ketishida (to'q rangli qon bir tekis oqsa) qanday yordam ko'rsatiladi?",
  ["Bosuvchi bog'lam qo'yiladi", "Jgut jarohatdan yuqoriga qo'yiladi", "Yarani ochiq qoldiriladi", "Issiq kompress qo'yiladi"],
  "Vena qon ketishida odatda bosuvchi bog'lam yetarli.");
Q("safety", "Hushsiz, lekin nafas olayotgan jabrlanuvchini qanday holatda yotqizish kerak?",
  ["Yonboshiga (barqaror yon holatda)", "Chalqancha, boshni ko'tarib", "Qorniga", "O'tirgan holda"],
  "Barqaror yon holat nafas yo'llarining tiqilib qolishining oldini oladi.");
Q("safety", "Nafas va yurak urishi bo'lmasa, yurakni bilvosita massaj qilish va sun'iy nafas berish nisbati:",
  ["30 bosish : 2 nafas", "5 bosish : 1 nafas", "15 bosish : 1 nafas", "50 bosish : 5 nafas"],
  "Zamonaviy tavsiyalar bo'yicha 30:2; tez yordamni (103) chaqirish unutilmaydi.");
Q("safety", "Tez tibbiy yordamni chaqirish raqami:",
  ["103", "101", "102", "104"],
  "101 — yong'in, 102 — militsiya, 103 — tez yordam, 104 — gaz xizmati.");
Q("safety", "Kuyish jarohatida birinchi yordam:",
  ["Kuygan joyni sovuq suv bilan sovitib, toza bog'lam qo'yish", "Pufakchalarni yorish", "Yog' surtish", "Spirt bilan artish"],
  "Pufakchalar yorilmaydi, yog' surtilmaydi.");
Q("safety", "Suyak sinishida birinchi yordam:",
  ["Shikastlangan a'zoni shina bilan qimirlamaydigan qilib mahkamlash", "Suyakni o'zi to'g'rilash", "A'zoni massaj qilish", "Jabrlanuvchini yurgizish"],
  "Immobilizatsiya — eng muhim chora.");
Q("safety", "Burundan qon ketganda boshni qanday tutish kerak?",
  ["Biroz oldinga egib", "Orqaga tashlab", "Yonboshga", "Pastga osiltirib"],
  "Boshni orqaga tashlash qonning tomoqqa oqishiga olib keladi.");
Q("safety", "Yengil avtomobil (M1) shinalari protektor naqshining qoldiq balandligi qanchadan kam bo'lmasligi kerak?",
  ["1,6 mm", "1,0 mm", "2,0 mm", "0,8 mm"],
  "YHQ 3-ilova: M1, N1, O1, O2 toifalari uchun 1,6 mm.");
Q("safety", "Sirpanchiq yo'lda tormozlash qanday bajariladi?",
  ["Ravon, keskin tormozlamasdan va rulni keskin burmasdan", "Keskin tormoz bilan", "Qo'l tormozini tortib", "Neytral uzatmada"],
  "Keskin harakatlar sirpanib ketishga olib keladi.");
Q("safety", "Transport vositasi sirpanib keta boshlasa (orqa o'qi chetga ketsa), rul qayoqqa buriladi?",
  ["Sirpanish yo'nalishi tomonga", "Sirpanishga qarama-qarshi tomonga", "Rul qimirlatilmaydi", "Keskin chapga"],
  "Rulni sirpanish tomonga burish transport vositasini barqarorlashtiradi.");
Q("safety", "Tun paytida yoki uzoq yo'lda uyqu bosa boshlasa, eng to'g'ri harakat:",
  ["Xavfsiz joyda to'xtab dam olish", "Tezlikni oshirib tezroq yetib borish", "Musiqani balandlatish", "Oynani ochib davom etish"],
  "Charchoq holatida boshqarish taqiqlanadi (YHQ 12-band).");
Q("safety", "Haydovchi safardan oldin nimani tekshirishi shart?",
  ["Transport vositasining texnik holati, tozaligi va butligini", "Faqat yoqilg'ini", "Faqat shinalarni", "Hech narsani"],
  "YHQ 11-band.");
