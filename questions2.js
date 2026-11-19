// =====================================================================
//  SAVOLLAR BAZASI — 2-QISM (qo'shimcha savollar)
//  questions.js dan keyin, scenes.js dan oldin yuklanadi.
//  Format o'sha: Q(mavzu, savol, [TO'G'RI, xato...], izoh, rasm)
// =====================================================================

// ---------- Yangi mavzular
Object.assign(TOPICS, {
  terms: "Asosiy atamalar",
  pedestrians: "Piyodalar va yo'lovchilar",
  markings: "Yo'l chiziqlari",
  idsigns: "Taniqlik belgilari",
  cargo: "Yuk tashish",
  bikes: "Velosiped, moped, arava",
});

// ---------- Qo'shimcha belgilar
const tri = (inner) => `<svg viewBox="0 0 100 100"><polygon points="50,4 97,92 3,92" fill="#d32f2f"/><polygon points="50,20 83,83 17,83" fill="#fff"/>${inner}</svg>`;
const circRed = (inner) => `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#d32f2f"/><circle cx="50" cy="50" r="36" fill="#fff"/>${inner}</svg>`;
const circBlue = (inner) => `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565c0"/>${inner}</svg>`;
const walker = (x, y, c = "#111", s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><circle cx="2" cy="-16" r="5" fill="${c}"/><path d="M0 -9 L-3 8 L-10 22 M-2 6 L8 22 M-1 -6 L10 2 M-1 -6 L-10 2" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;

Object.assign(SIGNS, {
  w_crossing: tri(walker(50, 62, "#111", 0.95)),
  w_light: tri(`<rect x="41" y="38" width="18" height="40" rx="4" fill="#111"/><circle cx="50" cy="46" r="4.5" fill="#e53935"/><circle cx="50" cy="58" r="4.5" fill="#fbc02d"/><circle cx="50" cy="70" r="4.5" fill="#43a047"/>`),
  w_curve: tri(`<path d="M44 80 V60 Q44 46 58 44" stroke="#111" stroke-width="7" fill="none"/><polygon points="56,34 70,44 56,54" fill="#111"/>`),
  w_narrow: tri(`<path d="M36 80 V66 L44 52 V40 M64 80 V66 L56 52 V40" stroke="#111" stroke-width="6" fill="none"/>`),
  w_equal: tri(`<path d="M36 46 L64 78 M64 46 L36 78" stroke="#111" stroke-width="8"/>`),
  w_secondary: tri(`<path d="M50 36 V82" stroke="#111" stroke-width="10"/><path d="M32 60 H68" stroke="#111" stroke-width="5"/>`),
  stAndrew: `<svg viewBox="0 0 100 100"><g transform="rotate(35 50 50)"><rect x="8" y="40" width="84" height="20" fill="#d32f2f"/><rect x="12" y="44" width="76" height="12" fill="#fff"/></g><g transform="rotate(-35 50 50)"><rect x="8" y="40" width="84" height="20" fill="#d32f2f"/><rect x="12" y="44" width="76" height="12" fill="#fff"/></g></svg>`,
  pedpath: circBlue(walker(50, 56, "#fff", 1.25)),
  minspeed: circBlue(`<text x="50" y="63" font-size="36" font-weight="700" text-anchor="middle" font-family="Arial" fill="#fff">50</text>`),
  speedend: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fff" stroke="#111" stroke-width="2"/><text x="50" y="63" font-size="36" font-weight="700" text-anchor="middle" font-family="Arial" fill="#9e9e9e">40</text><line x1="22" y1="78" x2="78" y2="22" stroke="#111" stroke-width="6"/></svg>`,
  allend: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fff" stroke="#111" stroke-width="2"/><g stroke="#111" stroke-width="3"><line x1="26" y1="82" x2="82" y2="26"/><line x1="20" y1="76" x2="76" y2="20"/><line x1="32" y1="86" x2="86" y2="32"/><line x1="16" y1="68" x2="68" y2="16"/></g></svg>`,
  weight5: circRed(`<text x="50" y="62" font-size="32" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">5t</text>`),
  id_novice: `<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" fill="#fdd835" stroke="#333" stroke-width="2"/><rect x="44" y="20" width="12" height="44" fill="#111"/><rect x="44" y="70" width="12" height="12" fill="#111"/></svg>`,
  id_deaf: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fdd835" stroke="#333" stroke-width="2"/><circle cx="30" cy="36" r="10" fill="#111"/><circle cx="70" cy="36" r="10" fill="#111"/><circle cx="50" cy="72" r="10" fill="#111"/></svg>`,
  id_training: `<svg viewBox="0 0 100 100"><polygon points="50,6 96,90 4,90" fill="#d32f2f"/><polygon points="50,20 82,82 18,82" fill="#fff"/><text x="50" y="76" font-size="34" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">O'</text></svg>`,
  id_studs: `<svg viewBox="0 0 100 100"><polygon points="50,6 96,90 4,90" fill="#d32f2f"/><polygon points="50,18 84,84 16,84" fill="#fff"/><text x="50" y="76" font-size="38" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">T</text></svg>`,
  id_doctor: `<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" fill="#1565c0"/><rect x="24" y="24" width="52" height="52" fill="#fff"/><rect x="44" y="30" width="12" height="40" fill="#d32f2f"/><rect x="30" y="44" width="40" height="12" fill="#d32f2f"/></svg>`,
  id_oversize: `<svg viewBox="0 0 100 100"><defs><clipPath id="ovc"><rect x="8" y="8" width="84" height="84"/></clipPath></defs><rect x="8" y="8" width="84" height="84" fill="#fff"/><g clip-path="url(#ovc)" stroke="#d32f2f" stroke-width="12"><line x1="-20" y1="60" x2="60" y2="-20"/><line x1="4" y1="84" x2="84" y2="4"/><line x1="28" y1="108" x2="108" y2="28"/><line x1="52" y1="132" x2="132" y2="52"/></g><rect x="8" y="8" width="84" height="84" fill="none" stroke="#333" stroke-width="2"/></svg>`,
  m_solid: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#5f6368"/><rect x="47" y="0" width="6" height="100" fill="#fff"/></svg>`,
  m_dashed: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#5f6368"/><g fill="#fff"><rect x="47" y="2" width="6" height="18"/><rect x="47" y="34" width="6" height="18"/><rect x="47" y="66" width="6" height="18"/></g></svg>`,
  m_combo: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#5f6368"/><rect x="40" y="0" width="6" height="100" fill="#fff"/><g fill="#fff"><rect x="54" y="2" width="6" height="18"/><rect x="54" y="34" width="6" height="18"/><rect x="54" y="66" width="6" height="18"/></g></svg>`,
  m_yellow_solid: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#5f6368"/><rect x="0" y="80" width="100" height="20" fill="#bdbdbd"/><rect x="0" y="72" width="100" height="6" fill="#fbc02d"/></svg>`,
  m_yellow_dashed: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#5f6368"/><rect x="0" y="80" width="100" height="20" fill="#bdbdbd"/><g fill="#fbc02d"><rect x="2" y="72" width="18" height="6"/><rect x="34" y="72" width="18" height="6"/><rect x="66" y="72" width="18" height="6"/></g></svg>`,
});

// =============================================================== ATAMALAR
Q("terms", "YHQ bo'yicha «to'xtash» deb nimaga aytiladi?",
  ["Transport vositasi harakatini 10 daqiqagacha bo'lgan muddatga to'xtatish", "Harakatni 1 soatgacha to'xtatish", "Faqat svetofor oldida to'xtash", "Dvigatelni o'chirib to'xtash"],
  "YHQ 1-bob: to'xtash — 10 daqiqagacha.");
Q("terms", "«To'xtab turish» deb nimaga aytiladi?",
  ["Yo'lovchi chiqarish-tushirish yoki yuk ortish-tushirish bilan bog'liq bo'lmagan, 10 daqiqadan ortiq to'xtash", "5 daqiqagacha to'xtash", "Faqat tunda to'xtash", "Svetoforda kutish"],
  "YHQ 1-bob.");
Q("terms", "Qaysi yo'l «asosiy yo'l» hisoblanadi?",
  ["Ustuvorlik belgisi bilan belgilangan yo'l yoki tuproq yo'lga nisbatan qattiq qoplamali yo'l", "Har doim kengroq yo'l", "Ko'proq transport yuradigan yo'l", "Har doim shahar markaziga olib boradigan yo'l"],
  "YHQ 1-bob: 2.1, 2.3.1–2.3.3, 5.1 belgilari bilan belgilangan yoki qattiq qoplamali yo'l tuproq yo'lga nisbatan asosiy hisoblanadi.");
Q("terms", "Ikkinchi darajali yo'lga tutashgan qattiq qoplamali kichik qism uni kesishayotgan yo'lga teng qiladimi?",
  ["Yo'q, teng qilmaydi", "Ha, teng qiladi", "Faqat shaharda teng qiladi", "Faqat tunda teng qiladi"],
  "YHQ 1-bob.");
Q("terms", "«Yetarlicha ko'rinmaslik» deb ko'rinish masofasi qanchadan kam bo'lgan holatga aytiladi?",
  ["300 m", "100 m", "150 m", "500 m"],
  "YHQ 1-bob: tuman, yomg'ir, qor yoki g'ira-shira paytida ko'rinish 300 m dan kam bo'lsa.");
Q("terms", "Hovli, avtoturargoh, yoqilg'i quyish shoxobchasi qanday hudud hisoblanadi?",
  ["Yondosh hudud", "Chorraha", "Asosiy yo'l", "Aholi punkti"],
  "YHQ 1-bob.");
Q("terms", "Yondosh hududdan chiqish joyi chorraha hisoblanadimi?",
  ["Yo'q", "Ha", "Faqat svetofor bo'lsa", "Faqat asfaltlangan bo'lsa"],
  "YHQ 1-bob.");
Q("terms", "«Tashkiliy kolonna» deb nimaga aytiladi?",
  ["Yalt-yalt chiroqli yetakchi transport hamrohligida bir qatorda ketma-ket harakatlanayotgan uch va undan ortiq mexanik transport vositasi", "Ikki ketma-ket avtomobil", "Har qanday tirbandlik", "Avtobuslar guruhi"],
  "YHQ 1-bob.");
Q("terms", "Haydashni o'rgatish paytida kim haydovchi hisoblanadi?",
  ["Instruktor", "O'quvchi", "Ikkalasi ham emas", "Yo'lovchi"],
  "YHQ 1-bob.");
Q("terms", "Qaysi to'xtash «majburiy to'xtash» hisoblanadi?",
  ["Texnik nosozlik, yuk, haydovchi yoki yo'lovchi holati yoki yo'ldagi to'siq sababli to'xtash", "Do'konga kirish uchun to'xtash", "Do'stni kutish", "Telefonda gaplashish uchun to'xtash"],
  "YHQ 1-bob.");
Q("terms", "Yo'l harakati ishtirokchisi kim?",
  ["Haydovchi, yo'lovchi va piyoda", "Faqat haydovchi", "Faqat yo'l harakati xodimi", "Faqat piyoda"],
  "YHQ 1-bob.");
Q("terms", "Aholi punkti qanday belgilanadi?",
  ["Kirish va chiqishda tegishli axborot belgilari bilan", "Ko'p qavatli uylar bilan", "Svetoforlar bilan", "Yo'l chiziqlari bilan"],
  "YHQ 1-bob: 5.22–5.25 belgilari.");
Q("terms", "Qatnov qismi nima?",
  ["Yo'lning relssiz transport vositalari harakatlanishi uchun mo'ljallangan qismi", "Trotuar", "Yo'l yoqasi", "Ajratuvchi bo'lak"],
  "YHQ 1-bob.");
Q("terms", "Qarama-qarshi qatorga chiqib quvib o'tish qanday tugaydi?",
  ["Avvalgi harakat qatoriga qaytish bilan", "To'xtash bilan", "Chorrahaga yetish bilan", "Burilish bilan"],
  "YHQ 1-bob va 85-band.");

// =============================================================== PIYODALAR VA YO'LOVCHILAR
Q("pedestrians", "Trotuar va yo'l yoqasi bo'lmasa, piyodalar qatnov qismi chetida qanday yurishadi?",
  ["Transport harakatiga qarshi yo'nalishda", "Transport harakati yo'nalishida", "Yo'l o'rtasida", "Istalgancha"],
  "YHQ 15-band.");
Q("pedestrians", "Velosipedni yetaklab ketayotgan piyoda qatnov qismi chetida qanday yuradi?",
  ["Transport harakati yo'nalishida", "Transport harakatiga qarshi", "Yo'l o'rtasida", "Trotuarda yurishi taqiqlanadi"],
  "YHQ 15-band.");
Q("pedestrians", "Piyodalarning tashkiliy guruhi qatnov qismida necha kishidan ko'p bo'lmagan qatorda yuradi?",
  ["4 kishidan", "2 kishidan", "6 kishidan", "8 kishidan"],
  "YHQ 16-band.");
Q("pedestrians", "Bolalar guruhi trotuar yoki yo'lka bo'ylab qachon yurishi mumkin?",
  ["Faqat kunduzi, kattalar hamrohligida", "Istalgan vaqtda", "Faqat tunda", "Kuzatuvchisiz"],
  "YHQ 16-band.");
Q("pedestrians", "Ko'rinish chegarasida o'tish joyi bo'lmasa, piyoda yo'lni qanday kesib o'tadi?",
  ["Ikki tomon yaxshi ko'rinadigan joydan, qatnov qismi chetiga to'g'ri burchak ostida", "Diagonal bo'ylab", "Burilish joyida", "To'xtab turgan avtobus oldidan"],
  "YHQ 17-band.");
Q("pedestrians", "Piyoda to'xtab turgan avtobus yoki trolleybusni qaysi tomondan aylanib o'tadi?",
  ["Orqa tomondan", "Old tomondan", "Istalgan tomondan", "Aylanib o'tish taqiqlanadi"],
  "YHQ 19-band.");
Q("pedestrians", "Piyoda to'xtab turgan tramvayni qaysi tomondan aylanib o'tadi?",
  ["Old tomondan", "Orqa tomondan", "Istalgan tomondan", "Aylanib o'tish taqiqlanadi"],
  "YHQ 19-band.");
Q("pedestrians", "Qatnov qismidan o'tayotganda piyodaga nima taqiqlanadi?",
  ["Telefondan foydalanish, video ko'rish yoki kitob o'qish", "Svetoforga qarash", "Tez yurish", "Yo'lni to'g'ri burchak ostida kesib o'tish"],
  "YHQ 19-band.");
Q("pedestrians", "Yo'lni kesib o'tishga ulgurmagan piyoda qaerda kutadi?",
  ["Xavfsizlik orolchasida, u bo'lmasa qarama-qarshi oqimlarni ajratuvchi chiziqda", "Tramvay izida", "Qatnov qismi o'rtasida istalgan joyda", "Orqaga qaytadi"],
  "YHQ 20-band.");
Q("pedestrians", "Maxsus ishorali tezkor xizmat transporti yaqinlashganda qatnov qismidagi piyoda:",
  ["Darhol qatnov qismini bo'shatadi", "Yo'lni kesib o'tishni davom ettiradi", "To'xtab turadi", "Qo'l ko'taradi"],
  "YHQ 21-band.");
Q("pedestrians", "Yo'lovchilar transport vositasiga qaysi tomondan chiqadi va tushadi?",
  ["Trotuar yoki yo'l yoqasi tomondan", "Qatnov qismi tomondan", "Istalgan tomondan", "Faqat haydovchi tomondan"],
  "YHQ 23-band.");
Q("pedestrians", "Yo'lovchiga harakatlanish paytida nima taqiqlanadi?",
  ["Eshiklarni ochish", "Kamar taqish", "O'tirish", "Gaplashish"],
  "YHQ 24-band.");
Q("pedestrians", "Bort yuk avtomobilida yo'lovchi qaerda o'tirishi taqiqlanadi?",
  ["Bortlar ustida va bortdan baland yuk ustida", "O'rindiqda", "Kabinada", "Hech qaerda"],
  "YHQ 24-band.");
Q("pedestrians", "Yo'lovchilarning YHQ talablariga rioya qilishini kim kuzatishi shart?",
  ["Haydovchi", "Yo'lovchilarning o'zi", "Yo'l harakati xodimi", "Hech kim"],
  "YHQ 24-band.");
Q("pedestrians", "Ko'tarilgan maydoncha bo'lmagan bekatda yo'lovchi qatnov qismiga qachon chiqishi mumkin?",
  ["Transport vositasi to'liq to'xtagandan keyin", "Avtobus yaqinlashayotganda", "Istalgan vaqtda", "Hech qachon"],
  "YHQ 22-band.");

// =============================================================== YO'L CHIZIQLARI
Q("markings", "Bu (oq yaxlit) chiziqni kesib o'tish mumkinmi?",
  ["Yo'q, kesib o'tish taqiqlanadi", "Ha, quvib o'tish uchun", "Ha, chapga burilish uchun", "Ha, tunda"],
  "1.1 chizig'i qarama-qarshi oqimlarni ajratadi; uni kesib o'tish taqiqlanadi (YHQ 64-band).", "m_solid");
Q("markings", "Bu (oq uzuq) chiziqni kesib o'tish mumkinmi?",
  ["Ha, mumkin", "Yo'q, taqiqlanadi", "Faqat yuk avtomobillariga mumkin", "Faqat tunda mumkin"],
  "Uzuq chiziqlarni qayta tizilishda kesib o'tish mumkin (YHQ 70-band).", "m_dashed");
Q("markings", "Yonma-yon yaxlit va uzuq chiziq. Uzuq chiziq sizning tomoningizda bo'lsa:",
  ["Kesib o'tish mumkin", "Kesib o'tish taqiqlanadi", "Faqat to'xtash uchun mumkin", "Faqat tunda mumkin"],
  "Uzuq tomondan kesib o'tish mumkin, yaxlit tomondan — taqiqlanadi (YHQ 64-band, 1.11 chizig'i).", "m_combo");
Q("markings", "Qatnov qismi chetidagi sariq yaxlit chiziq nimani bildiradi?",
  ["To'xtash taqiqlanadi", "To'xtab turish ruxsat", "Piyodalar o'tish joyi", "Avtobus bekati"],
  "1.4 chizig'i ta'sirida to'xtash taqiqlanadi (YHQ 91-band).", "m_yellow_solid");
Q("markings", "Qatnov qismi chetidagi sariq uzuq chiziq nimani bildiradi?",
  ["To'xtab turish taqiqlanadi", "To'xtash taqiqlanadi", "Yo'nalishli transport qatori", "Harakat taqiqlanadi"],
  "1.10 chizig'i ta'sirida to'xtab turish taqiqlanadi (YHQ 92-band).", "m_yellow_dashed");
Q("markings", "Ikki tomonlama yo'lda qarama-qarshi yo'nalishga chiqish qachon taqiqlanadi?",
  ["Oqimlar tramvay izi, ajratuvchi bo'lak, 1.1 yoki 1.3 chiziqlari bilan ajratilgan bo'lsa", "Uzuq chiziq bilan ajratilgan bo'lsa", "Kunduzi", "Hech qachon"],
  "YHQ 64-band.");
Q("markings", "Chiziqlar bilan qatorlarga ajratilgan qatnov qismida haydovchi qanday harakatlanadi?",
  ["Qatorlar bo'ylab qat'iy ravishda", "Ikki qator o'rtasida", "Istalgancha", "Faqat chap qatorda"],
  "YHQ 70-band.");
Q("markings", "Ikki 1.9 chizig'i bilan chegaralangan qatorda reversiv svetofor o'chiq bo'lsa:",
  ["Shu qatorga kirish taqiqlanadi", "Kirish ruxsat", "Faqat avtobuslarga ruxsat", "Faqat kunduzi ruxsat"],
  "YHQ 35-band.");
Q("markings", "Uch qatorli ikki tomonlama yo'lda o'rta qatorga qachon chiqish mumkin?",
  ["Faqat quvib o'tish, aylanib o'tish, chapga burilish yoki qayrilib olish uchun", "Har doim", "Hech qachon", "Faqat to'xtash uchun"],
  "YHQ 66-band. Eng chap qatorga chiqish taqiqlanadi.");

// =============================================================== TANIQLIK BELGILARI
Q("idsigns", "Bu taniqlik belgisi nimani bildiradi?",
  ["Boshlovchi haydovchi (staji 2 yildan kam)", "Kar haydovchi", "Shifokor", "Xavfli yuk"],
  "YHQ 176-band: sariq kvadratdagi «!» — staji 2 yildan kam haydovchi.", "id_novice");
Q("idsigns", "Bu taniqlik belgisi nimani bildiradi?",
  ["Kar yoki soqov haydovchi", "Boshlovchi haydovchi", "Bolalar guruhini tashish", "Nogironligi bor haydovchi"],
  "YHQ 176-band: sariq doiradagi uchta qora doira.", "id_deaf");
Q("idsigns", "Bu taniqlik belgisi nimani bildiradi?",
  ["Boshqarishni o'rgatish transport vositasi", "Shipli shinalar", "Avariya to'xtash belgisi", "Ehtiyot bo'ling"],
  "YHQ 176-band: «O'» harfli uchburchak — o'quv avtomobili.", "id_training");
Q("idsigns", "Bu taniqlik belgisi nimani bildiradi?",
  ["Shinalari shipli transport vositasi", "Tirkama", "O'quv avtomobili", "Taksi"],
  "YHQ 176-band: «T» harfli uchburchak — shipli shinalar.", "id_studs");
Q("idsigns", "Bu taniqlik belgisi nimani bildiradi?",
  ["Shifokor boshqarayotgan transport", "Tez yordam mashinasi", "Dorixona", "Kasalxona"],
  "YHQ 176-band: «Shifokor» belgisi ixtiyoriy o'rnatiladi va ustunlik bermaydi.", "id_doctor");
Q("idsigns", "Bu belgi nimani bildiradi?",
  ["Katta o'lchamli yuk", "Xavfli yuk", "Shatakka olish", "Yo'l ishlari"],
  "YHQ 163- va 176-bandlar: qizil-oq diagonal yo'lli kvadrat.", "id_oversize");
Q("idsigns", "«Boshlovchi haydovchi» belgisi qaysi haydovchilarga o'rnatiladi?",
  ["Haydash staji 2 yildan kam bo'lganlarga", "Staji 1 yildan kam bo'lganlarga", "Staji 5 yildan kam bo'lganlarga", "18 yoshgacha bo'lganlarga"],
  "YHQ 176-band.");
Q("idsigns", "«Bolalar guruhini tashish» belgisi qayerga o'rnatiladi?",
  ["Transport vositasining oldi va orqasiga", "Faqat orqasiga", "Faqat tomiga", "Faqat yon oynaga"],
  "YHQ 156- va 176-bandlar.");
Q("idsigns", "Egiluvchan bog'lamda shatakka olishda bog'lamga nima o'rnatiladi?",
  ["Qizil-oq diagonal yo'lli yorug'lik qaytaruvchi belgilar (kamida ikkita)", "Avariya to'xtash belgisi", "Bitta qizil bayroq", "Hech narsa"],
  "YHQ 177-band.");
Q("idsigns", "Davlat texnik ko'rigidan o'tmagan transport vositasidan foydalanish:",
  ["Taqiqlanadi", "Shahar ichida ruxsat", "Bir oy davomida ruxsat", "Ruxsat"],
  "YHQ 179-band.");
Q("idsigns", "Ko'k yoki qizil yalt-yalt chiroqlarni qaysi transport vositalariga o'rnatish mumkin?",
  ["Tezkor va maxsus xizmatlar transportiga", "Har qanday avtomobilga", "Taksiga", "Yuk avtomobiliga"],
  "YHQ 185-band.");

// =============================================================== YUK TASHISH
Q("cargo", "Yengil avtomobil tomidagi bagajnikda yuk balandligi qanchadan oshmasligi kerak?",
  ["1 m", "0,5 m", "1,5 m", "2 m"],
  "YHQ 162-band (maxsus mahkamlagichli velosipedlar bundan mustasno).");
Q("cargo", "Yengil avtomobilda yuk gabaritdan uzunligi bo'yicha qanchadan ortiq chiqib turmasligi kerak?",
  ["0,5 m", "1 m", "1,5 m", "2 m"],
  "YHQ 162-band.");
Q("cargo", "Yuk old yoki orqadan qanchadan ortiq chiqib tursa, «Katta o'lchamli yuk» belgisi qo'yiladi?",
  ["1 m dan ortiq", "0,5 m dan ortiq", "2 m dan ortiq", "0,2 m dan ortiq"],
  "YHQ 163-band. Yon tomondan — 0,4 m dan ortiq.");
Q("cargo", "Yuk yon gabarit chetidan qanchadan ortiq chiqib tursa, «Katta o'lchamli yuk» belgisi qo'yiladi?",
  ["0,4 m", "1 m", "0,1 m", "0,8 m"],
  "YHQ 163-band.");
Q("cargo", "Qorong'ida chiqib turgan yukning old tomonida nima bo'lishi kerak?",
  ["Oq chiroq yoki oq yorug'lik qaytargich", "Qizil chiroq", "Sariq bayroq", "Hech narsa"],
  "YHQ 163-band. Orqada — qizil chiroq yoki qaytargich.");
Q("cargo", "Yuk yo'l sathidan qancha balandlikdan oshsa, DYHXX bilan kelishish kerak?",
  ["4 m", "3 m", "3,5 m", "5 m"],
  "YHQ 164-band.");
Q("cargo", "Qaysi kenglikdan ortiq yukni tashish DYHXX bilan kelishiladi (oddiy kuzov uchun)?",
  ["2,55 m", "2 m", "3 m", "2,2 m"],
  "YHQ 164-band (izotermik va sovutgichli kuzov — 2,6 m).");
Q("cargo", "Uzunligi qanchadan ortiq yakka transport vositasi harakati DYHXX bilan kelishiladi?",
  ["12 m", "10 m", "15 m", "20 m"],
  "YHQ 164-band. Tirkamali avtopoyezd — 20 m.");
Q("cargo", "Qum, shag'al kabi sochiluvchan yukni ochiq kuzovda tashishda:",
  ["Yuk brezent yoki boshqa qalin material bilan yopilishi shart", "Yopish shart emas", "Faqat tunda tashiladi", "Faqat suv sepiladi"],
  "YHQ 162-band.");
Q("cargo", "Yuk haydovchining ko'rishini cheklasa yoki boshqaruvni qiyinlashtirsa:",
  ["Haydovchi kamchilikni bartaraf etadi, imkoni bo'lmasa harakatni to'xtatadi", "Sekin harakatni davom ettiradi", "Avariya ishorasini yoqib davom etadi", "Hech narsa qilmaydi"],
  "YHQ 162-band.");
Q("cargo", "Yuk tashqi yoritish asboblari va davlat raqamini to'sib qo'yishi mumkinmi?",
  ["Yo'q", "Ha", "Faqat kunduzi", "Faqat shahar tashqarisida"],
  "YHQ 162-band.");
Q("cargo", "Avtobus va mikroavtobus tomiga yuk mahkamlagich o'rnatish:",
  ["Taqiqlanadi", "Ruxsat", "Shaharlararo qatnovda ruxsat", "1 m gacha ruxsat"],
  "YHQ 164-band.");
Q("cargo", "Haydovchi yukning joylashuvi va mahkamligini qachon tekshiradi?",
  ["Harakatdan oldin, yo'lda esa kuzatib boradi", "Faqat manzilga yetgach", "Tekshirmaydi", "Faqat yuk ortilganda"],
  "YHQ 161-band.");

// =============================================================== VELOSIPED, MOPED, ARAVA
Q("bikes", "Velosiped boshqarish necha yoshdan ruxsat etiladi?",
  ["14 yoshdan", "10 yoshdan", "12 yoshdan", "16 yoshdan"],
  "YHQ 165-band.");
Q("bikes", "Moped va skuter boshqarish necha yoshdan ruxsat etiladi?",
  ["16 yoshdan", "14 yoshdan", "18 yoshdan", "12 yoshdan"],
  "YHQ 165-band.");
Q("bikes", "Velosipedchi qatnov qismida qanday harakatlanadi?",
  ["Bir qatorda, iloji boricha o'ng chetda", "Ikki qatorda", "Yo'l o'rtasida", "Chap chetda"],
  "YHQ 166-band.");
Q("bikes", "Velosipedda qanday yo'lovchi tashish mumkin?",
  ["Maxsus o'rindiq va oyoq tayanchida 7 yoshgacha bolani", "Har qanday kattani", "Ramada bolani", "Hech kimni"],
  "YHQ 168-band.");
Q("bikes", "Velosiped yo'lkasi bo'lsa, velosipedchining qatnov qismida harakatlanishi:",
  ["Taqiqlanadi", "Ruxsat", "Faqat kunduzi ruxsat", "Faqat tezlik 20 km/soatdan oshsa ruxsat"],
  "YHQ 168-band.");
Q("bikes", "Velosipedchi piyodalar o'tish joyida yo'lni velosipedda kesib o'tishi mumkinmi?",
  ["Yo'q (velosiped yo'lkasidan tashqari)", "Ha", "Faqat yashil ishorada", "Faqat signal berib"],
  "YHQ 168-band: velosipeddan tushib, yetaklab o'tish kerak.");
Q("bikes", "Qorong'ida velosipedning old tomonida nima bo'lishi kerak?",
  ["Oq chiroq yoki oq qaytargich", "Qizil chiroq", "Sariq chiroq", "Hech narsa"],
  "YHQ 167-band. Orqada — qizil, yonlarda — sariq yoki qizil qaytargich.");
Q("bikes", "Velosiped yo'lkasi bo'lmagan qatnov qismida qorong'ida velosipedchi:",
  ["Yorug'lik qaytaruvchi nimcha yoki kiyim kiyishi kerak", "Faqat shlem taqadi", "Hech narsa kiymaydi", "Qizil bayroq ko'taradi"],
  "YHQ 167-band.");
Q("bikes", "Velosipedni rulni ushlamasdan boshqarish:",
  ["Taqiqlanadi", "Ruxsat", "Faqat to'g'ri yo'lda ruxsat", "Faqat tunda taqiqlanadi"],
  "YHQ 168-band: ishora berishdan tashqari holatda bir qo'lda boshqarish ham taqiqlanadi.");
Q("bikes", "Velosiped yo'lkasi trotuarni kesib o'tgan joyda velosipedchi:",
  ["Piyodalarga yo'l beradi", "Ustunlikka ega", "Signal berib o'tadi", "Tezlikni oshiradi"],
  "YHQ 169-band.");
Q("bikes", "Hayvonlarni yo'lda qarovsiz qoldirish:",
  ["Taqiqlanadi", "Kunduzi ruxsat", "Qishloqda ruxsat", "Ruxsat"],
  "YHQ 173-band.");
Q("bikes", "Arava haydovchisi ko'rinishi cheklangan hovlidan yo'lga chiqayotganda:",
  ["Hayvonni jilovidan ushlab olib chiqadi", "Tez chiqadi", "Signal beradi", "Aravada o'tirib chiqadi"],
  "YHQ 170-band.");
Q("bikes", "Velosipedda bo'lishi shart bo'lgan jihozlar:",
  ["Soz tormoz va ovozli signal", "Faqat chiroq", "Faqat ko'zgu", "Spidometr"],
  "YHQ 167-band.");

// =============================================================== QO'SHIMCHA: UMUMIY
Q("general", "Ruxsat etilgan to'la vazni 3500 kg dan ortiq yuk avtomobilini boshqarish uchun qaysi toifa kerak?",
  ["«C»", "«B»", "«D»", "«A»"],
  "YHQ 8-band.");
Q("general", "Bo'g'imli avtobusni boshqarish uchun qaysi toifa kerak?",
  ["«DE»", "«D»", "«CE»", "«BE»"],
  "YHQ 8-band: «DE» bo'g'imli avtobuslarni ham qamraydi.");
Q("general", "Tramvay haydovchisi qaysi transport vositasini boshqarishi mumkin?",
  ["Faqat tramvayni", "Tramvay va trolleybusni", "Avtobusni", "Barcha transportni"],
  "YHQ 8-band.");
Q("general", "Boshqa shaxsning sug'urta polisiga kiritilmagan avtomobilini boshqarish uchun:",
  ["Egasining ishtiroki yoki ishonchnoma kerak", "Hech narsa kerak emas", "Faqat pasport kerak", "Faqat og'zaki ruxsat yetarli"],
  "YHQ 8-band.");
Q("general", "Harakatdan oldin haydovchi yo'lovchilarni nimadan ogohlantiradi?",
  ["Kamar taqish va tana a'zolarini tashqariga chiqarmaslikdan", "Telefonni o'chirishdan", "Gaplashmaslikdan", "Hech narsadan"],
  "YHQ 11-band.");
Q("general", "Biometrik pasport yoki ID-karta egasi transport vositasi hujjatlarini ko'rsatishi shartmi?",
  ["Yo'q, inspektor ularni planshet orqali tekshiradi", "Ha, har doim", "Faqat shahar tashqarisida", "Faqat tunda"],
  "YHQ 7-band.");
Q("general", "Jabrlanuvchini tibbiy muassasaga olib borgan haydovchi u yerda nima qiladi?",
  ["Ism-familiyasi va davlat raqamini aytadi, hujjatlarini ko'rsatadi, so'ng hodisa joyiga qaytadi", "Hech narsa demay ketadi", "Faqat telefon raqamini qoldiradi", "Uyiga ketadi"],
  "YHQ 13-band.");
Q("general", "YTH bo'yicha majburiy sug'urta xabarnomasi rasmiylashtirilsa, IIO ga xabar berish:",
  ["Shart emas", "Shart", "Faqat tunda shart", "Faqat yuk avtomobillari uchun shart"],
  "YHQ 14-band.");
Q("general", "YTHdan keyin haydovchi guvohlar haqida nima qiladi?",
  ["Ularning ism-familiyasi va manzillarini yozib oladi", "Ularni uyiga jo'natadi", "Hech narsa", "Ularni hodisa joyidan uzoqlashtiradi"],
  "YHQ 13-band.");
Q("general", "Ichki ishlar organlari xodimlari kelgunga qadar YTH ishtirokchisi bo'lgan haydovchi:",
  ["Hodisa joyida kutadi", "Ketib qoladi", "Avtomobilni ta'mirga olib ketadi", "Hujjatlarni boshqaga beradi"],
  "YHQ 13-band.");

// =============================================================== QO'SHIMCHA: SVETOFOR
Q("lights", "Svetofordagi raqamli tablo nimani ko'rsatadi?",
  ["Ishora yonib turishining qolgan vaqtini (soniyada)", "Tezlik chegarasini", "Masofani", "Haroratni"],
  "YHQ 31-band.");
Q("lights", "Asosiy yashil ishora ustidagi qora strelkalar nimani bildiradi?",
  ["Qo'shimcha seksiya borligini va asosiy ishorada ruxsat etilgan yo'nalishlarni", "Taqiqlangan yo'nalishlarni", "Faqat tramvay yo'nalishini", "Svetofor buzilganini"],
  "YHQ 33-band.");
Q("lights", "Strelka shaklidagi qizil, sariq va yashil ishoralar:",
  ["Aylana ishoralar bilan bir xil ma'noga ega, lekin faqat ko'rsatilgan yo'nalishga taalluqli", "Faqat tramvaylar uchun", "Faqat piyodalar uchun", "Hech qanday ma'noga ega emas"],
  "YHQ 32-band.");
Q("lights", "Piyoda siymosi tasvirlangan svetofor ishoralari kimga taalluqli?",
  ["Faqat piyodalarga", "Haydovchilarga", "Velosipedchilarga", "Hammaga"],
  "YHQ 34-band.");
Q("lights", "Tartibga soluvchi qo'lini yuqoriga ko'targanda qatnov qismida qolgan piyodalar:",
  ["Qatnov qismini bo'shatadi yoki ajratuvchi chiziqda to'xtaydi", "Joyida turadi", "Orqaga qaytadi", "Yugurib o'tadi"],
  "YHQ 42-band.");
Q("lights", "Svetofor ishlamay qolgan bo'lsa, haydovchi chorrahaga kirishdan oldin:",
  ["Kesib o'tuvchi yo'nalishdagi svetoforlar ham ishlamayotganiga ishonch hosil qiladi", "Darhol o'tadi", "Ovozli signal beradi", "Orqaga qaytadi"],
  "YHQ 43-band.");
Q("lights", "Temir yo'l kesishmasidagi qizil miltillovchi ishora bilan birga qanday signal berilishi mumkin?",
  ["Ovozli signal", "Yashil strelka", "Oq ishora", "Hech qanday"],
  "YHQ 37-band.");

// =============================================================== QO'SHIMCHA: MANYOVR
Q("maneuver", "Yo'l tor bo'lib, chap chekkadan qayrilib olishning imkoni bo'lmasa:",
  ["O'ng chekkadan, ikki yo'nalishdagi transportga yo'l berib qayrilish mumkin", "Qayrilish taqiqlanadi", "Orqaga yurib qayriladi", "Signal berib qayriladi"],
  "YHQ 59-band.");
Q("maneuver", "Burilishdan keyin transport vositasi qarama-qarshi harakat qatnov qismida qolishi mumkinmi?",
  ["Yo'q, burilish shunday bajariladiki, qarama-qarshi qatorga chiqmaslik kerak", "Ha", "Faqat kunduzi", "Faqat chapga burilishda"],
  "YHQ 57-band.");
Q("maneuver", "Yo'ldan yondosh hududga burilishda haydovchi kimga yo'l beradi?",
  ["Harakat yo'nalishini kesib o'tayotgan piyoda va velosipedchilarga", "Hech kimga", "Faqat avtobuslarga", "Orqadagilarga"],
  "YHQ 54-band.");
Q("maneuver", "Gabariti tufayli burilishni chekka holatdan bajara olmaydigan transport vositasi:",
  ["Xavfsizlikni ta'minlab, boshqalarga xalaqit bermay, bu talabdan chetga chiqishi mumkin", "Burilishi taqiqlanadi", "Faqat tunda buriladi", "Orqaga yurishi kerak"],
  "YHQ 58-band.");
Q("maneuver", "Aholi punktida tig'iz harakatda qator almashtirish qachon ruxsat etiladi?",
  ["Burilish, qayrilish, to'xtash yoki to'siqni aylanib o'tish uchun", "Har doim", "Faqat tunda", "Hech qachon"],
  "YHQ 67-band.");
Q("maneuver", "Bir tomonlama uch va undan ortiq qatorli yo'lda yuk avtomobillari eng chap qatorni qachon egallaydi?",
  ["Faqat chapga burilish yoki qayrilish uchun, boshqa qatorlar band bo'lsa", "Har doim", "Quvib o'tishda", "Hech qachon"],
  "YHQ 67-band.");
Q("maneuver", "Bir tomonlama yo'lning chap tomonidagi tramvay izida qachon harakatlanish mumkin?",
  ["Boshqa qatorlar band bo'lsa, tramvayga xalaqit bermasdan", "Har doim", "Hech qachon", "Faqat tunda"],
  "YHQ 69-band.");
Q("maneuver", "Ajratilmagan ikki tomonlama yo'lda xavfsizlik orolchasi va ustunlar qaysi tomondan aylanib o'tiladi?",
  ["O'ng tomondan", "Chap tomondan", "Istalgan tomondan", "Aylanib o'tish taqiqlanadi"],
  "YHQ 76-band (belgi va chiziqlar boshqacha ko'rsatmagan bo'lsa).");
Q("maneuver", "Shahar tashqarisida uzunligi 7 m dan ortiq transport vositasi oldinda qanday masofa qoldiradi?",
  ["Quvib o'tayotgan transport o'z qatoriga qaytishi uchun yetarli masofa", "Kamida 1 m", "Masofa shart emas", "Kamida 500 m"],
  "YHQ 74-band.");
Q("maneuver", "Orqaga harakatlanayotganda haydovchi:",
  ["Xavfsizlikka ishonch hosil qiladi, kerak bo'lsa boshqa shaxs yordamidan foydalanadi", "Faqat ko'zguga qaraydi", "Tezlikni oshiradi", "Signal beradi va harakatlanadi"],
  "YHQ 63-band.");

// =============================================================== QO'SHIMCHA: TEZLIK
Q("speed", "Aholi punktidan tashqarida tirkamali yuk avtomobillari uchun eng yuqori tezlik:",
  ["70 km/soat", "80 km/soat", "90 km/soat", "60 km/soat"],
  "YHQ 79-band.");
Q("speed", "Toshkent, Nukus va viloyat markazlarining alohida tig'iz hududlarida tezlik qancha bo'lishi mumkin?",
  ["60 km/soat", "50 km/soat", "80 km/soat", "40 km/soat"],
  "YHQ 78-band.");
Q("speed", "Bu belgi nimani bildiradi?",
  ["Eng kam tezlik — kamida 50 km/soat", "Eng yuqori tezlik 50 km/soat", "Masofa 50 m", "50-yo'nalish"],
  "Ko'k doiradagi raqam — «Eng kam tezlik chegarasi» buyuruvchi belgisi.", "minspeed");
Q("speed", "Bu belgi nimani bildiradi?",
  ["Eng yuqori tezlik cheklovi hududining oxiri", "Tezlik 40 km/soat", "Eng kam tezlik", "Barcha cheklovlar oxiri"],
  "«Eng yuqori tezlik cheklovi hududining oxiri».", "speedend");
Q("speed", "Tezlikni tanlashda haydovchi nimalarni hisobga olishi kerak?",
  ["Harakat jadalligi, yo'l va ob-havo sharoiti, ko'rinish va transport holatini", "Faqat belgidagi raqamni", "Faqat o'z shoshilishini", "Faqat dvigatel quvvatini"],
  "Tezlik ruxsat etilgan chegaradan oshmasligi va sharoitga mos bo'lishi kerak.");
Q("speed", "Belgilangan maktab oldidagi 30 km/soat cheklovi maktabdan qancha masofada amal qiladi?",
  ["300 m dan kam masofada", "100 m", "500 m", "1 km"],
  "YHQ 78-band.");

// =============================================================== QO'SHIMCHA: TO'XTASH
Q("stopping", "Velosiped yo'lkasi kesishmasidan qancha masofa qolganda to'xtash taqiqlanadi?",
  ["10 m dan kam", "5 m dan kam", "15 m dan kam", "30 m dan kam"],
  "YHQ 91-band.");
Q("stopping", "Har yo'nalishda uch qatordan kam bo'lgan ko'prik va estakadalarda to'xtash:",
  ["Taqiqlanadi", "Ruxsat", "Qisqa muddatga ruxsat", "Faqat avtobuslarga ruxsat"],
  "YHQ 91-band.");
Q("stopping", "Tramvay izlarida to'xtash:",
  ["Taqiqlanadi", "Ruxsat", "5 daqiqagacha ruxsat", "Tunda ruxsat"],
  "YHQ 91-band.");
Q("stopping", "Aholi punktidan tashqarida «Asosiy yo'l» belgisi o'rnatilgan qatnov qismida to'xtab turish:",
  ["Taqiqlanadi", "Ruxsat", "Faqat kunduzi ruxsat", "Faqat yo'l yoqasida taqiqlanadi"],
  "YHQ 92-band.");
Q("stopping", "Kajavasiz ikki g'ildirakli mototsikllar qatnov qismi chetida qanday to'xtab turishi mumkin?",
  ["Ikki qatorda", "Faqat bitta qatorda", "Yo'l o'rtasida", "To'xtab turish taqiqlanadi"],
  "YHQ 89-band.");
Q("stopping", "Trotuarda to'xtab turish qachon ruxsat etiladi?",
  ["Tegishli belgi va qo'shimcha axborot belgisi o'rnatilgan joyda", "Har doim", "Tunda", "Hech qachon"],
  "YHQ 89-band.");
Q("stopping", "Ruxsat etilgan to'la vazni 3,5 t dan ortiq yuk avtomobili bir tomonlama yo'lning chap tomonida qachon to'xtashi mumkin?",
  ["Faqat yuk ortish yoki tushirish uchun", "Har doim", "Hech qachon", "Dam olish uchun"],
  "YHQ 88-band.");

// =============================================================== QO'SHIMCHA: CHORRAHALAR
Q("junction", "Ustuvorlik belgilari bo'lmagan tuproq yo'ldan asfalt yo'lga chiqayotgan haydovchi:",
  ["Asfalt yo'ldagi transportga yo'l beradi", "Ustunlikka ega", "Faqat o'ngdagiga yo'l beradi", "Hech kimga yo'l bermaydi"],
  "Qattiq qoplamali yo'l tuproq yo'lga nisbatan asosiy hisoblanadi (YHQ 1-bob, 104-band).");
Q("junction", "Ikkinchi darajali yo'llardagi haydovchilar o'zaro qanday o'tadi?",
  ["Teng huquqli yo'llar chorrahasi qoidalari bo'yicha", "Kattarog'i birinchi", "Chapdagisi birinchi", "Kim tez kelsa"],
  "YHQ 106-band.");
Q("junction", "To'xtash chizig'idan o'tib ketgan haydovchi oldida tirbandlik bo'lsa:",
  ["Kesishayotgan qatnov qismlariga chiqishi taqiqlanadi", "Chiqishi mumkin", "Signal berib chiqadi", "Orqaga yuradi"],
  "YHQ 97-band.");
Q("junction", "Tartibga solingan chorrahada yashil ishorada o'ngga burilayotgan haydovchi kimga yo'l beradi?",
  ["Burilayotgan qatnov qismini kesib o'tayotgan piyodalarga", "Hech kimga", "Qarama-qarshi to'g'riga ketayotganlarga", "Orqadagilarga"],
  "YHQ 96- va 103-bandlar.");
Q("junction", "Bu belgi nima haqida ogohlantiradi?",
  ["Teng huquqli yo'llar chorrahasi", "Temir yo'l kesishmasi", "Yo'l torayishi", "Aylanma harakat"],
  "Ogohlantiruvchi belgi — teng huquqli yo'llar kesishmasi; o'ngdagiga yo'l beriladi.", "w_equal");
Q("junction", "Bu belgi nimani bildiradi?",
  ["Siz asosiy yo'ldasiz, oldinda ikkinchi darajali yo'l bilan kesishma", "Teng huquqli chorraha", "Yo'l bering", "Tor ko'prik"],
  "Ustuvorlik belgisi — ikkinchi darajali yo'l bilan kesishish.", "w_secondary");

// =============================================================== QO'SHIMCHA: YO'L BELGILARI
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["Piyodalar o'tish joyi", "Piyodalar yo'lkasi", "Bolalar", "Yo'l ishlari"],
  "Ogohlantiruvchi belgi — oldinda piyodalar o'tish joyi.", "w_crossing");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["Svetofor bilan tartibga solish", "Temir yo'l kesishmasi", "Yo'l ishlari", "Tirbandlik"],
  "Ogohlantiruvchi belgi — oldinda svetofor bilan tartibga solinadigan joy.", "w_light");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["Xavfli burilish", "Faqat o'ngga harakatlanish", "Aylanma harakat", "Asosiy yo'l"],
  "Ogohlantiruvchi belgi — ko'rinishi cheklangan, kichik radiusli burilish.", "w_curve");
Q("signs", "Bu belgi nima haqida ogohlantiradi?",
  ["Yo'lning torayishi", "Ko'prik", "Ikki tomonlama harakat", "Tunnel"],
  "Ogohlantiruvchi belgi — yo'l torayadi.", "w_narrow");
Q("signs", "Bu belgi qaerda o'rnatiladi?",
  ["Shlagbaumsiz temir yo'l kesishmasi oldida", "Har qanday chorrahada", "Avtomagistralda", "Ko'prik oldida"],
  "Qizil hoshiyali oq «X» — shlagbaumsiz temir yo'l kesishmasi.", "stAndrew");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Piyodalar yo'lkasi", "Piyodalar o'tish joyi", "Piyodalar harakati taqiqlangan", "Bolalar"],
  "Buyuruvchi belgi — faqat piyodalar harakatlanishi mumkin.", "pedpath");
Q("signs", "Bu belgi nimani bildiradi?",
  ["Barcha cheklovlar hududining oxiri", "Harakatlanish taqiqlangan", "Kirish taqiqlangan", "Tezlik cheklovi"],
  "Diagonal yo'llar — avvalgi taqiqlovchi belgilar ta'siri tugadi.", "allend");
Q("signs", "Bu belgi nimani taqiqlaydi?",
  ["Haqiqiy vazni belgida ko'rsatilgandan ortiq transport vositalari harakatini", "Uzunligi 5 m dan ortiq transportni", "5 ta transportni", "5 daqiqadan ortiq to'xtashni"],
  "«Vazn cheklangan» belgisi.", "weight5");
Q("signs", "Ogohlantiruvchi belgilar odatda qanday shaklda bo'ladi?",
  ["Qizil hoshiyali oq uchburchak", "Ko'k doira", "Ko'k to'rtburchak", "Sariq romb"],
  "Ogohlantiruvchi belgilar — uchburchak shaklida.");
Q("signs", "Buyuruvchi belgilar qanday ko'rinishda bo'ladi?",
  ["Ko'k fonli doira, oq tasvir bilan", "Qizil hoshiyali doira", "Sariq romb", "Qizil uchburchak"],
  "Buyuruvchi belgilar — ko'k doira.");
Q("signs", "Taqiqlovchi belgilar odatda qanday ko'rinishda bo'ladi?",
  ["Qizil hoshiyali doira", "Ko'k doira", "Ko'k to'rtburchak", "Sariq romb"],
  "Taqiqlovchi belgilar — qizil hoshiyali doira.");

// =============================================================== QO'SHIMCHA: XAVFSIZLIK VA TIBBIY YORDAM
Q("safety", "Jgut qo'yishda nimaga e'tibor beriladi?",
  ["Jgut ostiga mato qo'yiladi va qo'yilgan vaqt yoziladi", "Jgut to'g'ridan-to'g'ri yaraga qo'yiladi", "Vaqt yozilmaydi", "Jgut bo'yinga qo'yiladi"],
  "Jgut teriga bevosita qo'yilmaydi; vaqt yozilgan qog'oz qo'shib qo'yiladi.");
Q("safety", "Umurtqa pog'onasi shikastlangan deb taxmin qilingan jabrlanuvchini:",
  ["Zarurat bo'lmasa joyidan qo'zg'atmaslik kerak", "Darhol o'tqazish kerak", "Yurgizib ko'rish kerak", "Silkitish kerak"],
  "Noto'g'ri ko'chirish shikastni og'irlashtiradi; hayotga xavf bo'lmasa qimirlatilmaydi.");
Q("safety", "Hushidan ketgan jabrlanuvchiga suv yoki dori berish mumkinmi?",
  ["Yo'q", "Ha, suv berish kerak", "Ha, og'riq qoldiruvchi berish kerak", "Ha, choy berish kerak"],
  "Hushsiz odam yuta olmaydi, nafas yo'li tiqilib qolishi mumkin.");
Q("safety", "Jabrlanuvchida shok belgilari (rangparlik, sovuq ter) bo'lsa:",
  ["Uni yotqizib, issiq o'rab, tinchlantirish va tez yordam chaqirish kerak", "Yugurtirish kerak", "Sovuq suv quyish kerak", "Spirtli ichimlik berish kerak"],
  "Shokda jabrlanuvchi isitiladi va tinch holatda saqlanadi.");
Q("safety", "Avtomobilda qanday ashyolar bo'lishi kerak?",
  ["Dori qutisi, o't o'chirgich va avariya to'xtash belgisi", "Faqat zaxira g'ildirak", "Faqat suv", "Hech narsa"],
  "Avariya to'xtash belgisi YHQ 51-bandda talab qilinadi; dori qutisi va o't o'chirgich birinchi yordam va yong'inga qarshi zarur.");
Q("safety", "Kuchli yomg'irda suv ustida sirpanishning (akvaplaning) oldini olish uchun:",
  ["Tezlikni kamaytirish kerak", "Tezlikni oshirish kerak", "Neytral uzatmaga o'tish kerak", "Keskin tormozlash kerak"],
  "Tezlik oshgani sari shina suvni siqib chiqara olmaydi va yo'l bilan aloqa yo'qoladi.");
Q("safety", "Tunda yoritilmagan yo'lda yaqin yorug'likda tezlik qanday tanlanadi?",
  ["Faralar yoritayotgan masofada to'xtay oladigan darajada", "Kunduzgidek", "Maksimal ruxsat etilgan", "Ahamiyatsiz"],
  "To'xtash yo'li ko'rinish masofasidan oshmasligi kerak.");
Q("safety", "Tezlik 2 marta oshganda tormoz yo'li taxminan qanday o'zgaradi?",
  ["Taxminan 4 marta ortadi", "2 marta ortadi", "O'zgarmaydi", "Kamayadi"],
  "Tormoz yo'li tezlikning kvadratiga proporsional.");
Q("safety", "Tik qiyalikda tormoz ishdan chiqsa, haydovchi transportni qayerga yo'naltiradi?",
  ["Avariya chiqish yo'lagiga (5.40 belgisi)", "Qarama-qarshi qatorga", "Piyodalar yo'lkasiga", "Ariqqa"],
  "YHQ 129-band.");
Q("safety", "Uzoq safarda charchoqning oldini olish uchun:",
  ["Muntazam to'xtab dam olish kerak", "Kofe ichib to'xtamay haydash kerak", "Tezlikni oshirish kerak", "Musiqani baland qo'yish kerak"],
  "Charchoq holatida boshqarish taqiqlanadi (YHQ 12-band).");

// =============================================================== QO'SHIMCHA: YORITISH VA SHATAK
Q("lighting", "Aholi punktida projektor va qidiruv faralaridan kim foydalanishi mumkin?",
  ["Faqat maxsus va tezkor xizmat transporti", "Har qanday haydovchi", "Taksi", "Yuk avtomobili"],
  "YHQ 139-band.");
Q("lighting", "Old tumanga qarshi faralardan yoritilmagan yo'lda qorong'ida qanday foydalaniladi?",
  ["Yaqin yoki uzoq yorug'lik bilan birga", "Yolg'iz o'zi", "Faqat shaharda", "Foydalanish taqiqlanadi"],
  "YHQ 137-band.");
Q("lighting", "Orqa tumanga qarshi chiroqni tormoz chiroqlariga ulash mumkinmi?",
  ["Yo'q", "Ha", "Faqat qishda", "Faqat yuk avtomobillarida"],
  "YHQ 140-band.");
Q("lighting", "Qarama-qarshi haydovchi faralarni yoqib-o'chirib ishora bersa, 150 m dan uzoqda bo'lsangiz ham:",
  ["Uzoq yorug'likni yaqinga almashtirasiz", "Hech narsa qilmaysiz", "Ovozli signal berasiz", "To'xtaysiz"],
  "YHQ 135-band.");
Q("lighting", "Yo'nalishli transport va avtobuslar kunduzi qaysi yorug'lik bilan harakatlanadi?",
  ["Yaqin yorug'lik bilan", "Faralarsiz", "Uzoq yorug'lik bilan", "Tumanga qarshi chiroq bilan"],
  "YHQ 138-band.");
Q("towing", "Shatakdagi transport vositasining rulida kim bo'lishi kerak?",
  ["Haydovchi (maxsus bikr bog'lam holatidan tashqari)", "Hech kim", "Har qanday yo'lovchi", "Bola"],
  "YHQ 142-band.");
Q("towing", "Ishchi tormozi ishlamaydigan transportning haqiqiy vazni shatakka oluvchinikining yarmidan ko'p bo'lsa:",
  ["Shatakka olish taqiqlanadi", "Egiluvchan bog'lam bilan mumkin", "Har qanday usulda mumkin", "Faqat tunda mumkin"],
  "YHQ 145-band: vazni kamroq bo'lsa — faqat bikr bog'lam yoki qisman ortish usulida.");
Q("towing", "Qisman ortish usulida shatakka olishda shatakdagi transport kabinasida odamlarning bo'lishi:",
  ["Taqiqlanadi", "Ruxsat", "Faqat haydovchi", "2 kishigacha ruxsat"],
  "YHQ 143-band.");

// =============================================================== QO'SHIMCHA: ODAM TASHISH, MAGISTRAL, TURAR JOY
Q("people", "Yuk kuzovida odam tashish uchun o'rindiqlar kuzov tagidan qanday balandlikda mahkamlanadi?",
  ["0,3–0,5 m", "0,1 m", "1 m", "1,3 m"],
  "YHQ 153-band.");
Q("people", "Yuk kuzovida 8 kishidan ortiq odam tashish uchun haydovchida qanday toifa bo'lishi kerak?",
  ["«C» va «D»", "Faqat «B»", "Faqat «C»", "«BE»"],
  "YHQ 152-band.");
Q("people", "Transport vositasidagi odamlar soni:",
  ["Texnik tavsifida ko'rsatilgan o'rindiqlar sonidan oshmasligi kerak", "Istalgancha bo'lishi mumkin", "2 baravar oshishi mumkin", "Faqat kattalar hisoblanadi"],
  "YHQ 159-band.");
Q("people", "Traktor tirkamasining yuk qismida odam tashish:",
  ["Taqiqlanadi", "Ruxsat", "Qishloqda ruxsat", "5 kishigacha ruxsat"],
  "YHQ 159-band.");
Q("people", "Avtomagistralda qaysi transport vositalarining harakati taqiqlanadi?",
  ["Tezligi 40 km/soatdan kam bo'lganlar, velosiped, moped, traktorlar", "Yengil avtomobillar", "Avtobuslar", "Yuk avtomobillari"],
  "YHQ 121-band.");
Q("people", "Avtomagistralda ajratuvchi bo'lakdagi texnologik uzilishlardan qayrilib olish:",
  ["Taqiqlanadi", "Ruxsat", "Tunda ruxsat", "Yuk avtomobillariga ruxsat"],
  "YHQ 121-band.");
Q("people", "Avtomagistralda majburiy to'xtagan haydovchi:",
  ["Transportni belgilaydi va o'ngdagi yo'l yoqasiga olib chiqish choralarini ko'radi", "Qatnov qismida qoldiradi", "Chap qatorga oladi", "Orqaga yuradi"],
  "YHQ 122-band.");
Q("people", "Turar joy dahasida ruxsat etilgan to'la vazni 3,5 t dan ortiq yuk avtomobillari qaerda to'xtab turishi mumkin?",
  ["Faqat belgi yoki chiziq bilan belgilangan joylarda", "Istalgan joyda", "Hech qaerda", "Trotuarda"],
  "YHQ 124-band.");
Q("people", "Turar joy dahasida haydashni o'rgatish:",
  ["Taqiqlanadi", "Ruxsat", "Kunduzi ruxsat", "Instruktor bilan ruxsat"],
  "YHQ 124-band.");
Q("people", "Turar joy dahasida piyodalar qayerda yurishi mumkin?",
  ["Trotuarda ham, qatnov qismida ham", "Faqat trotuarda", "Faqat yo'lkada", "Faqat chetda"],
  "YHQ 123-band.");
Q("people", "O'quv mashg'ulotlari yo'nalishlari kim bilan kelishiladi?",
  ["DYHXX bilan", "Mahalla bilan", "Avtomaktab o'zi belgilaydi", "Kelishish shart emas"],
  "YHQ 151-band.");
Q("people", "Umumiy foydalanishdagi yo'llarda o'qitishga qachon ruxsat beriladi?",
  ["O'quvchi boshlang'ich ko'nikmalarga ega bo'lsa va instruktor yonida bo'lsa", "Birinchi darsdan", "Instruktorsiz", "Faqat tunda"],
  "YHQ 147-band.");

// =============================================================== QO'SHIMCHA: BEKATLAR, TEMIR YO'L, MAXSUS
Q("crossing", "Yo'nalishli transport qatoriga kirishga ruxsat etilgan boshqa transport:",
  ["Yaqinlashayotgan yo'nalishli transportga yo'l beradi", "Ustunlikka ega", "Signal berib kiradi", "Avariya ishorasi bilan kiradi"],
  "YHQ 115-2-band.");
Q("crossing", "Avtobus va trolleybus haydovchisi bekatdan qachon harakatlanadi?",
  ["Boshqa haydovchilar yo'l berganiga ishonch hosil qilgach", "Darhol", "Signal berib", "Faqat yashil ishorada"],
  "YHQ 133-band.");
Q("crossing", "Yo'nalishli transport yo'lovchilarni qaerda chiqarishi va tushirishi mumkin (yo'nalishli taksidan tashqari)?",
  ["Faqat belgilangan bekatlarda", "Istalgan joyda", "Chorrahada", "Svetoforda"],
  "YHQ 133-band.");
Q("railway", "Temir yo'l kesishmasidan qaysi texnikani o'tkazish taqiqlanadi?",
  ["Transport holatiga keltirilmagan qishloq xo'jaligi va yo'l-qurilish mashinalarini", "Yengil avtomobillarni", "Avtobuslarni", "Mototsikllarni"],
  "YHQ 118-band.");
Q("railway", "Navbatchining qanday ishorasi kesishmaga chiqishni taqiqlaydi?",
  ["Ko'tarilgan qizil fonar yoki bayroq, yoki qo'llarni yon tomonga uzatish", "Qo'lni silkitish", "Hushtak", "Yashil bayroq"],
  "YHQ 118-band.");
Q("railway", "Haydovchi temir yo'lni qaerda kesib o'tishi mumkin?",
  ["Faqat temir yo'l kesishmalarida", "Istalgan joyda", "Poyezd ko'rinmasa istalgan joyda", "Ko'prik ostida"],
  "YHQ 116-band.");
Q("railway", "Kesishmada qolgan transportga poyezd kelayotganini ko'rgan haydovchi:",
  ["To'xtatish ishorasini berib, poyezdga qarab yuguradi", "Mashina ichida kutadi", "Uyiga ketadi", "Hech narsa qilmaydi"],
  "YHQ 120-band.");
Q("railway", "Kesishmada qolib ketganda yordamga faqat bitta odam bo'lsa, u qaysi tomonga yuboriladi?",
  ["Ko'rinish yomonroq bo'lgan tomonga", "Yaxshi ko'rinadigan tomonga", "Istalgan tomonga", "Yuborilmaydi"],
  "YHQ 120-band.");
Q("special", "Maxsus transport hamrohligidagi transport vositalari ustunlikdan qanday foydalanadi?",
  ["Yaqin yorug'lik yoqilgan holda", "Avariya ishorasi bilan", "Ovozli signal bilan", "Foydalana olmaydi"],
  "YHQ 25-band.");
Q("special", "Maxsus transport haydovchisi ustunlikdan qachon foydalanishi mumkin?",
  ["Boshqa ishtirokchilar yo'l berayotganiga ishonch hosil qilgach", "Har doim", "Signal yoqmay ham", "Faqat tunda"],
  "YHQ 25-band.");
Q("special", "Sariq yalt-yalt chiroqlar qachon yoqiladi?",
  ["Yo'l ishlari, yirik yuk tashish yoki shikastlangan transportni shatakka olishda", "Har doim kechasi", "Taksida", "Yomg'irda"],
  "YHQ 28-band.");
