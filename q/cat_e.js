// q/cat_e.js — BE, CE, DE toifalari: tirkamalar, avtopoyezdlar, bo'g'imli avtobuslar
// Manba: Yo'l harakati qoidalari (VM 12.04.2022 y. 172-son qarori, o'zgartirishlar bilan).
// Texnika bo'yicha savollar "(Xavfsiz haydash tavsiyalari)" deb belgilangan.

// ===================== Atamalar, toifalar, yosh, hujjatlar =====================
QC(["BE","CE","DE"], "catE", "Qoidalarga ko'ra «avtopoyezd» deganda nima tushuniladi?",
  ["Ulagich bilan ulangan shatakchi va yarim tirkama yoki yuk avtomobili va tirkama(lar)", "Egiluvchan arqon bilan bir-biriga bog'langan ikkita mexanik transport vositasi tarkibi", "Faqat ikki va undan ortiq tirkamasi bo'lgan yuk avtomobilidan iborat tarkib", "Yuk ortilgan har qanday yuk avtomobili va uning almashtiriladigan kuzovi"],
  "Avtopoyezd — ulagich moslamalari bilan ulangan egarli shatakchi va yarim tirkama yoki yuk avtomobili va tirkama(lar)dan iborat tarkib (YHQ 6-band).");
QC(["BE","CE","DE"], "catE", "Qoidalardagi «tirkama» atamasi qaysi transport vositalarini o'z ichiga oladi?",
  ["Dvigatelsiz tirkama, yarim tirkama va uzaytiriladigan tirkamalarni", "Faqat ikki o'qli, dvigatelsiz to'liq tirkamalarni", "Shatakka olingan har qanday nosoz mexanik transport vositasini", "Faqat yuk avtomobili ortidagi egarli yarim tirkamalarni"],
  "Tirkama — mexanik transport vositasi tarkibida harakatlanadigan, dvigatelsiz vosita; atama yarim tirkama va uzaytiriladigan tirkamalarga ham taalluqli (YHQ 6-band).");
QC(["BE","CE","DE"], "catE", "Tirkamali transport vositalari tarkibining ruxsat etilgan to'liq vazni qanday aniqlanadi?",
  ["Tarkibdagi barcha vositalar ruxsat etilgan to'liq vaznlarining yig'indisi", "Faqat shatakchi avtomobilning ruxsat etilgan to'liq vazni hisobga olinadi", "Faqat tirkamaning ruxsat etilgan to'liq vazni olinadi", "Shatakchi va tirkama haqiqiy vaznlarining o'rtacha qiymati"],
  "Bir tarkibda harakatlanayotgan vositalarning ruxsat etilgan to'liq vazniga tarkibdagi har bir vositaning ruxsat etilgan to'liq vazni yig'indisi kiradi (YHQ 6-band).");
QC(["BE","CE","DE"], "catE", "Qoidalarga ko'ra tirkama shatakka olingan mexanik transport vositasidan nimasi bilan farq qiladi?",
  ["Tirkamada dvigatel bo'lmaydi", "Tirkama har doim ikki o'qli bo'ladi", "Tirkamada tormoz tizimi bo'lmaydi", "Tirkamaga davlat raqami o'rnatilmaydi"],
  "Tirkama ta'rifiga ko'ra dvigatel bilan jihozlanmagan va mexanik transport vositasi tarkibida harakatlanishga mo'ljallangan (YHQ 6-band).");
QC(["DE"], "catE", "Bo'g'imli (tutashtirilgan) avtobusni boshqarish uchun qaysi toifa talab etiladi?",
  ["«DE»", "«D»", "«CE»", "«BE»"],
  "«DE» toifasiga tirkamasi 750 kg dan og'ir «D» toifadagi vositalar hamda bo'g'imli avtobuslar kiradi (YHQ 8-band).");
QC(["DE"], "catE", "«D» toifali avtobusga ruxsat etilgan to'liq vazni 1000 kg bo'lgan tirkama ulandi. Qaysi toifa kerak?",
  ["«DE»", "«D»", "«CE»", "«BE»"],
  "Tirkamasining ruxsat etilgan to'liq vazni 750 kg dan ortiq «D» toifadagi vositalar «DE» toifasiga kiradi (YHQ 8-band).");
QC(["DE"], "catE", "«D» toifali avtobus ruxsat etilgan to'liq vazni 600 kg bo'lgan tirkama bilan harakatlanmoqda. Qaysi toifa yetarli?",
  ["«D»", "«DE»", "«BE»", "«CE»"],
  "Tirkamasi 750 kg dan oshmaydigan «D» toifadagi avtotransport vositalari «D» toifasiga kiradi (YHQ 8-band).");
QC(["CE"], "catE", "Egarli shatakchi va ruxsat etilgan to'liq vazni 750 kg dan ortiq yarim tirkamadan iborat avtopoyezd uchun qaysi toifa kerak?",
  ["«CE»", "«C»", "«BE»", "«DE»"],
  "Yarim tirkama ham tirkama hisoblanadi; tirkamasi 750 kg dan ortiq «C» toifadagi vositalar «CE» toifasiga kiradi (YHQ 6, 8-bandlar).");
QC(["BE","CE"], "catE", "«BE» yoki «CE» toifasini olish uchun o'rganuvchi o'quv muddati yakunida necha yoshga to'lgan bo'lishi kerak?",
  ["19 yoshga", "18 yoshga", "20 yoshga", "21 yoshga"],
  "«BE» va «CE» toifalari uchun o'rganuvchi o'quv muddati yakunida 19 yoshga to'lgan bo'lishi kerak (YHQ 149-band).");
QC(["DE"], "catE", "«DE» toifasini olish uchun o'rganuvchi o'quv muddati yakunida necha yoshga to'lgan bo'lishi kerak?",
  ["21 yoshga", "19 yoshga", "18 yoshga", "20 yoshga"],
  "«D» va «DE» toifalari uchun o'rganuvchi o'quv muddati yakunida 21 yoshga to'lgan bo'lishi kerak (YHQ 149-band).");
QC(["BE","CE","DE"], "catE", "Quyidagi toifalardan qaysi biri uchun o'quv yakunidagi eng kam yosh talabi 21 yosh?",
  ["«DE»", "«CE»", "«BE»", "«C»"],
  "21 yosh «D», «DE» toifalari, tramvay va trolleybus uchun; «BE» va «CE» uchun 19 yosh, «C» uchun 18 yosh (YHQ 149-band).");
QC(["BE","CE","DE"], "catE", "Tirkamali transport vositasi haydovchisi IIO xodimi talab qilganda tirkamaga oid qaysi hujjatni ko'rsatishi shart?",
  ["Tirkamani ro'yxatdan o'tkazish haqidagi guvohnomani", "Tirkama ishlab chiqaruvchisining muvofiqlik sertifikatini", "Tirkama uchun alohida texnik ko'rik dalolatnomasini", "Tirkama tortish moslamasining zavod pasportini"],
  "Haydovchi transport vositasini, mavjud bo'lganda tirkamani ro'yxatdan o'tkazish haqidagi guvohnomani yonida olib yurishi shart (YHQ 7-band).");
QC(["BE","CE","DE"], "catE", "Qoidalarning 12-bandiga ko'ra avtopoyezd tarkibida qaysi qism nosoz bo'lsa, uni boshqarish taqiqlanadi?",
  ["Ulagich moslamasi", "Salon yoritgichi", "Yonilg'i darajasi ko'rsatkichi", "Kabina konditsioneri"],
  "Tormoz tizimi, rul boshqaruvi ishlamayotgan yoki ulagich moslamasi (avtopoyezd tarkibida) nosoz transport vositasini boshqarish taqiqlanadi (YHQ 12-band).");

// ===================== Tezlik =====================
QC(["BE"], "catE", "Aholi punktidan tashqarida tirkamali yengil avtomobil uchun eng yuqori ruxsat etilgan tezlik qancha?",
  ["80 km/soat", "90 km/soat", "100 km/soat", "70 km/soat"],
  "Aholi punktlaridan tashqarida tirkamali yengil avtomobillarga 80 km/soatdan oshirmasdan harakatlanish ruxsat etiladi (YHQ 79-band).");
QC(["CE"], "catE", "Aholi punktidan tashqarida tirkamali yuk avtomobili uchun eng yuqori ruxsat etilgan tezlik qancha?",
  ["70 km/soat", "80 km/soat", "90 km/soat", "60 km/soat"],
  "Aholi punktlaridan tashqarida tirkamali yuk avtomobillariga 70 km/soatdan oshirmasdan harakatlanish ruxsat etiladi (YHQ 79-band).");
QC(["CE"], "catE", "Ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobili tirkamasini ajratib, yakka holda aholi punktidan tashqarida ketmoqda. Eng yuqori tezlik qancha?",
  ["80 km/soat", "70 km/soat", "90 km/soat", "100 km/soat"],
  "Tirkamasiz, ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobiliga aholi punktidan tashqarida 80 km/soat ruxsat etiladi; 70 km/soat tirkamali yuk avtomobillari uchun (YHQ 79-band).");
QC(["BE"], "catE", "Ruxsat etilgan to'liq vazni 3,5 t gacha bo'lgan yuk avtomobili tirkama bilan aholi punktidan tashqarida ketmoqda. Eng yuqori tezlik qancha?",
  ["70 km/soat", "80 km/soat", "90 km/soat", "100 km/soat"],
  "79-band vazndan qat'i nazar barcha tirkamali yuk avtomobillari uchun aholi punktidan tashqarida 70 km/soat chegarasini belgilaydi (YHQ 79-band).");
QC(["BE","CE","DE"], "catE", "Toshkent shahrida tirkamali transport vositasi uchun (boshqa belgilar bo'lmaganda) eng yuqori tezlik qancha?",
  ["60 km/soat", "70 km/soat", "50 km/soat", "80 km/soat"],
  "Nukus va Toshkent shaharlarida, viloyat va tuman markazlarida hamda shaharlar hududida 60 km/soatdan oshirmasdan harakatlanish ruxsat etiladi (YHQ 78-band).");
QC(["BE","CE","DE"], "catE", "Shahar yoki tuman markazi bo'lmagan qishloq aholi punktida (boshqa belgilar yo'q) avtopoyezd uchun eng yuqori tezlik qancha?",
  ["70 km/soat", "60 km/soat", "50 km/soat", "80 km/soat"],
  "Aholi punktlarida umumiy chegara 70 km/soat; 60 km/soat faqat Nukus, Toshkent, viloyat va tuman markazlari hamda shaharlarda amal qiladi (YHQ 78-band).");
QC(["DE"], "catE", "Shaharlararo qatnamaydigan bo'g'imli shahar avtobusi aholi punktidan tashqarida qanday eng yuqori tezlikda harakatlanishi mumkin?",
  ["80 km/soat", "90 km/soat", "70 km/soat", "100 km/soat"],
  "Shaharlararo qatnaydigan avtobuslarga 90 km/soat, boshqa avtobuslarga esa aholi punktidan tashqarida 80 km/soat ruxsat etiladi (YHQ 79-band).");
QC(["BE","CE","DE"], "catE", "Avtopoyezdning texnik tavsifnomasidagi eng yuqori tezlik 60 km/soat, yo'lda esa 70 km/soat ruxsat etilgan. Haydovchi qanday harakatlanadi?",
  ["60 km/soatdan oshirmasdan", "70 km/soatdan oshirmasdan", "65 km/soatdan oshirmasdan", "Yo'lda ruxsat etilgan 70 km/soatdan 10% ortiq"],
  "Tezlikni transport vositasining texnik tavsifnomasida ko'rsatilgan eng yuqori tezlikdan oshirish taqiqlanadi (YHQ 81-band).");
QC(["BE","CE","DE"], "catE", "Texnik tavsifnomadagi eng yuqori tezligi Qoidalardagi chegaradan kam bo'lgan avtopoyezdga qaysi taniqlik belgisi o'rnatiladi?",
  ["«Tezlik cheklangan»", "«Avtopoyezd»", "«Uzun o'lchamli transport vositasi»", "«Katta o'lchamli yuk»"],
  "Texnik tavsifnomadagi eng yuqori tezligi 78–80-bandlardagi tezlikdan kam vositalarga «Tezlik cheklangan» belgisi o'rnatiladi (YHQ 176-band).");
QC(["BE","CE","DE"], "catE", "«Tezlik cheklangan» taniqlik belgisi transport vositasining qayeriga o'rnatiladi?",
  ["Kuzov orqa devorining chap tomoniga", "Kabina tomining old qismi o'rtasiga", "Kuzov orqa devorining o'ng tomoniga", "Old bamperning chap tomoniga"],
  "«Tezlik cheklangan» belgisi mexanik transport vositalari kuzovi orqa devorining chap tomoniga o'rnatiladi (YHQ 176-band).");
QC(["BE","CE","DE"], "catE", "Katta o'lchamli yuk tashiyotgan avtopoyezd uchun tezlik qanday belgilanadi?",
  ["DYHXX bilan kelishilgan tezlikdan oshirmasdan", "Har qanday yo'lda 60 km/soatdan oshirmasdan", "Belgidagi tezlikdan 10 km/soat kam qilib", "Aholi punktidan tashqarida 70 km/soatgacha"],
  "Xavfli, og'ir vaznli va katta o'lchamli yuk tashiyotgan vositalarga DYHXX bilan kelishilgan tezlikdan oshirmasdan harakatlanish ruxsat etiladi (YHQ 80-band).");

// ===================== «Avtopoyezd» taniqlik belgisi =====================
QC(["CE","DE"], "catE", "«Avtopoyezd» belgisi chiroqlar ko'rinishida bo'lsa, chiroqlar orasidagi masofa qancha bo'ladi?",
  ["150 dan 300 mm gacha", "50 dan 100 mm gacha", "300 dan 500 mm gacha", "100 dan 150 mm gacha"],
  "Uchta zarg'aldoq chiroq kabina tomi old qismida bir qator qilib 150–300 mm oraliqda ko'ndalang joylashtiriladi (YHQ 176-band).");
QC(["CE","DE"], "catE", "«Avtopoyezd» belgisi uchburchak ko'rinishida bo'lsa, uning har bir tomoni qancha bo'ladi?",
  ["250 mm", "200 mm", "300 mm", "400 mm"],
  "Belgi ichidan yoritiladigan, tomonlari 250 mm bo'lgan sariq uchburchak ko'rinishida bo'lishi mumkin (YHQ 176-band).");
QC(["CE","DE"], "catE", "«Avtopoyezd» taniqlik belgisi transport vositasining qayeriga o'rnatiladi?",
  ["Kabina tomining old qismi o'rtasiga", "Tirkama orqa bortining o'rtasiga", "Old bamperning o'ng tomoniga", "Kabina eshiklarining ikkala tomoniga"],
  "«Avtopoyezd» belgisi kabina tomining old qismi o'rtasiga o'rnatiladi (YHQ 176-band).");
QC(["DE"], "catE", "Qaysi avtobusga «Avtopoyezd» taniqlik belgisi o'rnatiladi?",
  ["Tutashtirilgan (bo'g'imli) avtobusga", "Shaharlararo qatnovchi avtobusga", "Bolalar guruhini tashiyotgan avtobusga", "O'rindiqlari 30 tadan ortiq avtobusga"],
  "«Avtopoyezd» belgisi tirkamali yuk avtomobillari va g'ildirakli traktorlarga, shuningdek tutashtirilgan avtobus va trolleybuslarga o'rnatiladi (YHQ 176-band).");
QC(["BE"], "catE", "Yengil avtomobilga tirkama ulanganda «Avtopoyezd» taniqlik belgisini o'rnatish talab qilinadimi?",
  ["Yo'q, bu talab yengil avtomobilga tegishli emas", "Ha, tirkamaning vaznidan qat'i nazar", "Ha, tirkamasi 750 kg dan og'ir bo'lsa", "Ha, sutkaning qorong'i vaqtida harakatlanayotgan bo'lsa"],
  "176-band «Avtopoyezd» belgisini tirkamali yuk avtomobillari, 1,4 t va undan yuqori g'ildirakli traktorlar hamda tutashtirilgan avtobus va trolleybuslar uchun belgilaydi (YHQ 176-band).");
QC(["CE","DE"], "catE", "Avtopoyezd kunduzi, yaxshi ko'rinishda yo'l chetida to'xtab turibdi. «Avtopoyezd» belgisini yoqib qo'yish shartmi?",
  ["Yo'q, bu holatda shart emas", "Ha, har qanday to'xtashda", "Ha, dvigatel ishlab tursa", "Ha, aholi punktidan tashqarida"],
  "Belgi harakatlanayotganda, to'xtash va to'xtab turishda esa faqat sutkaning qorong'i vaqtida va yetarlicha ko'rinmaydigan sharoitda yoqiladi (YHQ 141-band).");
QC(["CE","DE"], "catE", "Tunda avtopoyezd yo'lda to'xtab turgan bo'lsa, «Avtopoyezd» belgisi bilan nima qilinadi?",
  ["Yoqib qo'yilgan bo'lishi kerak", "O'chirib qo'yilishi kerak", "Faqat dvigatel ishlaganda yoqiladi", "Avariya ishorasi bilan almashtiriladi"],
  "«Avtopoyezd» belgisi sutkaning qorong'i vaqtida va yetarlicha ko'rinmaydigan sharoitda to'xtash va to'xtab turishda ham yoqib qo'yilishi kerak (YHQ 141-band).");

// ===================== «Uzun o'lchamli transport vositasi», gabaritlar =====================
QC(["CE"], "catE", "«Uzun o'lchamli transport vositasi» belgisi uzunligidan qat'i nazar qaysi avtopoyezdga o'rnatiladi?",
  ["Ikki yoki undan ko'p tirkamali avtopoyezdga", "Faqat yarim tirkamali avtopoyezdga", "Ruxsat etilgan to'liq vazni 20 t dan oshganga", "Xavfli yuk tashiyotgan har qanday avtopoyezdga"],
  "Belgi yukli va yuksiz uzunligi 20 m dan oshadigan vositalar hamda ikki yoki undan ko'p tirkamali avtopoyezdlar orqasiga o'rnatiladi (YHQ 176-band).");
QC(["BE","CE","DE"], "catE", "Uzunligi qanchadan oshgan transport vositasining orqasiga «Uzun o'lchamli transport vositasi» belgisi o'rnatiladi?",
  ["20 m dan", "12 m dan", "15 m dan", "24 m dan"],
  "Belgi yukli va yuksiz uzunligi 20 metrdan oshadigan transport vositalarining orqasiga o'rnatiladi (YHQ 176-band).");
QC(["BE","CE","DE"], "catE", "«Uzun o'lchamli transport vositasi» belgisining o'lchami va ko'rinishi qanday?",
  ["1200x200 mm, qizil hoshiyali sariq nur qaytaruvchi", "400x400 mm, qizil-oq yo'l-yo'l nur qaytaruvchi", "690x300 mm, zarg'aldoq rangli to'rtburchak", "Tomonlari 250 mm bo'lgan sariq uchburchak"],
  "Belgi o'lchami 1200x200 mm, kengligi 40 mm qizil hoshiyali, sariq rangli nur qaytaruvchi to'rtburchak (YHQ 176-band).");
QC(["BE","CE","DE"], "catE", "1200x200 mm o'lchamdagi «Uzun o'lchamli transport vositasi» belgisini joylashtirib bo'lmasa, nima qilinadi?",
  ["Ikkita 600x200 mm belgi o'qqa simmetrik o'rnatiladi", "Bitta 600x200 mm belgi chap tomonga o'rnatiladi", "Belgi o'rniga qizil bayroqcha o'rnatiladi", "Belgi kabina tomining old qismiga ko'chiriladi"],
  "Bunday holda bir xil ikkita 600x200 mm belgini transport vositasining o'qiga simmetrik o'rnatishga yo'l qo'yiladi (YHQ 176-band).");
QC(["CE"], "catE", "Uzunligi 22 m bo'lgan tirkamali avtopoyezdda yuk tashish rejalashtirilgan. Qaysi talab bajarilishi shart?",
  ["Harakat DYHXX bilan kelishilishi shart", "«Avtopoyezd» belgisini yoqish yetarli", "Faqat «Tezlik cheklangan» belgisi bilan yurish kerak", "Faqat kuzatuvchi avtomobil bilan yurish kerak"],
  "Yarim tirkamali va tirkamali avtopoyezd uzunligi 20 m dan ortiq bo'lsa, uning harakatlanishi DYHXX bilan kelishilishi shart (YHQ 164-band).");
QC(["CE"], "catE", "Refrijerator yarim tirkamali avtopoyezd eni qanchadan oshsa, harakat DYHXX bilan kelishiladi?",
  ["2,6 m dan", "2,55 m dan", "2,5 m dan", "3,0 m dan"],
  "Eni bo'yicha chegara 2,55 m, refrijeratorlar va izotermik kuzovlar uchun esa 2,6 m (YHQ 164-band).");
QC(["BE","CE","DE"], "catE", "Avtopoyezdning yuk bilan balandligi yo'l sathidan qanchadan oshsa, harakat DYHXX bilan kelishiladi?",
  ["4 m dan", "3,8 m dan", "4,5 m dan", "4,2 m dan"],
  "Balandligi yo'l sathidan 4 metrdan ortiq bo'lgan vositalarning harakatlanishi DYHXX bilan kelishilishi shart (YHQ 164-band).");
QC(["BE","CE","DE"], "catE", "Tirkamadagi yuk gabaritdan orqaga 1,5 m chiqib turibdi. Uni qanday belgilash kerak?",
  ["«Katta o'lchamli yuk» belgisi, tunda qizil chiroq yoki nur qaytargich", "Qizil bayroqcha bilan, sutkaning qorong'i vaqtida esa oq chiroq bilan", "«Uzun o'lchamli transport vositasi» belgisi bilan", "Belgilash shart emas, 2 m gacha ruxsat etiladi"],
  "Oldi yoki orqaga 1 m dan ortiq chiqqan yuk «Katta o'lchamli yuk» belgisi bilan, qorong'ida esa orqasi qizil chiroq yoki nur qaytargich bilan belgilanadi (YHQ 163-band).");
QC(["BE","CE","DE"], "catE", "Tirkamadagi yuk yon tomonga gabaritning chetidan qanchadan ortiq chiqsa, «Katta o'lchamli yuk» belgisi talab qilinadi?",
  ["0,4 m dan", "0,5 m dan", "0,2 m dan", "1,0 m dan"],
  "Yon tomonga gabaritning chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk «Katta o'lchamli yuk» belgisi bilan belgilanadi (YHQ 163-band).");

// ===================== Yo'l belgilari =====================
QC(["BE"], "catE", "3.7 «Tirkama bilan harakatlanish taqiqlangan» belgisi tirkamali yengil avtomobilga taalluqlimi?",
  ["Yo'q, u yuk avtomobili va traktorlarga taalluqli", "Ha, barcha tirkamali vositalarga taalluqli", "Ha, tirkama 750 kg dan og'ir bo'lsa", "Ha, aholi punktidan tashqarida taalluqli"],
  "3.7 belgisi yuk avtomobillari va traktorlarning barcha turdagi tirkamalar bilan harakatlanishini hamda shatakka olishni taqiqlaydi (YHQ 1-ilova, 3.7).");
QC(["CE"], "catE", "3.7 belgisi ta'sir hududida tirkamasiz yuk avtomobili nosoz avtomobilni shatakka olishi mumkinmi?",
  ["Yo'q, belgi shatakka olishni ham taqiqlaydi", "Ha, tirkama ulanmagani uchun belgi unga taalluqli emas", "Ha, egiluvchan ulagich bilan mumkin", "Ha, qisman ortish usulida mumkin"],
  "3.7 belgisi tirkama bilan harakatlanishdan tashqari mexanik transport vositalarini shatakka olishni ham taqiqlaydi (YHQ 1-ilova, 3.7).");
QC(["BE","CE","DE"], "catE", "3.15 «Cheklangan uzunlik» belgisida 16 m ko'rsatilgan. Uzunligi 18 m bo'lgan avtopoyezd bu yo'lga kira oladimi?",
  ["Yo'q, tarkib uzunligi hisobga olinadi", "Ha, belgi yakka vositaga taalluqli", "Ha, tirkama yuksiz bo'lsa", "Ha, avariya ishorasini yoqib"],
  "3.15 belgisi gabarit uzunligi belgida ko'rsatilganidan ortiq transport vositalari, shu jumladan tarkiblarining harakatini taqiqlaydi (YHQ 1-ilova, 3.15).");
QC(["BE","CE","DE"], "catE", "3.11 «Vazn cheklangan» belgisida 10 t. Shatakchining haqiqiy vazni 6 t, tirkamaniki 5 t. Harakatlanish mumkinmi?",
  ["Yo'q, tarkibning haqiqiy vazni 11 t", "Ha, har biri 10 t dan yengil", "Ha, faqat shatakchi hisobga olinadi", "Ha, past tezlikda harakatlansa"],
  "3.11 belgisi haqiqiy umumiy vazni belgidagidan ortiq transport vositalari va ularning tarkiblari harakatini taqiqlaydi (YHQ 1-ilova, 3.11).");
QC(["CE"], "catE", "3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan» belgisida vazn ko'rsatilmagan. Ruxsat etilgan to'liq vazni 12 t avtopoyezd kira oladimi?",
  ["Yo'q, 3,5 t dan ortiq tarkiblarga taqiqlangan", "Ha, belgi faqat yakka yuk avtomobiliga taalluqli", "Ha, tirkama yuksiz bo'lsa", "Ha, yuk ortish uchun kirsa"],
  "Vazn ko'rsatilmagan 3.4 belgisi ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobillari va transport vositalari tarkiblari harakatini taqiqlaydi (YHQ 1-ilova, 3.4).");
QC(["CE"], "catE", "3.22 «Yuk avtomobillarida quvib o'tish taqiqlangan» belgisi hududida tirkamali yuk avtomobili qaysi vositani quvib o'tishi mumkin?",
  ["40 km/soatdan sekin harakatlanayotgan vositani", "Faqat yengil avtomobillarni, tezligidan qat'i nazar", "Faqat boshqa yuk avtomobilini", "Faqat mototsiklni"],
  "3.22 belgisi to'liq vazni 3,5 t dan ortiq yuk avtomobillariga quvib o'tishni taqiqlaydi; 40 km/soatdan sekin vosita, traktor, ot-arava, velosiped bundan mustasno (YHQ 1-ilova, 3.22).");

// ===================== Harakatlanish, burilish, to'xtash =====================
QC(["BE","CE","DE"], "catE", "74-band talabi (quvib o'tuvchilar uchun masofa qoldirish) qanday uzunlikdagi transport vositalari tarkibiga taalluqli?",
  ["7 m dan ortiq", "12 m dan ortiq", "20 m dan ortiq", "10 m dan ortiq"],
  "Talab tezligini 50 km/soatdan oshira olmaydigan, shuningdek, uzunligi 7 m dan ortiq vositalar (tarkiblar) haydovchilariga taalluqli (YHQ 74-band).");
QC(["BE"], "catE", "Uzunligi 9 m bo'lgan tirkamali yengil avtomobil aholi punktidan tashqaridagi ikki tasmali ikki tomonlama yo'lda ketmoqda. 74-bandga ko'ra u nima qilishi kerak?",
  ["Quvib o'tuvchilar uchun oldinda yetarli masofa qoldirishi", "O'ng yo'l yoqasidan harakatlanishi kerak", "Avariya ishorasini yoqib harakatlanishi kerak", "Tezlikni 50 km/soatgacha kamaytirib, o'ngroqda yurishi"],
  "Uzunligi 7 m dan ortiq tarkib haydovchisi oldidagi vosita bilan quvib o'tuvchilar bemalol qayta tizila oladigan masofani saqlashi kerak (YHQ 74-band).");
QC(["BE","CE","DE"], "catE", "Avtopoyezd transport vositalarining tashkiliy jamlanmasi tarkibida ketmoqda. 74-banddagi masofa qoldirish talabiga amal qilish shartmi?",
  ["Yo'q, tashkiliy jamlanmada amal qilinmaydi", "Ha, har qanday sharoitda amal qilinadi", "Ha, jamlanma boshida ketayotgan bo'lsa", "Ha, tezlik 50 km/soatdan oshsa"],
  "Quvib o'tish taqiqlangan yo'llarda, tashkiliy jamlanma tarkibida va serqatnov yo'llarda bu talabga amal qilinmaydi (YHQ 74-band).");
QC(["CE","DE"], "catE", "Uzun avtopoyezd gabariti tufayli chetki o'ng holatdan o'ngga burila olmaydi. Qoidalar nimaga yo'l qo'yadi?",
  ["Xavfsizlikni ta'minlab, xalaqit bermasdan chetga chiqishga", "Qarama-qarshi tasmaga chiqib, avariya ishorasi bilan burilishga", "Faqat tartibga soluvchining ruxsati bilan, ishora berib burilishga", "Trotuar ustidan o'tib, burilishni qisqartirishga"],
  "Gabaritlari sababli 56-band bo'yicha burila olmaydigan vosita xavfsizlikni ta'minlab, boshqalarga xalaqit bermasdan talablardan chetga chiqishi mumkin (YHQ 58-band).");
QC(["BE","CE","DE"], "catE", "58-banddagi burilishda chetki holatdan chetga chiqish imkoniyati qaysi sababga ko'ra qo'llanilmaydi?",
  ["Eng chekka tasmalardagi tirbandlik sababli", "Transport vositasining gabaritlari sababli", "Tirkamaning katta uzunligi sababli", "Burilish radiusining kichikligi sababli"],
  "58-band gabaritlar yoki boshqa sabablar bilan chetga chiqishga yo'l qo'yadi, ammo eng chekka tasmalardagi tirbandliklar bundan mustasno (YHQ 58-band).");
QC(["BE","CE","DE"], "catE", "Avtopoyezd chorrahada burilib, qatnov qismlari kesishmasidan chiqayotganda nimaga yo'l qo'ymasligi kerak?",
  ["Qarama-qarshi yo'nalish tomoniga o'tib ketishga", "Chiqishda chetki o'ng tasmani egallashga", "Burilishdan oldin tezlikni kamaytirishga", "Burilish ishorasini oldindan yoqishga"],
  "Burilishda kesishmadan chiqayotgan vosita qarama-qarshi yo'nalishdagi harakatlanish tomoniga o'tib ketmasligi kerak (YHQ 57-band).");
QC(["CE"], "catE", "Bir yo'nalishda uch tasmali yo'lda tirkamali yuk avtomobili chetki chap tasmani qachon egallashi mumkin?",
  ["Faqat chapga burilish yoki qayrilib olish uchun", "Sekin vositani quvib o'tish uchun", "O'ng tasmalar band bo'lgan har qanday holda, ishora berib", "Aholi punktida har doim"],
  "Uch va undan ortiq tasmali yo'lda yuk avtomobillariga chetki chap qatorni faqat chapga burilish yoki qayrilib olish uchun egallashga ruxsat etiladi (YHQ 67-band).");
QC(["BE","CE","DE"], "catE", "Avtomagistralda kerakli chiqishni o'tkazib yuborgan avtopoyezd haydovchisiga nima taqiqlanadi?",
  ["Orqaga harakatlanish", "Keyingi chiqishgacha davom etish", "O'ng tasmada harakatni davom ettirish", "Tezlikni kamaytirib qayta tizilish"],
  "Avtomagistrallarda orqaga harakatlanish taqiqlanadi (YHQ 121-band).");
QC(["BE","CE","DE"], "catE", "Tirkamali avtomobilni orqaga harakatlantirishda orqa tomon yaxshi ko'rinmasa haydovchi nima qilishi kerak?",
  ["Zarurat bo'lsa, boshqa shaxs yordamidan foydalanishi", "Avariya ishorasini yoqib, to'xtovsiz harakatlanishi", "Tirkamani ajratib, uni qo'lda surishi", "Tezlikni oshirib, manyovrni tez tugatishi"],
  "Orqaga harakatlanishda haydovchi xavfsizlikni ta'minlashi, zarurat tug'ilganda esa boshqa shaxslar yordamidan foydalanishi kerak (YHQ 63-band).");
QC(["BE","CE","DE"], "catE", "Quyidagi joylardan qaysi birida avtopoyezdni orqaga harakatlantirish taqiqlanadi?",
  ["Chorrahada", "Yuk ortish maydonchasida", "Yoqilg'i quyish shoxobchasida", "Avtoturargoh hududida"],
  "Orqaga harakatlanish chorrahalarda va 62-bandga ko'ra qayrilib olish taqiqlangan joylarda taqiqlanadi (YHQ 63-band).");
QC(["BE","CE","DE"], "catE", "Yo'lning ko'rinishi bir yo'nalishda 80 m bo'lgan joyda avtopoyezdni orqaga harakatlantirish mumkinmi?",
  ["Yo'q, ko'rinish 100 m dan kam joyda taqiqlanadi", "Ha, yordamchi shaxs bo'lsa mumkin", "Ha, avariya ishorasi yoqilsa mumkin", "Ha, aholi punktidan tashqarida mumkin"],
  "Ko'rinishi biror yo'nalishda 100 m dan kam joylarda qayrilib olish taqiqlangan, bunday joylarda orqaga harakatlanish ham taqiqlanadi (YHQ 62, 63-bandlar).");
QC(["BE","CE","DE"], "catE", "Avtopoyezd haydovchisi o'z joyini tark etishdan oldin nimani ta'minlashi kerak?",
  ["O'z-o'zidan harakatlanib ketmasligini", "Faqat tirkamani shatakchidan ajratishni", "Faqat avariya ishorasini yoqib qo'yishni", "Faqat kabina eshiklarini qulflashni"],
  "Haydovchi vositaning o'z-o'zidan harakatlanib ketishini yoki undan begonalar foydalanishini istisno qiluvchi choralarni ko'rgandan keyingina joyini tark etishi mumkin (YHQ 95-band).");

// ===================== Shatakka olish =====================
QC(["BE","CE","DE"], "catE", "Bitta yuk avtomobili bir vaqtda ikkita nosoz avtomobilni shatakka olmoqchi. Qoidalar bunga yo'l qo'yadimi?",
  ["Yo'q, bu taqiqlanadi", "Ha, qattiq ulagich ishlatilsa", "Ha, tezlik 50 km/soatdan oshmasa", "Ha, umumiy uzunlik 20 m gacha bo'lsa"],
  "Ikki va undan ko'p transport vositasini shatakka olish taqiqlanadi (YHQ 145-band).");
QC(["CE"], "catE", "Uzunligi 12 m yuk avtomobili 7 m avtobusni 4 m qattiq ulagich bilan shatakka olmoqchi. Bu mumkinmi?",
  ["Yo'q, umumiy uzunlik 20 m dan oshadi", "Ha, qattiq ulagich 4 m dan oshmagan", "Ha, aholi punktidan tashqarida mumkin", "Ha, «Avtopoyezd» belgisi yoqilsa"],
  "12 + 4 + 7 = 23 m; ulagich bilan birga umumiy uzunlik 20 m dan ortiq bo'lsa, shatakka olish taqiqlanadi (YHQ 145-band).");
QC(["DE"], "catE", "Qattiq ulagich bilan shatakka olinayotgan avtobusda yo'lovchilarni tashish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, o'tirgan joylar soni doirasida", "Ha, tezlik 50 km/soatdan oshmasa", "Ha, aholi punktidan tashqarida"],
  "Qattiq yoki egiluvchan ulagich bilan shatakka olingan avtobusda odam tashish taqiqlanadi (YHQ 143-band).");

// ===================== Odam va yuk tashish =====================
QC(["BE","CE","DE"], "catE", "Yuk tashiladigan tirkamada odam tashish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, bort balandligi 1,3 m bo'lsa", "Ha, 8 kishidan oshmasa", "Ha, tezlik 60 km/soatdan oshmasa"],
  "Yuk tashiladigan tirkamalarning yukxonasida odam tashish taqiqlanadi (YHQ 159-band).");
QC(["BE"], "catE", "Harakat vaqtida tirkama-uychada (yashash tirkamasida) odam bo'lishi mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, faqat kattalar bo'lsa", "Ha, xavfsizlik kamari taqilsa", "Ha, aholi punktida harakatlansa"],
  "159-band tirkama-uychada odam tashishni taqiqlaydi (YHQ 159-band).");
QC(["BE","CE","DE"], "catE", "Tirkamaga yuk ortishda o'qlarga tushadigan og'irlik qanday bo'lishi kerak?",
  ["Qonunchilik va ishlab chiqaruvchi me'yoridan oshmasligi", "Faqat tarkibning umumiy vazni chegaradan oshmasligi kifoya", "Asosiy og'irlik tirkamaning orqa o'qiga tushishi", "Og'irlik faqat shatakchining o'qlariga tushishi"],
  "Yuk vazni va o'qlarga tushadigan og'irlik taqsimoti qonunchilik va ishlab chiqaruvchi belgilagan miqdordan oshmasligi kerak (YHQ 160-band).");
QC(["BE","CE","DE"], "catE", "Harakat vaqtida tirkamadagi yuk siljiganini sezgan haydovchi nima qilishi kerak?",
  ["Bartaraf etishi, iloji bo'lmasa, to'xtashi", "Keyingi rejali to'xtash joyigacha davom etishi", "Faqat tezlikni 10 km/soatga kamaytirishi", "Avariya ishorasini yoqib, yo'lini davom ettirishi"],
  "Haydovchi yuk holatini kuzatib borishi, talablar buzilsa bartaraf etish choralarini ko'rishi, iloji bo'lmasa, harakatni to'xtatishi shart (YHQ 161, 162-bandlar).");
QC(["CE"], "catE", "O3, O4 toifali bortli tirkamada sochiluvchan yuk tashishda tent bortni har tomondan kamida qancha yopishi kerak?",
  ["200±50 mm", "100±20 mm", "300±50 mm", "50±10 mm"],
  "Tent bortni har tomondan 200±50 mm dan kam bo'lmagan holda yopishi va mahkamlovchi moslamalar bilan qotirilishi lozim (YHQ 162-band).");
QC(["BE"], "catE", "Qaysi tirkamaning kuzov orqa devoriga davlat raqami yozilishi talab qilinmaydi?",
  ["Yengil avtomobil tirkamasining", "Egarli yarim tirkamaning", "O4 toifali tirkamaning", "Bortli yuk tirkamasining"],
  "Orqa devorga raqam yozish talabi yuk avtomobillari, tirkamalar (yengil avtomobillar tirkamalaridan tashqari) va avtobuslarga taalluqli (YHQ 175-band).");
QC(["BE","CE","DE"], "catE", "Kunduzi yoritilgan tunnelda harakatlanayotgan tirkamada qaysi chiroqlar yoqilgan bo'lishi kerak?",
  ["Gabarit chiroqlari", "Tumanga qarshi orqa chiroq", "Avariya yorug'lik ishorasi", "Orqaga harakatlanish chirog'i"],
  "Tunnellarda yoritilganlikdan qat'i nazar tirkamalarda gabarit chiroqlari yoqilgan bo'lishi kerak (YHQ 134-band).");

// ===================== Texnik holat (3-ilova) =====================
QC(["BE","CE","DE"], "catE", "Tirkamaning tortish-tirkash moslamasi soz, ammo konstruksiyada ko'zda tutilgan ehtiyot po'lat arqon (zanjir) yo'q. Foydalanish mumkinmi?",
  ["Yo'q, foydalanish taqiqlanadi", "Ha, ulagich soz bo'lsa", "Ha, aholi punkti ichida", "Ha, tirkama yuksiz bo'lsa"],
  "Konstruksiyada ko'zda tutilgan ehtiyot po'lat arqon (zanjir) yo'q yoki nosoz bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.9).");
QC(["BE","CE","DE"], "catE", "Tirkama bo'g'imining tayanch-tirkash moslamasi nosoz. Qoidalarga ko'ra nima bo'ladi?",
  ["Avtopoyezddan foydalanish taqiqlanadi", "Tezlikni 50 km/soatgacha kamaytirib yurish mumkin", "Ehtiyot zanjir bo'lsa, yurish mumkin", "Faqat yuksiz holda yurish mumkin"],
  "Tirkama bo'g'imining tortish-tirkash yoki tayanch-tirkash moslamasi nosoz bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.9).");
QC(["CE"], "catE", "Yarim tirkamadagi qaysi nosozlikda undan foydalanish taqiqlanadi?",
  ["Tayanchlarni qulflovchi moslama nosoz", "Tentda quyoshdan kichik rang o'zgarishi bor", "Bortda reklama yozuvlari bor", "Ehtiyot g'ildirak tozalanmagan"],
  "Yarim tirkamada tayanch moslamasi, tayanchlarni transport holatida qulflovchi yoki ko'tarib-tushiruvchi moslama yo'q yoki nosoz bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.16).");
QC(["CE"], "catE", "O4 toifali tirkama shinasi protektorining qoldiq balandligi 0,8 mm. Foydalanish mumkinmi?",
  ["Yo'q, me'yor kamida 1,0 mm", "Ha, me'yor kamida 0,8 mm", "Ha, me'yor kamida 0,5 mm", "Yo'q, me'yor kamida 2,0 mm"],
  "N2, N3, O3, O4 toifalari uchun protektor qoldiq balandligi 1,0 mm dan kam bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.1).");
QC(["BE"], "catE", "O2 toifali tirkama shinasi protektorining qoldiq balandligi kamida qancha bo'lishi kerak?",
  ["1,6 mm", "1,0 mm", "2,0 mm", "0,8 mm"],
  "M1, N1, O1, O2 toifalari uchun protektor qoldiq balandligi 1,6 mm dan kam bo'lmasligi kerak (YHQ 3-ilova, 5.1).");
QC(["BE"], "catE", "Texnik tasnifga ko'ra O2 toifasiga qanday tirkamalar kiradi?",
  ["Eng katta vazni 0,75 t dan ortiq, 3,5 t gacha", "Eng katta vazni 0,75 t gacha", "Eng katta vazni 3,5 t dan ortiq, lekin 10 t gacha", "Eng katta vazni 10 t dan ortiq"],
  "O2 — eng katta vazni 0,75 t dan ortiq, lekin 3,5 t dan oshmaydigan tirkamalar (YHQ 3-ilova).");
QC(["BE","CE","DE"], "catE", "Tirkamaning bitta o'qiga radial va diagonal shinalar o'rnatilgan. Foydalanish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, o'lchami bir xil bo'lsa", "Ha, tirkama yuksiz bo'lsa", "Ha, protektor naqshi bir xil bo'lsa"],
  "Bitta o'qqa har xil konstruksiyali (diagonal va radial) shinalar o'rnatilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.5).");
QC(["CE"], "catE", "Tirkamaning qo'shaloq shinalari orasiga xavf tug'diruvchi tosh qisilib qolgan. Qoidalarga ko'ra?",
  ["Bartaraf etilmaguncha foydalanish taqiqlanadi", "40 km/soat bilan davom etish mumkin", "Faqat bo'sh tirkama bilan yurish mumkin", "Keyingi texnik ko'rikkacha yurish mumkin"],
  "Qo'shaloq shinalar orasiga xavf tug'diruvchi begona jismlar qisilib qolgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.3).");
QC(["BE","CE","DE"], "catE", "Tirkama g'ildiragini mahkamlovchi gaykalardan biri yo'q. Foydalanish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, qolganlari mahkam bo'lsa", "Ha, tezlik 50 km/soatdan oshmasa", "Ha, tirkama yuksiz bo'lsa"],
  "G'ildirakni mahkamlovchi bolt (gayka) bo'lmasa, transport vositasidan foydalanish taqiqlanadi (YHQ 3-ilova, 5.8).");
QC(["BE","CE","DE"], "catE", "Tirkamaning orqa tomonida qanday rangli nur qaytargichlar bo'lishi kerak?",
  ["Qizil", "Oq", "Zarg'aldoq", "Sariq"],
  "Orqa qismida qizil rangdan boshqa rangli nur qaytargichlar o'rnatilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.6).");
QC(["BE","CE","DE"], "catE", "Tirkamaning chiroqlari va nur qaytargichlari loy bilan qattiq ifloslangan. Qoidalarga ko'ra nima qilinadi?",
  ["Tozalanmaguncha foydalanish taqiqlanadi", "Aholi punktida foydalanish mumkin", "Faqat stop-chiroq toza bo'lsa yetarli", "Ifloslanish nosozlik hisoblanmaydi"],
  "Tashqi yoritgichlar va nur qaytargichlar belgilangan tartibda ishlamasa yoki ifloslangan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.3).");
QC(["BE","CE","DE"], "catE", "O toifadagi tirkamalar qanday majburiy jihoz bilan jihozlangan bo'lishi kerak?",
  ["Tashqi nur qaytargichlar", "O't o'chirgich", "Tibbiyot qutichasi", "Nur qaytargichli kamzul"],
  "O toifadagi tirkamalar tashqi nur qaytargichlar bilan jihozlangan bo'lishi kerak (YHQ 3-ilova, 7.10).");
QC(["CE"], "catE", "Dvigatel ishlamay, boshqaruv qismlari ulanmagan holda avtopoyezdning pnevmatik tormoz yuritmasida 30 daqiqada bosim qanchadan ko'p pasaysa, foydalanish taqiqlanadi?",
  ["0,05 MPa dan", "0,1 MPa dan", "0,02 MPa dan", "0,5 MPa dan"],
  "Boshqaruv qismlari ulanmaganda 30 daqiqada, ulanganida 15 daqiqada bosim 0,05 MPa dan ko'p pasaysa, foydalanish taqiqlanadi (YHQ 3-ilova, 1.4).");
QC(["CE","DE"], "catE", "Pnevmatik tormoz yuritmasining manometri ishlamayotgan bo'lsa, transport vositasidan foydalanish mumkinmi?",
  ["Yo'q, taqiqlanadi", "Ha, tormoz soz ishlasa", "Ha, garajgacha 50 km/soat bilan", "Ha, tirkama yuksiz bo'lsa"],
  "Pnevmatik yoki pnevmogidravlik tormoz yuritmasining manometri ishlamasa, foydalanish taqiqlanadi (YHQ 3-ilova, 1.5).");

// ===================== Xavfsiz haydash tavsiyalari (texnika) =====================
QC(["BE","CE","DE"], "catE", "Avtopoyezdning «buklanishi» (shatakchi va tirkamaning bir-biriga burchak hosil qilib qatlanishi) ko'pincha nimadan yuzaga keladi?",
  ["Sirpanchiq yo'lda keskin tormozlash yoki burilishdan", "Tekis yo'lda bir tekis tezlikda uzoq harakatlanishdan", "Tirkama chiroqlarining ifloslanishidan", "Shinalardagi bosimning me'yorda bo'lishidan"],
  "Buklanish odatda shatakchi g'ildiraklari ilashishni yo'qotganda — sirpanchiq yo'lda keskin tormozlash yoki burilishda yuzaga keladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Sirpanchiq yo'lda avtopoyezd buklanishining oldini olishning to'g'ri usuli qaysi?",
  ["Tezlikni oldindan kamaytirib, ravon tormozlash", "Burilish o'rtasida keskin tormozlash", "Neytral uzatmada inersiya bilan yurish", "Faqat tirkama tormozi bilan to'xtash"],
  "Xavfli joyga yetmasdan tezlikni kamaytirish va keskin harakatlarsiz ravon tormozlash buklanish xavfini kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Harakatlanayotganda tirkama yon tomonlarga chayqala boshladi. Eng to'g'ri harakat qaysi?",
  ["Gazni ravon qo'yib, rulni to'g'ri tutib sekinlashish", "Darhol keskin tormoz bosib to'xtash", "Tezlikni keskin oshirib, tirkamani tortib to'g'rilab olish", "Rulni chayqalish tomoniga keskin burish"],
  "Chayqalishda gazni asta qo'yib yuborish, rulni to'g'ri ushlab, tezlikni ravon kamaytirish tavsiya etiladi; keskin tormoz va rul harakati xavfni oshiradi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Tirkamaning chayqalishiga ko'pincha nima sabab bo'ladi?",
  ["Yukning orqaga surilgan joylashuvi va yuqori tezlik", "Yukning o'q atrofida pastda joylashuvi", "Shinalardagi bosimning me'yorda bo'lishi", "Past tezlikda bir tekis harakatlanish"],
  "Og'irlikning tirkama orqasiga to'planishi, ulagichga tushadigan yuklamaning kamligi va yuqori tezlik chayqalishning asosiy sabablaridir (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Tirkamaga yuk joylashtirishda og'irlik qanday taqsimlanishi tavsiya etiladi?",
  ["Og'ir yuk o'q atrofida, biroz oldinroq va pastda", "Og'ir yuk tirkamaning eng orqa qismida", "Og'ir yuk yuqorida, yengil yuk pastda", "Og'ir yuk bir yon tomonga yig'ilgan holda, oldinda"],
  "Og'ir yukni past va o'q atrofiga (biroz oldinroq) joylash tirkamani barqaror qiladi; orqaga yoki yuqoriga to'plash chayqalish va ag'darilish xavfini oshiradi (Xavfsiz haydash tavsiyalari).");
QC(["BE"], "catE", "Yengil avtomobil tirkamasining tortish moslamasiga tushadigan vertikal yuklama qanday bo'lishi kerak?",
  ["Ishlab chiqaruvchi belgilagan oraliqda", "Iloji boricha nolga yaqin", "Tirkama vaznidan ham ko'p", "Ulagichni yuqoriga tortadigan"],
  "Ulagichga tushadigan yuklama ishlab chiqaruvchi belgilagan chegarada bo'lishi kerak: juda kam bo'lsa tirkama chayqaladi, ko'p bo'lsa avtomobil boshqaruvi yomonlashadi (Xavfsiz haydash tavsiyalari).");
QC(["BE"], "catE", "Orqaga harakatlanishda rulni pastki qismidan ushlab, qo'lni o'ngga siljitsangiz, tirkama qaysi tomonga buriladi?",
  ["O'ngga", "Chapga", "To'g'ri qoladi", "Avval o'ngga, keyin chapga"],
  "Rul pastidan ushlaganda qo'l qaysi tomonga siljisa, tirkama orqasi ham o'sha tomonga ketadi — bu orqaga yurishni osonlashtiradigan usul (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Orqaga harakatlanishda tirkama orqasi chapga ketishi uchun shatakchining orqa qismi dastlab qaysi tomonga yo'naltiriladi?",
  ["O'ngga", "Chapga", "To'g'ri orqaga", "Avval chapga, keyin o'ngga"],
  "Orqaga yurishda tirkama shatakchiga teskari tomonga buriladi: tirkamani chapga yuborish uchun shatakchi orqasi avval o'ngga yo'naltiriladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Tirkama bilan orqaga harakatlanishda nima tavsiya etiladi?",
  ["Juda sekin, kichik rul harakatlari bilan yurish", "Tez, katta rul burilishlari bilan yurish", "Oynalarsiz, faqat orqaga o'girilib yurish", "Tirkama buklanguncha to'xtamay yurish"],
  "Orqaga yurishda past tezlik va kichik, o'z vaqtidagi rul tuzatishlari tirkamani nazoratda ushlashga yordam beradi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Orqaga harakatlanishda tirkama burchagi haddan oshib keta boshladi. To'g'ri yo'l qaysi?",
  ["To'xtab, biroz oldinga yurib tarkibni to'g'rilash", "Tezlikni oshirib, orqaga davom etish", "Rulni keskin teskari burib, davom etish", "Tirkama tormozini tortib, orqaga surish"],
  "Burchak katta bo'lib qolsa, buklanishning oldini olish uchun to'xtab, oldinga yurib tarkibni to'g'rilash va qaytadan boshlash kerak (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Avtopoyezd past tezlikda o'ngga burilganda tirkama g'ildiraklari shatakchi iziga nisbatan qanday yo'ldan o'tadi?",
  ["Burilish ichki tomoniga yaqinroq, kichik radiusdan", "Aynan shatakchi g'ildiraklari izidan", "Burilish tashqi tomonidan, kattaroq radiusdan o'tadi", "Shatakchi izidan oldinroq va tashqaridan"],
  "Past tezlikdagi burilishda tirkama g'ildiraklari burilishning ichki tomoniga «kesib» o'tadi, shuning uchun bordyur va piyodalarga e'tibor kerak (Xavfsiz haydash tavsiyalari).");
QC(["CE","DE"], "catE", "Uzun avtopoyezd tor chorrahada o'ngga burilganda nimaga alohida e'tibor beriladi?",
  ["Tirkama ichkaridagi bordyur va piyodaga tegmasligiga", "Faqat chap tomondagi orqani ko'rish oynasini kuzatishga", "Faqat shatakchining oldingi g'ildiraklariga", "Faqat tirkama burilish chiroqlarining yonishiga"],
  "Tirkama burilishning ichki tomonidan o'tgani sababli o'ng oynani kuzatib, bordyur, ustun va piyodalarga tegmaslikni ta'minlash kerak (Xavfsiz haydash tavsiyalari).");
QC(["DE"], "catE", "Bo'g'imli avtobus past tezlikda burilganda orqa seksiya qanday harakatlanadi?",
  ["Old seksiyaga nisbatan ichkariroqdan o'tadi", "Old seksiya izidan aniq o'tadi", "Tashqariroqdan, kattaroq radiusda o'tadi", "Burilish yo'nalishiga ta'sir qilmaydi"],
  "Bo'g'imli avtobusning orqa seksiyasi burilishning ichki tomoniga yaqinroq yo'ldan o'tadi, shuning uchun ichki tomondagi to'siqlar va odamlarga e'tibor beriladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Yuklangan avtopoyezdning tormozlanish yo'li yakka avtomobilnikiga nisbatan qanday?",
  ["Uzunroq, shuning uchun masofa kattaroq saqlanadi", "Qisqaroq, chunki tirkama ham alohida tormozlanadi", "Bir xil, tirkama hech ta'sir qilmaydi", "Faqat yuksiz holatda uzunroq bo'ladi"],
  "Massa ortgani sababli to'xtash yo'li uzayadi, shu bois avtopoyezd oldindagi vosita bilan kattaroq masofa saqlashi kerak (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Uzun nishablikdan avtopoyezd bilan tushishda nima tavsiya etiladi?",
  ["Past uzatmada, dvigatel tormozidan foydalanib", "Neytral uzatmada, ishchi tormoz bilan", "Yuqori uzatmada, tezlikni oshirib inersiya bilan", "Ilashish pedalini bosib turgan holda"],
  "Past uzatma va dvigatel (yordamchi) tormozidan foydalanish ishchi tormozlarning qizib ketishi va samaradorligi pasayishining oldini oladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Kuchli yon shamolda yuksiz baland furgon tirkama bilan harakatlanishda nima tavsiya etiladi?",
  ["Tezlikni kamaytirib, rulni mahkam ushlash", "Tezlikni oshirib, shamolni yengish", "Chap tasmaga o'tib harakatlanish", "Avariya ishorasini yoqib, tezlikni saqlash"],
  "Yuksiz baland tirkama yon shamolga sezgir; tezlikni kamaytirish va rulni mahkam ushlash barqarorlikni oshiradi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Tirkamani ulagandan keyin harakatni boshlashdan oldin nimani tekshirish kerak?",
  ["Ulagich qulfi, ehtiyot zanjir, elektr va tormoz ulanishi", "Faqat tirkama shinalarining tashqi ko'rinishi va bosimini", "Faqat tirkamadagi davlat raqam belgisini", "Faqat tirkama eshiklari yopiqligini"],
  "Ulagich qulflanganligi, ehtiyot zanjir (arqon), elektr va tormoz ulanishlari hamda chiroqlar ishlashi harakatdan oldin tekshiriladi (Xavfsiz haydash tavsiyalari).");
QC(["CE"], "catE", "Egarli qurilmaga yarim tirkama ulangandan so'ng ulanish mustahkamligi qanday tekshiriladi?",
  ["Tirkama tormozlangan holda shatakchini sekin oldinga tortib", "Tirkamani yon tomondan qo'l bilan kuchli turtib, tebratib ko'rib", "Shatakchini tezlik bilan orqaga urib ko'rib", "Faqat ko'z bilan egar ustiga qarab"],
  "Tirkama tormozlari ishlagan holda shatakchini past uzatmada sekin oldinga tortish egar qulfi to'liq ilashganini tekshirishning keng tarqalgan usuli (Xavfsiz haydash tavsiyalari).");
QC(["CE"], "catE", "Yarim tirkamani shatakchidan ajratishdan oldin nima qilinadi?",
  ["Tirkama tormozlanib, tayanchlari tushiriladi", "Tayanchlar tushirilmay, egar qulfi ochiladi", "Shatakchi tez oldinga tortib chiqariladi", "Tirkama tormozi bo'shatilib qoldiriladi"],
  "Ajratishdan oldin tirkama joyida mahkamlanadi (tormozlanadi) va tayanchlar tushiriladi, so'ng ulanishlar va egar qulfi bo'shatiladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Avtopoyezd bilan quvib o'tishda yakka avtomobilga nisbatan nimani hisobga olish kerak?",
  ["Ko'proq masofa va vaqt kerakligini", "Kamroq masofa yetarli ekanligini", "Tirkama tezlanishni oshirishini", "Qaytishni ertaroq boshlash mumkinligini"],
  "Avtopoyezd uzun va sekinroq tezlanadi, shuning uchun quvib o'tishga ancha ko'p bo'sh masofa va vaqt zarur (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Quvib o'tgandan keyin avtopoyezd o'z tasmasiga qachon qaytishi kerak?",
  ["Tirkama ham quvib o'tilgan vositadan yetarli o'tganda", "Shatakchi kabinasi o'tishi bilanoq", "Burilish ishorasi o'chishi bilanoq", "Quvib o'tilayotgan vosita haydovchisi fara bilan signal berganda"],
  "Tirkama quvib o'tilgan vosita oldidan xavfsiz masofaga chiqmaguncha qaytish uni qisib qo'yishi mumkin; buni oyna orqali tekshirish kerak (Xavfsiz haydash tavsiyalari).");
QC(["BE"], "catE", "Keng tirkama (masalan, tirkama-uycha) tortilganda orqani ko'rsatuvchi oynalarga oid to'g'ri tavsiya qaysi?",
  ["Tirkama ikki yonini ko'rsatuvchi qo'shimcha oynalar", "Faqat salondagi orqa oynadan foydalanish", "Yon oynalarni yig'ib, faqat orqaga o'girilib qarash", "Oynalarni tirkama tomiga qaratib sozlash"],
  "Tirkama avtomobildan kengroq bo'lsa, uning ikki yonini va orqadan kelayotganlarni ko'rish uchun uzaytirilgan (qo'shimcha) yon oynalar tavsiya etiladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Yuksiz tirkamali avtopoyezd quruq bo'lmagan yo'lda keskin tormozlanganda nimaga ko'proq moyil?",
  ["Tirkama g'ildiraklari blokirovkalanib, sirpanishiga", "Tirkama old qismining yuqoriga ko'tarilishiga", "Shatakchi old g'ildiraklarining ko'tarilishiga", "Dvigatelning o'z-o'zidan o'chib qolishiga"],
  "Yuksiz tirkama g'ildiraklarining yo'lga bosimi kam, shuning uchun keskin tormozlashda ular tez blokirovkalanib, tirkama sirpanishi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Avtopoyezd bilan keskin burilishga kirishda tezlikni qachon kamaytirish kerak?",
  ["Burilishga kirishdan oldin, to'g'ri qismda", "Burilish o'rtasida keskin tormoz bilan", "Burilishdan chiqayotganda", "Burilish o'rtasida ilashishni ajratib"],
  "Tezlikni burilishdan oldin to'g'ri qismda kamaytirish kerak; burilish ichida tormozlash buklanish va ag'darilish xavfini oshiradi (Xavfsiz haydash tavsiyalari).");
QC(["CE"], "catE", "Yuqori og'irlik markazli yuk ortilgan avtopoyezdda ag'darilish xavfi qachon ortadi?",
  ["Burilish va keskin manyovrda yuqori tezlikda", "To'g'ri yo'lda past tezlikda harakatda", "Yuk pastga va markazga joylashtirilganda", "Tekis yo'lda bir tekis tormozlashda"],
  "Og'irlik markazi baland bo'lsa, burilishdagi markazdan qochma kuch ag'darilishga olib kelishi mumkin; shu bois tezlik oldindan kamaytiriladi (Xavfsiz haydash tavsiyalari).");
QC(["BE","CE","DE"], "catE", "Yomg'irli yo'lda avtopoyezd bilan oldindagi vosita orasidagi masofa qanday bo'lishi kerak?",
  ["Quruq yo'ldagidan sezilarli kattaroq", "Quruq yo'ldagi bilan bir xil", "Kichikroq, chunki tezlik pastroq", "Tezlik 50 km/soatdan oshsagina kattalashtiriladi"],
  "Ho'l yo'lda ilashish kamayib, tormozlanish yo'li uzayadi, shuning uchun og'ir avtopoyezd masofani ancha kattalashtirishi kerak (Xavfsiz haydash tavsiyalari).");
QC(["BE"], "catE", "Tirkama bilan orqaga harakatlanishni birinchi marta qayerda mashq qilish tavsiya etiladi?",
  ["Bo'sh va xavfsiz maydonchada", "Gavjum ko'chaning chetida", "Avtomagistralning yo'l yoqasida", "Chorraha yaqinidagi tor yo'lda"],
  "Orqaga yurish ko'nikmasini avval boshqa harakat ishtirokchilari yo'q, xavfsiz yopiq maydonchada mashq qilish tavsiya etiladi (Xavfsiz haydash tavsiyalari).");
QC(["CE","DE"], "catE", "Uzun avtopoyezd yoki bo'g'imli avtobus bilan qatorni o'zgartirishda nima muhim?",
  ["Butun tarkib uzunligini oynalarda kuzatish", "Faqat kabina yonidagi bo'shliqqa qarash", "Ishorasiz, tez qayta tizilish", "Faqat oldingi vositaga e'tibor berish"],
  "Uzun tarkib qayta tizilganda orqa qismi ham yangi tasmaga sig'ishi kerak, shuning uchun oynalar orqali butun uzunlik bo'ylab bo'shliq tekshiriladi (Xavfsiz haydash tavsiyalari).");
