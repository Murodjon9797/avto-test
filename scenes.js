// =====================================================================
//  ANIMATSION (GIF ko'rinishidagi) SAVOLLAR — realistik grafika
//  Har bir vaziyat SVG + SMIL animatsiyasi bilan chiziladi: teksturali asfalt,
//  trotuar, maysa, daraxtlar, uylar; soyali, farali, oynali avtomobillar.
//  Harakat tamoyillari (motion-foundations): silliq easing bilan sekinlashish,
//  to'xtaganda tormoz chiroqlari yonadi, faqat transform animatsiyasi,
//  "kamroq harakat" sozlamasi hurmat qilinadi (index.html da).
//
//  Xarita: yuqori — shimol. O'ng tomonlama harakat.
//  Chorraha: yo'llar 120..180; shimolga ketish qatori x=165,
//  janubga x=135, sharqqa y=165, g'arbga y=135.
// =====================================================================

const SCN = (() => {
  // ---- Harakat tokenlari (motion-foundations: smooth / sharp easing)
  const EASE = { smooth: "0.22 1 0.36 1", sharp: "0.4 0 0.2 1", linear: "0 0 1 1" };
  const OFF = "#262a2f", SIDEWALK = "#cfcac0", CURB = "#a8a399";

  const shade = (hex, amt) => {
    let c = hex.replace("#", "");
    if (c.length === 3) c = [...c].map((x) => x + x).join("");
    const n = parseInt(c, 16), cl = (v) => Math.max(0, Math.min(255, v));
    return "#" + [(n >> 16) + amt, ((n >> 8) & 255) + amt, (n & 255) + amt].map((v) => cl(v).toString(16).padStart(2, "0")).join("");
  };

  const DEFS = `<defs>
    <pattern id="asph" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#4a4e54"/><circle cx="2" cy="3" r=".7" fill="#565a60"/><circle cx="7" cy="7" r=".6" fill="#40444a"/><circle cx="8" cy="2" r=".5" fill="#5b5f66"/><circle cx="4" cy="8" r=".4" fill="#52565c"/></pattern>
    <pattern id="grass" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#7cb342"/><path d="M2 5l1-2.4 1 2.4M8 11l1-2.4 1 2.4" stroke="#8fc653" stroke-width=".8" fill="none"/><circle cx="9" cy="3" r=".7" fill="#689f38"/><circle cx="4" cy="9" r=".5" fill="#6aa23a"/></pattern>
    <pattern id="tiles" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="${SIDEWALK}"/><path d="M0 .3H8M.3 0V8" stroke="#bdb8ad" stroke-width=".6"/></pattern>
    <radialGradient id="tree" cx=".35" cy=".35" r=".75"><stop offset="0" stop-color="#a5d66b"/><stop offset=".55" stop-color="#5a9431"/><stop offset="1" stop-color="#2f5e1c"/></radialGradient>
    <linearGradient id="roofA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfd8dc"/><stop offset="1" stop-color="#78909c"/></linearGradient>
    <linearGradient id="roofB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e0a46a"/><stop offset="1" stop-color="#a35d2c"/></linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#14202c"/><stop offset=".6" stop-color="#34506a"/><stop offset="1" stop-color="#1a2836"/></linearGradient>
    <linearGradient id="tlHouse" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2d3238"/><stop offset=".5" stop-color="#15181c"/><stop offset="1" stop-color="#2d3238"/></linearGradient>
  </defs>`;
  const wrap = (inner) => `<svg viewBox="0 0 300 300" class="scene" xmlns="http://www.w3.org/2000/svg">${DEFS}${inner}</svg>`;

  // ---- Yo'l chiziqlari
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#f2f2f2" stroke-opacity=".9" stroke-width="2" stroke-dasharray="10 8"/>`;
  const solid = (x1, y1, x2, y2, w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#f2f2f2" stroke-opacity=".92" stroke-width="${w}"/>`;

  // ---- Atrof-muhit
  const tree = (x, y, r = 13) => `<circle cx="${x + 3}" cy="${y + 4}" r="${r}" fill="#000" opacity=".22"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#tree)"/><circle cx="${x - r * 0.3}" cy="${y - r * 0.35}" r="${r * 0.35}" fill="#c5e1a5" opacity=".35"/>`;
  const house = (x, y, w, h, roof = "roofA") => `<rect x="${x + 4}" y="${y + 5}" width="${w}" height="${h}" rx="2" fill="#000" opacity=".22"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="url(#${roof})" stroke="#00000033"/><line x1="${x}" y1="${y + h / 2}" x2="${x + w}" y2="${y + h / 2}" stroke="#00000030" stroke-width="1.2"/><rect x="${x + w * 0.7}" y="${y + 4}" width="6" height="6" fill="#455a64" opacity=".6"/>`;
  const bush = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#558b2f"/><circle cx="${x + 5}" cy="${y + 2}" r="4" fill="#689f38"/>`;

  // --- Fon: chorraha
  function cross(o = {}) {
    let s = `<rect width="300" height="300" fill="url(#asph)"/>`;
    for (const [x, y] of [[-20, -20], [180, -20], [-20, 180], [180, 180]]) s += `<rect x="${x}" y="${y}" width="140" height="140" rx="18" fill="url(#tiles)" stroke="${CURB}" stroke-width="1.5"/>`;
    s += `<rect x="-20" y="-20" width="133" height="133" rx="12" fill="url(#grass)"/><rect x="187" y="-20" width="133" height="133" rx="12" fill="url(#grass)"/>`;
    s += `<rect x="-20" y="187" width="133" height="133" rx="12" fill="url(#grass)"/><rect x="187" y="187" width="133" height="133" rx="12" fill="url(#grass)"/>`;
    s += house(10, 12, 74, 56, "roofB") + tree(96, 92, 12) + bush(20, 96);
    s += tree(256, 30, 15) + tree(286, 88, 11) + bush(232, 66);
    s += tree(34, 246, 16) + house(54, 206, 44, 36) + bush(96, 280);
    s += house(236, 236, 56, 52) + tree(206, 278, 11);
    s += dash(0, 150, 116, 150) + dash(184, 150, 300, 150) + dash(150, 0, 150, 116) + dash(150, 184, 150, 300);
    if (o.stop) s += solid(150, 186, 180, 186, 3);
    if (o.rails) s += `<line x1="0" y1="160" x2="300" y2="160" stroke="#9ea3a8" stroke-width="1.6"/><line x1="0" y1="170" x2="300" y2="170" stroke="#9ea3a8" stroke-width="1.6"/>`;
    if (o.ring) s += `<circle cx="150" cy="150" r="74" fill="url(#asph)"/><circle cx="150" cy="150" r="38" fill="url(#tiles)" stroke="${CURB}" stroke-width="1.5"/><circle cx="150" cy="150" r="32" fill="url(#grass)"/>${tree(150, 150, 13)}<circle cx="150" cy="150" r="55" fill="none" stroke="#f2f2f2" stroke-opacity=".5" stroke-width="1.5" stroke-dasharray="8 8"/>`;
    return s;
  }
  // --- Fon: to'g'ri yo'l (y 100..200), ikki tomonlama
  function straight(o = {}) {
    let s = `<rect width="300" height="300" fill="url(#grass)"/>`;
    s += `<rect x="-5" y="90" width="310" height="120" fill="url(#tiles)"/><rect x="-5" y="100" width="310" height="100" fill="url(#asph)"/>`;
    s += `<line x1="0" y1="100" x2="300" y2="100" stroke="${CURB}" stroke-width="2"/><line x1="0" y1="200" x2="300" y2="200" stroke="${CURB}" stroke-width="2"/>`;
    s += tree(30, 60, 15) + house(70, 22, 64, 50, "roofB") + tree(170, 64, 13) + tree(212, 40, 16) + house(240, 18, 52, 46);
    s += tree(26, 250, 14) + house(60, 232, 56, 50) + tree(150, 262, 15) + bush(178, 236) + house(222, 240, 60, 46, "roofB");
    s += o.solidCenter ? solid(0, 150, 300, 150) : dash(0, 150, 300, 150);
    return s;
  }
  // --- Fon: bir tomonlama uch qatorli yo'l (qatorlar y=110,150,190)
  function oneway3() {
    let s = `<rect width="300" height="300" fill="url(#grass)"/>`;
    s += `<rect x="-5" y="80" width="310" height="140" fill="url(#tiles)"/><rect x="-5" y="90" width="310" height="120" fill="url(#asph)"/>`;
    s += `<line x1="0" y1="90" x2="300" y2="90" stroke="${CURB}" stroke-width="2"/><line x1="0" y1="210" x2="300" y2="210" stroke="${CURB}" stroke-width="2"/>`;
    s += tree(40, 44, 15) + house(90, 14, 70, 52) + tree(200, 44, 14) + tree(262, 38, 17);
    s += tree(30, 258, 15) + house(80, 236, 64, 50, "roofB") + tree(200, 260, 14) + bush(250, 244);
    s += dash(0, 130, 300, 130) + dash(0, 170, 300, 170);
    for (const y of [110, 150, 190]) s += `<path d="M24 ${y} h14 m-5 -4 l5 4 l-5 4" stroke="#f2f2f2" stroke-opacity=".8" stroke-width="2" fill="none"/>`;
    return s;
  }
  function zebra(x, y, w, h) { // vertikal zebra (yo'lni kesib o'tadi)
    let s = "";
    for (let yy = y + 2; yy < y + h - 2; yy += 10) s += `<rect x="${x}" y="${yy}" width="${w}" height="6" rx="1" fill="#f4f4f4" opacity=".93"/>`;
    return s;
  }
  function sign(key, x, y, size = 22) {
    const inner = SIGNS[key].replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
    return `<rect x="${x + size / 2 - 1}" y="${y + size - 2}" width="2" height="9" fill="#6b6f75"/><ellipse cx="${x + size / 2 + 4}" cy="${y + size + 7}" rx="6" ry="2" fill="#000" opacity=".2"/><svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 100 100">${inner}</svg>`;
  }

  // ---- Harakat: to'xtaydigan transport silliq sekinlashadi (smooth easing)
  function motion(o, rotate) {
    const r = rotate ? (o.reverse ? ` rotate="auto-reverse"` : ` rotate="auto"`) : "";
    const dur = o.dur || 4;
    if (o.loop) return `<animateMotion dur="${dur}s" repeatCount="indefinite"${r} path="${o.path}"/>`;
    const kp = o.keyPoints || "0;1;1", kt = o.keyTimes || `0;${o.hold || 0.55};1`;
    const n = kt.split(";").length - 1;
    const splines = o.keyPoints ? Array(n).fill(EASE.sharp).join(";") : [EASE.smooth, EASE.linear].join(";");
    return `<animateMotion dur="${dur}s" repeatCount="indefinite"${r} path="${o.path}" keyPoints="${kp}" keyTimes="${kt}" calcMode="spline" keySplines="${splines}"/>`;
  }
  let uid = 0;
  // --- Transport vositasi (yuqoridan ko'rinish, oldi +x tomonda)
  function body(kind, color, L, H) {
    const g = "cb" + ++uid;
    let s = `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(color, -50)}"/><stop offset=".22" stop-color="${shade(color, 10)}"/><stop offset=".5" stop-color="${shade(color, 38)}"/><stop offset=".78" stop-color="${shade(color, 10)}"/><stop offset="1" stop-color="${shade(color, -50)}"/></linearGradient></defs>`;
    s += `<rect x="${-L / 2 + 2}" y="${-H / 2 + 3}" width="${L}" height="${H}" rx="${H * 0.42}" fill="#000" opacity=".3"/>`;
    const wx = L / 2 - (kind === "car" ? 6.5 : 7), wy = H / 2 - 0.8;
    for (const x of [wx, -wx]) for (const y of [-wy, wy]) s += `<rect x="${x - 3.2}" y="${y - 1.7}" width="6.4" height="3.4" rx="1.2" fill="#0d0d0d"/>`;
    s += `<rect x="${-L / 2}" y="${-H / 2}" width="${L}" height="${H}" rx="${kind === "car" ? H * 0.42 : 3}" fill="url(#${g})" stroke="${shade(color, -90)}" stroke-width=".6"/>`;
    if (kind === "car") {
      s += `<path d="M${L * 0.08},${-H / 2 + 1.8} L${L * 0.26},${-H / 2 + 3} Q${L * 0.31},0 ${L * 0.26},${H / 2 - 3} L${L * 0.08},${H / 2 - 1.8} Z" fill="url(#glass)"/>`;
      s += `<rect x="${-L * 0.21}" y="${-H / 2 + 2.1}" width="${L * 0.29}" height="${H - 4.2}" rx="2.6" fill="${shade(color, 22)}" stroke="${shade(color, -70)}" stroke-width=".4"/>`;
      s += `<path d="M${-L * 0.21},${-H / 2 + 2.1} L${-L * 0.34},${-H / 2 + 3} Q${-L * 0.38},0 ${-L * 0.34},${H / 2 - 3} L${-L * 0.21},${H / 2 - 2.1} Z" fill="url(#glass)"/>`;
      s += `<rect x="${L * 0.09}" y="${-H / 2 - 1.7}" width="2.4" height="2" rx=".7" fill="${shade(color, -45)}"/><rect x="${L * 0.09}" y="${H / 2 - 0.3}" width="2.4" height="2" rx=".7" fill="${shade(color, -45)}"/>`;
      s += `<path d="M${L * 0.3},${-H / 2 + 3} Q${L * 0.47},0 ${L * 0.3},${H / 2 - 3}" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width=".8"/>`;
    } else {
      s += `<rect x="${-L / 2 + 3}" y="${-H / 2 + 0.9}" width="${L - 10}" height="2.4" fill="url(#glass)"/><rect x="${-L / 2 + 3}" y="${H / 2 - 3.3}" width="${L - 10}" height="2.4" fill="url(#glass)"/>`;
      s += `<rect x="${L / 2 - 6}" y="${-H / 2 + 2}" width="3.4" height="${H - 4}" rx="1" fill="url(#glass)"/>`;
      s += `<rect x="${-L * 0.28}" y="-2.6" width="6" height="5.2" rx="1.2" fill="${shade(color, -28)}"/><rect x="${L * 0.04}" y="-2.6" width="6" height="5.2" rx="1.2" fill="${shade(color, -28)}"/>`;
      if (kind === "tram") s += `<path d="M-8,-5 L0,0 L-8,5" stroke="#263238" stroke-width="1.2" fill="none"/>`;
    }
    s += `<ellipse cx="${L / 2 - 1.1}" cy="${-H / 2 + 2.7}" rx="1.3" ry="1.9" fill="#fff7d1"/><ellipse cx="${L / 2 - 1.1}" cy="${H / 2 - 2.7}" rx="1.3" ry="1.9" fill="#fff7d1"/>`;
    s += `<rect x="${-L / 2 + 0.2}" y="${-H / 2 + 1.6}" width="1.7" height="3.2" rx=".6" fill="#7f1010"/><rect x="${-L / 2 + 0.2}" y="${H / 2 - 4.8}" width="1.7" height="3.2" rx=".6" fill="#7f1010"/>`;
    return s;
  }
  function car(o) {
    const kind = o.kind || "car";
    const L = kind === "bus" ? 44 : kind === "tram" ? 52 : 28, H = kind === "car" ? 14 : 16;
    let b = body(kind, o.color || "#1e88e5", L, H);
    const dur = o.dur || 4;
    // Tormoz chiroqlari: transport to'xtash nuqtasiga yaqinlashganda yonadi (holatni bildiradi)
    if (!o.loop && !o.keyPoints && !o.reverse) {
      const h = o.hold || 0.55;
      b += `<g opacity="0"><circle cx="${-L / 2}" cy="${-H / 2 + 3.2}" r="3.6" fill="#ff2d20" opacity=".75"/><circle cx="${-L / 2}" cy="${H / 2 - 3.2}" r="3.6" fill="#ff2d20" opacity=".75"/><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;${(h * 0.55).toFixed(3)};${h};1" dur="${dur}s" repeatCount="indefinite"/></g>`;
    }
    const lamp = (x, y) => `<g><circle cx="${x}" cy="${y}" r="4.2" fill="#ffb300" opacity=".45"/><circle cx="${x}" cy="${y}" r="2.2" fill="#ffd54f"/><animate attributeName="opacity" values="1;0" dur="0.8s" calcMode="discrete" repeatCount="indefinite"/></g>`;
    const fl = L / 2 - 1.5, rl = -L / 2 + 1.5, top = -H / 2 + 1.2, bot = H / 2 - 1.2;
    if (o.blink === "L" || o.blink === "H") b += lamp(fl, top) + lamp(rl, top);
    if (o.blink === "R" || o.blink === "H") b += lamp(fl, bot) + lamp(rl, bot);
    if (o.siren) b += `<rect x="-6" y="-4.5" width="12" height="9" rx="2" fill="#fafafa" stroke="#999" stroke-width=".4"/><g><circle cx="-2.5" cy="0" r="6" fill="#2979ff" opacity=".5"/><rect x="-5" y="-3.5" width="5" height="7" rx="1.4" fill="#2979ff"/><animate attributeName="opacity" values="1;0.15" dur="0.5s" calcMode="discrete" repeatCount="indefinite"/></g><g><circle cx="2.5" cy="0" r="6" fill="#ff1744" opacity=".5"/><rect x="0" y="-3.5" width="5" height="7" rx="1.4" fill="#ff1744"/><animate attributeName="opacity" values="0.15;1" dur="0.5s" calcMode="discrete" repeatCount="indefinite"/></g>`;
    let s = `<g>${b}${motion(o, true)}</g>`;
    if (o.label) {
      const me = o.label === "Siz";
      const w = Math.max(16, o.label.length * 6.2 + 8);
      s += `<g>${motion(o, false)}<g transform="translate(0,-19)"><rect x="${-w / 2 + 0.8}" y="-6" width="${w}" height="13" rx="6.5" fill="#000" opacity=".25"/><rect x="${-w / 2}" y="-7" width="${w}" height="13" rx="6.5" fill="${me ? "#e53935" : "#ffffff"}" stroke="#00000040" stroke-width=".6"/><text y="3" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Arial" fill="${me ? "#fff" : "#1d1d1d"}">${o.label}</text></g></g>`;
    }
    return s;
  }
  // --- Piyoda (yuqoridan: yelka + bosh), yurganda chayqaladi
  function person(o) {
    const c = o.color || "#ff7043", k = o.small ? 0.72 : 1;
    const cane = o.cane ? `<line x1="4" y1="2" x2="15" y2="4" stroke="#fff" stroke-width="2"/><line x1="12" y1="3.5" x2="15" y2="4" stroke="#e53935" stroke-width="2"/>` : "";
    return `<g>${motion(o, true)}<g transform="scale(${k})"><ellipse cx="1.5" cy="2" rx="4" ry="6.5" fill="#000" opacity=".22"/>${cane}<ellipse rx="3.8" ry="6.2" fill="${c}" stroke="#00000055" stroke-width=".6"/><circle r="3.1" fill="#3e2723"/><animateTransform attributeName="transform" type="rotate" values="-8;8;-8" dur="0.7s" repeatCount="indefinite" additive="sum"/></g></g>`;
  }
  // --- T-chorraha: g'arb-sharq yo'li (y 120..180) + janubiy tarmoq (x 120..180). Shimolda yo'l yo'q.
  function tjunction(o = {}) {
    let s = `<rect width="300" height="300" fill="url(#asph)"/>`;
    s += `<rect x="-20" y="-20" width="340" height="140" fill="url(#tiles)" stroke="${CURB}" stroke-width="1.5"/><rect x="-20" y="-20" width="340" height="133" fill="url(#grass)"/>`;
    for (const [x, y] of [[-20, 180], [180, 180]]) s += `<rect x="${x}" y="${y}" width="140" height="140" rx="18" fill="url(#tiles)" stroke="${CURB}" stroke-width="1.5"/>`;
    s += `<rect x="-20" y="187" width="133" height="133" rx="12" fill="url(#grass)"/><rect x="187" y="187" width="133" height="133" rx="12" fill="url(#grass)"/>`;
    s += house(20, 14, 80, 60, "roofB") + tree(130, 60, 16) + house(190, 18, 70, 56) + tree(282, 92, 11) + bush(110, 98);
    s += tree(34, 246, 16) + house(54, 206, 44, 36) + house(236, 236, 56, 52) + tree(206, 278, 11);
    s += dash(0, 150, 300, 150) + dash(150, 184, 150, 300);
    if (o.stop) s += solid(150, 186, 180, 186, 3);
    return s;
  }
  // --- Gorizontal zebra: vertikal yo'lni kesib o'tuvchi piyodalar o'tish joyi (piyodalar x bo'ylab yuradi)
  function zebraH(x, y, w, h) {
    let s = "";
    for (let xx = x + 2; xx < x + w - 2; xx += 10) s += `<rect x="${xx}" y="${y}" width="6" height="${h}" rx="1" fill="#f4f4f4" opacity=".93"/>`;
    return s;
  }
  // --- Svetofor. state: green | red | yellow | redyellow | off | yblink | g2y (yashil→sariq) | r2g (qizil→qizil+sariq→yashil)
  //     | redarrow (qizil + o'ngga yashil strelka) | redleft (qizil + chapga yashil strelka). rot — burilish burchagi (gradus)
  function light(x, y, state, rot = 0) {
    const inner = lightInner(x, y, state);
    return rot ? `<g transform="rotate(${rot} ${x + 7} ${y + 18})">${inner}</g>` : inner;
  }
  function lightInner(x, y, state) {
    const R = "#ff3b30", Y = "#ffcc00", G = "#34c759";
    const disc = (values, kt, dur = 4) => `<animate attributeName="fill" values="${values}" keyTimes="${kt}" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/>`;
    const glowAnim = (values, kt, dur = 4) => `<animate attributeName="opacity" values="${values}" keyTimes="${kt}" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/>`;
    const lens = (cy, col, anim = "", gAnim = "", lit = true) =>
      `<circle cx="${x + 7}" cy="${y + cy}" r="8" fill="${col}" opacity="${lit ? 0.35 : 0}">${gAnim}</circle><circle cx="${x + 7}" cy="${y + cy}" r="4.6" fill="${col}">${anim}</circle><circle cx="${x + 5.6}" cy="${y + cy - 1.6}" r="1.3" fill="#fff" opacity=".45"/>`;
    let s = `<ellipse cx="${x + 12}" cy="${y + 52}" rx="9" ry="2.5" fill="#000" opacity=".22"/><rect x="${x + 5.5}" y="${y + 36}" width="3" height="16" fill="#555b62"/>`;
    s += `<rect x="${x}" y="${y}" width="14" height="36" rx="4" fill="url(#tlHouse)" stroke="#000" stroke-width=".6"/>`;
    if (state === "green") s += lens(7, OFF, "", "", false) + lens(18, OFF, "", "", false) + lens(29, G);
    if (state === "red") s += lens(7, R) + lens(18, OFF, "", "", false) + lens(29, OFF, "", "", false);
    if (state === "yblink") s += lens(7, OFF, "", "", false) + lens(18, Y, disc(`${Y};${OFF}`, "0;0.5", 1), glowAnim("0.35;0", "0;0.5", 1)) + lens(29, OFF, "", "", false);
    if (state === "g2y") s += lens(7, OFF, "", "", false) + lens(18, Y, disc(`${OFF};${Y}`, "0;0.3"), glowAnim("0;0.35", "0;0.3")) + lens(29, G, disc(`${G};${OFF}`, "0;0.3"), glowAnim("0.35;0", "0;0.3"));
    if (state === "yellow") s += lens(7, OFF, "", "", false) + lens(18, Y) + lens(29, OFF, "", "", false);
    if (state === "redyellow") s += lens(7, R) + lens(18, Y) + lens(29, OFF, "", "", false);
    if (state === "off") s += lens(7, OFF, "", "", false) + lens(18, OFF, "", "", false) + lens(29, OFF, "", "", false);
    if (state === "r2g") s += lens(7, R, disc(`${R};${R};${OFF}`, "0;0.35;0.55"), glowAnim("0.35;0.35;0", "0;0.35;0.55")) + lens(18, Y, disc(`${OFF};${Y};${OFF}`, "0;0.35;0.55"), glowAnim("0;0.35;0", "0;0.35;0.55")) + lens(29, G, disc(`${OFF};${G}`, "0;0.55"), glowAnim("0;0.35", "0;0.55"));
    if (state === "redarrow" || state === "redleft") {
      s += lens(7, R) + lens(18, OFF, "", "", false) + lens(29, OFF, "", "", false);
      const left = state === "redleft", bx = left ? x - 15 : x + 14;
      s += `<rect x="${bx}" y="${y + 22}" width="15" height="14" rx="4" fill="url(#tlHouse)" stroke="#000" stroke-width=".6"/><circle cx="${bx + 7.5}" cy="${y + 29}" r="7" fill="${G}" opacity=".3"/><text x="${bx + 7.5}" y="${y + 33}" font-size="12" font-weight="900" fill="${G}" text-anchor="middle" font-family="Arial">${left ? "←" : "→"}</text>`;
    }
    return s;
  }
  // --- Tartibga soluvchi (yuqoridan). pose: "side" — qo'llar yon tomonga; "up" — qo'l yuqoriga ko'tarilgan;
  //     "forward" — o'ng qo'l oldinga uzatilgan. rot=0 da ko'kragi JANUBGA qaragan (sariq uchburchak ko'krak tomoni).
  //     Burchak soat mili bo'yicha: rot=90 — ko'kragi g'arbga, rot=180 — shimolga, rot=270 — sharqqa.
  function controller(x, y, pose = "side", rot = 0) {
    const arm = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1e3a5f" stroke-width="4.5" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="2.6" fill="#fff"/>`;
    const baton = (bx, by, vertical) => vertical
      ? `<rect x="${bx - 1.6}" y="${by}" width="3.2" height="13" rx="1" fill="#fff" stroke="#222" stroke-width=".5"/><rect x="${bx - 1.6}" y="${by + 3}" width="3.2" height="2.5" fill="#111"/><rect x="${bx - 1.6}" y="${by + 8}" width="3.2" height="2.5" fill="#111"/>`
      : `<rect x="${bx - 13}" y="${by - 1.6}" width="13" height="3.2" rx="1" fill="#fff" stroke="#222" stroke-width=".5"/><rect x="${bx - 10}" y="${by - 1.6}" width="2.5" height="3.2" fill="#111"/><rect x="${bx - 5}" y="${by - 1.6}" width="2.5" height="3.2" fill="#111"/>`;
    let arms = "";
    if (pose === "side") arms = arm(-6, 0, -23, 0) + arm(6, 0, 23, 0) + baton(-24, 0, false);
    if (pose === "forward") arms = arm(-6, 0, -6, 22) + arm(6, 0, 9, 7) + baton(-6, 23, true);
    if (pose === "up") arms = arm(6, 0, 9, 7) + `<circle cx="-4" cy="-2" r="3.4" fill="#fff" stroke="#1e3a5f" stroke-width="1.2"/><g transform="translate(-14,-20)"><rect x="-9" y="-7" width="18" height="14" rx="4" fill="#fff" stroke="#00000040"/><text y="4" font-size="10" text-anchor="middle">✋</text></g>`;
    return `<g transform="translate(${x},${y}) rotate(${rot})"><ellipse cx="3" cy="4" rx="24" ry="8" fill="#000" opacity=".2"/>${arms}<ellipse rx="10" ry="6.8" fill="#264b74"/><ellipse rx="10" ry="6.8" fill="none" stroke="#c6ff00" stroke-width="1.4" stroke-dasharray="3 3"/><circle r="5" fill="#1b2f4a"/><circle r="3.4" fill="#f5f5f5"/><polygon points="-3,6.5 3,6.5 0,11" fill="#fdd835"/></g>`;
  }
  return { wrap, cross, tjunction, straight, oneway3, zebra, zebraH, sign, car, person, light, controller, tree, house, bush, dash, solid };
})();

// Animatsion savol qo'shish: id lar 5001 dan boshlanadi (tartibni o'zgartirmang)
let SCENE_ID = 5000;
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
