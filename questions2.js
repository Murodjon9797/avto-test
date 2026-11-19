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

// Savollar q/*.js fayllarida (mavzular bo'yicha).
