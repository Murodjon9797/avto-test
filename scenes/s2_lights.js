// Animatsion savollar: svetofor va tartibga soluvchi ishoralari (YHQ 30-43, 98-103) — 45 ta vaziyat

// ===================== SVETOFOR =====================

// L1. Qizil — to'xtash chizig'i oldida to'xtash
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "red") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-20,165 L320,165", color: "#1e88e5", label: "B", loop: true, dur: 4.5 }),
  "Siz janubdan to'g'riga ketmoqchisiz, svetoforda qizil ishora yonib turibdi. Qayerda to'xtashingiz kerak?",
  ["To'xtash chizig'i oldida, uning ustiga chiqmasdan", "Svetofor ustuni ro'parasida, to'xtash chizig'idan o'tib", "Chorrahaga kirib, ko'ndalang yo'l chetida", "B o'tib ketsa, to'xtamasdan davom etaman"],
  "Taqiqlovchi ishorada transport vositasi to'xtash chizig'i oldida to'xtaydi, uning eng oldingi nuqtasi chiziq ustiga chiqmasligi kerak (YHQ 41-band).");

// L2. Qizil — to'xtash chizig'i yo'q
A(SCN.cross() + SCN.light(95, 178, "red", 90) +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,320 L165,-20", color: "#43a047", label: "A", loop: true, dur: 4 }),
  "Siz g'arbdan yaqinlashyapsiz, svetoforda qizil ishora, to'xtash chizig'i chizilmagan. Qayerda to'xtaysiz?",
  ["Kesishayotgan qatnov qismi chegarasidan oldin, piyodalarga xalaqit bermasdan", "Chorraha markazida, A o'tib ketguncha", "Svetofordan 50 m oldin", "To'xtash chizig'i bo'lmagani uchun to'xtamasam ham bo'ladi"],
  "To'xtash chizig'i bo'lmasa, chorrahada haydovchi qatnov qismlari kesishgan joydan oldin, piyodalarga xalaqit bermasdan to'xtaydi (YHQ 41-band).");

// L3. Doimiy sariq ishoraning ma'nosi
A(SCN.cross() + SCN.light(191, 86, "yellow", 270) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", dur: 5, hold: 0.7 }),
  "Siz sharqdan chorrahaga yaqinlashayotganingizda svetoforda sariq ishora yondi, bemalol to'xtashga masofa yetarli. Bu ishora nimani bildiradi?",
  ["Harakatlanishni taqiqlaydi va ishoralar almashuvi haqida ogohlantiradi", "Ehtiyotkorlik bilan harakatlanishga ruxsat beradi", "Faqat o'ngga burilishga ruxsat beradi", "Tez orada yashil yonishini bildiradi"],
  "Sariq ishora harakatlanishni taqiqlaydi (42-banddagi holatdan tashqari) va ishoralar almashuvi haqida ogohlantiradi (YHQ 31-band).");

// L4. Yashil sariqqa almashdi — keskin tormozsiz to'xtab bo'lmaydi
A(SCN.cross() + SCN.light(93, 72, "g2y", 180) +
  SCN.car({ path: "M135,-20 L135,320", color: ME, label: "Siz", loop: true, dur: 4 }),
  "Shimoldan kelayotgan edingiz; chorrahaga kirishingizga bir necha metr qolganda yashil o'rniga sariq yondi va siz keskin tormoz bermasdan to'xtay olmadingiz. Harakatingiz qanday baholanadi?",
  ["To'g'ri — bunday holatda harakatni davom ettirishga ruxsat etiladi", "Qoidabuzarlik — sariqda har qanday holatda to'xtash shart", "Qoidabuzarlik — chorrahada to'xtab, yashilni kutish kerak edi", "To'g'ri, faqat ovozli signal berilgan bo'lsa"],
  "Yashildan keyin sariq yonganda keskin tormoz bermasdan to'xtashga ulgura olmaydigan haydovchiga harakatni davom ettirish ruxsat etiladi (YHQ 42-band).");

// L5. Qizil va sariq birga
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "redyellow") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }) +
  SCN.car({ path: "M320,135 L-20,135", color: "#fb8c00", label: "B", loop: true, dur: 4.5 }),
  "Svetoforda qizil va sariq ishoralar bir vaqtda yondi. Harakatni boshlash mumkinmi?",
  ["Yo'q, bu ishora harakatlanishni taqiqlaydi — tez orada yashil yonadi", "Ha, sariq qo'shilgani ruxsatni bildiradi", "Ha, lekin faqat o'ngga burilish uchun", "Ha, agar B chorrahadan chiqib ketgan bo'lsa"],
  "Qizil va sariq ishoralarning birga yonishi harakatlanishni taqiqlaydi va ko'p o'tmay yashil yonishi haqida axborot beradi (YHQ 31-band).");

// L6. Yashil yondi — piyoda o'tishni tugallamoqda
A(SCN.cross() + SCN.zebra(80, 120, 18, 60) + SCN.light(95, 178, "r2g", 90) +
  SCN.car({ path: "M0,165 L64,165", color: ME, label: "Siz" }) +
  SCN.person({ path: "M89,196 L89,104", loop: true, dur: 5, color: "#8e24aa" }),
  "Siz g'arbdan kelyapsiz. Sizga yashil ishora yondi, ammo oldingizdagi o'tish joyida piyoda yo'lni kesib o'tishni tugatmoqda. Nima qilasiz?",
  ["Piyodaga o'tishni tugallashiga imkon beraman", "Yashil yongani uchun darhol harakatni boshlayman", "Ovozli signal berib, piyodani shoshiltiraman", "Piyodani orqa tomonidan aylanib o'taman"],
  "Ruxsat etuvchi ishora yonganda haydovchi qatnov qismidan o'tishni tugallayotgan piyodalarga yo'l berishi shart (YHQ 103-band).");

// L7. Yashil yondi — chorrahada transport harakatni tugallamoqda
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "r2g") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }) +
  SCN.car({ path: "M100,165 L330,165", color: "#00897b", label: "B", dur: 4, hold: 0.6 }),
  "Sizga yashil ishora yondi, ammo ko'ndalang yo'nalishdagi B chorrahadan o'tishni hali tugatmagan. Kim birinchi harakatlanadi?",
  ["B — u chorrahadan chiqib ketishi kerak", "Siz — sizga yashil yondi", "B to'xtab, sizga yo'l berishi kerak", "Ikkalangiz bir vaqtda"],
  "Ruxsat etuvchi ishora yonganda haydovchi chorraha orqali harakatlanishni tugallayotgan transport vositalariga yo'l berishi shart (YHQ 103-band).");

// L8. Yashilda chapga burilish (sharqdan)
A(SCN.cross() + SCN.light(191, 86, "green", 270) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M-20,165 L320,165", color: "#3949ab", label: "B", loop: true, dur: 4 }),
  "Siz sharqdan kelyapsiz va yashil ishorada chapga burilmoqchisiz. Qarama-qarshi tomondan B to'g'riga harakatlanmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — sizga ham yashil yonib turibdi", "B — faqat u o'ng tomonda bo'lgani uchun", "Kim birinchi chorrahaga kirsa"],
  "Ruxsat etuvchi ishorada chapga burilayotgan haydovchi qarama-qarshi tomondan to'g'riga va o'ngga harakatlanayotganlarga yo'l beradi (YHQ 99-band).");

// L9. Yashilda qayrilib olish — qarama-qarshi o'ngga burilayotgan
A(SCN.cross() + SCN.light(93, 72, "green", 180) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M165,320 L165,190 Q165,165 190,165 L320,165", color: "#fdd835", label: "B", blink: "R", loop: true, dur: 4.5 }),
  "Siz shimoldan kelib, yashil ishorada qayrilib olmoqchisiz. Qarama-qarshi tomondan B o'ngga burilmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — qayrilib olayotgan ustun", "Siz — B burilish qilmoqda", "Bir vaqtda o'tiladi"],
  "Yashilda chapga burilayotgan yoki qayrilib olayotgan haydovchi qarama-qarshidan to'g'riga va o'ngga ketayotganlarga yo'l beradi (YHQ 99-band).");

// L10. Yashilda to'g'riga — qarama-qarshi chapga burilmoqchi
A(SCN.cross() + SCN.light(95, 178, "green", 90) + SCN.light(191, 86, "green", 270) +
  SCN.car({ path: "M300,135 L196,135", color: "#6d4c41", label: "B", blink: "L" }) +
  SCN.car({ path: "M-20,165 L320,165", color: ME, label: "Siz", loop: true, dur: 4.5 }),
  "Ikkala qarama-qarshi yo'nalishga yashil ishora yongan. Siz g'arbdan to'g'riga ketyapsiz, B esa sharqdan chapga burilmoqchi. Kim birinchi o'tadi?",
  ["Siz", "B — u sizga nisbatan o'ng tomonda", "B — u chorrahaga avval yetib kelgan", "Svetofor almashguncha hech kim"],
  "Ruxsat etuvchi ishorada chapga burilayotgan B qarama-qarshidan to'g'riga harakatlanayotgan sizga yo'l berishi shart (YHQ 99-band).");

// L11. Qo'shimcha seksiya — chapga strelka, ko'ndalang transport
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "redleft") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M320,135 L-20,135", color: "#43a047", label: "B", loop: true, dur: 5 }),
  "Asosiy ishora qizil, qo'shimcha seksiyada chapga yashil strelka yondi. Siz chapga burilmoqchisiz, B o'ng tomondan ko'ndalang yo'lda to'g'riga harakatlanmoqda. Nima qilasiz?",
  ["B ga yo'l berib, keyin chapga buriladi", "Strelka yonganligi uchun birinchi buriladi", "Qizil yonib turgani uchun strelkaga e'tibor bermay kutaman", "Ovozli signal berib buriladi"],
  "Qo'shimcha seksiyaning yashil strelkasi bo'yicha harakatlanayotgan haydovchi boshqa yo'nalishlardan harakatlanayotgan transportga yo'l berishi kerak (YHQ 100-band).");

// L12. Chapga strelka qayrilib olishga ham ruxsat beradi
A(SCN.cross() + SCN.light(95, 178, "redleft", 90) +
  SCN.car({ path: "M-20,165 L140,165 A15,15 0 0 0 140,135 L-20,135", color: ME, label: "Siz", blink: "L", loop: true, dur: 6 }),
  "Siz g'arbdan kelyapsiz. Asosiy ishora qizil, qo'shimcha seksiyada chapga yashil strelka yonmoqda. Qayrilib olishni taqiqlovchi belgi yo'q. Qayrilib olish mumkinmi?",
  ["Ha, chapga strelka qayrilib olishga ham ruxsat beradi", "Yo'q, strelka faqat chapga burilishga ruxsat beradi", "Yo'q, asosiy ishora qizil bo'lgani uchun", "Faqat asosiy ishora yashil bo'lganda mumkin"],
  "Qayrilib olish belgi bilan taqiqlanmagan bo'lsa, chapga burilishga ruxsat beruvchi yo'naltirgich qayrilib olishga ham ruxsat beradi (YHQ 32-band).");

// L13. Chapga strelka — to'g'riga yurish mumkin emas
A(SCN.cross() + SCN.light(93, 72, "redleft", 180) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#8e24aa", label: "A" }),
  "Siz shimoldan kelib, to'g'riga ketmoqchisiz. Asosiy ishora qizil, qo'shimcha seksiyada chapga yashil strelka yonib turibdi. Nima qilasiz?",
  ["Asosiy yashil ishora yonguncha kutaman", "Strelka yonganda barcha yo'nalishlarga ruxsat — o'taman", "Ehtiyotkorlik bilan to'g'riga o'taman", "Chapga burilib, keyin qayrilib olaman"],
  "Yo'naltirgich ko'rinishidagi ishora faqat ko'rsatilgan yo'nalishga ta'sir etadi; to'g'riga yo'nalish uchun asosiy qizil ishora amal qiladi (YHQ 32-band).");

// L14. O'ngga strelka (sharqdan) — boshqa yo'nalishdagilarga yo'l berish
A(SCN.cross() + SCN.light(191, 86, "redarrow", 270) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M165,320 L165,-20", color: "#fafafa", label: "B", loop: true, dur: 4 }),
  "Siz sharqdan kelyapsiz: asosiy ishora qizil, qo'shimcha seksiyada o'ngga yashil strelka. O'ngga burilmoqchisiz, B esa janubdan to'g'riga ketmoqda. Nima qilasiz?",
  ["B ga yo'l berib, keyin o'ngga buriladi", "Strelka bo'yicha birinchi buriladi", "B chap tomonda, u menga yo'l beradi", "Qizil yongani uchun strelkadan foydalanmayman"],
  "Qizil ishora bilan birga yongan qo'shimcha seksiya strelkasi bo'yicha harakatlanayotgan haydovchi boshqa yo'nalishlardagi transportga yo'l beradi (YHQ 100-band).");

// L15. O'ngga strelka — to'g'riga mumkin emas
A(SCN.cross() + SCN.light(93, 72, "redarrow", 180) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-20,165 L320,165", color: "#546e7a", label: "C", loop: true, dur: 4.5 }),
  "Shimoldan kelyapsiz: asosiy ishora qizil, qo'shimcha seksiyada o'ngga yashil strelka. Siz to'g'riga ketmoqchisiz. Harakatlanish mumkinmi?",
  ["Yo'q, strelka faqat o'ngga harakatlanishga ruxsat beradi", "Ha, C o'tib ketgach", "Ha, qo'shimcha seksiya yongani uchun", "Ha, faqat tezlikni kamaytirib"],
  "Yo'naltirgich ko'rinishidagi ishoralar faqat ko'rsatilgan yo'nalishga ta'sir etadi (YHQ 32-band).");

// L16. Svetofor o'chgan — imtiyoz belgilari
A(SCN.cross() + SCN.light(186, 192, "off") + SCN.light(191, 86, "off", 270) +
  SCN.sign("giveway", 206, 206) + SCN.sign("mainroad", 222, 76) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }),
  "Chorrahadagi svetoforlar ishlamayapti. Sizning yo'lingizda «Yo'l bering» belgisi, B esa «Asosiy yo'l» belgisi bo'yicha kelmoqda. Ikkalangiz ham to'g'riga. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B chap tomonda", "Svetofor yoqilguncha hech kim", "Kim birinchi yetib kelsa"],
  "Svetoforlar ishlamayotgan chorraha tartibga solinmagan hisoblanadi; haydovchilar imtiyoz belgilariga amal qiladi (YHQ 98-band).");

// L17. Svetofor o'chgan, belgilar yo'q — o'ng qo'l qoidasi
A(SCN.cross() + SCN.light(95, 178, "off", 90) + SCN.light(186, 192, "off") +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#fb8c00", label: "B" }),
  "Svetoforlar o'chirilgan, ustuvorlik belgilari yo'q. Siz g'arbdan, B janubdan kelmoqda, ikkalangiz ham to'g'riga ketmoqchisiz. Kim birinchi o'tadi?",
  ["B — u sizga o'ng tomondan yaqinlashmoqda", "Siz — B sizga chap tomonda", "Svetofor yoqilguncha ikkalangiz kutasiz", "Kim tezroq bo'lsa"],
  "Svetoforlar ishlamayotgan chorraha tartibga solinmagan hisoblanadi; teng ahamiyatli yo'llarda o'ngdan yaqinlashayotganga yo'l beriladi (YHQ 98-band).");

// L18. Sariq miltillovchi + imtiyoz belgilari
A(SCN.cross() + SCN.light(93, 72, "yblink", 180) + SCN.light(95, 178, "yblink", 90) +
  SCN.sign("mainroad", 66, 84) + SCN.sign("giveway", 60, 200) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#00897b", label: "B" }),
  "Svetoforlarda sariq ishora miltillamoqda. Siz shimoldan «Asosiy yo'l» belgisi bo'yicha, B g'arbdan «Yo'l bering» belgisi bo'yicha kelmoqda. Kim birinchi o'tadi?",
  ["Siz", "B — u sizga nisbatan o'ng tomonda", "Kim birinchi chorrahaga yetsa", "Ikkalangiz ham to'xtab, kelishib olasiz"],
  "Miltillovchi sariq ishorali chorraha tartibga solinmagan hisoblanadi, haydovchilar imtiyoz belgilariga amal qiladi (YHQ 98-band).");

// L19. Sariq miltillovchi, belgilar yo'q (sharqdan)
A(SCN.cross() + SCN.light(191, 86, "yblink", 270) + SCN.light(93, 72, "yblink", 180) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#3949ab", label: "A" }),
  "Ikkala svetoforda sariq ishora miltillamoqda, ustuvorlik belgilari yo'q. Siz sharqdan, A shimoldan kelmoqda, ikkalangiz ham to'g'riga. Kim birinchi o'tadi?",
  ["A — u sizga o'ng tomondan yaqinlashmoqda", "Siz — A chap tomonda", "Miltillovchi sariqda hamma to'xtashi shart", "Kim birinchi signal bersa"],
  "Miltillovchi sariq ishorali chorraha tartibga solinmagan; teng ahamiyatli yo'llarda o'ngdagiga yo'l beriladi (YHQ 98-band).");

// L20. Svetofor imtiyoz belgisidan ustun
A(SCN.cross() + SCN.light(186, 192, "green") + SCN.light(191, 86, "red", 270) +
  SCN.sign("giveway", 206, 206) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#6d4c41", label: "B" }),
  "Svetofor ishlamoqda: sizga yashil, B ga qizil ishora. Ammo sizning yo'lingizda «Yo'l bering» belgisi o'rnatilgan. Kim birinchi o'tadi?",
  ["Siz — svetofor ishoralariga amal qilinadi", "B — siz «Yo'l bering» belgisi bo'yicha harakatlanmoqdasiz", "B — u o'ng tomonda", "Belgi va svetofor zid, ikkalangiz kutasiz"],
  "Svetofor ishoralari imtiyoz belgilari talablariga zid bo'lgan hollarda haydovchilar svetofor ishoralariga amal qiladi (YHQ 43-band).");

// L21. Tramvay bilan bir vaqtda ruxsat
A(SCN.cross({ rails: true }) + SCN.light(191, 86, "green", 270) + SCN.light(95, 178, "green", 90) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M-40,165 L340,165", color: "#fdd835", label: "T", kind: "tram", loop: true, dur: 6 }),
  "Ikkala yo'nalishga yashil ishora yongan. Siz sharqdan chapga burilmoqchisiz, qarama-qarshi tomondan tramvay to'g'riga kelmoqda. Kim birinchi o'tadi?",
  ["Tramvay", "Siz — tramvay sizga chap tomonda", "Kim birinchi chorrahaga kirsa", "Siz — ovozli signal bersangiz"],
  "Svetofor tramvay va relssiz transportga bir vaqtda ruxsat bersa, harakat yo'nalishidan qat'i nazar tramvay oldin o'tish huquqiga ega (YHQ 101-band).");

// L22. Yashilda kirib, chorrahadan chiqish
A(SCN.cross() + SCN.light(186, 192, "red") + SCN.light(93, 72, "red", 180) +
  SCN.car({ path: "M135,0 L135,104", color: "#43a047", label: "B" }) +
  SCN.car({ path: "M165,152 Q165,135 140,135 L-20,135", color: ME, label: "Siz", blink: "L", keyPoints: "0;0;1", keyTimes: "0;0.5;1", dur: 5 }),
  "Siz yashil ishorada chorrahaga kirib, chapga burilish uchun qarama-qarshi oqimni kutib turgan edingiz. Shu payt svetoforda qizil yondi, B to'xtadi. Nima qilasiz?",
  ["Chorrahadan mo'ljallangan yo'nalishda chiqib ketaman", "Yashil yonguncha chorrahada turaman", "Orqaga yurib, to'xtash chizig'iga qaytaman", "Burilishni bekor qilib, to'g'riga ketaman"],
  "Ruxsat etuvchi ishorada chorrahaga kirgan haydovchi svetofor ishoralaridan qat'i nazar mo'ljallangan yo'nalishda chorrahadan chiqishi kerak (YHQ 102-band).");

// L23. O'z svetofori o'chgan, ko'ndalang ishlamoqda
A(SCN.cross() + SCN.light(186, 192, "off") + SCN.light(95, 178, "green", 90) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-20,165 L320,165", color: "#8e24aa", label: "B", loop: true, dur: 4 }),
  "Sizning yo'nalishingizdagi svetofor o'chib qolgan, ko'ndalang yo'nalishdagi svetoforda esa yashil yonib turibdi, B harakatlanmoqda. Nima qilasiz?",
  ["To'xtab turaman — ko'ndalang yo'nalishdagi svetofor ishlamoqda", "Svetoforim o'chgan, demak chorraha tartibga solinmagan — o'taman", "B chap tomonda, u menga yo'l berishi kerak", "Avariya chiroqlarini yoqib o'taman"],
  "Svetofor ishlamasa, haydovchi ko'ndalang yo'nalishdagi svetofor ishoralari ham ishlamayotganiga ishonch hosil qilgandan keyingina harakatni davom ettiradi (YHQ 43-band).");

// ===================== TARTIBGA SOLUVCHI =====================

// C1. Qo'llar yon tomonga, rot 0 — chap yonidan, chapga
A(SCN.cross() +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.controller(150, 150, "side", 0),
  "Tartibga soluvchi qo'llarini yon tomonga uzatgan. Siz uning chap yonidan (sharqdan) yaqinlashyapsiz va chapga burilmoqchisiz. Harakatlanish mumkinmi?",
  ["Yo'q, bu holatda faqat to'g'riga va o'ngga harakatlanish mumkin", "Ha, yon tomondan barcha yo'nalishlarga ruxsat", "Ha, qarama-qarshi transport bo'lmasa", "Faqat qayrilib olish mumkin"],
  "Qo'llar yon tomonga uzatilganda chap va o'ng yon tomondan relssiz transportga faqat to'g'riga va o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C2. Qo'llar yon tomonga, rot 0 — ko'krak tomonidan
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#1e88e5", label: "B" }) +
  SCN.controller(150, 150, "side", 0),
  "Tartibga soluvchi qo'llarini yon tomonga uzatib, ko'kragi bilan sizga qarab turibdi. Siz janubdan to'g'riga ketmoqchisiz. Harakatlanish mumkinmi?",
  ["Yo'q, ko'krak tomonidan harakatlanish taqiqlanadi", "Ha, faqat to'g'riga", "Ha, to'g'riga va o'ngga", "Faqat o'ngga burilish mumkin"],
  "Qo'llar yon tomonga uzatilganda old va orqa tomonidan barcha transport va piyodalarning harakatlanishi taqiqlanadi (YHQ 38-band).");

// C3. Qo'llar yon tomonga, rot 90 — chap yonidan
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#fdd835", label: "A" }) +
  SCN.controller(150, 150, "side", 90),
  "Tartibga soluvchi ko'kragi bilan g'arbga qarab, qo'llarini yon tomonga uzatgan. Siz janubdan — uning chap yonidan yaqinlashyapsiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["To'g'riga va o'ngga", "Faqat to'g'riga", "Barcha yo'nalishlarda", "Harakatlanish taqiqlanadi"],
  "Qo'llar yon tomonga uzatilganda chap va o'ng yon tomondan relssiz transportga to'g'riga va o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C4. Qo'llar yon tomonga, rot 90 — orqa tomonidan, o'ngga
A(SCN.cross() +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "R" }) +
  SCN.controller(150, 150, "side", 90),
  "Tartibga soluvchi qo'llarini yon tomonga uzatgan, siz unga orqa tomonidan (sharqdan) yaqinlashyapsiz va o'ngga burilmoqchisiz. Harakatlanish mumkinmi?",
  ["Yo'q, orqa tomonidan harakatlanish taqiqlanadi", "Ha, o'ngga burilishga ruxsat", "Ha, piyodalarga yo'l berib", "Faqat to'g'riga mumkin"],
  "Qo'llar yon tomonga uzatilganda tartibga soluvchining old va orqa tomonidan harakatlanish taqiqlanadi (YHQ 38-band).");

// C5. Qo'llar yon tomonga, rot 180 — ko'krak tomonidan (shimoldan)
A(SCN.cross() +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#43a047", label: "B" }) +
  SCN.controller(150, 150, "side", 180),
  "Siz shimoldan yaqinlashyapsiz; tartibga soluvchi qo'llarini yon tomonga uzatgan va ko'kragi bilan sizga qaragan. Qaysi yo'nalishda harakatlanish mumkin?",
  ["Hech qaysi — harakatlanish taqiqlanadi", "Faqat o'ngga", "To'g'riga va o'ngga", "Barcha yo'nalishlarda"],
  "Qo'llar yon tomonga uzatilganda ko'krak (old) tomonidan barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 38-band).");

// C6. Qo'llar yon tomonga, rot 270 — chap yonidan, qayrilib olish
A(SCN.cross() +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "L" }) +
  SCN.controller(150, 150, "side", 270),
  "Tartibga soluvchi ko'kragi bilan sharqqa qarab, qo'llarini yon tomonga uzatgan. Siz shimoldan — uning chap yonidan kelib, qayrilib olmoqchisiz. Bu mumkinmi?",
  ["Yo'q, faqat to'g'riga va o'ngga harakatlanish mumkin", "Ha, yon tomondan barcha yo'nalishlarga ruxsat", "Ha, qarama-qarshi oqim bo'lmasa", "Ha, chap yondan faqat qayrilish mumkin"],
  "Qo'llar yon tomonga uzatilganda yon tomonlardan relssiz transportga faqat to'g'riga va o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C7. O'ng qo'l oldinga, rot 0 — chap yonidan
A(SCN.cross() +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.controller(150, 150, "forward", 0),
  "Tartibga soluvchi o'ng qo'lini oldinga uzatgan. Siz sharqdan — uning chap yonidan yaqinlashyapsiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["Barcha yo'nalishlarda", "Faqat o'ngga", "To'g'riga va o'ngga", "Harakatlanish taqiqlanadi"],
  "O'ng qo'l oldinga uzatilganda chap yonidan relssiz transport vositalariga barcha yo'nalishlarda harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C8. O'ng qo'l oldinga, rot 0 — ko'krak tomonidan
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#fb8c00", label: "A" }) +
  SCN.controller(150, 150, "forward", 0),
  "Tartibga soluvchi o'ng qo'lini siz tomonga — oldinga uzatgan, ko'kragi sizga qaragan. Siz janubdan kelyapsiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["Faqat o'ngga", "To'g'riga va o'ngga", "Barcha yo'nalishlarda", "Harakatlanish taqiqlanadi"],
  "O'ng qo'l oldinga uzatilganda oldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C9. O'ng qo'l oldinga, rot 0 — o'ng yonidan
A(SCN.cross() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.controller(150, 150, "forward", 0),
  "Tartibga soluvchi o'ng qo'lini oldinga uzatgan, siz g'arbdan — uning o'ng yonidan yaqinlashyapsiz va to'g'riga ketmoqchisiz. Harakatlanish mumkinmi?",
  ["Yo'q, o'ng yonidan harakatlanish taqiqlanadi", "Ha, to'g'riga mumkin", "Ha, faqat o'ngga mumkin", "Ha, barcha yo'nalishlarga"],
  "O'ng qo'l oldinga uzatilganda orqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 38-band).");

// C10. O'ng qo'l oldinga, rot 0 — orqa tomonidan
A(SCN.cross() +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#00897b", label: "B" }) +
  SCN.controller(150, 150, "forward", 0),
  "Siz shimoldan, tartibga soluvchining orqa tomonidan yaqinlashyapsiz; u o'ng qo'lini oldinga uzatgan. Siz chapga burilmoqchisiz. Harakatlanish mumkinmi?",
  ["Yo'q, orqa tomonidan harakatlanish taqiqlanadi", "Ha, faqat chapga", "Ha, barcha yo'nalishlarga", "Ha, faqat o'ngga"],
  "O'ng qo'l oldinga uzatilganda orqa tomonidan barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 38-band).");

// C11. O'ng qo'l oldinga, rot 90 — chap yonidan, qayrilib olish
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }) +
  SCN.controller(150, 150, "forward", 90),
  "Tartibga soluvchi ko'kragi bilan g'arbga qarab, o'ng qo'lini oldinga uzatgan. Siz janubdan — uning chap yonidan kelib, qayrilib olmoqchisiz. Bu mumkinmi?",
  ["Ha, chap yonidan barcha yo'nalishlarda harakatlanish mumkin", "Yo'q, faqat o'ngga burilish mumkin", "Yo'q, faqat to'g'riga va o'ngga", "Yo'q, harakatlanish taqiqlanadi"],
  "O'ng qo'l oldinga uzatilganda chap yonidan relssiz transportga barcha yo'nalishlarda harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C12. O'ng qo'l oldinga, rot 90 — ko'krak tomonidan, chapga
A(SCN.cross() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#3949ab", label: "A" }) +
  SCN.controller(150, 150, "forward", 90),
  "Siz g'arbdan kelyapsiz, tartibga soluvchi ko'kragi bilan sizga qarab o'ng qo'lini oldinga uzatgan. Siz chapga burilmoqchisiz. Bu mumkinmi?",
  ["Yo'q, ko'krak tomonidan faqat o'ngga burilish mumkin", "Ha, barcha yo'nalishlarda", "Ha, qarama-qarshi transportga yo'l berib", "Yo'q, umuman harakatlanish taqiqlanadi"],
  "O'ng qo'l oldinga uzatilganda oldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C13. O'ng qo'l oldinga, rot 180 — chap yonidan, chapga
A(SCN.cross() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz", blink: "L" }) +
  SCN.controller(150, 150, "forward", 180),
  "Tartibga soluvchi ko'kragi bilan shimolga qarab, o'ng qo'lini oldinga uzatgan. Siz g'arbdan — uning chap yonidan kelib, chapga burilmoqchisiz. Harakatlanish mumkinmi?",
  ["Ha, chapga burilish mumkin", "Yo'q, faqat to'g'riga va o'ngga", "Yo'q, faqat o'ngga", "Yo'q, harakatlanish taqiqlanadi"],
  "O'ng qo'l oldinga uzatilganda chap yonidan relssiz transport vositalariga barcha yo'nalishlarda harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C14. O'ng qo'l oldinga, rot 270 — ko'krak tomonidan, o'ngga
A(SCN.cross() +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "R" }) +
  SCN.controller(150, 150, "forward", 270),
  "Siz sharqdan kelyapsiz; tartibga soluvchi ko'kragi bilan sizga qarab, o'ng qo'lini oldinga uzatgan. Siz o'ngga burilmoqchisiz. Harakatlanish mumkinmi?",
  ["Ha, ko'krak tomonidan o'ngga burilish mumkin", "Yo'q, ko'krak tomonidan harakatlanish taqiqlanadi", "Yo'q, faqat to'g'riga mumkin", "Yo'q, faqat chapga mumkin"],
  "O'ng qo'l oldinga uzatilganda oldi tomonidan barcha transport vositalariga o'ngga harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C15. O'ng qo'l oldinga, rot 270 — o'ng yonidan
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#8e24aa", label: "B" }) +
  SCN.controller(150, 150, "forward", 270),
  "Tartibga soluvchi ko'kragi bilan sharqqa qarab, o'ng qo'lini oldinga uzatgan. Siz janubdan — uning o'ng yonidan yaqinlashyapsiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["Harakatlanish taqiqlanadi", "Faqat o'ngga", "To'g'riga va o'ngga", "Barcha yo'nalishlarda"],
  "O'ng qo'l oldinga uzatilganda o'ng yonidan va orqa tomonidan barcha transport vositalarining harakatlanishi taqiqlanadi (YHQ 38-band).");

// C16. O'ng qo'l oldinga, rot 270 — chap yonidan, to'g'riga
A(SCN.cross() +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#546e7a", label: "C" }) +
  SCN.controller(150, 150, "forward", 270),
  "Tartibga soluvchi o'ng qo'lini oldinga uzatgan, ko'kragi sharqqa qaragan. Siz shimoldan — uning chap yonidan kelib, to'g'riga ketmoqchisiz. Harakatlanish mumkinmi?",
  ["Ha, chap yonidan barcha yo'nalishlarda harakatlanish mumkin", "Yo'q, faqat o'ngga burilish mumkin", "Yo'q, chap yonidan harakat taqiqlanadi", "Faqat C o'tib ketgandan keyin, o'ngga"],
  "O'ng qo'l oldinga uzatilganda chap yonidan relssiz transport vositalariga barcha yo'nalishlarda harakatlanishga ruxsat beriladi (YHQ 38-band).");

// C17. Qo'l yuqoriga
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#fafafa", label: "A" }) +
  SCN.controller(150, 150, "up", 0),
  "Tartibga soluvchi qo'lini yuqoriga ko'tardi. Siz janubdan bemalol to'xtay oladigan masofadasiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["Barcha yo'nalishlarda harakatlanish taqiqlanadi", "Faqat o'ngga", "To'g'riga va o'ngga", "Faqat chapga"],
  "Qo'l yuqoriga ko'tarilganda, 42-banddagi holatdan tashqari, barcha yo'nalishlarda harakatlanish taqiqlanadi (YHQ 38-band).");

// C18. Qo'l yuqoriga — keskin tormozsiz to'xtab bo'lmaydi
A(SCN.cross() +
  SCN.car({ path: "M320,135 L-20,135", color: ME, label: "Siz", loop: true, dur: 4 }) +
  SCN.controller(150, 150, "up", 90),
  "Siz sharqdan chorrahaga juda yaqin kelganingizda tartibga soluvchi qo'lini yuqoriga ko'tardi, keskin tormoz bermasdan to'xtay olmaysiz. Nima qilasiz?",
  ["Harakatni davom ettiraman", "Keskin tormozlab, chorraha o'rtasida to'xtayman", "Orqaga yuraman", "O'ngga burilib, ko'ndalang yo'lga chiqaman"],
  "Tartibga soluvchi qo'lini yuqoriga ko'targanda keskin tormoz bermasdan to'xtashga ulgura olmaydigan haydovchiga harakatni davom ettirish ruxsat etiladi (YHQ 42-band).");

// C19. Tartibga soluvchi va yashil svetofor
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "green") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }) +
  SCN.controller(150, 150, "side", 0),
  "Svetoforda sizga yashil ishora yonib turibdi, tartibga soluvchi esa ko'kragi bilan sizga qarab qo'llarini yon tomonga uzatgan. Nima qilasiz?",
  ["To'xtayman — tartibga soluvchining ishorasiga amal qilinadi", "Yashil yongani uchun to'g'riga o'taman", "Faqat o'ngga burilaman", "Ovozli signal berib, uning ruxsatini so'rayman"],
  "Tartibga soluvchining ishoralari svetofor ishoralariga zid bo'lsa, haydovchi tartibga soluvchiga amal qiladi; ko'krak tomonidan harakat taqiqlanadi (YHQ 43-band).");

// C20. Tartibga soluvchi va qizil svetofor — chapga burilish
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "red") +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz", blink: "L" }) +
  SCN.controller(150, 150, "forward", 90),
  "Svetoforda qizil yonib turibdi. Tartibga soluvchi ko'kragi bilan g'arbga qarab, o'ng qo'lini oldinga uzatgan. Siz janubdan — uning chap yonidan kelib, chapga burilmoqchisiz. Harakatlanish mumkinmi?",
  ["Ha, tartibga soluvchining ishorasiga ko'ra chapga burilish mumkin", "Yo'q, svetoforda qizil yonib turibdi", "Yo'q, chap yondan faqat o'ngga", "Faqat svetofor yashil bo'lganda"],
  "Tartibga soluvchining ishorasi svetoforga zid bo'lsa, unga amal qilinadi; o'ng qo'l oldinga uzatilganda chap yonidan barcha yo'nalishlarga ruxsat (YHQ 43-band).");

// C21. Qo'l yuqoriga + yashil svetofor
A(SCN.cross() + SCN.light(191, 86, "green", 270) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#1e88e5", label: "B" }) +
  SCN.controller(150, 150, "up", 180),
  "Siz sharqdan kelyapsiz, svetoforda yashil ishora yonib turibdi, ammo tartibga soluvchi qo'lini yuqoriga ko'tardi. Siz bemalol to'xtay olasiz. Harakatlanish mumkinmi?",
  ["Yo'q, tartibga soluvchi barcha yo'nalishlarda harakatni taqiqlagan", "Ha, svetofor yashil", "Ha, faqat o'ngga", "Ha, faqat to'g'riga"],
  "Tartibga soluvchining ishoralari svetofor ishoralariga zid bo'lsa, haydovchi tartibga soluvchiga amal qiladi; qo'l yuqoriga ko'tarilgani harakatni taqiqlaydi (YHQ 43-band).");

// C22. Qo'llar yon tomonga + qizil svetofor — o'ng yonidan
A(SCN.cross() + SCN.light(93, 72, "red", 180) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz" }) +
  SCN.controller(150, 150, "side", 90),
  "Siz shimoldan kelyapsiz, svetoforda qizil yonib turibdi. Tartibga soluvchi ko'kragi bilan g'arbga qarab, qo'llarini yon tomonga uzatgan — siz uning o'ng yonidasiz. Qaysi yo'nalishda harakatlanish mumkin?",
  ["To'g'riga va o'ngga", "Hech qaysi — svetoforda qizil", "Barcha yo'nalishlarda", "Faqat o'ngga"],
  "Tartibga soluvchi ishorasi svetoforga zid bo'lsa, unga amal qilinadi; qo'llar yon tomonga uzatilganda yon tomondan to'g'riga va o'ngga ruxsat (YHQ 43-band).");
