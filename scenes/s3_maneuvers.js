// Animatsion vaziyatlar (3-to'plam): manyovr, joylashuv, quvib o'tish, to'xtash va temir yo'l kesishmalari (YHQ 51, 53-76, 82-95, 116-120)
(function () {
  // ---- Yordamchi chizmalar (faqat shu faylda)
  const T = (x, y, t, a) => `<text x="${x}" y="${y}" font-size="11" font-weight="700" fill="#fff" stroke="#000" stroke-opacity=".7" stroke-width="2.5" paint-order="stroke" text-anchor="${a || "middle"}" font-family="Arial">${t}</text>`;
  const DIM = (x1, x2, y, t, ty) => `<g stroke="#fff" stroke-width="1.3"><line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke-dasharray="3 2"/><line x1="${x1}" y1="${y - 4}" x2="${x1}" y2="${y + 4}"/><line x1="${x2}" y1="${y - 4}" x2="${x2}" y2="${y + 4}"/></g>` + T((x1 + x2) / 2, ty === undefined ? y - 5 : ty, t);
  const VDIM = (x, y1, y2, t) => `<g stroke="#fff" stroke-width="1.3"><line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke-dasharray="3 2"/><line x1="${x - 4}" y1="${y1}" x2="${x + 4}" y2="${y1}"/><line x1="${x - 4}" y1="${y2}" x2="${x + 4}" y2="${y2}"/></g>` + T(x + 6, (y1 + y2) / 2 + 4, t, "start");
  const STAY = (x, y, color, label, extra) => SCN.car(Object.assign({ path: `M${x},${y} L${x + 0.5},${y}`, color, label }, extra || {}));
  const BARRIER = (x) => `<circle cx="${x}" cy="203" r="4" fill="#424242"/><line x1="${x}" y1="200" x2="${x}" y2="152" stroke="#fff" stroke-width="5"/><line x1="${x}" y1="200" x2="${x}" y2="152" stroke="#e53935" stroke-width="5" stroke-dasharray="6 6"/>`;
  const BRIDGE = `<rect x="140" y="0" width="60" height="89" fill="#4f8fc0"/><rect x="140" y="211" width="60" height="89" fill="#4f8fc0"/>` +
    `<path d="M148 30 q6 -4 12 0 t12 0 M160 60 q6 -4 12 0 t12 0 M150 250 q6 -4 12 0 t12 0 M164 280 q6 -4 12 0 t12 0" stroke="#bbdefb" stroke-width="1.2" fill="none" opacity=".8"/>` +
    `<rect x="136" y="88" width="68" height="5" rx="2" fill="#9e9e9e" stroke="#616161" stroke-width=".8"/><rect x="136" y="207" width="68" height="5" rx="2" fill="#9e9e9e" stroke="#616161" stroke-width=".8"/>` + T(170, 80, "Ko'prik");
  const HILL = `<defs><radialGradient id="s3hill" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset=".7" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>` +
    `<ellipse cx="190" cy="150" rx="80" ry="150" fill="url(#s3hill)"/><path d="M190 0 V300" stroke="#fff" stroke-opacity=".25" stroke-width="1" stroke-dasharray="2 4"/>` + T(190, 84, "Tepalik cho'qqisi");
  const OBST = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#6d4c41" stroke="#3e2723"/><rect x="${x}" y="${y}" width="${w}" height="4" fill="#ff9800"/><rect x="${x}" y="${y + h - 4}" width="${w}" height="4" fill="#ff9800"/>` +
    [[x - 6, y + 3], [x - 6, y + h - 3]].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="4" fill="#ff6d00"/><circle cx="${cx}" cy="${cy}" r="1.8" fill="#fff"/>`).join("") + T(x + w / 2, y + h / 2 + 4, "!");
  const YLINE = (x1, x2, y, dashed) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#fbc02d" stroke-width="3"${dashed ? ` stroke-dasharray="10 6"` : ""}/>`;
  const BUSSIGN = (x, y) => `<rect x="${x + 10}" y="${y + 20}" width="2" height="9" fill="#6b6f75"/><rect x="${x}" y="${y}" width="22" height="22" rx="2" fill="#1565c0" stroke="#fff" stroke-width="1.2"/><rect x="${x + 4}" y="${y + 6}" width="14" height="9" rx="2" fill="#fff"/><rect x="${x + 6}" y="${y + 8}" width="10" height="3" fill="#1565c0"/><circle cx="${x + 7}" cy="${y + 16}" r="1.6" fill="#fff"/><circle cx="${x + 15}" cy="${y + 16}" r="1.6" fill="#fff"/>`;
  // Quvib o'tish: B o'z tasmasida, siz qarama-qarshi tasma orqali o'zib ketasiz
  const OVT_B = (color, label) => SCN.car({ path: "M60,170 L320,170", color: color || "#1e88e5", label: label || "B", loop: true, dur: 6 });
  const OVT_ME = SCN.car({ path: "M-20,170 L20,170 Q40,170 55,130 L320,130", color: ME, label: "Siz", loop: true, dur: 4, blink: "L" });
  // Chorrahada quvib o'tish (janubdan shimolga)
  const XOVT = SCN.car({ path: "M165,260 L165,-20", color: "#1e88e5", label: "B", loop: true, dur: 6 }) +
    SCN.car({ path: "M165,340 L165,262 Q165,240 135,218 L135,-20", color: ME, label: "Siz", loop: true, dur: 4, blink: "L" });

  // ===================== MANYOVRLAR VA JOYLASHUV =====================

  // 1. Sekinlashish bo'lagi
  A(SCN.straight() +
    `<polygon points="90,201 300,201 300,226 150,226" fill="url(#asph)"/><line x1="150" y1="226" x2="300" y2="226" stroke="#a8a399" stroke-width="2"/>` +
    `<line x1="130" y1="200" x2="300" y2="200" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="4 4"/>` + T(240, 242, "Sekinlashish bo'lagi") +
    SCN.car({ path: "M0,170 L90,170 Q120,170 140,213 L215,213", color: ME, label: "Siz", blink: "R", dur: 5, hold: 0.75 }) +
    SCN.car({ path: "M-40,170 L320,170", color: "#1e88e5", label: "B", loop: true, dur: 6 }),
    "Siz o'ngdagi chiqishga burilmoqchisiz, yo'lda sekinlashish bo'lagi bor. Tezlikni qayerda kamaytirish kerak?",
    ["Sekinlashish bo'lagiga qayta tizilib, tezlikni faqat unda kamaytiraman", "Asosiy tasmada, bo'lakka o'tishdan oldin", "Asosiy tasmada to'xtab, keyin bo'lakka o'taman", "Bo'lak oxirida keskin tormozlab"],
    "Sekinlashish bo'lagi bor yo'lda burilmoqchi bo'lgan haydovchi o'z vaqtida shu bo'lakka qayta tizilishi va tezlikni faqat unda kamaytirishi kerak (YHQ 61-band).");

  // 2. Tezlashish bo'lagi
  A(SCN.straight() +
    `<polygon points="-5,201 180,201 240,201 180,226 -5,226" fill="url(#asph)"/><line x1="-5" y1="226" x2="180" y2="226" stroke="#a8a399" stroke-width="2"/><line x1="180" y1="226" x2="240" y2="201" stroke="#a8a399" stroke-width="2"/>` +
    `<line x1="0" y1="200" x2="200" y2="200" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="4 4"/>` + T(70, 244, "Tezlashish bo'lagi") +
    SCN.car({ path: "M0,213 L150,213", color: ME, label: "Siz", blink: "L", dur: 5, hold: 0.7 }) +
    SCN.car({ path: "M-20,170 L320,170", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
    "Siz tezlashish bo'lagidan asosiy yo'lga chiqmoqdasiz, o'ng tasmada B harakatlanmoqda. Nima qilasiz?",
    ["Tezlashish bo'lagida harakatlanib, B ga yo'l berib oqimga qo'shilaman", "B menga yo'l berishi kerak — men uning o'ng tomonidaman", "Bo'lak boshida to'xtab, keyin darhol chap tasmaga chiqaman", "Ovozli signal berib, B dan oldin qo'shilaman"],
    "Yo'lga chiqish joyida tezlashish bo'lagi bo'lsa, haydovchi unda harakatlanishi va qo'shni tasmadagi transport vositalariga yo'l berib oqimga qo'shilishi kerak (YHQ 61-band).");

  // 3. Qayta tizilish — yo'nalishini o'zgartirmayotganga yo'l berish
  A(SCN.oneway3() +
    SCN.car({ path: "M0,150 L150,150", color: ME, label: "Siz", blink: "R" }) +
    SCN.car({ path: "M-20,190 L320,190", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
    "Siz o'rta tasmadan o'ng tasmaga qayta tizilmoqchisiz. O'ng tasmada B to'g'riga harakatlanmoqda. Kim yo'l beradi?",
    ["Siz B ga yo'l berasiz", "B sizga yo'l beradi — siz uning chap tomonidasiz", "Kim oldinda bo'lsa, o'sha birinchi o'tadi", "B tezlikni kamaytirib, sizni o'tkazishi shart"],
    "Qayta tizilayotgan haydovchi harakat yo'nalishini o'zgartirmasdan ketayotgan yo'lakay transport vositalariga yo'l berishi kerak (YHQ 55-band).");

  // 4. O'ngga burilish — chetki o'ng holatdan
  A(SCN.oneway3() + `<rect x="220" y="205" width="40" height="100" fill="url(#asph)"/>` +
    SCN.car({ path: "M0,110 L150,110", color: ME, label: "Siz", blink: "R" }),
    "Siz bir tomonlama yo'lning chap tasmasidasiz va oldindagi o'ng tomondagi yo'lga burilmoqchisiz. Qanday harakatlanasiz?",
    ["Oldindan chetki o'ng tasmaga qayta tizilib, so'ng o'ngga burilaman", "Chap tasmadan to'g'ridan-to'g'ri o'ngga burilaman", "O'rta tasmani egallab, undan burilaman", "Chap tasmada to'xtab, barcha tasmalar bo'shashini kutib burilaman"],
    "O'ngga, chapga burilish yoki qayrilib olishdan oldin haydovchi shu yo'nalishda harakatlanish uchun mo'ljallangan qatnov qismining eng chetki holatini egallashi shart (YHQ 56-band).");

  // 5. Chapga burilish — o'ng tasmadan
  A(SCN.oneway3() + `<rect x="215" y="-5" width="40" height="100" fill="url(#asph)"/>` +
    SCN.car({ path: "M0,190 L150,190", color: ME, label: "Siz", blink: "L" }),
    "Siz bir tomonlama yo'lning o'ng tasmasidan oldindagi chap tomondagi yo'lga burilmoqchisiz. Bu to'g'rimi?",
    ["Yo'q, oldindan chetki chap tasmani egallash kerak", "Ha, chap burilish ishorasi yoqilgan bo'lsa", "Ha, chap tasmalarda transport bo'lmasa", "Ha, o'rta tasmani kesib o'tib burilish mumkin"],
    "Bir tomonlama yo'lda chapga burilishdan oldin shu yo'nalish uchun qatnov qismining chetki chap holatini egallash shart (YHQ 56-band).");

  // 6. Burilishdan so'ng qarama-qarshi tomonga chiqib ketish
  A(SCN.cross() +
    SCN.car({ path: "M165,320 L165,195 Q165,135 210,135 L320,135", color: ME, label: "Siz", blink: "R", loop: true, dur: 5 }),
    "Siz o'ngga burilib, chorrahadan qarama-qarshi harakatlanish tomonidagi tasmaga chiqmoqdasiz. Bu to'g'rimi?",
    ["Yo'q, chorrahadan chiqishda qarama-qarshi harakatlanish tomoniga o'tib ketish mumkin emas", "Ha, qarama-qarshi tomondan transport kelmayotgan bo'lsa", "Ha, keng radiusda burilish xavfsizroq", "Ha, o'ngga burilish ishorasi yoqilgan bo'lsa"],
    "Burilishni shunday bajarish kerakki, qatnov qismlari kesishmasidan chiqayotgan transport qarama-qarshi yo'nalishdagi harakat tomoniga o'tib ketmasin (YHQ 57-band).");

  // 7. Chorrahadan tashqarida qayrilib olish
  A(SCN.straight() +
    SCN.car({ path: "M0,170 L150,170", color: ME, label: "Siz", blink: "L" }) +
    SCN.car({ path: "M320,130 L-20,130", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
    "Siz chorrahadan tashqarida qayrilib olmoqchisiz, qarama-qarshi tomondan B kelmoqda. Kim birinchi o'tadi?",
    ["B avtomobili", "Siz — B sizga yo'l beradi", "Kim birinchi ishora bersa, o'sha", "Siz — chunki siz to'xtab turgansiz"],
    "Relssiz transport haydovchisi chorrahadan tashqarida chapga burilish yoki qayrilib olishda qarama-qarshi yo'nalishdan kelayotgan transport vositalariga yo'l berishi shart (YHQ 59-band).");

  // 8. Ko'prikda qayrilib olish
  A(SCN.straight() + BRIDGE +
    SCN.car({ path: "M-20,170 L160,170 A20,20 0 0 0 160,130 L-20,130", color: ME, label: "Siz", blink: "L", loop: true, dur: 6 }),
    "Ko'prikda qayrilib olishga ruxsat beruvchi belgi yo'q. Siz ko'prikda qayrilib olmoqdasiz. Bu mumkinmi?",
    ["Yo'q, ko'priklarda qayrilib olish taqiqlanadi", "Ha, qarama-qarshi tomondan transport bo'lmasa", "Ha, o'q chizig'i uzuq-uzuq bo'lsa", "Ha, avariya ishorasini yoqib"],
    "Ko'priklar, yo'l o'tkazgichlar, estakadalar va ularning ostida (ruxsat beruvchi belgilar bo'lgan joylardan tashqari) qayrilib olish taqiqlanadi (YHQ 62-band).");

  // 9. Temir yo'l kesishmasida qayrilib olish
  A(SCN.straight() + RAILS +
    SCN.car({ path: "M-20,170 L235,170 A20,20 0 0 0 235,130 L-20,130", color: ME, label: "Siz", blink: "L", loop: true, dur: 6 }),
    "Siz temir yo'l kesishmasi ustida qayrilib olmoqdasiz. Bu mumkinmi?",
    ["Yo'q, temir yo'l kesishmalarida qayrilib olish taqiqlanadi", "Ha, poyezd ko'rinmasa", "Ha, shlagbaum ochiq bo'lsa", "Ha, kesishma navbatchisi bo'lmasa"],
    "Temir yo'l kesishmalarida qayrilib olish taqiqlanadi (YHQ 62-band).");

  // 10. Piyodalar o'tish joyida orqaga harakatlanish
  A(SCN.straight() + SCN.zebra(150, 100, 22, 100) +
    SCN.car({ path: "M240,170 L161,170", color: ME, label: "Siz", reverse: true, dur: 4, hold: 0.6 }),
    "Siz piyodalar o'tish joyi ustida orqaga harakatlanmoqdasiz. Bu mumkinmi?",
    ["Yo'q, piyodalar o'tish joyida orqaga harakatlanish taqiqlanadi", "Ha, piyodalar bo'lmasa", "Ha, avariya ishorasi yoqilgan bo'lsa", "Ha, boshqa shaxs yordamida harakatlansam"],
    "Orqaga harakatlanish chorrahalarda va qayrilib olish taqiqlangan joylarda, jumladan piyodalar o'tish joylarida taqiqlanadi (YHQ 63-band).");

  // 11. To'siq o'z tomonida
  A(SCN.straight() + OBST(185, 157, 26, 36) +
    SCN.car({ path: "M0,170 L150,170", color: ME, label: "Siz" }) +
    SCN.car({ path: "M320,130 L-20,130", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
    "Sizning tasmangizda to'siq bor, qarama-qarshi tomondan B kelmoqda. Kim yo'l berishi kerak?",
    ["Siz B ga yo'l berasiz", "B sizga yo'l beradi", "Kim to'siqqa birinchi yetib kelsa, o'sha o'tadi", "B o'ng chetga chiqib to'xtashi kerak"],
    "To'siq sababli qarama-qarshi yo'nalishlarda harakatlanish qiyin bo'lsa, to'siq o'z tomonida bo'lgan haydovchi yo'l beradi (YHQ 75-band).");

  // 12. To'siq qarama-qarshi tomonda
  A(SCN.straight() + OBST(140, 107, 26, 36) +
    SCN.car({ path: "M-20,170 L320,170", color: ME, label: "Siz", loop: true, dur: 4 }) +
    SCN.car({ path: "M300,130 L195,130", color: "#1e88e5", label: "B" }),
    "To'siq qarama-qarshi yo'nalishdagi tasmada joylashgan. Siz va B dan kim yo'l berishi kerak?",
    ["B sizga yo'l beradi", "Siz B ga yo'l berasiz", "Kim ovozli signal bersa, o'sha o'tadi", "Ikkalasi ham to'xtab, kelishib oladi"],
    "To'siq o'z tomonida bo'lgan haydovchi — bu yerda B — qarama-qarshi kelayotganga yo'l beradi (YHQ 75-band).");

  // 13. Xavfsizlik orolchasini aylanib o'tish
  A(SCN.straight() +
    `<rect x="138" y="140" width="56" height="20" rx="10" fill="url(#tiles)" stroke="#a8a399" stroke-width="1.5"/><circle cx="148" cy="150" r="3" fill="#fafafa" stroke="#616161"/><circle cx="184" cy="150" r="3" fill="#fafafa" stroke="#616161"/>` +
    SCN.car({ path: "M0,170 L100,170", color: ME, label: "Siz" }),
    "Ikki tomonlama yo'lda xavfsizlik orolchasi bor, belgilar va chiziqlar boshqa yo'nalishni ko'rsatmagan. Uni qaysi tomondan aylanib o'tasiz?",
    ["O'ng tomondan", "Chap tomondan", "Istalgan tomondan", "Chap tomondan, qarama-qarshi transport bo'lmasa"],
    "Belgilar va chiziqlar boshqacha ko'rsatmagan bo'lsa, ajratuvchi bo'lagi bo'lmagan ikki tomonlama yo'llarda xavfsizlik orolchalari o'ng tomondan aylanib o'tiladi (YHQ 76-band).");

  // 14. To'rt tasmali ikki tomonlama yo'l
  A(SCN.straight() + SCN.dash(0, 125, 300, 125) + SCN.dash(0, 175, 300, 175) +
    SCN.car({ path: "M120,163 L320,163", color: "#1e88e5", label: "B", loop: true, dur: 6 }) +
    SCN.car({ path: "M-20,163 L40,163 Q65,163 80,137 L320,137", color: ME, label: "Siz", loop: true, dur: 4, blink: "L" }),
    "Ikki tomonlama to'rt tasmali yo'lda B ni quvib o'tish uchun qarama-qarshi yo'nalish tasmasiga chiqmoqdasiz. Bu mumkinmi?",
    ["Yo'q, to'rt va undan ortiq tasmali ikki tomonlama yo'llarda qarama-qarshi tasmalarga chiqish taqiqlanadi", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, o'q chizig'i uzuq-uzuq bo'lgani uchun", "Ha, aholi punktidan tashqarida"],
    "To'rt va undan ortiq tasmali, harakat ikki tomonlama bo'lgan yo'llarda qarama-qarshi yo'nalish tasmalariga chiqish taqiqlanadi (YHQ 65-band).");

  // 15. Uch tasmali ikki tomonlama yo'l — o'rta tasma
  A(SCN.straight() + `<rect x="-5" y="146" width="310" height="8" fill="url(#asph)"/>` + SCN.dash(0, 133, 300, 133) + SCN.dash(0, 167, 300, 167) +
    SCN.car({ path: "M120,184 L320,184", color: "#1e88e5", label: "C", loop: true, dur: 6 }) +
    SCN.car({ path: "M-20,184 L40,184 Q60,184 75,150 L320,150", color: ME, label: "Siz", loop: true, dur: 4, blink: "L" }),
    "Chiziqlar bilan belgilangan ikki tomonlama uch tasmali yo'lda C ni quvib o'tish uchun o'rta tasmaga chiqdingiz. Bu mumkinmi?",
    ["Ha, o'rta tasmaga quvib o'tish uchun chiqish mumkin", "Yo'q, o'rta tasma faqat chapga burilish uchun", "Yo'q, o'rta tasma qarama-qarshi yo'nalish uchun mo'ljallangan", "Ha, kerak bo'lsa chetki chap tasmani ham egallash mumkin"],
    "Uch tasmali ikki tomonlama yo'lda o'rta tasmaga faqat quvib o'tish, aylanib o'tish, chapga burilish va qayrilib olish uchun chiqiladi; chetki chap tasmani egallash taqiqlanadi (YHQ 66-band).");

  // 16. Aholi punktidan tashqarida o'ng tasmalar bo'sh
  A(SCN.oneway3() +
    SCN.car({ path: "M-20,110 L320,110", color: ME, label: "Siz", loop: true, dur: 4 }),
    "Aholi punktidan tashqarida, bir yo'nalishda uch tasmali yo'l. O'ng tasmalar bo'sh, siz esa chap tasmada harakatlanmoqdasiz. Bu to'g'rimi?",
    ["Yo'q, o'ng tasmalar bo'sh bo'lganda chap tasmalarni egallash taqiqlanadi", "Ha, ruxsat etilgan tezlikdan oshmasa", "Ha, istalgan tasmada harakatlanish mumkin", "Ha, yengil avtomobilda bo'lsa"],
    "Aholi punktlaridan tashqarida haydovchilar qatnov qismining o'ng chetiga yaqinroq harakatlanishi kerak; o'ng tasmalar bo'sh bo'lganda chap tasmalarni egallash taqiqlanadi (YHQ 67-band).");

  // 17. Trotuar orqali tirbandlikni aylanib o'tish
  A(SCN.straight() +
    STAY(110, 170, "#1e88e5") + STAY(150, 170, "#7e57c2") + STAY(190, 170, "#26a69a") +
    SCN.car({ path: "M0,170 L40,170 Q60,170 75,205 L320,205", color: ME, label: "Siz", loop: true, dur: 5 }),
    "Siz tirbandlikni trotuar orqali aylanib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, trotuarda mexanik transport vositalarining harakatlanishi taqiqlanadi", "Ha, piyodalar bo'lmasa", "Ha, past tezlikda", "Ha, avariya ishorasi yoqilgan bo'lsa"],
    "Mexanik transport vositalarining trotuarlar, piyodalar yo'lkalari, yo'l yoqalari va ajratuvchi mintaqalarda harakatlanishi taqiqlanadi (YHQ 72-band).");

  // ===================== QUVIB O'TISH =====================

  // 18. Tartibga solingan chorrahada quvib o'tish
  A(SCN.cross() + SCN.light(186, 192, "green") + XOVT,
    "Svetofor bilan tartibga solingan chorrahada siz B ni quvib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, tartibga solingan chorrahalarda quvib o'tish taqiqlanadi", "Ha, yashil ishora yonib turgan bo'lsa", "Ha, qarama-qarshi tomondan transport bo'lmasa", "Ha, B sekin harakatlanayotgan bo'lsa"],
    "Tartibga solingan chorrahalarda quvib o'tish taqiqlanadi (YHQ 86-band).");

  // 19. Tartibga solinmagan chorraha — asosiy yo'lda
  A(SCN.cross() + SCN.sign("mainroad", 186, 200) + XOVT,
    "Siz «Asosiy yo'l» belgisi bilan belgilangan yo'lda, tartibga solinmagan chorrahada B ni quvib o'tmoqdasiz (piyodalar o'tish joyi yo'q). Bu mumkinmi?",
    ["Ha, asosiy yo'lda harakatlanganda chorrahada quvib o'tish taqiqlanmagan", "Yo'q, har qanday chorrahada quvib o'tish taqiqlanadi", "Yo'q, chorrahagacha 100 m qolganda taqiqlanadi", "Faqat B o'ngga burilayotgan bo'lsa"],
    "Tartibga solinmagan chorrahalarda quvib o'tish faqat asosiy hisoblanmaydigan yo'lda harakatlanganda taqiqlanadi; xavfsizlik ta'minlansa, asosiy yo'lda quvib o'tish mumkin (YHQ 86-band).");

  // 20. Tartibga solinmagan chorraha — ikkinchi darajali yo'lda
  A(SCN.cross() + SCN.sign("giveway", 186, 200) + XOVT,
    "Siz «Yo'l bering» belgisi o'rnatilgan yo'lda, tartibga solinmagan chorrahada B ni quvib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, asosiy hisoblanmaydigan yo'lda chorrahada quvib o'tish taqiqlanadi", "Ha, kesishayotgan yo'lda transport bo'lmasa", "Ha, chap burilish ishorasini yoqqan bo'lsangiz", "Ha, B to'xtab qolgan bo'lsa"],
    "Tartibga solinmagan chorrahalarda asosiy hisoblanmaydigan yo'llarda harakatlanishda quvib o'tish taqiqlanadi (YHQ 86-band).");

  // 21. Ko'prikda quvib o'tish
  A(SCN.straight() + BRIDGE + OVT_B() + OVT_ME,
    "Siz ko'prikda B ni quvib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, ko'priklarda quvib o'tish taqiqlanadi", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, o'q chizig'i uzuq-uzuq bo'lsa", "Ha, ko'prik uzunligi 100 m dan kam bo'lsa"],
    "Ko'priklarda, yo'l o'tkazgichlarda, estakadalarda va ularning ostida quvib o'tish taqiqlanadi (YHQ 86-band).");

  // 22. Tepalik cho'qqisida quvib o'tish
  A(SCN.straight() + HILL + OVT_B() + OVT_ME,
    "Siz tepalik cho'qqisida, yo'lning ko'rinishi cheklangan joyda B ni quvib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, tepalikning oxirida va ko'rinish cheklangan joylarda quvib o'tish taqiqlanadi", "Ha, qarama-qarshi transport ko'rinmasa", "Ha, faralarni yoqib, ovozli signal bersangiz", "Ha, tezlikni oshirib tez tugatsangiz"],
    "Tepalikning oxirida va yo'lning ko'rinishi cheklangan joylarida quvib o'tish taqiqlanadi (YHQ 86-band).");

  // 23. Yaxlit chiziqni kesib quvib o'tish
  A(SCN.straight({ solidCenter: true }) + OVT_B() + OVT_ME,
    "Yo'l o'rtasida yaxlit 1.1 chizig'i bor. Siz uni kesib o'tib, B ni quvib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, 1.1 yaxlit chizig'ini bosib o'tish taqiqlanadi", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, B soatiga 40 km dan sekin harakatlansa", "Ha, quvib o'tishni tez tugatsangiz"],
    "Qatnov qismi chiziqlar bilan tasmalarga ajratilgan bo'lsa, faqat uzuq-uzuq chiziqlarni bosib o'tishga ruxsat etiladi; 1.1 chizig'ini bosib o'tish taqiqlanadi (YHQ 70-band).");

  // 24. «Quvib o'tish taqiqlangan» belgisi
  A(SCN.straight() + SCN.sign("noovertake", 40, 204) + OVT_B() + OVT_ME,
    "«Quvib o'tish taqiqlangan» belgisi ta'sir oralig'ida siz B avtomobilini quvib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, 3.20 belgisi ta'sir oralig'ida quvib o'tish taqiqlanadi", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, aholi punktida", "Ha, o'q chizig'i uzuq-uzuq bo'lsa"],
    "3.20 «Quvib o'tish taqiqlangan» belgisi ta'sir oralig'ida quvib o'tish taqiqlanadi (YHQ 86-band).");

  // 25. 3.20 belgisi — sekin yurar yakka traktor
  A(SCN.straight() + SCN.sign("noovertake", 40, 204) + OVT_B("#43a047", "Traktor") + OVT_ME,
    "«Quvib o'tish taqiqlangan» belgisi ta'sir oralig'ida oldingizda soatiga 25 km tezlikda yakka traktor ketmoqda. O'q chizig'i uzuq-uzuq. Uni quvib o'tish mumkinmi?",
    ["Ha, soatiga 40 km dan sekin yakka transport vositasini quvib o'tish mumkin", "Yo'q, belgi barcha transport vositalarini quvib o'tishni taqiqlaydi", "Faqat belgi ta'siri tugagandan keyin", "Faqat traktor o'ng chetga to'xtasa"],
    "3.20 belgisi (1-ilova) soatiga 40 km dan kam tezlikda harakatlanayotgan yakka transport vositasidan boshqa transportni quvib o'tishni taqiqlaydi, shuning uchun traktorni xavfsiz sharoitda quvib o'tish mumkin (YHQ 86-band).");

  // 26. Sizni quvib o'tishmoqda
  A(SCN.straight() +
    SCN.car({ path: "M80,170 L320,170", color: ME, label: "Siz", loop: true, dur: 8 }) +
    SCN.car({ path: "M-30,170 L30,170 Q50,170 65,130 L320,130", color: "#1e88e5", label: "B", loop: true, dur: 4, blink: "L" }),
    "B sizni quvib o'tmoqda. Siz nima qilishingiz kerak?",
    ["Tezlikni oshirmay, quvib o'tishga to'sqinlik qilmayman", "Tezlikni oshiraman, B o'zib ketmasin", "Chap tomonga surilib, B ga yo'l bermayman", "Ovozli signal berib, B ni ogohlantiraman"],
    "Quvib o'tilayotgan transport haydovchisiga tezlikni oshirish yoki boshqa xatti-harakatlar bilan quvib o'tishga to'sqinlik qilish taqiqlanadi (YHQ 84-band).");

  // 27. Sekin yuruvchi katta yuk avtomobili — orqada navbat
  A(SCN.straight() +
    SCN.car({ path: "M150,170 L270,170", color: ME, label: "Siz", kind: "bus", blink: "R", loop: true, dur: 8 }) +
    SCN.car({ path: "M95,170 L215,170", color: "#1e88e5", label: "A", loop: true, dur: 8 }) +
    SCN.car({ path: "M55,170 L175,170", color: "#7e57c2", label: "B", loop: true, dur: 8 }) +
    SCN.car({ path: "M15,170 L135,170", color: "#26a69a", label: "C", loop: true, dur: 8 }),
    "Aholi punktidan tashqarida siz sekin harakatlanadigan katta yuk avtomobilini boshqarmoqdasiz, uni quvib o'tish qiyin va orqangizda transport to'planib qoldi. Nima qilishingiz kerak?",
    ["Iloji boricha o'ngga olib, zarur bo'lsa to'xtab, ularni o'tkazib yuboraman", "Tezlikni o'zgartirmay harakatni davom ettiraman", "Chap burilish ishorasi bilan ularga quvib o'tishni taqiqlayman", "Avariya ishorasini yoqib, tasmada to'xtayman"],
    "Aholi punktidan tashqarida sekin harakatlanadigan yoki katta hajmli transport haydovchisi uni iloji boricha yo'lning o'ng tomoniga olishi, zarur bo'lsa orqada to'plangan transportni o'tkazib yuborish uchun to'xtashi kerak (YHQ 87-band).");

  // 28. Orqadagi transport quvib o'tishni boshlagan
  A(SCN.straight() +
    SCN.car({ path: "M140,170 L320,170", color: "#8d6e63", label: "C", loop: true, dur: 8 }) +
    SCN.car({ path: "M60,170 L240,170", color: ME, label: "Siz", loop: true, dur: 8, blink: "L" }) +
    SCN.car({ path: "M-30,170 L0,170 Q20,170 35,130 L320,130", color: "#1e88e5", label: "B", loop: true, dur: 4, blink: "L" }),
    "Siz C ni quvib o'tmoqchisiz, ammo orqangizdagi B allaqachon quvib o'tishni boshladi. Nima qilasiz?",
    ["Quvib o'tishni boshlamay, B ni o'tkazib yuboraman", "Darhol qarama-qarshi tasmaga chiqaman — men oldindaman", "Tezlikni oshirib, B dan oldin quvib o'taman", "C ni o'ng tomondan quvib o'taman"],
    "Quvib o'tishni boshlashdan oldin haydovchi shu tasmada orqada harakatlanayotgan transport quvib o'tishni boshlamaganiga ishonch hosil qilishi shart (YHQ 82-band).");

  // ===================== TO'XTASH VA TO'XTAB TURISH =====================

  // 29. Piyodalar o'tish joyidan 6 m oldin
  A(SCN.straight() + SCN.zebra(205, 100, 22, 100) + SCN.sign("crossing", 232, 204) +
    STAY(175, 186, ME, "Siz") + DIM(189, 205, 172, "6 m"),
    "Siz piyodalar o'tish joyidan 6 m oldin to'xtadingiz. Bu yerda to'xtash mumkinmi?",
    ["Yo'q, piyodalar o'tish joyidan oldin 10 m dan kam masofada to'xtash taqiqlanadi", "Ha, 5 m dan uzoq bo'lgani uchun", "Ha, 10 daqiqadan kam vaqtga", "Ha, piyodalar bo'lmasa"],
    "Piyodalar o'tish joylarida va ulardan oldin 10 m dan kam masofa qolganda to'xtash taqiqlanadi (YHQ 91-band).");

  // 30. Kesishayotgan qatnov qismi chetidan 20 m
  A(SCN.cross() + STAY(60, 173, ME, "Siz") + DIM(74, 120, 188, "20 m", 202),
    "Siz kesishayotgan qatnov qismi chetidan 20 m oldin to'xtadingiz. Bu yerda to'xtash mumkinmi?",
    ["Yo'q, kesishayotgan qatnov qismi chetiga 30 m dan kam masofada to'xtash taqiqlanadi", "Ha, 15 m dan uzoq bo'lgani uchun", "Ha, 5 m dan uzoq bo'lgani uchun", "Ha, to'xtash 10 daqiqadan oshmasa"],
    "Qatnov qismlari kesishmalarida va kesishayotgan qatnov qismi chetiga 30 m dan kam masofada to'xtash taqiqlanadi (YHQ 91-band).");

  // 31. Avtobus bekati belgisidan 10 m
  A(SCN.straight() + BUSSIGN(115, 204) + STAY(175, 186, ME, "Siz") + DIM(126, 161, 172, "10 m"),
    "Bekatda 1.17 chizig'i yo'q. Siz do'konga kirish uchun avtobus bekati belgisidan 10 m o'tib to'xtadingiz. Bu yerda to'xtash mumkinmi?",
    ["Yo'q, bekat belgisidan oldin va keyin 15 m dan kam masofada to'xtash taqiqlanadi", "Ha, 5 m dan uzoq bo'lgani uchun", "Ha, avtobus kelmayotgan bo'lsa", "Ha, 10 daqiqadan kam vaqtga"],
    "1.17 chizig'i bo'lmasa, yo'nalishli transport to'xtash joyi belgisidan oldin va keyin 15 m dan kam masofada to'xtash taqiqlanadi (yo'lovchini chiqarish-tushirish bundan mustasno) (YHQ 91-band).");

  // 32. Temir yo'l kesishmasidan 25 m — to'xtab turish
  A(SCN.straight() + RAILS + SCN.sign("stAndrew", 200, 204, 24) + STAY(160, 186, ME, "Siz") + DIM(174, 232, 172, "25 m"),
    "Siz avtomobilni temir yo'l kesishmasidan 25 m oldin uzoq vaqtga qoldirmoqchisiz (to'xtab turish). Bu mumkinmi?",
    ["Yo'q, temir yo'l kesishmasining 50 m yaqinida to'xtab turish taqiqlanadi", "Ha, 10 m dan uzoq bo'lgani uchun", "Ha, 20 m dan uzoq bo'lgani uchun", "Ha, kesishmada shlagbaum bo'lmasa"],
    "Temir yo'l kesishmalarining har ikkala tomonida 50 m yaqinida to'xtab turish taqiqlanadi (YHQ 92-band).");

  // 33. «To'xtash taqiqlangan» belgisi
  A(SCN.straight() + SCN.sign("nostopping", 120, 204) + STAY(185, 186, ME, "Siz"),
    "Siz «To'xtash taqiqlangan» belgisidan keyin yo'lovchini kutish uchun 3 daqiqaga to'xtadingiz. Bu mumkinmi?",
    ["Yo'q, 3.27 belgisi ta'sir oralig'ida to'xtash taqiqlanadi", "Ha, 5 daqiqagacha to'xtash mumkin", "Ha, haydovchi avtomobildan chiqmasa", "Ha, avariya ishorasi yoqilgan bo'lsa"],
    "3.27 «To'xtash taqiqlangan» belgisi ta'sir oralig'ida to'xtash ham, to'xtab turish ham taqiqlanadi (YHQ 91-band).");

  // 34. «To'xtab turish taqiqlangan» — yo'lovchini tushirish
  A(SCN.straight() + SCN.sign("noparking", 120, 204) + STAY(185, 186, ME, "Siz") +
    SCN.person({ path: "M188,198 L188,224", loop: true, dur: 3 }),
    "«To'xtab turish taqiqlangan» belgisi ta'sir oralig'ida yo'lovchini tushirish uchun to'xtash mumkinmi?",
    ["Ha, yo'lovchini tushirish uchun to'xtash mumkin", "Yo'q, har qanday to'xtash taqiqlanadi", "Faqat 1 daqiqagacha, avariya ishorasi bilan", "Faqat yo'lning chap tomonida"],
    "3.28 belgisi faqat to'xtab turishni taqiqlaydi; yo'lovchini chiqarish yoki tushirish uchun to'xtash to'xtab turish hisoblanmaydi (YHQ 92-band).");

  // 35. Sariq yaxlit chiziq (1.4)
  A(SCN.straight() + YLINE(0, 300, 197) + STAY(170, 185, ME, "Siz"),
    "Qatnov qismi chetida sariq yaxlit chiziq (1.4) chizilgan. Bu yerda to'xtash mumkinmi?",
    ["Yo'q, 1.4 chizig'i ta'sir oralig'ida to'xtash taqiqlanadi", "Ha, 10 daqiqagacha", "Ha, faqat yo'lovchini tushirish uchun", "Ha, sariq chiziq faqat to'xtab turishni taqiqlaydi"],
    "Sariq yaxlit 1.4 chizig'i to'xtash taqiqlangan joyni bildiradi; uning ta'sir oralig'ida to'xtash taqiqlanadi (YHQ 91-band).");

  // 36. Sariq uzuq-uzuq chiziq (1.10)
  A(SCN.straight() + YLINE(0, 300, 197, true) + STAY(170, 185, ME, "Siz"),
    "Qatnov qismi chetida sariq uzuq-uzuq chiziq (1.10) chizilgan. Siz avtomobilni bu yerda 2 soatga qoldirmoqchisiz. Mumkinmi?",
    ["Yo'q, 1.10 chizig'i ta'sir oralig'ida to'xtab turish taqiqlanadi", "Ha, uzuq-uzuq chiziq hech narsani taqiqlamaydi", "Ha, kunduzi mumkin", "Ha, chiziq faqat yuk avtomobillariga tegishli"],
    "Sariq uzuq-uzuq 1.10 chizig'i to'xtab turish taqiqlangan joyni bildiradi; uning ta'sir oralig'ida to'xtab turish taqiqlanadi (YHQ 92-band).");

  // 37. Yaxlit chiziqqacha 3 m dan kam
  A(SCN.straight({ solidCenter: true }) + STAY(170, 186, ME, "Siz") + VDIM(200, 150, 179, "2,5 m"),
    "Siz to'xtagan joydan o'qdagi yaxlit chiziqqacha 2,5 m qoldi. Bu yerda to'xtash mumkinmi?",
    ["Yo'q, to'xtagan transport bilan bo'ylama yaxlit chiziq orasi 3 m dan kam bo'lsa, to'xtash taqiqlanadi", "Ha, 2 m dan ko'p bo'lgani uchun", "Ha, avariya ishorasini yoqsangiz", "Ha, aholi punktida mumkin"],
    "To'xtagan transport vositasi bilan bo'ylama yaxlit chiziq (chetni bildiruvchidan tashqari) orasidagi masofa 3 m dan kam bo'lgan joylarda to'xtash taqiqlanadi (YHQ 91-band).");

  // 38. Yo'lning chap tomonida to'xtash
  A(SCN.straight() + STAY(150, 114, ME, "Siz"),
    "Aholi punktida, har yo'nalishda bittadan tasma, o'rtada tramvay yo'li yo'q. Siz yo'lning chap tomonida, qatnov qismi chetida to'xtadingiz. Mumkinmi?",
    ["Ha, bunday yo'lda chap tomonda to'xtash mumkin", "Yo'q, faqat o'ng tomonda to'xtash mumkin", "Faqat bir tomonlama yo'llarda mumkin", "Faqat yuk avtomobillariga ruxsat etiladi"],
    "Aholi punktlarida o'rtada tramvay yo'li bo'lmagan, har yo'nalishda bittadan tasmali yo'llarda chap tomonda to'xtash va to'xtab turishga ruxsat etiladi (YHQ 88-band).");

  // 39. Eshikni ochish
  A(SCN.straight() + STAY(150, 186, ME, "Siz") +
    SCN.car({ path: "M-20,170 L320,170", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
    "Siz yo'l chetida to'xtadingiz va chap eshikni ochmoqchisiz, orqadan B yaqinlashmoqda. Nima qilasiz?",
    ["B o'tib ketguncha eshikni ochmayman", "Eshikni tez ochib, chiqib olaman", "Avariya ishorasini yoqib, eshikni ochaman", "Ovozli signal berib, eshikni ochaman"],
    "Agar boshqa yo'l harakati ishtirokchilariga xalaqit bersa yoki xavf tug'dirsa, transport vositasining eshiklarini ochish taqiqlanadi (YHQ 94-band).");

  // 40. Aholi punktida avariya to'xtash belgisi
  A(SCN.straight() + SCN.house(150, 222, 50, 40) +
    SCN.car({ path: "M210,170 L210.5,170", color: ME, label: "Siz", blink: "H" }) +
    `<g><polygon points="0,-7 7,6 -7,6" fill="none" stroke="#e53935" stroke-width="2.5"/><animateMotion dur="4s" repeatCount="indefinite" path="M190,170 L100,170" keyPoints="0;1;1" keyTimes="0;0.6;1" calcMode="linear"/></g>` +
    DIM(100, 196, 188, "? m", 199),
    "Aholi punktida avtomobilingiz ko'rinish cheklangan joyda majburan to'xtab qoldi. Avariya to'xtash belgisini transport vositasidan qancha masofada o'rnatasiz?",
    ["Kamida 15 m", "Kamida 30 m", "Kamida 5 m", "Kamida 50 m"],
    "Avariya to'xtash belgisi aholi punktlarida transport vositasidan kamida 15 m, aholi punktlaridan tashqarida kamida 30 m masofada o'rnatiladi (YHQ 51-band).");

  // ===================== TEMIR YO'L KESISHMALARI =====================

  // 41. Shlagbaum ochiq, qizil chiroqlar miltillaydi
  A(SCN.straight() + RAILS + `<circle cx="222" cy="204" r="4" fill="#424242"/>` + RED_BLINK(196, 214) +
    SCN.car({ path: "M0,170 L180,170", color: ME, label: "Siz" }),
    "Shlagbaum ko'tarilgan (ochiq), ammo kesishma svetoforida qizil chiroqlar navbatma-navbat miltillamoqda. Kesishmaga kirish mumkinmi?",
    ["Yo'q, shlagbaum holatidan qat'i nazar svetoforning taqiqlovchi ishorasida kirish taqiqlanadi", "Ha, shlagbaum ochiq bo'lgani uchun", "Ha, poyezd ko'rinmasa", "Ha, tez o'tib ketsangiz"],
    "Shlagbaumning holati va bor-yo'qligidan qat'i nazar svetoforning taqiqlovchi ishorasida temir yo'l kesishmasiga kirish taqiqlanadi (YHQ 118-band).");

  // 42. Kesishmadan keyin tirbandlik
  A(SCN.straight() + RAILS +
    STAY(272, 170, "#1e88e5", "B") + STAY(304, 170, "#7e57c2") +
    SCN.car({ path: "M0,170 L195,170", color: ME, label: "Siz" }),
    "Kesishmadan keyin tirbandlik bor: o'tsangiz, relslar ustida to'xtab qolasiz. Nima qilasiz?",
    ["Kesishmaga kirmay, undan oldin kutaman", "Kesishmaga kirib, relslar ustida kutaman", "Qarama-qarshi tasma orqali aylanib o'taman", "Shlagbaum ochiq bo'lgani uchun kiraman"],
    "Agar kesishmadan keyin haydovchini kesishmada to'xtashga majbur qiladigan tirbandlik bo'lsa, temir yo'l kesishmasiga kirish taqiqlanadi (YHQ 118-band).");

  // 43. Kutayotganlarni qarama-qarshi tasma orqali aylanib o'tish
  A(SCN.straight() + RAILS + BARRIER(222) + RED_BLINK(196, 214) +
    STAY(190, 170, "#1e88e5", "B") + STAY(155, 170, "#7e57c2", "C") +
    SCN.car({ path: "M-20,170 L50,170 Q75,170 90,130 L190,130", color: ME, label: "Siz", blink: "L", dur: 5, hold: 0.75 }),
    "Shlagbaum yopiq. Siz kesishma oldida turgan transportni qarama-qarshi tasmaga chiqib aylanib o'tmoqdasiz. Bu mumkinmi?",
    ["Yo'q, kesishma oldida turgan transportni qarama-qarshi tasmaga chiqib aylanib o'tish taqiqlanadi", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, oldinga o'tib, shlagbaum oldida birinchi turish uchun", "Ha, chap burilish ishorasini yoqsangiz"],
    "Temir yo'l kesishmasi oldida turgan transport vositalarini qarama-qarshi harakatlanish bo'lagiga chiqib aylanib o'tish taqiqlanadi (YHQ 118-band).");

  // 44. Kesishmada o'chib qolgan avtomobil
  A(SCN.straight() + RAILS +
    STAY(243, 170, ME, "Siz", { blink: "H" }) +
    SCN.person({ path: "M250,182 L250,222", loop: true, dur: 3 }),
    "Avtomobilingiz temir yo'l kesishmasi ustida o'chib qoldi. Birinchi navbatda nima qilish kerak?",
    ["Darhol odamlarni tushirib, kesishmani bo'shatish choralarini ko'raman", "Avvalo dvigatelni ta'mirlashga kirishaman", "Yo'lovchilar bilan avtomobil ichida yordam kutaman", "Avariya ishorasini yoqib, poyezd to'xtashini kutaman"],
    "Temir yo'l kesishmasida majburan to'xtab qolgan haydovchi darhol odamlarni tushirish va kesishmani bo'shatish choralarini ko'rishi shart (YHQ 120-band).");

  // 45. Kesishma navbatchisi qo'llarini yonga uzatgan
  A(SCN.straight() + RAILS + SCN.controller(212, 150, "side", 90) +
    SCN.car({ path: "M0,170 L170,170", color: ME, label: "Siz" }),
    "Temir yo'l kesishmasi navbatchisi sizga ko'kragi bilan qarab, qo'llarini yon tomonga uzatdi. Nima qilasiz?",
    ["To'xtayman — kesishmaga kirish taqiqlanadi", "Kesishmadan o'tishim mumkin", "Faqat sekin harakatlanib o'tishim mumkin", "Ovozli signal berib o'taman"],
    "Kesishma navbatchisi haydovchiga oldi yoki orqasi bilan turib qo'llarini yonga uzatsa, bu taqiqlovchi ishora — kesishmaga kirish taqiqlanadi (YHQ 118-band).");
})();
