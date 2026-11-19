// q/e_conditions.js — Magistral, turar joy, qiyalik, yoritish, shatak, o'qitish, odam va yuk tashish, velosiped, taniqlik belgilari (YHQ 19–29-boblar)

// ===================== PEOPLE: avtomagistral (121–122) =====================
Q("people", "Texnik tavsifnomasi yoki holatiga ko'ra tezligi qanchadan kam bo'lgan transport vositalarining avtomagistralda harakatlanishi taqiqlanadi?",
  ["Soatiga 40 km dan kam", "Soatiga 50 km dan kam", "Soatiga 60 km dan kam", "Soatiga 30 km dan kam"],
  "Avtomagistralda past tezlikli transport oqimga xavf tug'diradi, shuning uchun tezligi 40 km/soatdan kam bo'lganlarning harakati taqiqlangan (YHQ 121-band).");
Q("people", "Quyidagilardan qaysi birining avtomagistralda harakatlanishi YHQ 121-bandida taqiqlanmagan?",
  ["Tirkamali yengil avtomobil", "Moped", "G'ildirakli traktor", "Individual harakatlanish vositasi"],
  "121-band mopedlar, traktorlar, individual harakatlanish vositalari va boshqalarni taqiqlaydi; tirkamali yengil avtomobil bu ro'yxatda yo'q (YHQ 121-band).");
Q("people", "Avtomagistralda yuk avtomobillari uchun qanday cheklov belgilangan?",
  ["Chetki chap qatorda harakatlanish taqiqlanadi", "Faqat chetki o'ng qatorda harakatlanishi mumkin", "Quvib o'tish taqiqlanadi", "O'rta qatorda harakatlanish taqiqlanadi"],
  "Qoidada yuk avtomobillariga faqat yo'lning chetki chap qatorida harakatlanish taqiqlangan (YHQ 121-band).");
Q("people", "Avtomagistralda qayerda to'xtashga ruxsat etiladi?",
  ["5.15 yoki 6.11 belgilari bilan belgilangan maxsus maydonchalarda", "Avariya ishorasi yoqilgan holda o'ng yo'l yoqasining istalgan joyida", "Ajratuvchi bo'lakning texnologik uzilish joylarida", "Chetki o'ng qatorda, avariya to'xtash belgisi qo'yilgan holda"],
  "Avtomagistralda to'xtash faqat 5.15 yoki 6.11 belgilari bilan belgilangan maxsus maydonchalarda mumkin (YHQ 121-band).");
Q("people", "Avtomagistralda kerakli chiqishdan o'tib ketdingiz. To'g'ri harakat qaysi?",
  ["Keyingi chiqishgacha harakatni davom ettirish", "O'ng yo'l yoqasi bo'ylab orqaga yurib qaytish", "Ajratuvchi bo'lakning texnologik uzilishidan qayrilib olish", "Avariya ishorasini yoqib orqaga harakatlanish"],
  "Avtomagistralda orqaga harakatlanish ham, texnologik uzilishlarga kirib qayrilib olish ham taqiqlangan (YHQ 121-band).");
Q("people", "Avtomagistraldagi ajratuvchi bo'lakning texnologik uzilish joylaridan foydalanish:",
  ["Ularga kirish va ularda qayrilib olish taqiqlanadi", "Faqat qayrilib olish uchun ruxsat etiladi", "Yuk avtomobillariga qayrilish uchun ruxsat etiladi", "Majburiy to'xtash uchun ruxsat etiladi"],
  "Texnologik uzilishlar xizmat maqsadlari uchun; oddiy haydovchiga ularga kirish va qayrilib olish taqiqlangan (YHQ 121-band).");
Q("people", "Avtomagistralda transport vositasini boshqarishni o'rgatish:",
  ["Taqiqlanadi", "Amaliy boshqaruv o'rgatuvchisi ishtirokida ruxsat etiladi", "O'rganuvchi dastlabki ko'nikmaga ega bo'lsa ruxsat etiladi", "«Boshqarishni o'rgatish» belgisi bo'lsa ruxsat etiladi"],
  "Avtomagistralda o'rganish uchun boshqarish instruktor bo'lsa ham taqiqlangan (YHQ 121-band).");
Q("people", "Avtomagistralning qatnov qismida majburiy to'xtagan haydovchi transport vositasini qayerga olib chiqish choralarini ko'rishi kerak?",
  ["Qatnov qismi chetini bildiruvchi chiziqdan o'ngroqdagi tasmaga", "Ajratuvchi bo'lak tomondagi chap yo'l yoqasiga", "Chetki o'ng qatorning o'rtasiga, avariya ishorasi bilan", "Ajratuvchi bo'lakning texnologik uzilishiga"],
  "Majburiy to'xtaganda transport vositasini belgilab, shu holatlar uchun mo'ljallangan, chekka chiziqdan o'ngdagi tasmaga olib chiqish kerak (YHQ 122-band).");
Q("people", "Yo'l ta'mirlayotgan, zarg'aldoq mayoqchasi yoqilgan transport vositasining haydovchisi avtomagistraldagi 121-band taqiqlaridan chetga chiqishi mumkinmi?",
  ["Ha, ish bajarayotganda xavfsizlikni ta'minlash sharti bilan", "Yo'q, mayoqcha hech qanday imtiyoz bermaydi", "Faqat ko'k mayoqcha yoqilgan bo'lsa", "Faqat DYHXX xodimi kuzatuvida harakatlanayotgan bo'lsa"],
  "Zarg'aldoq yoki sariq mayoqchali transport yo'l ishlarini bajarayotganda xavfsizlikni ta'minlab 121-band talablaridan chetga chiqishi mumkin (YHQ 29-band).");

// ===================== PEOPLE: turar joy dahalari (123–127) =====================
Q("people", "Turar joy dahasining boshlanishi va tugashi qaysi yo'l belgilari bilan ko'rsatiladi?",
  ["5.38 va 5.39", "5.15 va 6.11", "5.40 va 5.38", "1.13 va 1.14"],
  "Turar joy dahasi kirish va chiqishi 5.38 va 5.39 belgilari bilan belgilangan hudud hisoblanadi (YHQ 123-band).");
Q("people", "Turar joy dahasida piyodalar qayerda harakatlanishi mumkin?",
  ["Trotuarda ham, qatnov qismida ham", "Faqat trotuarda", "Qatnov qismida faqat kesib o'tish uchun", "Faqat qatnov qismining o'ng chetida"],
  "Turar joy dahalarida piyodalarga trotuarda ham, qatnov qismida ham harakatlanishga ruxsat etiladi (YHQ 123-band).");
Q("people", "Turar joy dahasida piyodalar imtiyozga ega bo'lsa-da, ular qanday talabga rioya qilishi shart?",
  ["Transport harakatiga asossiz xalaqit bermasligi kerak", "Transport vositalariga doim yo'l berishi kerak", "Qatnov qismini faqat o'tish joyidan kesishi kerak", "Faqat qatnov qismining chap chetida yurishi kerak"],
  "Piyodalar imtiyozga ega, biroq transport vositalarining harakatlanishiga asossiz xalaqit bermasliklari kerak (YHQ 123-band).");
Q("people", "Turar joy dahasida yo'lovchini kutib, dvigatelni o'chirmay to'xtab turish:",
  ["Taqiqlanadi", "5 daqiqagacha ruxsat etiladi", "Belgilangan to'xtash joyida ruxsat etiladi", "Avariya ishorasi yoqilgan bo'lsa ruxsat etiladi"],
  "Turar joy dahalarida dvigateli ishlab turgan holda to'xtab turish taqiqlangan (YHQ 124-band).");
Q("people", "Turar joy dahasida qanday yuk avtomobillari faqat maxsus ajratilgan va belgilangan joylarda to'xtab turishi mumkin?",
  ["Ruxsat etilgan to'liq vazni 3,5 t dan ortiq bo'lganlar", "Ruxsat etilgan to'liq vazni 2,5 t dan ortiq bo'lganlar", "Ruxsat etilgan to'liq vazni 5 t dan ortiq bo'lganlar", "Ruxsat etilgan to'liq vazni 12 t dan ortiq bo'lganlar"],
  "3,5 tonnadan og'ir yuk avtomobillari turar joy dahasida faqat belgi va (yoki) chiziq bilan belgilangan joylarda to'xtab turadi (YHQ 124-band).");
Q("people", "Turar joy dahasida mexanik transport vositasini boshqarishni o'rgatish:",
  ["Taqiqlanadi", "Instruktor ishtirokida ruxsat etiladi", "Yo'nalish DYHXX bilan kelishilgan bo'lsa ruxsat etiladi", "Faqat tormozlash mashqlari uchun ruxsat etiladi"],
  "Turar joy dahalarida mexanik transport vositalarini boshqarishni o'rgatish taqiqlangan (YHQ 124-band).");
Q("people", "Turar joy dahasida haydovchi nimani ta'minlashi zarur?",
  ["Piyodalar xavfsizligi va inshoot, o'simliklar butunligini", "Faqat piyodalar o'tish joylarida piyodalarga yo'l berishni", "Transport vositalarining trotuardagi piyodalardan ustunligini", "Har bir burilishda ovozli ishora berib, piyodalarni ogohlantirishni"],
  "Turar joy dahalarida haydovchi piyodalar xavfsizligi va hududdagi inshoot, qurilma hamda o'simliklar butunligini ta'minlashi kerak (YHQ 125-band).");
Q("people", "Turar joy dahasidan umumiy yo'lga chiqayotgan haydovchi:",
  ["Yo'l harakatining boshqa ishtirokchilariga yo'l beradi", "Faqat trotuardagi piyodalarga yo'l beradi", "O'ngdan kelayotgan transportdan ustun hisoblanadi", "Faqat yo'nalishli transportga yo'l beradi"],
  "Turar joy dahalaridan chiqishda haydovchi barcha boshqa yo'l harakati ishtirokchilariga yo'l berishi kerak (YHQ 126-band).");
Q("people", "Turar joy dahalariga oid talablar yana qaysi hududlarga tegishli?",
  ["Hovli hududlariga (uy-joy binolari orasidagi yer uchastkalariga)", "Aholi punktidagi barcha ko'chalarga", "Faqat 5.38 belgisi o'rnatilgan va asfaltlangan ko'chalarga", "Yoqilg'i quyish shoxobchalari va avtoturargohlar hududiga"],
  "20-bob talablari dahalar va hovli hududlariga, ya'ni uy-joy binolari orasidagi yer uchastkalariga ham tegishli (YHQ 127-band).");

// ===================== PEOPLE: tik qiyaliklar (128–130) =====================
Q("people", "1.13 va 1.14 belgilari bilan belgilangan qiyalikda qarama-qarshi harakatni qiyinlashtiruvchi to'siq bor. Kim yo'l berishi kerak?",
  ["Nishablikka (pastga) harakatlanayotgan haydovchi", "Tepaga ko'tarilayotgan haydovchi", "To'siq o'z harakat bo'lagida bo'lgan haydovchi", "Massasi kattaroq transport haydovchisi"],
  "Qiyaliklarda to'siq qayerda bo'lishidan qat'i nazar pastga tushayotgan haydovchi yo'l beradi, chunki ko'tarilayotgan transportni qayta harakatga keltirish qiyin (YHQ 128-band).");
Q("people", "Siz 1.14 belgisi bilan belgilangan tik balandlikka ko'tarilyapsiz, to'siq sizning bo'lagingizda, qarshidan pastga avtomobil tushyapti. Qoidaga ko'ra:",
  ["Pastga tushayotgan avtomobil sizga yo'l berishi kerak", "Siz to'siq oldida to'xtab, unga yo'l berishingiz kerak", "Kim birinchi yetib kelsa, o'sha o'tadi", "Ikkalangiz ham ovozli ishora berib o'tasiz"],
  "Qiyalikdagi to'siqda nishablikka harakatlanayotgan, ya'ni pastga tushayotgan haydovchi yo'l beradi (YHQ 128-band).");
Q("people", "Tik nishablikda tormoz tizimi ishlamay qoldi. Transport vositasini to'xtatish uchun haydovchi nima qilishi kerak?",
  ["Uni 5.40 belgisi bilan belgilangan avariya yo'liga yo'naltirishi", "Qarama-qarshi harakat bo'lagiga chiqib, asta-sekin sekinlashishi", "Uzatmani neytralga qo'yib, dvigatelni o'chirishi", "Yo'l yoqasidagi to'siqqa yonlatib, ishqalab to'xtatishi"],
  "Tik nishablik va dovonlarda tormozi ishlamay qolgan transport 5.40 belgisi bilan ko'rsatilgan avariyali holatlar yo'liga yo'naltiriladi (YHQ 129-band).");
Q("people", "1.13 belgisi bilan belgilangan yo'l qismida qanday harakatlanish taqiqlanadi?",
  ["Uzatma va ilashish mexanizmi ajratilgan holda (neytralda)", "Past uzatmada, dvigatel bilan tormozlagan holda", "Yaqinni yorituvchi faralar yoqilgan holda", "Ishchi tormozni vaqti-vaqti bilan bosib-qo'yib yuborib"],
  "Nishablikda uzatmani ajratib harakatlanish transportni dvigatel bilan tormozlash imkonidan mahrum qiladi, shuning uchun taqiqlangan (YHQ 130-band).");

// ===================== PEOPLE: boshqarishni o'rgatish (146–151) =====================
Q("people", "Transport vositasini boshqarishni dastlabki o'rgatish qayerda o'tkazilishi kerak?",
  ["Yopiq maydonchalarda yoki avtodromlarda", "Harakati kam bo'lgan ko'chalarda", "Turar joy dahalarida", "DYHXX bilan kelishilgan har qanday yo'lda"],
  "Dastlabki boshqarish ko'nikmalari faqat yopiq maydonchalar yoki avtodromlarda o'rgatiladi (YHQ 146-band).");
Q("people", "Yo'llarda boshqarishni o'rgatishga qaysi shartlarda ruxsat etiladi?",
  ["O'rganuvchi dastlabki ko'nikmalarga ega bo'lsa va o'rgatuvchi ishtirok etsa", "O'rganuvchi nazariy imtihondan o'tgan bo'lsa, o'rgatuvchisiz", "Faqat o'rganuvchi 18 yoshga to'lgan va tibbiy ko'rikdan o'tgan bo'lsa", "Avtodromdagi mashg'ulotlarsiz, birinchi darsdan"],
  "Yo'llarda o'rgatish faqat o'rgatuvchi ishtirokida va dastlabki ko'nikmaga ega o'rganuvchiga ruxsat etiladi (YHQ 147-band).");
Q("people", "Yo'lda boshqarishni o'rganayotgan o'quvchiga nisbatan qanday talab qo'yiladi?",
  ["Qoidalar talablarini bilishi va ularga amal qilishi shart", "Haydovchilik guvohnomasiga ega bo'lishi shart", "Kamida 1 yil nazariy tayyorgarlikdan o'tgan bo'lishi shart", "Faqat o'rgatuvchining ishoralariga amal qilishi kifoya"],
  "O'rganuvchi ham yo'l harakati ishtirokchisi, shuning uchun Qoidalarni bilishi va ularga amal qilishi shart (YHQ 147-band).");
Q("people", "Amaliy boshqaruv o'rgatuvchisida mashg'ulot vaqtida qanday hujjatlar bo'lishi shart?",
  ["O'rgatish huquqini beruvchi hujjat va tegishli toifadagi haydovchilik guvohnomasi", "Faqat tegishli toifadagi haydovchilik guvohnomasi va texnik pasport", "Faqat avtomaktabning yo'llanma varag'i va o'quv guruhi ro'yxati", "Haydovchilik guvohnomasi va kamida 5 yillik haydash staji haqida ma'lumotnoma"],
  "O'rgatuvchida ham o'rgatish huquqi hujjati, ham shu toifadagi transportni boshqarish guvohnomasi bo'lishi kerak (YHQ 148-band).");
Q("people", "«A» toifasi uchun o'rganuvchi o'quv muddati yakunida necha yoshga to'lgan bo'lishi kerak?",
  ["16 yosh", "17 yosh", "18 yosh", "14 yosh"],
  "«A» toifasidagi transportni boshqarish huquqi uchun o'rganuvchi o'qish yakunida 16 yoshga to'lishi kerak (YHQ 149-band).");
Q("people", "«C» toifasi uchun o'rganuvchi o'quv muddati yakunida necha yoshga to'lgan bo'lishi kerak?",
  ["18 yosh", "19 yosh", "21 yosh", "17 yosh"],
  "«B» va «C» toifalari uchun o'qish yakunida 18 yosh talab qilinadi (YHQ 149-band).");
Q("people", "Qaysi toifalar uchun o'rganuvchi o'quv muddati yakunida 19 yoshga to'lgan bo'lishi kerak?",
  ["«BE» va «CE»", "«D» va «DE»", "«B» va «C»", "«C» va «D»"],
  "Tirkamali «BE» va «CE» toifalari uchun 19 yosh talab qilinadi (YHQ 149-band).");
Q("people", "«D» va «DE» toifalari, shuningdek tramvay va trolleybus uchun o'rganuvchi o'qish yakunida necha yoshga to'lishi kerak?",
  ["21 yosh", "19 yosh", "20 yosh", "18 yosh"],
  "Yo'lovchi tashuvchi transport uchun eng yuqori yosh chegarasi — 21 yosh belgilangan (YHQ 149-band).");
Q("people", "Boshqarishni o'rgatish uchun mo'ljallangan mexanik transport vositasi qanday jihozlanishi kerak?",
  ["O'rgatuvchi uchun qo'shimcha ilashish va tormoz tepkilari, ko'zgu va GPS bilan", "O'rgatuvchi uchun qo'shimcha tormoz tepkisi, ko'zgu va videoregistrator bilan", "O'rgatuvchi uchun qo'shimcha rul, tezlik cheklagich va videoregistrator bilan", "O'rgatuvchi uchun qo'shimcha gaz va tormoz tepkilari hamda ko'zgu bilan"],
  "O'quv transportida o'rgatuvchi uchun ilashish va tormozning qo'shimcha tepkilari, orqani ko'rsatuvchi ko'zgu va GPS qurilmasi bo'lishi shart (YHQ 150-band).");
Q("people", "O'quv avtomobili DYHXX bilan kelishilmagan ko'chada amaliy mashg'ulot o'tkazishi:",
  ["Taqiqlanadi", "O'rgatuvchi ishtirokida ruxsat etiladi", "Ko'chada harakat kam bo'lsa ruxsat etiladi", "«Boshqarishni o'rgatish» belgisi bo'lsa ruxsat etiladi"],
  "O'rgatish yo'nalishlari DYHXX bilan kelishilishi shart, boshqa yo'llarda o'rgatish taqiqlangan (YHQ 151-band).");
Q("people", "Boshqarishni o'rgatish ruxsat etilgan yo'llar ro'yxati va chizmasi kim bilan kelishiladi?",
  ["DYHXX bilan", "Mahalliy hokimlik bilan", "Avtomaktab rahbari bilan", "Yo'l xo'jaligi tashkiloti bilan"],
  "O'rgatish yo'llari ro'yxati va chizmasi DYHXX bilan belgilangan tartibda kelishiladi (YHQ 183-band).");

// ===================== PEOPLE: odam tashish (152–159) =====================
Q("people", "Odam tashish uchun mo'ljallangan yuk avtomobili yukxonasida odam tashish uchun haydovchiga qanday talab qo'yiladi (8 nafargacha)?",
  ["«C» toifasiga ega va shu toifada kamida 3 yil boshqargan bo'lishi", "«C» toifasiga ega va kamida 1 yil boshqargan bo'lishi", "«B» toifasiga ega va kamida 3 yil boshqargan bo'lishi", "«C» va «D» toifalariga ega bo'lishi, staj talab qilinmaydi"],
  "Yukxonada 8 nafargacha odam tashish uchun «C» toifasi va shu toifada kamida 3 yil staj kerak (YHQ 152-band).");
Q("people", "Yuk avtomobili yukxonasida 6 kishi, kabinada 2 yo'lovchi bor. Haydovchiga qaysi talab yetarli?",
  ["«C» toifasi va shu toifada kamida 3 yil staj", "«C» toifasi va qo'shimcha «D» toifasi", "Faqat «D» toifasi, staji 3 yildan kam bo'lmasa", "«C» toifasi, staj talab qilinmaydi"],
  "Kabinadagilar bilan birga jami 8 kishi — 8 nafardan ortiq emas, shuning uchun «D» toifasi talab qilinmaydi (YHQ 152-band).");
Q("people", "Yuk avtomobili yukxonasida 7 kishi, kabinada 2 yo'lovchi tashilmoqda. Haydovchida nima bo'lishi kerak?",
  ["«C» (3 yil staj) va qo'shimcha «D» toifasi", "Faqat «C» toifasi va shu toifada 3 yillik staj", "Faqat «D» toifasi", "«CE» toifasi va shu toifada 1 yillik staj"],
  "Kabinadagilar bilan jami 9 kishi — 8 dan ortiq, shuning uchun 152-bandning birinchi xatboshidagi talablarga qo'shimcha «D» toifasi kerak (YHQ 152-band).");
Q("people", "Odam tashish uchun mo'ljallangan yuk avtomobili yukxonasining borti qanday balandlikda bo'lishi shart?",
  ["Kamida 1,3 m", "Kamida 1,0 m", "Kamida 1,5 m", "Kamida 0,8 m"],
  "Odamlar yiqilib tushmasligi uchun bort 1,3 metrdan kam bo'lmasligi shart (YHQ 153-band).");
Q("people", "Odam tashiladigan yukxonadagi o'rindiqlar yukxonaning pastki qismidan qanday balandlikda mahkamlanadi?",
  ["0,3–0,5 m", "0,5–0,8 m", "0,1–0,3 m", "0,8–1,0 m"],
  "O'rindiqlar yukxona tagidan 0,3–0,5 metr balandlikda mahkamlangan bo'lishi kerak (YHQ 153-band).");
Q("people", "Odam tashish uchun moslashtirilmagan yuk avtomobili yukxonasida kimlar bo'lishiga yo'l qo'yiladi?",
  ["Faqat yukni olishga borayotgan yoki uni kuzatib borayotgan shaxslar", "8 nafargacha istalgan yo'lovchi, o'rindiqlarda o'tirgan holda", "Faqat 16 yoshdan katta yo'lovchilar", "Haydovchining oila a'zolari va yaqin qarindoshlari"],
  "Moslashtirilmagan yukxonada faqat yukni olishga borayotgan yoki kuzatuvchi shaxslar bo'lishi mumkin (YHQ 154-band).");
Q("people", "Odam tashishga moslashtirilmagan yukxonada yukni kuzatib borayotgan shaxslar qanday joylashishi kerak?",
  ["Bort sathidan pastda, o'rindiqlarda o'tirgan holda", "Bort ustida o'tirgan holda", "Yuk ustida yotgan holda", "Bortni ushlab, yukxona o'rtasida tik turgan holda"],
  "Ular bort sathidan pastda o'tirish uchun o'rindiqlar bilan ta'minlanishi kerak (YHQ 154-band).");
Q("people", "Bolalar guruhini avtobusda tashkiliy tashishda nima shart?",
  ["Avtobusda katta yoshli kuzatib boruvchi(lar) bo'lishi", "Avtobusda tibbiyot xodimi bo'lishi", "Faqat yo'l politsiyasi kuzatuvida harakatlanish", "Faqat sutkaning yorug' vaqtida harakatlanish"],
  "Bolalar guruhini tashkiliy tashishda avtobus (mikroavtobus)da katta yoshli kuzatuvchi bo'lishi shart (YHQ 156-band).");
Q("people", "Harakatni boshlashdan oldin haydovchi yo'lovchilarga nima haqida tushuncha berishi kerak?",
  ["Xavfsizlik choralari, chiqish-tushish va joylashish haqida", "Yo'l haqi, bekatlar va harakat jadvali haqida", "Yo'nalish, harakat vaqti va dam olish to'xtashlari haqida", "Faqat favqulodda chiqish eshiklari haqida"],
  "Haydovchi yo'lovchilarga xavfsizlik choralari va chiqish-tushish, joylashish tartibini tushuntirishi kerak (YHQ 157-band).");
Q("people", "Yo'lovchi tashiyotgan haydovchi eshiklar bilan bog'liq qaysi talabga rioya qiladi?",
  ["Eshiklar yopilgach jo'naydi, to'liq to'xtamaguncha ochmaydi", "Bekatga yaqinlashganda vaqtni tejash uchun eshiklarni oldindan ochadi", "Sekin harakatda eshikni ochib yo'lovchini tushiradi", "Eshiklar to'liq yopilmagan bo'lsa ham bekatdan sekin jo'naydi"],
  "Yo'lovchilar xavfsizligi uchun harakat eshiklar yopilgach boshlanadi, to'liq to'xtaguncha ular ochilmaydi (YHQ 158-band).");
Q("people", "Yuk avtomobilining yukxonasida bolalarni tashish:",
  ["Taqiqlanadi", "Katta yoshli kuzatuvchi bo'lsa ruxsat etiladi", "Bort balandligi 1,3 m bo'lsa ruxsat etiladi", "O'rindiqlar jihozlangan bo'lsa ruxsat etiladi"],
  "Bolalarni yuk avtomobili yukxonasida tashish hech qanday sharoitda ruxsat etilmaydi (YHQ 159-band).");
Q("people", "Transport vositasi kabinasidan tashqarida odam tashish qaysi holatda ruxsat etiladi?",
  ["Odam tashishga mo'ljallangan bortli yoki furgon avtomobilda", "Yuk ortiladigan tirkamada, bort balandligi 1,3 m bo'lsa", "Traktor tirkamasida, 5 kishigacha va o'rindiqlarda", "Har qanday bortli yuk avtomobilida, past tezlikda"],
  "Kabinadan tashqarida odam tashish taqiqlangan, odam tashish uchun mo'ljallangan bortli yoki furgon-yukxonali avtomobillar bundan mustasno (YHQ 159-band).");
Q("people", "Qaysi transport vositasining yukxonasida odam tashish taqiqlanadi?",
  ["Traktor tirkamasi va yuk mototsikli", "Odam tashishga mo'ljallangan bortli yuk avtomobili", "Odam tashishga mo'ljallangan furgon-yukxonali avtomobil", "Odam tashishga mo'ljallangan avtobus yo'lovchi salonida"],
  "Traktorlar, o'ziyurar uskunalar, yuk tirkamalari, yuk mototsikllari, mopedlar va skuterlar yukxonasida odam tashish taqiqlangan (YHQ 159-band).");
Q("people", "Mototsikl, moped va skuterda yo'lovchini qayerda tashish mumkin?",
  ["Faqat konstruksiyasida ko'zda tutilgan joyda", "Yoqilg'i baki ustida", "Yukxonasida, kaska kiygan holda", "Har qanday joyda, agar tezlik 40 km/soatdan oshmasa"],
  "Mototsikl, moped va skuterlarda konstruksiyada ko'zda tutilgan joydan tashqarida odam tashish taqiqlangan (YHQ 159-band).");
Q("people", "12 yoshga to'lmagan bolani mototsiklning orqa o'rindig'ida tashish:",
  ["Taqiqlanadi", "Mototsikl kaskasi kiygizilsa ruxsat etiladi", "Ota-onadan biri boshqarsa ruxsat etiladi", "Aholi punkti ichida ruxsat etiladi"],
  "12 yoshga to'lmagan bolalarni mototsikl, elektromototsikl, moped va skuterning orqa o'rindig'ida tashish taqiqlangan (YHQ 159-band).");
Q("people", "12 yoshga to'lmagan bolani yengil avtomobilning old o'rindig'ida qachon tashish mumkin?",
  ["Bolalarni ushlab turuvchi qurilma o'rnatilgan bo'lsa", "Bola kattalar xavfsizlik kamarini taqib olsa", "Bola katta yoshli kishining tizzasida o'tirsa", "Orqa o'rindiqlarda bo'sh joy qolmagan bo'lsa"],
  "Bolalarni ushlab turuvchi maxsus qurilma o'rnatilmagan transportning old o'rindig'ida bolalarni tashish taqiqlangan (YHQ 159-band).");
Q("people", "Transport vositasida tashiladigan odamlar soni qanday cheklangan?",
  ["Texnik tavsifnomada ko'zda tutilgan miqdordan oshmasligi kerak", "Bolalar 2 tasi 1 kattaga teng hisoblanadi", "O'rindiqlar sonidan 2 kishigacha ko'p bo'lishi mumkin", "Faqat haqiqiy vazn ruxsat etilganidan oshmasa, son cheklanmaydi"],
  "Odam soni texnik tavsifnomada ko'zda tutilgan miqdordan oshmasligi, haqiqiy vazn esa ruxsat etilgan vazndan oshmasligi kerak (YHQ 159-band).");

// ===================== LIGHTING (134–141) =====================
Q("lighting", "Kunduzi yaxshi yoritilgan tunnelda harakatlanayotgan avtomobilda qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Uzoqni yoki yaqinni yorituvchi faralar", "Faqat gabarit chiroqlar", "Tunnel yoritilgan bo'lsa hech qaysi", "Faqat tumanga qarshi faralar"],
  "Tunnelda yo'lning yoritilganligidan qat'i nazar mexanik transportda uzoq yoki yaqin yorug'lik yoqilgan bo'lishi kerak (YHQ 134-band).");
Q("lighting", "Sutkaning qorong'i vaqtida tirkama va shatakka olingan mexanik transport vositasida qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Gabarit chiroqlar", "Yaqinni yorituvchi faralar", "Avariya ishorasi", "Tumanga qarshi orqa chiroqlar"],
  "Tirkamalar va shatakka olingan transport vositalarida qorong'ida gabarit chiroqlar yoqiladi (YHQ 134-band).");
Q("lighting", "Sutkaning qorong'i vaqtida velosipedda qanday yoritish asboblari yoqilgan bo'lishi kerak?",
  ["Fara yoki chiroqlar (agar mavjud bo'lsa)", "Faqat orqa qizil chiroq", "Faqat ovozli ishora va old oq nur qaytargich", "Uzoqni yorituvchi fara, qarama-qarshi transport bo'lmasa"],
  "Velosipedlarda qorong'ida mavjud fara yoki chiroqlar yoqilishi kerak (YHQ 134-band).");
Q("lighting", "Qaysi holatda uzoq yorug'lik o'rniga yaqin yorug'lik yoqilishi shart?",
  ["Yo'l yoritilgan bo'lsa", "Aholi punktidan tashqarida", "Tezlik 90 km/soatdan oshsa", "Yo'l nam bo'lsa"],
  "Yoritilgan yo'lda uzoq yorug'lik zarur emas va boshqalarni qamashtiradi, shuning uchun yaqin yorug'lik yoqiladi (YHQ 135-band).");
Q("lighting", "Qarama-qarshi transport vositasigacha kamida qancha masofa qolganda uzoq yorug'lik yaqinga almashtiriladi?",
  ["150 m", "100 m", "200 m", "300 m"],
  "Qarama-qarshi transportgacha kamida 150 metr qolganda yaqin yorug'likka o'tish kerak (YHQ 135-band).");
Q("lighting", "Qarama-qarshi haydovchi 300 m masofadan faralarini o'chirib-yoqib ishora berdi. Siz nima qilasiz?",
  ["Uzoq yorug'likni yaqinga almashtirasiz", "150 m qolguncha uzoq yorug'likni saqlaysiz", "Javoban faralarni o'chirib-yoqasiz", "Gabarit chiroqlarga o'tasiz"],
  "Qarama-qarshi haydovchi faralarni o'chirib-yoqib zarurat bildirsa, 150 m dan ko'proq masofada ham yaqinga o'tish kerak (YHQ 135-band).");
Q("lighting", "Qorong'ida yoritilmagan yo'lda oldingizdagi avtomobilga yaqinlashib, uning orqasidan harakatlanyapsiz. Qaysi yorug'lik to'g'ri?",
  ["Yaqin yorug'lik, chunki uzoq yorug'lik oldingi haydovchini qamashtirishi mumkin", "Uzoq yorug'lik, chunki qarama-qarshi yo'nalishda hech qanday transport yo'q", "Gabarit chiroqlar va tumanga qarshi orqa chiroqlar, faralarsiz", "Uzoq yorug'lik va tumanga qarshi faralar birga"],
  "Bir yo'nalishdagi haydovchining ko'zini qamashtirishi mumkin bo'lgan holatda ham yaqin yorug'likka o'tiladi (YHQ 135-band).");
Q("lighting", "Qorong'ida ko'zi qamashgan haydovchi nima qilishi kerak?",
  ["Avariya ishorasini yoqib, bo'lakni o'zgartirmasdan tezlikni kamaytirishi va to'xtashi", "O'ng yo'l yoqasiga keskin chiqib, tormozni bosib darhol to'xtashi", "Qarama-qarshi haydovchiga uzoq yorug'likni yoqib javob qaytarishi", "Tezlikni saqlab, ko'zini yo'lning o'ng chetiga qaratib harakatni davom etishi"],
  "Ko'zi qamashganda bo'lak o'zgartirilmaydi, avariya ishorasi yoqilib, tezlik kamaytiriladi va to'xtaladi (YHQ 135-band).");
Q("lighting", "Ko'zi qamashgan haydovchi qanday ishorani yoqishi kerak?",
  ["Avariya ishorasini", "O'ng burilish ko'rsatkichini", "Uzoqni yorituvchi faralarni", "Tumanga qarshi orqa chiroqni"],
  "Ko'zi qamashgan haydovchi orqadagilarni ogohlantirish uchun avariya ishorasini yoqadi (YHQ 135-band).");
Q("lighting", "Qorong'ida yo'lning yoritilmagan qismida to'xtab turgan transport vositasida nima yoqilgan bo'lishi kerak?",
  ["Gabarit chiroqlar", "Yaqinni yorituvchi faralar", "Avariya ishorasi", "Salon chirog'i"],
  "Qorong'ida yoritilmagan joyda to'xtagan yoki to'xtab turgan transportda gabarit chiroqlar yoqilishi kerak (YHQ 136-band).");
Q("lighting", "Yetarlicha ko'rinmaydigan sharoitda to'xtab turgan transport vositasida gabarit chiroqlarga qo'shimcha nimalarni yoqish mumkin?",
  ["Yaqin yorug'lik, tumanga qarshi faralar va tumanga qarshi orqa chiroqlar", "Faqat uzoqni yorituvchi faralar va kabina ichidagi salon chirog'i", "Faqat avariya ishorasi va burilish ko'rsatkichlari", "Projektor-faralar va izlovchi-faralar, qarama-qarshi transport bo'lmasa"],
  "Yetarlicha ko'rinmaydigan sharoitda gabarit chiroqlarga qo'shimcha yaqin yorug'lik va tumanga qarshi chiroqlarni yoqish mumkin (YHQ 136-band).");
Q("lighting", "Yetarlicha ko'rinmaydigan sharoitda (tuman) tumanga qarshi faralardan qanday foydalaniladi?",
  ["Alohida yoki asosiy faralar bilan birga", "Faqat uzoq yorug'lik bilan birga", "Faqat gabarit chiroqlar o'chirilgan holda", "Foydalanish taqiqlanadi, faqat gabarit yoqiladi"],
  "Yetarlicha ko'rinmaydigan sharoitda tumanga qarshi faralar alohida ham, asosiy faralar bilan birga ham ishlatilishi mumkin (YHQ 137-band).");
Q("lighting", "Tuman yo'q, ammo qorong'i va yo'l yoritilmagan. Tumanga qarshi faralardan qanday foydalanish mumkin?",
  ["Faqat uzoq yoki yaqin yorug'lik bilan birga", "Alohida, asosiy faralar o'rniga", "Faqat gabarit chiroqlar bilan birga", "Faqat qarama-qarshi transport bo'lmaganda alohida"],
  "Qorong'ida yoritilmagan yo'lda tumanga qarshi faralar faqat uzoq yoki yaqin yorug'lik bilan birga yoqiladi (YHQ 137-band).");
Q("lighting", "Kunduzi kuchli yomg'irda yaqin yorug'lik o'rniga qaysi chiroqlardan foydalanish mumkin?",
  ["Old tumanga qarshi faralardan", "Gabarit chiroqlardan", "Tumanga qarshi orqa chiroqlardan", "Avariya ishorasidan"],
  "138-bandda ko'rsatilgan holatlarda yaqin yorug'lik o'rniga tumanga qarshi faralardan foydalanish mumkin (YHQ 137-band).");
Q("lighting", "Kunduzi mototsikl, skuter yoki mopedda qaysi faralar yoqilgan bo'lishi kerak?",
  ["Yaqinni yorituvchi faralar", "Uzoqni yorituvchi faralar", "Faqat gabarit chiroqlar", "Faqat havo bulutli bo'lsa yaqin yorug'lik"],
  "Ikki g'ildirakli vositalarni ko'rinarli qilish uchun ularda kunduzi ham yaqin yorug'lik yoqiladi (YHQ 138-band).");
Q("lighting", "Kunduzi tashkiliy jamlanma (kolonna) safida harakatlanayotganda:",
  ["Yaqinni yorituvchi faralar yoqiladi", "Faqat avariya ishorasi yoqiladi", "Faqat oldingi avtomobilda faralar yoqiladi", "Uzoqni yorituvchi faralar yoqiladi"],
  "Tashkiliy jamlanma safida harakatlanayotgan barcha transportda kunduzi yaqin yorug'lik yoqiladi (YHQ 138-band).");
Q("lighting", "Mexanik transport vositasini shatakka olishda kunduzi yaqin yorug'lik qaysi transportda yoqilishi kerak?",
  ["Shatakka olib ketayotgan transport vositasida", "Faqat shatakka olingan transport vositasida", "Ikkalasida ham uzoq yorug'lik", "Hech birida, faqat avariya ishorasi"],
  "Kunduzi shatakka olishda yaqin yorug'lik shatakka olib ketayotgan transportda yoqiladi (YHQ 138-band).");
Q("lighting", "Quyidagi holatlardan qaysi birida kunduzi yaqin yorug'lik yoqish SHART EMAS?",
  ["Yuksiz yengil avtomobilda quruq havoda shahar ichida", "Xavfli yuk tashiyotgan avtomobilda", "Bolalar guruhini tashkiliy tashiyotgan avtobusda", "Mopedda"],
  "138-band ro'yxatida xavfli yuk, bolalar guruhi va mopedlar bor; oddiy sharoitdagi yengil avtomobil u yerda yo'q (YHQ 138-band).");
Q("lighting", "Kunduzi katta o'lchamli yoki og'ir vaznli yuk tashiyotgan transport vositasida:",
  ["Yaqinni yorituvchi faralar yoqilishi kerak", "Faqat zarg'aldoq mayoqcha yoqiladi, faralar shart emas", "Uzoqni yorituvchi faralar yoqilishi kerak", "Faqat gabarit chiroqlar yoqiladi"],
  "Xavfli, katta o'lchamli va og'ir vaznli yuk tashishda kunduzi yaqin yorug'lik yoqiladi (YHQ 138-band).");
Q("lighting", "Yo'lovchi tashiyotgan avtobus kunduzi qanday harakatlanishi kerak?",
  ["Yaqinni yorituvchi faralar yoqilgan holda", "Faqat gabarit chiroqlar yoqilgan holda", "Faqat aholi punktidan tashqarida yaqin yorug'lik bilan", "Faqat tumanga qarshi faralar bilan"],
  "Yo'lovchi tashiyotgan avtobuslar va yo'nalishli transportda kunduzi yaqin yorug'lik yoqilishi kerak (YHQ 138-band).");
Q("lighting", "Konstruksiyasida projektor-faralar va izlovchi-faralar bo'lgan transportdan qayerda foydalanish mumkin?",
  ["Aholi punktidan tashqarida, qarama-qarshi transport bo'lmaganda", "Aholi punktida, yo'l yoritilmagan bo'lsa", "Har qanday joyda, qarama-qarshi transport bo'lmaganda", "Faqat yetarlicha ko'rinmaydigan sharoitda, istalgan joyda"],
  "Projektor va izlovchi faralar aholi punktidan tashqarida va qarama-qarshi transport bo'lmaganda ishlatiladi (YHQ 139-band).");
Q("lighting", "Aholi punktida projektor-faralar va izlovchi-faralardan kim foydalanishi mumkin?",
  ["25- va 28-bandlarda ko'zda tutilgan mayoqchali transport haydovchilari", "Har qanday haydovchi, agar ko'cha yoritilmagan bo'lsa", "Faqat yo'lovchi tashiyotgan taksi va avtobus haydovchilari", "Faqat katta o'lchamli yuk tashiyotgan yuk avtomobili haydovchilari"],
  "Aholi punktida bunday faralar faqat tezkor-maxsus xizmatlar va zarg'aldoq mayoqchali transport (25 va 28-bandlar) haydovchilariga ruxsat etilgan (YHQ 139-band).");
Q("lighting", "Tumanga qarshi orqa chiroqlarni qachon yoqish mumkin?",
  ["Faqat yetarlicha ko'rinmaydigan sharoitda", "Sutkaning har qanday qorong'i vaqtida", "Yoritilmagan yo'lda to'xtab turganda doim", "Kunduzi kuchli shamolda"],
  "Tumanga qarshi orqa chiroqlar faqat yetarlicha ko'rinmaydigan sharoitda qo'llaniladi, aks holda orqadagilarni qamashtiradi (YHQ 140-band).");
Q("lighting", "Tumanga qarshi orqa chiroqlarni to'xtash chiroqlari (stop-signal)ga ulash:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat yuk avtomobillarida ruxsat etiladi", "Faqat tirkamalarda ruxsat etiladi"],
  "Tumanga qarshi orqa chiroqlarni stop-signalga ulash taqiqlangan (YHQ 140-band).");
Q("lighting", "«Avtopoyezd» taniqlik belgisi qachon yoqib qo'yilishi kerak?",
  ["Harakatda, qorong'ida va yomon ko'rinishda esa to'xtab turganda ham", "Faqat sutkaning qorong'i vaqtida harakatlanganda", "Faqat sutkaning qorong'i vaqtida, harakatda va to'xtab turganda", "Faqat aholi punktidan tashqarida harakatlanganda"],
  "«Avtopoyezd» belgisi harakatda doim, qorong'ida va yomon ko'rinishda esa to'xtash va to'xtab turishda ham yoqiladi (YHQ 141-band).");
Q("lighting", "Tezkor xizmat mayoqchasi va maxsus tovushli ishorasi yoqilgan transport kuzatib borayotgan transport vositalarida nima yoqilgan bo'lishi shart?",
  ["Yaqinni yorituvchi faralar", "Avariya ishorasi", "Uzoqni yorituvchi faralar", "Tumanga qarshi orqa chiroqlar"],
  "Kuzatib kelinayotgan transport vositalarida yaqinni yorituvchi faralar yoqilgan bo'lishi shart (YHQ 25-band).");
Q("lighting", "Kunduzi bolalar guruhini tashkiliy tashiyotgan avtobusda qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Yaqinni yorituvchi faralar", "Avariya ishorasi", "Zarg'aldoq mayoqcha", "Faqat gabarit chiroqlar"],
  "Bolalar guruhini tashkiliy tashishda kunduzi yaqin yorug'lik yoqilishi kerak (YHQ 138-band).");
Q("lighting", "Sutkaning qorong'i vaqtida harakatlanayotgan barcha mexanik transport vositalarida qaysi faralar yoqilgan bo'lishi kerak?",
  ["Uzoqni yoki yaqinni yorituvchi faralar", "Faqat gabarit chiroqlar", "Faqat yaqinni yorituvchi faralar", "Faqat tumanga qarshi faralar"],
  "Qorong'ida mexanik transportda vaziyatga qarab uzoq yoki yaqin yorug'lik yoqiladi (YHQ 134-band).");
Q("lighting", "Kunduzi kuchli qor yog'ayotganda harakatlanayotgan avtomobilda:",
  ["Yaqinni yorituvchi faralar yoqilishi kerak", "Faqat gabarit chiroqlar yoqiladi", "Avariya ishorasi yoqiladi", "Uzoqni yorituvchi faralar yoqiladi"],
  "Kuchli yog'ingarchilik (yomg'ir, qor) sharoitida kunduzi yaqin yorug'lik yoqilishi kerak (YHQ 138-band).");
Q("lighting", "Kunduzi yaxshi ko'rinishda xavfli yuk tashiyotgan avtomobil qanday harakatlanishi kerak?",
  ["Yaqinni yorituvchi faralar yoqilgan holda", "Faqat zarg'aldoq mayoqcha yoqilgan holda", "Avariya ishorasi yoqilgan holda", "Faqat gabarit chiroqlar yoqilgan holda"],
  "Xavfli yuk tashishda kunduzi ham yaqin yorug'lik yoqilishi shart (YHQ 138-band).");

// ===================== TOWING (142–145, 177) =====================
Q("towing", "Qattiq yoki egiluvchan ulagich bilan shatakka olishda shatakka olingan transportning rulida kim bo'lishi kerak?",
  ["Haydovchi", "Istalgan katta yoshli yo'lovchi", "Hech kim, rul qotiriladi", "Istalgan voyaga yetgan yo'lovchi, guvohnomasiz"],
  "Qattiq yoki egiluvchan ulagich bilan shatakka olish faqat shatakdagi transport rulida haydovchi bo'lganda amalga oshiriladi (YHQ 142-band).");
Q("towing", "Qaysi holatda shatakka olingan transport rulida haydovchi bo'lmasligi mumkin?",
  ["Qattiq ulagich shatakdagi transportni tortuvchi izidan yurishini ta'minlasa", "Egiluvchan ulagich 4 m dan qisqa va tezlik past bo'lsa", "Shatakdagi transportning rul va ishchi tormoz tizimi to'liq soz bo'lsa", "Shatakka olish aholi punktidan tashqarida, quruq yo'lda bo'lsa"],
  "Faqat izdan yurishni ta'minlaydigan maxsus qattiq ulagich bilan shatakka olishda rulda haydovchi talab qilinmaydi (YHQ 142-band).");
Q("towing", "Qaysi holatda shatakdagi transport vositasida odam bo'lishi taqiqlanadi?",
  ["Qattiq ulagich bilan shatakka olinayotgan trolleybusda", "Egiluvchan ulagich bilan shatakdagi yengil avtomobil rulida", "Qisman ortish usulida shatakka olgan avtomobil kabinasida", "Qattiq ulagich bilan shatakdagi yuk avtomobili rulida"],
  "Qattiq yoki egiluvchan ulagichda avtobus, trolleybus va yuk avtomobili yukxonasida odam tashish taqiqlangan; rulda haydovchi esa shart (YHQ 143-band).");
Q("towing", "Qisman ortish usulida shatakka olishda odamlar qayerda bo'lishi taqiqlanadi?",
  ["Shatakdagi transportning kabinasi va yukxonasida, tortuvchining yukxonasida", "Faqat shatakdagi transportning kabinasida, yukxonada ruxsat", "Shatakdagi va tortuvchi transportning kabinalarida, yukxonada ruxsat", "Faqat shatakdagi transportning yukxonasida, kabinada ruxsat"],
  "Qisman ortishda shatakdagi transportning kabinasi va yukxonasida, shuningdek tortuvchi transport yukxonasida odam bo'lishi taqiqlangan (YHQ 143-band).");
Q("towing", "Tortuvchi transport vositasining yukxonasida odam bo'lishi qaysi shatakka olish usulida taqiqlanadi?",
  ["Qisman ortish usulida", "Egiluvchan ulagich bilan", "Qattiq ulagich bilan", "Faqat 20 m dan uzun avtopoyezdda"],
  "143-band tortuvchi transport yukxonasidagi odamlarni aynan qisman ortish usulida taqiqlaydi (YHQ 143-band).");
Q("towing", "Egiluvchan ulagich bilan shatakka olishda transport vositalari orasidagi masofa qancha bo'lishi kerak?",
  ["4–6 m", "3–5 m", "5–8 m", "2–4 m"],
  "Egiluvchan ulagichda masofa 4–6 metr oralig'ida bo'lishi kerak (YHQ 144-band).");
Q("towing", "Qattiq ulagich bilan shatakka olishda transport vositalari orasidagi masofa:",
  ["4 m dan ko'p bo'lmasligi kerak", "4–6 m oralig'ida bo'lishi kerak", "6 m dan ko'p bo'lmasligi kerak", "3 m dan kam bo'lmasligi kerak"],
  "Qattiq ulagichda transportlar orasidagi masofa 4 metrdan oshmasligi kerak (YHQ 144-band).");
Q("towing", "Egiluvchan ulagich bilan shatakka olishda transportlar orasidagi masofa 8 m. Bu:",
  ["Qoidabuzarlik, masofa 4–6 m bo'lishi kerak", "Ruxsat, egiluvchan ulagich uchun cheklov yo'q", "Ruxsat, 10 m gacha bo'lishi mumkin", "Faqat aholi punktida qoidabuzarlik"],
  "Egiluvchan ulagichda masofa 6 metrdan oshmasligi kerak (YHQ 144-band).");
Q("towing", "Rul boshqaruvi ishlamayotgan transport vositasini shatakka olish:",
  ["Faqat qisman ortish usulida mumkin", "Qattiq ulagich bilan mumkin", "Egiluvchan ulagich bilan mumkin", "Haydovchi rulda bo'lsa istalgan usulda mumkin"],
  "Rul boshqaruvi ishlamayotgan transportni shatakka olish taqiqlangan, qisman ortish usuli bundan mustasno (YHQ 145-band).");
Q("towing", "Bir vaqtning o'zida ikki yoki undan ortiq transport vositasini shatakka olish:",
  ["Taqiqlanadi", "Qattiq ulagich bilan ruxsat etiladi", "Umumiy uzunlik 20 m dan oshmasa ruxsat etiladi", "Aholi punktidan tashqarida ruxsat etiladi"],
  "Ikki va undan ko'p transport vositasini shatakka olish taqiqlangan (YHQ 145-band).");
Q("towing", "Shatakka olgan va olingan transport ulagich bilan birga umumiy uzunligi qanchadan oshsa, shatakka olish taqiqlanadi?",
  ["20 m", "15 m", "18 m", "24 m"],
  "Ulagich bilan birga umumiy uzunlik 20 metrdan ortiq bo'lsa shatakka olish taqiqlangan (YHQ 145-band).");
Q("towing", "Ishchi tormoz tizimi ishlamayotgan transportning haqiqiy vazni tortuvchi transport haqiqiy vaznining yarmidan ortiq. Shatakka olish:",
  ["Taqiqlanadi", "Faqat qattiq ulagich bilan mumkin", "Faqat egiluvchan ulagich bilan mumkin", "Shatakdagi rulda haydovchi bo'lsa istalgan usulda mumkin"],
  "Tormozsiz transport tortuvchining yarim vaznidan og'ir bo'lsa, uni ishonchli to'xtatib bo'lmaydi, shuning uchun shatakka olish taqiqlangan (YHQ 145-band).");
Q("towing", "Tortuvchi avtomobil 3000 kg, ishchi tormozi ishlamayotgan avtomobil 1200 kg. Qaysi usulda shatakka olish mumkin?",
  ["Faqat qattiq ulagich yoki qisman ortish usulida", "Faqat egiluvchan ulagichda, masofa 4 m bo'lsa", "Har qanday usulda, rulda haydovchi bo'lsa", "Shatakka olish butunlay taqiqlanadi"],
  "Tormozsiz transport tortuvchining yarim vaznidan yengil bo'lsa, faqat qattiq ulagich yoki qisman ortish usuliga yo'l qo'yiladi (YHQ 145-band).");
Q("towing", "Ishchi tormozi ishlamayotgan transportni egiluvchan ulagich bilan shatakka olish mumkinmi?",
  ["Yo'q, faqat qattiq ulagich yoki qisman ortish usuli mumkin", "Ha, agar ulagich 4 m dan oshmasa va yo'l quruq bo'lsa", "Ha, agar uning vazni tortuvchinikining yarmidan kam bo'lsa", "Ha, agar rulda haydovchi bo'lsa"],
  "Tormozsiz transportni egiluvchan ulagichda to'xtatib bo'lmaydi; ruxsat faqat qattiq ulagich yoki qisman ortishga beriladi (YHQ 145-band).");
Q("towing", "Ikki g'ildirakli mototsikl bilan boshqa transportni shatakka olish:",
  ["Taqiqlanadi", "Egiluvchan ulagich bilan ruxsat etiladi", "Faqat moped shatakka olinsa ruxsat etiladi", "Faqat qattiq ulagich bilan ruxsat etiladi"],
  "Ikki g'ildirakli mototsikl, elektromototsikl, moped, skuter va individual harakatlanish vositalari bilan shatakka olish taqiqlangan (YHQ 145-band).");
Q("towing", "Mopedni yoki skuterni avtomobil bilan shatakka olish:",
  ["Taqiqlanadi", "Qattiq ulagich bilan ruxsat etiladi", "Egiluvchan ulagich bilan ruxsat etiladi", "Moped haydovchisi kaska kiysa ruxsat etiladi"],
  "145-band mopedlar, skuterlar va individual harakatlanish vositalarini shatakka olishni ham taqiqlaydi (YHQ 145-band).");
Q("towing", "Yaxmalak yoki sirpanchiq yo'lda qaysi usulda shatakka olish taqiqlanadi?",
  ["Egiluvchan ulagich bilan", "Qattiq ulagich bilan", "Qisman ortish usulida", "Har qanday usulda"],
  "Sirpanchiq yo'lda egiluvchan ulagich tortuvchi tormozlaganda shatakdagi transportning urilishiga olib kelishi mumkin, shuning uchun taqiqlangan (YHQ 145-band).");
Q("towing", "Yo'l muz bilan qoplangan. Nosoz avtomobilni qanday shatakka olish mumkin?",
  ["Qattiq ulagich bilan yoki qisman ortish usulida", "Faqat egiluvchan ulagich bilan", "Egiluvchan ulagich bilan, masofa 6 m bo'lsa", "Faqat ikki avtomobilni birga"],
  "Sirpanchiq yo'lda faqat egiluvchan ulagich taqiqlangan; qattiq ulagich va qisman ortish usuli qoladi (YHQ 145-band).");
Q("towing", "Shatakdagi avtomobilning rul boshqaruvi va ishchi tormozi soz, yo'l quruq. Qaysi usullardan foydalanish mumkin?",
  ["Har uchala usul: egiluvchan, qattiq, qisman ortish", "Faqat qattiq ulagich bilan, masofa 4 m gacha", "Faqat qisman ortish usulida", "Faqat egiluvchan ulagich bilan, 4–6 m"],
  "145-banddagi taqiqlarning hech biri qo'llanilmaydi, shuning uchun har uch usul mumkin (YHQ 145-band).");
Q("towing", "Egiluvchan ulagichga o'rnatiladigan ogohlantiruvchi bayroqcha yoki belgining o'lchami qancha?",
  ["200x200 mm", "300x300 mm", "150x150 mm", "400x400 mm"],
  "Egiluvchan ulagichni ko'rsatuvchi bayroqcha yoki belgi 200x200 millimetr bo'ladi (YHQ 177-band).");
Q("towing", "Egiluvchan ulagich belgisi qanday ko'rinishda bo'ladi?",
  ["Diagonal qizil-oq chiziqli, yorug'lik qaytaradigan", "Sariq fonda qora uchburchak, yorug'lik qaytaradigan", "Qizil fonda oq «T» harfi", "Zarg'aldoq fonda qora strelka, yorug'lik qaytarmaydigan"],
  "Belgi diagonal bo'yicha kengligi 50 mm li qizil va oq chiziqlardan iborat, yorug'lik qaytaradigan yuzaga ega (YHQ 177-band).");
Q("towing", "Egiluvchan ulagichga kamida nechta taniqlik belgisi o'rnatiladi?",
  ["Ikkita", "Bitta", "Uchta", "To'rtta"],
  "Egiluvchan ulagich yaxshi ko'rinishi uchun unga kamida ikkita belgi o'rnatiladi (YHQ 177-band).");
Q("towing", "Egiluvchan ulagich belgisidagi qizil va oq chiziqlarning kengligi qancha?",
  ["50 mm", "40 mm", "25 mm", "100 mm"],
  "Belgiga kengligi 50 mm li qizil va oq chiziqlar diagonal bo'yicha tushiriladi (YHQ 177-band).");
Q("towing", "Velosiped bilan nimani shatakka olishga ruxsat etiladi?",
  ["Velosipedga mo'ljallangan tirkamani", "Boshqa velosipedni", "Mopedni", "Individual harakatlanish vositasini"],
  "Velosipedlarni shatakka olish va ulardan shatakka olishda foydalanish taqiqlangan, velosiped tirkamasi bundan mustasno (YHQ 168-band).");
Q("towing", "Qattiq ulagichli qurilmaning konstruksiyasi qanday talabga javob berishi kerak?",
  ["Texnik tartibga solish sohasidagi normativ hujjatlar talablariga", "Faqat ishlab chiqaruvchi tavsiyasiga", "Uzunligi 6 m dan oshmasligi va bo'yalgan bo'lishi kifoya", "Faqat DYHXX bilan kelishilishi kifoya"],
  "Qattiq ulagich konstruksiyasi texnik tartibga solish sohasidagi normativ hujjatlarga mos bo'lishi kerak (YHQ 178-band).");

// ===================== CARGO (160–164) =====================
Q("cargo", "Tashilayotgan yukning vazni va o'qlarga tushadigan og'irlik qanday bo'lishi kerak?",
  ["Belgilangan va ishlab chiqaruvchi ruxsat etgan miqdordan oshmasligi", "Ishlab chiqaruvchi belgilagan me'yordan 10% gacha oshishi mumkin", "Faqat umumiy vazn cheklanadi, o'q yuklamasi cheklanmaydi", "Faqat o'q yuklamasi cheklanadi, umumiy vazn cheklanmaydi"],
  "Yuk vazni ham, o'qlarga taqsimlanishi ham belgilangan va ishlab chiqaruvchi ruxsat etgan miqdordan oshmasligi kerak (YHQ 160-band).");
Q("cargo", "Haydovchi yukning joylashuvi va mahkamlanishini qachon tekshiradi?",
  ["Harakatdan oldin, yo'lda esa kuzatib boradi", "Faqat manzilga yetib kelgach, yuk tushirishdan oldin", "Faqat yuk ortilayotganda, keyin tekshirmaydi", "Faqat DYHXX xodimi talab qilganda"],
  "Haydovchi harakatdan oldin yuk to'g'ri joylashgani va mahkamlanganiga ishonch hosil qiladi va yo'lda kuzatib boradi (YHQ 161-band).");
Q("cargo", "Qaysi holatda yuk tashishga yo'l qo'yilmaydi?",
  ["Yuk davlat raqam belgisini to'sib qo'ysa", "Yuk kuzov ichida, bort sathidan past bo'lsa", "Yuk orqadan 0,5 m chiqib tursa", "Yuk brezent bilan yopilgan bo'lsa"],
  "Yuk tashqi yoritish asboblari, yorug'lik qaytargichlar, davlat raqami va taniqlik belgilarini to'smasligi kerak (YHQ 162-band).");
Q("cargo", "Yengil avtomobil tomidagi yukxonada yukning balandligi qanchadan oshmasligi kerak?",
  ["1 m", "0,5 m", "1,5 m", "0,8 m"],
  "Tom yukxonasidagi yuk balandligi 1 metrdan oshmasligi kerak (YHQ 162-band).");
Q("cargo", "Yengil avtomobil tomidagi yukxonadagi yuk uzunligi bo'yicha avtomobil gabaritidan qanchadan oshmasligi kerak?",
  ["0,5 m", "1 m", "0,4 m", "1,5 m"],
  "Tom yukxonasidagi yuk avtomobil gabaritidan uzunligi bo'yicha 0,5 metrdan oshmasligi kerak (YHQ 162-band).");
Q("cargo", "Yengil avtomobil tomida yuk balandligi 1 m cheklovi qaysi holatda qo'llanilmaydi?",
  ["Maxsus moslamada mahkamlangan velosipedlarni tashishda", "Yengil yuklarni (ko'rpa, yostiq, bo'sh qutilar) tashishda", "Aholi punktidan tashqarida, tezlik 60 km/soatdan oshmasa", "Yuk brezent bilan to'liq yopilgan bo'lsa"],
  "Maxsus moslamalarda mahkamlangan velosipedlar va individual harakatlanish vositalari bu cheklovdan mustasno (YHQ 162-band).");
Q("cargo", "Sochiluvchan yuklarni bortli va o'zi ag'daruvchi avtomobillarda tashishda brezent tentning zichligi qanchadan kam bo'lmasligi kerak?",
  ["660 g/m2", "500 g/m2", "900 g/m2", "450 g/m2"],
  "Brezentdan tayyorlangan tent zichligi kamida 660 g/m2 bo'lishi kerak (YHQ 162-band).");
Q("cargo", "Sochiluvchan yukni yopadigan polivinilxlorid qoplamali tentning zichligi qanchadan kam bo'lmasligi kerak?",
  ["900 g/m2", "660 g/m2", "750 g/m2", "1200 g/m2"],
  "Polivinilxlorid qoplamali materialdan tayyorlangan tent zichligi kamida 900 g/m2 bo'lishi kerak (YHQ 162-band).");
Q("cargo", "Sochiluvchan yukni yopuvchi tent bortni har tomondan qancha yopishi kerak?",
  ["200±50 mm dan kam bo'lmagan holda", "100±20 mm dan kam bo'lmagan holda", "300±50 mm dan kam bo'lmagan holda", "500 mm dan kam bo'lmagan holda"],
  "Tent bortni har tomondan kamida 200±50 mm yopib, mahkamlovchi moslamalar bilan qotiriladi (YHQ 162-band).");
Q("cargo", "Sochiluvchan yukni tent bilan majburiy yopish talabi qaysi toifadagi bortli va o'zi ag'daruvchi transportlarga tegishli?",
  ["N, O3 va O4", "M1, M2 va M3", "L, N va O1", "Faqat N3"],
  "Talab N, O3 va O4 toifadagi bortli va o'zi ag'daruvchi avtotransport vositalariga qo'yiladi (YHQ 162-band).");
Q("cargo", "Qaysi yukni ochiq platformada tashishda tent bilan yopish majburiy EMAS?",
  ["Issiq asfalt", "Qum", "Qurilish chiqindilari", "Qishloq xo'jaligi mahsulotlari"],
  "Issiq asfalt, yirik gabaritli va og'ir yuklar tent bilan yopish talabidan mustasno (YHQ 162-band).");
Q("cargo", "Sochiluvchan yuk tent bilan yopilganda qanday joylashishi kerak?",
  ["Bort sathidan oshirmasdan", "Bort sathidan 0,5 m gacha oshib", "Bort sathidan 1 m gacha oshib", "Balandligi cheklanmaydi, faqat yopilsa bo'ldi"],
  "Sochiluvchan yuk bort sathidan oshirilmaydi, tent bilan to'liq yopilib bortga qotiriladi (YHQ 162-band).");
Q("cargo", "Yuk tashish yana qanday shartlarga rioya qilinganda ruxsat etiladi?",
  ["Shovqin solmasa, chang ko'tarmasa, yo'l va atrof muhitni ifloslamasa", "Faqat yuk va transport sug'urta qilingan bo'lsa", "Faqat yuk hujjati rasmiylashtirilgan bo'lsa, boshqa shart yo'q", "Faqat yuk og'irligi 1 tonnadan oshmasa"],
  "Yuk shovqin solmasligi, chang ko'tarmasligi va yo'lni ifloslamasligi kerak (YHQ 162-band).");
Q("cargo", "Yo'lda yuk siljib, ko'rinishni cheklab qo'ydi. Haydovchi nima qilishi kerak?",
  ["Kamchilikni bartaraf etadi, iloji bo'lmasa harakatni to'xtatadi", "Tezlikni 40 km/soatgacha kamaytirib, manzilgacha davom etadi", "Avariya ishorasini yoqib, eng yaqin postgacha harakatni davom ettiradi", "Yaqin yorug'likni yoqib, eng chetki o'ng qatorda davom etadi"],
  "Yuk talablarga javob bermasa, haydovchi kamchilikni bartaraf etadi, buning iloji bo'lmasa keyingi harakatni to'xtatishi shart (YHQ 162-band).");
Q("cargo", "Yuk transport vositasi gabaritidan oldi yoki orqa tomonga qanchadan ortiq chiqib tursa, «Katta o'lchamli yuk» belgisi bilan belgilanadi?",
  ["1 m dan ortiq", "0,5 m dan ortiq", "2 m dan ortiq", "0,4 m dan ortiq"],
  "Oldi yoki orqaga 1 metrdan ortiq chiqib turgan yuk «Katta o'lchamli yuk» belgisi bilan belgilanadi (YHQ 163-band).", "id_oversize");
Q("cargo", "Yuk gabaritning chetki qismidan yon tomonga qanchadan ortiq chiqib tursa, belgilanishi kerak?",
  ["0,4 m dan ortiq", "0,5 m dan ortiq", "1 m dan ortiq", "0,2 m dan ortiq"],
  "Yon tomondan gabarit chetidan 0,4 metrdan ortiq chiqqan yuk belgilanadi (YHQ 163-band).");
Q("cargo", "Yuk avtomobili orqasidan yuk 0,8 m chiqib turibdi. «Katta o'lchamli yuk» belgisi kerakmi?",
  ["Yo'q, oldi-orqa uchun chegara 1 m dan ortiq", "Ha, 0,4 m dan ortiq bo'lgani uchun", "Ha, 0,5 m dan ortiq bo'lgani uchun", "Faqat sutkaning qorong'i vaqtida kerak"],
  "Oldi-orqa uchun belgi 1 m dan ortiq chiqqanda talab qilinadi; 0,4 m chegarasi faqat yon tomonga tegishli (YHQ 163-band).");
Q("cargo", "Qorong'ida transport gabaritidan chiqib turgan yuk qanday belgilanadi?",
  ["Oldi oq, orqasi qizil chiroq yoki yorug'lik qaytargich bilan", "Oldi va orqasi qizil chiroq bilan", "Oldi sariq, orqasi qizil chiroq bilan", "Faqat orqasi zarg'aldoq chiroq yoki qaytargich bilan"],
  "Qorong'ida «Katta o'lchamli yuk» belgisiga qo'shimcha oldi oq, orqasi qizil chiroq yoki qaytargich bilan belgilanadi (YHQ 163-band).");
Q("cargo", "Eni bo'yicha gabariti qanchadan ortiq bo'lgan transport harakati DYHXX bilan kelishilishi shart (oddiy kuzov)?",
  ["2,55 m", "2,5 m", "2,6 m", "3,0 m"],
  "Eni 2,55 m dan ortiq transport harakati DYHXX bilan kelishiladi; refrijerator va izotermik kuzovlar uchun 2,6 m (YHQ 164-band).");
Q("cargo", "Refrijerator yoki izotermik kuzovli transport uchun eni bo'yicha kelishiladigan chegara qancha?",
  ["2,6 m", "2,55 m", "2,5 m", "2,75 m"],
  "Refrijeratorlar va izotermik kuzovlar uchun eni bo'yicha chegara 2,6 metr (YHQ 164-band).");
Q("cargo", "Balandligi yo'l sathidan qanchadan ortiq bo'lgan transport vositasining harakati DYHXX bilan kelishiladi?",
  ["4 m", "3,8 m", "4,5 m", "3,5 m"],
  "Yukli yoki yuksiz balandligi yo'l sathidan 4 metrdan ortiq transport harakati kelishiladi (YHQ 164-band).");
Q("cargo", "Uzunligi qanchadan ortiq bo'lgan yakka avtotransport vositasining harakati DYHXX bilan kelishiladi?",
  ["12 m", "10 m", "15 m", "20 m"],
  "Yakka avtotransport vositasi uchun uzunlik chegarasi 12 metr; tirkamali avtopoyezd uchun 20 metr (YHQ 164-band).");
Q("cargo", "Yarim tirkamali yoki tirkamali avtopoyezd uchun DYHXX bilan kelishiladigan uzunlik chegarasi qancha?",
  ["20 m", "18 m", "16,5 m", "24 m"],
  "Yarim tirkamali va tirkamali avtopoyezdlar uchun uzunlik chegarasi 20 metr (YHQ 164-band).");
Q("cargo", "Yuk transport vositasining orqasidan 1,5 m chiqib turibdi. Qaysi talab qo'llaniladi?",
  ["Belgi kerak, DYHXX bilan kelishish shart emas", "Belgi ham, DYHXX bilan kelishish ham shart", "Belgi kerak emas, faqat DYHXX bilan kelishiladi", "Faqat qorong'ida chiroq bilan belgilanadi, boshqa talab yo'q"],
  "1 m dan ortiq chiqqan yuk belgilanadi (163-band), DYHXX bilan kelishish esa yuk 2 m dan ortiq chiqqanda talab qilinadi (YHQ 164-band).");
Q("cargo", "Avtobus va mikroavtobuslar tomiga yuk tashish uchun moslama o'rnatish:",
  ["Taqiqlanadi", "Yuk balandligi 1 m dan oshmasa ruxsat etiladi", "Shaharlararo qatnovda ruxsat etiladi", "DYHXX bilan kelishilsa ruxsat etiladi"],
  "Avtobus va mikroavtobuslar tomiga yuk moslamasi o'rnatish va belgilanmagan joylarda yuk tashish taqiqlangan (YHQ 164-band).");

// ===================== BIKES (165–173) =====================
Q("bikes", "Yo'lda velosiped boshqarishga necha yoshdan ruxsat etiladi?",
  ["14 yoshdan", "12 yoshdan", "16 yoshdan", "10 yoshdan"],
  "Velosiped, individual harakatlanish vositasi va aravani boshqarish 14 yoshdan kichik bo'lmagan shaxslarga ruxsat etiladi (YHQ 165-band).");
Q("bikes", "Moped va skuterni boshqarishga necha yoshdan ruxsat etiladi?",
  ["16 yoshdan", "14 yoshdan", "18 yoshdan", "15 yoshdan"],
  "Moped va skuterni boshqarish 16 yoshdan kichik bo'lmagan shaxslarga ruxsat etiladi (YHQ 165-band).");
Q("bikes", "13 yoshli o'smir yo'lda ot-aravani boshqarishi yoki miniladigan hayvonni haydab o'tishi mumkinmi?",
  ["Yo'q, buning uchun kamida 14 yosh kerak", "Ha, katta yoshli hamrohligida", "Ha, faqat qishloq yo'llarida", "Yo'q, buning uchun kamida 16 yosh kerak"],
  "Arava boshqarish va hayvonlarni haydab o'tish 14 yoshdan ruxsat etiladi (YHQ 165-band).");
Q("bikes", "Velosipedlar va mopedlar yo'lda qanday harakatlanishi kerak?",
  ["Chetki o'ng bo'lakda, imkon qadar o'ngda, bir qator bo'lib", "Chetki o'ng bo'lakda, ikki qator bo'lib", "Bo'lak o'rtasida, bir qator bo'lib", "Istalgan bo'lakda, transport oqimi tezligida, bir qatorda"],
  "Velosiped, moped va aravalar chetki o'ng bo'lakda, imkoni boricha o'ngda bir qator bo'lib harakatlanadi (YHQ 166-band).");
Q("bikes", "Velosipedchiga yo'l yoqasida harakatlanish qachon ruxsat etiladi?",
  ["Agar piyodalarga xalaqit bermasa", "Faqat qatnov qismi ta'mirlanayotgan bo'lsa", "Faqat aholi punktidan tashqarida", "Yo'l yoqasida harakatlanish taqiqlangan"],
  "Piyodalarga xalaqit bermasa, velosipedchilarga yo'l yoqasida harakatlanishga ham ruxsat etiladi (YHQ 166-band).");
Q("bikes", "Qatnov qismida harakatlanayotgan velosipedchilar guruhi qanday tartibga solinishi kerak?",
  ["Quvib o'tishni osonlashtiradigan guruhlarga bo'linishi kerak", "Bitta uzun kolonna bo'lib harakatlanishi kerak", "Ikki qatorga tizilishi kerak", "Avariya ishorali avtomobil hamrohligida harakatlanishi kerak"],
  "Velosipedchilar guruhlari xavfsizlikni ta'minlaydigan va quvib o'tishni osonlashtiradigan kichik guruhlarga bo'linadi (YHQ 166-band).");
Q("bikes", "Velosiped qanday jihozlangan bo'lishi zarur?",
  ["Tovushli ishora moslamasi va soz tormoz tizimi bilan", "Faqat soz tormoz bilan", "Orqani ko'rsatuvchi ko'zgu va spidometr bilan", "Faqat old chiroq bilan"],
  "Velosiped va individual harakatlanish vositasida tovushli ishora moslamasi va soz tormoz bo'lishi zarur (YHQ 167-band).");
Q("bikes", "Qorong'ida harakatlanish uchun velosipedning yon tomonlariga qanday rangli nur qaytargich o'rnatiladi?",
  ["Zarg'aldoq yoki qizil", "Oq", "Ko'k yoki yashil", "Faqat oq yoki sariq"],
  "Velosipedning oldiga oq, orqasiga qizil, yonlariga zarg'aldoq yoki qizil nur qaytargich o'rnatiladi (YHQ 167-band).");
Q("bikes", "Individual harakatlanish vositasi qanday yoritish jihozlariga ega bo'lishi shart?",
  ["Oldida fara, orqasida ogohlantirish chirog'i yoki qaytargich", "Faqat orqada qizil nur qaytargich va ovozli ishora", "Faqat old tomonda oq va orqada qizil nur qaytargich", "Avariya ishorasi, burilish ko'rsatkichlari va ovozli ishora"],
  "Individual harakatlanish vositalari old tomonidan fara, orqasida ogohlantirish chiroqlari yoki nur qaytargichlar bilan jihozlanadi (YHQ 167-band).");
Q("bikes", "Velosiped yo'lkasi yo'q, qorong'i. Qatnov qismidagi velosipedchi nimada bo'lishi shart?",
  ["Nur qaytargichli kamzulda yoki nur qaytaruvchi elementli ustki kiyimda", "Faqat himoya kaskasi va qo'lqopda", "Velosipedda old va orqa chiroq bo'lsa, maxsus kiyim shart emas", "Faqat yorqin rangli, ammo nur qaytarmaydigan kiyimda"],
  "Velosiped yo'lkasi bo'lmaganda qorong'ida velosipedchi nur qaytaruvchi kamzul yoki elementli kiyimda bo'lishi shart (YHQ 167-band).");
Q("bikes", "Velosipedchiga rulni bir qo'lda ushlab harakatlanish qachon ruxsat etiladi?",
  ["Manyovrdan oldin ishora berayotganda", "To'g'ri va bo'sh yo'lda", "Velosiped yo'lkasida", "Tezlik 10 km/soatdan past bo'lganda"],
  "Rulni ushlamasdan yoki bir qo'lda boshqarish taqiqlangan, manyovrdan oldin ishora berish bundan mustasno (YHQ 168-band).");
Q("bikes", "Velosipedda odam tashish qachon ruxsat etiladi?",
  ["Ishonchli oyoq qo'ygichli qo'shimcha o'rindiqda 7 yoshgacha bolani", "Rama ustidagi o'rindiqda 10 yoshgacha bolani", "Orqa yukxonada katta yoshli kishini, kaska bilan", "Ishonchli qo'shimcha o'rindiqda 12 yoshgacha bo'lgan bolani"],
  "Velosipedda odam tashish taqiqlangan, oyoq qo'ygichli qo'shimcha o'rindiqda 7 yoshgacha bola bundan mustasno (YHQ 168-band).");
Q("bikes", "Velosipedda gabaritidan bo'yiga yoki eniga qanchadan ortiq chiqib turgan yukni tashish taqiqlanadi?",
  ["0,5 m", "0,4 m", "1 m", "0,3 m"],
  "Gabaritidan bo'yiga va eniga 0,5 metrdan ortiq chiqib turgan yoki boshqarishga xalaqit beradigan yuk taqiqlangan (YHQ 168-band).");
Q("bikes", "Velosiped yo'lkasi mavjud bo'lsa, velosipedchining qatnov qismida harakatlanishi:",
  ["Taqiqlanadi", "Ruxsat etiladi, agar o'ng chetda bo'lsa", "Ruxsat etiladi, agar guruh bo'lib harakatlansa", "Faqat quvib o'tish uchun ruxsat etiladi"],
  "Velosiped yo'lkasi bo'lgan holda qatnov qismida harakatlanish taqiqlangan (YHQ 168-band).");
Q("bikes", "Velosipedchiga qaysi yo'llarda chapga burilish yoki qayrilib olish taqiqlanadi?",
  ["Tramvay yo'li bor yoki bir yo'nalishda 2+ bo'lakli yo'llarda", "Faqat asosiy yo'llarda va chorrahalarda", "Faqat tartibga solinmagan chorrahalar va qayrilish joylarida", "Tramvay yo'li yo'q, bir yo'nalishda bitta bo'lakli yo'llarda"],
  "Tramvay harakatlanadigan yo'llarda, shuningdek bir yo'nalishda bo'lagi bittadan ko'p yo'llarda velosipedchiga chapga burilish va qayrilish taqiqlangan (YHQ 168-band).");
Q("bikes", "Velosipedchi qatnov qismini piyodalar o'tish joyidan qanday kesib o'tishi kerak?",
  ["Velosipeddan tushib, uni yetaklab", "Velosipedni boshqargan holda, sekin", "Ovozli ishora berib, velosipedda", "Yashil chiroqda velosipedda"],
  "Qatnov qismini, shu jumladan piyodalar o'tish joyini velosipedni boshqarib kesib o'tish taqiqlangan (velosiped yo'laklari bundan mustasno) (YHQ 168-band).");
Q("bikes", "Chorrahadan tashqarida tartibga solinmagan velosiped yo'lkasi yo'l bilan kesishgan joyda kim yo'l beradi?",
  ["Velosipedchi yo'ldagi transport vositalariga", "Transport vositalari velosipedchiga", "O'ngdan kelayotgan yo'l beradi", "Tezroq harakatlanayotgan yo'l beradi"],
  "Chorrahadan tashqaridagi tartibga solinmagan kesishmada velosiped va individual harakatlanish vositalari yo'ldagi transportga yo'l beradi (YHQ 169-band).");
Q("bikes", "Velosiped yo'lkasi piyodalar yo'lkasi (trotuar) bilan kesishgan joyda:",
  ["Velosipedchi piyodaga yo'l beradi", "Piyoda velosipedchiga yo'l beradi", "Kim o'ngda bo'lsa, o'sha o'tadi", "Velosipedchi ovozli ishora berib o'tadi"],
  "Velosiped yo'lkasi va trotuar kesishganda velosiped va individual harakatlanish vositasi piyodaga yo'l beradi (YHQ 169-band).");
Q("bikes", "Qorong'ida ot-aravaning old va orqa tomonlarida nima bo'lishi kerak?",
  ["Oldida oq, orqasida qizil chiroq (yoki 2 tadan qaytargich)", "Oldida va orqasida bittadan qizil chiroq yoki bittadan nur qaytargich", "Oldida sariq chiroq, orqasida qizil chiroq yoki 2 ta qaytargich", "Faqat orqasida zarg'aldoq mayoqcha va qaytargich"],
  "Ot-aravaning oldiga oq chiroq yoki ikkita nur qaytargich, orqasiga qizil chiroq yoki ikkita nur qaytargich o'rnatiladi (YHQ 170-band).");
Q("bikes", "Ot-aravada qanday moslamalar bo'lishi kerak?",
  ["To'xtatish moslamasi va orqaga tisarilishga qarshi tirgaklar", "Ovozli ishora moslamasi va orqani ko'rsatuvchi ko'zgu", "Spidometr va burilish ko'rsatkichlari", "Faqat orqa qizil nur qaytargich"],
  "Ot-aravalarda to'xtatib turuvchi moslama va orqaga tisarilib ketishga qarshi tirgaklar bo'lishi kerak (YHQ 170-band).");
Q("bikes", "Ko'rinishi cheklangan hovlidan yo'lga chiqayotgan arava haydovchisi:",
  ["Hayvonlarning jilovini qo'yib yubormasligi kerak", "Ovozli ishora berib tez chiqishi kerak", "Aravadan tushmasdan chiqishi kerak", "Yo'ldagi transport unga yo'l berishini kutmasdan chiqishi mumkin"],
  "Ko'rinishi cheklangan joyda yo'lga chiqishda arava haydovchisi hayvon jilovini qo'yib yubormasligi kerak (YHQ 170-band).");
Q("bikes", "Hayvonlarni yo'lda haydab borish qanday tashkil etiladi?",
  ["Asosan sutkaning yorug' vaqtida, imkon qadar yo'l yoqasida", "Asosan tunda, transport oqimi kam bo'lgan vaqtda", "Qatnov qismining o'rtasida", "Qatnov qismining chetki chap bo'lagida, guruh bo'lib"],
  "Hayvonlar asosan kunduzi haydaladi, podachilar ularni imkon qadar yo'l yoqasida olib yuradi (YHQ 171-band).");
Q("bikes", "Podani temir yo'l kesishmasi orqali haydab o'tishda:",
  ["Podachilar soniga qarab to'dalarga bo'linadi", "Butun poda birdaniga, tez va to'xtamasdan o'tkaziladi", "Faqat tunda, poyezdlar kam vaqtda o'tkaziladi", "Poda bo'linmaydi, podachilar orqadan haydab boradi"],
  "Temir yo'l kesishmasidan poda podachilar sonini hisobga olib xavfsiz to'dalarga bo'lib o'tkaziladi (YHQ 172-band).");
Q("bikes", "Hayvonlarni haydab ketayotgan shaxslarga nima taqiqlanadi?",
  ["Boshqa yo'l bo'lsa ham, asfalt yo'lda hayvon haydash", "Hayvonlarni imkon qadar yo'lning yo'l yoqasida olib yurish", "Podani temir yo'ldan to'dalarga bo'lib o'tkazish", "Hayvonlarni kunduzi yo'l yoqasidan haydab borish"],
  "Boshqa yo'llar bo'lsa, hayvonlarni mukammal qoplamali yo'llarda haydab borish taqiqlangan (YHQ 173-band).");
Q("bikes", "Hayvonlarni yo'lda nazoratsiz qoldirish va yo'l yoqasidagi ko'kalamzor joylarda boqish:",
  ["Taqiqlanadi", "Faqat bog'lab qo'yilsa ruxsat etiladi", "Qishloq yo'llarida ruxsat etiladi", "Kunduzi ruxsat etiladi"],
  "Hayvonlarni nazoratsiz qoldirish hamda ko'kalamzorlashtirilgan joylarda boqish va bog'lab qo'yish taqiqlangan (YHQ 173-band).");

// ===================== IDSIGNS (174–186) =====================
Q("idsigns", "Bu taniqlik belgisi nimani bildiradi?",
  ["Staji 2 yildan kam bo'lgan haydovchi", "Kar yoki kar-soqov haydovchi", "Shifokor boshqarayotgan transport", "Xavfli yuk tashiyotgan transport"],
  "Sariq kvadratdagi qora «!» belgisi — haydovchilik staji 2 yildan kam bo'lgan haydovchi (YHQ 176-band).", "id_novice");
Q("idsigns", "Staji 2 yildan kam haydovchini bildiruvchi «!» belgisi transport vositasining qayeriga o'rnatiladi?",
  ["Orqasiga", "Old va orqa tomoniga", "Faqat old oynasiga", "Tomiga"],
  "Bu belgi mexanik transport vositasining orqasiga o'rnatiladi (YHQ 176-band).");
Q("idsigns", "«!» belgisi (staji 2 yildan kam) qaysi transport vositalariga tegishli EMAS?",
  ["Mototsikl va mopedlarga", "Yengil avtomobillarga", "Yuk avtomobillariga", "Mikroavtobuslarga"],
  "Belgi traktorlar, o'ziyurar mashinalar, mototsikl, elektromototsikl, moped va skuterlardan tashqari mexanik transportga tegishli (YHQ 176-band).");
Q("idsigns", "Sariq doira ichida uchta qora doira tasvirlangan bu taniqlik belgisi nimani bildiradi?",
  ["Kar-soqov yoki kar haydovchi", "Ko'zi ojiz piyodalar ko'p hudud", "Nogironligi bo'lgan shaxs", "Bolalar guruhini tashish"],
  "Sariq doira ichidagi uchta qora doira — kar-soqov yoki kar haydovchi boshqarayotgan transport (YHQ 176-band).", "id_deaf");
Q("idsigns", "Ichida «O'» harfi bo'lgan bu uchburchak belgi qaysi transportga o'rnatiladi?",
  ["Boshqarishni o'rgatish transport vositasi", "Shinalari shipli (turumlangan) transport", "Avariya sababli to'xtagan transport vositasi", "Yo'l ishlarini bajarayotgan transport vositasi"],
  "Ichiga qora «O'» harfi tushirilgan qizil hoshiyali oq uchburchak — o'quv transport vositasi (YHQ 176-band).", "id_training");
Q("idsigns", "Ichida «T» harfi bo'lgan bu uchburchak belgi nimani bildiradi?",
  ["Shinalari shipli (turumlangan) transport", "Tirkama tortayotgan transport vositasi", "Boshqarishni o'rgatish transporti", "Tezligi cheklangan transport vositasi"],
  "Ichiga qora «T» harfi tushirilgan qizil hoshiyali oq uchburchak — shipli shinalar belgisi (YHQ 176-band).", "id_studs");
Q("idsigns", "«Avtopoyezd» belgisi chiroqlar ko'rinishida bo'lsa, u qanday bo'ladi?",
  ["Kabina tomida bir qatorda uchta zarg'aldoq chiroq", "Kabina tomining old qismida ikkita sariq chiroq", "Orqa bortda bir qatorda uchta qizil chiroq", "Kabina tomining old qismida uchta oq chiroq"],
  "«Avtopoyezd» — kabina tomida bir qator qilib 150–300 mm oraliqda joylashgan uchta zarg'aldoq chiroq yoki sariq uchburchak (YHQ 176-band).");
Q("idsigns", "Qaysi transport vositasiga «Avtopoyezd» belgisi o'rnatiladi?",
  ["Tirkamali yuk avtomobiliga", "Tirkamali yengil avtomobilga", "Boshqa avtomobilni shatakka olgan yengil avtomobilga", "Yon aravachali mototsiklga"],
  "Belgi tirkamali yuk avtomobillari, 1,4 t va undan yuqori g'ildirakli traktorlar hamda tutashtirilgan avtobus va trolleybuslarga o'rnatiladi (YHQ 176-band).");
Q("idsigns", "«Bolalar guruhini tashish» belgisi qanday ko'rinishda va qayerga o'rnatiladi?",
  ["Qizil hoshiyali sariq kvadrat; old va orqa tomonga", "Qizil hoshiyali oq uchburchak, bolalar timsoli bilan; faqat orqaga", "Sariq doira, bolalar timsoli bilan; faqat oldiga", "Ko'k kvadrat, oq bolalar timsoli bilan; tomiga"],
  "Belgi qizil hoshiyali, 1.21 belgisidagi bolalar timsoli tushirilgan sariq kvadrat bo'lib, avtobusning old va orqasiga o'rnatiladi (YHQ 176-band).");
Q("idsigns", "«Tezlik cheklangan» belgisi transport vositasining qayeriga o'rnatiladi?",
  ["Kuzov orqa devorining chap tomoniga", "Kuzov orqa devorining o'ng tomoniga", "Old va orqa bamperga", "Kabina tomiga"],
  "«Tezlik cheklangan» belgisi — 3.24 belgisining kichraytirilgan tasviri, kuzov orqa devorining chap tomoniga o'rnatiladi (YHQ 176-band).");
Q("idsigns", "Qaysi holatda «Tezlik cheklangan» belgisi o'rnatilishi kerak?",
  ["Bolalar guruhini tashkiliy tashishda", "Staji 2 yildan kam haydovchi boshqarganda", "Shipli shinalar o'rnatilganda", "Shifokor boshqarganda"],
  "Belgi bolalar guruhini tashishda, og'ir vaznli, xavfli va katta o'lchamli yuk tashishda hamda eng yuqori tezligi past transportlarda o'rnatiladi (YHQ 176-band).");
Q("idsigns", "«Xavfli yuk» belgisining o'lchami qancha?",
  ["690x300 mm", "400x400 mm", "1200x200 mm", "200x200 mm"],
  "«Xavfli yuk» belgisi 690x300 mm o'lchamli, zarg'aldoq va oq qismlardan iborat to'rtburchak (YHQ 176-band).");
Q("idsigns", "Bu belgi nimani bildiradi?",
  ["Katta o'lchamli yuk", "Xavfli yuk", "Egiluvchan ulagich", "Uzun o'lchamli transport vositasi"],
  "Diagonal qizil-oq chiziqli, 400x400 mm yorug'lik qaytaradigan kvadrat — «Katta o'lchamli yuk» belgisi (YHQ 176-band).", "id_oversize");
Q("idsigns", "«Uzun o'lchamli transport vositasi» belgisi qaysi transportga o'rnatiladi?",
  ["20 m dan uzun yoki 2+ tirkamali transportga", "Uzunligi 12 m dan oshadigan har qanday transportga", "Bitta tirkamali har qanday yuk avtomobili va avtobusga", "Yuki orqadan 1 m dan ortiq chiqqan transportga"],
  "Belgi yukli yoki yuksiz uzunligi 20 m dan oshadigan transport va ikki yoki undan ortiq tirkamali avtopoyezdlar orqasiga o'rnatiladi (YHQ 176-band).");
Q("idsigns", "«Uzun o'lchamli transport vositasi» belgisini 1200x200 mm o'lchamda joylashtirish imkoni bo'lmasa:",
  ["Ikkita 600x200 mm belgi o'qqa simmetrik o'rnatiladi", "Bitta 600x200 mm belgi o'rtaga o'rnatiladi", "Belgi o'rniga orqa bortga zarg'aldoq mayoqcha yoqiladi", "Ikkita 400x400 mm belgi o'rnatiladi"],
  "Bunday holatda ikkita bir xil 600x200 mm belgini transport o'qiga simmetrik o'rnatishga yo'l qo'yiladi (YHQ 176-band).");
Q("idsigns", "Bu «Shifokor» taniqlik belgisi nimani bildiradi va uni o'rnatish majburiymi?",
  ["Shifokor-haydovchi; ixtiyoriy o'rnatiladi", "Tez tibbiy yordam avtomobili; o'rnatish majburiy", "Tibbiyot xodimlarini tashuvchi transport; majburiy", "Shifokor-haydovchi; harakatda imtiyoz beradi"],
  "«Shifokor» belgisi haydovchining xohishiga ko'ra o'rnatiladi va hech qanday imtiyoz bermaydi (YHQ 176-band).", "id_doctor");
Q("idsigns", "«Nogironligi bo'lgan shaxs» belgisini kim boshqarayotgan transportga o'rnatish mumkin?",
  ["I yoki II guruh nogironi boshqargan yoki nogironlarni tashiyotgan transportga", "Faqat I guruh nogironligi bo'lgan shaxs o'zi boshqarayotgan transportga", "Har qanday guruhdagi nogironligi bo'lgan shaxs, faqat o'zi boshqarsa", "Faqat ijtimoiy xizmat va tez yordam avtomobillariga"],
  "Belgi I yoki II guruh nogironligi bo'lgan haydovchi, shuningdek nogironligi bo'lgan shaxslar yoki bolalarni tashiyotgan transportga o'rnatiladi (YHQ 176-band).");
Q("idsigns", "176-bandda ko'zda tutilmagan boshqa taniqlik belgilarini o'rnatish yoki kuzov va oynalarga turli yozuvlar kiritish:",
  ["Taqiqlanadi (belgilangan tartibdagi reklama mustasno)", "Ruxsat etiladi, agar ko'rinishni cheklamasa", "Faqat orqa oynaga, ko'rinishni cheklamasa ruxsat etiladi", "DYHXXga xabar berilsa ruxsat etiladi"],
  "Qoidada nazarda tutilmagan taniqlik belgilari va yozuvlar taqiqlangan; kuzovga belgilangan tartibdagi reklama yozuvlari bundan mustasno (YHQ 176-band).");
Q("idsigns", "Yuk avtomobili kuzovining orqa devoriga yoziladigan davlat raqami belgisidagi raqam balandligi qanchadan kam bo'lmasligi kerak?",
  ["300 mm", "200 mm", "250 mm", "400 mm"],
  "Raqam balandligi 300 mm, kengligi 120 mm, chizig'i yo'g'onligi 30 mm dan kam bo'lmasligi kerak (YHQ 175-band).");
Q("idsigns", "Qaysi holatda transport vositasidan foydalanish taqiqlanadi?",
  ["Davlat texnik ko'rigidan belgilangan tartibda o'tmagan bo'lsa", "Shipli shinalar o'rnatilgan bo'lsa", "Kuzovda belgilangan tartibdagi reklama yozuvi bo'lsa", "Haydovchining xohishiga ko'ra «Shifokor» belgisi bo'lsa"],
  "Texnik ko'rikdan o'tmagan transport vositasidan foydalanish taqiqlangan (YHQ 179-band).");
Q("idsigns", "DYHXX ruxsatisiz yalt-yalt etuvchi chiroq-mayoqcha yoki maxsus tovushli ishora o'rnatilgan transport vositasidan foydalanish:",
  ["Taqiqlanadi", "Mayoqcha o'chirilgan bo'lsa ruxsat etiladi", "Faqat zarg'aldoq rangli bo'lsa ruxsat etiladi", "Shahar tashqarisida ruxsat etiladi"],
  "Ruxsatsiz mayoqcha yoki maxsus tovushli ishora bilan jihozlangan transportdan foydalanish taqiqlangan (YHQ 179-band).");
Q("idsigns", "Zarg'aldoq yoki sariq miltillovchi chiroq-mayoqcha qaysi transport vositalariga o'rnatiladi?",
  ["Yo'lda ta'mirlash ishlarini bajarayotgan transportga", "Yo'lovchi tashiyotgan shaharlararo avtobuslarga", "Yo'nalishsiz taksi avtomobillarining tomiga", "Bolalar guruhini tashkiliy tashiyotgan avtobuslarga"],
  "Zarg'aldoq yoki sariq mayoqcha yo'l ishlarini bajaruvchi, katta hajmli, og'ir va xavfli yuk tashuvchi va ularni kuzatuvchi transportga o'rnatiladi (YHQ 184-band).");
Q("idsigns", "Yoqilgan zarg'aldoq yoki sariq mayoqcha harakatlanishda imtiyoz beradimi?",
  ["Yo'q, faqat boshqalarni xavf haqida ogohlantiradi", "Ha, ko'k mayoqcha kabi to'liq imtiyoz beradi", "Ha, faqat tartibga solinmagan chorrahalarda", "Ha, maxsus tovushli ishora bilan birga bo'lsa"],
  "Zarg'aldoq yoki sariq mayoqcha imtiyoz bermaydi, u faqat xavf haqida ogohlantiradi (YHQ 28-band).");
Q("idsigns", "Ko'k yoki qizil yalt-yalt etuvchi mayoqchalar qaysi transport vositalariga o'rnatilishi mumkin?",
  ["Tezkor va maxsus xizmatlarning transport vositalariga", "Katta o'lchamli yuk tashiyotgan transportga", "Yo'l ta'mirlash mashinalariga", "Velosipedchilar guruhini kuzatuvchi transportga"],
  "Ko'k yoki qizil mayoqchalar tezkor va maxsus xizmatlar transportining tomiga, xavfsizlik ta'minlansa old yoki orqasiga ham o'rnatiladi (YHQ 185-band).");
Q("idsigns", "Transport vositasining chiroq-mayoqcha va maxsus tovushli ishora bilan jihozlanganligi haqidagi ma'lumot qayerda ko'rsatilishi kerak?",
  ["Ro'yxatdan o'tkazish haqidagi guvohnomada", "Haydovchining haydovchilik guvohnomasida", "Davlat texnik ko'rigi talonida", "Majburiy sug'urta polisida"],
  "Barcha rangdagi mayoqchalar va maxsus tovushli ishoralar haqidagi ma'lumot transportni ro'yxatdan o'tkazish guvohnomasida ko'rsatiladi (YHQ 186-band).");
