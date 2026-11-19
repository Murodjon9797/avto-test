// =====================================================================
//  ANIMATSION (GIF ko'rinishidagi) SAVOLLAR
//  Har bir vaziyat SVG + SMIL animatsiyasi bilan chiziladi. Shuning uchun
//  fayl yengil, istalgan ekranda tiniq va internetsiz ishlaydi.
//  Haqiqiy .gif fayl ham qo'shish mumkin: Q(..., "img/vaziyat.gif").
//
//  Xarita: yuqori — shimol. O'ng tomonlama harakat.
//  Chorraha: yo'llar 120..180; shimolga ketish qatori x=165,
//  janubga x=135, sharqqa y=165, g'arbga y=135.
// =====================================================================

const SCN = (() => {
  const GRASS = "#9ccc65", ROAD = "#5f6368", OFF = "#2b2b2b";
  const wrap = (inner) => `<svg viewBox="0 0 300 300" class="scene" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#fff" stroke-width="2" stroke-dasharray="9 7"/>`;
  const solid = (x1, y1, x2, y2, w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#fff" stroke-width="${w}"/>`;
  const grass = `<rect width="300" height="300" fill="${GRASS}"/>`;

  // --- Fon: chorraha
  function cross(o = {}) {
    let s = grass + `<rect x="0" y="120" width="300" height="60" fill="${ROAD}"/><rect x="120" y="0" width="60" height="300" fill="${ROAD}"/>`;
    s += dash(0, 150, 120, 150) + dash(180, 150, 300, 150) + dash(150, 0, 150, 120) + dash(150, 180, 150, 300);
    if (o.stop) s += solid(150, 186, 180, 186, 3);
    if (o.rails) s += `<line x1="0" y1="160" x2="300" y2="160" stroke="#bdbdbd" stroke-width="1.5"/><line x1="0" y1="170" x2="300" y2="170" stroke="#bdbdbd" stroke-width="1.5"/>`;
    if (o.ring) s += `<circle cx="150" cy="150" r="72" fill="${ROAD}"/><circle cx="150" cy="150" r="36" fill="${GRASS}" stroke="#fff" stroke-width="2"/>`;
    return s;
  }
  // --- Fon: to'g'ri yo'l (y 100..200), ikki tomonlama
  function straight(o = {}) {
    let s = grass + `<rect x="0" y="100" width="300" height="100" fill="${ROAD}"/>`;
    s += o.solidCenter ? solid(0, 150, 300, 150) : dash(0, 150, 300, 150);
    return s;
  }
  // --- Fon: bir tomonlama uch qatorli yo'l (qatorlar y=110,150,190)
  function oneway3() {
    return grass + `<rect x="0" y="90" width="300" height="120" fill="${ROAD}"/>` + dash(0, 130, 300, 130) + dash(0, 170, 300, 170);
  }
  function zebra(x, y, w, h) { // vertikal zebra (yo'lni kesib o'tadi)
    let s = "";
    for (let yy = y; yy < y + h; yy += 10) s += `<rect x="${x}" y="${yy}" width="${w}" height="6" fill="#fff"/>`;
    return s;
  }
  function sign(key, x, y, size = 22) {
    const inner = SIGNS[key].replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
    return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 100 100">${inner}</svg>`;
  }
  const blinkAnim = `<animate attributeName="opacity" values="1;0" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/>`;

  function motion(o, rotate) {
    const r = rotate ? (o.reverse ? ` rotate="auto-reverse"` : ` rotate="auto"`) : "";
    const dur = o.dur || 4;
    if (o.loop) return `<animateMotion dur="${dur}s" repeatCount="indefinite"${r} path="${o.path}"/>`;
    const kp = o.keyPoints || "0;1;1", kt = o.keyTimes || `0;${o.hold || 0.55};1`;
    return `<animateMotion dur="${dur}s" repeatCount="indefinite"${r} path="${o.path}" keyPoints="${kp}" keyTimes="${kt}" calcMode="linear"/>`;
  }
  // --- Transport vositasi (oldi +x tomonda chiziladi)
  function car(o) {
    const kind = o.kind || "car";
    const L = kind === "bus" ? 42 : kind === "tram" ? 50 : 26, H = kind === "car" ? 14 : 16;
    const color = o.color || "#1e88e5";
    let b = `<rect x="${-L / 2}" y="${-H / 2}" width="${L}" height="${H}" rx="3" fill="${color}" stroke="#222" stroke-width="0.8"/>`;
    b += `<rect x="${L / 2 - 10}" y="${-H / 2 + 2}" width="5" height="${H - 4}" rx="1" fill="#d6ecff"/>`;
    if (kind === "tram") b += `<rect x="${-L / 2 + 4}" y="-2" width="${L - 8}" height="4" fill="#fff" opacity=".6"/>`;
    const lamp = (x, y) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#ffa000">${blinkAnim}</circle>`;
    const fl = L / 2 - 2, rl = -L / 2 + 2, top = -H / 2 + 1, bot = H / 2 - 1;
    if (o.blink === "L" || o.blink === "H") b += lamp(fl, top) + lamp(rl, top);
    if (o.blink === "R" || o.blink === "H") b += lamp(fl, bot) + lamp(rl, bot);
    if (o.siren) b += `<rect x="-5" y="-4" width="10" height="8" rx="2" fill="#1565c0"><animate attributeName="fill" values="#1565c0;#e53935" dur="0.5s" calcMode="discrete" repeatCount="indefinite"/></rect>`;
    let s = `<g>${b}${motion(o, true)}</g>`;
    if (o.label) {
      const w = Math.max(14, o.label.length * 6 + 6);
      s += `<g>${motion(o, false)}<g transform="translate(0,-17)"><rect x="${-w / 2}" y="-7" width="${w}" height="13" rx="4" fill="#fff" stroke="#222" stroke-width="0.8"/><text y="3.5" font-size="9.5" font-weight="700" text-anchor="middle" font-family="Arial">${o.label}</text></g></g>`;
    }
    return s;
  }
  function person(o) {
    return `<g><circle r="5.5" fill="#ff7043" stroke="#222" stroke-width="0.8"/><circle r="2.8" fill="#4e342e"/>${motion(o, false)}</g>`;
  }
  // --- Svetofor. state: green | red | yblink | g2y (yashildan sariqqa) | redarrow (qizil + o'ngga yashil strelka)
  function light(x, y, state) {
    const c = (cy, col, anim = "") => `<circle cx="${x + 7}" cy="${y + cy}" r="4.6" fill="${col}">${anim}</circle>`;
    const disc = (values, kt, dur = 4) => `<animate attributeName="fill" values="${values}" keyTimes="${kt}" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/>`;
    let s = `<rect x="${x}" y="${y}" width="14" height="36" rx="3" fill="#111"/>`;
    const R = "#e53935", Y = "#fbc02d", G = "#43a047";
    if (state === "green") s += c(7, OFF) + c(18, OFF) + c(29, G);
    if (state === "red") s += c(7, R) + c(18, OFF) + c(29, OFF);
    if (state === "yblink") s += c(7, OFF) + c(18, Y, disc(`${Y};${OFF}`, "0;0.5", 1)) + c(29, OFF);
    if (state === "g2y") s += c(7, OFF) + c(18, OFF, disc(`${OFF};${Y}`, "0;0.3")) + c(29, G, disc(`${G};${OFF}`, "0;0.3"));
    if (state === "redarrow") {
      s += c(7, R) + c(18, OFF) + c(29, OFF);
      s += `<rect x="${x + 14}" y="${y + 22}" width="14" height="14" rx="3" fill="#111"/><text x="${x + 21}" y="${y + 33}" font-size="12" font-weight="700" fill="${G}" text-anchor="middle" font-family="Arial">→</text>`;
    }
    return s;
  }
  function controller(x, y) { // qo'llari yon tomonga uzatilgan (ko'kragi janubga)
    return `<g transform="translate(${x},${y})">
      <line x1="-22" y1="0" x2="22" y2="0" stroke="#263238" stroke-width="4" stroke-linecap="round"/>
      <rect x="22" y="-2" width="12" height="4" fill="#fff" stroke="#222" stroke-width=".6"/>
      <ellipse rx="10" ry="6.5" fill="#37474f"/><circle r="4.5" fill="#ffcc80" stroke="#222" stroke-width=".6"/>
      <polygon points="-3,6 3,6 0,11" fill="#fdd835"/></g>`;
  }
  return { wrap, cross, straight, oneway3, zebra, sign, car, person, light, controller };
})();

// Animatsion savol qo'shish: id lar 1001 dan boshlanadi (tartibni o'zgartirmang)
let SCENE_ID = 1000;
function A(scene, q, options, explain) {
  QUESTIONS.push({ id: ++SCENE_ID, topic: "anim", scene: SCN.wrap(scene), q, options, answer: 0, explain });
}

const ME = "#e53935"; // sizning avtomobilingiz — qizil

// 1. Teng huquqli chorraha — o'ngdagi ustun
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }),
  "Teng huquqli yo'llar chorrahasi. Siz ham, B ham to'g'riga ketmoqchi. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Kim tezroq yetib kelsa"],
  "B sizga o'ng tomondan yaqinlashmoqda. Teng huquqli chorrahada o'ngdagiga yo'l beriladi (YHQ 105-band).");

// 2. Chapga burilish — qarama-qarshi to'g'riga ketayotgan ustun
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#1e88e5", label: "B" }),
  "Teng huquqli chorraha. Siz chapga burilmoqchisiz, B qarama-qarshi tomondan to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Bir vaqtda o'tiladi"],
  "Chapga burilayotgan haydovchi qarama-qarshi yo'nalishdan to'g'riga va o'ngga ketayotganlarga yo'l beradi (YHQ 107-band).");

// 3. Asosiy yo'l
A(SCN.cross() + SCN.sign("mainroad", 186, 200) + SCN.sign("giveway", 196, 96) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }),
  "Siz «Asosiy yo'l» belgisi bo'yicha, B esa «Yo'l bering» belgisi bo'yicha harakatlanmoqda. Kim birinchi o'tadi?",
  ["Siz", "B avtomobili", "O'ngdagi transport — B"],
  "Ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagilarga yo'l beradi (YHQ 104-band). O'ng qo'l qoidasi bu yerda qo'llanmaydi.");

// 4. Svetofor — yashilda chapga burilish
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "green") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#1e88e5", label: "B" }),
  "Sizga yashil ishora yondi. Siz chapga burilmoqchisiz, B qarama-qarshi tomondan to'g'riga ketmoqda. Nima qilasiz?",
  ["B ga yo'l beraman", "Yashil yonganim uchun birinchi o'taman", "Ovozli signal berib o'taman"],
  "Tartibga solingan chorrahada ham yashil ishorada chapga burilayotgan haydovchi qarama-qarshi to'g'riga va o'ngga ketayotganlarga yo'l beradi (YHQ 99-band).");

// 5. Sariq miltillovchi
A(SCN.cross() + SCN.light(186, 192, "yblink") +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }),
  "Svetoforda sariq ishora miltillamoqda, ustuvorlik belgilari yo'q. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Svetofor ishlamaguncha hech kim"],
  "Sariq miltillovchi ishorali chorraha tartibga solinmagan hisoblanadi (YHQ 98-band). Teng huquqli yo'llarda o'ngdagiga yo'l beriladi.");

// 6. Qo'shimcha seksiya strelkasi
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "redarrow") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M0,165 L300,165", color: "#1e88e5", label: "C", loop: true, dur: 5 }),
  "Asosiy ishora qizil, qo'shimcha seksiyada o'ngga yashil strelka yondi. Siz o'ngga burilmoqchisiz, C chap tomondan to'g'riga ketmoqda. Nima qilasiz?",
  ["C ga yo'l berib, o'ngga burilaman", "Strelka yonganligi uchun birinchi o'taman", "Qizil yonib turgani uchun kutaman, strelkaga e'tibor bermayman"],
  "Qo'shimcha seksiya strelkasi bo'yicha harakatlanayotgan haydovchi boshqa yo'nalishlardagilarga yo'l beradi (YHQ 100-band).");

// 7. Tramvay
A(SCN.cross({ rails: true }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-30,165 L92,165", color: "#fdd835", label: "T", kind: "tram" }),
  "Teng huquqli yo'llar chorrahasi. Chap tomondan tramvay kelmoqda. Kim birinchi o'tadi?",
  ["Tramvay", "Siz (tramvay chap tomonda)", "Kim birinchi yetib kelsa"],
  "Teng huquqli yo'llar chorrahasida tramvay harakat yo'nalishidan qat'i nazar relssiz transportdan ustun (YHQ 105-band).");

// 8. Piyodalar o'tish joyi
A(SCN.straight() + SCN.zebra(205, 100, 22, 100) + SCN.sign("crossing", 230, 204) +
  SCN.car({ path: "M0,170 L180,170", color: ME, label: "Siz" }) +
  SCN.person({ path: "M216,215 L216,85", loop: true, dur: 5 }),
  "Tartibga solinmagan piyodalar o'tish joyiga yaqinlashyapsiz. Nima qilasiz?",
  ["To'xtab, piyodaga yo'l beraman", "Ovozli signal berib o'tib ketaman", "Piyoda mening qatorimda emas, davom etaman"],
  "Haydovchi tezlikni kamaytirishi yoki to'xtashi va kesib o'tayotgan piyodalarga yo'l berishi shart (YHQ 109-band).");

// 9. Temir yo'l kesishmasi
A(SCN.straight() +
  `<rect x="232" y="90" width="22" height="120" fill="#8d6e63"/><line x1="237" y1="80" x2="237" y2="220" stroke="#424242" stroke-width="3"/><line x1="249" y1="80" x2="249" y2="220" stroke="#424242" stroke-width="3"/>` +
  `<line x1="212" y1="198" x2="212" y2="196" stroke="#fff" stroke-width="5" stroke-linecap="round"><animate attributeName="y2" values="196;152;152" keyTimes="0;0.4;1" dur="4s" repeatCount="indefinite"/></line>` +
  `<line x1="212" y1="198" x2="212" y2="196" stroke="#e53935" stroke-width="5" stroke-dasharray="6 6"><animate attributeName="y2" values="196;152;152" keyTimes="0;0.4;1" dur="4s" repeatCount="indefinite"/></line>` +
  `<circle cx="204" cy="212" r="5" fill="#e53935"><animate attributeName="opacity" values="1;0.1" dur="0.9s" calcMode="discrete" repeatCount="indefinite"/></circle>` +
  `<circle cx="218" cy="212" r="5" fill="#e53935"><animate attributeName="opacity" values="0.1;1" dur="0.9s" calcMode="discrete" repeatCount="indefinite"/></circle>` +
  SCN.car({ path: "M0,170 L182,170", color: ME, label: "Siz" }),
  "Qizil chiroqlar miltillamoqda, shlagbaum tushmoqda. To'xtash chizig'i ham, 2.5 belgisi ham yo'q. Qaerda to'xtash kerak?",
  ["Shlagbaumdan kamida 5 m oldin", "Shlagbaumga taqab", "Birinchi relsdan 1 m oldin", "Shlagbaum hali to'liq tushmagan, tez o'tib ketaman"],
  "Shlagbaum bo'lsa — undan kamida 5 m, shlagbaum bo'lmasa — yaqin relsdan kamida 10 m oldin to'xtaladi (YHQ 118-119-bandlar).");

// 10. Piyodalar o'tish joyida quvib o'tish
A(SCN.straight() + SCN.zebra(222, 100, 22, 100) + SCN.sign("crossing", 248, 204) +
  SCN.car({ path: "M50,170 L260,170", color: "#1e88e5", label: "B", loop: true, dur: 5 }) +
  SCN.car({ path: "M0,170 L60,170 Q85,170 95,130 L265,130", color: ME, label: "Siz", loop: true, dur: 5, blink: "L" }),
  "Siz B ni quvib o'tmoqdasiz, oldinda piyodalar o'tish joyi. Bu harakat to'g'rimi?",
  ["Yo'q, piyodalar o'tish joylarida quvib o'tish taqiqlanadi", "Ha, piyoda bo'lmasa mumkin", "Ha, chap burilish ko'rsatkichi yoqilgan bo'lsa mumkin"],
  "Piyodalar o'tish joylarida quvib o'tish taqiqlanadi (YHQ 86-band).");

// 11. Tez yordam
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "green") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }) +
  SCN.car({ path: "M320,135 L-20,135", color: "#fafafa", label: "103", siren: true, loop: true, dur: 4 }),
  "Sizga yashil ishora yonib turibdi. O'ng tomondan maxsus yalt-yalt chiroq va ovozli signali yoqilgan tez yordam mashinasi kelmoqda. Nima qilasiz?",
  ["Tez yordam mashinasiga yo'l beraman", "Yashil yongani uchun harakatni boshlayman", "Ovozli signal berib o'taman"],
  "Maxsus yorug'lik va ovozli signallari yoqilgan transportga yo'l berish shart (YHQ 26-band).");

// 12. Aylanma harakat
A(SCN.cross({ ring: true }) +
  SCN.car({ path: "M165,300 L165,232", color: ME, label: "Siz" }) +
  SCN.car({ path: "M95,150 A55,55 0 0 0 150,205 A55,55 0 0 0 205,150 A55,55 0 0 0 150,95 A55,55 0 0 0 95,150", color: "#1e88e5", label: "B", loop: true, dur: 6 }),
  "Siz aylanma harakatli chorrahaga kirmoqchisiz, B aylana bo'ylab harakatlanmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B chap tomonda", "Kim birinchi yetib kelsa"],
  "Aylanma harakatli chorrahada aylana bo'ylab harakatlanayotgan transport ustunlikka ega (YHQ 98-band).");

// 13. Tartibga soluvchi
A(SCN.cross() + SCN.controller(150, 150) +
  SCN.car({ path: "M0,165 L100,165", color: ME, label: "Siz" }),
  "Tartibga soluvchi qo'llarini yon tomonga uzatgan. Siz uning yon tomonidan yaqinlashyapsiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["To'g'riga va o'ngga", "Faqat chapga", "Barcha yo'nalishlarga", "Harakatlanish taqiqlanadi"],
  "Qo'llar yon tomonga uzatilgan bo'lsa, chap va o'ng yon tomondan to'g'riga va o'ngga harakatlanishga ruxsat; ko'krak va orqa tomondan — taqiqlanadi (YHQ 38-band).");

// 14. Bekatdan chiqayotgan avtobus
A(SCN.straight() + `<rect x="170" y="200" width="70" height="10" fill="#bdbdbd"/>` +
  SCN.car({ path: "M205,184 L240,172 L320,170", color: "#43a047", label: "Avt", kind: "bus", blink: "L", keyPoints: "0;0;1", keyTimes: "0;0.4;1", dur: 5 }) +
  SCN.car({ path: "M0,170 L120,170", color: ME, label: "Siz", dur: 5, hold: 0.5 }),
  "Aholi punktida avtobus chap burilish ko'rsatkichini yoqib, bekatdan chiqmoqda. Nima qilasiz?",
  ["Avtobusga yo'l beraman", "Avtobus menga yo'l berishi kerak", "Ovozli signal berib, quvib o'taman"],
  "Aholi punktlarida bekatdan harakatlanayotgan avtobus va trolleybusga yo'l berish kerak (YHQ 133-band).");

// 15. Sariq ishora — keskin tormozlamasdan to'xtab bo'lmaydi
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "g2y") +
  SCN.car({ path: "M165,320 L165,-20", color: ME, label: "Siz", loop: true, dur: 4 }),
  "Siz to'xtash chizig'iga juda yaqinlashganingizda yashil o'rniga sariq ishora yondi. Keskin tormozlamasdan to'xtashning imkoni yo'q. Nima qilasiz?",
  ["Harakatni davom ettiraman", "Keskin tormozlab, chorraha o'rtasida to'xtayman", "Orqaga yuraman"],
  "Sariq ishorada keskin tormozlamasdan to'xtay olmaydigan haydovchi harakatni davom ettirishi mumkin (YHQ 42-band).");

// 16. Avariya to'xtash belgisi
A(SCN.straight() +
  SCN.car({ path: "M210,170 L210.5,170", color: ME, label: "Siz", blink: "H" }) +
  `<g><polygon points="0,-7 7,6 -7,6" fill="none" stroke="#e53935" stroke-width="2.5"/><animateMotion dur="4s" repeatCount="indefinite" path="M190,170 L60,170" keyPoints="0;1;1" keyTimes="0;0.6;1" calcMode="linear"/></g>` +
  `<text x="125" y="196" font-size="11" fill="#fff" text-anchor="middle" font-family="Arial">? m</text>`,
  "Aholi punktidan tashqarida avtomobilingiz buzilib qoldi. Avariya to'xtash belgisini qancha masofaga qo'yasiz?",
  ["Kamida 30 m", "Kamida 15 m", "Kamida 5 m", "Kamida 100 m"],
  "Aholi punktida — kamida 15 m, aholi punktidan tashqarida — kamida 30 m (YHQ 51-band).");

// 17. Bir vaqtda qator almashtirish
A(SCN.oneway3() +
  SCN.car({ path: "M10,110 L110,110 Q135,110 145,124", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M10,190 L110,190 Q135,190 145,176", color: "#1e88e5", label: "B", blink: "L" }),
  "Siz va B bir vaqtda o'rta qatorga o'tmoqdasiz. Kim yo'l berishi kerak?",
  ["Siz B ga yo'l berasiz", "B sizga yo'l beradi", "Kim tezroq bo'lsa o'tadi"],
  "Bir yo'nalishda ketayotgan transport vositalari bir vaqtda qayta tizilganda chapdagi haydovchi o'ngdagisiga yo'l beradi (YHQ 55-band).");

// 18. Yondosh hududdan chiqish
A(SCN.straight() + `<rect x="120" y="200" width="30" height="100" fill="#8a8d91"/>` +
  SCN.car({ path: "M135,300 L135,214", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-20,170 L320,170", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
  "Siz hovlidan (yondosh hududdan) yo'lga chiqmoqdasiz. Yo'lda B harakatlanmoqda. Nima qilasiz?",
  ["B ga yo'l beraman", "B menga yo'l beradi — u chap tomonda", "Ovozli signal berib chiqaman"],
  "Yondosh hududdan chiqayotgan haydovchi yo'lda harakatlanayotgan transport va piyodalarga yo'l beradi (YHQ 54-band).");

// ===================== QO'SHIMCHA VAZIYATLAR (19–30) =====================
const RAILS = `<rect x="232" y="90" width="22" height="120" fill="#8d6e63"/><line x1="237" y1="80" x2="237" y2="220" stroke="#424242" stroke-width="3"/><line x1="249" y1="80" x2="249" y2="220" stroke="#424242" stroke-width="3"/>`;
const RED_BLINK = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#e53935"><animate attributeName="opacity" values="1;0.1" dur="0.9s" calcMode="discrete" repeatCount="indefinite"/></circle><circle cx="${x + 14}" cy="${y}" r="5" fill="#e53935"><animate attributeName="opacity" values="0.1;1" dur="0.9s" calcMode="discrete" repeatCount="indefinite"/></circle>`;

// 19. Chapga burilayotganni o'ngdan quvib o'tish
A(SCN.straight() +
  SCN.car({ path: "M60,170 L170,170 Q190,170 205,158", color: "#1e88e5", label: "B", blink: "L", dur: 5, hold: 0.6 }) +
  SCN.car({ path: "M0,172 L110,172 Q130,172 142,184 L240,184", color: ME, label: "Siz", dur: 5, hold: 0.75 }),
  "B chapga burilish ishorasini berib, burilishni boshladi. Uni qaysi tomondan quvib o'tasiz?",
  ["O'ng tomondan", "Chap tomondan", "Quvib o'tish umuman taqiqlanadi"],
  "Quvib o'tilayotgan transport chapga burilish ishorasini berib, burilishni boshlagan bo'lsa, u o'ng tomondan quvib o'tiladi (YHQ 83-band).");

// 20. O'ngga burilishda piyodaga yo'l berish
A(SCN.cross() + SCN.zebra(192, 120, 18, 60) +
  SCN.person({ path: "M201,200 L201,100", loop: true, dur: 4 }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "R" }),
  "Siz o'ngga burilmoqchisiz. Burilayotgan yo'lingizni piyoda kesib o'tmoqda. Nima qilasiz?",
  ["Piyodaga yo'l beraman", "Piyoda menga yo'l berishi kerak", "Ovozli signal berib burilaman"],
  "O'ngga yoki chapga burilayotgan haydovchi burilayotgan qatnov qismini kesib o'tayotgan piyodalarga yo'l beradi (YHQ 96-band).");

// 21. Shlagbaumsiz temir yo'l kesishmasi
A(SCN.straight() + RAILS + SCN.sign("stAndrew", 170, 204, 24) + RED_BLINK(204, 214) +
  SCN.car({ path: "M0,170 L170,170", color: ME, label: "Siz" }),
  "Shlagbaumsiz temir yo'l kesishmasida qizil chiroqlar miltillamoqda. To'xtash chizig'i yo'q. Qaerda to'xtaysiz?",
  ["Yaqin relsdan kamida 10 m oldin", "Relsga taqab", "Kamida 5 m oldin", "To'xtamayman, poyezd ko'rinmayapti"],
  "Shlagbaum bo'lmasa, haydovchi yaqin relsdan kamida 10 m masofada to'xtaydi (YHQ 119-band).");

// 22. Oq hassali piyoda
A(SCN.straight() +
  `<g><circle r="5.5" fill="#455a64" stroke="#222" stroke-width="0.8"/><circle r="2.8" fill="#212121"/><line x1="4" y1="-4" x2="14" y2="-16" stroke="#fff" stroke-width="2.5"/><line x1="11" y1="-12" x2="14" y2="-16" stroke="#e53935" stroke-width="2.5"/><animateMotion dur="7s" repeatCount="indefinite" path="M190,212 L190,88"/></g>` +
  SCN.car({ path: "M0,170 L140,170", color: ME, label: "Siz" }),
  "Piyodalar o'tish joyi bo'lmagan joyda oq hassa bilan ishora berayotgan ko'zi ojiz piyoda yo'lni kesib o'tmoqda. Nima qilasiz?",
  ["To'xtab, unga yo'l beraman", "O'tish joyi bo'lmagani uchun davom etaman", "Ovozli signal beraman"],
  "Barcha holatlarda, shu jumladan o'tish joyidan tashqarida ham, oq hassali ko'zi ojiz piyodaga yo'l berish shart (YHQ 113-band).");

// 23. Bolalar guruhini tashiyotgan avtobus
A(SCN.straight() +
  SCN.car({ path: "M200,130 L199.5,130", color: "#fdd835", label: "Bolalar", kind: "bus", blink: "H" }) +
  SCN.person({ path: "M196,145 L196,215", loop: true, dur: 4 }) +
  SCN.person({ path: "M210,140 L210,215", loop: true, dur: 4.6 }) +
  SCN.car({ path: "M0,170 L130,170", color: ME, label: "Siz" }),
  "Qarama-qarshi tomonda «Bolalar guruhini tashish» belgisi va avariya ishorasi yoqilgan avtobus turibdi, bolalar yo'lni kesib o'tmoqda. Nima qilasiz?",
  ["Tezlikni kamaytirib, kerak bo'lsa to'xtab, bolalarni o'tkazib yuboraman", "Ovozli signal berib o'taman", "Tezlikni oshirib tez o'tib ketaman"],
  "YHQ 115-band.");

// 24. To'xtab turgan maxsus transport
A(SCN.straight() +
  SCN.car({ path: "M210,184 L210.5,184", color: "#fafafa", label: "102", siren: true }) +
  SCN.car({ path: "M0,168 L150,168", color: ME, label: "Siz", dur: 5, hold: 0.8 }),
  "Oldinda ko'k va qizil yalt-yalt chiroqlari yoqilgan militsiya avtomobili yo'l chetida to'xtab turibdi. Nima qilasiz?",
  ["Zarur bo'lsa darhol to'xtay oladigan tezlikda harakatlanaman", "Tezlikni oshiraman", "Ovozli signal beraman", "Hech narsa — u to'xtab turibdi"],
  "Ko'k yoki qizil chirog'i yoqilgan to'xtab turgan transportga yaqinlashganda tezlik zarur bo'lsa darhol to'xtay oladigan darajada kamaytiriladi (YHQ 27-band).");

// 25. Tramvay bekati — yo'lovchilar qatnov qismidan o'tmoqda
A(SCN.straight() + `<line x1="0" y1="135" x2="300" y2="135" stroke="#bdbdbd" stroke-width="1.5"/><line x1="0" y1="145" x2="300" y2="145" stroke="#bdbdbd" stroke-width="1.5"/>` +
  SCN.car({ path: "M200,140 L199.5,140", color: "#fdd835", label: "T", kind: "tram" }) +
  SCN.person({ path: "M190,215 L190,152", loop: true, dur: 3.5 }) +
  SCN.person({ path: "M206,152 L206,215", loop: true, dur: 4 }) +
  SCN.car({ path: "M0,180 L135,180", color: ME, label: "Siz" }),
  "Tramvay bekatda to'xtadi, yo'lovchilar qatnov qismi orqali tramvayga chiqmoqda va undan tushmoqda. Nima qilasiz?",
  ["To'xtab, piyodalarga yo'l beraman", "Tramvayni o'ngdan aylanib o'tib ketaman", "Ovozli signal beraman"],
  "Bekatda turgan transportning eshiklariga borayotgan yoki undan kelayotgan piyodalarga yo'l berish kerak (YHQ 114-band).");

// 26. Tunda ko'zni qamashtirish
A(SCN.straight() + `<rect width="300" height="300" fill="#0b1020" opacity=".72"/>` +
  `<g><polygon points="13,-6 120,-34 120,34 13,6" fill="#fff59d" opacity=".55"/><rect x="-13" y="-7" width="26" height="14" rx="3" fill="#90a4ae" stroke="#222" stroke-width=".8"/><circle cx="12" cy="-5" r="2.5" fill="#fffde7"/><circle cx="12" cy="5" r="2.5" fill="#fffde7"/><animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path="M320,130 L-20,130"/></g>` +
  SCN.car({ path: "M0,170 L150,170", color: ME, label: "Siz", blink: "H", dur: 5, hold: 0.7 }),
  "Tunda qarama-qarshi kelayotgan avtomobil faralari ko'zingizni qamashtirdi. Nima qilasiz?",
  ["Avariya ishorasini yoqib, qatorni o'zgartirmay tezlikni kamaytiraman va to'xtayman", "Uzoq yorug'likni yoqaman", "Chap qatorga o'taman", "Tezlikni oshiraman"],
  "YHQ 135-band.");

// 27. Asosiy yo'ldagi transport burilmoqda
A(SCN.cross() + SCN.sign("giveway", 186, 200) + SCN.sign("mainroad", 196, 96) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B", blink: "L" }),
  "Siz «Yo'l bering» belgisi bo'yicha, B esa asosiy yo'lda chapga burilmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B buriladi-ku", "Bir vaqtda o'tiladi"],
  "Ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagilarga ularning keyingi yo'nalishidan qat'i nazar yo'l beradi (YHQ 104-band).");

// 28. Chorrahada orqaga harakatlanish
A(SCN.cross() +
  SCN.car({ path: "M165,140 L165,232", color: ME, label: "Siz", reverse: true, dur: 4, hold: 0.6 }),
  "Kerakli burilishdan o'tib ketdingiz va chorrahada orqaga yurib qaytmoqchisiz. Bu mumkinmi?",
  ["Yo'q, chorrahalarda orqaga harakatlanish taqiqlanadi", "Ha, orqada transport bo'lmasa", "Ha, avariya ishorasi yoqilgan bo'lsa"],
  "YHQ 63-band.");

// 29. Temir yo'l oldida quvib o'tish
A(SCN.straight() + RAILS + SCN.sign("railbarrier", 120, 204, 24) +
  `<text x="150" y="222" font-size="11" fill="#fff" font-family="Arial">100 m</text>` +
  SCN.car({ path: "M40,170 L220,170", color: "#1e88e5", label: "B", loop: true, dur: 5 }) +
  SCN.car({ path: "M0,170 L50,170 Q75,170 85,130 L225,130", color: ME, label: "Siz", loop: true, dur: 5, blink: "L" }),
  "Temir yo'l kesishmasigacha 100 m dan kam masofa qoldi. Siz B ni quvib o'tmoqdasiz. To'g'rimi?",
  ["Yo'q, kesishmada va undan oldin 100 m da quvib o'tish taqiqlanadi", "Ha, poyezd ko'rinmasa mumkin", "Ha, shlagbaum ochiq bo'lsa mumkin"],
  "YHQ 86-band.");

// 30. Piyodalar o'tish joyida qayrilib olish
A(SCN.straight() + SCN.zebra(180, 100, 22, 100) +
  SCN.car({ path: "M0,170 L190,170 A20,20 0 0 0 190,130 L0,130", color: ME, label: "Siz", loop: true, dur: 6, blink: "L" }),
  "Siz piyodalar o'tish joyida qayrilib olmoqdasiz. Bu mumkinmi?",
  ["Yo'q, piyodalar o'tish joylarida qayrilib olish taqiqlanadi", "Ha, piyoda bo'lmasa", "Ha, kunduzi"],
  "YHQ 62-band: piyodalar o'tish joylarida, tunnellarda, ko'priklarda va temir yo'l kesishmalarida qayrilish taqiqlanadi.");
