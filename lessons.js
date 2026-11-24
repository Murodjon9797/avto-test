// =====================================================================
//  DARSLIK — 22 ta dars (YHQ, VM 12.04.2022 yildagi 172-son qarori asosida)
//
//  Har bir dars `k` maydoni bilan TOPICS kalitiga bog'langan: dars oxiridagi
//  «Shu mavzudan test» tugmasi shu mavzudagi savollarni ishga tushiradi.
//
//  Bloklar: { h: "sarlavha" } · { p: "matn" } · { ul: [...] } · { ol: [...] }
//           { tip: "maslahat" } · { warn: "ogohlantirish" }
//           { signs: ["SIGNS kaliti", ...] } · { table: [["A","B"], ["1","2"]] }
// =====================================================================

const LESSONS = [
  // ------------------------------------------------------------------
  {
    k: "terms", title: "Asosiy tushunchalar", sub: "YHQ atamalari va ta'riflari", minutes: 5,
    blocks: [
      { h: "Nega atamalarni bilish kerak" },
      { p: "Imtihondagi savollarning katta qismi atamalarga tayanadi. «Yo'l», «harakatlanish qismi», «ustunlik» kabi so'zlarning aniq ma'nosi bilinmasa, savol mantiqini tushunish qiyin. Quyida YHQda berilgan asosiy ta'riflar keltirilgan." },
      { h: "Yo'l va uning qismlari" },
      { ul: [
        "<b>Yo'l</b> — transport vositalari harakatlanishi uchun mo'ljallangan, yer sathidan ko'tarilgan yoki pastda joylashgan muhandislik inshooti.",
        "<b>Harakatlanish qismi</b> — transport vositalari harakatlanadigan yo'l elementi (trotuardan tashqari).",
        "<b>Qator (bo'lak)</b> — harakatlanish qismining bo'ylama chiziqlar bilan ajratilgan elementi.",
        "<b>Trotuar</b> — piyodalar uchun mo'ljallangan, harakatlanish qismidan baland ko'tarilgan yo'l qismi.",
        "<b>Bo'luvchi chiziq</b> — qarama-qarshi yo'nalishlarni ajratib turuvchi element (konstruktiv yoki chizma).",
      ] },
      { h: "Harakat qatnashchilari" },
      { ul: [
        "<b>Haydovchi</b> — transport vositasini boshqarayotgan shaxs. O'qituvchi va imtihon topshiruvchi ham haydovchi hisoblanadi.",
        "<b>Piyoda</b> — yo'lda piyoda bo'lib turgan, yo'l chetida yoki piyodalar o'tish joyida ketayotgan shaxs. Nogironlar aravachasida yurganlar ham piyoda hisoblanadi.",
        "<b>Yo'lovchi</b> — transport vositasida ketayotgan, lekin uni boshqarmayotgan shaxs.",
      ] },
      { h: "Ustunlik" },
      { p: "<b>Ustunlik</b> — harakatlanish tartibida boshqa qatnashchilarga nisbatan birinchi bo'lib harakatlanish huquqi. <b>«Yo'l berish»</b> — boshqa qatnashchi o'z yo'nalishini o'zgartirishga majbur bo'lmaydigan tarzda harakat qilish talabi." },
      { tip: "Ustunlikka ega qatnashchi bu huquqdan voz kechishi mumkin. Lekin testlarda «kim ustun?» savoli nostandart holatlarni ham qamraydi — avval yo'l belgilari, keyin svetofor, oxirida tartibga soluvchi ishorasi ketma-ketligini yodda tuting." },
      { h: "Boshqa muhim ta'riflar" },
      { table: [["Atama", "Ma'nosi"], ["To'sqinlik qiluvchi", "Transport vositasi yoki piyoda, uni to'xtashga majbur qiluvchi"], ["Yetarli ko'rish masofasi", "Yo'lning oldindan ko'rinadigan eng uzoq chegarasi"], ["Tor yo'l", "Bir vaqtda ikki tomondan o'tish imkoni bo'lmagan yo'l"]] },
      { warn: "«Yo'l berish» va «to'xtash» bir xil emas: yo'l berish uchun doim to'xtash shart emas — faqat boshqa qatnashchiga to'sqinlik qilmaslik talab etiladi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "general", title: "Hujjatlar va majburiyatlar", sub: "Haydovchi nima olib yurishi shart", minutes: 5,
    blocks: [
      { h: "Olib yurilishi shart bo'lgan hujjatlar" },
      { ol: [
        "Haydovchilik guvohnomasi (tegishli toifa uchun)",
        "Transport vositasini ro'yxatdan o'tkazish guvohnomasi (texnik pasport)",
        "Mulkdorlik yoki egalik huquqini tasdiqlovchi hujjat (ishonchnoma, yo'l varaqasi, ijara shartnomasi)",
        "Majburiy fuqarolik javobgarligini sug'urtalash polisi (CAMI)",
      ] },
      { tip: "Davlat xizmatlari portali yoki E-IMZO orqali olingan elektron guvohnoma va texnik pasport ham tasdiqlovchi hujjat hisoblanadi — telefon ekranidagi nusxani ko'rsatish mumkin." },
      { h: "Haydovchining asosiy majburiyatlari" },
      { ul: [
        "Transport vositasini ishchi holatda va toza saqlash",
        "Boshqa qatnashchilar uchun xavf tug'dirmaslik",
        "Politsiya xodimiga hujjatlarni va transport vositasini ko'rsatish",
        "Hodisa joyida yordam berish, holatni saqlab qolish",
        "Yo'l politsiyasining qonuniy talablarini bajarish",
      ] },
      { h: "Toifalar" },
      { table: [
        ["Toifa", "Transport vositalari"],
        ["A", "Mototsikllar"],
        ["B", "Yengil avtomobillar — 3,5 t gacha, 8 o'rindiqgacha"],
        ["BE / CE / DE", "Tegishli toifa + tirkama"],
        ["C", "Yuk avtomobillari — 3,5 t dan ortiq"],
        ["D", "Avtobuslar — 8 o'rindiqdan ortiq"],
      ] },
      { h: "Stajirovka davri" },
      { p: "Guvohnoma olingandan keyingi dastlabki <b>2 yil</b> — boshlovchi haydovchi davri. Bu davrda boshqa toifa transportini boshqarish, tirkama bilan harakatlanish kabi ayrim cheklovlar amal qiladi." },
      { warn: "Toifasi mos bo'lmagan transport vositasini boshqarish — guvohnomasiz boshqarish bilan teng. Bu nafaqat jarima, balki imtihonda eng qo'pol xatolardan biri." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "signs", title: "Yo'l belgilari", sub: "7 guruh: shakli va rangi", minutes: 8,
    blocks: [
      { h: "Belgilarning guruhlari" },
      { p: "Yo'l belgilari haydovchini yo'l sharoiti, cheklovlar va xavf haqida ogohlantiradi. Ular <b>7 guruhga</b> bo'linadi: ogohlantiruvchi, imtiyozli, taqiqlovchi, buyuruvchi, axborot-ishora, servis va qo'shimcha axborot belgilari." },
      { h: "1. Ogohlantiruvchi belgilar" },
      { p: "Asosan <b>qizil hoshiyali uchburchak</b>. Oldinda xavf borligini bildiradi: burilish, tik nishab, piyodalar o'tish joyi, bolalar, hayvonlar va boshqalar. Aholi punktidan tashqarida xavfdan <b>150–300 m</b> oldin, aholi punktida <b>50–100 m</b> oldin o'rnatiladi." },
      { ul: [
        "Uchburchakda <b>bolalar</b> — maktab, bog'cha va maydonchalar yaqinida",
        "Uchburchakda <b>piyoda</b> — piyodalar o'tish joyi",
        "Temir yo'l kesishmasi — to'siqli yoki to'siqsiz",
        "Tik nishab va ko'tarilish — foizda ko'rsatiladi",
      ] },
      { h: "2. Imtiyozli belgilar" },
      { p: "Ustuvorlikni belgilaydi: «Yo'l bering» (teskari uchburchak), «Asosiy yo'l» (romb), «Ikkinchi darajali yo'l». Bu guruh chorrahada kim birinchi o'tishini hal qiladi." },
      { h: "3. Taqiqlovchi belgilar" },
      { p: "<b>Qizil hoshiyali doira</b> — harakatni taqiqlaydi yoki cheklaydi: kirish taqiqlangan, quvib o'tish taqiqlangan, tezlik chegarasi, to'xtash taqiqlangan, to'xtab turish taqiqlangan." },
      { h: "4. Buyuruvchi belgilar" },
      { p: "<b>Ko'k fonda oq belgi</b> — faqat ko'rsatilgan yo'nalishda harakatlanishni bildiradi: «To'g'riga», «O'ngga», «Chapga», «Aylanma harakat», «Piyodalar yo'lakchasi»." },
      { h: "5–7. Axborot, servis, qo'shimcha" },
      { ul: [
        "<b>Axborot-ishora</b>: avtomagistral, aholi punktining boshi, bir tomonlama yo'l, to'xtash joyi (P)",
        "<b>Servis</b>: yonilg'i quyish shoxobchasi, shifoxona, telefon, ovqatlanish joyi",
        "<b>Qo'shimcha axborot</b>: oq lavhalar — belgi amal qiladigan masofa, vaqt yoki transport turini ko'rsatadi",
      ] },
      { signs: ["danger", "giveway", "mainroad", "noentry", "nostopping", "speed40", "straight", "oneway", "parking"] },
      { tip: "Belgini eslab qolishning eng oson yo'li — shakli va rangi: uchburchak ogohlantiradi, qizil doira taqiqlaydi, ko'k doira buyuradi, ko'k to'rtburchak axborot beradi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "markings", title: "Yo'l chiziqlari", sub: "Gorizontal va vertikal chizmalar", minutes: 6,
    blocks: [
      { h: "Chizmalar nima uchun kerak" },
      { p: "Yo'l chizmalari harakatlanish qismi yuzasiga bo'yaladigan chiziqlar va belgilar. Ular yo'l belgilarini to'ldiradi, ba'zan esa ularning o'rnini bosadi. <b>Gorizontal</b> (yuzaga bo'yaladi) va <b>vertikal</b> (to'siq va ustunlar yoniga) turlarga bo'linadi." },
      { h: "Gorizontal chizmalar" },
      { ul: [
        "<b>Uzluq chiziq</b> — qatorlarni ajratadi, ustidan o'tishga ruxsat etiladi",
        "<b>Yaxlit chiziq</b> — kesib o'tish taqiqlanadi: quvib o'tish, burilish, qayrilish mumkin emas",
        "<b>Ikki yaxlit chiziq</b> — qarama-qarshi yo'nalishlarni ajratadi, ikki tomondan ham kesib bo'lmaydi",
        "<b>Birlashgan chiziq</b> (yaxlit + uzluq) — uzluq tomondan o'tishga ruxsat",
        "<b>Sariq chiziqlar</b> — yo'nalishli transport yo'llari, to'xtash taqiqlangan joylar",
      ] },
      { h: "Chorraha va o'tish joylaridagi chizmalar" },
      { ul: [
        "<b>Stopliniya</b> — svetofor oldidan to'xtash chizig'i",
        "<b>Zebra</b> — piyodalar o'tish joyi, piyodalarga to'liq ustunlik",
        "<b>«Yo'l bering» uchburchagi</b> — chorraha yoki tor joy oldida",
      ] },
      { h: "Vertikal chizmalar" },
      { p: "Yo'l to'siqlari, ko'prik ustunlari va boshqa inshootlarning yon yuzalariga chiziladi: oq-qora, sariq-qora yoki qizil-oq chiziqlar. Ular to'siqni uzoqdan ko'rinadigan qiladi." },
      { warn: "Yaxlit chiziqni kesib o'tish — qo'pol qoidabuzarlik. Imtihonda bu darhol muvaffaqiyatsiz natijaga olib kelishi mumkin, chunki harakatlanish qismining qarama-qarshi tomoniga chiqish xavfi tug'diradi." },
      { tip: "Rangga emas, chiziq turiga qarang: sariq rang ko'pincha vaqtinchalik yoki yo'nalishli transport zonasini bildiradi, lekin qoida baribir yaxlit/uzluq tushunchasiga tayanadi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "lights", title: "Svetoforlar va tartibga soluvchi", sub: "Yashil · sariq · qizil", minutes: 5,
    blocks: [
      { h: "Svetofor signallari" },
      { p: "Svetofor — yo'l harakatini avtomatik tartibga soluvchi qurilma. Uning ishorasi qat'iy: <b>yashil</b> — harakatga ruxsat, <b>sariq</b> — harakat taqiqlangan, <b>qizil</b> — harakat taqiqlangan." },
      { ul: [
        "<b>Yashil</b> — harakatga ruxsat; manevrni to'sqinlik qilmasdan yakunlash mumkin",
        "<b>Sariq</b> — harakatni to'xtatish; chorraha ichida bo'lsangiz — bo'shatish uchun davom etish mumkin",
        "<b>Qizil</b> — harakat taqiqlanadi",
        "<b>Sariqning miltillashi</b> — harakatga ruxsat, lekin chorraha tartibga solinmagan hisoblanadi",
        "<b>Qizil va sariq birga</b> — tez orada yashil yonadi",
      ] },
      { h: "Strelkalar va qo'shimcha sektsiyalar" },
      { p: "Strelkali yashil signal faqat ko'rsatilgan yo'nalishda harakatlanishga ruxsat beradi. Qo'shimcha sektsiyada strelka yonayotganda haydovchi <b>asosiy yo'l ustunligiga</b> ega transportga yo'l berishga majbur." },
      { h: "Tartibga soluvchi" },
      { p: "Tartibga soluvchi — politsiya, yo'l-patrul yoki harbiy avtomobil inspeksiyasi xodimi. Uning ishorasi svetofor va yo'l belgilaridan <b>ustun</b>." },
      { table: [
        ["Ishora", "Ma'nosi"],
        ["Qo'l ko'tarilgan", "Barcha qatnashchilar diqqat — signal o'zgaradi"],
        ["Qo'l ko'krakka", "Barcha tomonlardan harakat to'xtatiladi"],
        ["Qo'l yon tomonga", "Ko'rsatilgan tomondan harakat ruxsat"],
        ["Qo'l ko'rsatish", "Shu yo'nalishda harakat ruxsat etiladi"],
      ] },
      { tip: "Miltillovchi sariq signal — harakatga ruxsat. Chorraha tartibga solinmagan bo'ladi: o'ngdan kelayotgan transportga yo'l bering." },
      { warn: "Tartibga soluvchi ishora berganda svetoforga qaramang — uning ishorasi ustun. Bu imtihonda ham, real yo'lda ham qat'iy qoida." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "warnings", title: "Ogohlantirish va avariya ishoralari", sub: "Chiroqlar, haptirka, uchburchak", minutes: 5,
    blocks: [
      { h: "Avariya yoritish qachon majburiy" },
      { p: "Avariya yoritish (mirillovchi qizil chiroq) boshqa qatnashchilarni xavf haqida ogohlantiradi. Quyidagi hollarda yoqish <b>majburiy</b>:" },
      { ol: [
        "Avariya, to'xtab qolish, texnik nosozlik",
        "Tirkama bilan harakatlanishda (imkoni bo'lsa)",
        "Yo'lda piyodalar yoki bolalar ko'ringanda",
        "Tunda to'xtab turishda (to'xtab turish ruxsat etilgan joyda ham)",
        "Boshqa haydovchi ogohlantirganda",
      ] },
      { h: "Ogohlantiruvchi uchburchak" },
      { p: "Avariya yoki to'xtab qolishda, ayniqsa avariya yoritish ishlamasa, o'rnatiladi: aholi punktida — <b>kamida 15 m</b>, aholi punktidan tashqarida — <b>kamida 30 m</b> masofada." },
      { h: "Haptirka va yorug'lik ishoralari" },
      { ul: [
        "Haptirka — faqat boshqa haydovchini xavfdan ogohlantirish uchun",
        "Faralarning qisqa-kesik yonishi — diqqatni jalb qilish",
        "Qarama-qarshi tomondan kelayotgan haydovchiga uzoq farani qisqaga almashtirish — odob qoidasi",
      ] },
      { tip: "«Yo'l berish kerakmi?» savolida avval avariya yoritish yoqilganmi va uchburchak o'rnatilganmi — shu ikki shartni tekshiring. Ularsiz xavf tug'ilgan deb hisoblanmaydi." },
      { warn: "Haptirkadan hurmatsizlik belgisi sifatida foydalanish — taqiqlanadi. Aholi punktida haptirkani asossiz ishlatish qoidabuzarlik hisoblanadi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "speed", title: "Harakatlanish tezligi", sub: "Cheklovlar va tezlikni tanlash", minutes: 6,
    blocks: [
      { h: "Umumiy cheklovlar" },
      { table: [
        ["Yo'l turi", "Chegara"],
        ["Aholi punktlari va turar-joy zonalari", "60 km/soat"],
        ["Aholi punktidan tashqarida", "90 km/soat"],
        ["Avtomagistrallar", "110 km/soat"],
        ["Tirkama bilan", "70 km/soat"],
      ] },
      { h: "Tezlikni tanlash qoidasi" },
      { p: "Haydovchi tezlikni yo'l sharoitiga qarab tanlaydi: qoplama sifati, ko'rinish masofasi, ob-havo, transport oqimi. Tezlik <b>to'xtash uchun zarur masofadan</b> oshmasligi kerak." },
      { ul: [
        "Tormoz masofasi tezlik kvadratiga bog'liq: tezlik 2 baravar oshsa — masofa 4 baravar oshadi",
        "Ko'rinish cheklangan joyda (burilish, tepalik) tezlikni kamaytiring",
        "Yomg'ir, qor, tuman — tezlikni kamaytiring va oraliqni oshiring",
      ] },
      { h: "Tezlikni oshirish taqiqlangan holatlar" },
      { ul: [
        "Xavf yoki avariya belgilari ko'ringanda",
        "Boshqa haydovchi quvib o'tayotganda",
        "Chorraha oldida va ko'rinish cheklangan joylarda",
        "«Sekin harakatlanish» zonasi ichida",
      ] },
      { warn: "Tezlik chegarasi — <b>maksimum</b>, minimum emas. Xavfsizlik talab qilsa, undan past tezlikda harakatlanish to'liq to'g'ri hisoblanadi." },
      { tip: "Imtihonda «20» belgisi haqidagi savol tez-tez uchraydi: bu belgi sun'iy notekislik yoki maktab hududida 20 km/soat tezlikni bildiradi — undan oshib ketish avariyaviy holat hisoblanadi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "maneuver", title: "Manyovr va yo'ldagi joylashuv", sub: "Qator, burilish, orqaga harakat", minutes: 7,
    blocks: [
      { h: "Manyovr qoidasi" },
      { p: "Manyovr — qatorni, yo'nalishni yoki tezlikni o'zgartirish. Manyovrni boshlashdan oldin haydovchi <b>yo'l berishga majbur</b>: orqadagi, oldindagi va yondagi qatnashchilarga to'sqinlik qilmaslik kerak." },
      { h: "Qatorda joylashuv" },
      { ul: [
        "Asosiy qoida — o'ng tomonda harakatlanish",
        "Chap qator — quvib o'tish, chapga burilish va qayrilish uchun",
        "Qayta qatorga kirishda — navbatdagi qatordagi transportga yo'l berish",
        "Ustunda (kolonnada) harakatlanishda qatorlar tartibi saqlanadi",
      ] },
      { h: "Burilish va qayrilish" },
      { p: "Chapga burilishdan oldin <b>chap qatorga</b>, o'ngga burilishdan oldin <b>o'ng qatorga</b> o'tiladi. Chorrahada qayrilishda qarama-qarshi yo'nalishdagi transportga yo'l beriladi." },
      { h: "Orqaga harakatlanish" },
      { ul: [
        "Manovr faqat xavfsiz bo'lganda bajariladi",
        "Ko'rinish cheklangan bo'lsa, yordamchi jalb qilinadi",
        "Magistral va temir yo'l kesishmalarida orqaga harakatlanish — taqiqlanadi",
        "Piyodalar o'tish joylarida orqaga harakatlanish — taqiqlanadi",
      ] },
      { warn: "Tirkama bilan burilishda orqa g'ildiraklar ichkaridan yuradi — burilish radiusi kattaroq bo'ladi. Yo'l chetiga yaqin manevrlarda tirkamaning orqa qismi to'siqqa tegishi mumkin." },
      { tip: "Eng ko'p uchraydigan tuzoq: «qayta qatorga kirishda kim ustun?» — javob doim navbatdagi qatordagi transport, hatto siz burilish chirog'ini yoqqan bo'lsangiz ham." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "overtaking", title: "Quvib o'tish", sub: "Qachon mumkin, qachon taqiqlanadi", minutes: 6,
    blocks: [
      { h: "Eng xavfli manyovr" },
      { p: "Quvib o'tish — harakatlanayotgan transport vositasini oldinga chiqib, o'z qatoriga qaytish. Bu manevr eng xavfli hisoblanadi: qarama-qarshi yo'nalishdagi transport bilan to'qnashuv xavfi eng yuqori." },
      { h: "Quvib o'tish taqiqlangan joylar" },
      { ul: [
        "Tartibga solinadigan chorrahalarda va tartibga solinmaydigan chorrahalarda (asosiy yo'lda bo'lmasa)",
        "Temir yo'l kesishmalarida va ularga 100 m yetmasdan",
        "Piyodalar o'tish joylarida",
        "Ko'prik, tunnel, estakada va boshqa tor joylarda",
        "Ko'rinish cheklangan joylarda, yaxlit chiziq zonasida",
        "«Quvib o'tish taqiqlangan» belgisi zonasida",
      ] },
      { h: "Ruxsat etilgan holat" },
      { p: "Agar yo'l bir yo'nalishda ikki yoki undan ortiq qatorga ega bo'lsa va qarama-qarshi oqimga chiqish talab etilmasa, qo'shni qatordan o'tib ketish <b>qayta qatorga o'tish</b> hisoblanadi va ruxsat etiladi." },
      { h: "Manevr ketma-ketligi" },
      { ol: [
        "Oldingi va orqadagi transportni tekshirish",
        "Chapga burilish chirog'ini yoqish",
        "Qarama-qarshi yo'nalishni ko'rish (ayniqsa tunda)",
        "Tezlikni oshirib, quvib o'tilayotgan avtomobildan xavfsiz masofa oldinga chiqish",
        "O'ngga burilish chirog'ini yoqib, xavfsiz qaytish",
      ] },
      { warn: "Quvib o'tilayotgan haydovchi tezlikni oshirishi yoki manevrga to'sqinlik qilishi taqiqlanadi. Shu bilan birga, agar manevr boshlangan bo'lsa — uni xavfsiz yakunlash haydovchining burchi." },
      { tip: "Tunda quvib o'tishda: quvib o'tilayotgan avtomobil oldida qisqa faralarga o'ting, uzoq farani faqat yonma-yon bo'lganda yoqing — bu haydovchining ko'zini chaqnamaydi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "stopping", title: "To'xtash va to'xtab turish", sub: "Qayerda mumkin, qayerda taqiq", minutes: 6,
    blocks: [
      { h: "Farqi nimada" },
      { p: "<b>To'xtash</b> — yo'lovchini tushirish/olish yoki yukni tushirish uchun 5 daqiqagacha to'xtash. <b>To'xtab turish</b> — 5 daqiqadan ortiq, shuningdek tunda ruxsat etilgan joyda to'xtash." },
      { h: "To'xtash taqiqlangan joylar" },
      { ul: [
        "Tramvay yo'llarida va ular tramvay harakatiga to'sqinlik qilsa",
        "Temir yo'l kesishmalarida va 50 m yaqinida",
        "Tunnel, ko'prik, estakada va ular ostida",
        "Piyodalar o'tish joylarida va unga 5 m yetmasdan",
        "Chorraha hududida va unga 5 m yetmasdan",
        "«To'xtash taqiqlangan» belgisi zonasida",
      ] },
      { h: "To'xtab turishning qo'shimcha taqiqlari" },
      { ul: [
        "Belgi va svetofordan 5 m yaqinida (agar ularni to'sib qo'ysa)",
        "Xavfli burilishlarda va ko'rinish cheklangan joylarda",
        "Aholi punktidan tashqarida harakatlanish qismining chetida (faqat yo'l yoqasida)",
        "Ikkinchi qatorda turish — taqiqlanadi",
      ] },
      { h: "To'xtash tartibi" },
      { ol: [
        "O'ngga burilish chirog'ini yoqish",
        "Atrofni tekshirib, o'ng tomonga yaqinlashish",
        "Tezlikni kamaytirib to'xtash",
        "Qo'l tormozini tortish, vitesni bo'shatish",
        "Kerak bo'lsa — avariya yoritishni yoqish",
      ] },
      { warn: "Tunda to'xtab turishda avariya yoritish yoki gabarit chiroqlar yoqilishi kerak. To'xtash joyidan chiqishda boshqa qatnashchilarni ogohlantirish — haydovchining burchi." },
      { tip: "«5 metr» qoidasi eng ko'p so'raladi: piyodalar o'tish joyidan va chorrahadan 5 m yetmasdan to'xtash mumkin emas. Aynan 5 metr — chegaraviy masofa." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "junction", title: "Chorrahalar", sub: "Kim birinchi o'tadi", minutes: 7,
    blocks: [
      { h: "Chorraha turlari" },
      { ul: [
        "<b>Tartibga solinadigan</b> — svetofor yoki tartibga soluvchi ishorasi bilan",
        "<b>Tartibga solinmaydigan</b> — ustuvorlik yo'l belgilari bilan belgilanadi",
        "<b>Asosiy yo'l</b> — «Asosiy yo'l» belgisi bilan belgilangan yo'l",
      ] },
      { h: "Ustuvorlik ketma-ketligi" },
      { ol: [
        "Tartibga soluvchi signali — eng yuqori ustuvorlik",
        "Svetofor signali",
        "Ustuvorlik yo'l belgilari",
        "«O'ngdan ustunlik» qoidasi",
      ] },
      { h: "O'ngdan ustunlik qoidasi" },
      { p: "Tartibga solinmagan chorrahada teng huquqli yo'llar kesishganda haydovchi <b>o'ng tomondan kelayotgan</b> transportga yo'l beradi. Bu — eng ko'p savol beriladigan qoida." },
      { h: "Asosiy yo'l va chapga burilish" },
      { p: "Asosiy yo'lda harakatlanayotgan haydovchi ikkinchi darajali yo'ldan chiqayotgan transportga yo'l berishga majbur emas (manevr xavfsiz bo'lishi sharti bilan). Asosiy yo'lda chapga burilishda esa qarama-qarshi yo'nalishdagi transportga yo'l beriladi." },
      { warn: "Chorraha hududida to'xtash taqiqlanadi: oldinda tiqilinch bo'lsa, yashil svetoforda ham chorrahaga kirmang — bu chorrahani to'sib qo'yadi." },
      { tip: "Aylanma harakatli chorrahada: kirayotgan transport doira bo'ylab harakatlanayotganlarga yo'l beradi. «Aylanma harakat» belgisi shu qoidani bildiradi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "pedestrians", title: "Piyodalar va yo'lovchilar", sub: "Ustunlik va majburiyatlar", minutes: 5,
    blocks: [
      { h: "Piyodalarning ustunligi" },
      { p: "Piyodalar eng himoyasiz qatnashchilar. Ular <b>piyodalar o'tish joylarida</b> ustunlikka ega, o'tish joyi bo'lmagan joyda esa kesib o'tishga kirishgan piyodaga yo'l beriladi." },
      { ul: [
        "O'tish joyidagi va unga kirib kelayotgan piyodaga yo'l beriladi",
        "Yashil svetoforda ham piyodalarni o'tkazish talab etilishi mumkin",
        "Ko'rinish cheklangan joyda tezlikni kamaytirish",
      ] },
      { h: "Haydovchining majburiyatlari" },
      { ol: [
        "O'tish joyiga yaqinlashganda tezlikni kamaytirish",
        "Zarur bo'lsa to'xtash va piyodani o'tkazish",
        "Piyoda chiqib qolishi mumkinligini hisobga olish (bolalar, keksalar, nogironlar)",
        "To'xtab turgan avtobus yonidan ehtiyotkorlik bilan o'tish",
      ] },
      { h: "Yo'lovchilar" },
      { p: "Yo'lovchilar mo'ljallangan joyda, eshik orqali chiqadi va tushadi. Harakatlanayotgan transportda eshik ochish yoki sakrash — taqiqlanadi. Xavfsizlik kamari barcha yo'lovchilar uchun majburiy." },
      { warn: "Piyoda o'tish joyidagi piyodaga to'sqinlik qilish — qo'pol qoidabuzarlik. Imtihonda bu darhol muvaffaqiyatsiz natija bo'lishi mumkin." },
      { tip: "Tunda qora kiyimdagi piyoda 25–30 m dan, yorug'lik kiyimda esa 100 m dan ko'rinadi. Tezlikni ko'rinish masofasiga qarab tanlang." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "crossing", title: "Piyodalar o'tish joylari va bekatlar", sub: "Zebra, bekatlar, jamoat transporti", minutes: 5,
    blocks: [
      { h: "Piyodalar o'tish joyi" },
      { p: "Piyodalar o'tish joyi — yo'lning piyodalar uchun ajratilgan qismi (zebra chizmalari va belgilar). Haydovchi unga yaqinlashganda doim tezlikni kamaytirishi kerak." },
      { ul: [
        "Piyoda o'tish joyiga chiqqan bo'lsa — to'xtash majburiy",
        "Zebradan 5 m yaqinida to'xtash va to'xtab turish taqiqlanadi",
        "Qo'shni qator to'xtagan bo'lsa — o'tib ketish xavfli: ko'rinmas piyoda bo'lishi mumkin",
      ] },
      { h: "Bekatlar" },
      { p: "Bekatga yaqinlashayotgan jamoat transportiga yo'l beriladi. Bekat hududida quvib o'tish, odamlarni xavf ostiga qo'yadigan manevrlar taqiqlanadi." },
      { ol: [
        "Bekatda turgan avtobus yonidan o'tishda tezlikni kamaytirish",
        "Bekatdan chiqishni boshlagan avtobusga yo'l berish",
        "Bekatda to'xtab turish — taqiqlanadi",
      ] },
      { h: "Bolalar bilan bog'liq ehtiyot choralari" },
      { p: "Maktab, bog'cha va bolalar maydonchalari yaqinida tezlik cheklanadi. «Bolalar» belgisi zonasida to'xtashga doim tayyor bo'ling — bolaning keyingi harakati oldindan aytilmaydi." },
      { tip: "Avtobus oldidagi piyoda ko'rinmasligi mumkin — bu «ko'r zona». Avtobus to'xtagan bo'lsa, uning oldidan odam chiqishi ehtimoli yuqori: sekinlashing yoki to'xtang." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "railway", title: "Temir yo'l kesishmalari", sub: "To'siqli va to'siqsiz kesishmalar", minutes: 5,
    blocks: [
      { h: "Kesishma turlari" },
      { ul: [
        "<b>To'siqli (shlagbaumli)</b> — qo'riqchi yoki avtomatik to'siq bilan jihozlangan",
        "<b>To'siqsiz</b> — faqat svetofor va tovushli signal bilan",
      ] },
      { h: "Kesishmadan o'tish tartibi" },
      { ol: [
        "Tezlikni kamaytirib yaqinlashish",
        "To'siq va svetofor signalini kuzatish",
        "To'siq tushgan yoki qizil miltillovchi signalda — «To'xtang» chizig'i oldida to'xtash",
        "Kesishma bo'sh bo'lganda va narigi tomonda joy bo'lsa o'tish",
      ] },
      { h: "Kesishmada taqiqlanadi" },
      { ul: [
        "To'xtash, to'xtab turish va orqaga harakatlanish",
        "Quvib o'tish",
        "To'siq ko'tarilgan bo'lsa ham qizil signalda kirish",
      ] },
      { warn: "Svetofor yashil bo'lsa ham, kesishmada poyezd turgan bo'lsa — kirmang. To'siq va signaldan birontasi taqiqni bildirsa, bu qat'iy to'xtash talabidir." },
      { tip: "Kesishma oldida to'xtaganda dvigatelni o'chirmang — kesishma bo'shagach, darhol harakatni boshlashga tayyor turing." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "special", title: "Maxsus va yo'nalishli transport", sub: "Tezkor yordam va jamoat transporti", minutes: 5,
    blocks: [
      { h: "Maxsus transport" },
      { p: "Maxsus transport — tezkor xizmatlar: <b>tez yordam</b>, <b>o't o'chirish</b>, <b>politsiya</b>, favqulodda xizmatlar. Ular miltillovchi ko'k/qizil signal va tovush signali (sirena) bilan harakatlanadi." },
      { ul: [
        "Signal yoqilgan tezkor transportga barcha qatnashchilar yo'l beradi",
        "Signal o'chirilgan tezkor transport — oddiy qatnashchi",
        "Tezkor transportga ergashib ketish — taqiqlanadi",
      ] },
      { h: "Yo'nalishli transport" },
      { p: "Yo'nalishli transport — belgilangan yo'nalishda ishlaydigan jamoat transporti (avtobus, trolleybus, tramvay). U qat'iy yo'nalish bo'ylab harakatlanadi va bekatlarda to'xtaydi." },
      { ol: [
        "Bekatdan chiqayotgan avtobusga yo'l berish",
        "Tramvayga boshqa qatnashchilardan ustunlik",
        "Yo'nalishli transportga ajratilgan yo'lda shaxsiy transport bilan yurish — taqiqlanadi",
      ] },
      { h: "Ustuvorlik" },
      { table: [
        ["Transport", "Ustuvorlik"],
        ["Tezkor xizmat (signal bilan)", "Eng yuqori — hamma yo'l beradi"],
        ["Tramvay", "Boshqa qatnashchilardan ustun"],
        ["Bekatdan chiqayotgan avtobus", "Oqimga kirishda ustun"],
      ] },
      { tip: "Tezkor transportga yo'l berish uchun miltillovchi signal yetarli emas — tovushli signal ham talab etiladi. Ikkalasi bo'lsa, darhol yo'l bering." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "lighting", title: "Tashqi yoritish asboblari", sub: "Faralar, gabaritlar, tumanga qarshi", minutes: 5,
    blocks: [
      { h: "Yoritish turlari" },
      { ul: [
        "<b>Uzoq fara</b> — eng uzoqni yoritadi; qarama-qarshi transport bo'lmaganda ishlatiladi",
        "<b>Qisqa fara</b> — yaqin masofani yoritadi, qarshi yo'nalishni qamashtirmaydi",
        "<b>Gabarit chiroqlar</b> — transport konturini ko'rsatadi (oq va qizil yon chiroqlar)",
        "<b>Tumanga qarshi fara</b> — tuman, yomg'ir, qor uchun",
        "<b>Boshqa chiroqlar</b> — burilish, tormoz, orqaga harakat chiroqlari",
      ] },
      { h: "Uzoq faradan qachon voz kechish kerak" },
      { p: "Uzoq fara aholi punktidan tashqarida, qarama-qarshi transport bo'lmaganda yoqiladi. Qarama-qarshi transport yaqinlashganda <b>150 m masofada</b> qisqa faraga o'tiladi." },
      { h: "Qisqa fara majburiy bo'lgan holatlar" },
      { ol: [
        "Tunda harakatlanishda",
        "Ko'rinish cheklangan joyda — kunduz ham",
        "Tunnelda — yo'l qanday bo'lishidan qat'i nazar",
        "Qarama-qarshi transport yaqinlashganda",
        "Ko'rinish 100 m dan kam bo'lganda (tuman, yomg'ir, qor)",
      ] },
      { warn: "Ko'zni qamashtirish — qoidabuzarlik. Qarama-qarshi haydovchi uzoq farani o'chirmasa, siz tezlikni kamaytiring va o'ng chetga qarab harakatlaning." },
      { tip: "Tunda eng xavfli joy — ko'r zonada to'xtagan transport. Unga yaqinlashganda uzoq farani bir marta qisqa yoqib-o'chirib, haydovchiga o'zingizni eslating." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "towing", title: "Shatakka olish", sub: "Turlar, masofa va taqiqlar", minutes: 5,
    blocks: [
      { h: "Shatak turlari" },
      { ul: [
        "<b>Qattiq shatak</b> — transport vositalarini qattiq bog'lovchi moslama",
        "<b>Egiluvchan shatak</b> — arqon yoki tros bilan yumshoq bog'lanish",
        "<b>Yarim karkasli shatak</b> — bir tomoni ko'tariladigan moslama",
      ] },
      { h: "Masofa qoidalari" },
      { table: [
        ["Shatak turi", "Masofa"],
        ["Egiluvchan (tros)", "4–6 m"],
        ["Qattiq", "4–6 m, ko'rinadigan signal bilan"],
      ] },
      { h: "Taqiqlar" },
      { ol: [
        "Shatakdagi transportda odam tashish",
        "Shatakni ko'rinadigan qilib belgilamaslik",
        "Shatakli transportda tormoz yoki yoritish ishlamasligi",
      ] },
      { h: "Tezlik" },
      { p: "Shatakda harakatlanish tezligi tirkama bilan bir xil: <b>maksimum 70 km/soat</b>. Egiluvchan shatakda esa 50 km/soatdan oshmaslik tavsiya etiladi." },
      { warn: "Egiluvchan shatakni ko'rinadigan qilish uchun o'rtasiga qizil bayroqcha osiladi. Tunda ikkala transportda ham yoritish yoqilgan bo'lishi shart." },
      { tip: "Shatakda oraliqni 2 baravar oshiring: shatakli avtomobil sekinroq to'xtaydi va burilishda kengroq ochiladi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "people", title: "Odam tashish, o'qitish, magistral", sub: "Yo'lovchilar, instruktor, avtomagistral", minutes: 5,
    blocks: [
      { h: "Odam tashish" },
      { ul: [
        "Yo'lovchilar soni texnik hujjatda ko'rsatilganidan oshmasligi kerak",
        "Yo'lovchilarni yukxonada, tirkamada yoki yuk kuzovida tashish — taqiqlanadi",
        "Xavfsizlik kamari har bir yo'lovchi uchun majburiy",
        "Bolalar maxsus o'rindiqda tashiladi",
      ] },
      { h: "O'qitish (instruktor)" },
      { p: "O'quv mashinasida haydovchi nomzod bilan birga <b>instruktor</b> bo'lishi shart. Instruktor ham haydovchi hisoblanadi va harakat xavfsizligi uchun javobgar. O'quv mashinasi maxsus belgi bilan jihozlanadi." },
      { h: "Avtomagistral" },
      { p: "Avtomagistral — maxsus belgi bilan belgilangan, ko'p qatorli, bo'luvchi chiziqli yo'l. Tezlik chegarasi <b>110 km/soat</b>." },
      { ol: [
        "To'xtash faqat maxsus to'xtash joylarida",
        "Orqaga harakatlanish, burilish, qayrilish — taqiqlanadi",
        "Piyodalar, velosipedlar, mopedlar — kirishi taqiqlanadi",
        "Harakatlanish qismiga faqat kirish joylari orqali chiqish",
      ] },
      { warn: "Avtomagistralga kirish vaqtida tezlikni oshirish lozim: sekin kirish orqadagi transport uchun xavf tug'diradi. Chiqishda esa oldindan o'ng qatorga o'ting." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "safety", title: "Xavfsizlik, texnik holat, tibbiy yordam", sub: "Tayyorgarlik va birinchi yordam", minutes: 6,
    blocks: [
      { h: "Texnik holat talablari" },
      { ul: [
        "Tormoz tizimi, rul boshqaruvi, yoritish asboblari — ishchi holatda",
        "Shina protektori chuqurligi — yengil avtomobil uchun <b>kamida 1,6 mm</b>",
        "Oyna tozalagichlar va yuvish suyuqligi ishlaydi",
        "Birinchi yordam aptechkasi, ogohlantiruvchi uchburchak, o't o'chirgich — to'liq",
      ] },
      { h: "Haydovchining holati" },
      { p: "Charchoq, uyquchanlik, alkogol yoki giyohvandlik ta'siri — transport vositasini boshqarish taqiqlanadigan holatlar. Bunday holatda haydovchi boshqarishga <b>haqli emas</b>." },
      { h: "Avariyada birinchi yordam" },
      { ol: [
        "Xavfsizlikni ta'minlash: avariya yoritish, ogohlantiruvchi uchburchak",
        "Tez yordam chaqirish (103 yoki 112)",
        "Jabrlanuvchini faqat bevosita xavf bo'lsa xavfli joydan chiqarish",
        "Qon ketishini to'xtatish, nafas yo'lini ta'minlash, shokni oldini olish",
        "Hodisa joyini o'zboshimchalik bilan o'zgartirmaslik",
      ] },
      { table: [
        ["Holat", "Birinchi yordam"],
        ["Nafas olmayapti", "Sun'iy nafas va yurak massaji"],
        ["Qattiq qon ketish", "Bosim bog'lami, qon tomirni siqish"],
        ["Singan oyoq-qo'l", "Shina bilan mahkamlash, joyida qoldirish"],
        ["Kuyish", "Sovuq suv bilan sovutish, kiyimni yulmaslik"],
      ] },
      { warn: "Jabrlanuvchini transport vositasidan faqat yong'in, portlash yoki boshqa bevosita xavf bo'lganda chiqaring. Aks holda — o'rnida qoldirib, yordam chaqiring." },
      { tip: "«Birinchi navbatda nima qilish kerak?» savoliga javob deyarli doim <em>xavfsizlikni ta'minlash</em> yoki <em>tez yordam chaqirish</em> bo'ladi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "idsigns", title: "Taniqlik belgilari", sub: "Boshlovchi, o'quv, kar haydovchi", minutes: 4,
    blocks: [
      { h: "Taniqlik belgilari nima" },
      { p: "Taniqlik belgilari transport vositasining holatini ko'rsatadi: kim boshqarayotgani, qanday sharoitda harakatlanayotgani haqida boshqa qatnashchilarga xabar beradi." },
      { ul: [
        "<b>«Boshlovchi haydovchi»</b> — stajirovka davridagi haydovchi (2 yilgacha)",
        "<b>«O'quv transporti»</b> — haydovchi nomzod boshqarayotgan mashina",
        "<b>«Kar haydovchi»</b> — eshitish qobiliyati cheklangan haydovchi",
      ] },
      { h: "O'quv transporti" },
      { ul: [
        "O'quv mashinasida instruktor bo'lishi shart",
        "Mashina maxsus belgi bilan jihozlanadi",
        "Bunday mashinaga yaqinlashganda ehtiyot bo'lish tavsiya etiladi",
      ] },
      { h: "Kar haydovchi belgisi" },
      { p: "Bu belgi bilan harakatlanayotgan haydovchi tovushli signalni eshitmasligi mumkin. Uning manevri oldindan aytilmaydi — yaqinlashishdan oldin ehtiyot bo'ling." },
      { tip: "Eng ko'p so'raladigan savol: «qaysi belgi boshlovchi haydovchiga tegishli?» — javob «Boshlovchi haydovchi» belgisi. Uni «O'quv transporti» belgisi bilan chalkashtirmang." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "cargo", title: "Yuk tashish", sub: "O'lchamlar, joylashuv, mahkamlash", minutes: 4,
    blocks: [
      { h: "Asosiy qoidalar" },
      { ul: [
        "Yuk ko'rinishni, boshqaruvni yoki yoritishni to'smasligi kerak",
        "Yuk xavfsiz mahkamlangan bo'lishi kerak",
        "Yuk boshqa qatnashchilar uchun xavf tug'dirmasligi kerak",
      ] },
      { h: "Ruxsat etilgan o'lchamlar" },
      { table: [
        ["Parametr", "Chegara"],
        ["Oldinga chiqishi", "Mashina enidan 0,5 m ortiq emas"],
        ["Orqaga chiqishi", "Mashina uzunligidan 2 m ortiq emas"],
        ["Yon tomonga chiqishi", "Mashina enidan 0,4 m ortiq emas"],
        ["Balandligi", "4 m dan ortiq emas"],
      ] },
      { h: "Yukni belgilash" },
      { p: "Agar yuk orqaga 1 m dan yoki yon tomonga 0,4 m dan ortiq chiqib tursa, uni <b>qizil yoki oq bayroqcha</b> bilan belgilash kerak. Tunda bu o'rniga yorug'lik signali ishlatiladi." },
      { warn: "Noto'g'ri mahkamlangan yuk — avariyaviy holat. Tezlik oshgan sari yuk siljiydi, shuning uchun har to'xtashdan keyin mahkamlashni tekshirish tavsiya etiladi." },
      { tip: "Raqamlarni eslab qolish oson: oldinga 0,5 — orqaga 2 — yon tomonga 0,4 — balandlik 4 m. Testlarda aynan shu qiymatlar so'raladi." },
    ],
  },

  // ------------------------------------------------------------------
  {
    k: "bikes", title: "Velosiped, moped va arava", sub: "Piyoda va transport orasidagi qatnashchilar", minutes: 4,
    blocks: [
      { h: "Yosh va harakatlanish joyi" },
      { ul: [
        "<b>Velosiped</b> — 14 yoshdan yo'lda harakatlanish mumkin",
        "<b>Moped</b> — 16 yoshdan, 25 km/soatgacha tezlikdagi transport",
        "<b>Arava</b> — yo'lning chetida harakatlanadi",
      ] },
      { h: "Qayerda harakatlanadi" },
      { p: "Velosiped va mopedlar uchun maxsus yo'lakcha bo'lsa — harakat faqat shu yo'lakchada. Bo'lmasa, o'ng chetdagi qatorda avtomobillar bilan birga harakatlanadi." },
      { h: "Muhim qoidalar" },
      { ul: [
        "Velosipedda faqat 7 yoshgacha bolani maxsus o'rindiqda tashish mumkin",
        "Rulni qo'ldan bo'shatib harakatlanish — taqiqlanadi",
        "Avtomagistral, tunnel va ko'prikda velosiped harakati — taqiqlanadi",
        "Tormoz tizimi ishlamasa — harakatlanish taqiqlanadi",
        "Qorong'i vaqtda chiroq va reflektorlar yoqilgan bo'lishi kerak",
      ] },
      { warn: "Velosiped va moped haydovchisi piyoda emas — u transport haydovchisi. Shu sababli yo'l harakati qoidalariga bo'ysunadi, lekin himoyasizligi uchun avtomobil haydovchisi undan ehtiyot bo'lishi kerak." },
      { tip: "Yon tomondan o'tishda velosipedga kamida 1,5 m masofa qoldiring — havo oqimi velosipedchini muvozanatdan chiqarishi mumkin." },
    ],
  },
];
