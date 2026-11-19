// q/b_signals.js — Svetofor, tartibga soluvchi, ogohlantiruvchi ishoralar, maxsus transport (YHQ 6–8, 22-boblar)

// ===================== LIGHTS (YHQ 7-bob) =====================
Q("lights", "Svetoforlarda qaysi rangdagi yorug'lik ishoralari qo'llaniladi?",
  ["Yashil, sariq, qizil va oq", "Yashil, sariq, qizil va ko'k", "Faqat yashil, sariq va qizil", "Yashil, sariq, qizil va zarg'aldoq"],
  "30-bandga ko'ra svetoforlarda to'rt rang: yashil, sariq, qizil va oq ishoralar qo'llaniladi; oq rang tramvay va temir yo'l kesishmasi svetoforlarida uchraydi (YHQ 30-band).");
Q("lights", "Quyidagi shakllardan qaysi biri YHQ 30-bandida svetofor ishorasi shakli sifatida sanab o'tilmagan?",
  ["Uchburchak shaklidagi", "X-simon", "Velosiped tasviri tushirilgan", "Ko'rsatkich (yo'naltirgich) ko'rinishidagi"],
  "Svetofor ishoralari doirasimon, ko'rsatkich, piyoda yoki velosiped tasviri tushirilgan va X-simon bo'lishi mumkin; uchburchak shakli nazarda tutilmagan (YHQ 30-band).");
Q("lights", "Doirasimon svetoforda qo'shimcha tarmoqlar qayerda joylashadi va ular nechta bo'lishi mumkin?",
  ["Yashil ishora sathida, bitta yoki ikkita", "Qizil ishora sathida, bitta yoki ikkita", "Sariq ishora sathida, bitta yoki ikkita", "Yashil ishora sathida, uchtagacha"],
  "Qo'shimcha tarmoqlar yashil ishora bilan bir sathda joylashgan, yashil ko'rsatkich ko'rinishidagi bitta yoki ikkita tarmoq bo'lishi mumkin (YHQ 30-band).");
Q("lights", "Svetoforning miltillovchi yashil ishorasi nimani bildiradi?",
  ["Harakatlanishga ruxsat beradi va tez orada taqiqlovchi ishora yonishini bildiradi", "Harakatlanishni taqiqlaydi va tez orada sariq ishora yonishini bildiradi", "Faqat chorrahaga kirib bo'lganlarga harakatni tugallashga ruxsat beradi", "Ehtiyotkorlik bilan harakatlanishga ruxsat beradi va tartibga solinmagan chorrahani bildiradi"],
  "Miltillovchi yashil ham harakatlanishga ruxsat beradi, lekin uning ta'sir vaqti tugayotganini va ko'p o'tmay taqiqlovchi ishora yonishini bildiradi (YHQ 31-band).");
Q("lights", "Svetofor yonidagi raqamli tablo YHQ 31-bandiga ko'ra nima haqida axborot beradi?",
  ["Yashil ishora o'chishiga necha soniya qolganligi haqida", "Keyingi chorrahagacha qolgan masofa (metrda) haqida", "Chorrahada ruxsat etilgan eng yuqori tezlik haqida", "Keyingi svetoforgacha bo'lgan yurish vaqti haqida"],
  "Raqamli tablo yashil ishora o'chishiga soniyalarda qancha vaqt qolganligi haqida axborot berish uchun qo'llanilishi mumkin (YHQ 31-band).");
Q("lights", "Svetoforning sariq (miltillamaydigan) doirasimon ishorasi nimani bildiradi?",
  ["Harakatni taqiqlaydi (42-band holatlaridan tashqari) va ishoralar almashuvidan ogohlantiradi", "Ehtiyotkorlik bilan harakatlanishga ruxsat beradi va xavf-xatardan ogohlantiradi", "Harakatni taqiqlaydi va ko'p o'tmay yashil ishora yonishi haqida axborot beradi", "Faqat chorrahaga kirib bo'lganlarga ruxsat beradi, boshqalarga harakatni taqiqlaydi"],
  "Sariq ishora harakatlanishni taqiqlaydi (42-bandda ko'zda tutilgan holatlardan tashqari) va ishoralar almashuvi haqida ogohlantiradi (YHQ 31-band).");
Q("lights", "Svetoforning miltillovchi sariq ishorasi nimani bildiradi?",
  ["Ehtiyotkorlik bilan harakatga ruxsat beradi, tartibga solinmagan chorraha yoki o'tish joyidan ogohlantiradi", "Harakatni taqiqlaydi va ko'p o'tmay qizil ishora yonishidan, ishoralar almashuvidan ogohlantiradi", "Harakatlanishga ruxsat beradi va yashil ishoraning ta'sir vaqti tugab, taqiqlovchi ishora yonishini bildiradi", "Harakatni taqiqlaydi va svetofor nosozligidan xabar beradi"],
  "Miltillovchi sariq ishora ehtiyotkorlik choralarini ko'rgan holda harakatlanishga ruxsat beradi va tartibga solinmagan chorraha yoki piyodalar o'tish joyi borligidan xabardor qiladi (YHQ 31-band).");
Q("lights", "Chorrahadagi barcha svetoforlarda faqat miltillovchi sariq ishora yonib-o'chmoqda. Bu chorraha qanday hisoblanadi?",
  ["Tartibga solinmagan; imtiyoz belgilari va tartibga solinmagan chorraha qoidalariga amal qilinadi", "Tartibga solingan; svetofor ishorasi imtiyoz belgilaridan ustun turadi", "Tartibga solingan; barcha haydovchilar to'xtab, so'ng navbat bilan o'tadi", "Tartibga solinmagan; imtiyoz belgilari e'tiborga olinmaydi, faqat «o'ng qo'l» qoidasi amal qiladi"],
  "Miltillovchi sariq ishora yonib-o'chayotgan chorraha tartibga solinmagan hisoblanadi va haydovchilar tartibga solinmagan chorraha qoidalari hamda imtiyoz belgilariga amal qiladi (YHQ 98-band).");
Q("lights", "Svetoforning miltillovchi qizil ishorasi qanday ma'noga ega?",
  ["Oddiy qizil ishora kabi harakatlanishni taqiqlaydi", "Ehtiyotkorlik bilan harakatlanishga ruxsat beradi", "Faqat tramvaylar harakatini taqiqlaydi", "Ishoralar tez orada almashishini bildiradi, harakat mumkin"],
  "YHQ bo'yicha qizil ishora, shuningdek, miltillovchi qizil ishora ham harakatlanishni taqiqlaydi (YHQ 31-band).");
Q("lights", "Svetoforda qizil va sariq ishoralar bir vaqtda yondi. Haydovchi nima qilishi kerak?",
  ["Joyida turishi kerak: harakat taqiqlangan, tez orada yashil yonadi", "Harakatni boshlashi mumkin, chunki yashil yonish arafasida", "Faqat o'ngga burilishi mumkin", "Ehtiyotkorlik bilan chorrahaga kirishi mumkin, chunki yashil yonish arafasida"],
  "Qizil va sariq ishoralarning bir vaqtda yonishi harakatlanishni taqiqlaydi va ko'p o'tmay yashil ishora yonishi haqida axborot beradi (YHQ 31-band).");
Q("lights", "Yo'naltirgich (strelka) ko'rinishidagi qizil, sariq va yashil ishoralar qanday ma'noga ega?",
  ["Doirasimon ishoralar bilan bir xil, lekin faqat ko'rsatilgan yo'nalishga ta'sir etadi", "Doirasimon ishoralar bilan bir xil va barcha yo'nalishlarga ta'sir etadi", "Faqat yo'nalishli transport vositalariga va tramvaylarga taalluqli", "Doirasimon ishoralardan farqli ma'noga ega va faqat qo'shimcha tarmoqlarda qo'llaniladi"],
  "Yo'naltirgich ko'rinishidagi ishoralar doirasimon ishoralar bilan bir xil ma'noga ega bo'lib, faqat ko'rsatilgan yo'nalishga ta'sir etadi (YHQ 32-band).");
Q("lights", "Chapga burilishga ruxsat beruvchi yashil yo'naltirgich yonmoqda, belgi bilan qayrilib olish taqiqlanmagan. Qayrilib olish mumkinmi?",
  ["Mumkin, chapga yo'naltirgich qayrilib olishga ham ruxsat beradi", "Mumkin emas, yo'naltirgich faqat chapga burilishga ruxsat beradi", "Faqat qo'shimcha tarmoqda alohida qayrilish strelkasi bo'lsa mumkin", "Faqat asosiy ishora ham yashil bo'lsa mumkin"],
  "Agar tegishli yo'l belgisi bilan qayrilib olish taqiqlanmagan bo'lsa, chapga burilishga ruxsat beruvchi yo'naltirgich qayrilib olishga ham ruxsat beradi (YHQ 32-band).");
Q("lights", "Qo'shimcha tarmoqdagi chapga yo'naltirilgan yashil strelka yondi, qayrilib olish taqiqlovchi belgi o'rnatilgan. Nima qilish mumkin?",
  ["Faqat chapga burilish mumkin, qayrilib olish mumkin emas", "Chapga burilish ham, qayrilib olish ham mumkin", "Faqat qayrilib olish mumkin, burilish emas", "Asosiy ishora yashil yongunga qadar kutish kerak"],
  "Chapga yo'naltirgich qayrilib olishga faqat tegishli yo'l belgisi bilan taqiqlanmagan bo'lsa ruxsat beradi; belgi taqiqlagan bo'lsa, faqat chapga burilish mumkin (YHQ 32-band).", "nouturn");
Q("lights", "Svetoforning qo'shimcha tarmog'idagi ishora o'chirilgan. Bu nimani bildiradi?",
  ["Shu tarmoq tartibga solayotgan yo'nalishda harakatlanish taqiqlangan", "Shu yo'nalishda asosiy ishoraga qarab harakatlanish mumkin", "Svetofor nosoz, chorraha tartibga solinmagan hisoblanadi", "Shu yo'nalishda ehtiyotkorlik bilan, yo'l berib harakatlanish mumkin"],
  "Qo'shimcha tarmoqdagi ishora o'chirilgan bo'lsa, shu tarmoq tartibga solayotgan yo'nalishda harakatlanish taqiqlanganligini bildiradi (YHQ 32-band).");
Q("lights", "Asosiy ishora qizil, qo'shimcha tarmoqda o'ngga yashil strelka yonmoqda. Siz o'ngga burilyapsiz. Qanday harakatlanasiz?",
  ["O'ngga burilaman, boshqa yo'nalishlardan harakatlanayotganlarga yo'l beraman", "O'ngga burilaman, strelka yonganda boshqa yo'nalishlardagilar menga yo'l berishi shart", "Asosiy yashil ishorani kutaman", "Faqat to'xtash chizig'ida to'xtab olgandan keyin burilaman"],
  "Qizil yoki sariq ishora bilan bir vaqtda yongan qo'shimcha tarmoqning yashil ko'rsatkichi yo'nalishida harakatlanayotgan haydovchi boshqa yo'nalishlardan harakatlanayotgan transport vositalariga yo'l berishi kerak (YHQ 100-band).");
Q("lights", "Svetoforning asosiy yashil ishorasiga qora yo'naltirgichlar shakli tushirilgan. Bu nimani bildiradi?",
  ["Qo'shimcha tarmoq borligini va asosiy yashil ishorada ruxsat etilgan yo'nalishlarni", "Ko'rsatilgan yo'nalishlarda harakatlanish taqiqlanganligini va ular uchun alohida svetofor borligini", "Svetofor faqat yo'nalishli transport uchun ekanligini", "Ko'rsatilgan yo'nalishlarda imtiyoz berilganligini"],
  "Asosiy yashil ishoradagi yo'naltirgichlar qo'shimcha tarmoq borligi haqida axborot beradi va asosiy yashil ishorada ruxsat berilgan yo'nalishlarni ko'rsatadi (YHQ 33-band).");
Q("lights", "Asosiy yashil ishorada faqat «to'g'riga» va «o'ngga» yo'naltirgichlari tasvirlangan, chap tomonda qo'shimcha tarmoq o'chiq. Chapga burilish mumkinmi?",
  ["Yo'q, chapga harakatlanish taqiqlangan", "Ha, asosiy yashil ishora barcha yo'nalishlarga ruxsat beradi", "Ha, qarama-qarshi oqimga yo'l bersangiz", "Ha, faqat qayrilib olish mumkin"],
  "Asosiy yashil ishoradagi yo'naltirgichlar ruxsat berilgan yo'nalishlarni ko'rsatadi, qo'shimcha tarmoqning o'chiq ishorasi esa shu yo'nalishda harakatni taqiqlaydi (shuningdek, 32-band) (YHQ 33-band).");
Q("lights", "Piyoda tasviri tushirilgan svetofor ishorasi kimlarning harakatiga ta'sir qiladi?",
  ["Faqat piyodalarning", "Piyodalar va velosipedchilarning", "Piyodalar va o'ngga burilayotgan haydovchilarning", "Barcha yo'l harakati ishtirokchilarining"],
  "Piyoda tasviri ko'rinishidagi svetofor ishorasi faqat piyodalarga ta'sir qiladi (YHQ 34-band).");
Q("lights", "Velosiped tasviri tushirilgan svetofor ishorasi kimlarga ta'sir qiladi?",
  ["Velosipedchilar va individual harakatlanish vositalarini boshqargan shaxslarga", "Velosipedchilar, moped va mototsikl haydovchilariga", "Velosipedchilar va o'ng chetki tasmada harakatlanayotgan mopedlarga", "Velosipedchilar hamda velosiped yo'lkasini kesib o'tayotgan piyodalarga"],
  "Velosiped tasviri ko'rinishidagi ishora velosipedchilar va individual harakatlanish vositalarini boshqargan shaxslar harakatlanishiga ta'sir qiladi (YHQ 34-band).");
Q("lights", "Siz harakatlanayotgan tasma ustidagi reversiv svetoforda qizil «X» ishorasi yondi. Bu nimani bildiradi?",
  ["Shu tasmada harakatlanish taqiqlanadi", "Shu tasmada harakatlanishga ruxsat beriladi", "Shu tasmada faqat yo'nalishli transport harakatlanadi", "Shu tasmada tezlikni kamaytirish kerak"],
  "Reversiv svetofor ishoralari qaysi tasma ustiga o'rnatilgan bo'lsa, shu tasmada harakatlanishni taqiqlaydi (qizil X) yoki ruxsat beradi (yashil ko'rsatkich) (YHQ 35-band).");
Q("lights", "Tasma ustidagi reversiv svetoforda pastga yo'nalgan yashil ko'rsatkich yonmoqda. Bu nimani bildiradi?",
  ["Shu tasmada harakatlanishga ruxsat beriladi", "Shu tasmadan pastki (o'ng) tasmaga o'tish kerak", "Shu tasmada to'xtash kerak", "Shu tasmada faqat qarama-qarshi yo'nalishda harakatlaniladi"],
  "Pastga yo'nalgan yashil ko'rsatkich o'zi o'rnatilgan tasmada harakatlanishga ruxsat beradi (YHQ 35-band).");
Q("lights", "Ikki tomoni 1.9 yo'l chizig'i bilan belgilangan tasma ustidagi reversiv svetoforning ishoralari o'chirilgan. Bu tasmaga kirish mumkinmi?",
  ["Yo'q, bu tasmaga kirish taqiqlanadi", "Ha, chunki taqiqlovchi ishora yo'q", "Ha, faqat ehtiyotkorlik bilan", "Ha, faqat yo'nalishli transport uchun"],
  "1.9 chizig'i bilan belgilangan tasma ustidagi ishoralari o'chirilgan reversiv svetofor shu tasmaga kirishni taqiqlaydi (YHQ 35-band).");
Q("lights", "Tramvaylar harakatini tartibga soluvchi «T» harfi shaklidagi svetofor nechta va qanday rangdagi ishoralardan iborat?",
  ["To'rtta doirasimon oq ishoradan", "Uchta doirasimon oq ishoradan", "To'rtta doirasimon sariq ishoradan", "Beshta oq ko'rsatkichdan"],
  "Tramvaylar uchun «T» harfi ko'rinishida joylashgan to'rtta doirasimon oq rang ishorali svetoforlar qo'llanilishi mumkin (YHQ 36-band).");
Q("lights", "«T» shaklidagi oq ishorali svetofor kimlarning harakatini tartibga soladi?",
  ["Tramvaylar va maxsus ajratilgan tasmadagi boshqa yo'nalishli transportning", "Faqat tramvaylarning, boshqa yo'nalishli transport bunga kirmaydi", "Maxsus xizmatlarning ko'k mayoqchali transport vositalarining", "Temir yo'l kesishmasidagi barcha transport vositalarining harakatini"],
  "Bu svetofor tramvaylarning hamda maxsus ajratilgan tasma bo'ylab harakatlanayotgan boshqa yo'nalishli transport vositalarining harakatini tartibga soladi (YHQ 36-band).");
Q("lights", "Tramvay svetoforida yuqoridagi chap ishora va pastki ishora bir vaqtda yondi. Tramvayga qaysi yo'nalishda ruxsat?",
  ["Chapga", "To'g'riga", "O'ngga", "Hech qaysi yo'nalishga, harakat taqiqlangan"],
  "Pastki ishora bilan birga yuqoridagi chap ishora yonsa, chapga yurishga ruxsat beriladi (YHQ 36-band).");
Q("lights", "Tramvay svetoforida pastki ishora o'chirilgan, yuqoridagi uchta ishora bir vaqtda yongan. Bu nimani bildiradi?",
  ["Harakatlanish taqiqlanadi", "Barcha yo'nalishlarga ruxsat beriladi", "Faqat to'g'riga ruxsat beriladi", "Ehtiyotkorlik bilan harakatlanishga ruxsat"],
  "Pastdagi ishora o'chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi (YHQ 36-band).");
Q("lights", "Temir yo'l kesishmasidagi doirasimon oq rangli miltillovchi ishora nimani bildiradi?",
  ["Kesishma orqali harakatlanishga ruxsat beradi", "Poyezd yaqinlashayotganini bildiradi, harakat taqiqlanadi", "Shlagbaum nosozligini bildiradi", "Kesishma navbatchisini chaqirish kerakligini bildiradi"],
  "Temir yo'l kesishmalarida o'rnatilgan doirasimon oq rangli miltillovchi ishora transport vositalarining kesishma orqali harakatlanishiga ruxsat beradi (YHQ 37-band).", "railbarrier");
Q("lights", "Temir yo'l kesishmasidagi svetoforning oq va qizil ishoralari o'chirilgan. Qachon harakatlanish mumkin?",
  ["Ko'rinish chegarasida yaqinlashayotgan poyezd bo'lmasa", "Faqat kesishma navbatchisi ruxsat bersa", "Oq miltillovchi ishora qayta yonguncha harakatlanish mumkin emas", "Faqat ovozli signal berib bo'lgach"],
  "Oq va qizil miltillovchi ishoralar o'chirilgan bo'lib, ko'rinish chegarasida yaqinlashayotgan poyezd (lokomotiv, drezina) bo'lmasa, harakatlanishga ruxsat etiladi (YHQ 37-band).");
Q("lights", "Temir yo'l kesishmasida svetoforning qizil miltillovchi ishorasi bilan birga qanday qo'shimcha axborot berilishi mumkin?",
  ["Tovushli ishora", "Oq miltillovchi ishora", "Sariq miltillovchi ishora", "Yashil yo'naltirgich"],
  "Qizil miltillovchi ishora bilan bir vaqtda kesishmadan harakatlanish taqiqlanganligi haqida qo'shimcha axborot sifatida tovushli ishora ham berilishi mumkin (YHQ 37-band).");
Q("lights", "Temir yo'l kesishmasida taqiqlovchi ishora yondi; to'xtash chizig'i, 2.5 belgisi va svetofor yo'q, shlagbaum bor. Qayerda to'xtaysiz?",
  ["Shlagbaumga kamida 5 metr qolganda", "Shlagbaumga kamida 10 metr qolganda", "Birinchi relsga kamida 5 metr qolganda", "Shlagbaum oldida, unga tegay deb"],
  "41-band temir yo'l kesishmasi oldida 119-bandga muvofiq to'xtashni talab qiladi: belgilar bo'lmasa shlagbaumga kamida 5 metr qolganda to'xtaladi (shuningdek, 41-band) (YHQ 119-band).", "railbarrier");
Q("lights", "Temir yo'l kesishmasida harakat taqiqlangan, to'xtash chizig'i, belgi, svetofor va shlagbaum yo'q. Qayerda to'xtash kerak?",
  ["Birinchi relsga kamida 10 metr qolganda", "Birinchi relsga kamida 5 metr qolganda", "Birinchi relsga kamida 15 metr qolganda", "Birinchi relsga kamida 30 metr qolganda"],
  "Shlagbaum bo'lmaganda haydovchi birinchi temir yo'l iziga kamida 10 metr qolganda to'xtashi kerak (shuningdek, 41-band) (YHQ 119-band).");
Q("lights", "Tartibga soluvchi qo'llarini yon tomonga uzatgan. Siz uning chap yonidan kelyapsiz (yengil avtomobil). Qaysi yo'nalishlarda harakatlanish mumkin?",
  ["To'g'riga va o'ngga", "Faqat to'g'riga", "Barcha yo'nalishlarda", "Faqat o'ngga"],
  "Qo'llar yonga uzatilganda chap va o'ng yon tomonidan relssiz transport vositalariga to'g'riga va o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi qo'llarini yonga uzatgan, siz uning o'ng yonidan kelyapsiz va chapga burilmoqchisiz. Nima qilasiz?",
  ["To'xtayman: bu holatda chapga burilish ruxsat etilmagan", "Qarama-qarshi oqimga yo'l berib, chapga burilaman", "Chapga burilaman, chunki yon tomondan hamma yo'nalish ochiq", "Faqat qayrilib olishim mumkin"],
  "Qo'llar yonga uzatilganda yon tomonlardan relssiz transportga faqat to'g'riga va o'ngga harakatlanishga ruxsat beriladi; chapga burilish ruxsat etilmaydi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi qo'llarini yonga uzatgan. Uning chap yonidan yaqinlashayotgan tramvayga qaysi yo'nalishda ruxsat?",
  ["Faqat to'g'riga", "To'g'riga va o'ngga", "Faqat chapga", "Barcha yo'nalishlarda"],
  "Qo'llar yonga uzatilgan yoki tushirilganda chap va o'ng yon tomonidan tramvayga faqat to'g'riga harakatlanishga ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi qo'llarini yonga uzatgan. Siz uning ko'kragi (old tomoni) qarshisidasiz. Nima qilishingiz kerak?",
  ["To'xtashim kerak, harakat taqiqlangan", "Faqat o'ngga burilishim mumkin", "To'g'riga harakatlanishim mumkin", "Faqat qayrilib olishim mumkin"],
  "Qo'llar yonga uzatilganda tartibga soluvchining old va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi qo'llarini pastga tushirib turibdi. Siz uning orqa tomonidan kelyapsiz. Harakatlanish mumkinmi?",
  ["Yo'q, old va orqa tomondan harakat taqiqlangan", "Ha, to'g'riga va o'ngga", "Ha, faqat o'ngga, piyodalarga yo'l bergan holda", "Ha, barcha yo'nalishlarda"],
  "Qo'llar tushirilgan holat yonga uzatilgan holat bilan bir xil ma'noga ega: old va orqa tomonidan harakatlanish taqiqlanadi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi qo'llarini yonga uzatgan yoki tushirgan bo'lsa, piyodalar qatnov qismini qaysi tomondan kesib o'ta oladi?",
  ["Tartibga soluvchining chap va o'ng yon tomonlari qarshisida", "Faqat tartibga soluvchining orqa tomonida", "Faqat tartibga soluvchining old tomonida", "Faqat tartibga soluvchining old va orqa tomoni qarshisida"],
  "Qo'llar yonga uzatilganda yoki tushirilganda chap va o'ng yon tomonidan piyodalarga qatnov qismini kesib o'tishga ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Siz uning chap yonidan kelyapsiz (yengil avtomobil). Qaysi yo'nalishlarda harakatlanish mumkin?",
  ["Barcha yo'nalishlarda", "Faqat chapga", "Faqat to'g'riga va o'ngga", "Faqat o'ngga"],
  "O'ng qo'l oldinga uzatilganda chap yonidan relssiz transport vositalariga barcha yo'nalishlarda harakatlanishga ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan, siz uning chap yonidasiz va qayrilib olmoqchisiz (belgi taqiqlamaydi). Mumkinmi?",
  ["Ha, chap yondan relssiz transportga barcha yo'nalishlar ochiq", "Yo'q, faqat chapga burilish mumkin", "Yo'q, faqat to'g'riga va o'ngga mumkin", "Yo'q, qayrilish uchun qo'l yuqoriga ko'tarilishi kerak"],
  "O'ng qo'l oldinga uzatilganda chap yonidan relssiz transport vositalariga barcha yo'nalishlarda, jumladan qayrilib olishga ham ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Uning chap yonidan kelayotgan tramvay qaysi yo'nalishda harakatlana oladi?",
  ["Faqat chapga", "Barcha yo'nalishlarda", "Faqat to'g'riga", "Faqat o'ngga"],
  "O'ng qo'l oldinga uzatilganda chap yonidan tramvayga faqat chapga harakatlanishga ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Siz uning oldi (ko'kragi) tomonidan kelyapsiz. Qayerga harakatlana olasiz?",
  ["Faqat o'ngga", "To'g'riga va o'ngga", "Barcha yo'nalishlarda", "Harakat taqiqlangan"],
  "O'ng qo'l oldinga uzatilganda oldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Siz uning orqa tomonidasiz. Nima qilasiz?",
  ["To'xtayman, harakat taqiqlangan", "Faqat o'ngga burilaman", "Barcha yo'nalishlarda harakatlanaman", "Faqat to'g'riga harakatlanaman"],
  "O'ng qo'l oldinga uzatilganda orqa tomonidan barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Siz uning o'ng yonidan kelyapsiz va o'ngga burilmoqchisiz. Mumkinmi?",
  ["Yo'q, o'ng yonidan harakatlanish taqiqlangan", "Ha, o'ngga burilish har doim ruxsat", "Ha, faqat piyodalarga yo'l bersangiz", "Ha, o'ng yondan to'g'riga va o'ngga ruxsat"],
  "O'ng qo'l oldinga uzatilganda orqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Piyodalar qatnov qismini qayerda kesib o'tishi mumkin?",
  ["Tartibga soluvchining orqa tomonida", "Tartibga soluvchining old tomonida", "Tartibga soluvchining o'ng yonida", "Faqat chap yonida"],
  "O'ng qo'l oldinga uzatilganda piyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o'tishga ruxsat etiladi (YHQ 38-band).");
Q("lights", "Tartibga soluvchi qo'lini yuqoriga ko'targan. Bu nimani bildiradi?",
  ["42-banddagi holatlardan tashqari barcha yo'nalishlarda harakat taqiqlanadi", "Faqat tartibga soluvchining old va orqa tomonidan harakat taqiqlanadi", "Faqat piyodalar harakati taqiqlanadi", "Faqat o'ngga burilishga ruxsat beriladi"],
  "Qo'l yuqoriga ko'tarilganda 42-bandda ko'rsatilganidan boshqa hollarda transport vositalari va piyodalarning barcha yo'nalishlarda harakatlanishi taqiqlanadi (YHQ 38-band).");
Q("lights", "Siz chorrahaga yaqinlashganingizda tartibga soluvchi qo'lini yuqoriga ko'tardi, keskin tormoz bermasdan to'xtash chizig'i oldida to'xtay olmaysiz. Qanday harakatlanasiz?",
  ["Harakatni davom ettirishim mumkin", "Keskin tormoz berib, darhol to'xtashim shart", "Chorraha o'rtasida to'xtab, ruxsat kutaman", "Faqat o'ngga burilishim mumkin"],
  "Tartibga soluvchining qo'li yuqoriga ko'tarilganda 41-banddagi joylarda keskin tormoz bermasdan to'xtashga ulgura olmaydigan haydovchiga harakatni davom ettirishga ruxsat etiladi (YHQ 42-band).");
Q("lights", "Yashil ishoradan keyin sariq yondi. Siz to'xtash chizig'idan ancha uzoqdasiz va bemalol to'xtay olasiz. Nima qilishingiz kerak?",
  ["To'xtash chizig'i oldida to'xtashim kerak", "Sariqda o'tishga ulgurish uchun tezlikni oshirishim mumkin", "Harakatni davom ettirishim mumkin, sariq ruxsat beradi", "Faqat o'ngga burilishim mumkin"],
  "Sariq ishora harakatni taqiqlaydi; 42-banddagi istisno faqat keskin tormoz bermasdan to'xtashga ulgura olmaydigan haydovchiga tegishli (shuningdek, 31-band) (YHQ 42-band).");
Q("lights", "42-banddagi istisno qaysi ishora almashuviga taalluqli?",
  ["Yashil ishoradan keyin sariq yonganda", "Qizil va sariq birga yonganda", "Qizildan keyin sariq yonganda", "Sariq ishora miltillay boshlaganda"],
  "Istisno svetoforning yashil ishorasidan keyin sariq ishora yonganda yoki tartibga soluvchining qo'li yuqoriga ko'tarilganda qo'llaniladi (YHQ 42-band).");
Q("lights", "Svetoforda sariq yondi, qatnov qismida piyodalar qoldi. Ular nima qilishi kerak?",
  ["Qatnov qismini bo'shatishi, iloji bo'lmasa oqimlarni ajratuvchi chiziqda to'xtashi", "Qayerda bo'lsa, o'sha joyda to'xtab, keyingi yashil ishorani kutishi", "Yo'lni kesib o'tishni boshlagan tomoniga, yo'lakka qaytishi", "Qo'lini ko'tarib, haydovchilarni to'xtatgan holda o'tishni davom ettirishi"],
  "Bu ishoralar berilganda qatnov qismidagi piyodalar uni bo'shatishlari, iloji bo'lmasa qarama-qarshi yo'nalishlardagi oqimlarni ajratuvchi chiziqda to'xtashlari kerak (YHQ 42-band).");
Q("lights", "Tartibga soluvchi ishoralari yaxshi ko'rinishi uchun nimadan foydalanishi mumkin?",
  ["Jezl yoki yorug'lik qaytaradigan qizil rangli moslamadan", "Faqat qizil bayroqcha yoki qizil fonardan", "Ko'k rangli yalt-yalt etuvchi qo'l fonari yoki chiroqdan", "Yorug'lik qaytaradigan sariq jilet va sariq bayroqchadan"],
  "Ishoralar yaxshi ko'rinishi uchun tartibga soluvchi jezl yoki yorug'lik qaytaradigan qizil rangli moslamalarni qo'llashi mumkin (YHQ 38-band).");
Q("lights", "Tartibga soluvchi 38-bandda tasvirlanmagan boshqa ishora berdi. Unga amal qilish kerakmi?",
  ["Ha, agar ishora haydovchi va piyodalarga tushunarli bo'lsa", "Yo'q, faqat 38-bandda tasvirlangan ishoralar haydovchi uchun majburiy", "Faqat hushtak bilan birga berilsa", "Faqat jezl bilan berilsa"],
  "Tartibga soluvchi haydovchi va piyodalarga tushunarli bo'lgan boshqa ishoralarni ham berishi mumkin (YHQ 38-band).");
Q("lights", "Harakatni tartibga soluvchi yoki IIO xodimi haydovchidan transport vositasini to'xtatishni qanday talab qilishi mumkin?",
  ["Qo'l ishorasi yoki ovoz kuchaytirgich yordamida", "Faqat hushtak chalish orqali", "Faqat jezlni yuqoriga ko'tarish orqali", "Faqat xizmat avtomobilining mayoqchasi bilan"],
  "Tartibga soluvchi yoki IIO xodimi qo'l ishorasi yoki ovoz kuchaytirgich yordamida to'xtashni talab qilishi mumkin, haydovchi ko'rsatilgan joyda to'xtashi shart (YHQ 39-band).");
Q("lights", "Tartibga soluvchining hushtak bilan bergan ishorasi nima uchun qo'llaniladi?",
  ["Yo'l harakati ishtirokchilarining e'tiborini jalb etish uchun", "Barcha yo'nalishlarda harakatlanishga ruxsat berish uchun", "Barcha yo'nalishlarda harakatni taqiqlash uchun", "Maxsus transport yaqinlashayotganini bildirish uchun"],
  "Yo'l harakati ishtirokchilarining e'tiborini jalb etish uchun hushtak bilan qo'shimcha ishora beriladi (YHQ 40-band).");
Q("lights", "Taqiqlovchi ishorada to'xtash chizig'i (5.33 belgisi) bo'lsa, avtomobil qanday to'xtatiladi?",
  ["Chiziq oldida, avtomobilning eng oldingi nuqtasi chiziq ustiga chiqmagan holda", "Old g'ildiraklar chiziq ustida, bamper esa chiziqdan o'tgan holda", "Chiziqdan o'tib, piyodalar o'tish joyi oldida, unga chiqmasdan", "Svetofor ustuni ro'parasida, chiziqqa e'tibor bermasdan"],
  "Haydovchi to'xtash chizig'i oldida to'xtashi, bunda transport vositasining eng oldingi nuqtasi chiziq ustiga chiqib ketmasligi kerak (YHQ 41-band).");
Q("lights", "Chorrahada taqiqlovchi ishora yondi, to'xtash chizig'i yo'q. Qayerda to'xtash kerak?",
  ["Qatnov qismlari kesishgan joydan oldin, piyodalarga xalaqit bermasdan", "Svetofor ustuni ro'parasida, piyodalar o'tish joyi ustida", "Chorraha markazida, chapga burilish uchun kutish joyida", "Chorrahaga 50 m qolganda"],
  "To'xtash chizig'i bo'lmaganda chorrahada qatnov qismi bilan kesishgan joyda, piyodalarga xalaqit bermasdan to'xtash kerak (YHQ 41-band).");
Q("lights", "Chorrahadan tashqaridagi joyda svetoforning taqiqlovchi ishorasi yondi, to'xtash chizig'i yo'q. Qayerda to'xtaysiz?",
  ["Svetofor oldida, harakatiga ruxsat berilganlarga xalaqit bermasdan", "Svetofordan o'tib, yo'l chetida, harakatga xalaqit bermasdan", "Svetoforga kamida 10 m qolganda, yo'lning o'ng chetida", "Svetoforga kamida 5 m qolganda, piyodalarga xalaqit bermasdan"],
  "Boshqa joylarda svetofor yoki tartibga soluvchining oldida, harakatlanishiga ruxsat berilganlarga xalaqit bermagan holda to'xtash kerak (YHQ 41-band).");
Q("lights", "Svetofor yashil, ammo tartibga soluvchi qo'lini yuqoriga ko'targan. Kimga amal qilasiz?",
  ["Tartibga soluvchiga — to'xtayman", "Svetoforga — harakatni davom ettiraman", "Qaysi biri avval berilgan bo'lsa, unga", "Yo'l belgilariga"],
  "Tartibga soluvchining ishoralari svetofor ishoralari, yo'l belgilari va chiziqlari talablariga zid bo'lsa, tartibga soluvchiga amal qilinadi (YHQ 43-band).");
Q("lights", "Siz ikkinchi darajali yo'lda («Yo'l bering» belgisi), chorrahadagi svetofor sizga yashil yondi. Qaysi talabga amal qilasiz?",
  ["Svetofor ishorasiga", "«Yo'l bering» belgisiga", "O'ng qo'l qoidasiga", "Ikkalasiga: to'xtab, keyin yashilda o'taman"],
  "Svetofor ishoralari imtiyoz belgilari talablariga zid bo'lgan hollarda haydovchilar svetofor ishoralariga amal qilishlari kerak (YHQ 43-band).", "giveway");
Q("lights", "Siz tomonidagi svetofor ishlamayapti. Chorrahadan o'tishdan oldin nimaga ishonch hosil qilishingiz kerak?",
  ["Ko'ndalang yo'nalishdagi svetoforlar ham ishlamayotganiga", "Qarama-qarshi yo'nalishdagi svetofor yashil ekanligiga", "Piyodalar svetofori yashil ekanligiga", "Tartibga soluvchi yo'qligiga"],
  "Svetofor ishlamayotgan bo'lsa, haydovchi ko'ndalang yo'nalishdagi svetofor ishoralari ham ishlamayotganligiga ishonch hosil qilganidan so'nggina harakatni davom ettiradi (YHQ 43-band).");
Q("lights", "Siz chorrahaga yashil ishorada kirdingiz, chiqishda svetofor qizilga o'zgardi; yo'lingizda to'xtash chizig'i yo'q. Nima qilasiz?",
  ["Mo'ljallangan yo'nalishda harakatni davom ettiraman", "Chorrahaning o'rtasida to'xtab, yashilni kutaman", "Orqaga qaytaman", "Chiqishdagi svetofor oldida to'xtayman"],
  "Ruxsat etuvchi ishorada chorrahaga kirgan haydovchi undan chiqishda svetofor ishoralaridan qat'i nazar mo'ljallangan yo'nalishda harakatni davom ettiradi (to'xtash chiziqlari bo'lmasa) (YHQ 102-band).");
Q("warnings", "Quyidagilardan qaysi biri YHQ 44-bandiga ko'ra ogohlantiruvchi ishora hisoblanmaydi?",
  ["Gabarit chiroqlarini yoqish", "To'xtash fara chirog'i (stop-signal)", "Fara chiroqlarini yoqib-o'chirish", "Kunduzi yaqinni yorituvchi faralarni yoqish"],
  "44-band ogohlantiruvchi ishoralar sifatida burilish ko'rsatkichi yoki qo'l ishorasi, to'xtash chirog'i, tovushli ishora, faralarni yoqib-o'chirish va kunduzi yaqin faralarni sanaydi (YHQ 44-band).");
Q("warnings", "Kunduzi yaqinni yorituvchi fara chiroqlarining yoqilishi YHQ bo'yicha qanday ishoraga kiradi?",
  ["Ogohlantiruvchi ishoraga", "Avariya ishorasiga", "Taniqlik belgisiga", "Imtiyoz ishorasiga"],
  "Sutkaning yorug' vaqtida yaqinni yorituvchi fara chiroqlarining yoqilishi ogohlantiruvchi ishoralar qatoriga kiradi (YHQ 44-band).");
Q("warnings", "To'xtash fara chirog'i (stop-signal) YHQ 44-bandiga ko'ra nima hisoblanadi?",
  ["Ogohlantiruvchi ishora", "Avariya ishorasi", "Faqat yoritish asbobi, ishora emas", "Maxsus yorug'lik ishorasi"],
  "To'xtash fara chirog'i 44-bandda ogohlantiruvchi ishoralar ro'yxatida keltirilgan (YHQ 44-band).");
Q("warnings", "Haydovchi qaysi manyovrlardan oldin yo'nalish ko'rsatkichini yoqishi shart?",
  ["Harakatni boshlash, qayta tizilish, burilish va to'xtashdan oldin", "Faqat burilish, qayrilib olish va quvib o'tishdan oldin", "Faqat qayta tizilish, quvib o'tish va chorrahada burilishdan oldin", "Burilish va to'xtashdan oldin, harakatni boshlashda shart emas"],
  "Haydovchi harakatlanishni boshlashdan, qayta tizilishdan, burilish (qayrilib olish)dan va to'xtashdan oldin tegishli yo'nalish ko'rsatkichini yoqishi shart (YHQ 45-band).");
Q("warnings", "Siz yo'l chetidagi to'xtab turish joyidan chiqib, harakatni boshlamoqdasiz. Ko'rsatkich yoqish kerakmi?",
  ["Ha, harakatni boshlashdan oldin chap ko'rsatkich yoqiladi", "Yo'q, ko'rsatkich faqat burilish va qayta tizilishda yoqiladi", "Faqat orqada transport bo'lsa", "Faqat aholi punktidan tashqarida"],
  "45-bandga ko'ra harakatlanishni boshlashdan oldin ham tegishli yo'nalish ko'rsatkichi yoqilishi shart (YHQ 45-band).");
Q("warnings", "Siz yo'l chetida to'xtamoqchisiz. Ishora berish majburiymi?",
  ["Ha, to'xtashdan oldin o'ng ko'rsatkich yoqilishi shart", "Yo'q, to'xtash fara chirog'i yonishining o'zi ogohlantirish uchun yetarli", "Faqat orqada yaqin masofada transport bo'lsa", "Faqat avariya ishorasi yoqiladi"],
  "To'xtashdan oldin ham tegishli yo'nalish ko'rsatkichini yoqish shart (YHQ 45-band).");
Q("warnings", "Yo'nalish ko'rsatkichlari ishlamasa, haydovchi nima qilishi kerak?",
  ["Qo'l bilan ishora berishi kerak", "Avariya ishorasini yoqishi kerak", "Tovushli ishora berishi kerak", "Faralarni yoqib-o'chirishi kerak"],
  "Yorug'lik ko'rsatkichlari bo'lmaganda yoki ishlamaganda haydovchi qo'l bilan ishoralar berishi shart (YHQ 45-band).");
Q("warnings", "Chapga burilish (qayrilib olish) qo'l ishorasi qanday beriladi?",
  ["Chap qo'l yonga uzatiladi yoki o'ng qo'l tirsakdan to'g'ri burchakda bukilib ko'tariladi", "O'ng qo'l yonga uzatiladi yoki chap qo'l tirsakdan bukilib yuqoriga ko'tariladi", "Chap qo'l yuqoriga ko'tariladi yoki o'ng qo'l yonga uzatiladi", "Chap qo'l tirsakdan to'g'ri burchak ostida bukilib pastga tushiriladi"],
  "Chapga burilish ishorasiga chap qo'lni yonga uzatish yoki o'ng qo'lni tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tarish mos keladi (YHQ 45-band).");
Q("warnings", "O'ngga burilish qo'l ishorasi qanday beriladi?",
  ["O'ng qo'l yonga uzatiladi yoki chap qo'l tirsakdan to'g'ri burchakda bukilib ko'tariladi", "Chap qo'l yonga uzatiladi yoki o'ng qo'l tirsakdan bukilib yuqoriga ko'tariladi", "O'ng qo'l yuqoriga ko'tariladi yoki chap qo'l yonga uzatiladi", "Chap qo'l tirsakdan to'g'ri burchak ostida bukilib, kaft orqaga qaratib tushiriladi"],
  "O'ngga burilish ishorasiga o'ng qo'lni yonga uzatish yoki chap qo'lni tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tarish mos keladi (YHQ 45-band).");
Q("warnings", "Oldingizdagi avtomobil haydovchisi derazadan chap qo'lini chiqarib, tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tardi. Bu qanday ishora?",
  ["O'ngga burilish", "Chapga burilish", "To'xtash", "Quvib o'tishga ruxsat"],
  "Chap qo'lni tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tarish o'ngga burilish ishorasiga mos keladi (YHQ 45-band).");
Q("warnings", "Oldingizdagi haydovchi chap qo'lini yon tomonga to'g'ri uzatdi. U nima qilmoqchi?",
  ["Chapga burilmoqchi yoki qayrilib olmoqchi", "O'ngga burilmoqchi", "To'xtamoqchi", "Sizga quvib o'tishga ruxsat bermoqda"],
  "Chap qo'lni yonga uzatish chapga burilish (qayrilib olish) ishorasiga mos keladi (YHQ 45-band).");
Q("warnings", "Velosipedchi o'ng qo'lini tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tardi. Bu nimani bildiradi?",
  ["Chapga burilish", "O'ngga burilish", "To'xtash", "Harakatni boshlash"],
  "O'ng qo'lni tirsakdan to'g'ri burchak ostida bukib yuqoriga ko'tarish chapga burilish ishorasiga mos keladi (YHQ 45-band).");
Q("warnings", "To'xtash haqidagi qo'l ishorasi qanday beriladi?",
  ["Chap yoki o'ng qo'l yuqoriga ko'tariladi", "Chap qo'l yonga uzatiladi", "Qo'l pastga tushirilib, oldinga-orqaga silkitiladi", "Ikkala qo'l yonga uzatiladi"],
  "To'xtash ishorasi chap yoki o'ng qo'lni yuqoriga ko'tarib beriladi (YHQ 45-band).");
Q("warnings", "Burilish ko'rsatkichi qachon berilishi va qachon o'chirilishi kerak?",
  ["Manyovrdan oldinroq beriladi va u tugagach darhol o'chiriladi", "Manyovr boshlanganda beriladi va keyingi chorrahada o'chiriladi", "Manyovrdan 100 m oldin beriladi va avtomatik o'chishi kutiladi", "Manyovr boshlanishi bilan beriladi va 3 soniyadan keyin o'chiriladi"],
  "Burilish ko'rsatkichi yoki qo'l ishorasi manyovrdan oldinroq berilishi va uni tugallagach darhol to'xtatilishi kerak (YHQ 46-band).");
Q("warnings", "Qo'l bilan berilayotgan burilish ishorasini qachon tugatishga ruxsat etiladi?",
  ["Manyovrni bevosita bajarishdan oldin", "Faqat manyovr to'liq tugagach", "Manyovrning o'rtasida", "Faqat orqadagi haydovchi javob ishorasi bergach"],
  "Qo'l bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin, chunki haydovchiga rulni ikki qo'llab boshqarish kerak (YHQ 46-band).");
Q("warnings", "Siz ikkinchi chorrahada o'ngga burilmoqchisiz, lekin o'ng ko'rsatkichni birinchi chorrahadan oldin yoqdingiz. Qaysi talab buziladi?",
  ["Ishoralar boshqa ishtirokchilarni chalg'itmasligi kerak", "Ko'rsatkich faqat 30 m oldin yoqilishi kerak", "Burilishda qo'l ishorasi ham berilishi kerak", "Hech qaysi, ko'rsatkichni qancha erta yoqsa shuncha yaxshi"],
  "Beriladigan ishoralar yo'l harakatining boshqa ishtirokchilarini chalg'itmasligi kerak; erta yoqilgan ko'rsatkich birinchi chorrahada buriladi deb o'ylatadi (YHQ 46-band).");
Q("warnings", "Ogohlantiruvchi ishora (masalan, burilish ko'rsatkichi) berish haydovchiga nima beradi?",
  ["Oldin o'tish huquqini bermaydi va ehtiyot choralaridan ozod etmaydi", "Oldin o'tish huquqini beradi, boshqalar unga moslashishi shart", "Qayta tizilishda ustunlik beradi", "Boshqalarni tezlikni kamaytirishga majbur qiladi"],
  "Ogohlantiruvchi ishora berish haydovchiga oldin o'tish huquqini bermaydi va uni zaruriy ehtiyot choralarini ko'rish mas'uliyatidan ozod etmaydi (YHQ 46-band).");
Q("warnings", "Siz chap ko'rsatkichni yoqib qayta tizilmoqchisiz, ammo qo'shni tasmadagi avtomobil yaqinlashib kelmoqda. Kim kimga yo'l beradi?",
  ["Men unga yo'l beraman: ishora ustunlik bermaydi", "U menga yo'l beradi, chunki men ishora berdim", "Kim oldinda bo'lsa, o'sha o'tadi", "Ikkalamiz ham to'xtashimiz kerak"],
  "Ogohlantiruvchi ishora oldin o'tish huquqini bermaydi; qayta tizilayotgan haydovchi xavfsizlikni o'zi ta'minlashi kerak (YHQ 46-band).");
Q("warnings", "Harakat yo'nalishini o'zgartirish haqida ishora berishdan oldin haydovchi nimaga ishonch hosil qilishi kerak?",
  ["Orqadagi transport uni quvib o'tishni yoki o'zib ketishni boshlamaganiga", "Oldindagi transport tezligini kamaytirmaganiga va masofa yetarliligiga", "Qarama-qarshi tasmada transport yo'qligiga", "Qarama-qarshi tasmada quvib o'tayotgan transport yo'qligiga"],
  "Haydovchi ishora berishdan oldin orqadan kelayotgan transport uni quvib o'tishni yoki o'zib ketishni boshlamaganiga va boshqalarga xalaqit bermasligiga ishonch hosil qilishi kerak (YHQ 47-band).");
Q("warnings", "Tovushli ishoradan qaysi hollarda foydalanish mumkin?",
  ["Aholi punktidan tashqarida quvib o'tishdan ogohlantirish va YTHning oldini olish uchun", "Aholi punktida quvib o'tishdan ogohlantirish va chorrahada navbatni bildirish uchun", "Aholi punktidan tashqarida istalgan maqsadda, shaharda faqat YTH xavfida", "Piyodalarni ogohlantirish va tirbandlikda e'tiborni jalb qilish uchun"],
  "Tovushli ishoralar faqat aholi punktlaridan tashqarida quvib o'tish haqida ogohlantirish uchun va zarur hollarda YTHning oldini olish uchun qo'llanilishi mumkin (YHQ 48-band).");
Q("warnings", "Aholi punktida siz oldingi avtomobilni quvib o'tmoqchisiz. Uni tovushli ishora bilan ogohlantirish mumkinmi?",
  ["Yo'q, aholi punktida faqat YTHning oldini olish uchun mumkin", "Ha, quvib o'tishdan oldin har doim mumkin", "Ha, agar tezlik 60 km/soatdan oshsa", "Ha, quvib o'tishni boshlashdan oldin qisqa ishora bilan mumkin"],
  "Quvib o'tish haqida tovushli ishora faqat aholi punktidan tashqarida beriladi; aholi punktida faqat YTHning oldini olish uchun ruxsat (YHQ 48-band).");
Q("warnings", "Shahar ko'chasida tanishingizni ko'rib, salomlashish uchun signal chaldingiz. Bu qoidaga mosmi?",
  ["Yo'q, 48-banddagi hollardan tashqari tovushli ishora taqiqlanadi", "Ha, agar signal qisqa bo'lsa va tunda berilmasa mumkin", "Ha, qisqa va baland bo'lmagan ovoz bilan mumkin", "Ha, agar yaqin atrofda piyoda bo'lmasa"],
  "48-bandda ko'rsatilgan hollardan tashqari tovushli ishoralardan foydalanish taqiqlanadi (YHQ 48-band).");
Q("warnings", "Aholi punktidan tashqarida oldingizdagi yuk avtomobilini quvib o'tmoqchisiz. Tovushli ishora berish mumkinmi?",
  ["Ha, quvib o'tish haqida ogohlantirish uchun mumkin", "Yo'q, faqat fara chiroqlari bilan ogohlantirish mumkin", "Yo'q, faqat YTH xavfi bo'lsa mumkin", "Faqat avtomagistralda mumkin"],
  "Aholi punktlaridan tashqarida boshqa haydovchilarni quvib o'tish haqida ogohlantirish uchun tovushli ishora qo'llanilishi mumkin (YHQ 48-band).");
Q("warnings", "Aholi punktida bola to'satdan yo'lga chiqdi, to'qnashuv xavfi bor. Tovushli ishora berish mumkinmi?",
  ["Ha, YTHning oldini olish uchun mumkin", "Yo'q, aholi punktida tovushli ishora taqiqlangan", "Faqat aholi punktidan tashqarida mumkin", "Faqat fara chiroqlari bilan ogohlantirish mumkin"],
  "Zarur hollarda YTHning oldini olish uchun tovushli ishora berish aholi punktida ham ruxsat etiladi (YHQ 48-band).");
Q("warnings", "Quvib o'tish haqida tovushli ishora o'rniga yoki u bilan birga qanday ishora berish mumkin?",
  ["Fara chiroqlarini yoqib-o'chirish", "Avariya ishorasini yoqish", "Chap ko'rsatkichni uzoq yoqib qo'yish", "Tumanga qarshi chiroqlarni yoqish"],
  "Quvib o'tish haqida tovushli ishora o'rniga yoki u bilan birga fara chiroqlarini yoqib-o'chirib ogohlantirish mumkin (YHQ 49-band).");
Q("warnings", "Avariya (xavf-xatar) ishorasi nima?",
  ["Burilishni ko'rsatuvchi barcha yorug'lik ishoralarining bir vaqtda miltillashi", "Uzoqni yorituvchi faralarni yoqib-o'chirish", "Orqa gabarit va to'xtash chiroqlarining bir vaqtda uzluksiz yonishi", "Tovushli ishora va faralarning birgalikda berilishi"],
  "Burilishni ko'rsatuvchi barcha yorug'lik ishoralarining bir vaqtda miltillashi avariya (xavf-xatar) ishorasi hisoblanadi (YHQ 50-band).");
Q("warnings", "Siz ishtirok etgan yo'l-transport hodisasi sodir bo'ldi. Qaysi yorug'lik ishorasini yoqishingiz shart?",
  ["Avariya ishorasini", "Faqat gabarit chiroqlarini", "Uzoqni yorituvchi faralarni", "Chap burilish ko'rsatkichini"],
  "YTH sodir bo'lganda avariya ishorasi yoqilishi kerak (YHQ 50-band).");
Q("warnings", "Nosozlik tufayli to'xtash taqiqlangan joyda majburan to'xtadingiz. Nima yoqilishi kerak?",
  ["Avariya ishorasi", "O'ng burilish ko'rsatkichi", "Tumanga qarshi orqa chiroq", "Faqat gabarit chiroqlari"],
  "To'xtash taqiqlangan joylarda majburiy to'xtaganda avariya ishorasi yoqilishi kerak (YHQ 50-band).", "nostopping");
Q("warnings", "Qarama-qarshi transportning fara chiroqlari ko'zingizni qamashtirdi. 50-bandga ko'ra nima yoqilishi kerak?",
  ["Avariya ishorasi", "Uzoqni yorituvchi faralar", "Tumanga qarshi faralar", "Ichki yoritish chirog'i"],
  "Fara chiroqlari yorug'ligi haydovchining ko'zini qamashtirganda avariya ishorasi yoqilishi kerak (YHQ 50-band).");
Q("warnings", "Shatakka olishda avariya ishorasi qaysi transport vositasida yoqilishi kerak?",
  ["Shatakka olingan mexanik transport vositasida", "Shatakka oluvchi transport vositasida", "Ikkala transport vositasida ham", "Hech birida, faqat taniqlik belgisi qo'yiladi"],
  "Shatakka olishda avariya ishorasi shatakka olingan mexanik transport vositasida yoqilishi kerak (YHQ 50-band).");
Q("warnings", "«Bolalarni tashish» taniqlik belgisi bor avtobusda avariya ishorasi qachon yoqilishi shart?",
  ["Bolalar chiqayotganda va tushayotganda", "Butun yo'l davomida", "Faqat bekatda bir daqiqadan ortiq turganda", "Faqat aholi punktidan tashqarida"],
  "«Bolalarni tashish» taniqlik belgisiga ega transport vositasiga bolalar chiqayotganda va undan tushayotganda avariya ishorasi yoqilishi kerak (YHQ 50-band).");
Q("warnings", "Quyidagi holatlardan qaysi biri 50-bandda avariya ishorasini yoqish holati sifatida alohida sanab o'tilmagan?",
  ["Tirbandlikda navbatda turganda", "To'xtash taqiqlangan joyda majburiy to'xtaganda", "Shatakka olingan mexanik transport vositasida", "Haydovchining ko'zi faralardan qamashganda"],
  "50-band YTH, taqiqlangan joyda majburiy to'xtash, ko'z qamashishi, shatakka olish va bolalar chiqib-tushishini sanaydi; tirbandlikda turish ro'yxatda yo'q (YHQ 50-band).");
Q("warnings", "50-banddagi ro'yxatda bo'lmagan, ammo transport vositasi xavf tug'dirishi mumkin bo'lgan holatda avariya ishorasi yoqiladimi?",
  ["Ha, boshqa ishtirokchilarni ogohlantirish uchun yoqilishi kerak", "Yo'q, faqat ro'yxatdagi hollarda yoqiladi", "Yo'q, ro'yxatdan tashqari hollarda faqat gabarit chiroqlari yoqiladi", "Faqat aholi punktidan tashqarida"],
  "Transport vositasi xavf tug'dirishi mumkin bo'lgan boshqa hollarda ham haydovchi ishtirokchilarni ogohlantirish uchun avariya ishorasini yoqishi kerak (YHQ 50-band).");
Q("warnings", "Transport vositangiz yo'lda to'satdan to'xtab qoldi. Birinchi navbatda nima qilinadi?",
  ["Zudlik bilan avariya ishorasi yoqiladi", "Darhol kapotni ochib, nosozlik qidiriladi", "Avval yo'l chetiga itarib chiqariladi, keyin ishora yoqiladi", "Avval IIO xodimlariga xabar beriladi"],
  "Transport vositasi to'satdan to'xtab qolganda zudlik bilan avariya yorug'lik ishorasini yoqish kerak (YHQ 51-band).");
Q("warnings", "To'satdan to'xtab qolgan avtomobilda avariya ishorasi ishlamayapti. Haydovchi nima qilishi shart?",
  ["Avariya sababli to'xtash belgisini darhol o'rnatishi", "Gabarit chiroqlarini yoqib qo'yishi", "Kapotni ochib qo'yishi", "Tovushli ishorani vaqti-vaqti bilan berib turishi"],
  "Avariya yorug'lik ishorasi ishlamasa, avariya sababli to'xtash belgisini darhol o'rnatish kerak (YHQ 51-band).", "danger");
Q("warnings", "Avariya sababli to'xtash belgisi qaysi hollarda qo'llaniladi?",
  ["YTHda hamda taqiqlangan yoki ko'rinish cheklangan joyda majburiy to'xtaganda", "Aholi punktidan tashqarida yo'l chetidagi har qanday to'xtashda", "Sutkaning qorong'i vaqtida yo'l chetida to'xtab turganda", "Faqat shatakka olishda shatakka oluvchi avtomobil orqasida"],
  "Avariya sababli to'xtash belgisi YTH sodir bo'lganda hamda to'xtash taqiqlangan va ko'rinishi cheklangan joylarda majburiy to'xtaganda qo'llaniladi (YHQ 51-band).");
Q("warnings", "Aholi punktida avariya sababli to'xtash belgisi transport vositasidan qanday masofada o'rnatiladi?",
  ["Kamida 15 metr", "Kamida 10 metr", "Kamida 20 metr", "Kamida 30 metr"],
  "Bu masofa aholi punktlarida transport vositasidan 15 metrdan kam bo'lmasligi kerak (YHQ 51-band).", "danger");
Q("warnings", "Aholi punktidan tashqarida avariya sababli to'xtash belgisi transport vositasidan qanday masofada o'rnatiladi?",
  ["Kamida 30 metr", "Kamida 15 metr", "Kamida 50 metr", "Kamida 25 metr"],
  "Aholi punktlaridan tashqarida bu masofa 30 metrdan kam bo'lmasligi kerak (YHQ 51-band).");
Q("warnings", "Shahardan tashqaridagi yo'lda avariya belgisini avtomobildan 20 metr orqaga qo'ydingiz. Bu to'g'rimi?",
  ["Yo'q, aholi punktidan tashqarida kamida 30 metr bo'lishi kerak", "Ha, kamida 15 metr yetarli", "Ha, aholi punktidan tashqarida 20 metr me'yoriy masofa", "Yo'q, belgi aholi punktidan tashqarida kamida 50 metrga qo'yiladi"],
  "Aholi punktlaridan tashqarida avariya sababli to'xtash belgisi transport vositasidan kamida 30 metr masofada o'rnatiladi (YHQ 51-band).");
Q("warnings", "Shatakka olingan avtomobilda avariya yorug'lik ishoralari ishlamaydi. Nima qilinadi?",
  ["Uning orqa qismiga avariya sababli to'xtash belgisi o'rnatiladi", "Shatakka oluvchi avtomobilning oldiga belgi qo'yiladi", "Shatakka olish taqiqlanadi", "Faqat yaqin faralar yoqiladi"],
  "Shatakka olingan mexanik transport vositasida avariya ishoralari bo'lmasa yoki ishlamasa, uning orqa qismiga avariya sababli to'xtash belgisi o'rnatilishi kerak (YHQ 52-band).");
Q("warnings", "Avariya sababli to'xtash belgisi o'rnatiladigan masofa qanday tanlanadi?",
  ["O'z vaqtida ogohlantira oladigan, ammo me'yordan kam bo'lmagan masofada", "Har doim aniq 15 metrda, aholi punktidan qat'i nazar", "Transport vositasining orqa qismida, yaqqol ko'rinadigan joyda", "Har qanday holatda 30 metrdan uzoq bo'lmagan masofada"],
  "Belgi haydovchilarni xavfli vaziyat haqida o'z vaqtida ogohlantirish imkonini beradigan masofada, ammo 15 m (aholi punktida) va 30 m (tashqarida)dan kam bo'lmagan masofada o'rnatiladi (YHQ 51-band).");
Q("warnings", "Siz qayrilib olmoqchisiz. Qaysi yo'nalish ko'rsatkichini yoqasiz?",
  ["Chap ko'rsatkichni", "O'ng ko'rsatkichni", "Avariya ishorasini", "Ko'rsatkich shart emas, faralarni yoqib-o'chiraman"],
  "45-bandga ko'ra qayrilib olish chapga burilish bilan bir xil ishora — chap ko'rsatkich yoki unga mos qo'l ishorasi bilan bildiriladi (YHQ 45-band).");
Q("warnings", "Chapga qayta tizilish uchun ko'rsatkich yoqmoqchisiz, ammo orqadagi avtomobil sizni quvib o'tishni boshlagan. Nima qilasiz?",
  ["Uni o'tkazib yuboraman, keyin ishora berib qayta tizilaman", "Ko'rsatkichni yoqib, darhol qayta tizilaman", "Ishora berib, u tezlikni kamaytirishini kutaman", "Tovushli ishora berib ogohlantiraman va qayta tizilaman"],
  "Ishora berishdan oldin haydovchi orqadan kelayotgan transport quvib o'tishni yoki o'zib ketishni boshlamaganiga ishonch hosil qilishi kerak (YHQ 47-band).");
Q("warnings", "Temir yo'l kesishmasida avtomobil majburan to'xtab qoldi. Umumiy xatar ishorasi qanday beriladi?",
  ["Bitta uzun va uchta qisqa tovushli ishora", "Uchta uzun va bitta qisqa tovushli ishora", "Ikkita uzun tovushli ishora", "Uzluksiz avariya ishorasi va bitta uzun ishora"],
  "Bitta uzun va uchta qisqa tovushli ishoralar umumiy xatar ishorasi hisoblanadi (YHQ 120-band).");
Q("warnings", "Temir yo'l kesishmasida qolib ketgan haydovchi poyezd mashinistiga to'xtash ishorasini qanday beradi?",
  ["Qo'lni yorqin mato (tunda mash'ala yoki chiroq) bilan gir aylantirib", "Ikkala qo'lni yonga uzatib, yo'l o'rtasida turib", "Avtomobil faralarini yoqib-o'chirib va tovushli ishora berib", "Qizil mato bilan ikkala qo'lni yuqoriga ko'tarib"],
  "To'xtash ishorasi qo'lni kunduzi yorqin mato parchasi, tunda mash'ala yoki chiroq bilan gir aylantirish orqali beriladi (YHQ 120-band).");

// ===================== SPECIAL (YHQ 6, 22-boblar) =====================
Q("special", "Qaysi rangdagi yalt-yalt etuvchi mayoqchalar tezkor va maxsus xizmat transportiga 25-banddagi imtiyozlarni beradi?",
  ["Ko'k yoki qizil yoxud ko'k va qizil", "Zarg'aldoq yoki sariq", "Faqat ko'k yoki ko'k va sariq", "Ko'k yoki oq yoxud ko'k va oq"],
  "25-band imtiyozlari ko'k yoki qizil yoxud ko'k va qizil rangli yalt-yalt etuvchi mayoqchalar yoqilgan transport vositalariga tegishli (YHQ 25-band).");
Q("special", "Ko'k mayoqchali tezkor xizmat transporti qaysi shartlarda Qoidalarning ayrim talablaridan chetga chiqishi mumkin?",
  ["Kechiktirib bo'lmaydigan vazifada, xavfsizlikni ta'minlagan holda", "Faqat tezlikni 20 km/soatdan oshirmagan holda, istalgan vaqtda", "Faqat aholi punktidan tashqarida", "Mayoqcha o'rnatilgan bo'lsa, xizmat vazifasidan qat'i nazar"],
  "Bunday haydovchilar kechiktirib bo'lmaydigan xizmat vazifalarini bajarayotib, harakatlanish xavfsizligini ta'minlash sharti bilan chetga chiqishlari mumkin (YHQ 25-band).");
Q("special", "Mayoqcha va maxsus tovushli ishorasi yoqilgan tezkor xizmat haydovchisi baribir nimaga amal qilishi shart?",
  ["Tartibga soluvchining ishoralariga", "Svetofor va reversiv svetofor ishoralariga", "Yo'l belgilariga", "Yo'l chiziqlariga"],
  "Ular 7-bob talablaridan chetga chiqishi mumkin, ammo tartibga soluvchining ishoralari bundan mustasno (YHQ 25-band).");
Q("special", "Ko'k mayoqcha va siren yoqilgan «Tez yordam» qizil svetoforga yaqinlashmoqda. U o'tishi mumkinmi?",
  ["Ha, o'ziga yo'l berilayotganiga ishonch hosil qilgan holda", "Yo'q, svetofor ishoralari maxsus transport uchun ham majburiy", "Ha, mayoqcha yoqilgan bo'lsa, boshqalar to'xtaganini kutmasdan", "Faqat chorrahada tartibga soluvchi bo'lsa va u ruxsat bersa"],
  "Maxsus transport 7-bob (tartibga soluvchi ishoralaridan tashqari) talablaridan chetga chiqishi mumkin, lekin imtiyozdan yo'l berilayotganiga ishonch hosil qilgachgina foydalanadi (YHQ 25-band).");
Q("special", "Tezkor xizmat transporti boshqalarga nisbatan imtiyozga ega bo'lishi uchun nima yoqilgan bo'lishi shart?",
  ["Ko'k va/yoki qizil mayoqcha hamda maxsus tovushli ishora", "Ko'k yoki qizil mayoqcha, tovushli ishora shart emas", "Maxsus tovushli ishora va avariya ishorasi", "Mayoqcha va yaqinni yorituvchi faralar"],
  "Imtiyozga ega bo'lish uchun ko'k yoki qizil (yoxud ikkalasi) mayoqchalar va maxsus tovushli ishora yoqilgan bo'lishi shart (YHQ 25-band).");
Q("special", "Orqangizdan faqat ko'k mayoqchasi yoqilgan, sireni o'chiq politsiya avtomobili kelmoqda. U 25-band bo'yicha imtiyozga egami?",
  ["Yo'q, imtiyoz uchun siren ham yoqilgan bo'lishi shart", "Ha, ko'k mayoqchaning o'zi imtiyoz uchun yetarli", "Ha, aholi punktida ko'k mayoqchaning o'zi yetarli", "Ha, agar yaqin faralar ham yoqilgan bo'lsa"],
  "Boshqa ishtirokchilarga nisbatan imtiyozga ega bo'lish uchun mayoqcha bilan birga maxsus tovushli ishora ham yoqilgan bo'lishi shart (YHQ 25-band).");
Q("special", "Tezkor xizmat haydovchisi imtiyozdan qachon foydalanishi mumkin?",
  ["O'ziga yo'l berilayotganiga ishonch hosil qilganidan so'ng", "Mayoqcha va sirenni yoqishi bilanoq, kutmasdan", "Siren va mayoqcha yoqilganidan bir necha soniya o'tgach", "Faqat tartibga soluvchi ruxsat bergandan so'ng"],
  "Ular o'zlariga yo'l berilayotganligiga ishonch hosil qilganlaridan so'nggina imtiyozdan foydalanishlari mumkin (YHQ 25-band).");
Q("special", "Mayoqcha va siren yoqilgan avtomobil kuzatib borayotgan transport vositalari imtiyozdan foydalanadimi?",
  ["Ha, foydalanadi", "Yo'q, imtiyoz faqat kuzatuvchi avtomobilga tegishli", "Faqat aholi punktidan tashqarida", "Faqat ularda ham siren bo'lsa"],
  "Ushbu imtiyozdan mayoqcha va maxsus tovushli ishorasi yoqilgan transport tomonidan kuzatib kelinayotgan transport vositalarining haydovchilari ham foydalanadilar (YHQ 25-band).");
Q("special", "Maxsus transport kuzatuvidagi (eskortdagi) transport vositalarida nima yoqilgan bo'lishi shart?",
  ["Yaqinni yorituvchi fara chiroqlari", "Avariya ishorasi", "Sariq mayoqcha", "Uzoqni yorituvchi faralar"],
  "Kuzatib kelinayotgan transport vositalarida yaqinni yorituvchi fara chiroqlari yoqilgan bo'lishi shart (YHQ 25-band).");
Q("special", "Ko'k mayoqcha va siren yoqilgan avtomobil kuzatuvida yaqin faralari yoqilgan avtomobillar kolonnasi kelmoqda. Siz nima qilasiz?",
  ["Kuzatuvchi avtomobilga ham, kolonnadagi avtomobillarga ham yo'l beraman", "Faqat sireni yoqilgan kuzatuvchi avtomobilga yo'l beraman", "Kolonnaga yo'l beraman, kuzatuvchi avtomobil o'zi o'tib ketadi", "Yo'l bermayman, faqat tezlikni kamaytiraman"],
  "Haydovchilar yaqinlashayotgan maxsus transportga, shuningdek ularning kuzatuvidagi yaqin faralari yoqilgan transport vositalariga yo'l berishlari shart (YHQ 26-band).");
Q("special", "Ko'k mayoqcha va maxsus tovushli ishorasi yoqilgan transport vositasini quvib o'tish mumkinmi?",
  ["Taqiqlanadi", "Aholi punktidan tashqarida mumkin", "U sekin harakatlansa mumkin", "Chap tomondan mumkin"],
  "Mayoqcha va maxsus tovushli ishorasi yoqilgan transport vositalarini, shuningdek ular kuzatuvidagilarni quvib o'tish taqiqlanadi (YHQ 26-band).", "noovertake");
Q("special", "Yo'l chetida ko'k-qizil mayoqchasini yoqib to'xtab turgan politsiya avtomobiliga yaqinlashmoqdasiz. Nima qilishingiz shart?",
  ["Zarur bo'lsa darhol to'xtay oladigan darajada tezlikni kamaytirish", "Albatta to'xtab, xodimning ruxsatini kutish", "Tovushli ishora berib, tezlikni saqlagan holda o'tish", "Tezlikni o'zgartirmay, chap tasmaga qayta tizilib o'tish"],
  "Mayoqchasini yoqib to'xtab turgan transport vositasiga yaqinlashayotgan haydovchilar zarur hollarda tezlikni darhol to'xtash imkonini beradigan darajada kamaytirishlari shart (YHQ 27-band).");
Q("special", "Zarg'aldoq yoki sariq rangli yalt-yalt etuvchi mayoqcha harakatlanishda imtiyoz beradimi?",
  ["Yo'q, faqat xavf haqida ogohlantiradi", "Ha, ko'k mayoqcha kabi imtiyoz beradi", "Ha, faqat yo'l ta'mirlash joyida", "Ha, tovushli ishora bilan birga yoqilsa"],
  "Yoqilgan zarg'aldoq va (yoki) sariq mayoqcha harakatlanishda imtiyoz bermaydi va boshqa ishtirokchilarni faqat xavf haqida ogohlantiradi (YHQ 28-band).");
Q("special", "Tartibga solinmagan teng yo'llar chorrahasida o'ngdan sariq mayoqchasi yoqilgan evakuator kelmoqda, siz to'g'riga ketyapsiz. Kim avval o'tadi?",
  ["Evakuator: u o'ng tomonda, mayoqcha esa imtiyoz bermaydi", "Men: sariq mayoqcha imtiyoz bermaydi, demak u yo'l beradi", "Evakuator: sariq mayoqcha unga imtiyoz beradi", "Ikkalamiz ham to'xtab, kelishib olamiz"],
  "Sariq mayoqcha imtiyoz bermaydi, shuning uchun umumiy qoidalar amal qiladi — teng yo'llarda o'ngdan kelayotganga yo'l beriladi (YHQ 28-band).", "w_equal");
Q("special", "Qaysi holatda zarg'aldoq yoki sariq mayoqcha yoqilgan bo'lishi kerak?",
  ["Yo'lda qurilish, ta'mirlash yoki tozalash ishlari olib borilayotganda", "Tez yordam avtomobili bemorni kasalxonaga olib ketayotganda", "Politsiya avtomobili ko'chalarda patrul xizmatini o'tayotganda", "Yo'lovchi taksisi bekatda yo'lovchi kutib turganda"],
  "Yo'lda qurilish, ta'mirlash yoki tozalash ishlari olib borilayotganda zarg'aldoq yoki sariq mayoqchalar yoqilgan bo'lishi kerak (YHQ 28-band).");
Q("special", "Shikastlangan yoki nosoz transport vositasini ortib tashiyotgan evakuatorda qanday mayoqcha yoqilishi kerak?",
  ["Zarg'aldoq yoki sariq", "Ko'k", "Qizil", "Ko'k va qizil"],
  "Shikastlangan, nosoz transport vositalarini ortishda va tashishda zarg'aldoq yoki sariq mayoqchalar yoqilgan bo'lishi kerak (YHQ 28-band).");
Q("special", "Portlovchi, tez alangalanadigan yoki radioaktiv moddalarni tashiyotgan transport vositasida nima yoqilgan bo'lishi kerak?",
  ["Zarg'aldoq yoki sariq yalt-yalt etuvchi mayoqcha", "Ko'k yalt-yalt etuvchi mayoqcha", "Butun yo'l davomida yoqilgan avariya ishorasi", "Uzoqni yorituvchi faralar"],
  "Portlovchi, tez alangalanadigan, radioaktiv va o'ta zaharli moddalarni tashishda zarg'aldoq yoki sariq mayoqchalar yoqilgan bo'lishi kerak (YHQ 28-band).");
Q("special", "Umumiy foydalanishdagi yo'lda velosipedchilarning tashkiliy guruhini kuzatib borayotgan avtomobilda qanday mayoqcha yoqiladi?",
  ["Zarg'aldoq yoki sariq", "Ko'k va qizil", "Faqat qizil", "Mayoqcha talab qilinmaydi"],
  "Velosipedchilarning tashkiliy jamlanmasini kuzatib borishda zarg'aldoq yoki sariq mayoqchalar yoqilgan bo'lishi kerak (YHQ 28-band).");
Q("special", "Gabarit o'lchamlari me'yordan ortiq, og'ir vazn yoki xavfli yuk tashiyotgan transportni kuzatib borayotgan avtomobilda qanday mayoqcha yoqiladi?",
  ["Zarg'aldoq yoki sariq", "Ko'k", "Qizil", "Ko'k va qizil"],
  "Gabarit o'lchamlari 164-banddagidan ortiq, og'ir vazn va katta hajmli hamda xavfli yuk tashiyotgan transportni kuzatib borishda zarg'aldoq yoki sariq mayoqcha yoqiladi (YHQ 28-band).", "id_oversize");
Q("special", "Quyidagi holatlardan qaysi biri 28-bandda sariq (zarg'aldoq) mayoqcha yoqiladigan holat sifatida keltirilmagan?",
  ["Bolalar guruhini avtobusda tashishda", "Yo'lni tozalash ishlari olib borilayotganda", "Radioaktiv moddalarni tashishda", "Velosipedchilar tashkiliy guruhini kuzatib borishda"],
  "28-band yo'l ishlari, nosoz transportni tashish, katta yuklarni kuzatish, xavfli moddalar tashish va velosipedchilar guruhini kuzatishni sanaydi; bolalarni tashish ro'yxatda yo'q (YHQ 28-band).");
Q("special", "Sariq mayoqchasi yoqilgan yo'l ta'mirlash mashinasi ish jarayonida qaysi belgi talabidan chetga chiqa olmaydi?",
  ["2.5 «To'xtamasdan harakatlanish taqiqlanadi»", "3.1 «Kirish taqiqlangan»", "3.27 «To'xtash taqiqlangan»", "4.1.1 «To'g'riga harakatlanish»"],
  "29-bandga ko'ra bunday haydovchilar belgilardan chetga chiqishi mumkin, ammo 2.2, 2.4–2.6, 3.11–3.14, 3.17.2 va 3.20 belgilari bundan mustasno (YHQ 29-band).", "stop");
Q("special", "Sariq mayoqchali yo'l tozalash mashinasi qaysi belgi talabiga albatta amal qilishi kerak?",
  ["3.20 «Quvib o'tish taqiqlangan»", "3.2 «Harakatlanish taqiqlangan»", "3.28 «To'xtab turish taqiqlangan»", "4.1.2 «O'ngga harakatlanish»"],
  "29-band istisnolari qatorida 3.20 belgisi ham bor, shuning uchun undan chetga chiqish mumkin emas (YHQ 29-band).", "noovertake");
Q("special", "Sariq mayoqchali yo'l ta'mirlash mashinasi haydovchisi 29-bandga ko'ra qaysi talabdan chetga chiqishi mumkin?",
  ["Yo'l chiziqlari talablaridan", "Tartibga soluvchining ishoralaridan", "2.4 «Yo'l bering» belgisidan", "3.20 «Quvib o'tish taqiqlangan» belgisidan"],
  "Sariq mayoqchali haydovchilar ish jarayonida xavfsizlikni ta'minlab yo'l chiziqlari talablaridan chetga chiqishi mumkin; 2.4 va 3.20 belgilari esa istisnolar qatorida (YHQ 29-band).");
Q("special", "Gabariti katta yuk tashiyotgan avtomobil va uni kuzatib borayotgan sariq mayoqchali avtomobil haydovchilari qaysi talabdan chetga chiqishi mumkin?",
  ["Xavfsizlikni ta'minlab, yo'l chiziqlari talablaridan", "Barcha yo'l belgilari talablaridan", "Svetofor ishoralaridan", "Tezlik cheklovlari va quvib o'tish taqiqlaridan"],
  "Gabarit o'lchamlari ortiq, og'ir vazn va katta hajmli yuk tashiyotgan transport va uni kuzatuvchi sariq mayoqchali avtomobil haydovchilari xavfsizlikni ta'minlab yo'l chiziqlari talablaridan chetga chiqishi mumkin (YHQ 29-band).", "id_oversize");
Q("special", "Chorrahadan tashqarida tramvay yo'li qatnov qismini kesib o'tadigan joyda kim imtiyozga ega?",
  ["Tramvay (depodan chiqish joylari bundan mustasno)", "Relssiz transport vositalari, chunki ular tezroq", "O'ng tomondan kelayotgan transport", "Chapdan kelayotgan transport"],
  "Tramvay yo'llari chorrahadan tashqarida qatnov qismini kesib o'tadigan joylarda tramvay relssiz transport vositalariga nisbatan imtiyozga ega (YHQ 131-band).");
Q("special", "Tramvay depodan chiqib, qatnov qismini kesib o'tmoqda. 131-banddagi tramvay imtiyozi bu joyda amal qiladimi?",
  ["Yo'q, depodan chiqish joylari bundan mustasno", "Ha, har doimgidek amal qiladi", "Ha, agar tramvay ovozli ishora bersa", "Ha, relsli transport doim ustun"],
  "131-bandga ko'ra tramvayning chorrahadan tashqaridagi imtiyozi depodan chiqish joylariga taalluqli emas (YHQ 131-band).");
Q("special", "5.9 yoki 5.10.1–5.10.3 belgilari bilan yo'nalishli transport uchun ajratilgan tasmada boshqa transport vositalariga nima taqiqlanadi?",
  ["Harakatlanish va to'xtash", "Faqat to'xtab turish", "Faqat harakatlanish, to'xtash mumkin", "Faqat tig'iz soatlarda harakatlanish"],
  "Yo'nalishli transport uchun ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to'xtashi taqiqlanadi (YHQ 132-band).");
Q("special", "5.9 belgisi bilan ajratilgan tasma boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan. O'ngga burilmoqchi bo'lgan haydovchi nima qilishi kerak?",
  ["Burilishdan oldin shu tasmaga qayta tizilishi", "Bu tasmaga kirmasdan, ikkinchi tasmadan burilishi", "Faqat avtobus yo'qligida chapdan burilishi", "Burilishdan voz kechishi"],
  "Agar 5.9 belgisi bilan belgilangan tasma uzuq-uzuq chiziq bilan ajratilgan bo'lsa, burilmoqchi bo'lgan transport vositalari bu tasmaga qayta tizilishlari kerak (YHQ 132-band).", "m_dashed");
Q("special", "Uzuq-uzuq chiziq bilan ajratilgan yo'nalishli transport tasmasiga yengil avtomobil qaysi maqsadda o'tishi mumkin?",
  ["Yo'lga chiqish yoki o'ng chetda yo'lovchi chiqarish-tushirish uchun", "Tirbandlikni aylanib o'tish uchun", "Tirbandlikda tezroq harakatlanib, chorrahaga yetib olish uchun", "Uzoq muddat to'xtab turish uchun"],
  "Bunday joylarda yo'nalishli transportga xalaqit bermaslik sharti bilan yo'lga chiqish, o'ng chetda yo'lovchilarni chiqarish va tushirish uchun bu bo'lakka o'tishga ruxsat etiladi (YHQ 132-band).");
Q("special", "Aholi punktida avtobus burilish ko'rsatkichini yoqib, bekatdan harakatlanishni boshlamoqda. Siz nima qilasiz?",
  ["Unga yo'l beraman", "U menga yo'l berishi kerak, chunki men asosiy oqimdaman", "Tovushli ishora berib, o'tib ketaman", "Faqat u to'xtash chizig'idan o'tgan bo'lsa yo'l beraman"],
  "Haydovchilar aholi punktlarida bekatdan harakatlanishni boshlayotgan avtobus va trolleybuslarga yo'l berishlari kerak (YHQ 133-band).");
Q("special", "133-bandga ko'ra aholi punktida bekatdan harakatni boshlayotgan qaysi transport vositalariga yo'l berish talab qilinadi?",
  ["Avtobus va trolleybuslarga", "Faqat avtobuslarga", "Avtobus, trolleybus va tramvaylarga", "Barcha yo'nalishli taksilarga"],
  "133-band aholi punktlarida bekatdan harakatlanishni boshlayotgan avtobus va trolleybuslarga yo'l berishni talab qiladi (YHQ 133-band).");
Q("special", "Bekatdan chiqayotgan avtobus haydovchisi harakatni qachon boshlashi mumkin?",
  ["O'ziga yo'l berilganligiga ishonch hosil qilgandan keyin", "Burilish ko'rsatkichini yoqishi bilanoq, darhol", "Yo'lovchilar o'tirishi bilanoq, chunki u ustun", "Faqat orqada va yonida transport bo'lmaganda"],
  "Avtobus va trolleybus haydovchilari o'zlariga yo'l berilganligiga ishonch hosil qilganliklaridan keyingina harakatlanishni boshlashlari mumkin (YHQ 133-band).");
Q("special", "Yo'nalishli transport vositalariga bekatlardan tashqari joylarda yo'lovchi olish va tushirish mumkinmi?",
  ["Taqiqlanadi, yo'nalishli taksilar bundan mustasno", "Mumkin, agar to'xtash taqiqlanmagan bo'lsa", "Taqiqlanadi, avtobuslar bundan mustasno", "Mumkin, avtobuslar uchun yo'l chetida istalgan joyda"],
  "Yo'nalishli transport vositalariga bekatlardan tashqari joylarda yo'lovchi olish va tushirish taqiqlanadi (yo'nalishli taksilar bundan mustasno) (YHQ 133-band).");
Q("special", "Svetofor tramvay va relssiz transportga bir vaqtda harakatlanishga ruxsat berdi. Kim oldin o'tadi?",
  ["Harakat yo'nalishidan qat'i nazar tramvay", "O'ng tomondan kelayotgan transport", "To'g'riga harakatlanayotgan transport", "Relssiz transport, chunki u tezroq"],
  "Svetofor yoki tartibga soluvchi ishoralari tramvay va relssiz transportga bir vaqtda ruxsat bersa, harakat yo'nalishidan qat'i nazar tramvay oldin o'tish huquqiga ega (YHQ 101-band).");
Q("special", "Tramvay qizil ishora bilan birga yongan qo'shimcha tarmoqning yashil strelkasi bo'yicha harakatlanmoqda. U boshqalarga nisbatan qanday?",
  ["Boshqa yo'nalishlarda harakatlanayotganlarga yo'l berishi kerak", "Yo'nalishidan qat'i nazar, oldin o'tish huquqiga ega", "Faqat piyodalarga va velosipedchilarga yo'l beradi", "Faqat chap tomondan kelayotgan transportga yo'l beradi"],
  "Qizil yoki sariq ishora bilan bir vaqtda yongan qo'shimcha tarmoqning yashil strelkasi bo'yicha harakatlanayotgan tramvay boshqa yo'nalishlardagi transportga yo'l berishi kerak (YHQ 101-band).");
