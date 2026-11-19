// q/c_driving.js — Manyovr, joylashuv, tezlik, quvib o'tish (YHQ 9–12-boblar)
// Manba: O'zbekiston Respublikasi Yo'l harakati qoidalari (VM 12.04.2022 yildagi 172-son qarori), 53–87-bandlar.

// ===================== MANYOVR VA JOYLASHUV (9–10-boblar) =====================

// --- 53-band
Q("maneuver", "YHQ 53-bandida sanab o'tilgan manyovr turlaridan biri qaysi?",
  ["Aylanib o'tish", "To'xtab turish", "Shatakka olish", "Yo'lovchini tushirish"],
  "53-band manyovr sifatida qayta tizilish, burilish, qayrilib olish, quvib o'tish va aylanib o'tishni sanaydi (YHQ 53-band).");
Q("maneuver", "Harakatlanishni boshlash va manyovr qilishda haydovchi uchun asosiy talab qaysi?",
  ["Manyovr boshqa ishtirokchilar harakatiga xavf tug'dirmasligi", "Manyovrdan oldin albatta ovozli signal berilishi", "Manyovr faqat oraliq masofa 50 m bo'lganda bajarilishi", "Manyovr faqat to'liq to'xtagan holatdan boshlanishi"],
  "Har qanday manyovr boshqa yo'l harakati ishtirokchilarining harakatlanishiga xavf tug'dirmasligi kerak (YHQ 53-band).");
Q("maneuver", "53-banddagi «xavf tug'dirmaslik» talabi yana qaysi harakatdan oldingi manyovrga ham taalluqli?",
  ["To'xtashdan oldin bajariladigan manyovrga", "Faqat aholi punktidan tashqaridagi manyovrga", "Faqat chorrahadagi burilishga", "Faqat quvib o'tishga"],
  "53-band harakatlanishni boshlash, manyovr qilish va to'xtashdan oldin bajariladigan manyovrga ham xavfsizlik talabini qo'yadi (YHQ 53-band).");

// --- 54-band
Q("maneuver", "Yondosh hududdan (hovli, avtoturargoh, yoqilg'i quyish shoxobchasi) yo'lga chiqayotgan haydovchi kimga yo'l berishi kerak?",
  ["Yo'lda harakatlanayotgan piyodalar va transport vositalariga", "Faqat o'ng tomondan kelayotgan transport vositalariga", "Faqat yo'nalishli transport vositalariga", "Faqat piyodalarga, transport vositalariga emas"],
  "Yondosh hududdan chiqqan haydovchi yo'lda harakatlanayotgan barcha piyoda va transport vositalariga yo'l beradi (YHQ 54-band).");
Q("maneuver", "Yo'ldan yondosh hududga burilib chiqayotgan haydovchi kimga yo'l berishi shart?",
  ["Harakat yo'nalishini kesib o'tayotgan piyoda va velosipedchilarga", "Faqat qarama-qarshi yo'nalishdan kelayotgan avtomobillarga", "Orqadan shu yo'nalishda kelayotgan transport vositalariga", "Faqat to'xtash joyida turgan yo'nalishli transportga"],
  "Yo'ldan chiqishda haydovchi harakatlanish yo'nalishini kesib o'tayotgan piyodalar va velosipedchilarga yo'l berishi kerak (YHQ 54-band).");
Q("maneuver", "Siz avtoturargohdan yo'lga chiqmoqdasiz: trotuar bo'ylab piyoda ketmoqda, qatnov qismida chapdan avtomobil yaqinlashmoqda. To'g'ri harakat qaysi?",
  ["Piyodaga ham, avtomobilga ham yo'l berish", "Faqat avtomobilga yo'l berish", "Faqat piyodaga yo'l berish", "Ishora yoqib, birinchi bo'lib chiqish"],
  "Yondosh hududdan chiqayotgan haydovchi yo'lda harakatlanayotgan piyodalar va transport vositalarining barchasiga yo'l beradi (YHQ 54-band).");

// --- 55-band
Q("maneuver", "Qayta tizilayotgan haydovchi kimga yo'l berishi kerak?",
  ["Yo'nalishini o'zgartirmay ketayotgan yo'lakay transportga", "Faqat o'zidan chapda ketayotgan transport vositalariga", "Faqat tezligi o'zinikidan yuqori bo'lgan transportga", "Faqat yo'nalishli transport vositalariga"],
  "Qayta tizilishda haydovchi harakatlanish yo'nalishini o'zgartirmasdan ketayotgan yo'lakay transport vositalariga yo'l beradi (YHQ 55-band).");
Q("maneuver", "Bir yo'nalishda harakatlanayotgan ikki transport vositasi bir vaqtda qayta tizilmoqda. Kim yo'l beradi?",
  ["Chapdagi haydovchi o'ngdagisiga", "O'ngdagi haydovchi chapdagisiga", "Tezligi kamroq bo'lgan haydovchi", "Gabariti kichikroq transport haydovchisi"],
  "Bir vaqtda qayta tizilishda haydovchi o'ng tomondagi transport vositasiga yo'l berishi kerak (YHQ 55-band).");
Q("maneuver", "Uch tasmali bir tomonlama yo'lda siz chap tasmadan, boshqa avtomobil o'ng tasmadan bir vaqtda o'rta tasmaga o'tmoqda. Qanday harakat qilasiz?",
  ["Unga yo'l berasiz, chunki u sizdan o'ngda", "U sizga yo'l beradi, chunki siz chapdasiz", "Kim oldinroq ishora yoqqan bo'lsa, o'sha o'tadi", "Ikkalangiz ham to'xtab, kelishib olasiz"],
  "Bir yo'nalishda bir vaqtda qayta tizilayotganda o'ng tomondagi transport vositasiga yo'l beriladi (YHQ 55-band).");
Q("maneuver", "Siz qo'shni tasmaga o'tmoqchisiz, ko'zguda o'sha tasmada orqadan to'g'riga kelayotgan avtomobil ko'rinmoqda. Kim yo'l beradi?",
  ["Siz, chunki u yo'nalishini o'zgartirmayapti", "U, chunki siz oldinda ketmoqdasiz", "U, agar siz ishorani oldindan yoqqan bo'lsangiz", "Kim tezroq harakatlansa, o'sha o'tadi"],
  "Qayta tizilayotgan haydovchi yo'nalishini o'zgartirmasdan ketayotgan yo'lakay transportga yo'l beradi (YHQ 55-band).");

// --- 56-band
Q("maneuver", "O'ngga, chapga burilish yoki qayrilib olishdan oldin haydovchi qanday holatni egallashi shart (aylanma harakatli chorrahaga kirishdan tashqari)?",
  ["Shu yo'nalish uchun qatnov qismining eng chetki holatini", "Qatnov qismining o'rta qismini, ikki tomonni kuzatib", "Har qanday bo'sh tasmani, ishorani oldindan yoqib", "Burilish turidan qat'i nazar chetki o'ng holatni"],
  "Burilish va qayrilib olishdan oldin haydovchi oldinroq shu yo'nalish uchun mo'ljallangan qatnov qismining eng chetki holatini egallaydi (YHQ 56-band).");
Q("maneuver", "Har bir yo'nalishda uch tasmali ikki tomonlama yo'lda chorrahada chapga burilmoqchisiz (belgi va chiziqlar boshqa tartib o'rnatmagan). Qaysi tasmadan burilasiz?",
  ["Chetki chap tasmadan", "O'rta tasmadan", "Chetki o'ng tasmadan", "Istalgan tasmadan, ishora yoqilgan bo'lsa"],
  "Chapga burilishdan oldin shu yo'nalishdagi qatnov qismining chetki chap holati egallanadi (YHQ 56-band).");
Q("maneuver", "Chorrahada qayrilib olish uchun haydovchi oldinroq qaysi holatni egallashi kerak?",
  ["Shu yo'nalishdagi qatnov qismining chetki chap holatini", "Chetki o'ng holatni, keyin yo'lni kesib o'tadi", "O'rta tasmani, ikki tomonga qarab", "Qarama-qarshi yo'nalishdagi chetki tasmani"],
  "Qayrilib olishdan oldin ham shu yo'nalish uchun qatnov qismining chetki (chap) holati egallanadi (YHQ 56-band).");
Q("maneuver", "56-banddagi «oldinroq chetki holatni egallash» talabi qaysi holatda qo'llanilmaydi?",
  ["Aylanma harakatli chorrahaga kirish uchun burilishda", "Bir tomonlama yo'lda chapga burilishda", "Aholi punktidan tashqarida o'ngga burilishda", "Yuk avtomobili o'ngga burilganda"],
  "56-band talabi aylanma harakatlanish tashkil qilingan chorrahalarga kirish uchun burilishdan boshqa barcha hollarda amal qiladi (YHQ 56-band).");
Q("maneuver", "Qatnov qismining o'rtasida, u bilan bir sathda bir yo'nalishdagi tramvay izi bor. Boshqa tartib belgilanmagan bo'lsa, chapga burilish qanday bajariladi?",
  ["Tramvayga xalaqit bermasdan shu izdan burilish mumkin", "Tramvay izini egallash taqiqlanadi, o'ng tasmadan buriladi", "Faqat tramvay ortidan, u to'xtagan paytda buriladi", "Tramvay izidan faqat qayrilib olish mumkin"],
  "Bir yo'nalishdagi, bir sathdagi tramvay izidan chapga burilish va qayrilib olishga ruxsat etiladi, lekin bu tramvay harakatiga xalaqit bermasligi kerak (YHQ 56-band).");
Q("maneuver", "Tramvay izidan chapga burilish va qayrilib olish uchun boshqacha harakatlanish tartibini qaysi vositalar o'rnatishi mumkin?",
  ["5.8.1, 5.8.2 belgilari yoki 1.18 chizig'i", "3.20, 3.22 belgilari yoki 1.1 chizig'i", "1.1, 1.3 chiziqlari yoki 3.20 belgisi", "5.8.7, 5.8.8 belgilari yoki 1.9 chizig'i"],
  "Agar 5.8.1 yoki 5.8.2 yo'l belgilari yoxud 1.18 yo'l chizig'i boshqa tartib o'rnatmagan bo'lsa, tramvay izidan burilishga ruxsat etiladi (YHQ 56-band).");

// --- 57-band
Q("maneuver", "Chorrahada chapga burilib, kesishmadan chiqishda transport vositasi qayerda bo'lmasligi kerak?",
  ["Qarama-qarshi yo'nalishdagi harakatlanish tomonida", "Kesib o'tilgan yo'lning chetki o'ng tasmasida", "Kesib o'tilgan yo'lning o'ng yarmida", "Tramvay izidan o'ngdagi tasmada"],
  "Burilish shunday bajarilishi kerakki, kesishmadan chiqayotgan transport vositasi qarama-qarshi harakatlanish tomoniga o'tib ketmasin (YHQ 57-band).");
Q("maneuver", "O'ngga burilishda transport vositasi qanday harakatlanishi kerak?",
  ["Iloji boricha qatnov qismining o'ng chetiga yaqinroq", "Burilishni o'rta tasmadan keng radiusda bajarib", "Kesishmadan chiqib, chap tasmani egallab", "Burilishdan oldin chap tomonga og'ib, keyin o'ngga"],
  "O'ngga burilishda transport vositasi iloji boricha qatnov qismining o'ng chetiga yaqinroqda harakatlanadi (YHQ 57-band).");

// --- 58-band
Q("maneuver", "Gabaritlari tufayli burilishni chetki holatdan bajara olmaydigan transport vositasi haydovchisiga nima ruxsat etiladi?",
  ["Xavfsizlikni ta'minlab, 56-band talabidan chetga chiqish", "Burilishni faqat DYHXX xodimi kuzatuvida bajarish", "Faqat avariya ishorasini yoqib burilish", "Qarama-qarshi tasmadan to'liq foydalanib burilish"],
  "Gabarit yoki boshqa sabablarga ko'ra 56-band talabini bajara olmasa, xavfsizlikni ta'minlagan va boshqalarga xalaqit bermagan holda undan chetga chiqishga yo'l qo'yiladi (YHQ 58-band).");
Q("maneuver", "58-bandga ko'ra quyidagi sabablardan qaysi biri burilishda chetki holatni egallamaslikka asos BO'LMAYDI?",
  ["Chetki tasmadagi tirbandlik", "Transport vositasining katta uzunligi", "Transport vositasining katta kengligi", "Tirkamali tarkibning katta burilish radiusi"],
  "58-band eng chekka tasmalardagi tirbandliklarni bu imtiyozdan aniq istisno qiladi; gabaritlar esa asos bo'ladi (YHQ 58-band).");

// --- 59-band
Q("maneuver", "Chorrahadan tashqarida chapga burilish yoki qayrilib olishda relssiz transport haydovchisi kimga yo'l berishi shart?",
  ["Qarama-qarshi yo'nalishdagi transportga va bir yo'nalishdagi tramvayga", "Faqat qarama-qarshi yo'nalishdagi transportga", "Faqat orqadan kelayotgan avtomobil va avtobuslarga", "Faqat qarama-qarshi yo'nalishdagi tramvayga"],
  "Chorrahadan tashqarida chapga burilish yoki qayrilib olishda qarama-qarshi yo'nalishdagi transport va bir yo'nalishdagi tramvayga yo'l beriladi (YHQ 59-band).");
Q("maneuver", "Chorrahadan tashqarida chapga burilmoqchisiz: qarama-qarshidan avtomobil, orqangizdan esa bir yo'nalishdagi tramvay kelmoqda. Qanday harakat qilasiz?",
  ["Ikkalasiga ham yo'l berasiz", "Faqat avtomobilga yo'l berasiz", "Faqat tramvayga yo'l berasiz", "Ikkalasi ham sizga yo'l berishi kerak"],
  "Chorrahadan tashqarida chapga burilayotgan relssiz transport haydovchisi qarama-qarshi transportga ham, bir yo'nalishdagi tramvayga ham yo'l beradi (YHQ 59-band).");
Q("maneuver", "Chorrahadan tashqarida yo'l kengligi chetki chap holatdan qayrilib olishga yetmasa, qanday harakat qilinadi?",
  ["Qayrilishni o'ng yo'l yoqasidan bajarish mumkin", "Bunday yo'lda qayrilib olish taqiqlanadi", "Qayrilish faqat orqaga harakatlanib bajariladi", "Qayrilish qarama-qarshi yo'l yoqasidan boshlanadi"],
  "Kenglik yetarli bo'lmasa, chorrahadan tashqarida qayrilib olishni qatnov qismining o'ng chetidan (o'ng yo'l yoqasidan) bajarishga yo'l qo'yiladi (YHQ 59-band).");
Q("maneuver", "Tor yo'lda qayrilib olishni o'ng yo'l yoqasidan boshlayotgan haydovchi kimga yo'l beradi?",
  ["Shu va qarama-qarshi yo'nalishdagi transport vositalariga", "Faqat qarama-qarshi yo'nalishdagi transport vositalariga", "Faqat shu yo'nalishda orqadan kelayotganlarga", "Faqat yo'l yoqasida turgan transportga"],
  "O'ng chetdan qayrilib olishda haydovchi shu yo'nalishdagi va qarama-qarshi yo'nalishdagi transport vositalariga yo'l berishi shart (YHQ 59-band).");

// --- 60-band
Q("maneuver", "Transport vositalarining harakat yo'nalishlari kesishsa va o'tish navbati Qoidalarda nazarda tutilmagan bo'lsa, kim yo'l beradi?",
  ["O'ng tomondan yaqinlashayotganga yo'l beriladi", "Chap tomondan yaqinlashayotganga yo'l beriladi", "Kattaroq transport vositasiga yo'l beriladi", "Tezroq harakatlanayotganga yo'l beriladi"],
  "O'tish navbati belgilanmagan hollarda haydovchi o'ng tomondan yaqinlashayotgan transport vositasiga yo'l berishi kerak (YHQ 60-band).");
Q("maneuver", "Siz yengil avtomobil, o'ng tomoningizdan esa yuk avtomobili yaqinlashmoqda; yo'nalishlar kesishadi, navbat Qoidalarda belgilanmagan. Kim birinchi o'tadi?",
  ["Yuk avtomobili, chunki u sizdan o'ngda", "Siz, chunki yengil avtomobil chaqqonroq", "Siz, chunki yuk avtomobili sekin yuradi", "Kim birinchi yaqinlashgan bo'lsa, o'sha"],
  "Navbat Qoidalarda nazarda tutilmaganda transport turi emas, o'ng tomondan yaqinlashish hal qiladi (YHQ 60-band).");

// --- 61-band
Q("maneuver", "Sekinlashish bo'lagi bor yo'lda burilmoqchi bo'lgan haydovchi nima qilishi kerak?",
  ["O'z vaqtida shu bo'lakka o'tib, tezlikni faqat unda kamaytirishi", "Asosiy tasmada tezlikni kamaytirib, keyin bo'lakka o'tishi", "Bo'lakdan foydalanmay, asosiy tasmadan burilishi", "Bo'lak boshida to'xtab, keyin burilishi"],
  "Sekinlashish bo'lagi bor yo'lda haydovchi o'z vaqtida unga qayta tiziladi va tezlikni faqat unda kamaytiradi (YHQ 61-band).");
Q("maneuver", "Avtomobil yo'lidan chiqish oldidan sekinlashish bo'lagi boshlanmoqda. Tezlikni qayerda pasaytirasiz?",
  ["Sekinlashish bo'lagiga o'tgandan so'ng", "Asosiy tasmada, bo'lak boshlanishidan oldin", "Asosiy tasmada, ishora yoqqan zahoti", "Bo'lakka o'tishda asosiy tasmani qisman egallab"],
  "Tezlikni asosiy tasmada emas, faqat sekinlashish bo'lagida kamaytirish talab qilinadi (YHQ 61-band).");
Q("maneuver", "Yo'lga chiqish joyida tezlashish bo'lagi bo'lsa, haydovchi qanday harakat qiladi?",
  ["Bo'lakda tezlashib, qo'shni tasmadagilarga yo'l berib qo'shiladi", "Bo'lakni chetlab, darhol asosiy tasmaga chiqadi", "Qo'shni tasmadagilar unga yo'l berishini kutadi", "Bo'lak oxirida albatta to'xtab, keyin qo'shiladi"],
  "Tezlashish bo'lagida harakatlanib, qo'shni tasmadagi transport vositalariga yo'l bergan holda oqimga qo'shiladi (YHQ 61-band).");
Q("maneuver", "Tezlashish bo'lagidan asosiy tasmaga qo'shilmoqdasiz, asosiy tasmada yonginangizda avtomobil ketmoqda. Kim yo'l beradi?",
  ["Siz unga yo'l berasiz", "U sizga yo'l berishi shart", "U chap tasmaga o'tib sizga joy berishi shart", "Kim oldinroq bo'lsa, o'sha o'tadi"],
  "Tezlashish bo'lagidan chiqayotgan haydovchi qo'shni tasmada harakatlanayotgan transport vositalariga yo'l beradi (YHQ 61-band).");

// --- 62-band
Q("maneuver", "Quyidagi joylardan qaysi birida qayrilib olish taqiqlanadi?",
  ["Tunnelda", "Belgi taqiqlamagan tartibga solingan chorrahada", "Har ikki yo'nalishda ko'rinish 300 m bo'lgan joyda", "Uzuq chiziq bilan ajratilgan ikki tasmali yo'lda"],
  "Tunnellarda qayrilib olish taqiqlanadi (YHQ 62-band).");
Q("maneuver", "Yo'lning ko'rinishi biror yo'nalishda necha metrdan kam bo'lsa, qayrilib olish taqiqlanadi?",
  ["100 m", "150 m", "200 m", "50 m"],
  "Yo'lning ko'rinishi biror-bir yo'nalishda 100 metrdan kam bo'lgan joylarda qayrilib olish taqiqlanadi (YHQ 62-band).");
Q("maneuver", "Oldinga ko'rinish 150 m, orqaga esa (burilish tufayli) atigi 80 m. Bu joyda qayrilib olish mumkinmi?",
  ["Yo'q, bir yo'nalishda ko'rinish 100 m dan kam", "Ha, oldinga ko'rinish 100 m dan ko'p", "Ha, o'rtacha ko'rinish 100 m dan ko'p", "Ha, faqat yaqin chiroqlar yoqilgan bo'lsa"],
  "Taqiq ko'rinish biror-bir yo'nalishda 100 m dan kam bo'lganda amal qiladi, shuning uchun bitta yo'nalish yetarli (YHQ 62-band).");
Q("maneuver", "Ko'prikda qayrilib olish qachon mumkin?",
  ["Tegishli yo'l belgilari bilan ruxsat berilgan bo'lsa", "Ko'prikda harakat siyrak bo'lsa", "Ko'prik uzunligi 100 m dan kam bo'lsa", "Ko'prikda tasmalar soni uchtadan ko'p bo'lsa"],
  "Ko'priklar, yo'l o'tkazgichlar, estakadalar va ularning ostida qayrilib olish taqiqlanadi, belgilar bilan ruxsat berilgan qismlar bundan mustasno (YHQ 62-band).");
Q("maneuver", "Estakada ostidan o'tayotgan yo'lda qayrilib olish (belgi bilan ruxsat berilmagan) mumkinmi?",
  ["Yo'q, estakada ostida ham taqiqlanadi", "Ha, taqiq faqat estakadaning ustiga tegishli", "Ha, ko'rinish 100 m dan ko'p bo'lsa", "Ha, chorraha bo'lmasa"],
  "Taqiq ko'priklar, yo'l o'tkazgichlar, estakadalarning o'zida ham, ularning ostida ham amal qiladi (YHQ 62-band).");
Q("maneuver", "Temir yo'l kesishmasining ustida qayrilib olish:",
  ["Taqiqlanadi", "Shlagbaum ochiq bo'lsa ruxsat etiladi", "Poyezd ko'rinmasa ruxsat etiladi", "Faqat yengil avtomobillarga ruxsat etiladi"],
  "Temir yo'l kesishmalarida qayrilib olish taqiqlanadi (YHQ 62-band).");
Q("maneuver", "Piyodalar o'tish joyida qayrilib olish:",
  ["Piyoda bo'lmasa ham taqiqlanadi", "Piyoda bo'lmasa ruxsat etiladi", "Faqat tartibga solingan o'tish joyida ruxsat", "Faqat aholi punktidan tashqarida ruxsat"],
  "Piyodalarning o'tish joylarida qayrilib olish piyoda bor-yo'qligidan qat'i nazar taqiqlanadi (YHQ 62-band).", "crossing");

// --- 63-band
Q("maneuver", "Orqaga harakatlanayotgan haydovchi yo'lni yaxshi ko'ra olmasa, nima qilishi kerak?",
  ["Boshqa shaxslarning yordamidan foydalanishi", "Avariya ishorasini yoqib, sekin harakatlanishi", "Ovozli signal berib, harakatni davom ettirishi", "Faqat orqa ko'rinish kamerasiga tayanishi"],
  "Orqaga harakatlanishda haydovchi xavfsizlikni ta'minlashi, zarurat bo'lganda boshqa shaxslar yordamidan foydalanishi kerak (YHQ 63-band).");
Q("maneuver", "Orqaga harakatlanish qaysi joyda taqiqlanadi?",
  ["Chorrahalarda", "Hovli ichidagi yo'lda", "Avtoturargohda", "Yondosh hududga kirishda"],
  "Orqaga harakatlanish chorrahalarda va qayrilib olish taqiqlangan joylarda taqiqlanadi (YHQ 63-band).");
Q("maneuver", "Quyidagi joylardan qaysi birida orqaga harakatlanish taqiqlanadi?",
  ["Tunnelda", "Ko'rinishi 200 m bo'lgan to'g'ri yo'lda", "Yondosh hududdagi avtoturargohda", "Turar joy dahasidagi hovlida"],
  "Orqaga harakatlanish 62-bandga ko'ra qayrilib olish mumkin bo'lmagan joylarda, jumladan tunnellarda taqiqlanadi (YHQ 63-band).");
Q("maneuver", "Ko'rinish 70 m bo'lgan burilishda to'xtash joyini o'tkazib yubordingiz. Orqaga harakatlanib qaytish mumkinmi?",
  ["Yo'q, bu joyda orqaga yurish taqiqlanadi", "Ha, avariya ishorasi yoqilgan holda", "Ha, 20 m dan oshmaydigan masofaga", "Ha, boshqa shaxs yordamidan foydalanib"],
  "Ko'rinish 100 m dan kam joyda qayrilib olish taqiqlangan, demak orqaga harakatlanish ham taqiqlanadi (YHQ 63-band).");
Q("maneuver", "Piyodalar o'tish joyini to'xtash chizig'idan o'tib egallab qo'ydingiz. Orqaga harakatlanib chiqish mumkinmi?",
  ["Yo'q, o'tish joyida orqaga yurish taqiqlanadi", "Ha, agar o'tish joyida piyoda bo'lmasa", "Ha, orqada boshqa transport bo'lmasa", "Ha, oldin ovozli signal berib"],
  "Piyodalar o'tish joyida qayrilib olish taqiqlangan, shu sababli u yerda orqaga harakatlanish ham taqiqlanadi (YHQ 63-band).");

// --- 64-band
Q("maneuver", "Yo'l chiziqlari va tasmalar sonini ko'rsatuvchi belgilar bo'lmasa, harakatlanish tasmalari sonini kim aniqlaydi?",
  ["Haydovchilarning o'zlari, kenglik va gabaritlarni hisobga olib", "Har doim har yo'nalishda bitta tasma deb hisoblanadi", "Har doim ikki tomonlama yo'lda to'rt tasma deb hisoblanadi", "Faqat yo'lning o'rtasidagi chiziq ustidan yuriladi"],
  "Chiziq va belgilar bo'lmasa, haydovchilar qatnov qismi kengligi, yonlama oraliq va gabaritlarni hisobga olib tasmalar sonini o'zlari aniqlaydilar (YHQ 64-band).");
Q("maneuver", "Chiziqlar bilan belgilanmagan ikki tomonlama yo'lda qatnov qismining qaysi qismi qarama-qarshi harakat uchun mo'ljallangan hisoblanadi?",
  ["Chap tomondagi yarmi (mahalliy kengayishlarsiz)", "Chap tomondagi uchdan bir qismi", "Faqat chetki chap 3 metrli qismi", "Yo'l o'qidan chapdagi va o'ngdagi teng ulushlar"],
  "Ikki tomonlama yo'l qatnov qismining chap yarmi, mahalliy kengayishlarni hisobga olmagan holda, qarama-qarshi yo'nalish uchun hisoblanadi (YHQ 64-band).");
Q("maneuver", "Qatnov qismining chap yarmini aniqlashda nimalar hisobga olinmaydi?",
  ["Sekinlashish, tezlashish tasmalari va bekat kengayishlari", "Yo'l yoqalari va trotuarlar kengligi bilan birga", "Faqat tramvay izlari egallagan qism", "Qarama-qarshi yo'nalishdagi chetki tasma"],
  "Chap yarmni aniqlashda sekinlashish/tezlashish tasmalari, ko'tarilishdagi qo'shimcha tasmalar, bekatlardagi kengayishlar hisobga olinmaydi (YHQ 64-band).");
Q("maneuver", "Quyidagi qaysi holatda qarama-qarshi yo'nalishdagi harakat tomoniga chiqish taqiqlanadi?",
  ["Yo'nalishlar tramvay yo'li bilan ajratilgan bo'lsa", "Yo'nalishlar uzuq-uzuq chiziq bilan ajratilgan bo'lsa", "Uzuq-uzuq tomoni sizga yaqin bo'lgan 1.11 chizig'i bo'lsa", "Yo'l chiziqlari umuman bo'lmasa"],
  "Tramvay yo'li, ajratuvchi tasma, 1.1, 1.3 chiziqlari yoki uzuq-uzuq tomoni chapda joylashgan 1.11 chizig'i bilan ajratilgan yo'llarda qarama-qarshi tomonga chiqish taqiqlanadi (YHQ 64-band).");
Q("maneuver", "Qarama-qarshi oqimlar shunday uzluksiz chiziq bilan ajratilgan. Oldindagi sekin avtomobilni chetlab o'tish uchun qarama-qarshi tomonga chiqish mumkinmi?",
  ["Yo'q, bunday chiziqda taqiqlanadi", "Ha, qarama-qarshidan transport bo'lmasa", "Ha, chapga burilish ishorasi yoqilgan bo'lsa", "Ha, aholi punktidan tashqarida"],
  "Uzluksiz 1.1 chizig'i bilan ajratilgan yo'llarda qarama-qarshi yo'nalishga chiqish taqiqlanadi (YHQ 64-band).", "m_solid");
Q("maneuver", "Qarama-qarshi oqimlar 1.11 chizig'i bilan ajratilgan, uning uzuq-uzuq tomoni sizdan chapda (uzoqroqda) joylashgan. Qarama-qarshi tomonga chiqish mumkinmi?",
  ["Yo'q, bu holda chiqish taqiqlanadi", "Ha, chunki chiziqning bir qismi uzuq", "Ha, faqat quvib o'tish uchun", "Ha, faqat qayrilib olish uchun"],
  "Uzuq-uzuq tomoni chapda joylashgan 1.11 chizig'i bilan ajratilgan yo'lda qarama-qarshi yo'nalishga chiqish taqiqlanadi (YHQ 64-band).", "m_combo");

// --- 65-band
Q("maneuver", "To'rt va undan ortiq tasmali ikki tomonlama yo'lda qarama-qarshi yo'nalish tasmalariga chiqish:",
  ["Taqiqlanadi", "Faqat quvib o'tish uchun ruxsat etiladi", "Faqat to'siqni aylanib o'tish uchun ruxsat", "Qarama-qarshidan transport bo'lmasa ruxsat"],
  "To'rt va undan ortiq tasmali ikki tomonlama yo'llarda qarama-qarshi yo'nalish tasmalariga chiqish taqiqlanadi (YHQ 65-band).");
Q("maneuver", "To'rt tasmali ikki tomonlama yo'lda sizning yo'nalishingizdagi ikkala tasma tiqilib qolgan, qarama-qarshi tasmalar bo'sh. Ulardan foydalanish mumkinmi?",
  ["Yo'q, ularga chiqish taqiqlanadi", "Ha, qisqa masofaga avariya ishorasi bilan", "Ha, faqat chapga burilish uchun", "Ha, agar chiziqlar uzuq-uzuq bo'lsa"],
  "To'rt va undan ortiq tasmali ikki tomonlama yo'llarda qarama-qarshi tasmalarga chiqish har qanday sharoitda taqiqlanadi (YHQ 65-band).");

// --- 66-band
Q("maneuver", "Chiziqlar bilan belgilangan uch tasmali ikki tomonlama yo'lda o'rta tasmaga qaysi maqsadda chiqish mumkin?",
  ["Quvib o'tish, aylanib o'tish, chapga burilish, qayrilib olish", "O'ng tasma band bo'lganda doimiy harakatlanish uchun", "Faqat yo'nalishli transport vositalari harakati uchun", "Faqat tezligi 40 km/soatdan past transportni o'tkazish uchun"],
  "Ikki yo'nalish uchun mo'ljallangan o'rta tasmaga faqat quvib o'tish, aylanib o'tish, chapga burilish va qayrilib olish uchun chiqiladi (YHQ 66-band).");
Q("maneuver", "Uch tasmali ikki tomonlama yo'lda (1.9 chizig'i bilan belgilanmagan) chetki chap tasmani egallash:",
  ["Taqiqlanadi", "Quvib o'tish uchun ruxsat etiladi", "Chapga burilish uchun ruxsat etiladi", "O'rta tasma band bo'lsa ruxsat etiladi"],
  "Bunday yo'lda qarama-qarshi yo'nalish uchun mo'ljallangan chetki chap qatorni egallash taqiqlanadi (YHQ 66-band).");
Q("maneuver", "66-banddagi uch tasmali yo'llar qoidasi qaysi chiziq bilan belgilangan yo'llarga taalluqli emas?",
  ["1.9 chizig'i", "1.5 chizig'i", "1.6 chizig'i", "1.11 chizig'i"],
  "66-band uch tasmali yo'llarga 1.9 yo'l chizig'i bilan belgilangan holatdan tashqari hollarda qo'llaniladi (YHQ 66-band).");

// --- 67-band
Q("maneuver", "Aholi punktidan tashqaridagi yo'lda haydovchi qatnov qismida qanday joylashishi kerak?",
  ["Mumkin qadar o'ng chetga yaqin, bo'sh o'ng tasmalarni qoldirmay", "O'ziga qulay har qanday tasmada, belgilarni hisobga olib", "Ikki tasmali yo'lda o'rtaroqda, yo'l o'qiga yaqin", "Tezligi yuqori bo'lsa doimo chap tasmada, sekin bo'lsa o'ngda"],
  "Aholi punktidan tashqarida transport vositasi o'ng chetga yaqin boshqariladi; o'ng tasmalar bo'sh bo'lganda chap tasmalarni egallash taqiqlanadi (YHQ 67-band).");
Q("maneuver", "Aholi punktida, ayrim transport turlari uchun belgilar bilan yuqoriroq tezlik ruxsat etilgan yo'l qismida qanday joylashish kerak?",
  ["Mumkin qadar o'ng chetga yaqin", "O'ziga qulay har qanday tasmada", "Yuqori tezlik uchun chetki chap tasmada", "Oqim tezligiga mos o'rta tasmada"],
  "Aholi punktlarida yuqoriroq tezlik ruxsat etilgan yo'l qismlarida ham o'ng chetga yaqin harakatlanish talab qilinadi (YHQ 67-band).");
Q("maneuver", "Aholi punktida (oddiy tezlik rejimi) haydovchi qaysi tasmadan foydalanishi mumkin?",
  ["O'ziga qulay tasmadan, 69, 123, 161-bandlarni hisobga olib", "Faqat chetki o'ng tasmadan", "Faqat o'ng tasma band bo'lsa chapdagisidan", "Faqat yo'nalishli transport tasmasidan tashqari chapdagisidan"],
  "Aholi punktlarida haydovchilar, belgilangan istisnolarni hisobga olgan holda, o'zlariga qulay harakatlanish bo'lagidan foydalanishlari mumkin (YHQ 67-band).");
Q("maneuver", "Aholi punktida serqatnovlik sababli barcha tasmalar band. Qatorni qaysi maqsadda o'zgartirish ruxsat etiladi?",
  ["Burilish, qayrilish, to'xtash yoki to'siqni aylanib o'tish uchun", "Tezroq harakatlanayotgan qo'shni tasmaga o'tish uchun", "Oldindagi sekin yuk avtomobilini quvib o'tish uchun", "Ko'proq ko'rinish olish uchun chap tasmaga o'tishga"],
  "Serqatnovlik sababli tasmalar band bo'lganda qator faqat burilish, qayrilib olish, to'xtash yoki to'siqni aylanib o'tish uchun o'zgartiriladi (YHQ 67-band).");
Q("maneuver", "Bir yo'nalishda uch tasmali yo'lda yengil avtomobil chetki chap tasmani qachon egallashi mumkin?",
  ["Tirbandlikda, quvib o'tish, chapga burilish yoki qayrilish uchun", "Faqat chapga burilish va qayrilib olish uchun, boshqa hollarda emas", "Har doim, chunki aholi punktida tasma erkin tanlanadi", "Faqat tezligi o'ng tasmadagilardan yuqori bo'lganda"],
  "Bir yo'nalishdagi uch va undan ortiq tasmali yo'lda chetki chap qator serqatnovlik, quvib o'tish, chapga burilish yoki qayrilib olish uchun egallanishi mumkin (YHQ 67-band).");
Q("maneuver", "Bir yo'nalishda uch va undan ortiq tasmali yo'lda yuk avtomobiliga chetki chap qatorni egallash qachon ruxsat etiladi?",
  ["Faqat chapga burilish yoki qayrilib olish uchun", "Quvib o'tish uchun ham, burilish uchun ham", "Boshqa tasmalar band bo'lganda", "Aholi punktida har doim"],
  "Yuk avtomobillariga chetki chap qatorni faqat chapga burilish yoki qayrilib olish uchun egallashga ruxsat etiladi, boshqa hollarda taqiqlanadi (YHQ 67-band).");
Q("maneuver", "Bir tomonlama yo'lning chap bo'lagida to'xtash va to'xtab turish qaysi band asosida amalga oshiriladi?",
  ["88-band", "62-band", "72-band", "123-band"],
  "Harakat bir tomonlama bo'lgan yo'lning chap bo'lagida to'xtash va to'xtab turish 88-bandga muvofiq amalga oshiriladi (YHQ 67-band).");

// --- 68-band
Q("maneuver", "Tezligini 40 km/soatdan oshira olmaydigan transport vositasi asosan qaysi qatorda harakatlanishi kerak?",
  ["Faqat chetki o'ng qatorda", "Yo'l bo'sh bo'lsa istalgan qatorda", "O'rta qatorda", "Aholi punktida qulay qatorda"],
  "Tezligini 40 km/soatdan oshira olmaydigan transport vositalari belgilangan istisnolardan tashqari faqat chetki o'ng qatorda harakatlanadi (YHQ 68-band).");
Q("maneuver", "Tezligi 40 km/soatdan oshmaydigan transport vositasi qaysi holatda chetki o'ng qatordan chiqishi mumkin?",
  ["Chapga burilish uchun qayta tizilganda", "O'ng qator tirbandlikda band bo'lganda", "Aholi punktida qulayroq qator tanlaganda", "Yo'l bo'shligida tezroq yurish uchun"],
  "Bunday transport vositalari aylanib o'tish, quvib o'tish, chapga burilish, qayrilib olish yoki ruxsat etilgan joyda chapda to'xtash uchungina o'ng qatordan chiqadi (YHQ 68-band).");
Q("maneuver", "Texnik nosozlik sababli tezligini 40 km/soatdan oshira olmayotgan avtomobil uchun qaysi qoida amal qiladi?",
  ["U ham chetki o'ng qatorda harakatlanishi kerak", "Qoida faqat traktorlarga tegishli", "Qoida faqat aholi punktidan tashqarida amal qiladi", "Avariya ishorasi yoqilsa, istalgan qatorda yuradi"],
  "68-band texnik sabablarga ko'ra tezligini 40 km/soatdan oshira olmaydigan transport vositalariga ham taalluqli (YHQ 68-band).");

// --- 69-band
Q("maneuver", "Bir yo'nalishdagi qatnov qismining chap tomonida, u bilan bir sathda joylashgan tramvay yo'lidan qachon harakatlanish mumkin?",
  ["Shu yo'nalishdagi boshqa tasmalar band bo'lganda", "Har doim, agar tramvay ko'rinmasa", "Tramvay bekatidan keyingi qismda, har doim", "Faqat yo'nalishli taksilarga"],
  "Shu yo'nalishdagi boshqa tasmalar band bo'lganda, shuningdek aylanib o'tish, chapga burilish va qayrilib olish uchun bunday tramvay yo'lidan harakatlanishga ruxsat etiladi, tramvayga xalaqit bermaslik sharti bilan (YHQ 69-band).");
Q("maneuver", "Qarama-qarshi yo'nalishdagi tramvay yo'lidan harakatlanish:",
  ["Taqiqlanadi", "Boshqa tasmalar band bo'lsa ruxsat", "Faqat chapga burilish uchun ruxsat", "Tramvay ko'rinmasa ruxsat"],
  "Qarama-qarshi yo'nalishdagi tramvay yo'lidan harakatlanish taqiqlanadi (YHQ 69-band).");
Q("maneuver", "Chorrahadan oldin 5.8.1 yoki 5.8.2 belgisi o'rnatilgan. Chorrahadan bir yo'nalishdagi tramvay izi bo'ylab o'tish mumkinmi?",
  ["Yo'q, bu holda tramvay izidan o'tish taqiqlanadi", "Ha, boshqa tasmalar band bo'lsa", "Ha, tramvayga xalaqit bermasa", "Ha, faqat to'g'riga harakatlanish uchun bo'lsa"],
  "Agar chorrahadan oldin 5.8.1 yoki 5.8.2 belgilari o'rnatilgan bo'lsa, chorrahadan o'tishda tramvay yo'llaridan harakatlanish taqiqlanadi (YHQ 69-band).");
Q("maneuver", "Tirbandlik sababli bir yo'nalishdagi tramvay izi bo'ylab ketmoqdasiz, orqadan tramvay yaqinlashdi. Qanday harakat qilasiz?",
  ["Imkon topib izni bo'shatasiz, tramvayga xalaqit bermaysiz", "Harakatni davom ettirasiz — siz izga birinchi chiqqansiz", "To'xtab, tramvay sizni aylanib o'tishini kutasiz", "Qarama-qarshi tramvay iziga o'tasiz"],
  "Tramvay yo'lidan harakatlanishga ruxsat tramvayga xalaqit bermaslik sharti bilan beriladi (YHQ 69-band).");

// --- 70-band
Q("maneuver", "Tasmalarga ajratuvchi uzuq-uzuq chiziqni bosib o'tishga qachon ruxsat etiladi?",
  ["Faqat qayta tizilishda", "Tasmalar orasida harakatlanishda", "Tirbandlikda ikki tasmani egallab turishda", "Tezlikni oshirish uchun yo'l tanlashda"],
  "Qatnov qismi chiziqlar bilan tasmalarga ajratilgan bo'lsa, harakat qat'iy tasmalarda bo'ladi; uzuq-uzuq chiziqlarni faqat qayta tizilishda bosib o'tish mumkin (YHQ 70-band).", "m_dashed");
Q("maneuver", "Qatnov qismi chiziqlar bilan tasmalarga ajratilgan. Ikki tasma o'rtasidagi chiziq ustidan uzoq vaqt harakatlanish:",
  ["Taqiqlanadi — harakat qat'iy tasmalarda", "Ruxsat etiladi, agar chiziq uzuq-uzuq bo'lsa", "Ruxsat etiladi, agar yo'l bo'sh bo'lsa", "Faqat yuk avtomobillariga ruxsat etiladi"],
  "Chiziqlar bilan tasmalarga ajratilgan yo'lda harakat qat'iy ravishda belgilangan tasmalarda amalga oshiriladi (YHQ 70-band).");

// --- 71-band
Q("maneuver", "Reversiv harakatlanishli yo'lga burilayotganda kesishmadan chiqishda qaysi tasmani egallash kerak?",
  ["Chetki o'ng tasmani", "Chetki chap tasmani", "O'rta tasmani", "Eng bo'sh tasmani"],
  "Reversiv harakatli yo'lga burilishda transport vositasi kesishmadan chiqishda chetki o'ng qatorni egallashi kerak (YHQ 71-band).");
Q("maneuver", "Reversiv harakatli yo'lga burilgach, boshqa tasmaga qayta tizilishga qachon ruxsat etiladi?",
  ["Bu tasmadan harakat ruxsat etilganiga ishonch hosil qilgach", "Kesishmadan kamida 50 m uzoqlashgandan keyin", "Burilish ishorasini o'chirgach darhol, istalgan tasmaga", "Faqat keyingi chorrahadan o'tgandan so'ng"],
  "Haydovchi boshqa tasmalardan ham harakatlanish ruxsat etilganiga ishonch hosil qilgandan keyingina qayta tizilishi mumkin (YHQ 71-band).");

// --- 72-band
Q("maneuver", "Quyidagi joylardan qaysi birida mexanik transport vositasining harakatlanishi (88, 166-bandlardagi hollardan tashqari) taqiqlanadi?",
  ["Yo'l yoqasida", "Sekinlashish tasmasida", "Bir yo'nalishdagi tramvay izida", "Reversiv tasmada"],
  "Ajratuvchi mintaqalar, yo'l yoqalari, trotuarlar, piyoda va velosiped yo'lkalari, yashil hududlarda mexanik transport harakati taqiqlanadi (YHQ 72-band).");
Q("maneuver", "Tirbandlikni aylanib o'tish uchun trotuar yoki yo'l yoqasidan yurish:",
  ["Taqiqlanadi", "Qisqa masofada ruxsat etiladi", "Avariya ishorasi yoqilsa ruxsat etiladi", "Piyoda bo'lmasa ruxsat etiladi"],
  "Mexanik transport vositalarining yo'l yoqalari va trotuarlarda harakatlanishi taqiqlanadi; tirbandlik bunga asos emas (YHQ 72-band).");
Q("maneuver", "Trotuar va yo'l yoqasida harakatlanishga qaysi transport vositalariga ruxsat etiladi?",
  ["Yo'ldan foydalanish va kommunal xizmat mashinalariga", "Barcha yengil taksilarga", "Shoshilinch ishi bor har qanday shaxsiy avtomobilga", "Tirkamasiz yuk avtomobillariga"],
  "Bu joylarda yo'ldan foydalanish va kommunal xizmat mashinalarining harakatlanishiga ruxsat etiladi (YHQ 72-band).");
Q("maneuver", "Do'kon to'g'ridan-to'g'ri trotuar oldida joylashgan, unga boshqa yo'l bilan yetib bo'lmaydi. Yuk keltirgan avtomobil trotuarga kira oladimi?",
  ["Ha, eng yaqin yo'ldan, xavfsizlikni ta'minlab", "Yo'q, yuk faqat qatnov qismida tushiriladi", "Ha, istalgan yo'ldan va istalgan masofaga", "Ha, lekin faqat piyodalar yo'q paytda"],
  "Boshqa imkoniyati bo'lmagan holda savdo shoxobchalari va korxonalarga yuk olib kirish uchun yaqin yo'ldan kirishga, xavfsizlik ta'minlangan holda, ruxsat etiladi (YHQ 72-band).");

// --- 73-band
Q("maneuver", "Oldindagi transport vositasigacha oraliq masofa qanday bo'lishi kerak?",
  ["U keskin tormoz berganda to'qnashuvning oldini oladigan", "Tezlikdagi sonning yarmiga teng metrlarda", "Aholi punktida doimo 10 m, tashqarida 50 m", "Oldindagi transport uzunligidan ikki baravar"],
  "Haydovchi oldindagi transport vositasi keskin tormoz berganda to'qnashmaslik kafolatini beradigan oraliq masofani saqlashi kerak (YHQ 73-band).");
Q("maneuver", "Yonma-yon harakatlanayotgan transport vositasi bilan yonlama oraliq masofa qanday tanlanadi?",
  ["Yo'l harakati xavfsizligini ta'minlaydigan darajada", "Aholi punktida doim aniq 0,5 m", "Tezlikdan qat'i nazar kamida 2 m", "Tasma kengligining yarmiga teng"],
  "Haydovchi yo'l harakati xavfsizligini ta'minlaydigan yonlama oraliq masofani saqlashi kerak; Qoidalarda aniq raqam belgilanmagan (YHQ 73-band).");

// --- 74-band
Q("maneuver", "74-band (quvib o'tayotganlar uchun oldinda bo'sh joy qoldirish) qaysi transport vositalari haydovchilariga taalluqli?",
  ["Tezligi 50 km/soatdan oshmaydigan yoki uzunligi 7 m dan ortiq", "Tezligi 40 km/soatdan oshmaydigan yoki uzunligi 5 m dan ortiq", "Faqat og'irligi 3,5 t dan ortiq yuk avtomobillari", "Faqat shaharlararo avtobuslar"],
  "Talab tezligini 50 km/soatdan oshira olmaydigan hamda uzunligi 7 metrdan ortiq transport vositalariga (tarkiblarga) taalluqli (YHQ 74-band).");
Q("maneuver", "Uzunligi 7 m dan ortiq transport vositasi oldindagi transport bilan masofa qoldirishi talabi qaysi yo'llarda amal qiladi?",
  ["Aholi punktidan tashqaridagi ikki tasmali ikki tomonlama yo'llarda", "Barcha avtomagistrallar va tezyurar yo'llarda", "Aholi punktlaridagi barcha ikki tomonlama yo'llarda", "Bir tomonlama ko'p tasmali barcha yo'llarda"],
  "Bu talab aholi yashash joylaridan tashqaridagi ikki tomonlama harakatli ikki tasmali yo'llarda amal qiladi (YHQ 74-band).");
Q("maneuver", "Uzun transport vositasi o'zi va oldindagi transport orasida qanday masofa qoldirishi kerak?",
  ["Quvib o'tgan transport bemalol qayta tizila oladigan", "Aholi punktidan tashqarida kamida 100 m", "Tezlikdan qat'i nazar kamida 50 m", "O'z uzunligining ikki baravariga teng"],
  "Masofa ularni quvib o'tayotgan transport vositalari oldin egallagan qatoriga bemalol qayta tizilishi uchun imkon berishi kerak (YHQ 74-band).");
Q("maneuver", "74-banddagi masofa saqlash talabi qaysi holatda qo'llanilmaydi?",
  ["Transportning tashkiliy jamlanmasi tarkibida harakatlanganda", "Yo'lda ko'rinish 300 m dan ortiq bo'lganda", "Kunduzi, quruq va tekis yo'lda harakatlanganda", "Yuk avtomobili yuksiz, bo'sh ketayotganda"],
  "Quvib o'tish taqiqlangan yo'llarda, tashkiliy jamlanma tarkibida va serqatnov yo'llarda bu talabga amal qilinmaydi (YHQ 74-band).");

// --- 75-band
Q("maneuver", "To'siq sababli qarama-qarshi yo'nalishlarda harakatlanish qiyin bo'lsa, kim yo'l beradi?",
  ["To'siq o'z tomonida bo'lgan haydovchi", "Qarama-qarshi tomondagi haydovchi", "Gabariti kattaroq transport haydovchisi", "Tezligi kamroq transport haydovchisi"],
  "Agar to'siq sababli qarama-qarshi harakat qiyin bo'lsa, to'siq o'z tomonida bo'lgan haydovchi yo'l berishi kerak (YHQ 75-band).");
Q("maneuver", "Tor yo'lda qarama-qarshi tomonda (uning tasmasida) ta'mirlash ishlari olib borilmoqda, u tomondan avtomobil yaqinlashmoqda. Kim yo'l beradi?",
  ["Qarama-qarshi haydovchi sizga", "Siz qarama-qarshi haydovchiga", "Kim chorrahaga yaqinroq bo'lsa", "Kim ovozli signal birinchi bersa"],
  "To'siq qaysi tomonda bo'lsa, o'sha tomondagi haydovchi yo'l beradi; bu holatda to'siq qarama-qarshi tomonda (YHQ 75-band).");

// --- 76-band
Q("maneuver", "Ajratuvchi bo'lagi bo'lmagan ikki tomonlama yo'ldagi xavfsizlik orolchasini (belgi va chiziq boshqacha ko'rsatmagan) qaysi tomondan aylanib o'tish kerak?",
  ["O'ng tomondan", "Chap tomondan", "Qulay tomondan", "Harakat siyrak bo'lsa chapdan"],
  "Belgi va chiziqlar boshqa yo'nalishni ko'rsatmasa, xavfsizlik orolchalari, ustunchalar va yo'l inshooti qismlari o'ng tomondan aylanib o'tiladi (YHQ 76-band).");
Q("maneuver", "Ikki tomonlama yo'l o'rtasida yo'l o'tkazgich ustuni joylashgan, belgi va chiziqlar yo'q. Siz chapga burilmoqchisiz. Ustunni qanday aylanib o'tasiz?",
  ["O'ng tomondan aylanib, keyin burilasiz", "Burilish uchun chap tomondan aylanasiz", "Qaysi tomon qisqa bo'lsa, o'sha tomondan", "Avariya ishorasini yoqib, chapdan"],
  "Ko'prik va yo'l o'tkazgich ustunlari kabi inshootlar, boshqa yo'nalish ko'rsatilmagan bo'lsa, o'ng tomondan aylanib o'tiladi (YHQ 76-band).");
Q("maneuver", "Ikki tomonlama yo'lda xavfsizlik orolchasini chap tomondan aylanib o'tishga qachon ruxsat etiladi?",
  ["Belgi yoki chiziqlar shunday yo'nalishni ko'rsatsa", "O'ng tomonda tirbandlik yoki to'siq bo'lsa", "Qarama-qarshi yo'nalishdan transport bo'lmasa", "Chapga burilish oldidan, ishora yoqilgan bo'lsa"],
  "O'ng tomondan aylanib o'tish talabi belgilar va chiziqlar boshqa yo'nalishni ko'rsatmagan hollarda amal qiladi (YHQ 76-band).");

// ===================== HARAKATLANISH TEZLIGI (11-bob) =====================

// --- 77-band
Q("speed", "Tezlikni tanlashda haydovchi nimalarni hisobga olishi kerak?",
  ["Serqatnovlik, transport va yuk holati, yo'l, ob-havo, ko'rinish", "Faqat yo'l belgisidagi raqam va o'z tajribasini", "Faqat transport vositasining dvigatel quvvatini", "Faqat oldindagi transport vositasining tezligini"],
  "Haydovchi serqatnovlikni, transport vositasi va yukning xususiyati va holatini, yo'l va ob-havo sharoitini hamda ko'rinishni hisobga olib xavfsiz tezlikni tanlaydi (YHQ 77-band).");
Q("speed", "77-bandga ko'ra tanlangan tezlik haydovchiga nima imkonini berishi kerak?",
  ["Transport harakatini doimiy nazorat qilib borishni", "Oqimdagi eng tez transportdan orqada qolmaslikni", "Yoqilg'ini eng tejamli sarflashni", "Belgilangan joyga jadval bo'yicha yetib borishni"],
  "Tezlik haydovchiga Qoidalar talablarini bajarish uchun transport vositasining harakatlanishini doimiy nazorat qilib borish imkoniyatini berishi kerak (YHQ 77-band).");
Q("speed", "Harakat davomida haydovchi aniqlay oladigan xavf paydo bo'ldi (masalan, yo'lga bola chiqdi). Qoida nimani talab qiladi?",
  ["To'xtashgacha tezlikni kamaytirish yoki xavfsiz aylanib o'tish", "Ovozli signal berib, tezlikni o'zgartirmay davom etish", "Tezlikni saqlab, chap tasmaga qayta tizilish", "Tezlikni 20 km/soatgacha kamaytirib davom etish"],
  "Xavf yuzaga kelsa, haydovchi to'liq to'xtashni ta'minlaydigan darajada tezlikni kamaytirishi yoki boshqalarga xavf tug'dirmay aylanib o'tish choralarini ko'rishi kerak (YHQ 77-band).");
Q("speed", "Aholi punktidan tashqaridagi yo'lda ruxsat etilgan tezlik 100 km/soat, ammo quyuq tuman tufayli ko'rinish juda past. To'g'ri yo'l tutish:",
  ["Ko'rinishga mos, xavfsizlikni ta'minlovchi pastroq tezlik tanlash", "100 km/soat bilan harakatlanish — bu ruxsat etilgan", "Oqim tezligida, hatto u 100 dan oshsa ham", "Avariya ishorasini yoqib, 100 km/soatda davom etish"],
  "Belgilangan chegara eng yuqori ruxsat, majburiyat emas: tezlik ko'rinish va ob-havoni hisobga olib xavfsiz bo'lishi kerak (YHQ 77-band).");

// --- 78-band
Q("speed", "Aholi punktlarida (alohida tartib belgilanmagan joylarda) ruxsat etilgan eng yuqori tezlik:",
  ["70 km/soat", "60 km/soat", "80 km/soat", "90 km/soat"],
  "Aholi punktlarida transport vositalarining tezligi soatiga 70 kilometrdan oshmasligi kerak (YHQ 78-band).");
Q("speed", "Nukus va Toshkent shaharlarida, viloyat va tuman markazlarida ruxsat etilgan eng yuqori tezlik:",
  ["60 km/soat", "70 km/soat", "50 km/soat", "80 km/soat"],
  "Nukus va Toshkent shaharlarida, viloyatlar va tumanlar markazlarida hamda shaharlar hududlarida tezlik soatiga 60 kilometrdan oshmasligi kerak (YHQ 78-band).");
Q("speed", "Tuman markazi bo'lmagan qishloq (aholi punkti) orqali o'tmoqdasiz, maxsus belgi yo'q. Yengil avtomobil uchun eng yuqori tezlik:",
  ["70 km/soat", "60 km/soat", "50 km/soat", "90 km/soat"],
  "Shahar va markaz bo'lmagan aholi punktlarida umumiy cheklov 70 km/soat (YHQ 78-band).");
Q("speed", "Viloyat markazi bo'lgan shaharda tirkamali yengil avtomobilda ketmoqdasiz (belgi yo'q). Eng yuqori tezlik:",
  ["60 km/soat", "70 km/soat", "80 km/soat", "50 km/soat"],
  "Viloyat markazlarida barcha transport vositalari uchun 60 km/soat cheklov amal qiladi; 80 km/soat esa aholi punktidan tashqaridagi chegara (YHQ 78-band).");
Q("speed", "Tegishli belgi o'rnatilgan maktab yoki maktabgacha ta'lim tashkiloti yaqinida ruxsat etilgan eng yuqori tezlik:",
  ["30 km/soat", "40 km/soat", "20 km/soat", "50 km/soat"],
  "Tegishli belgilar o'rnatilgan maktab va maktabgacha ta'lim tashkilotlari yaqinida tezlik soatiga 30 kilometrdan oshmasligi kerak (YHQ 78-band).");
Q("speed", "Maktab yaqinidagi 30 km/soat cheklovi qaysi masofada amal qiladi?",
  ["Maktabgacha va undan o'tgach 300 m dan kam masofada", "Faqat maktabgacha 300 m dan kam masofada", "Maktabgacha va undan o'tgach 100 m dan kam masofada", "Maktabgacha va undan o'tgach 500 m dan kam masofada"],
  "Cheklov maktabga yetmasdan va o'tib ketib 300 metrdan kam masofada amal qiladi (YHQ 78-band).");
Q("speed", "Belgi o'rnatilgan maktabdan 200 m o'tib ketdingiz. Endi qaysi tezlik cheklovi amal qiladi?",
  ["Hali ham 30 km/soat", "Maktabdan o'tgach darhol 60 km/soat", "40 km/soat", "Maktabdan o'tgach darhol 70 km/soat"],
  "30 km/soat cheklovi maktabdan o'tib ketgandan keyin ham 300 m dan kam masofada amal qiladi (YHQ 78-band).");
Q("speed", "Toshkentda belgi o'rnatilgan maktab yonidan o'tmoqdasiz. Qaysi tezlik cheklovi amal qiladi?",
  ["30 km/soat", "60 km/soat", "40 km/soat", "20 km/soat"],
  "Shahardagi umumiy 60 km/soatdan qat'i nazar, maktab yaqinidagi 300 m dan kam hududda 30 km/soat cheklovi amal qiladi (YHQ 78-band).");
Q("speed", "Turar joy dahalari va yondosh hududlarda (uy-joy binolari orasidagi yer uchastkasida) eng yuqori tezlik:",
  ["20 km/soat", "30 km/soat", "10 km/soat", "40 km/soat"],
  "Turar joy dahalari va yondosh hududlarda tezlik soatiga 20 kilometrdan oshmasligi kerak (YHQ 78-band).");
Q("speed", "Tuman markazidagi ko'p qavatli uylar orasidagi hovli yo'lida harakatlanmoqdasiz. Eng yuqori ruxsat etilgan tezlik:",
  ["20 km/soat", "60 km/soat", "30 km/soat", "40 km/soat"],
  "Uy-joy binolari orasidagi hududda 20 km/soat cheklovi amal qiladi, shahar uchun belgilangan 60 km/soat emas (YHQ 78-band).");

// --- 79-band
Q("speed", "Aholi punktidan tashqarida yengil avtomobil uchun eng yuqori tezlik:",
  ["100 km/soat", "90 km/soat", "110 km/soat", "120 km/soat"],
  "Aholi punktlaridan tashqarida yengil avtomobillarga soatiga 100 kilometrdan oshmagan tezlik ruxsat etiladi (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida ruxsat etilgan to'liq vazni 3,5 t dan oshmaydigan yuk avtomobili uchun eng yuqori tezlik:",
  ["100 km/soat", "90 km/soat", "80 km/soat", "70 km/soat"],
  "To'liq vazni 3,5 tonnadan oshmaydigan yuk avtomobillari aholi punktidan tashqarida yengil avtomobillar bilan bir xil — 100 km/soat (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobili uchun eng yuqori tezlik:",
  ["80 km/soat", "90 km/soat", "100 km/soat", "70 km/soat"],
  "Ruxsat etilgan to'liq vazni 3,5 tonnadan ortiq yuk avtomobillariga aholi punktidan tashqarida 80 km/soat ruxsat etiladi (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida shaharlararo qatnaydigan avtobus va mikroavtobus uchun eng yuqori tezlik:",
  ["90 km/soat", "100 km/soat", "80 km/soat", "70 km/soat"],
  "Shaharlararo qatnaydigan avtobuslar va mikroavtobuslarga aholi punktidan tashqarida 90 km/soat ruxsat etiladi (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida shaharlararo bo'lmagan (boshqa) avtobus uchun eng yuqori tezlik:",
  ["80 km/soat", "90 km/soat", "70 km/soat", "100 km/soat"],
  "Shaharlararo qatnovdan boshqa avtobuslar 79-bandda tirkamali yengil avtomobillar va mototsikllar bilan birga 80 km/soat guruhiga kiradi (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida tirkamali yengil avtomobil uchun eng yuqori tezlik:",
  ["80 km/soat", "100 km/soat", "90 km/soat", "70 km/soat"],
  "Tirkamali yengil avtomobillarga aholi punktidan tashqarida 80 km/soat ruxsat etiladi (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida mototsikl va elektromototsikl uchun eng yuqori tezlik:",
  ["80 km/soat", "90 km/soat", "100 km/soat", "70 km/soat"],
  "Mototsikllar va elektromototsikllarga aholi punktidan tashqarida 80 km/soat ruxsat etiladi (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida tirkamali yuk avtomobili uchun eng yuqori tezlik:",
  ["70 km/soat", "80 km/soat", "60 km/soat", "90 km/soat"],
  "Tirkamali yuk avtomobillariga aholi punktidan tashqarida 70 km/soat ruxsat etiladi (YHQ 79-band).");
Q("speed", "79-bandga ko'ra aholi punktidan tashqarida qaysi transport vositasiga eng past tezlik chegarasi belgilangan?",
  ["Tirkamali yuk avtomobili", "Mototsikl", "Tirkamali yengil avtomobil", "Shaharlararo mikroavtobus"],
  "79-bandda tirkamali yuk avtomobillari uchun 70 km/soat — sanab o'tilganlar orasida eng past chegara (YHQ 79-band).");
Q("speed", "Aholi punktidan tashqarida qaysi transport vositasiga 100 km/soatgacha tezlik ruxsat etiladi?",
  ["To'liq vazni 3 t bo'lgan yuk avtomobili", "Shaharlararo qatnaydigan mikroavtobus", "Tirkamali yengil avtomobil", "Elektromototsikl yoki mototsikl"],
  "100 km/soat yengil avtomobillar va to'liq vazni 3,5 tonnadan oshmaydigan yuk avtomobillari uchun belgilangan (YHQ 79-band).");

// --- 80-band
Q("speed", "Yukxonasida (kuzovida) odam tashiyotgan yuk avtomobili uchun eng yuqori tezlik:",
  ["60 km/soat", "70 km/soat", "50 km/soat", "80 km/soat"],
  "Yukxonasida odam tashiyotgan yuk avtomobillariga har qanday yo'lda 60 km/soatdan oshmagan tezlik ruxsat etiladi (YHQ 80-band).");
Q("speed", "Bolalar guruhini tashkiliy tashiyotgan transport vositasi uchun eng yuqori tezlik:",
  ["60 km/soat", "70 km/soat", "50 km/soat", "80 km/soat"],
  "Bolalar guruhini tashkiliy tashiyotgan transport vositalariga har qanday yo'lda 60 km/soat ruxsat etiladi (YHQ 80-band).");
Q("speed", "Shaharlararo avtobus aholi punktidan tashqarida bolalar guruhini tashkiliy tashimoqda. Eng yuqori tezlik:",
  ["60 km/soat", "90 km/soat", "80 km/soat", "70 km/soat"],
  "Shaharlararo avtobuslar uchun 90 km/soat bo'lsa ham, bolalar guruhini tashkiliy tashishda 80-banddagi 60 km/soat cheklovi amal qiladi (YHQ 80-band).");
Q("speed", "Mexanik transport vositasini shatakka olgan transport vositasi uchun eng yuqori tezlik:",
  ["50 km/soat", "40 km/soat", "60 km/soat", "70 km/soat"],
  "Mexanik transport vositalarini shatakka olgan transport vositalariga har qanday yo'lda 50 km/soat ruxsat etiladi (YHQ 80-band).");
Q("speed", "Aholi punktidan tashqarida yengil avtomobil bilan nosoz yengil avtomobilni shatakka olib ketmoqdasiz. Eng yuqori tezlik:",
  ["50 km/soat", "80 km/soat", "60 km/soat", "100 km/soat"],
  "Shatakka olishda yo'l turidan qat'i nazar 50 km/soat cheklovi amal qiladi (YHQ 80-band).");
Q("speed", "Tuman markazi bo'lmagan qishloqda nosoz avtomobilni shatakka olib ketmoqdasiz. Eng yuqori tezlik:",
  ["50 km/soat", "70 km/soat", "60 km/soat", "40 km/soat"],
  "Aholi punktidagi umumiy 70 km/soatdan qat'i nazar, shatakka olgan transport uchun har qanday yo'lda 50 km/soat cheklovi amal qiladi (YHQ 80-band).");
Q("speed", "Yuk avtomobili Toshkent shahri ichida kuzovida odam tashimoqda. Eng yuqori tezlik:",
  ["60 km/soat", "50 km/soat", "70 km/soat", "40 km/soat"],
  "Kuzovida odam tashiyotgan yuk avtomobili uchun ham, Toshkent shahri uchun ham chegara 60 km/soat (YHQ 80-band).");
Q("speed", "Xavfli, og'ir vaznli yoki katta o'lchamli yuk tashiyotgan transport vositasi qanday tezlikda harakatlanadi?",
  ["DYHXX bilan kelishilgan tezlikdan oshirmasdan", "Har qanday yo'lda 50 km/soatdan oshirmasdan", "Har qanday yo'lda 40 km/soatdan oshirmasdan", "Transport turi uchun 79-banddagi tezlikda"],
  "Xavfli, og'ir vaznli va katta o'lchamli yuk tashiyotgan transport vositalari DYHXX bilan kelishilgan tezlikdan oshirmasdan harakatlanadi (YHQ 80-band).");
Q("speed", "Tashkiliy jamlanma (kolonna) tarkibida harakatlanayotgan transport vositalari uchun tezlik qanday belgilanadi?",
  ["DYHXX bilan kelishilgan tezlik bilan", "Har doim 60 km/soat", "Kolonnadagi eng sekin transport tezligi bilan", "Har doim 50 km/soat"],
  "Tashkiliy jamlanmada harakatlanayotgan transport vositalariga DYHXX bilan kelishilgan tezlikdan oshirmasdan harakatlanishga ruxsat etiladi (YHQ 80-band).");
Q("speed", "80-banddagi tezlik cheklovlari (odam, bolalar tashish, shatakka olish) qaysi yo'llarda amal qiladi?",
  ["Har qanday yo'llarda", "Faqat aholi punktidan tashqarida", "Faqat aholi punktlarida", "Faqat avtomagistrallarda"],
  "80-band «Har qanday yo'llarda» deb boshlanadi, ya'ni cheklovlar aholi punktida ham, undan tashqarida ham amal qiladi (YHQ 80-band).");
Q("speed", "Yo'llarning ayrim qismlarida tezlikni oshirish yoki kamaytirishga (belgi o'rnatib) kim ruxsat beradi?",
  ["Vazirlar Kengashi va hokimliklar, DYHXX bilan kelishib", "Faqat yo'l qurilish tashkiloti mustaqil ravishda", "Har bir tuman hokimligi mustaqil ravishda", "Faqat Transport vazirligi"],
  "Qoraqalpog'iston Respublikasi Vazirlar Kengashi, Toshkent shahar va viloyatlar hokimliklari DYHXX bilan kelishgan holda belgilar o'rnatib tezlikni o'zgartirishga ruxsat beradi (YHQ 80-band).");

// --- 81-band
Q("speed", "Transport vositasining texnik tavsifnomasida ko'rsatilgan eng yuqori tezlikdan oshirib harakatlanish:",
  ["Taqiqlanadi", "Aholi punktidan tashqarida mumkin", "Quvib o'tish paytida qisqa muddat mumkin", "Yo'l belgisi ruxsat bersa mumkin"],
  "Haydovchiga tezlikni transport vositasining texnik tavsifnomasida ko'rsatilgan eng yuqori tezlikdan oshirish taqiqlanadi (YHQ 81-band).");
Q("speed", "Avtobusingizda 60 raqamli «Tezligi cheklangan» taniqlik belgisi bor, yo'lda esa 90 km/soat ruxsat etilgan. Siz uchun eng yuqori tezlik:",
  ["60 km/soat", "90 km/soat", "80 km/soat", "70 km/soat"],
  "Haydovchiga transport vositasiga o'rnatilgan «Tezligi cheklangan» taniqlik belgisida ko'rsatilganidan oshirish taqiqlanadi (YHQ 81-band).");
Q("speed", "Zaruriyat bo'lmaganda juda past tezlikda harakatlanib, boshqa transport vositalariga xalaqit berish:",
  ["Taqiqlanadi", "Ehtiyotkorlik sifatida rag'batlantiriladi", "Faqat avtomagistrallarda taqiqlanadi", "Faqat chap tasmada taqiqlanadi"],
  "Haydovchiga zaruriyat bo'lmaganda juda past tezlikda harakatlanib, boshqa transport vositalariga xalaqit berish taqiqlanadi (YHQ 81-band).");
Q("speed", "Keskin tormoz berish qaysi holatda ruxsat etiladi?",
  ["Yo'l-transport hodisasining oldini olish zarur bo'lganda", "Ortdagi haydovchini yaqin kelmaslikka undash uchun", "To'xtash joyini o'tkazib yubormaslik uchun", "Tezlikni nazorat kamerasi oldida"],
  "Yo'l-transport hodisasining oldini olish zarurati bo'lmaganda keskin tormoz berish taqiqlanadi (YHQ 81-band).");
Q("speed", "Bu belgi ta'sir oralig'ida haydovchi qanday tezlikda harakatlanishi mumkin?",
  ["40 km/soatdan oshmagan tezlikda", "Kamida 40 km/soat tezlikda", "Aynan 40 km/soat tezlikda", "40 km/soat, quvib o'tishda 60 km/soat"],
  "Haydovchi belgilangan tezlikdan oshirmagan holda sharoitga mos xavfsiz tezlikni tanlashi kerak; belgi eng yuqori tezlikni cheklaydi (YHQ 77-band).", "speed40");

// ===================== QUVIB O'TISH (12-bob) =====================

// --- 82-band
Q("overtaking", "Quvib o'tishni boshlashdan oldin haydovchi qaysi ishorani yoqishi kerak?",
  ["Chapga burilish ishorasini", "Avariya ishorasini", "Uzoqni yorituvchi chiroqni", "O'ngga burilish ishorasini"],
  "Quvib o'tishni boshlashdan oldin haydovchi chapga burilishni bildiruvchi ishorasini yoqadi (YHQ 82-band).");
Q("overtaking", "Quvib o'tishdan oldin o'tmoqchi bo'lgan harakatlanish bo'lagi haqida nimaga ishonch hosil qilish kerak?",
  ["U quvib o'tish uchun yetarlicha masofada bo'sh ekanligiga", "Unda oldinda kamida 50 m bo'sh joy borligiga", "Unda faqat yengil avtomobillar ketayotganiga", "Uni ajratuvchi chiziq uzuq-uzuq ekanligiga"],
  "Haydovchi o'tmoqchi bo'lgan bo'lak quvib o'tish uchun yetarlicha masofada bo'shligiga va xavf tug'dirmasligiga ishonch hosil qilishi shart (YHQ 82-band).");
Q("overtaking", "Quvib o'tishni boshlamoqchisiz, ammo ko'zguda shu tasmada orqangizdagi avtomobil allaqachon quvib o'tishni boshlaganini ko'rdingiz. Qanday harakat qilasiz?",
  ["Quvib o'tishni boshlamaysiz", "Tezroq chiqib, undan oldin quvib o'tasiz", "Ovozli signal berib, quvib o'tishni boshlaysiz", "Ishorani yoqib, u sekinlashishini kutasiz"],
  "Shu tasmada orqada harakatlanayotgan transport vositasi quvib o'tishni boshlamaganiga ishonch hosil qilish shart (YHQ 82-band).");
Q("overtaking", "Oldingizdagi avtomobil chapga burilish ishorasini bermoqda. Uni chap tomondan quvib o'tishni boshlash mumkinmi?",
  ["Yo'q, u chapga ishora berayotganda mumkin emas", "Ha, agar u hali burilishni boshlamagan bo'lsa", "Ha, ovozli signal bilan ogohlantirib", "Ha, agar qarama-qarshi tasma bo'sh bo'lsa"],
  "Quvib o'tishdan oldin oldindagi transport quvib o'tish yoki chapga burilish (qayta tizilish) ishorasini bermayotganiga ishonch hosil qilinadi (YHQ 82-band).");
Q("overtaking", "Quvib o'tishni tugallashga oid qaysi shartga oldindan ishonch hosil qilish kerak?",
  ["Xalaqit bermay ilgarigi qatorga qayta olishiga", "Quvib o'tilgan transportdan 100 m oldinga chiqa olishiga", "Quvib o'tgach tezlikni pasaytira olishiga", "Quvib o'tishni 10 soniyada tugata olishiga"],
  "Haydovchi quvib o'tishni tugallayotganda quvib o'tilayotgan transportga xalaqit bermasdan ilgari egallagan qatorga qayta olishiga ishonch hosil qilishi shart (YHQ 82-band).");
Q("overtaking", "Quyidagilardan qaysi biri 82-bandda quvib o'tishdan oldingi majburiy shartlar qatorida YO'Q?",
  ["Quvib o'tilayotgan haydovchini ovozli signal bilan ogohlantirish", "Chapga burilish ishorasini yoqish", "Orqadagi transport quvib o'tishni boshlamaganiga ishonch hosil qilish", "O'tiladigan bo'lak yetarli masofada bo'shligiga ishonch hosil qilish"],
  "82-band ishorani yoqish va bir qator shartlarga ishonch hosil qilishni talab qiladi; ovozli signal berish bu shartlar qatorida yo'q (YHQ 82-band).");

// --- 83-band
Q("overtaking", "Bir yo'nalishda harakatlanayotgan relssiz transport vositalarini qaysi tomondan o'zib ketishga ruxsat beriladi?",
  ["Har ikki tomondan", "Faqat chap tomondan", "Faqat o'ng tomondan", "Aholi punktida faqat chapdan, tashqarida ikkala tomondan"],
  "Bir yo'nalishda harakatlanayotgan relssiz transport vositalarini har ikki tomonidan o'zib ketishga ruxsat beriladi (YHQ 83-band).");
Q("overtaking", "Chapga burilish ishorasini berib, burilishga kirishgan transport vositasini qanday quvib o'tish kerak?",
  ["O'ng tomondan", "Chap tomondan, tezlikni oshirib", "Qarama-qarshi tasma orqali", "Uni quvib o'tish umuman taqiqlanadi"],
  "Chapga burilish ishorasini berib, burilishga kirishgan transport vositasini o'zib ketish o'ng tomondan amalga oshiriladi (YHQ 83-band).");
Q("overtaking", "Ikki tasmali ikki tomonlama yo'lda oldingizdagi avtomobil chapga ishora berib, yo'l o'rtasiga surilib burila boshladi; o'ngda yetarli joy bor. Qanday harakat qilasiz?",
  ["Xavfsiz bo'lsa, uni o'ng tomondan o'tib ketasiz", "Uni chap tomondan, qarama-qarshi tasma orqali o'tasiz", "Ovozli signal berib, burilishni to'xtatishga majbur qilasiz", "Uning ortidan chap tomonga birga burilasiz"],
  "Chapga burilishga kirishgan transport vositasi faqat o'ng tomondan o'zib ketiladi (YHQ 83-band).");
Q("overtaking", "Bir yo'nalishda ikki tasmali yo'lda oldingizda chap tasmada sekin avtomobil ketmoqda. O'ng tasmadan uni o'zib ketish mumkinmi?",
  ["Ha, 82-band shartlari bajarilsa", "Yo'q, faqat chapdan o'zib ketish mumkin", "Faqat u o'ngga ishora bersa", "Faqat aholi punktidan tashqarida"],
  "Bir yo'nalishda harakatlanayotgan relssiz transport vositalarini har ikki tomondan o'zib ketish mumkin, lekin 82-band shartlari bajarilishi kerak (YHQ 83-band).");

// --- 84-band
Q("overtaking", "Sizni quvib o'tmoqdalar. Quyidagilardan qaysi biri taqiqlanadi?",
  ["Tezlikni oshirib, quvib o'tishga to'sqinlik qilish", "Avvalgi tezlikda harakatni davom ettirish", "O'z tasmangizda o'ng chetga yaqinroq yurish", "Tezlikni biroz pasaytirish"],
  "Quvib o'tilayotgan transport haydovchisiga tezlikni oshirish yoki boshqa xatti-harakatlar bilan quvib o'tishga to'sqinlik qilish taqiqlanadi (YHQ 84-band).");
Q("overtaking", "Quvib o'tilayotgan haydovchi tezlikni oshirmasdan, tasma o'rtasiga surilib quvib o'tayotganga xalaqit bersa, bu:",
  ["Taqiqlanadi — har qanday to'sqinlik man etilgan", "Ruxsat etiladi, chunki u tezlikni oshirmadi", "Ruxsat etiladi, agar u o'z tasmasida bo'lsa", "Faqat aholi punktidan tashqarida taqiqlanadi"],
  "84-band nafaqat tezlikni oshirish, balki boshqa xatti-harakatlar bilan to'sqinlik qilishni ham taqiqlaydi (YHQ 84-band).");

// --- 85-band
Q("overtaking", "Quvib o'tishni tugallagandan so'ng haydovchi nima qilishi shart?",
  ["Ilgari egallagan harakatlanish yo'nalishiga qaytishi", "Keyingi chorrahagacha chap tasmada qolishi", "Darhol tezlikni pasaytirib, masofani tiklashi", "Avariya ishorasini qisqa yoqib minnatdorchilik bildirishi"],
  "Quvib o'tishni tugallagandan so'ng haydovchi ilgari egallagan harakatlanish yo'nalishiga qaytishi shart (YHQ 85-band).");
Q("overtaking", "Aholi punktidan tashqaridagi ikki tasmali ikki tomonlama yo'lda yuk avtomobilini quvib o'tdingiz, oldinda qarama-qarshi transport yo'q. Endi:",
  ["O'z tasmangizga qaytasiz", "Qarama-qarshi transport ko'ringuncha chapda ketasiz", "Keyingi quvib o'tishgacha chapda qolasiz", "Yo'l o'qi bo'ylab davom etasiz"],
  "Quvib o'tish tugagach, haydovchi ilgari egallagan harakatlanish yo'nalishiga qaytishi shart (YHQ 85-band).");

// --- 86-band
Q("overtaking", "Tartibga solingan chorrahada quvib o'tish:",
  ["Taqiqlanadi", "Yashil ishorada ruxsat etiladi", "Faqat o'ng tomondan ruxsat etiladi", "Asosiy yo'lda ruxsat etiladi"],
  "Tartibga solingan chorrahalarda quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Tartibga solingan chorrahaga yashil ishorada yaqinlashmoqdasiz, oldingizda sekin traktor ketmoqda. Chorrahada uni quvib o'tish mumkinmi?",
  ["Yo'q, bunday chorrahada quvib o'tish taqiqlanadi", "Ha, chunki yashil ishora yonib turibdi", "Ha, agar traktor tezligi 40 km/soatdan kam bo'lsa", "Ha, chorraha bo'sh bo'lsa"],
  "Tartibga solingan chorrahalarda quvib o'tish svetofor ishorasidan qat'i nazar taqiqlanadi (YHQ 86-band).", "w_light");
Q("overtaking", "Tartibga solinmagan chorrahada quvib o'tish qachon taqiqlanadi?",
  ["Asosiy hisoblanmaydigan yo'lda harakatlanganda", "Asosiy yo'lda harakatlanganda", "Chorrahada piyodalar bo'lmaganda", "Chorrahada svetofor vaqtincha o'chirilganda"],
  "Tartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo'llarda harakatlanishda quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Siz asosiy yo'l bo'ylab tartibga solinmagan chorrahaga yaqinlashmoqdasiz. 86-band chorrahada quvib o'tishni taqiqlaydimi?",
  ["Yo'q, taqiq asosiy bo'lmagan yo'ldagilarga tegishli", "Ha, barcha chorrahalarda taqiqlanadi", "Ha, faqat o'ng tomondan quvib o'tish mumkin", "Ha, agar chorrahada svetofor bo'lmasa"],
  "Tartibga solinmagan chorrahada quvib o'tish faqat asosiy hisoblanmaydigan yo'lda harakatlanganda taqiqlanadi; boshqa shartlar baribir bajarilishi kerak (YHQ 86-band).", "mainroad");
Q("overtaking", "Ko'prik ustida quvib o'tish:",
  ["Taqiqlanadi", "Ko'prikda tasma ko'p bo'lsa ruxsat", "Ko'rinish yaxshi bo'lsa ruxsat", "Faqat yuk avtomobillariga taqiqlanadi"],
  "Ko'priklarda, yo'l o'tkazgichlarda, estakadalarda va ularning ostida quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Yo'l o'tkazgich (estakada) ostidan o'tayotgan yo'lda quvib o'tish:",
  ["Taqiqlanadi", "Ruxsat etiladi — taqiq faqat ustiga tegishli", "Ko'rinish 100 m dan ko'p bo'lsa ruxsat", "Faqat yengil avtomobillarga ruxsat"],
  "Taqiq ko'priklar, yo'l o'tkazgichlar va estakadalarning ostida ham amal qiladi (YHQ 86-band).");
Q("overtaking", "Piyodalar o'tish joyida quvib o'tish:",
  ["Taqiqlanadi", "Piyoda bo'lmasa ruxsat etiladi", "Faqat tartibga solinmagan o'tish joyida taqiqlanadi", "Tezlik 40 km/soatdan past bo'lsa ruxsat"],
  "Piyodalar o'tish joylarida quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Tartibga solinmagan piyodalar o'tish joyiga yaqinlashmoqdasiz, unda hech kim yo'q. O'tish joyida oldingizdagi avtomobilni quvib o'tish mumkinmi?",
  ["Yo'q, piyoda bo'lmasa ham taqiqlanadi", "Ha, chunki piyodaga xavf yo'q", "Ha, agar ovozli signal berilsa", "Ha, faqat o'ng tomondan"],
  "86-band piyodalar o'tish joylarida quvib o'tishni piyodalar borligidan qat'i nazar taqiqlaydi (YHQ 86-band).", "crossing");
Q("overtaking", "Temir yo'l kesishmasigacha necha metrdan kam masofa qolganda quvib o'tish taqiqlanadi?",
  ["100 m", "50 m", "150 m", "200 m"],
  "Temir yo'l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Temir yo'l kesishmasigacha 60 m qoldi, oldingizda sekin yuk avtomobili ketmoqda, qarama-qarshi tasma bo'sh. Uni quvib o'tish mumkinmi?",
  ["Yo'q, kesishmagacha 100 m dan kam qolgan", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, shlagbaum ochiq bo'lsa", "Ha, yuk avtomobili 40 km/soatdan sekin bo'lsa"],
  "Temir yo'l kesishmasigacha 100 metrdan kam masofa qolganda quvib o'tish taqiqlanadi (YHQ 86-band).", "railbarrier");
Q("overtaking", "Quvib o'tayotgan yoki aylanib o'tayotgan transport vositasini quvib o'tish:",
  ["Taqiqlanadi", "Yo'l keng bo'lsa ruxsat etiladi", "Faqat aholi punktida ruxsat etiladi", "Ovozli signal bilan ruxsat etiladi"],
  "86-band quvib yoki aylanib o'tayotgan transport vositalarini quvib o'tishni taqiqlaydi (YHQ 86-band).");
Q("overtaking", "Oldingizdagi avtomobil yo'ldagi to'siqni (ta'mirlash joyini) aylanib o'tmoqda. Siz ham shu payt uni quvib o'tishingiz mumkinmi?",
  ["Yo'q, bu holatda quvib o'tish taqiqlanadi", "Ha, agar u juda sekin harakatlansa", "Ha, agar qarama-qarshi tasma bo'sh bo'lsa", "Ha, faqat o'ng tomondan"],
  "Aylanib o'tayotgan transport vositalarini quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Tepalikning oxirida (cho'qqisida), ortidagi yo'l ko'rinmayotgan joyda quvib o'tish:",
  ["Taqiqlanadi", "Tez bajarilsa ruxsat etiladi", "Faralar yoqilgan bo'lsa ruxsat etiladi", "Ovozli signal bilan ruxsat etiladi"],
  "Tepalikning oxirida va yo'lning ko'rinishi cheklangan joylarida quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Keskin burilish oldida yo'lning davomi ko'rinmayapti, ammo chiziq uzuq-uzuq. Quvib o'tish mumkinmi?",
  ["Yo'q, ko'rinish cheklangan joyda taqiqlanadi", "Ha, chunki chiziq uzuq-uzuq chizilgan", "Ha, agar oldindan ovozli signal berilsa", "Ha, agar burilishgacha tugatib ulgurilsa"],
  "Yo'lning ko'rinishi cheklangan joylarida quvib o'tish chiziq turidan qat'i nazar taqiqlanadi (YHQ 86-band).", "w_curve");
Q("overtaking", "86-bandga ko'ra qaysi yo'l belgilarining ta'sir oralig'ida quvib o'tish taqiqlanadi?",
  ["3.20 va 3.22", "3.20 va 3.21", "3.24 va 3.25", "3.18 va 3.19"],
  "3.20 va 3.22 yo'l belgilari ta'sir oralig'ida quvib o'tish taqiqlanadi (YHQ 86-band).");
Q("overtaking", "Bu belgi ta'sir oralig'ida nima taqiqlanadi?",
  ["Quvib o'tish", "Barcha transport harakati", "To'xtash", "Chapga burilish"],
  "Bu «Quvib o'tish taqiqlangan» (3.20) belgisi; uning ta'sir oralig'ida quvib o'tish taqiqlanadi (YHQ 86-band).", "noovertake");
Q("overtaking", "Quyidagi joylardan qaysi birida 86-band quvib o'tishni taqiqlamaydi?",
  ["Ko'rinishi yaxshi, uzuq chiziqli to'g'ri yo'lda", "Asosiy bo'lmagan yo'lda tartibga solinmagan chorrahada", "Temir yo'l kesishmasidan 80 m oldin", "Yo'l o'tkazgich ostida"],
  "86-band chorrahalar, ko'priklar va ularning ostlari, piyodalar o'tish joylari, temir yo'l kesishmasi oldi, ko'rinish cheklangan joylar va 3.20, 3.22 belgilari oralig'ida quvib o'tishni taqiqlaydi (YHQ 86-band).");

// --- 64–74-bandlar (joylashuv va quvib o'tish)
Q("overtaking", "Chiziqlar bilan belgilangan uch tasmali ikki tomonlama yo'lda quvib o'tish uchun qaysi tasmadan foydalanish mumkin?",
  ["O'rta tasmadan", "Chetki chap tasmadan", "O'ng yo'l yoqasidan", "Istalgan bo'sh tasmadan"],
  "Uch tasmali ikki tomonlama yo'lda o'rta tasmaga quvib o'tish uchun chiqiladi, chetki chap tasmani egallash taqiqlanadi (YHQ 66-band).");
Q("overtaking", "Uch tasmali ikki tomonlama yo'lda o'rta tasma band; quvib o'tish uchun chetki chap (qarama-qarshi) tasmaga chiqish mumkinmi?",
  ["Yo'q, chetki chap tasmani egallash taqiqlanadi", "Ha, qarama-qarshi yo'nalishda transport bo'lmasa", "Ha, ko'rinish 100 m dan ko'p bo'lsa", "Ha, aholi punktidan tashqarida"],
  "Qarama-qarshi yo'nalish uchun mo'ljallangan chetki chap qatorni egallash taqiqlanadi (YHQ 66-band).");
Q("overtaking", "To'rt tasmali ikki tomonlama yo'lda quvib o'tish uchun qarama-qarshi yo'nalishdagi tasmaga chiqish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, qarama-qarshi tasma bo'sh bo'lsa", "Ha, chiziq uzuq-uzuq bo'lsa", "Ha, faqat yengil avtomobillarga"],
  "To'rt va undan ortiq tasmali ikki tomonlama yo'llarda qarama-qarshi yo'nalish tasmalariga chiqish taqiqlanadi (YHQ 65-band).");
Q("overtaking", "Qarama-qarshi oqimlar ajratuvchi tasma bilan ajratilgan yo'lda quvib o'tish uchun qarama-qarshi tomonga chiqish:",
  ["Taqiqlanadi", "Ajratuvchi tasmada uzilish bo'lsa ruxsat", "Qarama-qarshi transport bo'lmasa ruxsat", "Faqat aholi punktidan tashqarida ruxsat"],
  "Ajratuvchi tasma bilan ajratilgan yo'llarda qarama-qarshi yo'nalishga chiqish taqiqlanadi (YHQ 64-band).");
Q("overtaking", "Bir yo'nalishda uch tasmali yo'lda yuk avtomobili chetki chap tasmaga o'tib boshqa transportni quvib o'tishi mumkinmi?",
  ["Yo'q, bunga ruxsat yo'q", "Ha, 82-band shartlari bajarilsa", "Ha, agar boshqa tasmalar band bo'lsa", "Ha, faqat aholi punktida"],
  "Yuk avtomobillariga chetki chap qatorni faqat chapga burilish yoki qayrilib olish uchun egallashga ruxsat etiladi (YHQ 67-band).");
Q("overtaking", "Bir yo'nalishda uch tasmali yo'lda yengil avtomobil quvib o'tish uchun chetki chap tasmani egallashi mumkinmi?",
  ["Ha, quvib o'tish uchun ruxsat etiladi", "Yo'q, faqat chapga burilish uchun", "Yo'q, faqat qayrilib olish uchun", "Faqat boshqa tasmalar bo'sh bo'lganda"],
  "Bir yo'nalishdagi uch va undan ortiq tasmali yo'lda chetki chap qatorni quvib o'tish uchun egallashga ruxsat etiladi, yuk avtomobillari bundan mustasno (YHQ 67-band).");
Q("overtaking", "Tezligini 40 km/soatdan oshira olmaydigan transport vositasi quvib o'tish uchun chetki o'ng qatordan chiqishi mumkinmi?",
  ["Ha, quvib o'tish uchun qayta tizilish ruxsat etiladi", "Yo'q, u faqat o'ng qatorda yurishi shart", "Faqat aholi punktida, tashqarida emas", "Faqat 74-band talabi bajarilganda"],
  "68-band bunday transportga aylanib o'tish, quvib o'tish, chapga burilish yoki qayrilib olish uchun qayta tizilishni istisno sifatida ruxsat etadi (YHQ 68-band).");
Q("overtaking", "Aholi punktidan tashqaridagi ikki tasmali ikki tomonlama yo'lda uzunligi 12 m bo'lgan avtopoyezd haydovchisi oldindagi transport bilan qanday masofa saqlaydi?",
  ["Uni quvib o'tganlar bemalol qayta tizila oladigan", "Imkon qadar yaqin, oqimni ixchamlash uchun", "Aniq 20 m", "Faqat o'zi to'xtay oladigan eng kam masofa"],
  "Uzunligi 7 m dan ortiq transport vositalari quvib o'tayotgan transport oldin egallagan qatoriga bemalol qayta tizila oladigan masofani saqlashi kerak (YHQ 74-band).");
Q("overtaking", "Uzun transport vositasining quvib o'tuvchilar uchun masofa qoldirish majburiyati qaysi yo'llarda amal qilmaydi?",
  ["Quvib o'tish taqiqlangan yo'llarda", "Ko'rinishi yaxshi to'g'ri yo'llarda", "Ikki tasmali ikki tomonlama yo'llarda", "Aholi punktidan tashqaridagi yo'llarda"],
  "Quvib o'tish taqiqlangan yo'llarda, tashkiliy jamlanma tarkibida va serqatnov yo'llarda bu talabga amal qilinmaydi (YHQ 74-band).");

// --- 87-band
Q("overtaking", "Aholi punktidan tashqarida sekin harakatlanadigan transportni quvib o'tish qiyin bo'lsa, uning haydovchisi nima qilishi kerak?",
  ["O'ngga olishi, zarur bo'lsa to'xtab o'tkazib yuborishi", "Tezlikni chegaradan oshirib, oqimga moslashishi", "Avariya ishorasini yoqib, harakatni davom ettirishi", "Chap tasmaga o'tib, o'ngdan o'tkazib yuborishi"],
  "Bunday transport haydovchisi uni iloji boricha yo'lning o'ng tomoniga olishi, zarur bo'lganda orqada to'planib qolganlarni o'tkazib yuborish uchun to'xtashi kerak (YHQ 87-band).");
Q("overtaking", "87-banddagi «o'ngga olish va o'tkazib yuborish» majburiyati qaysi transport vositalariga tegishli?",
  ["Sekin, katta hajmli yoki shunday yuk tashiyotganlarga", "Faqat yo'lovchi tashiyotgan shaharlararo avtobuslarga", "Faqat tirkamali yengil avtomobillarga", "Faqat maxsus transport vositalariga"],
  "87-band sekin harakatlanadigan, katta hajmli yoki katta hajmli yuk tashiyotgan transport vositalari haydovchilariga tegishli (YHQ 87-band).");
Q("overtaking", "87-banddagi sekin transport haydovchisining majburiyati qayerda amal qiladi?",
  ["Aholi punktidan tashqaridagi yo'llarda", "Faqat aholi punktlaridagi yo'llarda", "Faqat avtomagistral va tezyurar yo'llarda", "Faqat tog'li va tor yo'llarda"],
  "87-band aholi punktlaridan tashqaridagi yo'llarda amal qiladi (YHQ 87-band).");
Q("overtaking", "Siz shahar tashqarisida katta o'lchamli yuk tashiyapsiz, ortingizda uzun navbat yig'ildi, ular sizni quvib o'ta olmayapti. Nima qilasiz?",
  ["O'ngga olasiz, zarur bo'lsa to'xtab o'tkazasiz", "Tezlikni chegaradan oshirib navbatdan uzoqlashasiz", "Chap tasmaga o'tib ularga o'ngdan yo'l ochasiz", "Harakatni davom ettirasiz — ular kutishga majbur"],
  "Quvib o'tish qiyin bo'lganda sekin yoki katta hajmli transport haydovchisi o'ngga olishi, zarur bo'lsa to'xtashi kerak (YHQ 87-band).");
