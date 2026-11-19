// s1_junctions.js — animatsion savollar: chorrahalarda ustunlik (YHQ 96–108-bandlar, 2.1–2.5 va 1.6 belgilari). 45 ta vaziyat.

// ===== Teng ahamiyatli yo'llar chorrahasi =====

// J1. G'arbdan — o'ngdagi janubdan kelayotgan B
A(SCN.cross() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#43a047", label: "B" }),
  "Teng ahamiyatli yo'llar chorrahasi. Siz g'arbdan, B janubdan kelmoqda, ikkalangiz ham to'g'riga ketmoqchisiz. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Bir vaqtda o'tiladi", "Kim chorrahaga yaqinroq bo'lsa"],
  "B sizga o'ng tomondan yaqinlashmoqda, teng ahamiyatli chorrahada o'ngdan kelayotganga yo'l beriladi (YHQ 105-band).");

// J2. Shimoldan chapga — o'ngdagi B to'g'riga
A(SCN.cross() +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#fdd835", label: "B" }),
  "Teng ahamiyatli chorrahaga shimoldan yaqinlashib, chapga burilmoqchisiz. B g'arbdan to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B qarama-qarshi tomondan kelmayapti", "Siz — burilish ko'rsatkichini birinchi yoqdingiz", "Bir vaqtda o'tiladi"],
  "Shimoldan kelayotgan sizga B o'ng tomondan yaqinlashmoqda, shuning uchun unga yo'l berasiz (YHQ 105-band).");

// J3. Sharqdan — o'ngdagi shimoldan kelayotgan B (1.6 belgisi)
A(SCN.cross() +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#8e24aa", label: "B" }),
  "Chorraha oldida 1.6 «Teng ahamiyatli yo'llar kesishuvi» belgisi bor edi. Siz sharqdan, B shimoldan to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Asosiy yo'l qaysi ekanini bilmagan holda hech kim", "Kim tezroq bo'lsa"],
  "1.6 belgisi teng ahamiyatli yo'llar kesishuvidan ogohlantiradi; sharqdan kelayotgan sizga B o'ng tomonda, unga yo'l berasiz (YHQ 105-band).");

// J4. Janubdan o'ngga — chapdagi A to'g'riga
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#fb8c00", label: "A" }),
  "Teng ahamiyatli chorraha. Siz o'ngga burilmoqchisiz, A chap tomondan to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["Siz", "A avtomobili", "O'ngga burilayotgan har doim yo'l beradi", "Bir vaqtda o'tiladi"],
  "A uchun siz o'ng tomondan yaqinlashyapsiz, shuning uchun A sizga yo'l beradi (YHQ 105-band).");

// J5. Uch avtomobil, hammasi to'g'riga: B, Siz, A
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#43a047", label: "A" }),
  "Teng ahamiyatli chorraha. Siz janubdan, B sharqdan, A g'arbdan — hammangiz to'g'riga ketmoqdasiz. O'tish navbati qanday?",
  ["B, Siz, A", "Siz, B, A", "A, Siz, B", "B, A, Siz"],
  "B ning o'ng tomoni bo'sh — u birinchi; siz o'ngdagi B dan keyin, A esa o'ngdagi sizdan keyin o'tadi (YHQ 105-band).");

// J6. Siz chapga, B qarama-qarshi to'g'riga, A o'ngdan: B, A, Siz
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#8e24aa", label: "B" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#fdd835", label: "A" }),
  "Teng ahamiyatli chorraha. Siz chapga burilmoqchisiz, B qarama-qarshi tomondan to'g'riga, A sharqdan to'g'riga ketmoqda. O'tish navbati qanday?",
  ["B, A, Siz", "A, B, Siz", "Siz, B, A", "A, Siz, B"],
  "B ning o'ngi bo'sh — u birinchi; A o'ngdagi B dan keyin o'tadi; siz o'ngdagi A ga va qarama-qarshi to'g'riga ketayotgan B ga yo'l berasiz (YHQ 107-band).");

// J7. Siz chapga, qarama-qarshi B o'ngga
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#43a047", label: "B", blink: "R" }),
  "Teng ahamiyatli chorraha. Siz chapga, qarama-qarshi tomondan kelayotgan B esa o'ngga burilmoqda — ikkalangiz bir yo'lga chiqasiz. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B sizning o'ng tomoningizda emas", "Bir vaqtda, har biri o'z qatoriga", "Siz — birinchi yetib keldingiz"],
  "Chapga burilayotgan haydovchi qarama-qarshi tomondan to'g'riga yoki o'ngga harakatlanayotganlarga yo'l beradi (YHQ 107-band).");

// J8. Shimoldan to'g'riga, o'ngdagi B chapga burilmoqda
A(SCN.cross() +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#607d8b", label: "B", blink: "L" }),
  "Teng ahamiyatli chorraha. Siz shimoldan to'g'riga ketmoqdasiz, B g'arbdan chapga burilib, yo'lingizni kesib o'tmoqchi. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — chapga burilayotgan yo'l beradi", "Siz — to'g'riga ketayotgan har doim ustun", "Bir vaqtda o'tiladi"],
  "B sizga o'ng tomondan yaqinlashmoqda; chapga burilishda yo'l berish faqat qarama-qarshi yo'nalishdagilarga taalluqli, siz esa B ga qarama-qarshi emassiz (YHQ 105-band).");

// J9. G'arbdan — A janubdan, B sharqdan: B, A, Siz
A(SCN.cross() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#1e88e5", label: "A" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#fb8c00", label: "B" }),
  "Teng ahamiyatli chorraha. Siz g'arbdan, A janubdan, B sharqdan — hammasi to'g'riga ketmoqda. O'tish navbati qanday?",
  ["B, A, Siz", "Siz, A, B", "A, B, Siz", "B, Siz, A"],
  "B ning o'ng tomoni bo'sh — u birinchi, A o'ngdagi B dan keyin, siz esa o'ngdagi A dan keyin o'tasiz (YHQ 105-band).");

// J10. Siz janubdan to'g'riga, C qarama-qarshi chapga, D g'arbdan: Siz, D, C
A(SCN.cross() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#43a047", label: "C", blink: "L" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#8e24aa", label: "D" }),
  "Teng ahamiyatli chorraha. Siz janubdan to'g'riga, C shimoldan chapga, D g'arbdan to'g'riga ketmoqda. O'tish navbati qanday?",
  ["Siz, D, C", "D, Siz, C", "C, D, Siz", "Siz, C, D"],
  "Sizning o'ngingiz bo'sh — birinchi o'tasiz; D o'ngdagi sizdan keyin; C esa qarama-qarshi to'g'riga ketayotgan sizga va o'ngdagi D ga yo'l beradi (YHQ 107-band).");

// J11. To'rt transport, tramvay bilan: T, A, B, Siz
A(SCN.cross({ rails: true }) +
  SCN.car({ path: "M-30,165 L92,165", color: "#fdd835", label: "T", kind: "tram" }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#43a047", label: "A" }),
  "Teng ahamiyatli chorrahaga to'rt tomondan tramvay (T), A, B va siz yaqinlashdingiz, hamma to'g'riga ketmoqda. O'tish navbati qanday?",
  ["T, A, B, Siz", "T, Siz, B, A", "A, B, Siz, T", "T, B, A, Siz"],
  "Teng ahamiyatli chorrahada tramvay relssiz transportdan ustun; so'ng o'ngi bo'shagan A, keyin B, oxirida siz o'tasiz (YHQ 105-band).");

// ===== Asosiy va ikkinchi darajali yo'llar =====

// J12. Yo'l bering — chapdagi asosiy yo'l
A(SCN.cross() + SCN.sign("giveway", 186, 200) + SCN.sign("mainroad", 96, 196) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#1e88e5", label: "B" }),
  "Siz «Yo'l bering» belgisi bo'yicha, B chap tomondan «Asosiy yo'l» bo'yicha to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B chap tomonda", "Bir vaqtda o'tiladi", "Kim birinchi yetib kelsa"],
  "Ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldan yaqinlashayotganlarga yo'l beradi; o'ng qo'l qoidasi bu yerda qo'llanmaydi (YHQ 104-band).");

// J13. Asosiy yo'lda chapga: B, Siz, A
A(SCN.cross() + SCN.sign("mainroad", 196, 96) + SCN.sign("mainroad", 96, 196) + SCN.sign("giveway", 92, 78) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#fb8c00", label: "B" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#607d8b", label: "A" }),
  "Siz va B asosiy yo'lda (sharq–g'arb), A ikkinchi darajali yo'lda. Siz chapga burilmoqchisiz, B va A to'g'riga. O'tish navbati qanday?",
  ["B, Siz, A", "Siz, B, A", "A, B, Siz", "B, A, Siz"],
  "Asosiy yo'ldagilar o'zaro teng: chapga burilayotgan siz qarama-qarshi to'g'riga ketayotgan B ga yo'l berasiz; A esa asosiy yo'ldagi ikkalangizga yo'l beradi (YHQ 104-band).");

// J14. STOP — asosiy yo'lda B
A(SCN.cross({ stop: true }) + SCN.sign("stop", 186, 200) + SCN.sign("mainroad", 96, 196) +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-20,165 L320,165", color: "#43a047", label: "B", loop: true, dur: 4.5 }),
  "Siz 2.5 «To'xtamasdan harakatlanish taqiqlangan» belgisi oldidasiz, asosiy yo'lda chapdan B kelmoqda. Qanday harakatlanasiz?",
  ["To'xtash chizig'i oldida to'xtab, B ni o'tkazib yuboraman", "Tezlikni kamaytirib, to'xtamasdan B dan oldin o'taman", "B chap tomonda — u menga yo'l beradi", "Ovozli signal berib o'taman"],
  "2.5 belgisida to'xtash chizig'i oldida to'xtash majburiy, so'ng kesib o'tilayotgan asosiy yo'ldagilarga yo'l beriladi (YHQ 104-band).");

// J15. Ikkinchi darajali yo'ldagilar o'zaro — chapga burilish
A(SCN.cross() + SCN.sign("giveway", 186, 200) + SCN.sign("giveway", 92, 78) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M135,0 L135,104", color: "#8e24aa", label: "B" }),
  "Siz ham, qarama-qarshi tomondagi B ham «Yo'l bering» belgisi oldidasiz, asosiy yo'l bo'sh. Siz chapga, B to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Ikkalangiz ham ikkinchi darajali yo'ldasiz — bir vaqtda", "Kim burilish ko'rsatkichini oldin yoqqan bo'lsa"],
  "Ikkinchi darajali yo'ldagilar o'zaro teng ahamiyatli chorraha qoidasiga amal qiladi: chapga burilayotgan siz to'g'riga ketayotgan B ga yo'l berasiz (YHQ 106-band).");

// J16. Asosiy yo'l shimol–janub: kim oxirgi?
A(SCN.cross() + SCN.sign("mainroad", 92, 78) + SCN.sign("mainroad", 186, 200) + SCN.sign("giveway", 96, 196) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#1e88e5", label: "B" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#fdd835", label: "A" }),
  "Siz va B asosiy yo'lda, A «Yo'l bering» belgisi oldida. Siz chapga burilmoqchisiz, B va A to'g'riga ketmoqda. Chorrahadan kim oxirgi o'tadi?",
  ["A avtomobili", "Siz", "B avtomobili", "Siz va A bir vaqtda"],
  "Asosiy yo'ldagi B birinchi, chapga burilayotgan siz undan keyin; ikkinchi darajali yo'ldagi A ikkalangizga yo'l beradi (YHQ 104-band).");

// J17. Asosiy yo'lda chapga burilyapsiz, o'ngda ikkinchi darajali yo'ldagi B
A(SCN.cross() + SCN.sign("mainroad", 96, 196) + SCN.sign("giveway", 186, 200) +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#fb8c00", label: "B" }),
  "Siz asosiy yo'lda chapga burilmoqchisiz. B o'ng tomoningizdan, «Yo'l bering» belgisi bo'yicha to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["Siz", "B — u o'ng tomondan kelmoqda", "B — siz burilyapsiz, u to'g'riga ketmoqda", "Bir vaqtda o'tiladi"],
  "Ikkinchi darajali yo'ldagi B asosiy yo'ldagi sizga, keyingi yo'nalishingizdan qat'i nazar, yo'l beradi (YHQ 104-band).");

// J18. Yo'l bering — o'ngga burilib asosiy yo'lga qo'shilish
A(SCN.cross() + SCN.sign("giveway", 92, 78) + SCN.sign("mainroad", 196, 96) +
  SCN.car({ path: "M135,0 L135,104", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#607d8b", label: "B" }),
  "Siz «Yo'l bering» belgisi oldida o'ngga burilmoqchisiz. Asosiy yo'lda chap tomondan B to'g'riga kelmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B chap tomonda", "Siz — o'ngga burilish yo'lini kesmaydi", "Bir vaqtda o'tiladi"],
  "Siz B bilan bir qatorga chiqasiz; ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagilarga yo'l beradi (YHQ 104-band).");

// J19. Ikkala ikkinchi darajali yo'l — qarama-qarshi B chapga
A(SCN.cross() + SCN.sign("giveway", 96, 196) + SCN.sign("giveway", 196, 96) + SCN.sign("mainroad", 186, 200) +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#43a047", label: "B", blink: "L" }),
  "Siz va qarama-qarshi tomondagi B ikkinchi darajali yo'ldasiz, asosiy yo'l bo'sh. Siz to'g'riga, B chapga burilmoqda. Kim birinchi o'tadi?",
  ["Siz", "B avtomobili", "Bir vaqtda o'tiladi", "Ikkalangiz ham asosiy yo'ldagi transportni kutasiz, keyin B"],
  "Ikkinchi darajali yo'ldagilar o'zaro teng ahamiyatli chorraha qoidasi bo'yicha o'tadi: chapga burilayotgan B to'g'riga ketayotgan sizga yo'l beradi (YHQ 106-band).");

// J20. Asosiy yo'lda tramvay
A(SCN.cross({ rails: true }) + SCN.sign("mainroad", 196, 96) + SCN.sign("mainroad", 96, 196) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M-60,165 L360,165", color: "#fdd835", label: "T", kind: "tram", loop: true, dur: 5 }),
  "Siz va tramvay asosiy yo'lda. Siz chapga burilmoqchisiz, qarama-qarshi tomondan tramvay to'g'riga kelmoqda. Kim birinchi o'tadi?",
  ["Tramvay", "Siz — asosiy yo'ldasiz", "Bir vaqtda o'tiladi", "Siz — chap burilish ko'rsatkichini oldin yoqdingiz"],
  "Teng bo'lmagan yo'llar chorrahasida tramvay o'sha yo'lda bir yoki qarama-qarshi yo'nalishda harakatlanayotgan relssiz transportga nisbatan imtiyozga ega (YHQ 104-band).");

// ===== T-chorraha =====

// J21. T — tarmoqdan chapga, o'ngdan B
A(SCN.tjunction() +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#1e88e5", label: "B" }),
  "Teng ahamiyatli yo'llarning T-simon chorrahasi. Siz chapga burilmoqchisiz, B o'ng tomondan to'g'riga kelmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz", "Bir vaqtda o'tiladi", "Kim tezroq bo'lsa"],
  "Teng ahamiyatli yo'llar chorrahasida o'ng tomondan yaqinlashayotgan transportga yo'l beriladi (YHQ 105-band).");

// J22. T — to'g'ri yo'lda, o'ngda tarmoqdan B
A(SCN.tjunction() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#8e24aa", label: "B", blink: "L" }),
  "Teng ahamiyatli T-simon chorraha, belgilar yo'q. Siz to'g'riga ketmoqdasiz, B janubiy tarmoqdan chapga burilmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — to'g'ri yo'l asosiy hisoblanadi", "Siz — B chapga burilmoqda", "Bir vaqtda o'tiladi"],
  "Belgilar bo'lmasa, T-chorrahadagi to'g'ri yo'l asosiy hisoblanmaydi; B sizga o'ng tomondan yaqinlashmoqda (YHQ 105-band).");

// J23. T — sharqdan chapga tarmoqqa, qarama-qarshi B
A(SCN.tjunction() +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#fb8c00", label: "B" }),
  "Teng ahamiyatli T-simon chorraha. Siz sharqdan kelib, janubiy tarmoqqa chapga burilmoqchisiz. B qarama-qarshi tomondan to'g'riga ketmoqda. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — sizning o'ngingizda hech kim yo'q", "Bir vaqtda o'tiladi", "Siz — B ning o'ng tomonidasiz"],
  "Chapga burilayotgan haydovchi qarama-qarshi tomondan to'g'riga harakatlanayotganga yo'l beradi (YHQ 107-band).");

// J24. T — asosiy yo'lga tarmoqdan o'ngga
A(SCN.tjunction() + SCN.sign("giveway", 186, 200) + SCN.sign("mainroad", 96, 196) + SCN.sign("mainroad", 196, 96) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M-20,165 L320,165", color: "#43a047", label: "B", loop: true, dur: 4.5 }),
  "T-simon chorrahada siz «Yo'l bering» belgisi oldida o'ngga burilmoqchisiz. Asosiy yo'lda chapdan B kelmoqda. Nima qilasiz?",
  ["B ni o'tkazib, keyin buriliman", "B chap tomonda — buriliveraman", "O'ngga burilish B ning yo'lini kesmaydi — buriliveraman", "Ovozli signal berib buriliman"],
  "O'ngga burilib siz B ning qatoriga chiqasiz; ikkinchi darajali yo'ldagi haydovchi asosiy yo'ldagilarga yo'l beradi (YHQ 104-band).");

// J25. T — asosiy yo'l, uch transport: A, Siz, B
A(SCN.tjunction() + SCN.sign("giveway", 186, 200) + SCN.sign("mainroad", 96, 196) + SCN.sign("mainroad", 196, 96) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#1e88e5", label: "A" }) +
  SCN.car({ path: "M165,300 L165,196", color: "#fdd835", label: "B", blink: "L" }),
  "T-simon chorraha: siz va A asosiy yo'lda, B tarmoqda «Yo'l bering» belgisi oldida. Siz tarmoqqa chapga, A to'g'riga, B chapga burilmoqda. O'tish navbati qanday?",
  ["A, Siz, B", "Siz, A, B", "B, A, Siz", "A, B, Siz"],
  "Asosiy yo'lda chapga burilayotgan siz qarama-qarshi to'g'riga ketayotgan A ga yo'l berasiz; B ikkinchi darajali yo'lda bo'lgani uchun ikkalangizga yo'l beradi (YHQ 104-band).");

// J26. T — teng: qarama-qarshi B tarmoqqa chapga
A(SCN.tjunction() +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#607d8b", label: "B", blink: "L" }),
  "Teng ahamiyatli T-simon chorraha. Siz to'g'riga ketmoqdasiz, qarama-qarshi tomondan kelayotgan B janubiy tarmoqqa chapga burilmoqda. Kim birinchi o'tadi?",
  ["Siz", "B avtomobili", "Bir vaqtda o'tiladi", "B — u chorrahaga birinchi yetdi"],
  "Chapga burilayotgan B qarama-qarshi tomondan to'g'riga harakatlanayotgan sizga yo'l beradi (YHQ 107-band).");

// J27. T — STOP, yo'l bo'sh
A(SCN.tjunction({ stop: true }) + SCN.sign("stop", 186, 200) + SCN.sign("mainroad", 96, 196) +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz", blink: "R" }),
  "T-simon chorrahada 2.5 «To'xtamasdan harakatlanish taqiqlangan» belgisi o'rnatilgan, asosiy yo'l butunlay bo'sh. O'ngga qanday burilasiz?",
  ["To'xtash chizig'i oldida to'xtab, so'ng buriliman", "Yo'l bo'sh — to'xtamasdan buriliman", "Faqat tezlikni 20 km/soatgacha kamaytiraman", "To'xtash chizig'idan o'tib, chorrahaning o'rtasida to'xtayman"],
  "2.5 belgisi yo'l bo'sh bo'lsa ham to'xtash chizig'i oldida to'xtashni talab qiladi, so'ng asosiy yo'ldagilarga yo'l beriladi (YHQ 104-band).");

// ===== Tramvaylar =====

// J28. Tramvay va tramvay
A(SCN.cross({ rails: true }) + `<line x1="160" y1="0" x2="160" y2="300" stroke="#9ea3a8" stroke-width="1.6"/><line x1="170" y1="0" x2="170" y2="300" stroke="#9ea3a8" stroke-width="1.6"/>` +
  SCN.car({ path: "M-30,165 L92,165", color: "#fdd835", label: "T1", kind: "tram" }) +
  SCN.car({ path: "M165,330 L165,208", color: "#fb8c00", label: "T2", kind: "tram" }),
  "Teng ahamiyatli chorrahada ikki tramvay to'g'riga ketmoqda: T1 g'arbdan, T2 janubdan. Qaysi biri birinchi o'tadi?",
  ["T2", "T1", "Bir vaqtda o'tadi", "Qaysi biri ovozli signal bersa"],
  "Tramvay haydovchilari ham o'zaro o'ng qo'l qoidasiga amal qiladi: T1 uchun T2 o'ng tomonda (YHQ 105-band).");

// J29. O'ngga burilish — chapdan tramvay
A(SCN.cross({ rails: true }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "R" }) +
  SCN.car({ path: "M-30,165 L92,165", color: "#fdd835", label: "T", kind: "tram" }),
  "Teng ahamiyatli chorraha. Siz o'ngga burilib tramvay izlari joylashgan qatorga chiqmoqchisiz, chap tomondan tramvay to'g'riga kelmoqda. Kim birinchi o'tadi?",
  ["Tramvay", "Siz — tramvay chap tomonda", "Siz — o'ngga burilayotgan ustun", "Bir vaqtda o'tiladi"],
  "Teng ahamiyatli chorrahada keyingi yo'nalishdan qat'i nazar tramvay relssiz transportdan oldin o'tish huquqiga ega (YHQ 105-band).");

// J30. Tramvay ikkinchi darajali yo'lda
A(SCN.cross({ rails: true }) + SCN.sign("mainroad", 186, 200) + SCN.sign("giveway", 96, 196) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M-30,165 L92,165", color: "#fdd835", label: "T", kind: "tram" }),
  "Siz «Asosiy yo'l» bo'yicha to'g'riga ketmoqdasiz, tramvay chapdan «Yo'l bering» belgisi bo'yicha kelmoqda. Kim birinchi o'tadi?",
  ["Siz", "Tramvay — u har doim ustun", "Bir vaqtda o'tiladi", "Tramvay — u chap tomonda"],
  "Ikkinchi darajali yo'ldagi har qanday transport, shu jumladan tramvay, asosiy yo'ldagilarga yo'l beradi (YHQ 104-band).");

// ===== Aylanma harakat =====

// J31. G'arbdan aylanaga kirish
A(SCN.cross({ ring: true }) +
  SCN.car({ path: "M0,165 L68,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M150,95 A55,55 0 0 0 95,150 A55,55 0 0 0 150,205 A55,55 0 0 0 205,150 A55,55 0 0 0 150,95", color: "#43a047", label: "B", loop: true, dur: 6 }),
  "Siz g'arb tomondan aylanma harakatli chorrahaga kirmoqchisiz, B aylana bo'ylab sizga yaqinlashmoqda. Nima qilasiz?",
  ["B ni o'tkazib, keyin aylanaga kiraman", "B chap tomonimda — birinchi kiraman", "Ovozli signal berib kiraman", "B to'xtab, menga yo'l beradi"],
  "Aylanma harakatlanish chorrahasida aylanadagi transport aylanaga kirib kelayotganlarga nisbatan imtiyozga ega (YHQ 98-band).");

// J32. Siz aylanada, B kirmoqchi
A(SCN.cross({ ring: true }) +
  SCN.car({ path: "M300,135 L232,135", color: "#fb8c00", label: "B" }) +
  SCN.car({ path: "M95,150 A55,55 0 0 0 150,205 A55,55 0 0 0 205,150 A55,55 0 0 0 150,95 A55,55 0 0 0 95,150", color: ME, label: "Siz", loop: true, dur: 6 }),
  "Siz aylanma harakatli chorrahada aylana bo'ylab ketmoqdasiz, B sharq tomondan aylanaga kirishni kutmoqda. Kim birinchi o'tadi?",
  ["Siz", "B — u o'ng tomondan kirmoqda", "Bir vaqtda o'tiladi", "B — u chorrahaga birinchi yetdi"],
  "Aylanma harakatlanish chorrahasida aylana bo'ylab harakatlanayotgan transport kirib kelayotganlarga nisbatan ustun (YHQ 98-band).");

// J33. Aylanma: kimga yo'l berasiz?
A(SCN.cross({ ring: true }) +
  SCN.car({ path: "M135,0 L135,68", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L68,165", color: "#1e88e5", label: "B" }) +
  SCN.car({ path: "M205,150 A55,55 0 0 0 150,95 A55,55 0 0 0 95,150 A55,55 0 0 0 150,205 A55,55 0 0 0 205,150", color: "#8e24aa", label: "A", loop: true, dur: 6 }),
  "Siz shimoldan aylanma harakatli chorrahaga kirmoqchisiz. A aylana bo'ylab harakatlanmoqda, B g'arbdan aylanaga kirishni kutmoqda. Kirishdan oldin kimga yo'l berasiz?",
  ["Aylanadagi A ga", "Faqat o'ng tomondagi B ga", "Hech kimga — aylanaga birinchi yetib keldim", "A ga ham, B ga ham — o'ng qo'l qoidasi bo'yicha"],
  "Aylanma chorrahada aylana bo'ylab harakatlanayotgan A kirayotganlarga nisbatan ustun; aylanaga kirayotgan B ga nisbatan o'ng qo'l qoidasi qo'llanmaydi (YHQ 98-band).");

// ===== Yondosh hudud =====

// J34. Hovlidan chiqish — trotuardagi piyoda
A(SCN.straight() + `<rect x="150" y="210" width="32" height="95" fill="#8a8d91"/><text x="166" y="292" font-size="10" fill="#fff" text-anchor="middle" font-family="Arial">Hovli</text>` +
  SCN.car({ path: "M166,300 L166,228", color: ME, label: "Siz" }) +
  SCN.person({ path: "M100,205 L240,205", loop: true, dur: 6 }),
  "Siz hovlidan yo'lga chiqmoqdasiz, trotuar bo'ylab piyoda chiqish yo'lingizni kesib o'tmoqda. Nima qilasiz?",
  ["Piyodaga yo'l beraman", "Ovozli signal berib chiqaman", "Piyoda qatnov qismida emas — chiqaveraman", "Piyoda to'xtab menga yo'l beradi"],
  "Yondosh hududdan yo'lga chiqayotgan haydovchi unda harakatlanayotgan piyodalar va transport vositalariga yo'l beradi (YHQ 54-band).");

// J35. Yo'ldan hovliga burilish — piyoda
A(SCN.straight() + `<rect x="150" y="210" width="32" height="95" fill="#8a8d91"/><text x="166" y="292" font-size="10" fill="#fff" text-anchor="middle" font-family="Arial">Hovli</text>` +
  SCN.car({ path: "M0,170 L140,170 Q166,170 166,184", color: ME, label: "Siz", blink: "R" }) +
  SCN.person({ path: "M240,205 L100,205", loop: true, dur: 6, color: "#29b6f6" }),
  "Siz yo'ldan o'ngga, hovliga (yondosh hududga) burilmoqdasiz. Trotuardan piyoda o'tmoqda. Nima qilasiz?",
  ["To'xtab, piyodani o'tkazib yuboraman", "Hovliga kirishda yo'l berish shart emas — kiraveraman", "Ovozli signal berib kiraman", "Piyodani chap tomondan aylanib o'taman"],
  "Yo'ldan chiqishda haydovchi harakatlanish yo'nalishini kesib o'tayotgan piyodalar va velosipedchilarga yo'l beradi (YHQ 54-band).");

// J36. Hovlidan chapga chiqish — ikki yo'nalishda transport
A(SCN.straight() + `<rect x="150" y="210" width="32" height="95" fill="#8a8d91"/><text x="166" y="292" font-size="10" fill="#fff" text-anchor="middle" font-family="Arial">Hovli</text>` +
  SCN.car({ path: "M166,300 L166,228", color: ME, label: "Siz", blink: "L" }) +
  SCN.car({ path: "M320,130 L-20,130", color: "#1e88e5", label: "A", loop: true, dur: 5 }) +
  SCN.car({ path: "M-20,170 L320,170", color: "#43a047", label: "B", loop: true, dur: 4 }),
  "Siz hovlidan chapga burilib chiqmoqchisiz. Yo'lda A o'ngdan, B chapdan harakatlanmoqda. Kimga yo'l berasiz?",
  ["A ga ham, B ga ham", "Faqat o'ngdagi A ga", "Faqat chapdagi B ga", "Hech kimga — chap burilish ko'rsatkichi yoqilgan"],
  "Yondosh hududdan chiqayotgan haydovchi yo'lda harakatlanayotgan barcha transport vositalari va piyodalarga yo'l beradi (YHQ 54-band).");

// J37. B hovlidan chiqmoqda — siz yo'lda
A(SCN.straight() + `<rect x="150" y="210" width="32" height="95" fill="#8a8d91"/><text x="166" y="292" font-size="10" fill="#fff" text-anchor="middle" font-family="Arial">Hovli</text>` +
  SCN.car({ path: "M166,300 L166,228", color: "#8e24aa", label: "B", blink: "L" }) +
  SCN.car({ path: "M-20,170 L320,170", color: ME, label: "Siz", loop: true, dur: 4.5 }),
  "Siz yo'lda ketmoqdasiz, B o'ng tomoningizdagi hovlidan chiqmoqda. Kim birinchi o'tadi?",
  ["Siz", "B — u o'ng tomondan chiqmoqda", "Bir vaqtda o'tiladi", "B — u burilish ko'rsatkichini yoqqan"],
  "Hovlidan chiqish joyi chorraha hisoblanmaydi, o'ng qo'l qoidasi qo'llanmaydi: yondosh hududdan chiqayotgan B sizga yo'l beradi (YHQ 54-band).");

// ===== Qoplama noma'lum / tuproq yo'l =====

// J38. Tun — qoplamani aniqlab bo'lmaydi
A(SCN.cross() + `<rect width="300" height="300" fill="#0b1020" opacity=".72"/>` +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#fdd835", label: "B" }),
  "Tun. Siz qayerda yurayotganingizni — qoplamali yoki tuproq yo'l ekanini aniqlay olmayapsiz, imtiyoz belgilari yo'q. Chapdan B kelmoqda. Qanday harakat qilasiz?",
  ["O'zimni ikkinchi darajali yo'lda deb hisoblab, B ga yo'l beraman", "B chap tomonda — birinchi o'taman", "Uzoq yorug'likni yoqib birinchi o'taman", "Tunda chorrahada kim birinchi yetsa o'tadi"],
  "Qoplama bor-yo'qligini aniqlay olmagan va imtiyoz belgilari bo'lmaganda haydovchi o'zini ikkinchi darajali yo'lda deb hisoblaydi (YHQ 108-band).");

// J39. Tuproq yo'l, chorrahaga tutash qismi asfalt
A(SCN.cross() + `<rect x="120" y="226" width="60" height="80" fill="#8d6e63"/><rect x="120" y="-5" width="60" height="79" fill="#8d6e63"/><circle cx="135" cy="250" r="2" fill="#6d4c41"/><circle cx="160" cy="275" r="2.5" fill="#6d4c41"/><circle cx="145" cy="40" r="2" fill="#6d4c41"/>` +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M0,165 L104,165", color: "#1e88e5", label: "B" }),
  "Siz tuproq yo'ldan kelmoqdasiz, uning faqat chorrahaga tutash qismi asfaltlangan. B chapdan asfalt yo'l bo'ylab kelmoqda, belgilar yo'q. Kim birinchi o'tadi?",
  ["B avtomobili", "Siz — B chap tomonda", "Siz — siz ham asfaltdasiz", "Bir vaqtda o'tiladi"],
  "Qattiq qoplamali yo'l tuproq yo'lga nisbatan asosiy hisoblanadi; ikkinchi darajali yo'lning chorrahaga tutash qismi qoplamali bo'lishi uni teng huquqli qilmaydi (YHQ 6-band).");

// J40. Tuproq yo'ldagi B o'ngda
A(SCN.cross() + `<rect x="186" y="120" width="120" height="60" fill="#8d6e63"/><rect x="-5" y="120" width="119" height="60" fill="#8d6e63"/><circle cx="240" cy="160" r="2.5" fill="#6d4c41"/><circle cx="60" cy="140" r="2" fill="#6d4c41"/>` +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz" }) +
  SCN.car({ path: "M300,135 L196,135", color: "#607d8b", label: "B" }),
  "Siz asfalt yo'lda, B o'ng tomondan tuproq yo'l bo'ylab chorrahaga yaqinlashmoqda. Belgilar yo'q, ikkalangiz to'g'riga ketmoqdasiz. Kim birinchi o'tadi?",
  ["Siz", "B — u o'ng tomonda", "Bir vaqtda o'tiladi", "B — tuproq yo'lda tormozlash qiyin"],
  "Qattiq qoplamali yo'l tuproq yoki shag'alli yo'lga nisbatan asosiy yo'l hisoblanadi, shuning uchun B sizga yo'l beradi (YHQ 6-band).");

// ===== Tirbandlik =====

// J41. Yashil, lekin chorrahadan keyin tirbandlik
A(SCN.cross({ stop: true }) + SCN.light(186, 192, "green") +
  SCN.car({ path: "M165,104 L165,103.5", color: "#607d8b" }) +
  SCN.car({ path: "M165,70 L165,69.5", color: "#1e88e5" }) +
  SCN.car({ path: "M165,36 L165,35.5", color: "#fdd835" }) +
  SCN.car({ path: "M165,300 L165,200", color: ME, label: "Siz" }),
  "Sizga yashil ishora yonib turibdi, lekin chorrahadan keyin sizning yo'nalishingizda tirbandlik — mashinalar turibdi. Nima qilasiz?",
  ["Chorrahaga kirmay, to'xtash chizig'i oldida kutaman", "Yashil yongani uchun chorrahaga kirib, o'rtasida kutaman", "Chorrahaga kirib, ovozli signal beraman", "Qarama-qarshi qatorga chiqib, aylanib o'taman"],
  "Tirbandlik tufayli chorrahada to'xtab, ko'ndalang yo'nalishdagi transport harakatiga to'sqinlik qiladigan bo'lsa, chorrahaga kirish taqiqlanadi (YHQ 97-band).");

// J42. Tartibga solinmagan chorraha va tirbandlik
A(SCN.cross() +
  SCN.car({ path: "M196,165 L196.5,165", color: "#43a047" }) +
  SCN.car({ path: "M230,165 L230.5,165", color: "#8e24aa" }) +
  SCN.car({ path: "M264,165 L264.5,165", color: "#fb8c00" }) +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz" }) +
  SCN.car({ path: "M165,320 L165,-20", color: "#1e88e5", label: "B", loop: true, dur: 5 }),
  "Teng ahamiyatli chorrahadan keyin sizning qatoringiz mashinalar bilan to'lgan. Chorrahadan B o'tib turibdi. Qanday harakat qilasiz?",
  ["Chorraha oldida kutaman, oldindagi yo'l bo'shaganda kiraman", "B o'tgach chorrahaga kirib, o'rtada navbat kutaman", "Chorrahaga kirib, B ga ovozli signal beraman", "O'ngga burilib, tirbandlikni aylanib o'taman — ko'rsatkich yoqmasdan"],
  "Majburiy to'xtab, ko'ndalang yo'nalishdagi transportga to'sqinlik qiladigan bo'lsa, haydovchiga chorrahaga kirish taqiqlanadi (YHQ 97-band).");

// ===== Burilishda piyodalar =====

// J43. Chapga burilish — piyodalar o'tish joyi
A(SCN.cross() + SCN.zebra(88, 120, 18, 60) +
  SCN.person({ path: "M97,192 L97,108", loop: true, dur: 5 }) +
  SCN.car({ path: "M165,300 L165,196", color: ME, label: "Siz", blink: "L" }),
  "Siz chapga burilmoqchisiz. Siz chiqadigan yo'ldagi piyodalar o'tish joyidan piyoda o'tmoqda. Nima qilasiz?",
  ["Piyodaga yo'l berib, keyin buriliman", "Piyoda mening qatorimda emas — buriliveraman", "Ovozli signal berib buriliman", "Piyodani orqa tomondan aylanib o'taman"],
  "Chapga yoki o'ngga burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga yo'l beradi (YHQ 96-band).");

// J44. Yashil ishorada o'ngga burilish — piyodalar
A(SCN.cross() + SCN.zebraH(120, 190, 60, 18) + SCN.light(95, 178, "green", 90) +
  SCN.person({ path: "M124,199 L184,199", loop: true, dur: 5, color: "#ab47bc" }) +
  SCN.car({ path: "M0,165 L104,165", color: ME, label: "Siz", blink: "R" }),
  "Sizga yashil ishora yondi, siz o'ngga burilmoqchisiz. Burilayotgan yo'lingizdagi o'tish joyidan piyoda o'tmoqda. Nima qilasiz?",
  ["Piyodaga yo'l beraman", "Yashil yonib turibdi — birinchi buriliman", "Ovozli signal berib buriliman", "Piyoda qizil ishorada o'tmoqda — buriliveraman"],
  "Burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga yo'l berishi kerak (YHQ 96-band).");

// J45. O'ngga burilish — zebra chizilmagan
A(SCN.cross() +
  SCN.person({ path: "M112,100 L188,100", loop: true, dur: 5, color: "#26a69a" }) +
  SCN.car({ path: "M300,135 L196,135", color: ME, label: "Siz", blink: "R" }),
  "Siz o'ngga burilmoqchisiz. Siz chiqadigan yo'lni chorrahada piyoda kesib o'tmoqda, o'tish joyi chizig'i chizilmagan. Nima qilasiz?",
  ["Piyodaga yo'l beraman", "Zebra yo'q — piyoda menga yo'l berishi kerak", "Ovozli signal berib buriliman", "Tezlikni oshirib, piyodadan oldin buriliman"],
  "Burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga, o'tish joyi chizilganidan qat'i nazar, yo'l beradi (YHQ 96-band).");
