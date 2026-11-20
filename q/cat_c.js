// q/cat_c.js — «C» toifasi (ruxsat etilgan to'liq vazni 3 500 kg dan ortiq yuk avtomobillari) uchun maxsus savollar
// Manba: Yo'l harakati qoidalari (VM 12.04.2022 y. 172-son qarori, ilovalari bilan).

// ===================== Toifa va yosh =====================
QC(["C","CE"], "catC", "Ruxsat etilgan to'liq vazni 3 600 kg bo'lgan bortli yuk avtomobilini (tirkamasiz) boshqarish uchun qaysi toifa kerak?",
  ["«C»", "«B»", "«BE»", "«D»"],
  "«C» toifasi ruxsat etilgan to'liq vazni 3 500 kg dan ortiq avtotransport vositalarini o'z ichiga oladi (YHQ 8-band).");
QC(["C","CE"], "catC", "«C» toifali yuk avtomobiliga ruxsat etilgan to'liq vazni 700 kg bo'lgan tirkama ulandi. Bu tarkibni boshqarish uchun qaysi toifa yetarli?",
  ["«C»", "«CE»", "«BE»", "«C» va «BE» birgalikda"],
  "Tirkamasining ruxsat etilgan to'liq vazni 750 kg dan oshmaydigan «C» toifadagi avtomobillar ham «C» toifasiga kiradi (YHQ 8-band).");
QC(["C","CE"], "catC", "«C» toifasidagi transport vositasini boshqarish huquqini olish uchun o'rganuvchi o'quv muddati yakunida necha yoshga to'lgan bo'lishi kerak?",
  ["18 yoshga", "19 yoshga", "21 yoshga", "20 yoshga"],
  "«B» va «C» toifalari uchun o'rganuvchi o'quv muddati yakunida 18 yoshga to'lgan bo'lishi kerak (YHQ 149-band).");
QC(["C","CE"], "catC", "«CE» toifasidagi avtopoyezdni boshqarish huquqini olish uchun qanday yosh talabi qo'yilgan?",
  ["19 yosh", "18 yosh", "21 yosh", "20 yosh"],
  "«BE» va «CE» toifalari uchun o'rganuvchi o'quv muddati yakunida 19 yoshga to'lgan bo'lishi kerak (YHQ 149-band).");
QC(["C","CE"], "catC", "Quyidagi tarkiblardan qaysi birini boshqarish uchun «CE» toifasi talab qilinadi?",
  ["10 t yuk avtomobili va to'liq vazni 2 t tirkama", "10 t yuk avtomobili va to'liq vazni 600 kg tirkama", "3 t yuk avtomobili va to'liq vazni 700 kg tirkama", "4 t yuk avtomobili va to'liq vazni 750 kg tirkama"],
  "«CE» — tirkamasining ruxsat etilgan to'liq vazni 750 kg dan ortiq bo'lgan «C» toifadagi avtotransport vositalari (YHQ 8-band).");
QC(["C","CE"], "catC", "3-ilovadagi tasnifga ko'ra eng katta vazni 8 t bo'lgan yuk avtomobili qaysi toifaga kiradi?",
  ["N2", "N3", "N1", "O3"],
  "N2 toifasi — eng katta vazni 3,5 t dan ortiq, lekin 12 t dan oshmaydigan yuk avtomobillari (YHQ 3-ilova).");
QC(["C","CE"], "catC", "Eng katta vazni 18 t bo'lgan yuk shatakchisi (tyagach) 3-ilova tasnifiga ko'ra qaysi toifaga kiradi?",
  ["N3", "N2", "M3", "O4"],
  "N3 toifasi — yuk tashish uchun mo'ljallangan, eng katta vazni 12 t dan ortiq avtotransport vositalari (YHQ 3-ilova).");
QC(["C","CE"], "catC", "3-ilovaga ko'ra N2 toifasidagi yuk avtomobilining eng katta vazni yuqoridan qaysi chegara bilan cheklangan?",
  ["12 t", "7,5 t", "16 t", "10 t"],
  "N2 toifasiga eng katta vazni 3,5 t dan ortiq, lekin 12 t dan oshmaydigan yuk avtomobillari kiradi (YHQ 3-ilova).");

// ===================== Tezlik =====================
QC(["C","CE"], "catC", "Siz ruxsat etilgan to'liq vazni 12 t bo'lgan bortli yuk avtomobilida (tirkamasiz) aholi punktidan tashqarida ketyapsiz, tezlik belgilari yo'q. Eng yuqori ruxsat etilgan tezlik:",
  ["80 km/soat", "90 km/soat", "70 km/soat", "100 km/soat"],
  "Aholi punktidan tashqarida ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobillariga 80 km/soatdan oshirmaslik ruxsat etiladi (YHQ 79-band).");
QC(["C","CE"], "catC", "Ruxsat etilgan to'liq vazni 12 t bo'lgan yuk avtomobili tirkama bilan aholi punktidan tashqarida harakatlanmoqda (belgilar yo'q). Eng yuqori tezlik:",
  ["70 km/soat", "80 km/soat", "60 km/soat", "90 km/soat"],
  "Aholi punktidan tashqarida tirkamali yuk avtomobillariga 70 km/soatdan oshirmasdan harakatlanish ruxsat etiladi (YHQ 79-band).");
QC(["C","CE"], "catC", "Aholi punktida (tezlik belgilari yo'q) ruxsat etilgan to'liq vazni 15 t bo'lgan yuk avtomobili uchun eng yuqori tezlik:",
  ["70 km/soat", "60 km/soat", "80 km/soat", "50 km/soat"],
  "Aholi punktlarida barcha transport vositalari uchun umumiy chegara 70 km/soat; yuk avtomobillariga alohida pastroq chegara belgilanmagan (YHQ 78-band).");
QC(["C","CE"], "catC", "Yukxonasida odamlar bo'lgan yuk avtomobili avtomagistralga chiqdi. Uning uchun eng yuqori tezlik qancha?",
  ["60 km/soat", "80 km/soat", "90 km/soat", "70 km/soat"],
  "Yukxonasida odam tashiyotgan yuk avtomobillariga har qanday yo'llarda 60 km/soatdan oshirmaslik belgilangan (YHQ 80-band).");
QC(["C","CE"], "catC", "Yuk tushirish uchun turar joy dahasiga kirdingiz. Yuk avtomobili qanday tezlikdan oshirmasligi kerak?",
  ["20 km/soat", "30 km/soat", "10 km/soat", "40 km/soat"],
  "Turar joy dahalari va yondosh hududlarda tezlik 20 km/soatdan oshmasligi kerak (YHQ 78-band).");
QC(["C","CE"], "catC", "Tegishli belgi o'rnatilgan maktab yaqinida (300 m dan kam masofada) yuk avtomobili qanday tezlikdan oshirmasligi kerak?",
  ["30 km/soat", "20 km/soat", "40 km/soat", "50 km/soat"],
  "Belgi o'rnatilgan maktab va maktabgacha ta'lim tashkilotlariga yetmasdan va o'tib 300 m dan kam masofada tezlik 30 km/soatdan oshmasligi kerak (YHQ 78-band).");
QC(["C","CE"], "catC", "Og'ir vaznli yuk tashiyotgan avtomobil avtomagistralda qanday tezlikda harakatlanishi mumkin?",
  ["DYHXX bilan kelishilgan tezlikdan oshirmasdan", "Yuk avtomobillari uchun umumiy 80 km/soatgacha", "70 km/soatdan oshirmasdan", "60 km/soatdan oshirmasdan"],
  "Xavfli, og'ir vaznli va katta o'lchamli yuklarni tashiyotgan transport vositalari DYHXX bilan kelishilgan tezlikdan oshirmasligi kerak (YHQ 80-band).");
QC(["C","CE"], "catC", "Yuk avtomobilingizda «Tezlik cheklangan» taniqlik belgisida 50 raqami ko'rsatilgan. Aholi punktidan tashqarida eng yuqori tezlik:",
  ["50 km/soat", "80 km/soat", "70 km/soat", "60 km/soat"],
  "Haydovchiga transport vositasiga o'rnatilgan «Tezlik cheklangan» belgisida ko'rsatilgan tezlikni oshirish taqiqlanadi (YHQ 81-band).");
QC(["C","CE"], "catC", "Yuk avtomobilida nosoz avtomobilni egiluvchan ulagich bilan shatakka oldingiz. Aholi punktidan tashqarida eng yuqori tezlik:",
  ["50 km/soat", "60 km/soat", "70 km/soat", "40 km/soat"],
  "Mexanik transport vositalarini shatakka olgan transport vositalariga 50 km/soatdan oshirmaslik belgilangan (YHQ 80-band).");
QC(["C","CE"], "catC", "«Tezlik cheklangan» taniqlik belgisi yuk avtomobilining qayeriga o'rnatiladi?",
  ["Kuzov orqa devorining chap tomoniga", "Kuzov orqa devorining o'ng tomoniga", "Kabinaning old oynasi markaziga", "Old bamperning o'rta qismiga"],
  "Bu belgi mexanik transport vositasi kuzovi orqa devorining chap tomoniga o'rnatiladi (YHQ 176-band).");
QC(["C","CE"], "catC", "«Tezlik cheklangan» taniqlik belgisining diametri kamida qancha bo'lishi kerak?",
  ["160 mm", "200 mm", "250 mm", "120 mm"],
  "Belgining diametri 160 mm dan kam bo'lmasligi, hoshiyasi diametrning 1/10 qismiga teng bo'lishi kerak (YHQ 176-band).");
QC(["C","CE"], "catC", "Texnik tavsifnomasidagi eng yuqori tezligi 75 km/soat bo'lgan yuk avtomobili aholi punktidan tashqarida qanday tezlikdan oshirmasligi kerak?",
  ["75 km/soat", "80 km/soat", "70 km/soat", "90 km/soat"],
  "Tezlikni transport vositasining texnik tavsifnomasida ko'rsatilgan eng yuqori tezlikdan oshirish taqiqlanadi (YHQ 81-band).");

// ===================== Yukxonada odam tashish =====================
QC(["C","CE"], "catC", "Odam tashishga mo'ljallangan yuk avtomobili yukxonasida 5 kishi, kabinada 1 yo'lovchi bor. Haydovchining «C» toifasidagi staji 2 yil. Bu tashish:",
  ["Ruxsat etilmaydi — kamida 3 yil staj kerak", "Ruxsat etiladi — odamlar 8 tadan kam", "Ruxsat etiladi — tezlik 60 km/soatdan oshmasa", "Ruxsat etiladi — faqat aholi punkti ichida"],
  "Yukxonada odam tashishni «C» toifasiga ega va shu toifadagi transportni kamida 3 yil boshqargan haydovchi amalga oshiradi (YHQ 152-band).");
QC(["C","CE"], "catC", "Yuk avtomobili yukxonasida 9 kishi tashilmoqda (kabinada yo'lovchi yo'q). Haydovchida qanday huquq bo'lishi kerak?",
  ["«C» (kamida 3 yil staj) va qo'shimcha «D»", "Faqat «C» (kamida 3 yil staj)", "Faqat «D» toifasi", "«C» (kamida 3 yil staj) va qo'shimcha «CE»"],
  "Odamlar soni 8 nafardan ortiq bo'lsa, haydovchi «C» talablariga qo'shimcha «D» toifasiga ham ega bo'lishi kerak (YHQ 152-band).");
QC(["C","CE"], "catC", "Yukxonada tashiladigan odamlar sonini (8 nafar chegarasi) hisoblashda kabinadagi yo'lovchilar:",
  ["Ular ham qo'shib hisoblanadi", "Hisobga olinmaydi, faqat yukxona hisoblanadi", "Faqat uch nafardan ortig'i hisoblanadi", "Faqat shahar tashqarisida hisoblanadi"],
  "8 nafar chegarasi kabinadagi yo'lovchilarni ham qo'shib hisoblaganda qo'llaniladi (YHQ 152-band).");
QC(["C","CE"], "catC", "Harbiy haydovchilarga yuk avtomobillarida odam tashishga ruxsat berish tartibini kim belgilaydi?",
  ["Mudofaa vazirligi", "DYHXX", "Transport vazirligi", "Favqulodda vaziyatlar vazirligi"],
  "Harbiy haydovchilarning yuk avtomobillarida odam tashishiga ruxsat Mudofaa vazirligi belgilagan tartibda beriladi (YHQ 152-band).");
QC(["C","CE"], "catC", "Odam tashish uchun jihozlangan yuk avtomobili yukxonasining borti 1,1 m. Unda odam tashish mumkinmi?",
  ["Yo'q, bort kamida 1,3 m bo'lishi kerak", "Ha, bort 1 m dan baland bo'lsa yetarli", "Ha, odamlar o'rindiqda o'tirsa", "Ha, odamlar 8 nafardan oshmasa"],
  "Odam tashishga mo'ljallangan yukxonaning borti 1,3 m dan kam bo'lmasligi shart (YHQ 153-band).");
QC(["C","CE"], "catC", "Odam tashiladigan yuk avtomobili yukxonasidagi o'rindiqlarga qanday talab qo'yiladi?",
  ["Mahkamlangan, pastki qismdan 0,3–0,5 m balandlikda", "Ko'chma, bort balandligi bilan bir sathda", "Mahkamlangan, bort sathidan 0,3 m yuqorida", "Ko'chma, pastki qismdan 0,8–1,0 m balandlikda"],
  "Yukxonaning pastki qismidan 0,3–0,5 m balandlikda mahkamlangan o'rindiqlar bo'lishi kerak (YHQ 153-band).");
QC(["C","CE"], "catC", "Yukni ortish uchun ikki ishchi odam tashishga moslashtirilmagan bortli yuk avtomobili yukxonasida ketmoqda. Qoidaga ko'ra:",
  ["Ruxsat etiladi, bort sathidan pastda o'rindiqlarda o'tirsa", "Taqiqlanadi, yukxona odam tashishga moslashtirilmagan", "Ruxsat etiladi, bortni ushlab tik turgan holda", "Ruxsat etiladi, haydovchida «D» toifasi bo'lsa"],
  "Moslashtirilmagan yukxonada yukni olishga borayotgan yoki kuzatayotgan shaxslar bort sathidan pastda o'rindiqlarda bo'lishi mumkin (YHQ 154-band).");
QC(["C","CE"], "catC", "Maktab o'quvchilarini ekskursiyaga odam tashishga jihozlangan yuk avtomobili yukxonasida olib borish mumkinmi?",
  ["Yo'q, bu taqiqlanadi", "Ha, bort 1,3 m dan baland bo'lsa", "Ha, katta yoshli kuzatuvchi bo'lsa", "Ha, tezlik 60 km/soatdan oshmasa"],
  "Bolalarni yuk avtomobillarining yukxonasida tashish taqiqlanadi (YHQ 159-band).");
QC(["C","CE"], "catC", "Yuk avtomobilida odamlarni tashishda transport vositasining haqiqiy vazni qanday bo'lishi kerak?",
  ["Ruxsat etilgan vazndan oshmasligi", "Ruxsat etilgan vazndan 10 foizgacha oshishi mumkin", "Faqat yuksiz holatda o'lchanib, cheklanmasligi", "DYHXX ruxsati bilan 20 foizgacha oshishi"],
  "Odam tashishda transport vositasining haqiqiy vazni ishlab chiqaruvchi belgilagan ruxsat etilgan vazndan oshmasligi kerak (YHQ 159-band).");
QC(["C","CE"], "catC", "Siz odam tashishga mo'ljallangan 8 t yuk avtomobilidasiz, oldinda 3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan» belgisi (vazn ko'rsatilmagan). Harakatni davom ettirish:",
  ["Mumkin, belgi bunday avtomobilga taalluqli emas", "Mumkin emas, vazni 3,5 t dan ortiq", "Faqat odamlar tushirilgandan keyin mumkin", "Faqat 7.4.1 qo'shimcha belgisi bo'lsa mumkin"],
  "3.4 belgisi bortiga qiya oq chiziq tortilgan yoki odam tashishga mo'ljallangan yuk avtomobillarining harakatini taqiqlamaydi (YHQ 1-ilova, 3.4).");
QC(["C","CE"], "catC", "Yukxonada odam tashishdan oldin ularga xavfsizlik choralari, chiqish-tushish va joylashish tartibini kim tushuntirishi kerak?",
  ["Haydovchi", "Yuk egasi", "Eng katta yoshli yo'lovchi", "Korxona dispetcheri"],
  "Harakatni boshlashdan oldin haydovchi yo'lovchilarga xavfsizlik choralari, chiqish-tushish va joylashish tartibini tushuntirishi kerak (YHQ 157-band).");
QC(["C","CE"], "catC", "Yukxonasida odamlar bo'lgan yuk avtomobilini egiluvchan ulagich bilan shatakka olish:",
  ["Taqiqlanadi — shatakdagi yukxonada odam bo'lmasligi kerak", "Ruxsat etiladi, tezlik 50 km/soatdan oshmasa", "Ruxsat etiladi, odamlar o'rindiqda o'tirsa", "Ruxsat etiladi, ulagich uzunligi 4–6 m oralig'ida bo'lsa"],
  "Qattiq yoki egiluvchan ulagich bilan shatakka olingan yuk avtomobili yukxonasida odam tashish taqiqlanadi (YHQ 143-band).");
QC(["C","CE"], "catC", "Yukxonaga odamlar joylashgach, haydovchi harakatni qachon boshlashi mumkin?",
  ["Xavfsiz tashish sharoiti ta'minlanganiga ishonch hosil qilgach", "Barcha odamlar yukxonaga chiqib, bortni yopishi bilanoq", "Bortlardan biri ochiq bo'lsa ham darhol", "Yo'l varaqasiga dispetcher ruxsat belgisi qo'yilgandan so'ng"],
  "Haydovchi harakatni boshlashdan oldin yo'lovchilarni xavfsiz tashish sharoiti ta'minlanganiga ishonch hosil qilishi kerak (YHQ 157-band).");

// ===================== Yuk tashish =====================
QC(["C","CE"], "catC", "Yuk avtomobilining umumiy vazni me'yorda, lekin orqa o'qqa tushadigan og'irlik ishlab chiqaruvchi belgilaganidan oshib ketgan. Bu:",
  ["Qoida buzilishi hisoblanadi", "Ruxsat etiladi — faqat umumiy vazn hisobga olinadi", "Ruxsat etiladi — tezlik 60 km/soatgacha cheklansa", "Ruxsat etiladi — faqat aholi punktlaridan tashqarida"],
  "Yukning vazni va o'qlarga tushadigan og'irlik taqsimoti belgilangan va ishlab chiqaruvchi ruxsat etgan miqdordan oshmasligi kerak (YHQ 160-band).");
QC(["C","CE"], "catC", "Yuk avtomobilida uzun quvurlar tashilmoqda; ular orqa yoritish asboblari va davlat raqam belgisini to'sib qo'ygan. Bunday tashish:",
  ["Yo'l qo'yilmaydi — yuk chiroqlar va raqamni to'smasligi kerak", "Ruxsat etiladi, quvurlar 1 m dan kam chiqib tursa", "Ruxsat etiladi, «Katta o'lchamli yuk» belgisi bo'lsa", "Ruxsat etiladi, avariya ishorasi va gabarit chiroqlari yoqib qo'yilsa"],
  "Yuk tashqi yoritish asboblari, nur qaytargichlar, davlat raqam va taniqlik belgilarini to'smasligi shart (YHQ 162-band).");
QC(["C","CE"], "catC", "Yuk shunday joylashtirilganki, burilishlarda avtomobil yon tomonga og'ib, boshqarish qiyinlashmoqda. Qoidaga ko'ra:",
  ["Bunday tashishga yo'l qo'yilmaydi", "Tezlik 40 km/soatgacha kamaytirilsa ruxsat etiladi", "Faqat aholi punktidan tashqarida ruxsat etiladi", "Avariya ishorasi yoqilsa ruxsat etiladi"],
  "Yuk transport vositasini boshqarishni qiyinlashtirmasligi va muvozanatini buzmasligi kerak (YHQ 162-band).");
QC(["C","CE"], "catC", "Qum ortilgan samosvalda yuk bort sathidan yuqori ko'tarilgan va ustidan tent yopilgan. Bunday tashish:",
  ["Yo'l qo'yilmaydi", "Ruxsat etiladi, tent zichligi 900 g/m2 bo'lsa", "Ruxsat etiladi, tezlik 60 km/soatdan oshmasa", "Ruxsat etiladi, faqat shahardan tashqarida"],
  "Sochiluvchan yuk tent bilan bort sathidan oshirmasdan, bortga mustahkam qotirilib yopilishi kerak (YHQ 162-band).");
QC(["C","CE"], "catC", "Qurilish chiqindilarini tashiyotgan samosval yukni yopmasdan harakatlanmoqda. Qaysi talab buzilgan?",
  ["Sochiluvchan yukni tent bilan to'liq yopish talabi", "«Katta o'lchamli yuk» belgisini o'rnatish talabi", "«Avtopoyezd» belgisini yoqish talabi", "Kunduzi yaqin yorug'likni yoqish talabi"],
  "Qurilish va maishiy chiqindilar kabi to'kiladigan yuklar N toifadagi bortli va o'zi ag'daruvchi transportda majburiy ravishda tent bilan yopiladi (YHQ 162-band).");
QC(["C","CE"], "catC", "Sochiluvchan yukni yopuvchi tentning yuza qismi qanday holatda bo'lishi kerak?",
  ["To'liq yopilgan", "Shamollatish uchun yarmi ochiq", "Faqat old qismi yopilgan", "Orqa bort tomoni ochiq qoldirilgan"],
  "Tent bortga mustahkam qotirilib, yukning yuza qismi to'liq yopilgan bo'lishi kerak (YHQ 162-band).");
QC(["C","CE"], "catC", "Yuk avtomobili kuzovidan yon tomonga yuk 0,3 m chiqib turibdi. «Katta o'lchamli yuk» belgisi:",
  ["Talab qilinmaydi", "Talab qilinadi — har qanday chiqish belgilanadi", "Faqat qorong'ida talab qilinadi", "Talab qilinadi, DYHXX ruxsati ham kerak"],
  "Yon tomonga gabaritning chetki qismidan 0,4 m dan ortiq chiqib turgan yuk belgilanadi (YHQ 163-band).");
QC(["C","CE"], "catC", "Yuk avtomobili orqasidan 1,2 m chiqib turgan yog'och materiallar qorong'ida tashilmoqda. Yuk qanday belgilanadi?",
  ["«Katta o'lchamli yuk» belgisi va orqada qizil chiroq yoki qaytargich", "Yukning uchiga qizil mato bog'lanadi, belgi talab qilinmaydi", "Faqat avariya ishorasi yoqib qo'yiladi", "«Uzun o'lchamli transport vositasi» belgisi bilan"],
  "Orqaga 1 m dan ortiq chiqqan yuk belgi bilan, qorong'ida qo'shimcha ravishda orqadan qizil chiroq yoki yorug'lik qaytargich bilan belgilanadi (YHQ 163-band).");
QC(["C","CE"], "catC", "«Katta o'lchamli yuk» taniqlik belgisining o'lchami qancha?",
  ["400 x 400 mm", "200 x 200 mm", "690 x 300 mm", "1200 x 200 mm"],
  "«Katta o'lchamli yuk» — o'lchami 400 x 400 mm bo'lgan yorug'lik qaytaradigan to'rtburchak belgi (YHQ 176-band).");
QC(["C","CE"], "catC", "«Katta o'lchamli yuk» taniqlik belgisidagi chiziqlar qanday?",
  ["Diagonal bo'yicha navbatma-navbat qizil va oq", "Yotiq holda navbatma-navbat sariq va qora", "Tik holda navbatma-navbat qizil va sariq", "Diagonal bo'yicha navbatma-navbat oq va ko'k"],
  "Belgiga kengligi 50 mm li, diagonal bo'yicha navbatma-navbat qizil va oq chiziqlar tushiriladi (YHQ 176-band).");
QC(["C","CE"], "catC", "Bortli yuk avtomobili yuk bilan birga eni 2,7 m bo'lgan holda harakatlanishi kerak. Buning uchun:",
  ["DYHXX bilan kelishish shart", "Faqat taniqlik belgisi o'rnatish yetarli", "Kelishuv kerak emas, eni 3 m dan kam", "Avariya ishorasini yoqish yetarli"],
  "Eni yukli yoki yuksiz holda 2,55 m dan ortiq transport vositasining harakati DYHXX bilan kelishilishi shart (YHQ 164-band).");
QC(["C","CE"], "catC", "Refrijerator kuzovli avtomobilning eni 2,58 m. Harakatlanish uchun DYHXX bilan kelishish kerakmi?",
  ["Yo'q, refrijeratorlar uchun chegara 2,6 m", "Ha, barcha uchun chegara 2,55 m", "Ha, refrijeratorlar uchun chegara 2,5 m", "Yo'q, refrijeratorlar uchun chegara 3 m"],
  "Refrijeratorlar va izotermik kuzovlar uchun eni bo'yicha chegara 2,6 m (YHQ 164-band).");
QC(["C","CE"], "catC", "Yuk bilan birga balandligi yo'l sathidan 4,3 m bo'lgan avtomobil harakati uchun nima talab qilinadi?",
  ["DYHXX bilan kelishish", "«Katta o'lchamli yuk» belgisi o'rnatish", "Faqat kunduzgi yaqin yorug'lik", "Hamrohlik qiluvchi avtomobil ajratish"],
  "Balandligi yo'l sathidan 4 m dan ortiq transport vositasining harakati DYHXX bilan kelishilishi shart (YHQ 164-band).");
QC(["C","CE"], "catC", "Uzunligi 13 m bo'lgan yakka (tirkamasiz) avtotransport vositasining harakati:",
  ["DYHXX bilan kelishilishi shart", "Kelishuvsiz ruxsat etiladi", "«Avtopoyezd» belgisi bilan ruxsat etiladi", "Faqat avtomagistralda ruxsat etiladi"],
  "Yakka avtotransport vositasi uchun uzunlik chegarasi 12 m; undan uzunlarining harakati DYHXX bilan kelishiladi (YHQ 164-band).");
QC(["C","CE"], "catC", "Yarim tirkamali avtopoyezdning uzunligi 18,5 m. Uzunlik bo'yicha DYHXX bilan kelishish:",
  ["Talab qilinmaydi — chegara 20 m", "Talab qilinadi — chegara 12 m", "Talab qilinadi — chegara 16,5 m", "Talab qilinadi — chegara 18 m"],
  "Yarim tirkamali va tirkamali avtopoyezd uchun uzunlik chegarasi 20 m (YHQ 164-band).");
QC(["C","CE"], "catC", "Yuk transport vositasining orqa nuqtasidan 2,5 m chiqib turibdi. Qaysi talablar qo'llaniladi?",
  ["Taniqlik belgisi va DYHXX bilan kelishuv", "Faqat «Katta o'lchamli yuk» belgisi", "Faqat DYHXX bilan kelishuv", "Faqat qorong'ida qizil chiroq"],
  "1 m dan ortiq chiqqan yuk 163-band bo'yicha belgilanadi, 2 m dan ortiq chiqqanda esa harakat DYHXX bilan ham kelishiladi (YHQ 164-band).");
QC(["C","CE"], "catC", "«Xavfli yuk» taniqlik belgisi transport vositasining qayeriga o'rnatiladi?",
  ["Old va orqa tomoniga", "Faqat orqa tomoniga", "Kabina tomining old qismiga", "Ikki yon tomoniga"],
  "«Xavfli yuk» belgisi xavfli yuk tashiyotgan transport vositasining old va orqa tomoniga o'rnatiladi (YHQ 176-band).");
QC(["C","CE"], "catC", "«Xavfli yuk» taniqlik belgisining umumiy o'lchami qancha?",
  ["690 x 300 mm", "400 x 400 mm", "1200 x 200 mm", "250 x 250 mm"],
  "Belgining o'lchami 690 x 300 mm, o'ng qismi 400 x 300 mm (YHQ 176-band).");
QC(["C","CE"], "catC", "«Xavfli yuk» taniqlik belgisining o'ng qismi (400 x 300 mm) qanday rangda bo'ladi?",
  ["Zarg'aldoq", "Oq", "Sariq", "Qizil"],
  "O'ng qismi zarg'aldoq rangda, chap qismi esa yukning xavfli xususiyati belgilari tushirilgan oq rangda bo'ladi (YHQ 176-band).");
QC(["C","CE"], "catC", "Uzunligi 22 m bo'lgan avtopoyezd orqasiga qaysi taniqlik belgisi o'rnatiladi?",
  ["«Uzun o'lchamli transport vositasi»", "«Katta o'lchamli yuk» (orqa bortga ikki dona)", "«Tezlik cheklangan»", "«Avariya sababli to'xtash»"],
  "Yukli yoki yuksiz uzunligi 20 m dan oshadigan transport vositasining orqasiga «Uzun o'lchamli transport vositasi» belgisi o'rnatiladi (YHQ 176-band).");
QC(["C","CE"], "catC", "«Uzun o'lchamli transport vositasi» taniqlik belgisi qanday ko'rinishda?",
  ["Sariq, qizil hoshiyali, nur qaytaruvchi to'rtburchak", "Oq, qora hoshiyali, nur qaytaruvchi to'rtburchak", "Zarg'aldoq, qora hoshiyali, oddiy to'rtburchak", "Qizil-oq diagonal chiziqli kvadrat"],
  "Bu belgi 1200x200 mm o'lchamli, kengligi 40 mm qizil hoshiyali, sariq rangli nur qaytaruvchi to'rtburchak (YHQ 176-band).");
QC(["C","CE"], "catC", "Ikki tirkamali avtopoyezdning uzunligi 18 m. «Uzun o'lchamli transport vositasi» belgisi kerakmi?",
  ["Ha, ikki va undan ortiq tirkamali avtopoyezdga kerak", "Yo'q, uzunligi 20 m dan kam", "Yo'q, faqat yarim tirkamalilarga kerak", "Faqat DYHXX alohida talab qilgan hollarda kerak"],
  "Belgi 20 m dan uzun transportga, shuningdek ikki yoki undan ko'p tirkamali avtopoyezdlarga o'rnatiladi (YHQ 176-band).");
QC(["C","CE"], "catC", "Yuk avtomobili kuzovining orqa devoriga yoziladigan davlat raqamidagi raqamlarning eni va chizig'i qalinligi kamida qancha?",
  ["Eni 120 mm, chizig'i 30 mm", "Eni 100 mm, chizig'i 20 mm", "Eni 150 mm, chizig'i 40 mm", "Eni 80 mm, chizig'i 15 mm"],
  "Raqam balandligi 300 mm, eni 120 mm, chizig'ining yo'g'onligi 30 mm dan kam bo'lmasligi kerak (YHQ 175-band).");
QC(["C","CE"], "catC", "Yuk avtomobili kuzovi orqa devoriga yoziladigan davlat raqamidagi harflar balandligi qanday bo'ladi?",
  ["Raqam o'lchamlarining 2/3 qismiga teng", "Raqam balandligi bilan teng", "Raqam balandligining yarmiga teng", "Raqamdan 1,5 marta baland"],
  "Harflar balandligi raqam o'lchamlarining 2/3 qismiga teng bo'lishi kerak (YHQ 175-band).");
QC(["C","CE"], "catC", "7.20 «Xavfli yuk toifasi» qo'shimcha axborot belgisi nimani ko'rsatadi?",
  ["Xavfli yuk toifasi (toifalari) raqamini", "Xavfli yuk uchun ruxsat etilgan tezlikni", "Xavfli yukning ruxsat etilgan vaznini", "Xavfli yuk tashish uchun yo'nalishni"],
  "7.20 belgisi xavfli yuk toifasining (toifalarining) raqamini ko'rsatadi (YHQ 1-ilova, 7.20).");
QC(["C","CE"], "catC", "DYHXXda qayd etilmagan sariq yoki zarg'aldoq mayoqchali transportdan foydalanish taqiqlanadi. Bu taqiq qaysi transportga taalluqli emas?",
  ["Katta o'lchamli yuk tashiyotgan transportga", "Har qanday ruxsat etilgan to'liq vazni 3,5 t dan ortiq yuk avtomobiliga", "Tirkamali har qanday yuk avtomobiliga", "Har qanday furgon kuzovli avtomobilga"],
  "Taqiq katta o'lchamli yuklarni, portlovchi, oson alangalanadigan, radioaktiv va yuqori xavfli moddalarni tashiyotgan transportga taalluqli emas (YHQ 179-band).");

// ===================== 3,5 t dan og'ir yuk avtomobillari uchun cheklovlar =====================
QC(["C","CE"], "catC", "Ruxsat etilgan to'liq vazni 10 t bo'lgan yuk avtomobili aholi punktidagi bir tomonlama yo'lning chap tomonida do'konga mol tushirish uchun to'xtadi. Bu:",
  ["Ruxsat etiladi", "Taqiqlanadi", "Faqat 5 daqiqagacha ruxsat etiladi", "Faqat tungi vaqtda ruxsat etiladi"],
  "Ruxsat etilgan to'liq vazni 3,5 t dan ko'p yuk transporti bir tomonlama yo'lning chap tomonida faqat yuk ortish va tushirish uchun to'xtashi mumkin (YHQ 88-band).");
QC(["C","CE"], "catC", "Ruxsat etilgan to'liq vazni 3,2 t bo'lgan yuk avtomobili aholi punktidagi bir tomonlama yo'lning chap tomonida to'xtab turishi mumkinmi?",
  ["Ha, umumiy qoida bo'yicha mumkin", "Yo'q, faqat yuk ortish-tushirish uchun", "Yo'q, yuk avtomobillariga bu taqiqlangan", "Faqat 5 daqiqadan oshmasa mumkin"],
  "Yuk ortish-tushirish bilan cheklash faqat 3,5 t dan og'ir yuk transportiga tegishli; qolganlarga aholi punktidagi bir tomonlama yo'lning chap tomonida to'xtash ruxsat etiladi (YHQ 88-band).");
QC(["C","CE"], "catC", "Bir yo'nalishda to'rt tasmali yo'lda tirbandlik tufayli boshqa tasmalar band. Yuk avtomobili to'g'riga harakatlanish uchun chetki chap tasmaga o'tishi mumkinmi?",
  ["Yo'q, faqat chapga burilish yoki qayrilish uchun mumkin", "Ha, serqatnovlikda barchaga ruxsat etiladi", "Ha, quvib o'tish maqsadida bo'lsa", "Ha, tezligi 40 km/soatdan ortiq bo'lsa"],
  "Yuk avtomobillariga chetki chap qatorni faqat chapga burilish yoki qayrilib olish uchun egallash ruxsat etiladi, boshqa hollarda taqiqlanadi (YHQ 67-band).");
QC(["C","CE"], "catC", "Avtomagistralda o'ng tasmalar band; 20 t yuk avtomobili quvib o'tish uchun chetki chap qatorga chiqmoqchi. Bu:",
  ["Taqiqlanadi", "Ruxsat etiladi, quvib o'tish uchun", "Ruxsat etiladi, burilish ishorasi berilsa", "Ruxsat etiladi, tezlik 80 km/soatdan oshmasa"],
  "Avtomagistrallarda yuk avtomobillariga yo'lning chetki chap qatorida harakatlanish taqiqlanadi (YHQ 121-band).");
QC(["C","CE"], "catC", "Avtomagistralda yuk avtomobili haydovchisi dam olish uchun to'xtamoqchi. Qayerda to'xtashi mumkin?",
  ["5.15 yoki 6.11 belgilari bilan belgilangan maydonchalarda", "Yo'l yoqasida, avariya ishorasi va belgisini qo'yib", "Ajratuvchi bo'lakning texnologik uzilish joyida", "Chetki o'ng tasmada, gabarit chiroqlarini yoqib"],
  "Avtomagistrallarda 5.15 yoki 6.11 belgilari bilan belgilangan maxsus to'xtab turish maydonchalaridan boshqa joyda to'xtash taqiqlanadi (YHQ 121-band).");
QC(["C","CE"], "catC", "Yuk avtomobilida avtomagistraldan kerakli chiqish joyini o'tkazib yubordingiz. Qanday harakat qilasiz?",
  ["Keyingi chiqish joyigacha davom etasiz", "Yo'l yoqasi bo'ylab orqaga yurasiz", "Ajratuvchi bo'lak uzilishidan qayrilasiz", "Avariya ishorasi bilan orqaga yurasiz"],
  "Avtomagistrallarda orqaga harakatlanish va ajratuvchi bo'lakning texnologik uzilish joylarida qayrilib olish taqiqlanadi (YHQ 121-band).");
QC(["C","CE"], "catC", "Ruxsat etilgan to'liq vazni 6 t bo'lgan avtomobil haydovchisi uni tunga turar joy dahasida, belgilanmagan joyda qoldirmoqchi. Bu:",
  ["Taqiqlanadi", "Ruxsat etiladi, dvigatel o'chirilsa", "Ruxsat etiladi, piyodalarga xalaqit bermasa", "Ruxsat etiladi, gabarit chiroqlari yoqilsa"],
  "Turar joy dahalarida 3,5 t dan og'ir yuk avtomobillarining maxsus ajratilgan va belgilangan joylardan tashqarida to'xtab turishi taqiqlanadi (YHQ 124-band).");
QC(["C","CE"], "catC", "Turar joy dahasida yuk avtomobilini dvigateli ishlab turgan holda to'xtab turishga qoldirish:",
  ["Taqiqlanadi", "Ruxsat etiladi, kabinada haydovchi bo'lsa", "Ruxsat etiladi, 10 daqiqadan oshmasa", "Ruxsat etiladi, belgilangan joyda bo'lsa"],
  "Turar joy dahalarida dvigateli ishlab turgan holda to'xtab turish taqiqlanadi (YHQ 124-band).");
QC(["C","CE"], "catC", "Oldinda 3.4 «Yuk avtomobillarining harakatlanishi taqiqlangan» belgisi, unda «8t» ko'rsatilgan. Ruxsat etilgan to'liq vazni 6 t bo'lgan yuk avtomobili kirishi mumkinmi?",
  ["Mumkin, belgida ko'rsatilgandan yengil", "Mumkin emas, vazni 3,5 t dan ortiq", "Mumkin emas, barcha yuk avtomobillariga taqiqlangan", "Faqat yuk ortish-tushirish uchun mumkin"],
  "Belgida vazn ko'rsatilgan bo'lsa, ruxsat etilgan to'liq vazni shu ko'rsatilgandan ortiq yuk avtomobillarining harakati taqiqlanadi (YHQ 1-ilova, 3.4).");
QC(["C","CE"], "catC", "3.4 belgisi ta'sir oralig'ida joylashgan do'konga mol yetkazayotgan 10 t yuk avtomobili u yerga qanday kirishi mumkin?",
  ["Belgilangan joyga yaqin chorrahadan kirib-chiqib", "Kirishi mumkin emas, yukni boshqa joyda tushiradi", "Har qanday yo'ldan, avariya ishorasini yoqib", "Faqat DYHXX yozma ruxsati bilan"],
  "3.2–3.8 belgilari ta'sir oralig'idagi korxonalarga xizmat ko'rsatuvchi transportga ta'sir qilmaydi; ular belgilangan joyga yaqin chorrahadan kirib-chiqishi kerak (YHQ 1-ilova, 3.4).");
QC(["C","CE"], "catC", "3.11 «Vazn cheklangan» belgisida «20 t». Ruxsat etilgan to'liq vazni 25 t, ammo yuksiz haqiqiy vazni 14 t bo'lgan avtomobil o'tishi mumkinmi?",
  ["Mumkin — haqiqiy umumiy vazn hisobga olinadi", "Mumkin emas — ruxsat etilgan vazn 20 t dan ortiq", "Faqat DYHXX ruxsati bilan mumkin", "Faqat tirkamasi bo'lmasa mumkin"],
  "3.11 belgisi haqiqiy umumiy vazni belgida ko'rsatilganidan ortiq transportning harakatini taqiqlaydi (YHQ 1-ilova, 3.11).");
QC(["C","CE"], "catC", "3.12 belgisida «8 t». Uch o'qli avtomobilning umumiy vazni 20 t, har bir o'qqa tushadigan haqiqiy og'irlik 7 t dan oshmaydi. O'tish mumkinmi?",
  ["Mumkin — har bir o'qqa tushadigan og'irlik hisobga olinadi", "Mumkin emas — umumiy vazn 8 t dan ortiq", "Mumkin emas — uch o'qli avtomobillar taqiqlanadi", "Faqat yuk tushirilgandan keyin mumkin"],
  "3.12 belgisi har qanday o'qiga tushadigan haqiqiy og'irlik belgida ko'rsatilganidan ortiq transportni taqiqlaydi (YHQ 1-ilova, 3.12).");
QC(["C","CE"], "catC", "3.13 «Cheklangan balandlik» belgisida 3,8 m. Avtomobilingiz yuksiz 3,5 m, ortilgan yuk bilan 3,9 m. O'tish:",
  ["Mumkin emas — balandlik yuk bilan birga hisoblanadi", "Mumkin — kabina balandligi hisobga olinadi", "Mumkin — 0,1 m farq ahamiyatsiz", "Mumkin — juda sekin harakatlansa"],
  "3.13 belgisi gabarit balandligi (yuk bilan yoki yuksiz) ko'rsatilgandan ortiq transportni taqiqlaydi (YHQ 1-ilova, 3.13).");
QC(["C","CE"], "catC", "3.14 «Cheklangan kenglik» belgisida 2,5 m. Kuzov eni 2,45 m, yuk yon tomonlardan jami 0,2 m chiqib turibdi. O'tish:",
  ["Mumkin emas — yuk bilan kenglik 2,5 m dan ortiq", "Mumkin — kuzov eni 2,5 m dan kam", "Mumkin — yuk 0,4 m dan kam chiqqan", "Mumkin — belgi faqat avtobuslarga tegishli"],
  "3.14 belgisi gabarit kengligi (yuk bilan yoki yuksiz) ko'rsatilgandan ortiq transportni taqiqlaydi (YHQ 1-ilova, 3.14).");
QC(["C","CE"], "catC", "3.15 «Cheklangan uzunlik» belgisida 15 m. Uzunligi 17 m bo'lgan avtopoyezd:",
  ["Kira olmaydi", "Kira oladi — tirkama hisobga olinmaydi", "Kira oladi — 20 m gacha ruxsat etiladi", "Faqat yuksiz holatda kira oladi"],
  "3.15 belgisi gabarit uzunligi (yuk bilan yoki yuksiz) ko'rsatilgandan ortiq transport vositalari va ularning tarkiblarini taqiqlaydi (YHQ 1-ilova, 3.15).");
QC(["C","CE"], "catC", "3.22 belgisi ta'sir hududida 12 t yuk avtomobilida 30 km/soat tezlikda ketayotgan avtomobilni quvib o'tish mumkinmi?",
  ["Mumkin — 40 km/soatdan sekin transportni quvib o'tish taqiqlanmagan", "Mumkin emas — barcha transportni quvib o'tish taqiqlangan", "Mumkin — faqat aholi punkti ichida", "Mumkin emas — faqat traktorni quvib o'tish mumkin"],
  "3.22 belgisi 40 km/soatdan kam tezlikdagi transport, traktor, ot-arava va velosipedni quvib o'tishni taqiqlamaydi (YHQ 1-ilova, 3.22).");
QC(["C","CE"], "catC", "3.22 «Yuk avtomobillarida quvib o'tish taqiqlangan» belgisi hududida to'liq vazni 3 t bo'lgan yuk avtomobili yengil avtomobilni quvib o'tishi mumkinmi?",
  ["Mumkin — belgi 3,5 t dan og'ir yuk avtomobillariga tegishli", "Mumkin emas — belgi barcha yuk avtomobillariga tegishli", "Mumkin emas — faqat tirkamasizlarga ruxsat", "Mumkin — faqat tezligi 40 km/soatdan kam bo'lsa"],
  "3.22 belgisi to'liq vazni 3,5 t dan ortiq yuk avtomobillarida quvib o'tishni taqiqlaydi (YHQ 1-ilova, 3.22).");
QC(["C","CE"], "catC", "Tezligini 40 km/soatdan oshira olmaydigan transport vositasi chetki o'ng qatordan qaysi maqsadda chiqishi mumkin EMAS?",
  ["Chap tasma bo'shligi uchun unda harakatni davom ettirish", "Oldindagi transportni quvib o'tish", "Chapga burilish yoki qayrilib olish", "Ruxsat etilgan hollarda chap tomonda to'xtash"],
  "Bunday transport faqat aylanib o'tish, quvib o'tish, chapga burilish, qayrilish yoki ruxsat etilgan hollarda chapda to'xtash uchun qayta tiziladi (YHQ 68-band).");
QC(["C","CE"], "catC", "Siz uzunligi 16 m bo'lgan avtopoyezdda aholi punkti ichidagi ikki tasmali ikki tomonlama ko'chadasiz. 74-banddagi «quvib o'tuvchilar uchun joy qoldirish» talabi:",
  ["Qo'llanilmaydi — u aholi punktidan tashqarida amal qiladi", "Qo'llaniladi — barcha yo'llarda amal qiladi", "Qo'llaniladi — faqat oldindagi ham uzun bo'lsa", "Qo'llaniladi — tezlik 50 km/soatdan oshsa"],
  "Talab aholi yashash joylaridan tashqaridagi ikki tasmali ikki tomonlama yo'llarda amal qiladi (YHQ 74-band).");
QC(["C","CE"], "catC", "Uzunligi 6,5 m, eng yuqori tezligi 90 km/soat bo'lgan yuk avtomobiliga 74-banddagi masofa talabi taalluqlimi?",
  ["Yo'q, taalluqli emas", "Ha — barcha yuk avtomobillariga taalluqli", "Ha — vazni 3,5 t dan ortiq bo'lsa", "Ha — faqat yuk ortilgan bo'lsa"],
  "74-band tezligini 50 km/soatdan oshira olmaydigan yoki uzunligi 7 m dan ortiq transport haydovchilariga tegishli (YHQ 74-band).");
QC(["C","CE"], "catC", "Yuk ortilgan avtomobilda 1.13 «Tik nishablik» belgisi bilan belgilangan uzun nishablikdan tushyapsiz. Yoqilg'i tejash uchun neytral uzatmada tushish:",
  ["Taqiqlanadi", "Ruxsat etiladi, tormozlar soz bo'lsa", "Ruxsat etiladi, tezlik 40 km/soatdan oshmasa", "Ruxsat etiladi, yuk 10 t dan kam bo'lsa"],
  "1.13 belgisi bilan belgilangan yo'l qismida uzatma va ilashish mexanizmi ajratilgan holatda harakatlanish taqiqlanadi (YHQ 130-band).");
QC(["C","CE"], "catC", "5.40 belgisi qanday nomlanadi?",
  ["«Falokatli holatlar uchun kirish yo'li»", "«Yuk avtomobillari to'xtash joyi»", "«Tormozlarni tekshirish joyi»", "«Yuk avtomobillari uchun tasma»"],
  "5.40 «Falokatli holatlar uchun kirish yo'li» — tormozi ishlamay qolgan transportni to'xtatish uchun mo'ljallangan yo'l (YHQ 1-ilova, 5.40).");
QC(["C","CE"], "catC", "Siz yuk bilan tik balandlikka (1.14) ko'tarilyapsiz; qarama-qarshi harakatni qiyinlashtiruvchi to'siq bor, yuqoridan yengil avtomobil tushmoqda. Kim yo'l beradi?",
  ["Pastga tushayotgan yengil avtomobil", "Siz, chunki yuk avtomobili sekinroq", "Siz, chunki og'irroq transport yo'l beradi", "Kim birinchi yetib kelsa, o'sha o'tadi"],
  "1.13 va 1.14 belgilari bilan belgilangan qiyaliklarda nishablikka (pastga) harakatlanayotgan haydovchi yo'l berishi kerak (YHQ 128-band).");
QC(["C","CE"], "catC", "Uzun avtopoyezd bilan temir yo'l kesishmasiga yaqinlashdingiz; kesishmadan keyin tirbandlik bor, avtopoyezd to'liq sig'maydi. Kesishmaga kirish:",
  ["Taqiqlanadi", "Ruxsat etiladi, svetofor yashil bo'lsa", "Ruxsat etiladi, shlagbaum ochiq bo'lsa", "Ruxsat etiladi, poyezd ko'rinmasa"],
  "Kesishmadan keyin haydovchini kesishmada to'xtashga majbur qiladigan tirbandlik bo'lsa, kesishmaga kirish taqiqlanadi (YHQ 118-band).");
QC(["C","CE"], "catC", "Yuk avtomobili nosoz avtomobilni egiluvchan ulagich bilan shatakka oldi; tarkibning ulagich bilan umumiy uzunligi 22 m. Bu:",
  ["Taqiqlanadi — 20 m dan oshmasligi kerak", "Ruxsat etiladi — 25 m gacha mumkin", "Ruxsat etiladi — tezlik 50 km/soat bo'lsa", "Ruxsat etiladi — kunduzi yaqin yorug'lik bilan"],
  "Shatakka olgan va olingan transportning ulagich bilan umumiy uzunligi 20 m dan ortiq bo'lsa, shatakka olish taqiqlanadi (YHQ 145-band).");
QC(["C","CE"], "catC", "Ishchi tormozi ishlamayotgan, haqiqiy vazni 9 t bo'lgan yuk avtomobilini haqiqiy vazni 15 t bo'lgan yuk avtomobili shatakka olmoqchi. Bu:",
  ["Taqiqlanadi", "Ruxsat etiladi — faqat qattiq ulagich bilan", "Ruxsat etiladi — egiluvchan ulagich bilan", "Ruxsat etiladi — tezlik 30 km/soatdan oshmasa"],
  "Ishchi tormozi ishlamayotgan transportning haqiqiy vazni tortuvchinikining yarmidan ortiq bo'lsa (9 t > 7,5 t), shatakka olish taqiqlanadi (YHQ 145-band).");
QC(["C","CE"], "catC", "Avtokorxona mexanigi tormoz tizimi nosoz yuk avtomobilini «yaqin masofa» deb reysga chiqarmoqchi. Bu:",
  ["Taqiqlanadi", "Ruxsat etiladi — haydovchi rozi bo'lsa", "Ruxsat etiladi — shahar ichida qolsa", "Ruxsat etiladi — yuksiz harakatlansa"],
  "Transport texnik holatiga javobgar shaxslarga texnik nosoz transport vositalarini yo'lga chiqarish taqiqlanadi (YHQ 180-band).");
QC(["C","CE"], "catC", "Dispetcher xavfsizlikka tahdid soladigan darajada charchagan haydovchini yuk avtomobilida reysga qo'ymoqchi. Bu:",
  ["Taqiqlanadi", "Ruxsat etiladi, reys qisqa bo'lsa", "Ruxsat etiladi, tezlik cheklansa", "Ruxsat etiladi, haydovchi o'zi rozi bo'lsa"],
  "Charchoq yoki betoblik holatidagi shaxslarni transport vositasini boshqarishga qo'yish taqiqlanadi (YHQ 180-band).");

// ===================== 3-ilova: nosozliklar va jihozlar =====================
QC(["C","CE"], "catC", "Ruxsat etilgan to'liq vazni 14 t bo'lgan yuk avtomobilining shinasida protektor naqshining qoldiq balandligi 1,2 mm. Foydalanish:",
  ["Ruxsat etiladi — N3 uchun chegara 1,0 mm", "Taqiqlanadi — chegara 1,6 mm", "Taqiqlanadi — chegara 2,0 mm", "Taqiqlanadi — chegara 1,5 mm"],
  "N2, N3, O3, O4 toifalari uchun protektor qoldiq balandligi 1,0 mm dan kam bo'lsa foydalanish taqiqlanadi (YHQ 3-ilova, 5.1).");
QC(["C","CE"], "catC", "Tirkama shinalari protektor naqshining qoldiq balandligiga qanday me'yor qo'llaniladi?",
  ["Shatakchi transport shinalari uchun belgilangan me'yor", "Har doim 1,6 mm, tortuvchidan qat'i nazar", "Har doim 0,8 mm, tortuvchidan qat'i nazar", "Tirkama shinalari uchun me'yor belgilanmagan"],
  "Tirkamalar shinasi naqshlarining qoldiq balandligi shatakchi transport shinalari uchun belgilangan me'yor kabidir (YHQ 3-ilova, 5.1).");
QC(["C","CE"], "catC", "Yuk avtomobilining qo'shaloq shinalari orasiga katta tosh qisilib qoldi. 3-ilovaga ko'ra:",
  ["Bu foydalanishni taqiqlovchi holat", "Shina bosimi me'yorda bo'lsa ruxsat", "Faqat yuksiz harakatlanish ruxsat", "Faqat 40 km/soatgacha harakat ruxsat"],
  "Qo'shaloq shinalar orasiga xavf tug'diruvchi begona jismlar qisilib qolgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.3).");
QC(["C","CE"], "catC", "Kapotsiz tuzilishli N3 magistral tyagachining oldingi o'qiga qayta tiklangan shinalar o'rnatish:",
  ["Taqiqlanadi", "Ruxsat etiladi", "Faqat yozgi mavsumda ruxsat etiladi", "Faqat bitta g'ildirakka ruxsat etiladi"],
  "N2 va N3 toifadagi kapotsiz magistral tyagachlarning oldingi o'qiga qayta tiklangan shinalar o'rnatilgan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 5.6).");
QC(["C","CE"], "catC", "Pnevmatik tormoz yuritmasining manometri ishlamay qoldi. 3-ilovaga ko'ra:",
  ["Transport vositasidan foydalanish taqiqlanadi", "Bosim pasaymasa foydalanish mumkin", "Faqat tirkamasiz foydalanish mumkin", "Faqat yuksiz foydalanish mumkin"],
  "Pnevmatik yoki pnevmogidravlik tormoz yuritmasining manometri ishlamasa, foydalanish taqiqlanadi (YHQ 3-ilova, 1.5).");
QC(["C","CE"], "catC", "Yuk avtomobilining g'ildiragidagi tormoz kamerasidan siqilgan havo chiqayotgani eshitilmoqda. Bu:",
  ["Foydalanishni taqiqlovchi nosozlik", "Kompressor ishlasa, ruxsat etilgan holat", "Faqat yuk ortilganda taqiqlanadigan holat", "Faqat qishda taqiqlanadigan holat"],
  "G'ildiraklardagi tormoz kameralaridan siqilgan havo chiqishi foydalanishni taqiqlovchi nosozlikdir (YHQ 3-ilova, 1.4).");
QC(["C","CE"], "catC", "Dvigatel o'chiq holda pnevmatik tormoz yuritmasida belgilangan vaqt ichida havo bosimi qanchadan ko'p pasaysa, foydalanish taqiqlanadi?",
  ["0,05 MPa", "0,5 MPa", "0,1 MPa", "0,01 MPa"],
  "Bosimning 30 daqiqada (boshqaruv ulanmagan) yoki 15 daqiqada (ulangan) 0,05 MPa dan ko'p pasayishi taqiqlovchi nosozlikdir (YHQ 3-ilova, 1.4).");
QC(["C","CE"], "catC", "Yuk avtomobilida konstruksiyasida ko'zda tutilgan taxograf ishlamaydi. 3-ilovaga ko'ra:",
  ["Foydalanish taqiqlanadi", "Spidometr ishlasa, ruxsat etiladi", "Faqat xalqaro reyslarda taqiqlanadi", "Faqat yo'lovchi tashishda taqiqlanadi"],
  "Konstruksiyada ko'zda tutilgan taxograf ishlamasa, transport vositasidan foydalanish taqiqlanadi (YHQ 3-ilova, 7.5).");
QC(["C","CE"], "catC", "Bortli yuk avtomobilida yuk platformasi bortining yopqichi ishlamaydi. Bu:",
  ["Foydalanishni taqiqlovchi nosozlik", "Yuksiz holatda ahamiyatsiz kamchilik", "Faqat sochiluvchan yukda taqiqlovchi", "Faqat odam tashishda taqiqlovchi"],
  "Yuk platformasi bortlarining yopqichlari ishlamasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.5).");
QC(["C","CE"], "catC", "Konstruksiyasida ko'zda tutilgan orqa himoya vositasi va loy to'sgichlari yo'q yuk avtomobilidan foydalanish:",
  ["Taqiqlanadi", "Ruxsat etiladi, quruq yo'lda", "Ruxsat etiladi, shahar ichida", "Ruxsat etiladi, tirkama bo'lmasa"],
  "Konstruksiyada ko'zda tutilgan orqa himoya vositasi va loy to'sgichlar bo'lmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.7).");
QC(["C","CE"], "catC", "Yuk avtomobili va tirkamalarda kuzov gabaritini belgilovchi nur qaytargichlar qanday bo'lishi shart?",
  ["Yon tomonda zarg'aldoq, orqada qizil", "Yon tomonda oq, orqada qizil", "Yon tomonda qizil, orqada zarg'aldoq", "Yon tomonda sariq, orqada oq"],
  "Yuk avtomobillari va tirkamalarning yon tomoniga zarg'aldoq, orqasiga qizil gabarit nur qaytargichlari o'rnatilmagan bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 3.6).");
QC(["C","CE"], "catC", "N3 toifadagi yuk avtomobilida bo'lishi shart bo'lgan jihozlar to'plami:",
  ["Tibbiyot qutichasi, o't o'chirgich, avariya belgisi, jilet, 2 ta tirgak", "Tibbiyot qutichasi, 2 ta o't o'chirgich, oynani sindirish bolg'achasi", "O't o'chirgich, avariya belgisi, shatak arqoni va zaxira g'ildirak", "Tibbiyot qutichasi, jilet, zaxira g'ildirak va domkrat"],
  "N3 toifasida tibbiyot qutichasi, o't o'chirgich, avariya belgisi (yoki qizil chiroq), jilet hamda g'ildirak diametriga mos kamida ikkita tirgak bo'lishi kerak (YHQ 3-ilova, 7.10).");
QC(["C","CE"], "catC", "Tirkama bog'imida konstruksiyada ko'zda tutilgan ehtiyot po'lat arqon (zanjir) yo'q. Bu:",
  ["Foydalanishni taqiqlovchi nosozlik", "Faqat yuksiz tirkamada ruxsat etilgan holat", "Faqat avtomagistralda taqiqlanadigan holat", "Ulagich soz bo'lsa ruxsat etilgan holat"],
  "Tortish-tirkash moslamasi nosoz yoki ko'zda tutilgan ehtiyot po'lat arqon (zanjir) yo'q bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.9).");
QC(["C","CE"], "catC", "Yuk avtomobilining konstruksiyasida ko'zda tutilgan orqani ko'rsatuvchi tashqi ko'zgularidan biri yo'q. Foydalanish:",
  ["Taqiqlanadi — ko'zgular soni talabga mos emas", "Ruxsat etiladi — bitta ko'zgu yetarli", "Ruxsat etiladi — kunduzi yaxshi ko'rinishda", "Ruxsat etiladi — yordamchi kabinada bo'lsa"],
  "Orqa tomonni ko'rsatuvchi ko'zgular soni, joylashuvi va turi talablarga mos kelmasa, foydalanish taqiqlanadi (YHQ 3-ilova, 7.1).");
QC(["C","CE"], "catC", "Dizel yuk avtomobilining ishlatilgan gazlaridagi tutash darajasi belgilangan me'yordan ortiq. Bu:",
  ["Foydalanishni taqiqlovchi holat", "Faqat shaharda taqiqlanadigan holat", "Faqat texnik ko'rikda ahamiyatli holat", "Eski avtomobillar uchun ruxsat etilgan holat"],
  "Ishlatilgan gazlardagi zararli moddalar yoki tutash darajasi me'yordan ortiq bo'lsa, foydalanish taqiqlanadi (YHQ 3-ilova, 6.1).");
QC(["C","CE"], "catC", "Yuk ortilgan N3 avtomobilini qiyalikda qoldirib, haydovchi kabinadan uzoqlashmoqchi. Qoidalarga mos harakat:",
  ["Stoyanka tormozini va g'ildirak tirgaklarini qo'yadi", "Dvigatelni o'chirib, kalitni olib, eshiklarni qulflaydi", "Faqat avariya ishorasini yoqib qo'yadi", "Faqat neytral uzatmani qoldiradi"],
  "Haydovchi transportning o'z-o'zidan harakatlanib ketishini istisno qiladigan choralarni ko'rgandan keyingina uni qoldirishi mumkin; N3 uchun tirgaklar 3-ilovada majburiy jihoz sifatida ko'rsatilgan (YHQ 95-band).");

// ===================== Xavfsiz haydash tavsiyalari =====================
QC(["C","CE"], "catC", "Yuk avtomobili haydovchisi uchun eng katta «ko'rinmas zonalar» qayerda joylashgan?",
  ["Kabinaning o'ng yonida, bevosita old qismida va orqasida", "Faqat kabina tomining ustida va yonilg'i baki atrofida", "Faqat chap ko'zgu ostida", "Faqat old oynaning markazida, rul ortida"],
  "Baland kabina va uzun kuzov tufayli o'ng yon, bevosita old va orqa qism haydovchiga ko'rinmasligi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobili haydovchisi o'ng tomondagi ko'rinmas zonani qanday nazorat qilishi tavsiya etiladi?",
  ["Qo'shimcha ko'zgularni to'g'ri sozlab", "Har burilishda faqat tovushli ishora berib", "Faqat avariya ishorasini yoqib", "Tezlikni oshirib, zonani tezroq o'tib"],
  "Qo'shimcha ko'zgularni to'g'ri sozlash va muntazam kuzatish ko'rinmas zonalarni kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "O'ngga burilayotgan yuk avtomobilining o'ng tomonida harakatlanayotgan velosipedchi uchun asosiy xavf nimada?",
  ["Ko'rinmas zonada qolib, orqa g'ildirak ostiga tushishi", "Yuk avtomobili burilishda doim tezlikni oshirib yuboradi", "Velosipedchi har doim imtiyozga ega bo'ladi", "Yuk avtomobili chap tomonga og'adi"],
  "Burilishda orqa g'ildiraklar ichkariroqdan o'tadi va o'ng tomondagi velosipedchi ezilib qolishi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Uzun bazali yuk avtomobili burilganda orqa g'ildiraklar qanday iz chizadi?",
  ["Old g'ildiraklarga nisbatan burilish markaziga yaqinroq", "Old g'ildiraklar bilan aynan bir izdan", "Old g'ildiraklardan tashqariroqdan, bordyurdan uzoqroq", "Burilish yo'nalishiga teskari tomondan"],
  "Burilishda orqa g'ildiraklar «qisqaroq» yo'l bosib, burilish ichkarisiga suriladi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Tor ko'chada o'ngga burilishda orqa g'ildirak bordyurga chiqib ketmasligi uchun nima tavsiya etiladi?",
  ["Kechroq burib, o'ng ko'zguda orqa g'ildirakni kuzatish", "Rulni erta va keskin burib, burilishni tezroq tugatish", "Tezlikni oshirib, burilishni tez yakunlash", "Faqat oldinga qarab, ko'zgularga qaramaslik"],
  "Kechroq burish va o'ng ko'zgu orqali orqa g'ildirakni kuzatish orqa o'qning ichkariga surilishini hisobga olishga yordam beradi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Uzun orqa osilmali (svesli) yuk avtomobili joyidan burilib chiqayotganda orqa qismi qanday harakatlanadi?",
  ["Teskari tomonga chiqib, yon tasmani «supuradi»", "Burilish tomoniga, ichkariga kiradi", "Umuman yon tomonga siljimaydi", "Faqat orqaga yurishda yon tomonga chiqadi"],
  "Orqa osilma burilishda tashqariga chiqadi, shuning uchun yon tomondagi transport va to'siqlarni kuzatish kerak (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobilining massasi ortgani sari, bir xil tezlikdan to'xtash uchun tormozlarga tushadigan yuklama qanday o'zgaradi?",
  ["Ortadi, chunki harakat energiyasi massaga bog'liq", "Kamayadi, chunki shinalar yaxshiroq yopishadi", "O'zgarmaydi, faqat tezlik ahamiyatli", "Faqat nishablikda o'zgaradi"],
  "Og'ir avtomobilning harakat energiyasi katta bo'lib, uni so'ndirish uchun tormozlar ko'proq ishlaydi va qiziydi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobili haydovchisi oldindagi transport bilan oraliq masofani yengil avtomobilga nisbatan qanday saqlashi tavsiya etiladi?",
  ["Kattaroq, chunki to'xtash uchun ko'proq masofa kerak", "Kichikroq, chunki baland kabinadan yo'l uzoqroq ko'rinadi", "Bir xil, chunki tormoz tizimi kuchliroq", "Kichikroq, chunki tezlik cheklangan"],
  "Og'ir transport to'xtash uchun ko'proq masofa talab qiladi, shuning uchun oraliq masofa kattaroq saqlanadi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Uzun nishablikdan yuk bilan tushishda qaysi uzatma tavsiya etiladi?",
  ["Shu nishablikka chiqishda ishlatiladiganga yaqin past uzatma", "Eng yuqori uzatma, yoqilg'i tejash va tezlikni saqlash uchun", "Tushish davomida uzatmani ketma-ket oshirib borish", "Tezlik qaysi bo'lsa, shunga mos yuqori uzatma"],
  "Past uzatma dvigatel bilan tormozlash imkonini berib, asosiy tormozlarni qizib ketishdan saqlaydi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Uzun nishablikda tormozni uzluksiz bosib tushish natijasida tormozlar qizib ketsa, nima bo'ladi?",
  ["Tormoz samaradorligi keskin pasayadi", "Tormoz samaradorligi oshadi", "Faqat shinalar yeyilishi kamayadi", "Dvigatel quvvati ortadi"],
  "Qizib ketgan tormoz mexanizmlari ishqalanish kuchini yo'qotadi va avtomobil to'xtamay qolishi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobilidagi retarder yoki dvigatel tormozi asosan nima uchun ishlatiladi?",
  ["Tormozlarni qizdirmay tezlikni ushlab turish", "To'satdan to'xtash uchun asosiy vosita sifatida", "To'xtab turganda avtomobilni ushlab turish uchun", "Rul boshqaruvini yengillashtirish uchun"],
  "Yordamchi tormozlar uzoq nishablikda tezlikni nazorat qilib, ishchi tormozni favqulodda holatlar uchun «sovuq» saqlaydi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobilida uzun nishablikka tushishdan oldin uzatmani qachon pasaytirish kerak?",
  ["Nishablikdan oldin, tezlik hali past paytda", "Nishablik o'rtasida, tezlik oshib ketganda", "Tezlik 80 km/soatga yetgan paytda", "Nishablik tugashiga yaqin, tezlik pasaya boshlaganda"],
  "Tezlik oshib ketgach uzatmani pasaytirish qiyin va xavfli, shuning uchun bu nishablikdan oldin qilinadi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Pnevmatik tormozli yuk avtomobilida harakatni boshlashdan oldin nimaga ishonch hosil qilish kerak?",
  ["Tizimdagi havo bosimi ish me'yoriga yetganiga", "Shinalar to'liq sovib qolganiga", "Faralar o'chiq turganiga", "Yoqilg'i baki to'liq to'ldirilganiga"],
  "Havo bosimi yetarli bo'lmasa, tormozlar to'liq samara bermaydi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Harakat vaqtida havo bosimi pasayganligi haqidagi ogohlantirish yondi. Haydovchi nima qiladi?",
  ["Xavfsiz joyda to'xtab, sababini aniqlaydi", "Tezlikni oshirib, ustaxonaga shoshiladi", "Ogohlantirishga e'tibor bermay davom etadi", "Faqat dvigatel tormozi bilan reysni davom ettiradi"],
  "Pnevmatik tizimda bosim tushishi tormozlar ishdan chiqishiga olib kelishi mumkin, shuning uchun darhol xavfsiz to'xtash kerak (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobiliga yukni joylashtirishda og'irlik markazi qanday bo'lishi tavsiya etiladi?",
  ["Iloji boricha past, o'qlar orasida teng taqsimlangan", "Iloji boricha baland, kabinaga yaqin", "Orqa bortga yaqin, bir joyga to'plangan", "Bir yon tomonga surilgan, lekin mahkam bog'langan holda"],
  "Past va teng taqsimlangan og'irlik barqarorlikni oshiradi, ag'darilish xavfini kamaytiradi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "To'liq to'ldirilmagan sisternali avtomobil keskin tormozlaganda nima sodir bo'lishi mumkin?",
  ["Suyuqlik to'lqini avtomobilni oldinga itaradi", "Suyuqlik avtomobilni tezroq to'xtatadi", "Tormoz yo'li sezilarli qisqaradi", "Faqat orqa o'qqa tushadigan yuklama biroz ortadi"],
  "Sisternadagi suyuqlik chayqalishi tormozlash va burilishda qo'shimcha kuch hosil qilib, boshqaruvni qiyinlashtiradi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Osilgan yuk (masalan, ilmoqlardagi go'sht tushalari) tashishda burilishlarda nima xavfli?",
  ["Yuk chayqalib, ag'darilish xavfini oshiradi", "Yuk avtomobilni barqarorroq qiladi", "Tormoz yo'li qisqaradi", "Faqat yoqilg'i sarfi ortadi"],
  "Osilgan yuk burilishda yon tomonga chayqalib, og'irlik markazini siljitadi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Baland ortilgan yuk avtomobilida ag'darilish xavfi qaysi holatda eng yuqori?",
  ["Burilish va aylanma harakatda yuqori tezlikda", "To'g'ri yo'lda past tezlikda", "Tepalikka sekin ko'tarilishda", "Tekis maydonda yuk ortish paytida to'xtab turganda"],
  "Baland og'irlik markazi va markazdan qochma kuch burilishda ag'darilish xavfini keskin oshiradi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Ag'darilish xavfini kamaytirish uchun yuk avtomobilida burilishga qanday kirish tavsiya etiladi?",
  ["Tezlikni burilishdan oldin kamaytirib", "Burilish ichida keskin tormoz berib", "Burilishga tezlikni oshirib kirib", "Burilishni neytral uzatmada o'tib"],
  "Tezlikni burilishdan oldin pasaytirish va burilishda keskin harakatlardan saqlanish barqarorlikni saqlaydi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Kuchli yon shamolda qaysi yuk avtomobillari ko'proq xavf ostida bo'ladi?",
  ["Yuksiz baland furgon va tentli avtomobillar", "To'liq ortilgan past bortli avtomobillar", "To'liq to'ldirilgan sisternalar", "Og'ir yuk ortilgan samosvallar"],
  "Katta yon yuzali va yengil avtomobilni shamol osonroq surib yoki ag'darib yuborishi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Ochiq ko'prikda kuchli yon shamol esmoqda. Bo'sh furgon haydovchisi nima qilishi tavsiya etiladi?",
  ["Tezlikni kamaytirib, rulni mahkam ushlash", "Tezlikni oshirib, ko'prikdan tezroq o'tish", "Qarama-qarshi tasmaga yaqinroq yurish", "Rulni bo'sh ushlab, avtomobilni erkin qo'yish"],
  "Past tezlik va rulni mahkam ushlash shamol zarbalarida yo'nalishni saqlashga yordam beradi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yuk avtomobili quvib o'tishni yakunlab, o'z tasmasiga qachon qaytishi tavsiya etiladi?",
  ["Quvib o'tilgan transport ko'zguda to'liq ko'ringanda", "Kabina quvib o'tilgan transport bilan tenglashishi bilan", "Darhol, burilish ishorasini bermasdan", "Quvib o'tilgan haydovchi tovush ishorasi berganda"],
  "Uzun avtomobil quvib o'tilgan transport oldini kesib qo'ymasligi uchun u ko'zguda to'liq ko'rinmaguncha qaytmaslik kerak (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Yordamchi bo'lmaganda yuk avtomobilini orqaga yurgizishdan oldin nima tavsiya etiladi?",
  ["Kabinadan tushib, orqadagi joyni ko'zdan kechirish", "Faqat tovushli ishora berib yurish", "Manyovrni qisqartirish uchun tezroq yurish", "Ko'zgularni yig'ib, faqat kameraga tayanish"],
  "Orqa qism haydovchiga ko'rinmaydi, shuning uchun manyovrdan oldin joyni shaxsan ko'zdan kechirish xavfsizroq (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Ko'prik ostidan yoki tunneldan o'tishdan oldin yuk avtomobili haydovchisi nimani aniq bilishi kerak?",
  ["Avtomobilning yuk bilan birga balandligini", "Faqat kuzovning ichki hajmi va yuk sig'imini", "Faqat dvigatel quvvatini", "Faqat o'qlar sonini"],
  "Yuk bilan birga balandlikni bilish 3.13 belgilari va past inshootlarga urilishning oldini oladi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Sirpanchiq yo'lda yarim tirkamali avtopoyezd keskin tormozlaganda qanday xavf yuzaga keladi?",
  ["Avtopoyezd «buklanib» qolishi, tirkama oldinga surilishi", "Tormoz yo'li sezilarli darajada qisqarib ketishi", "Tirkama ulagichdan avtomatik ravishda ajralib qolishi", "Faqat old g'ildiraklar yeyilishi"],
  "Sirpanchiq yo'lda keskin tormozlash shatakchi va yarim tirkamaning buklanishiga (jackknife) olib kelishi mumkin (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Ho'l yoki muzli yo'lda yuk avtomobili oraliq masofani qanday o'zgartirishi tavsiya etiladi?",
  ["Quruq yo'ldagiga nisbatan bir necha marta oshiradi", "Quruq yo'ldagidek saqlaydi", "Yaxshi ko'rinish uchun qisqartiradi", "Faqat yuksiz harakatlanayotgan bo'lsa oshiradi"],
  "Sirpanchiq yo'lda tormozlanish yo'li ancha uzayadi, shuning uchun masofa ko'paytiriladi (Xavfsiz haydash tavsiyalari).");
QC(["C","CE"], "catC", "Svetoforda to'xtab turgan yuk avtomobili oldidan piyoda kesib o'tgan bo'lishi mumkin. Harakatni boshlashdan oldin haydovchi:",
  ["Old ko'zgu orqali oldida hech kim yo'qligiga ishonch hosil qiladi", "Svetofor yashil yonishi bilan darhol keskin harakatlanib ketadi", "Faqat tovushli ishora berib harakatlanadi", "Faqat chap ko'zguga qarab harakatlanadi"],
  "Baland kabina tufayli bevosita old qism ko'rinmasligi mumkin, shuning uchun old ko'zgudan foydalanish kerak (Xavfsiz haydash tavsiyalari).");
