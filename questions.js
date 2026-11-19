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

// Savollar q/*.js fayllarida (mavzular bo'yicha).
