// q/d_junctions.js — To'xtash, chorrahalar, piyodalar o'tish joylari, temir yo'l (YHQ 13–18-boblar)

// ===================== TO'XTASH VA TO'XTAB TURISH (YHQ 13-bob) =====================
Q("stopping", "Qoidalarga ko'ra transport vositalari asosan qayerda to'xtashi va to'xtab turishi mumkin?",
  ["Yo'lning o'ng tomonida yo'l yoqasida, u bo'lmasa qatnov qismi chetida", "Yo'lning ikkala tomonida ham, yo'l yoqasida yoki qatnov qismi chetida", "Faqat trotuar chetida yoki maxsus to'xtash maydonchalarida", "O'ng tomonda faqat yo'l yoqasida, qatnov qismida hech qachon"],
  "Asosiy joy — o'ng tomondagi yo'l yoqasi, yo'l yoqasi bo'lmasa qatnov qismining cheti; trotuarda faqat 89-bandda aytilgan hollarda ruxsat (YHQ 88-band).");
Q("stopping", "Aholi punktlarida qaysi yo'llarda yo'lning chap tomonida ham to'xtash va to'xtab turishga ruxsat etiladi?",
  ["Tramvay yo'li yo'q, har yo'nalishda bitta tasmali va bir tomonlama yo'llarda", "Har yo'nalishda ikkitadan tasmasi bo'lgan, o'rtada tramvay yo'li bo'lmagan barcha yo'llarda", "Faqat bir tomonlama harakatli yo'llarda, tasmalar sonidan qat'i nazar", "O'rtada tramvay yo'li bo'lgan, har yo'nalishda bitta tasmali yo'llarda"],
  "Chap tomonda to'xtash aholi punktida faqat shu ikki turdagi yo'lda ruxsat etiladi (YHQ 88-band).");
Q("stopping", "Aholi punktidagi ko'chada har yo'nalishda bittadan tasma bor, ammo o'rtasidan tramvay yo'li o'tgan. Yo'lning chap tomonida to'xtash mumkinmi?",
  ["Yo'q, o'rtada tramvay yo'li borligi uchun mumkin emas", "Ha, har yo'nalishda bitta tasma bo'lgani uchun mumkin", "Faqat yo'lovchi tushirish uchun mumkin", "Faqat yuk ortish va tushirish uchun mumkin"],
  "Chap tomonda to'xtash uchun yo'l o'rtasida tramvay yo'li bo'lmasligi shart (YHQ 88-band).");
Q("stopping", "Aholi punktida har yo'nalishda ikkitadan tasmasi bor, tramvay yo'li bo'lmagan ikki tomonlama yo'lda chap tomonda to'xtash:",
  ["Ruxsat etilmaydi", "Ruxsat etiladi, chunki tramvay yo'li yo'q", "Faqat yengil avtomobillarga ruxsat etiladi", "Faqat yo'l yoqasi bo'lsa ruxsat etiladi"],
  "Ikki tomonlama yo'lda chap tomonda to'xtash faqat har yo'nalishda bitta tasma bo'lganda mumkin (YHQ 88-band).");
Q("stopping", "Aholi punktidan tashqarida, har yo'nalishda bitta tasmali, tramvay yo'li bo'lmagan ikki tomonlama yo'lning chap tomonida to'xtash:",
  ["Ruxsat etilmaydi — bu istisno faqat aholi punktida", "Ruxsat etiladi, chunki tramvay yo'li yo'q", "Faqat yo'l yoqasi bo'lsa ruxsat etiladi", "Faqat yuk ortish va tushirish uchun ruxsat etiladi"],
  "Chap tomonda to'xtashga ruxsat beruvchi qoida «Aholi punktlarida» deb boshlanadi; tashqarida faqat o'ng tomonda to'xtaladi (YHQ 88-band).");
Q("stopping", "Ruxsat etilgan to'liq vazni 3,5 tonnadan ko'p yuk avtomobili bir tomonlama yo'lning chap tomonida qaysi maqsadda to'xtashi mumkin?",
  ["Faqat yuk ortish va tushirish uchun", "Yuk ortish hamda yo'lovchi tushirish uchun", "Har qanday maqsadda, 10 daqiqagacha", "Umuman to'xtashi mumkin emas"],
  "Og'ir yuk avtomobillari bir tomonlama yo'lning chap tomonida faqat yuk ortish va tushirish uchun to'xtaydi (YHQ 88-band).");
Q("stopping", "Ruxsat etilgan to'liq vazni 7 t bo'lgan yuk avtomobili haydovchisi aholi punktidagi bir tomonlama yo'lning chap tomonida tushlik qilish uchun to'xtamoqchi. Bu:",
  ["Mumkin emas — faqat yuk ortish-tushirish uchun to'xtay oladi", "Mumkin, agar to'xtash 10 daqiqadan oshmasa", "Mumkin, chunki bir tomonlama yo'lda chap tomon cheklanmagan", "Mumkin, agar avariya ishorasini yoqib qo'ysa"],
  "3,5 t dan og'ir yuk avtomobillari uchun bir tomonlama yo'lning chap tomonidagi ruxsat faqat yuk operatsiyalari bilan cheklangan (YHQ 88-band).");
Q("stopping", "Qatnov qismida transport vositalari (umumiy qoida bo'yicha) qanday qo'yiladi?",
  ["Bir qator qilib, qatnov qismi chetiga parallel", "Ikki qator qilib, qatnov qismi chetiga parallel", "Bir qator qilib, chetga perpendikulyar", "Joy bo'lsa ikki qator, burchak ostida"],
  "Qatnov qismida faqat bir qator va chetga parallel qo'yishga ruxsat etiladi, boshqalarga xalaqit bermaslik sharti bilan (YHQ 89-band).");
Q("stopping", "Kajavasiz ikki g'ildirakli transport vositalarini qatnov qismi chetida qanday qo'yish mumkin?",
  ["Ikki qator qilib", "Faqat bir qator qilib", "Uch qatorgacha", "Faqat trotuar ustida"],
  "Kajavasi bo'lmagan ikki g'ildirakli transport vositalari uchun ikki qator qilib qo'yishga ruxsat berilgan (YHQ 89-band).");
Q("stopping", "Kajavali mototsiklni qatnov qismida qanday qo'yish kerak?",
  ["Bir qator qilib, chetga parallel — boshqa transport kabi", "Ikki qator qilib, xuddi kajavasiz mototsikllar kabi, chetga parallel", "Chetga perpendikulyar qilib, bir qator", "Faqat trotuar chetida, 5.15 belgisi bo'lsa"],
  "Ikki qator qilib qo'yish istisnosi faqat kajavasiz ikki g'ildirakli vositalarga tegishli; kajavali mototsikl umumiy tartibda qo'yiladi (YHQ 89-band).");
Q("stopping", "Qatnov qismiga chegaradosh trotuar chetida (ruxsat beruvchi belgilar bo'lsa) qaysi transport vositasining to'xtab turishiga ruxsat yo'q?",
  ["Avtobusning", "Yengil avtomobilning", "Mototsiklning", "Mopedning"],
  "Trotuar chetida faqat yengil avtomobillar, mototsikllar, mopedlar, skuterlar, velosipedlar va individual harakatlanish vositalari to'xtab turishi mumkin (YHQ 89-band).");
Q("stopping", "Trotuar chetida to'xtab turishga qachon ruxsat etiladi?",
  ["5.15 belgisi bilan birga tegishli 7.6 qo'shimcha belgilaridan biri bo'lsa", "Faqat 5.15 belgisi o'rnatilgan bo'lsa, hech qanday qo'shimcha belgisiz ham", "Piyodalar uchun trotuarda kamida 2 m joy qoldirilgan bo'lsa", "Yo'l yoqasi bo'lmagan barcha ko'chalarda, belgisiz ham"],
  "Trotuar chetida to'xtab turish 5.15 belgisi va 7.6.2, 7.6.3, 7.6.6–7.6.9 qo'shimcha belgilaridan biri birgalikda bo'lgan joylarda ruxsat etiladi (YHQ 89-band).", "parking");
Q("stopping", "Aholi punktidan tashqarida tunab qolish yoki dam olish uchun uzoq vaqt to'xtab turish qayerda ruxsat etiladi?",
  ["Faqat buning uchun ko'zda tutilgan maydonchalarda yoki yo'ldan tashqarida", "Yo'l yoqasining istalgan joyida, avariya ishorasi yoqilgan holda", "Qatnov qismi chetida, gabarit chiroqlari va avariya ishorasi yoqilgan holda", "Asosiy yo'l bo'lmagan har qanday yo'l yoqasida"],
  "Aholi punktidan tashqarida uzoq to'xtab turish faqat maxsus maydonchalarda yoki yo'ldan tashqarida mumkin (YHQ 90-band).");
Q("stopping", "Qoidalarda «to'xtash» deb nimaga aytiladi?",
  ["Harakatni 10 daqiqagacha bo'lgan muddatga to'xtatishga", "Harakatni 5 daqiqagacha bo'lgan muddatga to'xtatishga", "Harakatni 15 daqiqagacha bo'lgan muddatga to'xtatishga", "Harakatni 30 daqiqagacha bo'lgan muddatga to'xtatishga"],
  "Ta'rifga ko'ra to'xtash — harakatni 10 daqiqagacha to'xtatish (YHQ 6-band).");
Q("stopping", "Qoidalarda «to'xtab turish» qanday ta'riflanadi?",
  ["Yo'lovchi yoki yuk bilan bog'liq bo'lmagan holda 10 daqiqadan ko'p atayin to'xtash", "Yo'lovchi yoki yuk bilan bog'liq bo'lmagan holda harakatni 5 daqiqadan ko'proqqa to'xtatish", "Har qanday sababli, jumladan yuk ortish uchun 10 daqiqadan ko'proq turish", "Dvigatel o'chirilgan holda, vaqtidan qat'i nazar har qanday to'xtatish"],
  "To'xtab turish — yo'lovchi chiqarish-tushirish, yuk ortish-tushirish bilan bog'liq bo'lmagan holda 10 daqiqadan ko'p atayin to'xtash (YHQ 6-band).");
Q("stopping", "Siz ko'cha chetida 20 daqiqa davomida mashinangizdan yuk tushirdingiz. Qoidalar bo'yicha bu:",
  ["To'xtab turish emas — yuk tushirish bilan bog'liq", "To'xtab turish hisoblanadi, chunki 10 daqiqadan oshdi", "Majburiy to'xtash hisoblanadi, chunki yuk bor edi", "Uzoq muddatli to'xtab turish hisoblanadi"],
  "To'xtab turish ta'rifi yuk ortish-tushirish bilan bog'liq hollarni o'z ichiga olmaydi, shuning uchun vaqt 10 daqiqadan oshsa ham bu to'xtab turish emas (YHQ 6-band).");
Q("stopping", "Qaysi holat «majburiy to'xtash» hisoblanadi?",
  ["Texnik nuqson tufayli xavf yuzaga kelib to'xtash", "Yo'lovchini tushirish uchun qisqa to'xtash", "Do'konga kirish uchun 5 daqiqaga to'xtash", "Tirbandlikda oldingi mashina ortida to'xtash"],
  "Majburiy to'xtash — texnik nuqson, yuk, haydovchi yoki yo'lovchi holati, to'siq yoki ob-havo tufayli xavf yuzaga kelganda harakatni to'xtatish (YHQ 6-band).");
Q("stopping", "To'xtash taqiqlangan joyda majburan to'xtab qolgan haydovchi nima qilishi shart?",
  ["Vositani yo'l chetiga chiqarib, olib ketish choralarini ko'rishi", "Avariya ishorasini yoqib, yordam kelguncha qatnov qismida kutishi", "Faqat avariya to'xtash belgisini qo'yib, mashinani qoldirishi", "10 daqiqa ichida ta'mirlab, keyin harakatni davom ettirishi"],
  "Majburiy to'xtaganda haydovchi vositani yo'l chetiga olib chiqish va bu joydan olib ketishning barcha choralarini ko'rishi shart (YHQ 93-band).");
Q("stopping", "Tramvay yo'llarida to'xtash:",
  ["Taqiqlanadi", "Tramvay ko'rinmasa ruxsat etiladi", "Yo'lovchi tushirish uchun ruxsat etiladi", "10 daqiqagacha ruxsat etiladi"],
  "Tramvay yo'llarida to'xtash taqiqlangan joylar ro'yxatida birinchi o'rinda turadi (YHQ 91-band).");
Q("stopping", "Tramvay yo'liga bevosita yaqin joyda to'xtash qachon taqiqlanadi?",
  ["Tramvaylar harakatlanishiga xalaqit beradigan hollarda", "Relsdan 15 m dan yaqin bo'lsa, har doim", "Faqat tramvay bekati yaqinida", "Faqat tramvay izlari qatnov qismidan ajratilgan bo'lsa"],
  "Tramvay yo'llari yaqinida to'xtash tramvay harakatiga xalaqit berganda taqiqlanadi (YHQ 91-band).");
Q("stopping", "Temir yo'l kesishmasining o'zida to'xtash:",
  ["Taqiqlanadi", "Yo'lovchi tushirish uchun ruxsat etiladi", "Shlagbaum ochiq bo'lsa ruxsat etiladi", "Poyezd ko'rinmasa ruxsat etiladi"],
  "Temir yo'l kesishmalarida to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Bir yo'nalishda nechtadan kam tasmasi bo'lgan ko'prik, yo'l o'tkazgich va estakadalar ustida to'xtash taqiqlanadi?",
  ["Uchtadan kam", "Ikkitadan kam", "To'rttadan kam", "Beshtadan kam"],
  "Bir yo'nalishda uchtadan kam tasmasi bo'lgan ko'prik, yo'l o'tkazgich va estakadalar ustida to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Ko'prik, yo'l o'tkazgich va estakadalarning ostida to'xtash:",
  ["Taqiqlanadi, belgilar ruxsat bergan qismlar bundan mustasno", "Ruxsat etiladi — taqiq faqat ko'prik va estakadaning ustiga tegishli", "Uchtadan kam tasma bo'lsa ruxsat etiladi", "Istisnosiz taqiqlanadi, belgilar bo'lsa ham"],
  "Ko'prik va estakadalar ostida to'xtash taqiqlanadi, tegishli belgilar to'xtab turishga ruxsat bergan joylar bundan mustasno (YHQ 91-band).");
Q("stopping", "To'xtagan transport vositasi bilan bo'ylama sidirg'a chiziq orasida qancha masofa qolsa to'xtash taqiqlanadi?",
  ["3 m dan kam", "1 m dan kam", "5 m dan kam", "2 m dan kam"],
  "Sidirg'a chiziq, ajratuvchi mintaqa yoki qatnov qismining qarama-qarshi chetigacha 3 m dan kam qolsa to'xtash taqiqlanadi (YHQ 91-band).", "m_solid");
Q("stopping", "Tor ko'chada mashinangizni to'xtatsangiz, undan qatnov qismining qarama-qarshi chetigacha 2,5 m qoladi. To'xtash mumkinmi?",
  ["Yo'q — 3 m dan kam masofa qoladi", "Ha — 2 m dan ko'p qolsa yetarli", "Ha, agar avariya ishorasini yoqsangiz", "Ha, agar 10 daqiqadan oshmasa"],
  "Qatnov qismining qarama-qarshi chetigacha 3 m dan kam qoladigan joyda to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "3 metrlik masofa haqidagi taqiq qaysi chiziqqa nisbatan qo'llanilmaydi?",
  ["Qatnov qismining chetini belgilovchi chiziqqa", "Qatnov qismidagi bo'ylama sidirg'a chiziqqa", "Yo'lni ajratuvchi mintaqaga", "Qatnov qismining qarama-qarshi chetiga"],
  "Qoidada qatnov qismining chetini belgilovchi chiziq bu taqiqdan alohida chiqarib qo'yilgan (YHQ 91-band).");
Q("stopping", "Piyodalar o'tish joyidan oldin qancha masofadan kamda to'xtash taqiqlanadi?",
  ["10 m", "5 m", "15 m", "20 m"],
  "Piyodalar o'tish joylarida va ulardan oldin 10 m dan kam masofada to'xtash taqiqlanadi (YHQ 91-band).", "crossing");
Q("stopping", "Siz yo'lovchini tushirish uchun piyodalar o'tish joyiga 8 m qolganda to'xtamoqchisiz. Bu:",
  ["Taqiqlanadi", "Ruxsat, chunki bu to'xtab turish emas, to'xtash", "Ruxsat, agar 1 daqiqadan oshmasa", "Ruxsat, agar o'tish joyida piyoda bo'lmasa"],
  "O'tish joyidan oldin 10 m dan kam masofada aynan to'xtash taqiqlangan, yo'lovchi tushirish ham istisno emas (YHQ 91-band).");
Q("stopping", "Velosiped yo'lkasi bilan kesishuvdan oldin qancha masofadan kamda to'xtash taqiqlanadi?",
  ["10 m", "5 m", "15 m", "30 m"],
  "Velosiped yo'lkasi bilan kesishuvda va undan oldin 10 m dan kam masofada to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Velosipedchilar uchun tasmada to'xtash:",
  ["Taqiqlanadi, odam tushirish va mindirish bundan mustasno", "Istisnosiz taqiqlanadi, odam tushirish uchun ham", "10 daqiqagacha ruxsat etiladi", "Yuk ortish va tushirish uchun qisqa muddatga ruxsat etiladi"],
  "Velosipedchilar tasmasida to'xtash taqiqlangan, faqat odam tushirish va mindirishga ruxsat bor (YHQ 91-band).");
Q("stopping", "Qatnov qismida ko'rinish masofasi qanchadan kam bo'lgan yo'l do'ngliklari yaqinida to'xtash taqiqlanadi?",
  ["100 m", "50 m", "150 m", "300 m"],
  "Ko'rinish masofasi 100 m dan kam bo'lgan do'ngliklar yaqinida to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Qatnov qismlari kesishmasida va kesishayotgan qatnov qismi chetiga qancha masofadan kamda to'xtash taqiqlanadi?",
  ["30 m", "10 m", "15 m", "50 m"],
  "Chorrahalarda va kesishayotgan qatnov qismi chetiga 30 m dan kam masofada to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Uch tomonlama chorrahada yondan tutashgan yo'lning qarama-qarshi tomoni sidirg'a chiziq bilan ajratilgan. O'sha tomonda 30 metrlik taqiq:",
  ["Qo'llanilmaydi", "Qo'llaniladi, 30 m dan yaqin to'xtash mumkin emas", "15 m gacha qisqartirilgan holda qo'llaniladi", "50 m gacha uzaytirilgan holda qo'llaniladi"],
  "Uch tomonlama chorrahalarda sidirg'a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomon 30 m taqiqdan mustasno (YHQ 91-band).");
Q("stopping", "Yo'nalishli transport bekati (1.17 chizig'i bo'lmasa — belgisi)dan oldin va keyin qancha masofadan kamda to'xtash taqiqlanadi?",
  ["15 m", "10 m", "20 m", "30 m"],
  "Bekat belgisidan harakat yo'nalishi bo'ylab yetmasdan va o'tib 15 m dan kam masofada to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Yo'nalishli transport bekati oldida qaysi holatda qisqa to'xtashga ruxsat bor?",
  ["Avtobusga xalaqit bermasa, yo'lovchi chiqarish-tushirish uchun", "Yuk ortish yoki tushirish uchun, 10 daqiqagacha", "Avtobus ko'rinmaguncha, istalgan maqsadda qisqa muddatga", "Faqat taksilar uchun, har qanday holatda"],
  "Bekat hududida yo'nalishli transportga xalaqit bermagan holda faqat yo'lovchi chiqarish-tushirish uchun to'xtash mumkin (YHQ 91-band).");
Q("stopping", "Avtobus bekati belgisidan 10 m o'tib, do'konga kirish uchun 3 daqiqaga to'xtadingiz. Bu:",
  ["Qoidabuzarlik — bekatdan keyin 15 m dan kam masofa", "Ruxsat — to'xtash 10 daqiqadan kam davom etgani uchun", "Ruxsat — taqiq faqat bekatdan oldin amal qiladi", "Ruxsat — avtobus yaqinlashmayotgan bo'lsa"],
  "15 m lik taqiq bekatdan yetmasdan ham, o'tib ketgandan keyin ham amal qiladi; istisno faqat yo'lovchi chiqarish-tushirish uchun (YHQ 91-band).");
Q("stopping", "Transport vositasi boshqa haydovchilardan svetofor yoki yo'l belgisini to'sib qo'yadigan joyda to'xtash:",
  ["Taqiqlanadi", "10 daqiqagacha ruxsat etiladi", "Avariya ishorasi yoqilsa ruxsat etiladi", "Yo'l yoqasida bo'lsa ruxsat etiladi"],
  "Svetofor ishoralari va belgilarni to'sib qo'yadigan joylarda to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Transport vositalarining qayrilib olish joylarida va ularga qancha masofa yetmasdan yoki o'tib to'xtash taqiqlanadi?",
  ["30 m", "10 m", "15 m", "50 m"],
  "Qayrilib olish joylarida va ularga 30 m yetmasdan yoki o'tib to'xtash taqiqlanadi (YHQ 91-band).");
Q("stopping", "Bu belgi ta'sir oralig'ida nima taqiqlanadi?",
  ["To'xtash ham, to'xtab turish ham", "Faqat to'xtab turish", "Faqat yuk avtomobillarining to'xtashi", "Faqat yo'l yoqasida to'xtash"],
  "3.27 belgisi ta'sir oralig'ida to'xtash taqiqlanadi, to'xtash taqiqlangan joyda to'xtab turish ham taqiqlanadi (YHQ 91-, 92-bandlar).", "nostopping");
Q("stopping", "Bu belgi ta'sir oralig'ida yo'lovchini tushirish uchun 2 daqiqaga to'xtash mumkinmi?",
  ["Mumkin — belgi faqat to'xtab turishni taqiqlaydi", "Mumkin emas — belgi to'xtashni ham taqiqlaydi", "Faqat taksilar uchun, 2 daqiqagacha mumkin", "Faqat avariya ishorasi bilan mumkin"],
  "3.28–3.30 belgilari to'xtab turishni taqiqlaydi, qisqa to'xtash esa ulardan taqiqlanmagan (YHQ 92-band).", "noparking");
Q("stopping", "Qatnov qismi chetidagi sariq yaxlit chiziq (1.4) nimani bildiradi?",
  ["To'xtash va to'xtab turish taqiqlanganini", "Faqat to'xtab turish taqiqlanganini", "Yo'nalishli transport bekati joyini", "Qatnov qismi chetini, to'xtash mumkinligini"],
  "1.4 chizig'i ta'siri oralig'ida to'xtash taqiqlanadi, demak to'xtab turish ham taqiqlanadi (YHQ 91-, 92-bandlar).", "m_yellow_solid");
Q("stopping", "Qatnov qismi chetidagi sariq uzuq chiziq (1.10) nimani bildiradi?",
  ["To'xtab turish taqiqlanganini", "To'xtash ham taqiqlanganini", "Yo'nalishli transport bekati joyini", "Faqat taksilar to'xtash joyini"],
  "1.10 chizig'i ta'siri oralig'ida to'xtab turish taqiqlanadi, qisqa to'xtashga esa yo'l qo'yiladi (YHQ 92-band).", "m_yellow_dashed");
Q("stopping", "Aholi punktidan tashqarida «Asosiy yo'l» belgisi bilan belgilangan yo'lning qatnov qismida to'xtab turish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Gabarit chiroqlari yoqilsa ruxsat etiladi", "Faqat yo'l yoqasida taqiqlanadi"],
  "Aholi punktidan tashqarida 2.1 belgisi bilan belgilangan yo'llarning qatnov qismida to'xtab turish taqiqlanadi (YHQ 92-band).", "mainroad");
Q("stopping", "Aholi punkti ichida «Asosiy yo'l» belgisi o'rnatilgan ko'chada (boshqa taqiqlar bo'lmasa) qatnov qismi chetida to'xtab turish:",
  ["Ruxsat etiladi — bu taqiq aholi punktidan tashqarida", "Taqiqlanadi — asosiy yo'lning hamma joyida, aholi punktida ham", "Faqat 10 daqiqagacha ruxsat etiladi", "Faqat yengil avtomobillarga taqiqlanadi"],
  "92-banddagi asosiy yo'l haqidagi to'xtab turish taqig'i faqat aholi punktlaridan tashqariga tegishli (YHQ 92-band).");
Q("stopping", "Temir yo'l kesishmasidan 40 m uzoqlikda yo'lovchini tushirish uchun 2 daqiqaga to'xtash:",
  ["Ruxsat etiladi — 50 m taqiq to'xtab turishga tegishli", "Taqiqlanadi — 50 m ichida to'xtash ham mumkin emas", "Taqiqlanadi — 100 m ichida to'xtash mumkin emas", "Faqat shlagbaum ochiq bo'lsa ruxsat etiladi"],
  "Kesishmaning o'zida to'xtash, 50 m yaqinida esa faqat to'xtab turish taqiqlanadi (YHQ 91-, 92-bandlar).");
Q("stopping", "To'xtash taqiqlangan joylarda to'xtab turish:",
  ["Ham taqiqlanadi", "Ruxsat etiladi", "Faqat 10 daqiqagacha ruxsat etiladi", "Faqat yo'l yoqasida ruxsat etiladi"],
  "To'xtab turish taqiqlangan joylar ro'yxatining birinchi bandi — to'xtash taqiqlangan joylar (YHQ 92-band).");
Q("stopping", "5.15 va 7.17 belgilari birgalikda o'rnatilgan joyda kim to'xtashi va to'xtab turishi mumkin?",
  ["Nogironligi bo'lgan shaxslar boshqarayotgan transport vositalari", "Barcha yengil avtomobillar, lekin faqat 10 daqiqagacha bo'lgan muddatga", "Faqat taksilar, yo'lovchi kutish uchun", "Faqat maxsus xizmat avtomobillari"],
  "5.15 va 7.17 belgilari yoki 1.24 chizig'i ta'sirida to'xtash va to'xtab turish taqiqlanadi, nogironligi bo'lgan shaxslar boshqaradigan vositalar bundan mustasno (YHQ 91-, 92-bandlar).");
Q("stopping", "Transport vositasi eshigini ochish qachon taqiqlanadi?",
  ["Boshqa harakat qatnashchilariga xalaqit bersa yoki xavf tug'dirsa", "Dvigatel ishlab turgan bo'lsa, har doim", "Faqat qatnov qismi tomondagi eshikni ochish, trotuar tomonini emas", "Faqat transport harakatlanayotganda"],
  "Eshikni ochish boshqa harakat ishtirokchilariga xalaqit yoki xavf tug'dirganda taqiqlanadi (YHQ 94-band).");
Q("stopping", "Siz chap eshikni ochmoqchisiz, orqadan yonginangizdan velosipedchi kelmoqda. To'g'ri harakat:",
  ["Velosipedchi o'tib ketgach eshikni ochish", "Eshikni sekin, ozgina ochish", "Ovozli signal berib eshikni ochish", "Avariya ishorasini yoqib eshikni ochish"],
  "Eshikni ochish boshqalarga xavf tug'dirsa taqiqlanadi, shuning uchun velosipedchi o'tib ketishini kutish kerak (YHQ 94-band).");
Q("stopping", "Haydovchi o'z joyini tashlab ketishidan oldin nima qilishi shart?",
  ["O'z-o'zidan yurib ketish va begona foydalanishni istisno qilishi", "Faqat avariya ishorasini yoqib, avariya to'xtash belgisini qo'yishi", "Faqat avariya to'xtash belgisini qo'yishi", "Faqat gabarit chiroqlarini yoqib qo'yishi"],
  "Haydovchi vositaning o'z-o'zidan harakatlanib ketishi va ruxsatsiz foydalanishni istisno qiluvchi choralarni ko'rgandan keyingina joyini tark etadi (YHQ 95-band).");

// ===================== CHORRAHALAR (YHQ 14–16-boblar) =====================
Q("junction", "Chapga yoki o'ngga burilayotgan haydovchi kimga yo'l berishi shart?",
  ["Kesishayotgan yo'ldan o'tayotgan piyodalar va velosipedchilarga", "Faqat piyodalar o'tish joyi chizilgan bo'lsa, piyodalarga", "Faqat orqadan kelayotgan transport vositalariga", "Faqat yo'lovchi tashuvchi transport vositalariga"],
  "Burilayotgan haydovchi burilayotgan yo'lni kesib o'tayotgan piyodalarga, velosipedchilarga va individual harakatlanish vositasidagilarga yo'l beradi (YHQ 96-band).");
Q("junction", "O'ngga burilyapsiz, burilayotgan ko'changizning velosiped yo'lkasidan elektr samokatdagi shaxs yo'lni kesib o'tmoqda. Siz:",
  ["Unga yo'l berasiz", "U sizga yo'l beradi, chunki u transport vositasi emas", "Ovozli signal berib o'tasiz", "Faqat svetofor bo'lsa yo'l berasiz"],
  "Burilishda individual harakatlanish vositalarini boshqarayotgan shaxslarga ham yo'l beriladi (YHQ 96-band).");
Q("junction", "Svetoforning yashil ishorasida o'ngga burilyapsiz, burilayotgan ko'chani piyodalar o'z yashil ishorasida kesib o'tmoqda. Siz:",
  ["To'xtab, piyodalarga yo'l berasiz", "Yashil ishora sizga ham yongani uchun o'tasiz", "Ovozli signal berib, piyodalarni to'xtatasiz", "Piyodalarning orasidan sekin o'tasiz"],
  "Burilayotgan haydovchi kesishayotgan qatnov qismini kesib o'tayotgan piyodalarga yo'l berishi shart (YHQ 96-band).");
Q("junction", "Chorrahadan keyin tirbandlik bor va siz chorrahada to'xtab, ko'ndalang harakatga to'sqinlik qilishingiz mumkin. Siz:",
  ["Chorrahaga kirmasligingiz kerak", "Yashil ishorada chorrahaga kirishingiz mumkin", "Avariya ishorasini yoqib kirishingiz mumkin", "Faqat o'ng chetdan kirishingiz mumkin"],
  "Tirbandlik tufayli chorrahada to'xtab, ko'ndalang harakatga to'sqinlik qiladigan bo'lsa chorrahaga kirish taqiqlanadi (YHQ 97-band).");
Q("junction", "Svetofor yashil, lekin chorraha ortidagi ko'chada mashinalar to'xtab turibdi va siz chorraha o'rtasida qolib ketishingiz aniq. To'g'ri harakat:",
  ["To'xtash chizig'i oldida kutib turish", "Yashil yonayotgan ekan, chorrahaga kirish", "Chorraha o'rtasigacha kirib, keyin kutish", "Ovozli signal berib, oldingilarni shoshirish"],
  "Yashil ishora tirbandlikka chiqishga ruxsat bermaydi: ko'ndalang harakatga to'sqinlik qiladigan bo'lsa chorrahaga kirish taqiqlanadi (YHQ 97-band).");
Q("junction", "To'xtash chizig'idan (yoki 5.33 belgisidan) o'tib bo'lgan haydovchi oldida tirbandlik paydo bo'lsa:",
  ["Qatnov qismlari kesishmasiga kirishi taqiqlanadi", "Kesishmaga kirib, uning o'rtasida kutishi mumkin", "Orqaga yurib, to'xtash chizig'iga qaytishi shart", "Chap tasmaga o'tib, tirbandlikni aylanib o'tishi mumkin"],
  "To'xtash chizig'idan o'tgan haydovchiga ham tirbandlik bo'lsa qatnov qismlari kesishmasiga kirish taqiqlanadi (YHQ 97-band).");
Q("junction", "Qanday chorraha tartibga solingan hisoblanadi?",
  ["Navbat svetofor yoki tartibga soluvchi bilan boshqariladigan", "Navbat imtiyoz belgilari bilan belgilangan", "Sariq ishorasi miltillab turgan svetoforli", "Asosiy va ikkinchi darajali yo'llar belgilar bilan kesishgan"],
  "Harakat navbati svetofor yoki tartibga soluvchi ishoralari bilan belgilanadigan chorraha tartibga solingan hisoblanadi (YHQ 98-band).");
Q("junction", "Svetoforda sariq ishora miltillab turgan chorraha qanday hisoblanadi?",
  ["Tartibga solinmagan", "Tartibga solingan", "Teng huquqli bo'lishi shart", "Aylanma harakatli"],
  "Miltillovchi sariq ishorali, svetoforlari ishlamayotgan yoki tartibga soluvchisi bo'lmagan chorraha tartibga solinmagan hisoblanadi (YHQ 98-band).");
Q("junction", "Chorrahada svetofor ishlamayapti, tartibga soluvchi yo'q. Haydovchilar nimaga amal qiladi?",
  ["Tartibga solinmagan chorraha qoidalari va o'rnatilgan imtiyoz belgilariga", "Faqat o'ngdan kelayotganga yo'l berish qoidasiga, belgilardan qat'i nazar", "Svetofor tuzatilguncha chorrahaga kirmaslik qoidasiga", "Faqat to'g'riga harakatlanayotganlarning ustunligiga"],
  "Svetofor ishlamasa chorraha tartibga solinmagan bo'ladi va haydovchilar tegishli qoidalarga hamda imtiyoz belgilariga amal qiladi (YHQ 98-band).");
Q("junction", "Svetofor o'chgan, sizning yo'lingizda shu belgi o'rnatilgan. O'ng tomondagi ko'chadan avtomobil chiqmoqda. Kim birinchi o'tadi?",
  ["Siz — siz asosiy yo'ldasiz", "O'ngdagi avtomobil — o'ngdan kelayotganga yo'l beriladi", "Kim birinchi yetib kelgan bo'lsa", "Ikkovingiz ham to'xtab, kelishib o'tasiz"],
  "Svetofor ishlamasa imtiyoz belgilariga amal qilinadi; ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagiga yo'l beradi (YHQ 98-, 104-bandlar).", "mainroad");
Q("junction", "Sariq ishora miltillayotgan chorrahada imtiyoz belgilari yo'q, ikkala yo'l ham asfaltlangan. Qanday qoida amal qiladi?",
  ["O'ngdan yaqinlashayotgan transportga yo'l berish qoidasi", "Kengroq yo'ldagilar ustunligi qoidasi", "To'g'riga harakatlanayotganlar ustunligi", "Kim birinchi chorrahaga kirsa, o'sha birinchi o'tadi"],
  "Miltillovchi sariq ishorali chorraha tartibga solinmagan; belgilar bo'lmasa yo'llar teng ahamiyatli va o'ngdagiga yo'l beriladi (YHQ 98-, 105-bandlar).");
Q("junction", "Aylanma harakatli chorrahada kim ustunlikka ega?",
  ["Aylana bo'ylab harakatlanayotgan transport vositalari", "Aylanaga o'ng tomondan kirib kelayotgan transport vositalari", "O'ng tomondan kelayotgan transport vositalari", "Kattaroq o'lchamdagi transport vositalari"],
  "Aylanma chorrahada aylana bo'ylab harakatlanayotganlar aylanaga kirib kelayotganlarga nisbatan ustun (YHQ 98-band).");
Q("junction", "Siz aylanma harakatli chorrahaga kirmoqchisiz, aylanada chap tomoningizdan avtomobil yaqinlashmoqda. Kim birinchi o'tadi?",
  ["Aylanadagi avtomobil — siz unga yo'l berasiz", "Siz — chunki u uchun siz o'ng tomondasiz", "Kim birinchi yetib kelsa", "Siz — chunki siz to'g'riga harakatlanyapsiz"],
  "Aylanma chorrahada o'ngdagi qoidasi emas, aylanadagilarning ustunligi amal qiladi (YHQ 98-band).");
Q("junction", "Svetoforning yashil ishorasida chapga burilayotgan relssiz transport haydovchisi kimga yo'l berishi shart?",
  ["Qarama-qarshi tomondan to'g'riga va o'ngga harakatlanayotganlarga", "Faqat qarama-qarshi tomondan to'g'riga harakatlanayotganlarga", "Faqat o'ng tomondan kelayotganlarga", "Hech kimga — yashil ishora unga ham yongan"],
  "Yashil ishorada chapga burilayotgan yoki qayrilayotgan haydovchi qarshidan to'g'riga va o'ngga ketayotganlarga yo'l beradi (YHQ 99-band).");
Q("junction", "Svetoforning yashil ishorasida qayrilib olayotgan (U-burilish) haydovchi:",
  ["Qarama-qarshi tomondan to'g'riga va o'ngga ketayotganlarga yo'l beradi", "Chapga burilayotganlardan ustun, hech kimga yo'l bermaydi", "Faqat orqasidan kelayotganlarga yo'l beradi", "Qarama-qarshi tomondagi chapga burilayotganlargagina yo'l beradi"],
  "99-band qoidasi chapga burilish bilan bir qatorda qayrilib olishga ham tegishli (YHQ 99-band).");
Q("junction", "Yashil ishorada siz to'g'riga ketyapsiz, qarshidan kelayotgan avtomobil chapga burilmoqchi. Kim birinchi o'tadi?",
  ["Siz — chapga burilayotgan sizga yo'l beradi", "Chapga burilayotgan avtomobil — u chorrahaga birinchi kirgan", "Kim tezroq bo'lsa", "Ikkovingiz bir vaqtda o'tasiz"],
  "Yashil ishorada chapga burilayotgan haydovchi qarshidan to'g'riga harakatlanayotganlarga yo'l berishi shart (YHQ 99-band).");
Q("junction", "Yashil ishorada siz chapga burilyapsiz, qarshidan kelayotgan avtomobil o'ngga burilmoqda. Kim birinchi o'tadi?",
  ["Qarshidan o'ngga burilayotgan avtomobil", "Siz — chunki u o'ngga burilib, yo'lingizni kesmaydi", "Siz — chunki chap burilish ustun", "Kim birinchi chorrahaga kirgan bo'lsa"],
  "Chapga burilayotgan haydovchi qarshidan nafaqat to'g'riga, balki o'ngga harakatlanayotganlarga ham yo'l beradi (YHQ 99-band).");
Q("junction", "Chapga burilayotgan tramvay haydovchisi svetoforning ruxsat etuvchi ishorasida qarshidan to'g'riga kelayotgan tramvayga nisbatan:",
  ["Unga yo'l beradi", "Ustunlikka ega", "Faqat o'ngdan kelsa yo'l beradi", "Kim birinchi kelsa, o'sha o'tadi"],
  "Chapga burilishda qarshidan kelayotganlarga yo'l berish qoidasiga tramvay haydovchilari ham amal qilishi kerak (YHQ 99-band).");
Q("junction", "Svetoforning qizil ishorasi bilan birga qo'shimcha seksiyaning yashil strelkasi yondi. Strelka yo'nalishida harakatlanayotgan haydovchi:",
  ["Boshqa yo'nalishlardan harakatlanayotganlarga yo'l beradi", "Ustunlikka ega, unga hamma yo'l beradi", "Avval to'liq to'xtashi, keyin ustun bo'lib o'tishi kerak", "Faqat qarshidan kelayotganlarga yo'l beradi"],
  "Taqiqlovchi ishora bilan yongan qo'shimcha seksiya strelkasi bo'yicha harakatlanuvchi boshqa yo'nalishlardagilarga yo'l beradi (YHQ 100-band).", "rightonly");
Q("junction", "Asosiy svetoforda sariq yonib turibdi, qo'shimcha seksiyada esa o'ngga yashil strelka yongan. Strelka bo'yicha o'ngga burilayotgan haydovchi:",
  ["Boshqa yo'nalishlardan kelayotganlarga yo'l beradi", "Sariq ishora tufayli harakatlana olmaydi", "Strelka yongani uchun hamma unga yo'l berishi shart", "Faqat piyodalarga yo'l beradi, transportga emas"],
  "Qizil yoki sariq ishora bilan bir vaqtda yongan strelka bo'yicha harakatlanuvchi boshqa yo'nalishlardagilarga yo'l berishi kerak (YHQ 100-band).");
Q("junction", "Qizil ishorada o'ngga yashil strelka bo'yicha burilyapsiz; chap tomondan kesishayotgan yo'ldan avtomobil o'z yashil ishorasida to'g'riga kelmoqda. Kim birinchi o'tadi?",
  ["Chapdan kelayotgan avtomobil", "Siz — strelka sizga ruxsat bergan", "Siz — chunki u siz uchun chap tomonda", "Kim birinchi kirgan bo'lsa"],
  "Qo'shimcha seksiya strelkasi bo'yicha harakatlanuvchi boshqa yo'nalishlardan kelayotganlarga yo'l beradi (YHQ 100-band).");
Q("junction", "Svetofor ishoralari tramvay va relssiz transportga bir vaqtda ruxsat bersa, kim oldin o'tadi?",
  ["Tramvay — harakatlanish yo'nalishidan qat'i nazar", "Relssiz transport — tramvay har doim yo'l beradi", "O'ng tomondan kelayotgan vosita", "To'g'riga harakatlanayotgan vosita"],
  "Bir vaqtda ruxsat berilganda tramvay yo'nalishidan qat'i nazar oldin o'tish huquqiga ega (YHQ 101-band).");
Q("junction", "Svetoforning qizil ishorasi bilan birga yongan qo'shimcha seksiya strelkasi bo'yicha harakatlanayotgan tramvay:",
  ["Boshqa yo'nalishlardagi transport vositalariga yo'l beradi", "Har qanday holatda ustunlikka ega", "Faqat piyodalarga, transportga esa yo'l bermaydi", "Faqat chap tomondan kelayotgan transport vositalariga yo'l beradi"],
  "Strelka bo'yicha harakatlanayotgan tramvay ham boshqa yo'nalishlardagilarga yo'l berishi kerak (YHQ 101-band).");
Q("junction", "Yashil ishorada o'ngga burilyapsiz, yoningizdan to'g'riga tramvay ham yashil ishorada ketmoqda va burilishingiz uning yo'lini kesadi. Kim birinchi?",
  ["Tramvay", "Siz — chunki siz o'ng tomondasiz", "Siz — tramvay o'ngga buriluvchiga yo'l beradi", "Kim birinchi chorrahaga kirsa"],
  "Svetofor bir vaqtda ruxsat berganda tramvay yo'nalishidan qat'i nazar ustun (YHQ 101-band).");
Q("junction", "Ruxsat etuvchi ishorada chorrahaga kirgan haydovchi undan chiqishda:",
  ["Svetofordan qat'i nazar mo'ljallangan yo'nalishda chiqadi", "Qizil ishora yonsa, chorraha o'rtasida to'xtaydi", "Ishora o'zgarsa, orqaga qaytadi", "Faqat sariq ishora yongunicha chiqib ulgurishi kerak"],
  "Ruxsat etuvchi ishorada kirgan haydovchi chiqishda svetofordan qat'i nazar mo'ljallangan yo'nalishda harakatni yakunlaydi (YHQ 102-band).");
Q("junction", "Chorrahada harakatlanish yo'lingizdagi ichki svetofor oldida to'xtash chizig'i bor. Siz nima qilasiz?",
  ["Har bir svetofor ishorasiga amal qilasiz", "Kirishdagi yashil ishora bo'yicha to'xtamay chiqasiz", "Ichki svetoforlarga faqat tramvay amal qiladi", "Ichki svetofor qizil bo'lsa ham sekinlashib o'tasiz"],
  "Chorrahadagi svetoforlar oldida to'xtash chiziqlari (yoki 5.33 belgisi) bo'lsa, haydovchi har bir svetofor ishorasiga amal qilishi shart (YHQ 102-band).");
Q("junction", "Siz yashil ishorada chorrahaga kirdingiz va chapga burilish uchun qarshi oqimni kutib turibsiz, ishora qizilga o'zgardi (ichki to'xtash chizig'i yo'q). Siz:",
  ["Qarshi oqimga xalaqit bermay burilishni yakunlaysiz", "Yashil yonguncha chorrahada kutasiz", "Orqaga yurib, to'xtash chizig'i oldiga qaytib turasiz", "To'g'riga ketib, chorrahadan chiqasiz"],
  "Ruxsat etuvchi ishorada kirgan haydovchi svetofordan qat'i nazar mo'ljallangan yo'nalishda chorrahadan chiqadi (YHQ 102-band).");
Q("junction", "Svetoforning yashil ishorasi yonganda haydovchi kimga yo'l berishi shart?",
  ["Chorrahadan o'tishni tugallayotgan transport va piyodalarga", "Faqat chorrahadagi tramvaylarga, piyodalarga emas", "Faqat o'ng tomondan kelayotganlarga", "Hech kimga — yashil ishora unga to'liq ustunlik beradi"],
  "Ruxsat etuvchi ishora yonganda ham haydovchi harakatini tugallayotgan transport va piyodalarga yo'l beradi (YHQ 103-band).");
Q("junction", "Sizga yashil yondi, ammo ko'ndalang yo'nalishdan bir avtomobil hali chorrahadan chiqib ulgurmagan. Siz:",
  ["U chorrahadan chiqishini kutasiz", "Yashil yongani uchun harakatni boshlaysiz", "Ovozli signal berib, uni shoshirasiz", "Uni orqa tomonidan aylanib o'tasiz"],
  "Ruxsat etuvchi ishora yonganda chorrahadan o'tishni tugallayotgan transport vositalariga yo'l beriladi (YHQ 103-band).");
Q("junction", "Teng ahamiyatga ega bo'lmagan yo'llar chorrahasida ikkinchi darajali yo'ldagi haydovchi:",
  ["Asosiy yo'ldagilarga, ularning yo'nalishidan qat'i nazar, yo'l beradi", "Asosiy yo'ldagilardan faqat o'ngdan kelayotganlarga yo'l beradi", "Asosiy yo'ldagilardan faqat to'g'riga ketayotganlarga yo'l beradi", "O'ngga burilsa, hech kimga yo'l bermaydi"],
  "Ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagilarga ularning keyingi yo'nalishidan qat'i nazar yo'l beradi (YHQ 104-band).");
Q("junction", "Siz ikkinchi darajali yo'ldan o'ngga burilyapsiz. Asosiy yo'lda chapdan kelayotgan avtomobil ham aynan sizning yo'lingizga burilmoqchi. Kim birinchi?",
  ["Asosiy yo'ldagi avtomobil", "Siz — chunki u siz uchun chap tomonda", "Siz — chunki u ham sizning yo'lingizga kiradi", "Kim birinchi yetib kelsa"],
  "Asosiy yo'ldagilarga ularning keyingi harakat yo'nalishidan qat'i nazar yo'l beriladi (YHQ 104-band).");
Q("junction", "Siz asosiy yo'lda to'g'riga ketyapsiz, o'ng tomondagi ikkinchi darajali yo'ldan avtomobil chiqmoqda. Kim birinchi o'tadi?",
  ["Siz", "O'ngdagi avtomobil — o'ngdagiga yo'l beriladi", "Kim birinchi chorrahaga kirsa", "Kattaroq transport vositasi"],
  "Teng bo'lmagan yo'llar chorrahasida o'ngdagi qoidasi emas, asosiy yo'l ustunligi amal qiladi (YHQ 104-band).");
Q("junction", "Siz ikkinchi darajali yo'ldasiz. Asosiy yo'lda A avtomobil (sizning ko'changizga) chapga burilmoqda, B avtomobil esa A ga qarshi to'g'riga ketmoqda. O'tish tartibi:",
  ["B, A, keyin siz", "A, B, keyin siz", "Siz, B, keyin A", "B, siz, keyin A"],
  "Siz ikkalasiga ham yo'l berasiz; asosiy yo'ldagi A chapga burilayotgani uchun qarshidan to'g'riga kelayotgan B ga yo'l beradi (YHQ 104-, 107-bandlar).");
Q("junction", "Siz asosiy yo'lda chapga burilyapsiz, qarshidan asosiy yo'l bo'ylab avtomobil to'g'riga kelmoqda, o'ngdagi ikkinchi darajali yo'lda esa yana bir avtomobil turibdi. Tartib:",
  ["Qarshidagi avtomobil, siz, keyin ikkinchi darajali yo'ldagi", "Siz, qarshidagi, keyin ikkinchi darajali yo'ldagi", "Ikkinchi darajali yo'ldagi, qarshidagi, keyin siz", "Qarshidagi, ikkinchi darajali yo'ldagi, keyin siz"],
  "Ikkinchi darajali yo'ldagi ikkalangizga yo'l beradi; chapga burilayotgan siz qarshidan to'g'riga kelayotganga yo'l berasiz (YHQ 104-, 107-bandlar).");
Q("junction", "Teng ahamiyatga ega bo'lmagan yo'llar chorrahasida bir xil ahamiyatli yo'lda harakatlanayotgan tramvay va avtomobildan kim ustun?",
  ["Tramvay — harakat yo'nalishidan qat'i nazar", "Avtomobil — agar u o'ng tomonda bo'lsa", "Avtomobil — agar u to'g'riga ketsa", "Tramvay — faqat to'g'riga ketsa"],
  "Bunday chorrahalarda tramvay teng ahamiyatli yo'lda bir yoki qarama-qarshi yo'nalishda harakatlanayotgan relssiz transportdan ustun (YHQ 104-band).");
Q("junction", "Tramvay ikkinchi darajali yo'ldan chorrahaga yaqinlashmoqda, siz asosiy yo'ldasiz. Kim birinchi o'tadi?",
  ["Siz — asosiy yo'ldagi transport ustun", "Tramvay — u har doim ustun", "Tramvay — agar u to'g'riga ketsa", "Kim o'ng tomonda bo'lsa"],
  "Tramvayning ustunligi teng ahamiyatli yo'ldagi relssiz transportga nisbatan; ikkinchi darajali yo'ldagi har qanday vosita asosiy yo'ldagiga yo'l beradi (YHQ 104-band).");
Q("junction", "Teng ahamiyatga ega bo'lgan yo'llar chorrahasida relssiz transport haydovchisi kimga yo'l berishi shart?",
  ["O'ngdan yaqinlashayotgan transport vositalariga", "Chapdan yaqinlashayotgan transport vositalariga", "Faqat qarshidan to'g'riga kelayotganlarga", "Kengroq ko'chadan kelayotganlarga"],
  "Teng ahamiyatli yo'llar chorrahasida o'ngdan yaqinlashayotganga yo'l beriladi (YHQ 105-band).");
Q("junction", "Teng ahamiyatli yo'llar chorrahasida ikki tramvay kesishgan yo'llardan yaqinlashmoqda. Ular o'zaro qanday o'tadi?",
  ["O'ngdan yaqinlashayotgan tramvayga yo'l beriladi", "Chapdan yaqinlashayotgan tramvay ustun", "Ko'proq yo'lovchisi bor tramvay ustun", "To'g'riga ketayotgan tramvay har doim ustun"],
  "O'ngdagiga yo'l berish qoidasiga tramvay haydovchilari ham o'zaro amal qiladi (YHQ 105-band).");
Q("junction", "Teng ahamiyatli yo'llar chorrahasida tramvay chap tomondan, siz esa o'ng tomondan yaqinlashmoqdasiz. Kim birinchi o'tadi?",
  ["Tramvay — keyingi yo'nalishidan qat'i nazar", "Siz — chunki siz uning o'ng tomonidasiz", "Siz — agar to'g'riga ketsangiz", "Tramvay — faqat to'g'riga ketsa"],
  "Teng ahamiyatli yo'llar chorrahasida tramvay relssiz transportga nisbatan keyingi yo'nalishidan qat'i nazar ustun (YHQ 105-band).");
Q("junction", "Teng ahamiyatli chorrahada siz to'g'riga ketyapsiz, o'ng tomondan avtomobil to'g'riga kelmoqda. Kim birinchi?",
  ["O'ngdan kelayotgan avtomobil", "Siz — chunki chorrahaga birinchi yaqinlashdingiz", "Siz — chunki ikkovingiz to'g'riga ketyapsiz", "Kengroq yo'ldagi"],
  "Teng ahamiyatli yo'llar chorrahasida o'ngdan yaqinlashayotganga yo'l beriladi (YHQ 105-band).", "w_equal");
Q("junction", "Teng ahamiyatli chorrahada siz to'g'riga ketyapsiz, chap tomondan avtomobil to'g'riga kelmoqda. Kim birinchi?",
  ["Siz — siz uning o'ng tomonidasiz", "Chapdan kelayotgan avtomobil — u birinchi yetdi", "Kim birinchi yetib kelsa", "Ikkovingiz to'xtab, kelishasiz"],
  "Chapdan kelayotgan haydovchi uchun siz o'ng tomondasiz, shuning uchun u sizga yo'l beradi (YHQ 105-band).");
Q("junction", "Teng ahamiyatli chorrahaga uch avtomobil to'g'riga harakatlanish uchun yaqinlashdi: siz (janubdan), A (sizning o'ng tomoningizdan), B (sizning chap tomoningizdan). Tartib:",
  ["A, siz, keyin B", "B, siz, keyin A", "Siz, A, keyin B", "A, B, keyin siz"],
  "Siz o'ngingizdagi A ga yo'l berasiz, A ning o'ng tomonida hech kim yo'q; B uchun siz o'ng tomondasiz, shuning uchun B oxirgi (YHQ 105-band).");
Q("junction", "Teng ahamiyatli chorrahada siz chapga burilyapsiz, o'ng tomondan va qarshidan avtomobillar to'g'riga kelmoqda. Siz kimga yo'l berasiz?",
  ["Ikkalasiga ham", "Faqat o'ngdagiga", "Faqat qarshidagiga", "Hech kimga — chapga burilish ustun"],
  "O'ngdagiga yo'l berish (105) va chapga burilishda qarshidan to'g'riga kelayotganga yo'l berish (107) talablari birgalikda amal qiladi (YHQ 105-, 107-bandlar).");
Q("junction", "Teng ahamiyatli yo'llar chorrahasida chapga burilayotgan yoki qayrilib olayotgan haydovchi kimga yo'l berishi shart?",
  ["Qarshidan to'g'riga yoki o'ngga harakatlanayotganlarga", "Faqat qarshidan chapga burilayotganlarga", "Faqat orqadan kelayotganlarga", "Faqat qarshidan to'g'riga harakatlanayotganlarga"],
  "Chapga burilish va qayrilishda teng ahamiyatli yo'ldan qarshidan to'g'riga yoki o'ngga ketayotganlarga yo'l beriladi (YHQ 107-band).");
Q("junction", "Teng ahamiyatli chorrahada siz to'g'riga ketyapsiz, qarshidan kelayotgan avtomobil chapga burilmoqchi. Kim birinchi?",
  ["Siz", "Qarshidagi avtomobil — u sizning chap tomoningizda emas", "Kim birinchi kirsa", "Qarshidagi — chunki burilish manyovri ustun"],
  "Chapga burilayotgan haydovchi qarshidan to'g'riga harakatlanayotganga yo'l beradi (YHQ 107-band).");
Q("junction", "Teng ahamiyatli chorrahada siz chapga burilyapsiz, qarshidagi avtomobil o'ngga burilmoqda. Kim birinchi o'tadi?",
  ["Qarshidagi avtomobil", "Siz — u siz uchun o'ng tomonda emas", "Siz — chunki u sizning yo'lingizni kesmaydi", "Kim tezroq bo'lsa"],
  "Chapga burilayotgan haydovchi qarshidan o'ngga burilayotganlarga ham yo'l berishi shart (YHQ 107-band).");
Q("junction", "Asosiy yo'lning yo'nalishi chorrahada o'zgarganda (asosiy yo'l buriladi), asosiy yo'lda harakatlanayotgan haydovchilar o'zaro:",
  ["Teng ahamiyatli yo'llar chorrahasi qoidasiga amal qiladi", "To'g'riga ketayotgan har doim ustun bo'ladi", "Ikkinchi darajali yo'l qoidasiga amal qiladi", "Asosiy yo'l bo'ylab burilayotgan har doim ustun bo'ladi"],
  "Asosiy yo'l chorrahada yo'nalishini o'zgartirsa, undagi haydovchilar o'zaro teng ahamiyatli yo'llar qoidasi bo'yicha o'tadi (YHQ 106-band).");
Q("junction", "Asosiy yo'l yo'nalishini o'zgartiradigan chorrahada ikkinchi darajali yo'llardagi haydovchilar o'zaro qanday o'tadi?",
  ["Teng ahamiyatli yo'llar chorrahasi qoidasi bo'yicha", "Kattaroq transport vositasi birinchi o'tadi", "Chapdan kelayotgan birinchi o'tadi", "Asosiy yo'l bo'shashi bilan bir vaqtda hammasi o'tadi"],
  "Ikkinchi darajali yo'llardagi haydovchilar ham o'zaro teng ahamiyatli yo'llar qoidasiga amal qiladi (YHQ 106-band).");
Q("junction", "Ikkinchi darajali yo'lda siz to'g'riga ketyapsiz, qarshingizdagi ikkinchi darajali yo'ldan avtomobil chapga burilmoqchi; asosiy yo'l bo'sh. Kim birinchi?",
  ["Siz — chapga burilayotgan sizga yo'l beradi", "Qarshidagi avtomobil — u birinchi yetib keldi", "Ikkovingiz bir vaqtda o'tasiz", "Kim o'ng tomonda bo'lsa, faqat o'sha"],
  "Ikkinchi darajali yo'llardagilar o'zaro teng ahamiyatli yo'llar qoidasiga amal qiladi; chapga burilayotgan qarshidan to'g'riga ketayotganga yo'l beradi (YHQ 106-, 107-bandlar).");
Q("junction", "Qorong'ida yoki qor tufayli yo'lingizda qoplama bor-yo'qligini aniqlay olmayapsiz, imtiyoz belgilari yo'q. Siz o'zingizni:",
  ["Ikkinchi darajali yo'lda deb hisoblaysiz", "Asosiy yo'lda deb hisoblaysiz", "Teng ahamiyatli yo'lda deb hisoblaysiz", "Faqat o'ngdagiga nisbatan ustun deb hisoblaysiz"],
  "Qoplamani aniqlab bo'lmasa va imtiyoz belgilari bo'lmasa, haydovchi o'zini ikkinchi darajali yo'lda deb hisoblashi kerak (YHQ 108-band).");
Q("junction", "Imtiyoz belgilari bo'lmagan chorrahada tuproq yo'ldan asfalt yo'lga chiqyapsiz. Asfalt yo'lda chapdan avtomobil kelmoqda. Kim birinchi?",
  ["Asfalt yo'ldagi avtomobil", "Siz — chunki u siz uchun chap tomonda", "Kim birinchi yetib kelsa", "Siz — agar to'g'riga ketsangiz"],
  "Qattiq qoplamali yo'l tuproqli yo'lga nisbatan asosiy hisoblanadi, shuning uchun o'ngdagi qoidasi qo'llanmaydi (YHQ 6-, 104-bandlar).");
Q("junction", "Ikkinchi darajali tuproq yo'lning chorrahaga tutashgan kichik qismi asfaltlangan. Bu yo'l asosiy yo'lga nisbatan:",
  ["Baribir ikkinchi darajali bo'lib qoladi", "Teng ahamiyatli bo'lib qoladi", "Asosiy yo'lga aylanadi", "Teng ahamiyatli, agar asfalt qismi 20 m dan uzun bo'lsa"],
  "Ikkinchi darajali yo'lning bevosita chorrahaga tutash qismining qoplamali bo'lishi uni asosiy yo'l bilan teng huquqli qilmaydi (YHQ 6-band).");
Q("junction", "Yonilg'i quyish shoxobchasidan yo'lga chiqayotgan haydovchi kimga yo'l beradi?",
  ["Barcha yo'l harakati ishtirokchilariga", "Faqat chapdan kelayotgan transportga", "Faqat o'ngdan kelayotgan transportga", "Faqat trotuardagi piyodalarga"],
  "Yondosh hududdan chiqayotgan transport vositalari barcha yo'l harakati ishtirokchilariga yo'l berishi shart (YHQ 6-band).");
Q("junction", "Hovlidan chiqish joyining yo'l bilan tutashgan yeri chorraha hisoblanadimi?",
  ["Yo'q, bunday chiqish joylari chorraha hisoblanmaydi", "Ha, yo'llarning har qanday tutashuvi chorraha hisoblanadi", "Ha, agar chiqish asfaltlangan bo'lsa", "Faqat svetofor o'rnatilgan bo'lsa"],
  "Ta'rifga ko'ra yondosh hududlardan chiqish joylari chorraha hisoblanmaydi (YHQ 6-band).");
Q("junction", "Qaysi yo'l unga kesishayotgan yo'lga nisbatan asosiy yo'l hisoblanadi?",
  ["Tuproq yoki shag'alli yo'lga nisbatan qattiq qoplamali yo'l", "Kengroq va ko'proq tasmali qatnov qismiga ega bo'lgan yo'l", "Transport harakati jadalroq bo'lgan yo'l", "Tramvay yo'li o'tmagan yo'l"],
  "Asosiy yo'l — tuproq yoki shag'alli yo'lga nisbatan qattiq qoplamali yo'l, belgilar bilan belgilangan yoki yondosh hududdan chiqadigan yo'lga nisbatan har qanday yo'l (YHQ 6-band).");
Q("junction", "Quyidagilardan qaysi biri yo'lni kesishayotgan yo'lga nisbatan asosiy deb belgilaydi?",
  ["«Asosiy yo'l» belgisi (2.1)", "«Yo'l bering» belgisi", "«Teng huquqli yo'llar kesishmasi» ogohlantiruvchi belgisi", "«Asosiy yo'lning oxiri» belgisi"],
  "Asosiy yo'l 2.1, 2.3.1–2.3.3 yoki 5.1 belgilari bilan belgilanadi (YHQ 6-band).");
Q("junction", "Bu belgi o'rnatilgan yo'ldan chorrahaga chiqayotgan haydovchi:",
  ["Kesishayotgan asosiy yo'ldagi transportga yo'l beradi", "Faqat o'ng tomondan kelayotganlarga yo'l beradi", "Chapga burilgandagina yo'l beradi", "Ustunlikka ega, unga yo'l berishadi"],
  "«Yo'l bering» belgisi siz ikkinchi darajali yo'lda ekaningizni bildiradi, demak asosiy yo'ldagilarga yo'l berasiz (YHQ 104-band).", "giveway");
Q("junction", "Bu belgi oldida to'xtagan haydovchi chorrahada kimga yo'l beradi?",
  ["Kesishayotgan asosiy yo'ldagi transportga", "Faqat o'ng tomondan kelayotganlarga", "Faqat tramvaylarga", "Hech kimga — to'xtagani yetarli"],
  "«To'xtamasdan harakatlanish taqiqlangan» belgisi ikkinchi darajali yo'lda o'rnatiladi; to'xtagandan keyin ham asosiy yo'ldagilarga yo'l beriladi (YHQ 104-band).", "stop");
Q("junction", "Bu belgi nimani bildiradi?",
  ["Siz asosiy yo'ldasiz, oldinda ikkinchi darajali yo'l", "Oldinda teng ahamiyatli yo'llar chorrahasi", "Oldinda asosiy yo'l bilan kesishma, yo'l bering", "Oldinda aylanma harakatli chorraha"],
  "Bu ogohlantiruvchi belgi ikkinchi darajali yo'l bilan kesishishni bildiradi; ikkinchi darajali yo'ldagilar sizga yo'l beradi (YHQ 104-band).", "w_secondary");
Q("junction", "Bu belgidan keyingi chorrahada boshqa imtiyoz belgilari yo'q va ikkala yo'l ham asfaltlangan. O'tish tartibi:",
  ["O'ngdan yaqinlashayotganga yo'l beriladi", "Siz hali ham asosiy yo'ldasiz", "Kesishayotgan yo'ldagilar sizga yo'l beradi", "Faqat tramvayga yo'l beriladi"],
  "«Asosiy yo'lning oxiri»dan keyin belgilar bo'lmasa, yo'llar teng ahamiyatli va o'ngdagiga yo'l beriladi (YHQ 105-band).", "mainroadend");
Q("junction", "Teng ahamiyatli chorrahada siz o'ngga burilyapsiz, burilayotgan ko'changizni piyoda kesib o'tmoqda (o'tish joyi chizilmagan). Siz:",
  ["Piyodaga yo'l berasiz", "Piyoda o'tish joyi bo'lmagani uchun o'tasiz", "Ovozli signal berib o'tasiz", "Piyodani aylanib o'tasiz"],
  "Burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga yo'l beradi — o'tish joyi chizilgan-chizilmaganidan qat'i nazar (YHQ 96-band).");
Q("junction", "Qoidalarda «imtiyoz» atamasi nimani bildiradi?",
  ["Mo'ljallangan yo'nalishda boshqalardan oldin o'tish huquqini", "Belgilangan tezlik chegarasidan oshib harakatlanish huquqini", "Istalgan qatorda harakatlanish huquqini", "Yo'l belgilariga amal qilmaslik huquqini"],
  "Imtiyoz — mo'ljallangan yo'nalishda boshqa yo'l harakati ishtirokchilariga nisbatan oldin harakatlanish huquqi (YHQ 6-band).");
Q("junction", "«Yo'l berish» talabi nimani bildiradi?",
  ["Imtiyozlini tezlik yoki yo'nalishni o'zgartirishga majbur qilsa, harakatlanmaslikni", "Chorrahaga yaqinlashganda har doim to'liq to'xtab, kamida 3 soniya kutib turishni", "Imtiyozli ishtirokchini ovozli signal bilan ogohlantirib o'tishni", "Faqat tezlikni 20 km/soatgacha kamaytirib harakatlanishni"],
  "Yo'l berish — imtiyozi bo'lgan ishtirokchini yo'nalish yoki tezlikni o'zgartirishga majbur qilishi mumkin bo'lsa, harakatni davom ettirmaslik yoki boshlamaslik talabi (YHQ 6-band).");
Q("junction", "Siz ikkinchi darajali yo'ldasiz. Asosiy yo'ldagi avtomobil shunchalik uzoqdaki, chiqishingiz uni tezlik yoki yo'nalishini o'zgartirishga majbur qilmaydi. Siz:",
  ["Harakatlanishingiz mumkin", "U o'tib ketguncha baribir kutishingiz shart", "Faqat ovozli signal berib chiqishingiz mumkin", "Faqat avariya ishorasi bilan chiqishingiz mumkin"],
  "Yo'l berish majburiyati imtiyozli ishtirokchini yo'nalishi yoki tezligini o'zgartirishga majbur qiladigan hollarga tegishli (YHQ 6-band).");
Q("junction", "Yashil ishorada siz to'g'riga ketyapsiz, qarshidan tramvay chapga burilmoqda. Svetofor ikkingizga ham ruxsat bergan. Kim birinchi?",
  ["Tramvay", "Siz — chapga buriluvchi har doim yo'l beradi", "Kim birinchi kirsa", "Siz — chunki tramvay sizning chap tomoningizda"],
  "Svetofor tramvay va relssiz transportga bir vaqtda ruxsat bersa, tramvay harakat yo'nalishidan qat'i nazar ustun (YHQ 101-band).");
Q("junction", "Tartibga solinmagan, teng ahamiyatli chorrahada siz chapga burilyapsiz, qarshidan tramvay to'g'riga kelmoqda. Kim birinchi?",
  ["Tramvay", "Siz — chunki tramvay o'ng tomonda emas", "Kim birinchi yetib kelsa", "Siz — agar burilish chiroqi yoqilgan bo'lsa"],
  "Teng ahamiyatli yo'llar chorrahasida tramvay relssiz transportdan ustun; bundan tashqari chapga burilayotgan qarshidan to'g'riga kelayotganga yo'l beradi (YHQ 105-, 107-bandlar).");
Q("junction", "Ikkinchi darajali yo'lda chapga burilmoqchisiz: asosiy yo'lda chapdan avtomobil to'g'riga kelmoqda, o'ngdan esa yo'l bo'sh. Siz qachon harakatlanasiz?",
  ["Chapdan kelayotgan avtomobil o'tib ketgach", "Darhol — u siz uchun chap tomonda", "Faqat o'ng tomon bo'sh bo'lgani uchun darhol", "U sekinlasa, uning oldidan o'tib"],
  "Ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagi har qanday tomondan yaqinlashayotgan transportga yo'l beradi (YHQ 104-band).");
Q("junction", "Ruxsat etuvchi ishorada chorrahaga kirgan haydovchi uchun chiqishdagi svetofor (to'xtash chizig'isiz) qizil bo'lsa:",
  ["Chorrahadan mo'ljallangan yo'nalishda chiqadi", "Chiqishdagi svetofor oldida to'xtab, yashilni kutadi", "Chorraha o'rtasida yashil kutadi", "Orqaga qaytib, chorrahadan chiqadi"],
  "To'xtash chizig'i bo'lmasa, ruxsat etuvchi ishorada kirgan haydovchi chiqishdagi svetofordan qat'i nazar harakatni davom ettiradi (YHQ 102-band).");
Q("junction", "Tartibga soluvchi ishoralari tramvay va relssiz transportga bir vaqtda harakatlanishga ruxsat berdi. Siz o'ngga burilasiz, tramvay to'g'riga ketadi va yo'llaringiz kesishadi. Kim birinchi?",
  ["Tramvay", "Siz — o'ngga buriluvchi doim ustun", "Kim birinchi kirsa", "Siz — tramvay o'ngdagi qoidasiga bo'ysunadi"],
  "Svetofor yoki tartibga soluvchi ishoralari bir vaqtda ruxsat bersa, tramvay oldin o'tish huquqiga ega (YHQ 101-band).");
Q("junction", "Aylanma harakatli chorrahada aylanada ketayotgan siz va aylanaga kirib kelayotgan avtomobil: kim kimga yo'l beradi?",
  ["Kirib kelayotgan avtomobil sizga yo'l beradi", "Siz unga yo'l berasiz, chunki u o'ng tomondan kelmoqda", "Kim birinchi yetib kelsa", "Ikkovingiz ham to'xtab, kelishasiz"],
  "Aylanma chorrahada aylanada harakatlanayotganlar kirib kelayotganlarga nisbatan imtiyozga ega (YHQ 98-band).");
Q("junction", "Teng ahamiyatli chorrahada siz qayrilib olmoqchisiz (U-burilish), qarshidan avtomobil to'g'riga kelmoqda. Siz:",
  ["Unga yo'l berasiz", "Ustunlikka egasiz, chunki chap chetdasiz", "Faqat u o'ng tomonda bo'lsa yo'l berasiz", "Ovozli signal berib manyovrni bajarasiz"],
  "Qayrilib olishda ham teng ahamiyatli yo'lda qarshidan to'g'riga yoki o'ngga harakatlanayotganlarga yo'l beriladi (YHQ 107-band).", "w_equal");

Q("junction", "Teng ahamiyatli chorrahada siz o'ngga burilyapsiz, chap tomondan avtomobil to'g'riga kelmoqda va siz chiqadigan yo'lga kiradi. Kim birinchi?",
  ["Siz — chapdagi haydovchi uchun siz o'ng tomondasiz", "Chapdagi avtomobil — to'g'riga harakat ustun", "Chapdagi avtomobil — u siz chiqayotgan yo'lga kiradi", "Kim birinchi chorrahaga kirsa, o'sha"],
  "Teng ahamiyatli chorrahada har bir haydovchi o'ngdan yaqinlashayotganga yo'l beradi; chapdagi uchun siz o'ng tomondasiz (YHQ 105-band).");
Q("junction", "Teng bo'lmagan yo'llar chorrahasida asosiy yo'lda tramvay chapga burilmoqda, unga qarshi asosiy yo'l bo'ylab siz to'g'riga ketyapsiz. Kim birinchi?",
  ["Tramvay — u yo'nalishidan qat'i nazar ustun", "Siz — chapga buriluvchi doim yo'l beradi", "Siz — chunki ikkovingiz asosiy yo'ldasiz", "Kim birinchi chorrahaga kirsa, o'sha"],
  "Teng bo'lmagan yo'llar chorrahasida tramvay teng ahamiyatli yo'lda bir yoki qarama-qarshi yo'nalishda harakatlanayotgan relssiz transportdan yo'nalishidan qat'i nazar ustun (YHQ 104-band).");
Q("junction", "Yer osti avtoturargohidan ko'chaga chiqyapsiz, trotuar bo'ylab piyoda ketmoqda. Siz:",
  ["Piyodaga yo'l berasiz", "Piyoda sizga yo'l beradi, chunki siz transportdasiz", "Ovozli signal berib chiqasiz", "Faqat ko'chadagi transportga yo'l berasiz"],
  "Yondosh hududdan chiqayotgan transport vositalari barcha yo'l harakati ishtirokchilariga, jumladan piyodalarga yo'l berishi shart (YHQ 6-band).");
Q("junction", "Tartibga solingan chorrahada sizga yashil yondi, ammo ko'ndalang yo'nalishdagi tirbandlik tufayli chorrahadan o'tib ulgura olmasligingiz aniq. Ruxsat etuvchi ishora sizni:",
  ["Chorrahaga kirish taqig'idan ozod qilmaydi", "Har qanday holatda chorrahaga kirishga haqli qiladi", "Faqat chorraha o'rtasigacha kirishga haqli qiladi", "Avariya ishorasi bilan kirishga haqli qiladi"],
  "Ko'ndalang harakatga to'sqinlik qiladigan tirbandlik bo'lsa, svetofor ishorasidan qat'i nazar chorrahaga kirish taqiqlanadi (YHQ 97-band).", "w_light");

// ===================== PIYODALAR O'TISH JOYLARI, BEKATLAR, AJRATILGAN TASMA (YHQ 17-, 17.1-boblar) =====================
Q("crossing", "Tartibga solinmagan piyodalar o'tish joyiga yaqinlashayotgan haydovchi nima qilishi shart?",
  ["Kesib o'tayotgan piyodalarni o'tkazish uchun sekinlashishi yoki to'xtashi", "Ovozli signal berib, tezlikni saqlagan holda o'tishi", "Faqat bolalar va keksalarni o'tkazib yuborishi, boshqalarni emas", "Faqat piyoda qo'l ko'tarib ishora bergan bo'lsa sekinlashib to'xtashi"],
  "Tartibga solinmagan o'tish joyida haydovchi kesib o'tayotgan piyodalarni o'tkazish uchun sekinlashishi yoki to'xtashi shart (YHQ 109-band).", "crossing");
Q("crossing", "Tartibga solinmagan o'tish joyida piyoda sizning tasmangizni kesib o'tmoqda, orqangizdagi haydovchi signal chalmoqda. Siz:",
  ["To'xtab, piyodani o'tkazib yuborasiz", "Orqadagiga xalaqit bermaslik uchun o'tib ketasiz", "Piyodaga ovozli signal berib, uni to'xtatasiz", "Piyodani chap tomondan aylanib o'tasiz"],
  "Orqadagilarning bosimidan qat'i nazar, kesib o'tayotgan piyodani o'tkazib yuborish majburiyati saqlanadi (YHQ 109-band).");
Q("crossing", "Qo'shni tasmadagi avtomobil tartibga solinmagan o'tish joyi oldida sekinlashdi yoki to'xtadi. Siz qachon harakatni davom ettira olasiz?",
  ["Uning oldida piyoda yo'qligiga ishonch hosil qilgandan keyin", "Ovozli signal berib, piyodalarni ogohlantirgan holda darhol", "Uni chap tomondan tezda quvib o'tib", "Faqat u yana harakatlana boshlaganda"],
  "Qo'shni tasmadagi vosita sekinlashsa yoki to'xtasa, boshqa haydovchilar uning oldida piyoda yo'qligiga ishonch hosil qilib davom etadi (YHQ 110-band).");
Q("crossing", "Siz o'ng tasmadasiz; chap tasmadagi yuk avtomobili tartibga solinmagan o'tish joyi oldida to'xtab, ko'rinishni to'sib qo'ydi. To'g'ri harakat:",
  ["Sekinlashib, uning oldida piyoda yo'qligiga ishonch hosil qilish", "Tezlikni oshirib, tezroq o'tib ketish", "Uzoq yorug'likni yoqib, tezlikni saqlab o'tish", "Ovozli signal berib, piyodalarni ogohlantirgan holda tezlikni saqlash"],
  "To'xtagan avtomobil oldida piyoda bo'lishi mumkin, shuning uchun uning oldi bo'shligiga ishonch hosil qilmay harakatlanib bo'lmaydi (YHQ 110-band).");
Q("crossing", "Tartibga solingan piyodalar o'tish joyida sizga yashil ishora yondi, ammo piyoda hali qatnov qismida. Siz:",
  ["Piyodaga o'tishni tugallashiga imkon berasiz", "Yashil yongani uchun harakatni boshlaysiz", "Ovozli signal berib, piyodani shoshirasiz", "Piyoda orqasidan aylanib o'tasiz"],
  "Ruxsat etuvchi ishora yongan taqdirda ham haydovchi piyodalarga o'tishni tugallashiga imkon berishi kerak (YHQ 111-band).");
Q("crossing", "Tartibga solingan o'tish joyida haydovchining piyodalarga nisbatan majburiyati qanday?",
  ["Yashil ishorada ham piyodalarga o'tishni tugallashga imkon berish", "Faqat piyodalar uchun yashil yonganda to'xtash", "Sariq ishora yonganda piyodalarni o'tkazmaslik", "Faqat piyodalar uchun alohida svetofor bo'lsa, ularga yo'l berish"],
  "Tartibga solingan o'tish joyida ham boshlagan o'tishini tugallayotgan piyodalarga imkon beriladi (YHQ 111-band).");
Q("crossing", "Piyodalar o'tish joyidan keyin tirbandlik paydo bo'ldi va siz o'tish joyi ustida to'xtab qolishingiz mumkin. Siz:",
  ["Piyodalar o'tish joyiga kirmaysiz", "Yashil ishora bo'lsa, o'tish joyiga kirasiz", "Avariya ishorasini yoqib kirasiz", "O'tish joyining yarmigacha kirasiz"],
  "Tirbandlik tufayli piyodalar o'tish joyida to'xtashga majbur bo'ladigan bo'lsa, o'tish joyiga kirish taqiqlanadi (YHQ 112-band).");
Q("crossing", "Svetofor sizga yashil, lekin o'tish joyidan keyingi ko'cha to'lgan va siz zebra ustida qolib ketasiz. To'g'ri harakat:",
  ["O'tish joyidan oldin to'xtab kutish", "Yashil yongani uchun zebraga kirish", "Zebraga kirib, piyodalarni aylanib o'tishga undash", "Ovozli signal berib, oldingilarni yurgizish"],
  "Yashil ishora tirbandlik tufayli piyodalar o'tish joyida qolib ketishga ruxsat bermaydi (YHQ 112-band).");
Q("crossing", "Oq hassa bilan ishora berayotgan ko'zi ojiz piyodaga qayerda yo'l berish kerak?",
  ["Barcha hollarda, jumladan o'tish joylaridan tashqarida ham", "Faqat piyodalar o'tish joylarida", "Faqat svetoforli o'tish joylarida", "Faqat aholi punktlari ichida va piyodalar o'tish joylarida"],
  "Haydovchi oq hassa bilan ishora berayotgan ko'zi ojiz piyodalarni barcha hollarda o'tkazib yuborishi kerak (YHQ 113-band).");
Q("crossing", "O'tish joyidan 200 m uzoqda oq hassa bilan ishora berayotgan ko'zi ojiz kishi qatnov qismiga chiqmoqda. Siz:",
  ["To'xtab, uni o'tkazib yuborasiz", "U noto'g'ri joyda o'tayotgani uchun o'tib ketasiz", "Ovozli signal berib, uni to'xtatasiz", "Tezlikni saqlab, uni aylanib o'tasiz"],
  "Ko'zi ojiz piyodani o'tish joylaridan tashqarida ham o'tkazib yuborish shart (YHQ 113-band).");
Q("crossing", "Tartibga solingan chorrahada sizga yashil yongan, ammo qatnov qismiga oq hassa bilan ishora berayotgan ko'zi ojiz piyoda chiqmoqda. Siz:",
  ["Uni o'tkazib yuborasiz", "Yashil ishora sizga ustunlik bergani uchun o'tasiz", "Ovozli signal berasiz", "Faqat u zebra ustida bo'lsa to'xtaysiz"],
  "113-band «barcha hollarda» deb belgilaydi, ya'ni svetofor ishorasidan qat'i nazar ko'zi ojiz piyoda o'tkazib yuboriladi (YHQ 113-band).");
Q("crossing", "Bekatda to'xtagan avtobusga yo'lovchilar qatnov qismi orqali chiqmoqda. Yonidan o'tayotgan haydovchi:",
  ["Eshik tomon borayotgan va undan kelayotgan piyodalarga yo'l beradi", "Ovozli signal berib, tezlikni saqlab o'tadi", "Faqat bolalar va keksalarga yo'l beradi", "Piyodalar uni kutishi shart, chunki u qatnov qismida harakatlanmoqda"],
  "Yo'lovchilarni chiqarish-tushirish qatnov qismida bo'lsa, haydovchi eshik tomon borayotgan yoki undan kelayotgan piyodalarga yo'l beradi (YHQ 114-band).");
Q("crossing", "Tramvay qatnov qismi o'rtasidagi bekatda (alohida maydonchasiz) to'xtadi, yo'lovchilar tushmoqda. Siz:",
  ["To'xtab, tramvaydan tushayotgan piyodalarga yo'l berasiz", "Tramvay yonidan tezlikni saqlab o'tasiz", "Ovozli signal berib o'tasiz", "Tramvayni chap tomondan, piyodalar orasidan aylanib o'tasiz"],
  "Yo'lovchilarni tushirish qatnov qismida amalga oshirilsa, yo'nalishli transport eshiklaridan kelayotgan piyodalarga yo'l beriladi (YHQ 114-band).");
Q("crossing", "114-banddagi piyodalarga yo'l berish talabi qaysi holatda qo'llanadi?",
  ["Yo'lovchilar qatnov qismida yoki undagi maydonchada tushsa", "Bekat faqat trotuar yonida bo'lsa", "Faqat avtobus to'xtab, avariya ishorasini yoqqan holatda", "Faqat yo'nalishli taksi to'xtaganda"],
  "Talab yo'lovchilarni tushirish yoki chiqarish qatnov qismida yoki unda joylashgan maydonchada bo'lganda qo'llanadi (YHQ 114-band).");
Q("crossing", "Yo'nalishli avtobus qatnov qismi o'rtasidagi orolcha-maydonchali bekatda to'xtadi, yo'lovchilar trotuarga qatnov qismi orqali o'tmoqda. Siz:",
  ["Avtobus eshiklaridan kelayotgan piyodalarga yo'l berasiz", "Piyodalar o'tish joyi bo'lmagani uchun tezlikni saqlab o'tasiz", "Faqat yashil ishorada yo'l berasiz", "Faqat signal berib o'tasiz"],
  "Qatnov qismida joylashgan maydonchadan tushayotgan yo'lovchilarga ham yo'l berish shart (YHQ 114-band).");
Q("crossing", "«Bolalar guruhini tashish» taniqlik belgisi o'rnatilgan, avariya ishorasi yoqilgan avtobus to'xtadi. Unga yaqinlashayotgan haydovchi:",
  ["Tezlikni kamaytirishi, zarur bo'lsa to'xtab, bolalarni o'tkazib yuborishi shart", "Ovozli signal berib, ehtiyotkorlik bilan o'tishi kerak", "Tezlikni saqlab, avtobusni chap tomondan ehtiyotkorlik bilan aylanib o'tishi kerak", "Faqat bolalar o'tish joyida bo'lsa to'xtashi kerak"],
  "Bunday avtobus to'xtaganda yaqinlashayotgan haydovchi sekinlashib, kerak bo'lsa to'xtab, bolalarni o'tkazishi shart (YHQ 115-band).");
Q("crossing", "115-banddagi bolalarni o'tkazib yuborish talabi qaysi holatda qo'llanadi?",
  ["Belgili, avariya ishorasi yoqilgan transport to'xtaganda", "Har qanday maktab avtobusi harakatlanayotganda", "Belgi bo'lsa, avariya ishorasidan qat'i nazar, faqat harakat vaqtida", "Faqat bolalar muassasasi yaqinidagi bekatlarda"],
  "Shartlar: taniqlik belgisi, yoqilgan avariya ishorasi va transportning to'xtagani (YHQ 115-band).");
Q("crossing", "Ikki tomonlama yo'lning qarama-qarshi tomonida «Bolalar guruhini tashish» belgili, avariya ishorasi yoqilgan avtobus to'xtab turibdi. Siz:",
  ["Tezlikni kamaytirib, zarur bo'lsa to'xtab, bolalarni o'tkazasiz", "Avtobus qarama-qarshi tomonda bo'lgani uchun tezlikni saqlaysiz", "Ovozli signal berib, bolalarni to'xtatasiz", "Faqat avtobus orqasidan bolalar chiqsa to'xtaysiz"],
  "115-band to'xtagan bunday transportga «yaqinlashayotgan haydovchi»ga taalluqli, bolalar yo'lni kesib o'tishi mumkin (YHQ 115-band).");
Q("crossing", "Yo'nalishli transport uchun alohida ajratilgan tasmada qaysi vositalar harakatlanishi mumkin?",
  ["Yo'nalishli jamoat transporti hamda tezkor va maxsus xizmatlar transporti", "Barcha yo'lovchi tashuvchi transport vositalari, jumladan oddiy taksilar", "Yo'nalishli transport va mototsikllar", "Faqat avtobuslar va trolleybuslar, istisnosiz"],
  "Ajratilgan tasmada yo'nalishli jamoat transporti harakatlanadi; boshqalarga taqiqlangan, tezkor va maxsus xizmatlar transporti bundan mustasno (YHQ 115-1-band).");
Q("crossing", "Oddiy yengil taksi (yo'nalishli emas) yo'lovchi bilan tirbandlikni chetlab o'tish uchun avtobuslar tasmasiga o'tdi. Bu:",
  ["Taqiqlanadi", "Yo'lovchi bo'lgani uchun ruxsat", "Tirbandlikda ruxsat", "Avariya ishorasi bilan ruxsat"],
  "Yo'nalishli transport tasmasida boshqa transport vositalarining harakatlanishi taqiqlangan (YHQ 115-1-band).");
Q("crossing", "Boshqa transport vositasi yo'nalishli transport tasmasiga qaysi maqsadda kira oladi?",
  ["Faqat yondosh hududga kirish yoki chiqish uchun", "Tirbandlikni chetlab o'tish uchun, qisqa masofaga", "Quvib o'tishni yakunlash uchun", "Chapga burilishga tayyorlanish uchun"],
  "Taqiqlangan vositalar bu tasmadan faqat yondosh hududga kirish yoki chiqish maqsadida foydalanishi mumkin (YHQ 115-2-band).");
Q("crossing", "Yondosh hududga kirish uchun yo'nalishli transport tasmasiga kirish joyidan qancha masofada o'tish mumkin?",
  ["50 m masofada uzuq chiziqli joydan", "100 m masofada uzuq chiziqli joydan", "30 m masofada istalgan joydan", "20 m masofada yaxlit chiziq orqali"],
  "Yondosh hududning kirish yoki chiqish joyidan 50 m masofada uzuq-uzuq chiziqli joygacha yoki yaqinroq uzuq chiziqli joygacha harakatlanish mumkin (YHQ 115-2-band).");
Q("crossing", "Yondosh hududga kirish uchun yo'nalishli transport tasmasiga o'tayotganingizda tasmada avtobus kelmoqda. Siz:",
  ["Avtobusga yo'l berib, keyin manyovrni bajarasiz", "Avtobus sizga yo'l beradi, chunki siz burilyapsiz", "Avariya ishorasini yoqib kirasiz", "Avtobusdan oldin tezroq kirib olasiz"],
  "Tasmaga kirgan transport yo'nalishli transport harakatiga to'sqinlik qilmasligi va unga yo'l bergandan keyin manyovr qilishi kerak (YHQ 115-2-band).");
Q("crossing", "Yo'nalishli transport tasmasida mototsiklning harakatlanishi:",
  ["Taqiqlanadi", "Ruxsat etiladi, chunki u kichik", "Faqat tirbandlikda ruxsat etiladi", "Faqat chap chekkada ruxsat etiladi"],
  "Bu tasmada faqat yo'nalishli jamoat transporti hamda tezkor va maxsus xizmatlar harakatlanadi (YHQ 115-1-band).");
Q("crossing", "Tez yordam avtomobilining yo'nalishli transport uchun ajratilgan tasmada harakatlanishi:",
  ["Ruxsat etiladi — tezkor va maxsus xizmatlar istisno qilingan", "Taqiqlanadi — tasma faqat yo'nalishli jamoat transporti uchun", "Faqat yondosh hududga kirish uchun ruxsat", "Faqat yo'lovchi bo'lmasa ruxsat"],
  "Tezkor va maxsus xizmatlarning transport vositalari ajratilgan tasmadagi taqiqdan mustasno (YHQ 115-1-band).");
Q("crossing", "Qoidalarga ko'ra «piyodalar o'tish joyi» qanday belgilanadi?",
  ["Qatnov qismida belgilar va chiziqlar bilan belgilangan joy", "Har qanday chorrahada trotuarlar bir-biriga tutashgan joy", "Faqat svetofor o'rnatilgan joy", "Trotuar tugagan har qanday joy"],
  "Piyodalar o'tish joyi — 5.16.1, 5.16.2, 5.48 belgilari va 1.14.1–1.14.4 yoki 1.29.1–1.29.3 chiziqlari bilan belgilangan joy (YHQ 6-band).");
Q("crossing", "Bu ogohlantiruvchi belgi oldidan haydovchi nimaga tayyor bo'lishi kerak?",
  ["Oldindagi o'tish joyida piyodalarni o'tkazish uchun to'xtashga", "Oldinda maktab yoki bolalar o'yin maydonchasi joylashganiga", "Oldinda velosiped yo'lkasi kesishishiga", "Oldinda tartibga soluvchi turganiga"],
  "Belgi oldinda piyodalar o'tish joyi borligini ogohlantiradi; tartibga solinmagan o'tish joyida piyodalarni o'tkazish majburiyati bor (YHQ 109-band).", "w_crossing");
Q("crossing", "Tartibga solinmagan o'tish joyida piyoda qarama-qarshi yo'nalishdagi tasmani kesib o'tmoqda va sizning tasmangizga yetib keladi. Siz:",
  ["Tezlikni kamaytirib, zarur bo'lsa to'xtab, uni o'tkazasiz", "U sizning tasmangizda bo'lmagani uchun to'xtamay o'tasiz", "Ovozli signal berib, uni to'xtatasiz", "Uning orqa tomonidan aylanib o'tasiz"],
  "Haydovchi o'tish joyida yo'lni kesib o'tayotgan piyodalarni o'tkazish uchun tezlikni kamaytirishi yoki to'xtashi shart (YHQ 109-band).");
Q("crossing", "Qo'shni tasmadagi avtobus tartibga solinmagan o'tish joyi oldida to'xtadi. Siz uning chap tomonidan tezlikni oshirib o'tmoqchisiz. Bu:",
  ["Taqiqlanadi — oldin piyoda yo'qligiga ishonch hosil qilish kerak", "Ruxsat — siz boshqa tasmadasiz", "Ruxsat — ovozli signal bersangiz", "Ruxsat — qo'shni tasmadagi avtobusning to'xtashi sizga taalluqli emas"],
  "Qo'shni tasmadagi vosita o'tish joyi oldida to'xtasa, uning oldida piyoda yo'qligiga ishonch hosil qilmaguncha harakatni davom ettirib bo'lmaydi (YHQ 110-band).");
Q("crossing", "Tartibga solingan chorrahada yashil ishorada chapga burilyapsiz, burilayotgan ko'chani piyodalar o'z yashil ishorasida kesib o'tmoqda. Siz:",
  ["Piyodalarga yo'l berasiz", "Piyodalar sizga yo'l beradi, chunki sizga ham yashil", "Ular orasidan sekin o'tasiz", "Ovozli signal berib o'tasiz"],
  "Burilayotgan haydovchi kesishayotgan yo'lni kesib o'tayotgan piyodalarga yo'l berishi shart (YHQ 96-band).");
Q("crossing", "Bekat oldida to'xtagan tramvay eshiklari ochiq, yo'lovchilar trotuarga emas, qatnov qismiga tushmoqda. Siz tramvay yonidan:",
  ["To'xtab, piyodalar o'tib bo'lgach harakatlanasiz", "Tezlikni kamaytirib, piyodalar orasidan o'tasiz", "Ovozli signal berib o'tasiz", "Chap tasmaga o'tib, tezlikni saqlaysiz"],
  "Bekatda to'xtagan yo'nalishli transport eshiklaridan kelayotgan piyodalarga yo'l berish shart (YHQ 114-band).");
Q("crossing", "Yo'nalishli transport tasmasidan yondosh hududga kirish uchun foydalanishda yaqin masofada uzuq chiziqli joy bo'lsa, unga qadar:",
  ["Harakatlanish mumkin", "Faqat 50 m dan uzoqda bo'lsa harakatlanish mumkin", "Harakatlanish mumkin emas, faqat 50 m lik qism", "Faqat avtobus bo'lmasa harakatlanish mumkin"],
  "Qoida 50 m dagi uzuq chiziqli joy yoki yaqin masofadagi uzuq chiziqli joygacha harakatlanishga ruxsat beradi (YHQ 115-2-band).");
Q("crossing", "Tartibga solinmagan o'tish joyi oldida piyodani o'tkazish uchun to'xtadingiz, orqangizda ikkinchi tasmada avtomobil harakatlanmoqda. Uning haydovchisi qanday harakatlanishi kerak?",
  ["Sizning oldingizda piyoda yo'qligiga ishonch hosil qilgach davom etishi", "Sizni darhol quvib o'tib ketishi", "Ovozli signal berib, piyodani ogohlantirishi", "Siz harakatlanguncha ortda kutishi shart emas, tezlikni saqlashi"],
  "Qo'shni tasmalardagi haydovchilar to'xtagan vosita oldida piyoda yo'qligiga ishonch hosil qilgandan keyingina harakatni davom ettiradi (YHQ 110-band).");

Q("crossing", "Qo'shni tasmadagi avtomobil tartibga solinmagan o'tish joyi oldida to'liq to'xtamadi, faqat sekinlashdi. Siz:",
  ["Uning oldida piyoda yo'qligiga ishonch hosil qilib davom etasiz", "U to'xtamagani uchun tezlikni saqlab o'tasiz", "Uni darhol quvib o'tib ketasiz", "Faqat u to'liq to'xtagandagina ehtiyot bo'lasiz"],
  "110-band qo'shni tasmadagi vosita sekinlashgan yoki to'xtagan har ikki holatda ham qo'llanadi (YHQ 110-band).");
Q("crossing", "Piyoda sizga qizil yonib turganda o'tishni boshlagan va hali qatnov qismida, endi sizga yashil yondi. Siz:",
  ["Piyodaga o'tishni tugallashiga imkon berasiz", "Yashil yonganini ko'rsatib, harakatni boshlaysiz", "Ovozli signal berib, piyodani orqaga qaytarasiz", "Piyodani oldidan aylanib o'tasiz"],
  "Tartibga solingan o'tish joyida ruxsat etuvchi ishora yongan taqdirda ham piyodaga o'tishni tugallashiga imkon beriladi (YHQ 111-band).");

// ===================== TEMIR YO'L KESISHMALARI (YHQ 18-bob) =====================
Q("railway", "Haydovchi temir yo'llarni qayerda kesib o'tishi mumkin?",
  ["Faqat temir yo'l kesishmalari orqali", "Poyezd ko'rinmasa istalgan joyda", "Temir yo'l ko'prigi ostidagi istalgan joyda", "Aholi punktidan tashqarida istalgan joyda"],
  "Haydovchilar temir yo'llarni faqat temir yo'l kesishmalari orqali, poyezdlarga yo'l berib kesib o'tadi (YHQ 116-band).");
Q("railway", "Temir yo'l kesishmasida haydovchi kimlarga yo'l berishi shart?",
  ["Poyezd, lokomotiv va drezinaga", "Faqat yo'lovchi poyezdlariga", "Faqat lokomotivlarga, drezinalar avtomobilga yo'l beradi", "Faqat shlagbaum yopiq bo'lganda poyezdga"],
  "Temir yo'l kesishmasi poyezd, lokomotiv va drezinalarga yo'l berib kesib o'tiladi (YHQ 116-band).");
Q("railway", "Qoidalarda «temir yo'l kesishmasi» qanday ta'riflanadi?",
  ["Yo'lning temir yo'llar bilan bir sathda kesishgan joyi", "Yo'lning temir yo'l ustidan ko'prik orqali o'tgan joyi", "Temir yo'l ostidan o'tgan tonnel", "Temir yo'lga parallel yo'l qismi"],
  "Temir yo'l kesishmasi — yo'lning temir yo'llar bilan bir sathda kesishgan joyi (YHQ 6-band).");
Q("railway", "Temir yo'l kesishmasiga yaqinlashgan haydovchi nimalarga amal qilishi shart?",
  ["Navbatchi, svetofor, belgilar, chiziqlar, shlagbaumga va poyezd yo'qligiga ishonch hosil qilishi", "Faqat svetofor ishoralariga, svetofor bo'lmasa yo'l belgilari va chiziqlariga", "Faqat shlagbaum holatiga va navbatchi ko'rsatmasiga", "Faqat navbatchi bo'lsa uning ko'rsatmalariga"],
  "Haydovchi barcha vositalarga amal qilib, yaqinlashayotgan poyezd yo'qligiga ishonch hosil qilishi shart (YHQ 117-band).");
Q("railway", "Shlagbaumsiz va svetoforsiz kesishmaga yaqinlashdingiz. Kesib o'tishdan oldin nima qilish shart?",
  ["Yaqinlashayotgan poyezd yo'qligiga ishonch hosil qilish", "Ovozli signal berib, tezlikni oshirish", "Faqat avariya ishorasini yoqish", "Hech qanday maxsus harakat talab qilinmaydi, belgi bo'lmasa"],
  "Kesishmani kesib o'tmoqchi bo'lgan haydovchi yaqinlashayotgan poyezd yo'qligiga ishonch hosil qilishi shart (YHQ 117-band).");
Q("railway", "Shlagbaum yopiq yoki yopila boshlagan bo'lsa, kesishmaga kirish:",
  ["Svetofor ishorasidan qat'i nazar taqiqlanadi", "Svetofor yashil bo'lsa ruxsat etiladi", "Poyezd ko'rinmasa ruxsat etiladi", "Shlagbaum yarmigacha tushgan bo'lsa ruxsat"],
  "Shlagbaum yopiq yoki yopila boshlagan bo'lsa, svetofordan qat'i nazar kesishmaga kirish taqiqlanadi (YHQ 118-band).", "railbarrier");
Q("railway", "Shlagbaum endigina tusha boshladi, svetoforda esa hali ishora yo'q. Siz:",
  ["To'xtaysiz — kesishmaga kirish taqiqlanadi", "Tezlikni oshirib, ulgurib o'tasiz", "Svetofor hali yonmagani uchun tezda o'tib olasiz", "Ovozli signal berib o'tasiz"],
  "Yopila boshlagan shlagbaum svetofor ishorasidan qat'i nazar kesishmaga kirishni taqiqlaydi (YHQ 118-band).");
Q("railway", "Kesishmani to'suvchi qurilma ko'tarilib turgan yoki ko'tarila boshlagan bo'lsa:",
  ["Kesishmaga kirish taqiqlanadi", "Tezroq o'tib olish kerak", "Faqat yengil avtomobillar o'tishi mumkin", "Svetofor yashil bo'lsa o'tish mumkin"],
  "To'suvchi qurilma ko'tarilgan yoki ko'tarila boshlaganda kesishmaga kirish taqiqlanadi (YHQ 118-band).");
Q("railway", "Svetoforning taqiqlovchi ishorasi yonib turgan, shlagbaum esa ochiq. Siz:",
  ["To'xtaysiz — shlagbaumdan qat'i nazar taqiqlanadi", "Shlagbaum ochiq bo'lgani uchun o'tasiz", "Poyezd ko'rinmasa o'tasiz", "Sekinlashib, poyezd yo'qligini tekshirib, ehtiyotkorlik bilan o'tasiz"],
  "Svetoforning taqiqlovchi ishorasida shlagbaumning holati va bor-yo'qligidan qat'i nazar kesishmaga kirish taqiqlanadi (YHQ 118-band).");
Q("railway", "Shlagbaumsiz kesishmada svetofor taqiqlovchi ishora bermoqda, poyezd esa ko'rinmayapti. Siz:",
  ["To'xtab, ishora o'chishini kutasiz", "Poyezd yo'qligiga ishonch hosil qilib o'tasiz", "Shlagbaum yo'qligi uchun o'tasiz", "Ovozli signal berib o'tasiz"],
  "Svetoforning taqiqlovchi ishorasi shlagbaum bor-yo'qligidan qat'i nazar amal qiladi (YHQ 118-band).");
Q("railway", "Kesishma navbatchisining qaysi ishorasi kesishmaga kirishni taqiqlaydi?",
  ["Jezl, qizil chiroq yoki bayroqchani yuqoriga ko'tarsa yoki qo'llarini yonga uzatsa", "Faqat haydovchiga yuzi bilan turib, jezlni pastga tushirib turganda", "Faqat qizil bayroqchani gorizontal silkitib turganda", "Faqat hushtak chalib, bir qo'lini oldinga uzatganda"],
  "Navbatchining taqiqlovchi ishorasi: oldi yoki orqasi bilan turib jezl, qizil chiroq yoki bayroqchani ko'tarish yoki qo'llarni yonga uzatish (YHQ 118-band).");
Q("railway", "Kesishma navbatchisi sizga orqasi bilan turib, qizil bayroqchani yuqoriga ko'tardi. Siz:",
  ["Kesishmaga kirmaysiz", "U orqasi bilan turgani uchun o'tasiz", "Shlagbaum ochiq bo'lsa o'tasiz", "Ovozli signal berib, ruxsat so'raysiz"],
  "Navbatchi haydovchiga oldi yoki orqasi bilan turib bayroqchani ko'tarsa, bu taqiqlovchi ishora (YHQ 118-band).");
Q("railway", "Kesishma navbatchisi sizga qarab, qo'llarini yon tomonlarga uzatib turibdi. Bu:",
  ["Kesishmaga kirishni taqiqlaydi", "O'tishga ruxsat beradi", "Faqat sekinlashishni bildiradi", "Faqat yuk avtomobillariga taalluqli"],
  "Navbatchi qo'llarini yonga uzatsa, kesishmaga kirish taqiqlanadi (YHQ 118-band).");
Q("railway", "Kesishmadan keyin tirbandlik bor va siz kesishma ustida to'xtab qolishingiz mumkin. Siz:",
  ["Kesishmaga kirmaysiz", "Shlagbaum ochiq bo'lsa kirasiz", "Svetofor o'chiq bo'lsa kirasiz", "Avariya ishorasini yoqib kirasiz"],
  "Kesishmadan keyingi tirbandlik haydovchini kesishmada to'xtashga majbur qilsa, kesishmaga kirish taqiqlanadi (YHQ 118-band).");
Q("railway", "Shlagbaumsiz kesishmada svetofor yo'q, ammo ko'rinish chegarasida poyezd yaqinlashmoqda. Siz:",
  ["Kesishmaga kirmaysiz", "Poyezd uzoqda bo'lsa tez o'tasiz", "Ovozli signal berib o'tasiz", "Faqat poyezd signal bersa to'xtaysiz"],
  "Ko'rinish chegarasida poyezd yaqinlashayotgan bo'lsa kesishmaga kirish taqiqlanadi (YHQ 118-band).");
Q("railway", "Shlagbaum oldida navbatda turgan transport vositalarini qarama-qarshi harakat bo'lagiga chiqib aylanib o'tish:",
  ["Taqiqlanadi", "Poyezd ko'rinmasa ruxsat etiladi", "Qarshidan transport kelmasa ruxsat etiladi", "Faqat yengil avtomobillarga ruxsat"],
  "Kesishma oldida turgan transportni qarama-qarshi bo'lakka chiqib aylanib o'tish taqiqlanadi (YHQ 118-band).");
Q("railway", "Shlagbaumni o'zboshimchalik bilan ochish:",
  ["Taqiqlanadi", "Poyezd ko'rinmasa ruxsat etiladi", "Navbatchi yo'q bo'lsa ruxsat etiladi", "Shlagbaum buzilgan bo'lsa ruxsat etiladi"],
  "Shlagbaumni o'zboshimchalik bilan ochish taqiqlanadi (YHQ 118-band).");
Q("railway", "Transport holatiga keltirilmagan qishloq xo'jaligi yoki yo'l qurilishi mashinalarini kesishma orqali olib o'tish:",
  ["Taqiqlanadi", "Navbatchi ruxsati bilan ruxsat", "Poyezd ko'rinmasa ruxsat", "Faqat tirkama bilan tortib o'tilsa ruxsat"],
  "Transport holatiga keltirilmagan qishloq xo'jaligi, yo'l qurilishi, qurilish va boshqa mashinalarni kesishma orqali olib o'tish taqiqlanadi (YHQ 118-band).");
Q("railway", "Tezligi soatiga 8 km dan kam transport vositasi temir yo'l kesishmasidan qanday o'tadi?",
  ["Faqat temir yo'l distansiyasi boshlig'ining ruxsati bilan", "Faqat kesishma navbatchisining og'zaki roziligi bilan", "Avariya ishorasini yoqib, boshqa ruxsatsiz erkin", "Faqat shlagbaum ochiq bo'lsa erkin"],
  "Tezligi 8 km/soat dan kam vositalarning harakatlanishi temir yo'l distansiyasi boshlig'ining ruxsatisiz taqiqlanadi (YHQ 118-band).");
Q("railway", "Maksimal tezligi soatiga 6 km bo'lgan zanjirli traktorni kesishma orqali o'tkazish uchun nima kerak?",
  ["Temir yo'l distansiyasi boshlig'ining ruxsati", "Faqat poyezd yo'qligiga ishonch hosil qilish", "DYHXX xodimi kuzatuvi", "Hech qanday ruxsat — u transport holatida bo'lsa yetarli"],
  "Tezligi soatiga 8 km dan kam vositalar uchun temir yo'l distansiyasi boshlig'ining ruxsati talab qilinadi (YHQ 118-band).");
Q("railway", "Kesishma orqali harakatlanish taqiqlanganda haydovchi birinchi navbatda qayerda to'xtashi kerak?",
  ["To'xtash chizig'i, 2.5 belgisi yoki svetofor oldida", "Shlagbaumning bevosita yonida", "Birinchi relsdan 1 m oldin", "Kesishmadan kamida 50 m oldin, yo'l yoqasida"],
  "Harakat taqiqlanganda haydovchi to'xtash chizig'i, 2.5 belgisi yoki svetofor oldida to'xtaydi (YHQ 119-band).");
Q("railway", "Shlagbaumli kesishmada to'xtash chizig'i, 2.5 belgisi va svetofor bo'lmasa, harakat taqiqlanganda qayerda to'xtash kerak?",
  ["Shlagbaumga kamida 5 m qolganda", "Shlagbaumga kamida 10 m qolganda", "Shlagbaumga kamida 15 m qolganda", "Shlagbaumning bevosita yonida"],
  "Bunday hollarda haydovchi shlagbaumga kamida 5 m qolganda to'xtaydi (YHQ 119-band).");
Q("railway", "Shlagbaumsiz kesishmada to'xtash chizig'i, belgi va svetofor bo'lmasa, harakat taqiqlanganda qayerda to'xtash kerak?",
  ["Birinchi temir yo'l iziga kamida 10 m qolganda", "Birinchi temir yo'l iziga kamida 5 m qolganda", "Birinchi temir yo'l iziga kamida 20 m qolganda", "Birinchi temir yo'l iziga kamida 50 m qolganda"],
  "Shlagbaum bo'lmasa haydovchi birinchi temir yo'l iziga kamida 10 m qolganda to'xtaydi (YHQ 119-band).", "stAndrew");
Q("railway", "Shlagbaumsiz kesishma oldida svetofor bor, to'xtash chizig'i yo'q. Svetofor taqiqlovchi ishora bermoqda. Qayerda to'xtaysiz?",
  ["Svetofor oldida", "Birinchi relsga 5 m qolganda", "Birinchi relsning bevosita oldida", "Svetofordan 50 m oldin"],
  "Harakat taqiqlanganda haydovchi avvalo to'xtash chizig'i, 2.5 belgisi yoki svetofor oldida to'xtaydi (YHQ 119-band).");
Q("railway", "Temir yo'l kesishmasi oldida shu belgi o'rnatilgan. Kesishma orqali harakat taqiqlangan holda qayerda to'xtaysiz?",
  ["Belgi oldida", "Birinchi relsdan 1 m oldin", "Belgidan 50 m oldin", "Kesishmaning o'rtasida"],
  "Harakat taqiqlanganda haydovchi to'xtash chizig'i, 2.5 belgisi yoki svetofor oldida to'xtaydi (YHQ 119-band).", "stop");
Q("railway", "Temir yo'l kesishmasida transport vositangiz majburan to'xtab qoldi. Birinchi navbatda nima qilasiz?",
  ["Darhol odamlarni tushirib, kesishmani bo'shatishga kirishasiz", "Mashinada qolib, yordam kutasiz", "Shlagbaumni ko'tarib, poyezd yo'lini ochasiz", "Yo'lovchilarni ichida qoldirib, dvigatelni ta'mirlaysiz"],
  "Kesishmada majburan to'xtagan haydovchi darhol odamlarni tushirib, kesishmani bo'shatish choralarini ko'rishi shart (YHQ 120-band).");
Q("railway", "Kesishmada qolib ketganda, imkoniyat bo'lsa, poyezdni to'xtatish uchun ikki kishi qancha masofaga yuboriladi?",
  ["Ikkala tomonga 1000 m", "Ikkala tomonga 500 m", "Ikkala tomonga 100 m", "Faqat bir tomonga 1000 m"],
  "Ikki kishi temir yo'l yoqasi bo'ylab ikkala tomonga 1000 m masofaga yuboriladi (YHQ 120-band).");
Q("railway", "Kesishmada qolib ketganda yordamga faqat bitta kishi bo'lsa, u qaysi tomonga yuboriladi?",
  ["Yo'l yaxshi ko'rinmaydigan tomonga", "Yo'l yaxshi ko'rinadigan tomonga", "Eng yaqin stansiya tomonga", "Poyezd odatda keladigan tomonga"],
  "Bir kishi bo'lsa, u yo'l yaxshi ko'rinmaydigan tomonga yuboriladi (YHQ 120-band).");
Q("railway", "Poyezdni to'xtatish uchun yuborilayotgan kishilarga haydovchi nimani tushuntirishi kerak?",
  ["Mashinistga to'xtash ishorasini berish qoidasini", "Yaqin stansiyaga qo'ng'iroq qilish tartibini", "Shlagbaumni ochish usulini", "Avariya to'xtash belgisini o'rnatish joyini"],
  "Haydovchi yuborilayotganlarga yaqinlashib kelayotgan poyezd mashinistiga to'xtash ishorasini berish qoidasini tushuntiradi (YHQ 120-band).");
Q("railway", "Odamlarni yuborgandan keyin haydovchining o'zi nima qiladi?",
  ["Transport vositasi yonida qolib, umumiy xatar ishorasini beradi", "Yaqin stansiyaga yugurib borib, xabar beradi", "Shlagbaumni ochib, poyezdni kutadi", "Mashinani tashlab, temir yo'ldan uzoqroq xavfsiz joyga ketadi"],
  "Haydovchi transport vositasi yonida qolishi va umumiy xatar ishorasini berishi kerak (YHQ 120-band).");
Q("railway", "Umumiy xatar ishorasi qanday beriladi?",
  ["Bitta uzun va uchta qisqa tovushli ishora", "Uchta uzun tovushli ishora", "Ikkita uzun va ikkita qisqa tovushli ishora", "Uzluksiz uzun tovushli ishora"],
  "Bitta uzun va uchta qisqa tovushli ishoralar umumiy xatar ishorasi hisoblanadi (YHQ 120-band).");
Q("railway", "Kesishmada qolib ketgan haydovchi poyezdni ko'rganda nima qiladi?",
  ["To'xtash ishorasini berib, poyezd kelayotgan tomonga yuguradi", "Mashinaga o'tirib, dvigatelni o't oldirishga urinadi", "Poyezddan uzoqroq tomonga qochadi", "Mashina yonida qolib, faqat ovozli signal chalib turaveradi"],
  "Poyezd ko'ringanda haydovchi to'xtash ishorasini berib, u kelayotgan tomonga yugurishi kerak (YHQ 120-band).");
Q("railway", "Poyezdni to'xtatish ishorasi qanday beriladi?",
  ["Qo'lni gir aylantirish orqali", "Qo'lni yuqoriga ko'tarib turish orqali", "Qo'llarni yonga uzatish orqali", "Faralarni yoqib-o'chirish orqali"],
  "To'xtash ishorasi qo'lni gir aylantirish orqali beriladi (YHQ 120-band).");
Q("railway", "Tunda poyezdni to'xtatish ishorasini qanday berish kerak?",
  ["Mash'ala yoki chiroqni gir aylantirib", "Yorqin mato parchasini silkitib", "Avtomobil faralarini poyezd tomonga yoqib", "Qo'llarni yonga uzatib, joyida turib"],
  "Tunda to'xtash ishorasi qo'lda mash'ala yoki chiroqni gir aylantirib beriladi, kunduzi esa yorqin mato yoki aniq ko'rinadigan narsa bilan (YHQ 120-band).");
Q("railway", "Kunduzi poyezdni to'xtatish ishorasini berishda qo'lda nima bo'lishi kerak?",
  ["Yorqin mato parchasi yoki aniq ko'rinadigan biror narsa", "Faqat qizil bayroqcha yoki qizil mato", "Faqat yoqilgan chiroq yoki fonar", "Faqat bo'sh qo'l — uni yuqoriga ko'tarib turish kifoya"],
  "Kunduzi qo'lni yorqin mato parchasi yoki aniq ko'rinadigan narsa bilan gir aylantirish kerak (YHQ 120-band).");
Q("railway", "Temir yo'l kesishmasining har ikki tomonidan qancha masofada to'xtab turish taqiqlanadi?",
  ["50 m", "30 m", "100 m", "15 m"],
  "Temir yo'l kesishmalarining har ikkala tomonida 50 m yaqinida to'xtab turish taqiqlanadi (YHQ 92-band).");
Q("railway", "Bu ogohlantiruvchi belgi nima haqida xabar beradi?",
  ["Oldinda shlagbaumli temir yo'l kesishmasi", "Oldinda shlagbaumsiz temir yo'l kesishmasi", "Oldinda tramvay yo'li bilan kesishish", "Oldinda ko'tarma ko'prik"],
  "Shlagbaumli kesishmada shlagbaum yopiq yoki yopila boshlagan bo'lsa kirish taqiqlanadi; harakat taqiqlanganda shlagbaumga kamida 5 m qolganda to'xtaladi (YHQ 118-, 119-bandlar).", "railbarrier");
Q("railway", "Shlagbaum ochiq, svetofor ishlamayapti, navbatchi yo'q, ko'rinish chegarasida poyezd ko'rinmaydi, kesishmadan keyin yo'l bo'sh. Siz:",
  ["Poyezd yo'qligiga ishonch hosil qilib, kesishmadan o'tasiz", "Navbatchi kelguncha kutishingiz shart", "Svetofor ishlamagani uchun distansiya boshlig'idan ruxsat olishingiz shart", "Kesishmadan o'tish umuman taqiqlanadi"],
  "Taqiqlovchi holatlar yo'q bo'lsa, haydovchi barcha vositalarga amal qilib va poyezd yo'qligiga ishonch hosil qilib o'tadi (YHQ 117-, 118-bandlar).");
Q("railway", "Kesishmada yolg'iz haydovchining mashinasi o'chib qoldi, yordamga hech kim yo'q. U nima qilishi kerak?",
  ["Kesishmani bo'shatishga urinib, yonida umumiy xatar ishorasini berishi", "Mashinani qoldirib, yaqin stansiyaga borishi", "Mashinada o'tirib, poyezd to'xtashini kutishi", "Shlagbaumni ochib, o'tayotgan haydovchilarni yordamga chaqirishi"],
  "Kishi yuborish «imkoniyati bo'lganda» talab qilinadi; haydovchi kesishmani bo'shatish choralarini ko'radi, mashina yonida qolib umumiy xatar ishorasini beradi (YHQ 120-band).");
Q("railway", "Kesishma oldida mashinalar shlagbaum ochilishini kutmoqda. Siz qarama-qarshi bo'lak bo'sh ekanini ko'rib, navbatning boshiga chiqmoqchisiz. Bu:",
  ["Taqiqlanadi", "Qarshidan transport kelmasa ruxsat", "Faqat shlagbaum ochilgandan keyin ruxsat", "Faqat ovozli signal berilsa ruxsat"],
  "Kesishma oldida turgan transportni qarama-qarshi harakat bo'lagiga chiqib aylanib o'tish taqiqlanadi (YHQ 118-band).");
