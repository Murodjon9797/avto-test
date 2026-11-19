// Animatsion vaziyatlar (4-to'plam): piyodalar, maxsus va yo'nalishli transport, tashqi yoritish, shatakka olish, avtomagistral va turar joy dahasi (YHQ 25-29, 50-52, 109-115-2, 121-127, 131-145)

const S4H = (() => {
  // Avtomobil bilan birga harakatlanuvchi qo'shimcha qatlam (fara nuri, tros, mayoqcha) — SCN.car bilan bir xil harakat
  const mo = (o) => {
    const dur = o.dur || 4;
    if (o.loop) return `<animateMotion dur="${dur}s" repeatCount="indefinite" rotate="auto" path="${o.path}"/>`;
    const kp = o.keyPoints || "0;1;1", kt = o.keyTimes || `0;${o.hold || 0.55};1`;
    const n = kt.split(";").length - 1;
    const sp = o.keyPoints ? Array(n).fill("0.4 0 0.2 1").join(";") : "0.22 1 0.36 1;0 0 1 1";
    return `<animateMotion dur="${dur}s" repeatCount="indefinite" rotate="auto" path="${o.path}" keyPoints="${kp}" keyTimes="${kt}" calcMode="spline" keySplines="${sp}"/>`;
  };
  const att = (o, inner) => `<g>${inner}${mo(o)}</g>`;
  const beam = (len, spread, op, blink) => `<polygon points="13,-5 ${len},-${spread} ${len},${spread} 13,5" fill="#fff59d" opacity="${op}">${blink ? `<animate attributeName="opacity" values="${op};0.05" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>` : ""}</polygon>`;
  const ybeacon = `<g><circle r="6.5" fill="#ff9100" opacity=".55"/><rect x="-3" y="-3" width="6" height="6" rx="1.5" fill="#ffc400"/><animate attributeName="opacity" values="1;0.12" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/></g>`;
  const post = (x, y) => `<rect x="${x + 11}" y="${y + 22}" width="2" height="9" fill="#6b6f75"/>`;
  const night = (op = 0.72) => `<rect width="300" height="300" fill="#0b1020" opacity="${op}"/>`;
  const fog = `<rect width="300" height="300" fill="#dfe5ea" opacity=".6"/><g opacity=".5"><ellipse cx="80" cy="140" rx="90" ry="26" fill="#fff"/><ellipse cx="230" cy="175" rx="100" ry="22" fill="#fff"/><animateTransform attributeName="transform" type="translate" values="-20,0;20,0;-20,0" dur="8s" repeatCount="indefinite"/></g>`;
  const ice = `<rect x="-5" y="100" width="310" height="100" fill="#b3e5fc" opacity=".38"/>` + [[30, 115], [90, 186], [150, 112], [205, 190], [262, 120], [120, 150]].map(([x, y]) => `<path d="M${x} ${y} l14 -3 M${x + 4} ${y + 5} l10 -2" stroke="#fff" stroke-width="1.4" opacity=".75"/>`).join("");
  // Belgilar (o'z rasmimiz)
  const residential = (x, y, end) => post(x, y) + `<g transform="translate(${x},${y})"><rect width="24" height="24" rx="2.5" fill="#1565c0" stroke="#fff" stroke-width="1.4"/><polygon points="4,12 10,6 16,12" fill="#fff"/><rect x="6" y="12" width="8" height="7" fill="#fff"/><circle cx="18.5" cy="12" r="1.8" fill="#fff"/><rect x="17.5" y="14" width="2" height="6" fill="#fff"/>${end ? `<line x1="3" y1="21" x2="21" y2="3" stroke="#e53935" stroke-width="2.6"/>` : ""}</g>`;
  const motorway = (x, y) => post(x, y) + `<g transform="translate(${x},${y})"><rect width="24" height="24" rx="2.5" fill="#2e7d32" stroke="#fff" stroke-width="1.4"/><path d="M6 20 L10 5 M18 20 L14 5 M4 11 H20" stroke="#fff" stroke-width="2" fill="none"/></g>`;
  const busLaneSign = (x, y) => post(x, y) + `<g transform="translate(${x},${y})"><rect width="24" height="24" rx="2.5" fill="#1565c0" stroke="#fff" stroke-width="1.4"/><rect x="5" y="6" width="14" height="10" rx="2" fill="#fff"/><rect x="7" y="8" width="10" height="3" fill="#1565c0"/><circle cx="8.5" cy="17.5" r="1.6" fill="#fff"/><circle cx="15.5" cy="17.5" r="1.6" fill="#fff"/></g>`;
  const laneA = (xs, y) => xs.map((x) => `<text x="${x}" y="${y}" font-size="14" font-weight="900" fill="#f2f2f2" fill-opacity=".85" text-anchor="middle" font-family="Arial">A</text>`).join("");
  // Shatakka olish: yetakchi va shatakdagi avtomobil bir xil uzunlikdagi yo'l, bir xil davomiylik (oraliq 40 px)
  const towLead = { path: "M60,170 L360,170", loop: true, dur: 7 };
  const towTail = { path: "M20,170 L320,170", loop: true, dur: 7 };
  const rope = att(towLead, `<line x1="-14" y1="0" x2="-26" y2="0" stroke="#3e2723" stroke-width="1.6"/><rect x="-22" y="-3" width="4" height="4" fill="#e53935" stroke="#fff" stroke-width=".8"/>`);
  const bar = att(towLead, `<line x1="-14" y1="0" x2="-26" y2="0" stroke="#78909c" stroke-width="3"/><line x1="-14" y1="0" x2="-26" y2="0" stroke="#e53935" stroke-width="3" stroke-dasharray="2 2"/>`);
  return { att, beam, ybeacon, night, fog, ice, residential, motorway, busLaneSign, laneA, towLead, towTail, rope, bar };
})();

// 1. Qo'shni tasmadagi transport o'tish joyi oldida to'xtadi (110)
A(SCN.oneway3() + SCN.zebra(200, 90, 22, 120) + SCN.sign("crossing", 226, 214) +
  SCN.car({ path: "M40,190 L182,190", color: "#1e88e5", label: "B" }) +
  SCN.person({ path: "M211,218 L211,82", loop: true, dur: 6 }) +
  SCN.car({ path: "M0,150 L150,150", color: ME, label: "Siz", dur: 5, hold: 0.7 }),
  "O'ng qatordagi B tartibga solinmagan piyodalar o'tish joyi oldida to'xtadi. Siz qo'shni o'rta qatordasiz. Qanday harakatlanasiz?",
  ["B oldida piyoda yo'qligiga ishonch hosil qilgandan keyingina davom etaman", "B to'xtagani uchun uni o'tib, tezroq o'tib ketaman", "Ovozli signal berib, harakatni davom ettiraman", "Chap qatorga o'tib, tezlikni oshiraman"],
  "Tartibga solinmagan o'tish joyi oldida qo'shni tasmadagi transport sekinlashsa yoki to'xtasa, boshqa haydovchilar uning oldida piyoda yo'qligiga ishonch hosil qilgandan so'nggina harakatni davom ettirishi mumkin (YHQ 110-band).");

// 2. Tartibga solingan o'tish joyi — piyoda o'tishni tugatmoqda (111)
A(SCN.straight() + SCN.zebra(205, 100, 22, 100) + SCN.light(180, 206, "green", 90) +
  SCN.person({ path: "M216,192 L216,94", dur: 6, hold: 0.9 }) +
  SCN.car({ path: "M0,170 L178,170", color: ME, label: "Siz" }),
  "Sizga svetoforning yashil ishorasi yondi, ammo piyoda o'tish joyida qatnov qismini kesib o'tishni hali tugatmagan. Nima qilasiz?",
  ["Piyodaga o'tishni tugallashiga imkon beraman", "Yashil yongani uchun darhol harakatni boshlayman", "Ovozli signal berib, piyodani shoshiltiraman", "Piyodani orqa tomonidan aylanib o'taman"],
  "Tartibga solingan piyodalar o'tish joyida ruxsat etuvchi ishora yongan taqdirda ham haydovchi piyodalarga qatnov qismini kesib o'tishni tugallashga imkon berishi kerak (YHQ 111-band).");

// 3. O'tish joyidan keyin tirbandlik (112)
A(SCN.straight() + SCN.zebra(150, 100, 22, 100) +
  SCN.car({ path: "M196,170 L196.5,170", color: "#1e88e5", label: "B" }) +
  SCN.car({ path: "M230,170 L230.5,170", color: "#8e24aa" }) +
  SCN.car({ path: "M264,170 L264.5,170", color: "#43a047" }) +
  SCN.car({ path: "M0,170 L128,170", color: ME, label: "Siz" }),
  "Piyodalar o'tish joyidan keyin tirbandlik hosil bo'lgan: o'tish joyiga kirsangiz, unda to'xtab qolasiz. Nima qilasiz?",
  ["O'tish joyiga kirmay, uning oldida kutaman", "O'tish joyiga kirib, B ning orqasida to'xtayman", "Piyoda bo'lmasa, o'tish joyida kutish mumkin", "Qarama-qarshi tasmaga chiqib, tirbandlikni aylanib o'taman"],
  "Piyodalar o'tish joyidan keyingi tirbandlik tufayli unda to'xtashga majbur bo'ladigan bo'lsangiz, piyodalar o'tish joyiga kirish taqiqlanadi (YHQ 112-band).");

// 4. Yashil ishorada ko'zi ojiz piyoda (113)
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "green") +
  SCN.person({ path: "M196,108 L104,108", loop: true, dur: 9, cane: true, color: "#546e7a" }) +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }),
  "Sizga yashil ishora yonib turibdi, to'g'riga ketmoqchisiz. Chorrahadan keyingi qatnov qismini oq hassa bilan ishora berayotgan ko'zi ojiz piyoda kesib o'tmoqda. Nima qilasiz?",
  ["Uni o'tkazib yuborib, so'ng harakatlanaman", "Yashil yonib turgani uchun birinchi o'taman", "Ovozli signal berib, uni to'xtataman", "Piyoda o'tish joyidan tashqarida — davom etaman"],
  "Barcha hollarda, shu jumladan o'tish joylaridan tashqarida ham haydovchi oq hassa bilan ishora berayotgan ko'zi ojiz piyodani o'tkazib yuborishi kerak (YHQ 113-band).");

// 5. O'z tomoningizda bolalar avtobusi (115)
A(SCN.straight() +
  SCN.car({ path: "M196,186 L196.5,186", color: "#fdd835", label: "Bolalar", kind: "bus", blink: "H" }) +
  SCN.person({ path: "M226,206 L226,96", loop: true, dur: 5, small: true, color: "#29b6f6" }) +
  SCN.person({ path: "M240,206 L240,96", loop: true, dur: 5.6, small: true, color: "#ab47bc" }) +
  SCN.car({ path: "M0,170 L118,170", color: ME, label: "Siz" }),
  "Siz harakatlanayotgan tomonda «Bolalar guruhini tashish» taniqlik belgisi o'rnatilgan, avariya ishorasi yoqilgan avtobus to'xtadi, uning oldidan bolalar yo'lga chiqmoqda. Nima qilasiz?",
  ["Tezlikni kamaytirib, zarur bo'lsa to'xtab, bolalarni o'tkazib yuboraman", "Avtobusni chap tomondan tezlikni o'zgartirmay aylanib o'taman", "Ovozli signal berib, bolalarni ogohlantiraman va o'taman", "Avtobus to'xtab turgani uchun e'tibor bermay davom etaman"],
  "«Bolalar guruhini tashish» belgisi o'rnatilgan, avariya ishorasi yoqilgan to'xtagan transportga yaqinlashayotgan haydovchi tezlikni kamaytirishi, zarur bo'lsa to'xtashi va bolalarni o'tkazib yuborishi shart (YHQ 115-band).");

// 6. Qatnov qismidagi bekat maydonchasi — yo'lovchilar avtobus eshiklariga (114)
A(SCN.oneway3() + `<rect x="168" y="161" width="76" height="8" rx="2" fill="#cfcac0" stroke="#a8a399"/>` +
  SCN.car({ path: "M206,150 L206.5,150", color: "#43a047", label: "Avt", kind: "bus" }) +
  SCN.person({ path: "M192,214 L192,172", loop: true, dur: 3.5 }) +
  SCN.person({ path: "M220,172 L220,214", loop: true, dur: 4, color: "#26a69a" }) +
  SCN.car({ path: "M0,190 L150,190", color: ME, label: "Siz" }),
  "Avtobus qatnov qismidagi bekat maydonchasida to'xtadi, yo'lovchilar siz harakatlanayotgan tasma orqali uning eshiklariga bormoqda va undan qaytmoqda. Nima qilasiz?",
  ["To'xtab, piyodalarga yo'l beraman", "Piyodalar menga yo'l berishi kerak — ular o'tish joyida emas", "Ovozli signal berib, sekin o'tib ketaman", "Chap qatorga o'tib, avtobusni aylanib o'taman"],
  "Yo'lovchilarni chiqarish va tushirish qatnov qismida yoki undagi maydonchada bo'layotgan bo'lsa, haydovchi bekatdagi yo'nalishli transport eshiklari tomon borayotgan yoki undan kelayotgan piyodalarga yo'l berishi kerak (YHQ 114-band).");

// 7. Chapga burilishda piyoda (96)
A(SCN.cross() + SCN.zebra(92, 120, 18, 60) +
  SCN.person({ path: "M101,196 L101,104", loop: true, dur: 5 }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }),
  "Teng huquqli chorrahada siz chapga burilmoqchisiz. Qarama-qarshi yo'nalishda transport yo'q, burilayotgan yo'lingizni piyoda kesib o'tmoqda. Nima qilasiz?",
  ["Piyodaga yo'l beraman", "Piyoda menga yo'l berishi kerak", "Ovozli signal berib burilaman", "Piyodaning orqa tomonidan aylanib o'taman"],
  "Chapga yoki o'ngga burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga yo'l berishi kerak (YHQ 96-band).");

// 8. Hovlidan chiqishda trotuardagi piyoda (54)
A(SCN.straight() + `<rect x="120" y="210" width="30" height="90" fill="#8a8d91"/>` +
  SCN.person({ path: "M300,205 L-10,205", loop: true, dur: 8 }) +
  SCN.car({ path: "M135,300 L135,228", color: ME, label: "Siz", blink: "R" }),
  "Siz hovlidan chiqib, yo'lga o'ngga burilmoqchisiz. Trotuar bo'ylab piyoda kelmoqda. Nima qilasiz?",
  ["Piyodaga yo'l beraman", "Piyoda menga yo'l berishi kerak — men burilmoqdaman", "Ovozli signal berib chiqaman", "Tezlikni oshirib, piyodadan oldin o'tib olaman"],
  "Yondosh hududdan yo'lga chiqayotgan haydovchi unda harakatlanayotgan piyodalar va transport vositalariga yo'l berishi kerak (YHQ 54-band).");

// 9. Turar joy dahasidan chiqish (126)
A(SCN.tjunction() + S4H.residential(188, 198, true) +
  SCN.car({ path: "M-20,165 L320,165", color: "#1e88e5", label: "B", loop: true, dur: 5 }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }),
  "Siz «Turar joy dahasining oxiri» belgisi o'rnatilgan joydan yo'lga chiqmoqdasiz. Ustuvorlik belgilari yo'q, B chap tomondan kelmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B chap tomondan kelmoqda", "Kim birinchi yetib kelsa", "Bir vaqtda o'tiladi"],
  "Turar joy dahalaridan chiqishda haydovchi yo'l harakatining boshqa ishtirokchilariga yo'l berishi kerak, o'ng qo'l qoidasi qo'llanmaydi (YHQ 126-band).");

// 10. Turar joy dahasida piyodalar qatnov qismida (123)
A(SCN.straight() + S4H.residential(20, 204) +
  SCN.person({ path: "M180,177 L330,177", loop: true, dur: 12 }) +
  SCN.person({ path: "M196,188 L346,188", loop: true, dur: 12, color: "#7e57c2" }) +
  SCN.car({ path: "M0,170 L130,170", color: ME, label: "Siz", dur: 5, hold: 0.7 }),
  "Siz turar joy dahasidasiz (5.38 belgisi). Oldinda piyodalar qatnov qismi bo'ylab ketmoqda. Nima qilasiz?",
  ["Ular imtiyozga ega — xavfsizligini ta'minlab, sekin harakatlanaman", "Ovozli signal berib, ularni trotuarga chiqaraman", "Piyodalar qatnov qismida yurishi taqiqlangan — tezlikni kamaytirmay o'taman", "Qarama-qarshi tasmaga chiqib, tezlikni oshirib o'taman"],
  "Turar joy dahalarida piyodalarga trotuar va qatnov qismida harakatlanishga ruxsat etiladi va ular imtiyozga ega (YHQ 123-band).");

// 11. Turar joy dahasida dvigatel ishlab turgan holda to'xtab turish (124)
A(SCN.straight() + S4H.residential(20, 204) +
  SCN.car({ path: "M150,186 L150.5,186", color: ME, label: "Siz" }) +
  [0, 0.7, 1.4].map((b) => `<circle cx="134" cy="190" r="3" fill="#cfd8dc" opacity="0"><animate attributeName="cx" values="134;104" dur="2.1s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="r" values="2;7" dur="2.1s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="2.1s" begin="${b}s" repeatCount="indefinite"/></circle>`).join(""),
  "Turar joy dahasida uzoq vaqt to'xtab turmoqchisiz. Dvigatelni ishlab turgan holda qoldirish mumkinmi?",
  ["Yo'q, turar joy dahasida dvigateli ishlab turgan holda to'xtab turish taqiqlanadi", "Ha, 5 daqiqadan oshmasa", "Ha, haydovchi salonda bo'lsa", "Ha, avariya ishorasi yoqilgan bo'lsa"],
  "Turar joy dahalarida dvigateli ishlab turgan holda to'xtab turish taqiqlanadi (YHQ 124-band).");

// 12. Orqadan maxsus transport yaqinlashmoqda (26)
A(SCN.oneway3() +
  SCN.car({ path: "M0,110 L40,110 Q70,110 90,150 L170,150", color: ME, label: "Siz", blink: "R", dur: 5 }) +
  SCN.car({ path: "M-40,110 L340,110", color: "#fafafa", label: "103", siren: true, keyPoints: "0;0;1", keyTimes: "0;0.55;1", dur: 5 }),
  "Chap qatorda ketyapsiz. Orqangizdan ko'k-qizil yalt-yalt etuvchi mayoqchalari va maxsus tovushli ishorasi yoqilgan tez yordam mashinasi yaqinlashmoqda. Nima qilasiz?",
  ["O'ng tomondagi qatorga o'tib, unga yo'l beraman", "Tezlikni oshirib, chap qatorda davom etaman", "Shu qatorda keskin tormozlab to'xtayman", "Uni o'tkazmay, oldidagi bo'sh joyni egallab boraman"],
  "Ko'k-qizil mayoqchalari va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan tezkor xizmat transportiga yo'l berish shart (YHQ 26-band).");

// 13. Kuzatuvdagi kolonna (26)
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "green") +
  SCN.car({ path: "M320,135 L-140,135", color: "#fafafa", label: "102", siren: true, loop: true, dur: 7 }) +
  [["M360,135 L-100,135", "#37474f"], ["M400,135 L-60,135", "#455a64"], ["M440,135 L-20,135", "#263238"]].map(([p, c]) =>
    S4H.att({ path: p, loop: true, dur: 7 }, S4H.beam(30, 7, 0.45)) + SCN.car({ path: p, color: c, loop: true, dur: 7 })).join("") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }),
  "Sizga yashil ishora yonib turibdi. Chorraha orqali oldida ko'k-qizil mayoqchali avtomobil kuzatib borayotgan, yaqinni yorituvchi faralari yoqilgan transport kolonnasi o'tmoqda. Nima qilasiz?",
  ["Kolonna to'liq o'tib bo'lguncha kutaman", "Kuzatuvchi avtomobil o'tishi bilan harakatni boshlayman", "Kolonnadagi avtomobillar orasidan o'tib olaman", "Yashil yonib turgani uchun birinchi o'taman"],
  "Maxsus mayoqchali transport kuzatuvidagi, yaqinni yorituvchi faralari yoqilgan transport vositalariga ham yo'l berish shart, kolonna orasiga kirish esa taqiqlanadi (YHQ 26-band).");

// 14. Sariq (zarg'aldoq) mayoqcha imtiyoz bermaydi (28)
A(SCN.cross() +
  SCN.car({ path: "M0,165 L104,165", color: "#fb8c00", label: "Ta'mir" }) + S4H.att({ path: "M0,165 L104,165" }, S4H.ybeacon) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }),
  "Teng huquqli chorraha. Chap tomondan zarg'aldoq rangli yalt-yalt etuvchi mayoqchasi yoqilgan yo'l ta'mirlash mashinasi yaqinlashmoqda. Ikkalangiz to'g'riga ketmoqchisiz. Kim birinchi o'tadi?",
  ["Siz", "Ta'mirlash mashinasi — u mayoqcha yoqqan", "Kim birinchi yetib kelsa", "Ikkalangiz to'xtab, qo'l ishoralari bilan kelishasiz"],
  "Zarg'aldoq yoki sariq mayoqcha harakatlanishda imtiyoz bermaydi, faqat xavf haqida ogohlantiradi; teng huquqli chorrahada mashina sizga chapdan yaqinlashgani uchun u yo'l beradi (YHQ 28-band).");

// 15. Avtobus haydovchisi bekatdan chiqishda (133)
A(SCN.straight() + `<rect x="170" y="200" width="70" height="10" fill="#bdbdbd"/>` +
  SCN.car({ path: "M205,186 L205.5,186", color: ME, label: "Siz", kind: "bus", blink: "L" }) +
  SCN.car({ path: "M-20,170 L320,170", color: "#1e88e5", label: "B", loop: true, dur: 4 }),
  "Siz avtobus haydovchisisiz va aholi punktidagi bekatdan chiqmoqchisiz, chap burilish ko'rsatkichini yoqdingiz. Orqadan B yaqinlashmoqda. Qachon harakatni boshlaysiz?",
  ["Menga yo'l berilganiga ishonch hosil qilgandan keyin", "Ko'rsatkichni yoqishim bilan darhol — menga yo'l berishlari shart", "Ovozli signal berib, darhol chiqaman", "B to'xtamasa ham chiqaman — avtobus ustunlikka ega"],
  "Aholi punktlarida bekatdan chiqayotgan avtobusga yo'l beriladi, biroq avtobus haydovchisi o'ziga yo'l berilganiga ishonch hosil qilgandan keyingina harakatni boshlashi mumkin (YHQ 133-band).");

// 16. Chorrahadan tashqarida tramvay izlari (131)
A(SCN.straight() + `<line x1="238" y1="0" x2="238" y2="300" stroke="#9ea3a8" stroke-width="1.6"/><line x1="248" y1="0" x2="248" y2="300" stroke="#9ea3a8" stroke-width="1.6"/>` +
  SCN.car({ path: "M243,-40 L243,340", color: "#fdd835", label: "T", kind: "tram", loop: true, dur: 6 }) +
  SCN.car({ path: "M0,170 L190,170", color: ME, label: "Siz" }),
  "Chorrahadan tashqarida tramvay izlari qatnov qismini kesib o'tadi (depodan chiqish joyi emas). Tramvay yaqinlashmoqda. Kim birinchi o'tadi?",
  ["Tramvay", "Siz — tramvay chap tomondan kelmoqda", "Kim birinchi yetib kelsa", "Siz — bu chorraha emas, tramvay to'xtashi shart"],
  "Tramvay yo'llari chorrahadan tashqarida qatnov qismini kesib o'tadigan joylarda tramvay relssiz transportga nisbatan imtiyozga ega (depodan chiqish joylari bundan mustasno) (YHQ 131-band).");

// 17. Yo'nalishli transport tasmasida tirbandlikni aylanib o'tish (132)
A(SCN.oneway3() + SCN.solid(0, 170, 300, 170, 4) + S4H.laneA([70, 210], 196) + S4H.busLaneSign(250, 214) +
  SCN.car({ path: "M180,150 L180.5,150", color: "#1e88e5" }) +
  SCN.car({ path: "M214,150 L214.5,150", color: "#8e24aa" }) +
  SCN.car({ path: "M248,150 L248.5,150", color: "#43a047" }) +
  SCN.car({ path: "M-40,190 L340,190", color: "#00897b", label: "Avt", kind: "bus", loop: true, dur: 5 }) +
  SCN.car({ path: "M0,150 L132,150", color: ME, label: "Siz" }),
  "O'ng chetki tasma 5.9 belgisi bilan yo'nalishli transport vositalari uchun ajratilgan. O'rta qatorda tirbandlik. Shu tasma bo'ylab yurib, tirbandlikni aylanib o'tish mumkinmi?",
  ["Yo'q, bu tasmada boshqa transport vositalarining harakatlanishi va to'xtashi taqiqlanadi", "Ha, avtobus ko'rinmasa mumkin", "Ha, avariya ishorasini yoqib mumkin", "Ha, keyingi bekatgacha mumkin"],
  "Yo'nalishli transport uchun 5.9 belgisi bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to'xtashi taqiqlanadi (YHQ 132-band).");

// 18. Uzuq-uzuq chiziqli yo'nalishli tasmadan o'ngga burilish (132)
A(SCN.oneway3() + `<rect x="200" y="206" width="60" height="100" fill="url(#asph)"/><line x1="200" y1="210" x2="200" y2="300" stroke="#a8a399" stroke-width="2"/><line x1="260" y1="210" x2="260" y2="300" stroke="#a8a399" stroke-width="2"/>` +
  S4H.laneA([70, 160], 196) + S4H.busLaneSign(150, 220) +
  SCN.car({ path: "M0,150 L80,150 Q110,150 125,190 L180,190 Q215,190 215,225 L215,320", color: ME, label: "Siz", blink: "R", loop: true, dur: 6 }),
  "O'ng chetki tasma 5.9 belgisi bilan yo'nalishli transport uchun ajratilgan va qolgan tasmalardan uzuq-uzuq chiziq bilan ajratilgan. Siz o'ngga burilmoqchisiz. To'g'ri harakatlanyapsizmi?",
  ["Ha, burilishdan oldin yo'nalishli transport tasmasiga qayta tizilish kerak", "Yo'q, o'rta qatordan burilish kerak", "Yo'q, bu tasmaga burilish uchun ham kirish taqiqlanadi", "Yo'q, avval to'xtab, barcha avtobuslarni o'tkazib yuborish kerak"],
  "5.9 belgisi bilan belgilangan tasma uzuq-uzuq chiziq bilan ajratilgan bo'lsa, burilmoqchi bo'lgan transport vositalari bu tasmaga qayta tizilishi kerak (YHQ 132-band).");

// 19. Yo'nalishli tasma bor yo'lda hovliga kirish (115-2)
A(SCN.oneway3() + SCN.solid(0, 170, 150, 170, 4) + `<rect x="240" y="206" width="30" height="100" fill="#8a8d91"/>` +
  S4H.laneA([60], 196) + `<text x="200" y="164" font-size="10" fill="#fff" text-anchor="middle" font-family="Arial">? m</text>` +
  SCN.car({ path: "M0,150 L150,150 Q175,150 190,190 L225,190 Q255,190 255,225 L255,320", color: ME, label: "Siz", blink: "R", loop: true, dur: 6 }),
  "Yo'nalishli transport uchun alohida tasmasi bor yo'lda o'ng tomondagi hovliga (yondosh hududga) kirmoqchisiz. Bu tasmaga qayerdan o'tish mumkin?",
  ["Kirish joyidan 50 m masofadagi uzuq-uzuq chiziqli joydan, yo'nalishli transportga xalaqit bermasdan", "Istalgan joydan, avariya ishorasini yoqib", "Kirish joyidan 150 m oldin, yaxlit chiziqni kesib", "Mumkin emas — bunday yo'ldan hovliga kirilmaydi"],
  "Bu tasmada harakatlanishi taqiqlangan transport yondosh hududga kirish uchun kirish joyidan 50 m masofadagi uzuq-uzuq chiziqli joydan, yo'nalishli transportga yo'l berib, tasmaga o'tishi mumkin (YHQ 115-2-band).");

// 20. Yo'nalishli tasmada tez yordam (115-1)
A(SCN.oneway3() + SCN.solid(0, 170, 300, 170, 4) + S4H.laneA([90, 230], 196) + S4H.busLaneSign(150, 220) +
  SCN.car({ path: "M-30,190 L330,190", color: "#fafafa", label: "103", siren: true, loop: true, dur: 4 }) +
  SCN.car({ path: "M-30,150 L330,150", color: ME, label: "Siz", loop: true, dur: 8 }),
  "Yo'nalishli transport uchun alohida ajratilgan tasmada maxsus tovushli ishorasi va mayoqchalari yoqilgan tez yordam avtomobili harakatlanmoqda. Bu qoidaga muvofiqmi?",
  ["Ha, tezkor va maxsus xizmatlarning transport vositalariga bu tasmada harakatlanish mumkin", "Yo'q, bu tasmada faqat avtobus va trolleybuslar harakatlanadi", "Yo'q, mayoqcha yoqilgan bo'lsa ham u umumiy qatorda harakatlanishi kerak", "Ha, lekin faqat bemor bo'lmaganda"],
  "Yo'nalishli transport tasmasida boshqa transport vositalarining harakatlanishi taqiqlanadi, tezkor va maxsus xizmatlarning transport vositalari bundan mustasno (YHQ 115-1-band).");

// 21. Tunda qarama-qarshi transport — yaqinni yorituvchi faraga o'tish masofasi (135)
A(SCN.straight() + S4H.night() +
  S4H.att({ path: "M0,170 L120,170", dur: 5, hold: 0.8 }, S4H.beam(150, 34, 0.42)) +
  S4H.att({ path: "M320,130 L190,130", dur: 5, hold: 0.8 }, S4H.beam(60, 12, 0.4)) +
  SCN.car({ path: "M320,130 L190,130", color: "#90a4ae", label: "B", dur: 5, hold: 0.8 }) +
  SCN.car({ path: "M0,170 L120,170", color: ME, label: "Siz", dur: 5, hold: 0.8 }),
  "Tunda yoritilmagan yo'lda uzoqni yorituvchi faralar bilan ketyapsiz, qarama-qarshidan B yaqinlashmoqda. Unga qancha masofa qolganda yaqinni yorituvchi faralarga o'tasiz?",
  ["Kamida 150 m qolganda", "100 m qolganda", "50 m qolganda", "Avtomobillar tenglashganda"],
  "Qarama-qarshi yo'nalishdagi transport vositasiga kamida 150 m masofa qolganda uzoqni yorituvchi faralar o'rniga yaqinni yorituvchi faralar yoqilishi kerak (YHQ 135-band).");

// 22. Qarama-qarshi haydovchi faralarini o'chirib-yoqmoqda (135)
A(SCN.straight() + S4H.night() + `<text x="150" y="122" font-size="11" fill="#fff" text-anchor="middle" font-family="Arial">&gt;150 m</text>` +
  S4H.att({ path: "M0,170 L60,170", dur: 5, hold: 0.8 }, S4H.beam(150, 34, 0.42)) +
  S4H.att({ path: "M320,130 L250,130", dur: 5, hold: 0.8 }, S4H.beam(110, 26, 0.45, true)) +
  SCN.car({ path: "M320,130 L250,130", color: "#90a4ae", label: "B", dur: 5, hold: 0.8 }) +
  SCN.car({ path: "M0,170 L60,170", color: ME, label: "Siz", dur: 5, hold: 0.8 }),
  "Tunda qarama-qarshidan kelayotgan B haydovchisi faralarini vaqti-vaqti bilan o'chirib-yoqmoqda, unga hali 150 m dan ko'proq masofa bor. Sizda uzoqni yorituvchi faralar yoqilgan. Nima qilasiz?",
  ["Shu masofadayoq yaqinni yorituvchi faralarga o'taman", "150 m qolguncha uzoqni yorituvchi faralarni qoldiraman", "Javoban men ham faralarni o'chirib-yoqaman", "Faralarni o'chirib, gabarit chiroqlarida ketaman"],
  "Qarama-qarshi haydovchi faralarini o'chirib-yoqib zarurat borligini bildirsa, yaqinni yorituvchi faralarga 150 m dan ham ko'proq masofada o'tiladi (YHQ 135-band).");

// 23. Tunda oldinda bir yo'nalishdagi transport (135)
A(SCN.straight() + S4H.night() +
  S4H.att({ path: "M-10,170 L290,170", loop: true, dur: 6 }, S4H.beam(125, 30, 0.4)) +
  S4H.att({ path: "M100,170 L400,170", loop: true, dur: 6 }, S4H.beam(50, 10, 0.35)) +
  SCN.car({ path: "M100,170 L400,170", color: "#90a4ae", label: "B", loop: true, dur: 6 }) +
  SCN.car({ path: "M-10,170 L290,170", color: ME, label: "Siz", loop: true, dur: 6 }),
  "Tunda yoritilmagan yo'lda oldingizda bir yo'nalishda B ketmoqda, qarama-qarshidan transport yo'q. Sizda uzoqni yorituvchi faralar yoqilgan. Nima qilasiz?",
  ["Yaqinni yorituvchi faralarga o'taman — B haydovchisining ko'zini qamashtirishim mumkin", "Qarama-qarshi transport yo'qligi uchun uzoqni yorituvchi faralarni qoldiraman", "Faralarni o'chirib, gabarit chiroqlarida ketaman", "B ni ogohlantirish uchun faralarni o'chirib-yoqib boraman"],
  "Qarama-qarshi va bir yo'nalishdagi haydovchilarning ko'zini qamashtirishi mumkin bo'lgan barcha holatlarda uzoqni yorituvchi faralar o'rniga yaqinni yorituvchi faralar yoqiladi (YHQ 135-band).");

// 24. Yoritilgan yo'lda tunda (135)
A(SCN.straight() + S4H.night(0.6) +
  [40, 120, 200, 280].map((x) => `<circle cx="${x}" cy="118" r="34" fill="#ffe082" opacity=".22"/><rect x="${x - 1}" y="92" width="2" height="12" fill="#9e9e9e"/><circle cx="${x}" cy="102" r="3" fill="#fff8e1"/>`).join("") +
  S4H.att({ path: "M-20,170 L320,170", loop: true, dur: 6 }, S4H.beam(55, 12, 0.4)) +
  SCN.car({ path: "M-20,170 L320,170", color: ME, label: "Siz", loop: true, dur: 6 }),
  "Tunda aholi punktida yo'l ko'cha chiroqlari bilan yoritilgan. Qaysi faralarni yoqib harakatlanasiz?",
  ["Yaqinni yorituvchi faralarni", "Uzoqni yorituvchi faralarni", "Gabarit chiroqlarining o'zini", "Tumanga qarshi orqa chiroqlarni"],
  "Yo'l yoritilgan bo'lsa, uzoqni yorituvchi faralar o'rniga yaqinni yorituvchi faralar yoqilishi kerak (YHQ 135-band).");

// 25. Tunda yoritilmagan yo'lda to'xtab turish (136)
A(SCN.straight() + S4H.night() +
  S4H.att({ path: "M210,186 L210.5,186" }, `<circle cx="13" cy="-5" r="2.6" fill="#fff8e1" opacity=".8"/><circle cx="13" cy="5" r="2.6" fill="#fff8e1" opacity=".8"/><circle cx="-14" cy="-5" r="3" fill="#ff5252" opacity=".85"/><circle cx="-14" cy="5" r="3" fill="#ff5252" opacity=".85"/>`) +
  SCN.car({ path: "M210,186 L210.5,186", color: ME, label: "Siz" }) +
  S4H.att({ path: "M320,130 L-20,130", loop: true, dur: 6 }, S4H.beam(60, 12, 0.4)) +
  SCN.car({ path: "M320,130 L-20,130", color: "#90a4ae", loop: true, dur: 6 }),
  "Tunda yo'lning yoritilmagan qismida avtomobilingizni yo'l chetida to'xtatib qo'ydingiz. Qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Gabarit chiroqlari", "Uzoqni yorituvchi faralar", "Salon chirog'i", "O'ng burilish ko'rsatkichi"],
  "Sutkaning qorong'i vaqtida yo'lning yoritilmagan qismida to'xtagan yoki to'xtab turgan transportda gabarit chiroqlari yoqilgan bo'lishi kerak (YHQ 136-band).");

// 26. Tumanda tumanga qarshi faralar (137)
A(SCN.straight() +
  SCN.car({ path: "M-20,170 L320,170", color: ME, label: "Siz", loop: true, dur: 7 }) +
  SCN.car({ path: "M320,130 L-20,130", color: "#90a4ae", loop: true, dur: 8 }) +
  S4H.fog +
  S4H.att({ path: "M-20,170 L320,170", loop: true, dur: 7 }, `<polygon points="13,-6 60,-16 60,16 13,6" fill="#fffde7" opacity=".55"/><circle cx="14" cy="-5" r="2.4" fill="#ffee58"/><circle cx="14" cy="5" r="2.4" fill="#ffee58"/>`),
  "Kuchli tuman — yetarlicha ko'rinmaydigan sharoit. Tumanga qarshi faralardan qanday foydalanish mumkin?",
  ["Alohida yoki yaqinni yoxud uzoqni yorituvchi faralar bilan birga", "Faqat uzoqni yorituvchi faralar bilan birga", "Ular faqat aholi punktidan tashqarida yoqiladi", "Tumanda ulardan foydalanish taqiqlanadi"],
  "Yetarlicha ko'rinmaydigan sharoitda tumanga qarshi faralardan alohida, shuningdek uzoqni yoki yaqinni yorituvchi faralar bilan birga foydalanish mumkin (YHQ 137-band).");

// 27. Kunduzi shatakka olishda yaqinni yorituvchi faralar (138)
A(SCN.straight() + S4H.rope +
  S4H.att(S4H.towLead, S4H.beam(45, 10, 0.3)) +
  SCN.car({ ...S4H.towTail, color: "#1e88e5", label: "B", blink: "H" }) +
  SCN.car({ ...S4H.towLead, color: ME, label: "Siz" }),
  "Kunduzi buzilgan B avtomobilini egiluvchan ulagich bilan shatakka olib ketyapsiz. Sizning avtomobilingizda qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Yaqinni yorituvchi faralar", "Uzoqni yorituvchi faralar", "Kunduzi chiroqlar talab qilinmaydi", "Tumanga qarshi orqa chiroqlar"],
  "Sutkaning yorug' vaqtida mexanik transport vositasini shatakka olishda shatakka olib ketayotgan transportda yaqinni yorituvchi faralar yoqilishi kerak (YHQ 138-band).");

// 28. Egiluvchan ulagich — masofa (144)
A(SCN.straight() + S4H.rope +
  S4H.att(S4H.towLead, `<text x="-20" y="-11" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">? m</text>`) +
  SCN.car({ ...S4H.towTail, color: "#1e88e5", label: "B", blink: "H" }) +
  SCN.car({ ...S4H.towLead, color: ME }),
  "Egiluvchan ulagich (tros) bilan shatakka olishda shatakka olgan va shatakka olingan avtomobillar orasidagi masofa qancha bo'lishi kerak?",
  ["4-6 m", "2-3 m", "6-10 m", "4 m dan ko'p emas"],
  "Egiluvchan ulagich bilan shatakka olishda transport vositalari orasidagi masofa 4-6 m oralig'ida bo'lishi kerak (YHQ 144-band).");

// 29. Qattiq ulagich — masofa (144)
A(SCN.straight() + S4H.bar +
  S4H.att(S4H.towLead, `<text x="-20" y="-11" font-size="10" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">? m</text>`) +
  SCN.car({ ...S4H.towTail, color: "#1e88e5", label: "B", blink: "H" }) +
  SCN.car({ ...S4H.towLead, color: ME }),
  "Qattiq ulagich (shtanga) bilan shatakka olishda avtomobillar orasidagi masofa qanday bo'lishi kerak?",
  ["4 m dan ko'p emas", "4-6 m oralig'ida", "Kamida 6 m", "Kamida 8 m"],
  "Qattiq ulagich bilan shatakka olishda transport vositalari orasidagi masofa 4 m dan ko'p bo'lmasligi kerak (YHQ 144-band).");

// 30. Yaxmalak yo'lda tros bilan shatakka olish (145)
A(SCN.straight() + S4H.ice + S4H.rope +
  SCN.car({ ...S4H.towTail, color: "#1e88e5", label: "B", blink: "H" }) +
  SCN.car({ ...S4H.towLead, color: ME, label: "Siz" }),
  "Yo'l yaxmalak (sirpanchiq). Buzilgan B ni tros — egiluvchan ulagich bilan shatakka olish mumkinmi?",
  ["Yo'q, yaxmalak yo'lda egiluvchan ulagich bilan shatakka olish taqiqlanadi", "Ha, tezlik 30 km/soatdan oshmasa", "Ha, B da avariya ishorasi yoqilgan bo'lsa", "Ha, tros uzunligi 6 m bo'lsa"],
  "Yo'l yaxmalak yoki sirpanchiq bo'lgan hollarda egiluvchan ulagich bilan shatakka olish taqiqlanadi (YHQ 145-band).");

// 31. Shatakdagi avtomobilda avariya ishorasi ishlamaydi (52)
A(SCN.straight() + S4H.rope +
  S4H.att(S4H.towTail, `<polygon points="-16,-6 -16,6 -25,0" fill="#fff" stroke="#e53935" stroke-width="2"/>`) +
  SCN.car({ ...S4H.towTail, color: "#1e88e5", label: "B" }) +
  SCN.car({ ...S4H.towLead, color: ME, label: "Siz" }),
  "Siz shatakka olib ketayotgan B avtomobilining avariya yorug'lik ishoralari ishlamayapti. Nima qilish kerak?",
  ["B ning orqa qismiga avariya sababli to'xtash belgisini o'rnatish", "B da faqat chap burilish ko'rsatkichini yoqish", "Avariya to'xtash belgisini sizning avtomobilingiz tomiga o'rnatish", "B ning uzoqni yorituvchi faralarini yoqish"],
  "Shatakka olingan mexanik transport vositasida avariya yorug'lik ishoralari bo'lmasa yoki ishlamasa, uning orqa qismiga avariya sababli to'xtash belgisi o'rnatilishi kerak (YHQ 52-band).");

// 32. Avtomagistralda orqaga harakatlanish (121)
A(SCN.oneway3() + S4H.motorway(250, 214) + `<polygon points="40,210 90,210 70,300 20,300" fill="url(#asph)"/>` +
  SCN.car({ path: "M-30,150 L330,150", color: "#1e88e5", loop: true, dur: 4 }) +
  SCN.car({ path: "M200,190 L120,190", color: ME, label: "Siz", reverse: true, dur: 5, hold: 0.7 }),
  "Avtomagistralda kerakli chiqish joyidan o'tib ketdingiz. O'ng chetki qatorda orqaga yurib qaytish mumkinmi?",
  ["Yo'q, avtomagistralda orqaga harakatlanish taqiqlanadi", "Ha, avariya ishorasi yoqilgan bo'lsa", "Ha, orqada transport bo'lmasa", "Ha, 100 m gacha masofada"],
  "Avtomagistrallarda orqaga harakatlanish taqiqlanadi (YHQ 121-band).");

// 33. Avtomagistralda faqat maxsus maydonchada to'xtash (121)
A(SCN.oneway3() + S4H.motorway(20, 214) + `<polygon points="120,210 170,210 200,218 200,258 165,258" fill="url(#asph)"/><rect x="198" y="218" width="110" height="40" fill="url(#asph)"/>` + SCN.sign("parking", 210, 262) +
  SCN.car({ path: "M-30,150 L330,150", color: "#1e88e5", loop: true, dur: 4 }) +
  SCN.car({ path: "M0,190 L120,190 Q160,190 175,236 L245,238", color: ME, label: "Siz", blink: "R", dur: 5, hold: 0.7 }),
  "Avtomagistralda dam olish uchun to'xtamoqchisiz. Qayerda to'xtash mumkin?",
  ["5.15 yoki 6.11 belgilari bilan belgilangan maxsus to'xtab turish maydonchalarida", "Yo'l yoqasida, avariya ishorasini yoqib", "O'ng chetki qatorda, qisqa vaqtga", "Ajratuvchi bo'lakning uzilish joyida"],
  "Avtomagistrallarda 5.15 yoki 6.11 belgilari bilan belgilangan maxsus to'xtab turish maydonchalaridan boshqa joylarda to'xtash taqiqlanadi (YHQ 121-band).");

// 34. Avtomagistralda ajratuvchi bo'lak uzilishida qayrilish (121)
A(SCN.straight() + `<rect x="-5" y="144" width="145" height="12" fill="url(#grass)"/><rect x="185" y="144" width="120" height="12" fill="url(#grass)"/>` + S4H.motorway(20, 204) +
  SCN.car({ path: "M0,170 L157,170 A20,20 0 0 0 157,130 L-20,130", color: ME, label: "Siz", blink: "L", loop: true, dur: 6 }),
  "Avtomagistralda ajratuvchi bo'lakdagi texnologik uzilish joyida qayrilib olmoqdasiz. Bu mumkinmi?",
  ["Yo'q, avtomagistralda bunday joylarga kirish va ularda qayrilib olish taqiqlanadi", "Ha, qarama-qarshi transport bo'lmasa", "Ha, chap burilish ko'rsatkichi yoqilgan bo'lsa", "Ha, tezlikni 40 km/soatgacha kamaytirsangiz"],
  "Avtomagistrallarda ajratuvchi bo'lakning texnologik uzilish joylariga kirish va ularda qayrilib olish taqiqlanadi (YHQ 121-band).");

// 35. Avtomagistralda majburiy to'xtash (122)
A(SCN.oneway3() + `<rect x="-5" y="211" width="310" height="22" fill="url(#asph)"/>` + SCN.solid(0, 211, 300, 211, 2) + S4H.motorway(250, 240) +
  SCN.car({ path: "M-30,150 L330,150", color: "#1e88e5", loop: true, dur: 4 }) +
  SCN.car({ path: "M0,190 L120,190 Q150,190 165,222 L205,222", color: ME, label: "Siz", blink: "H", dur: 5, hold: 0.7 }),
  "Avtomagistralda avtomobilingiz nosozlik sababli to'xtashga majbur bo'ldi. Uni qayerga olib chiqishga harakat qilasiz?",
  ["Qatnov qismining chetini bildiruvchi chiziqdan o'ngdagi tasmaga", "O'ng chetki qatorda to'xtab qolaman", "Chap chetki qatorga, ajratuvchi bo'lak yoniga", "Orqaga yurib, oxirgi chiqish joyiga"],
  "Majburiy to'xtaganda haydovchi transport vositasini belgilashi va qatnov qismining chetini bildiruvchi chiziqdan o'ngroqdagi tasmaga olib chiqish choralarini ko'rishi kerak (YHQ 122-band).");
