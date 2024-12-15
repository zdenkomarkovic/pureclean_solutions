export const pageData = [
  {
    image: "/ciscenje.webp",
    title: "Čišćenje redovno",
    route: "/ciscenjeredovno",
    description: [
      "Održavanje urednog i čistog prostora ključno je za higijenu i prijatan ambijent, bilo da je u pitanju vaš dom, kancelarija ili poslovni objekat. Naša agencija za čišćenje u Nišu nudi profesionalne usluge redovnog čišćenja, osmišljene tako da zadovolje vaše specifične potrebe.",
      "Razumemo koliko je važno da vaš prostor u svakom trenutku izgleda besprekorno, pa se trudimo da pružimo uslugu koja će nadmašiti vaša očekivanja. Naša usluga redovnog čišćenja obuhvata širok spektar aktivnosti. Bilo da je reč o brisanju prašine, usisavanju, pranju podova ili čišćenju sanitarnih čvorova, naš tim koristi visokokvalitetna sredstva za čišćenje koja su sigurna za vaše zdravlje i okolinu. Takođe, posebnu pažnju posvećujemo detaljima kako bismo osigurali da svaki kutak vašeg prostora ostane besprekoran.",
      "Fleksibilnost je ono što nas izdvaja. Prilagođavamo se vašem rasporedu i potrebama, bilo da vam je potrebno čišćenje na dnevnom, nedeljnom ili mesečnom nivou. Naš cilj je da vam olakšamo svakodnevni život i omogućimo vam više vremena za stvari koje su vam zaista bitne, dok se mi bavimo održavanjem higijene vašeg prostora. Bez obzira na veličinu i tip prostora, naš tim stručnjaka garantuje visok standard kvaliteta. Ako tražite pouzdanu i profesionalnu uslugu čišćenja u Nišu, na pravom ste mestu.",
      "Kontaktirajte nas još danas i uverite se zašto smo jedna od najpouzdanijih agencija za čišćenje u ovom regionu. Prepustite održavanje urednosti nama, a vi uživajte u svežem i čistom prostoru koji odiše prijatnošću i higijenom. Vaše zadovoljstvo je naša najveća motivacija!",
    ],
  },
  {
    image: "/generalnociscenje.jpg",
    title: "Generalno čišćenje",
    route: "/generalnociscenje",
    description:
      "Generalno čišćenje podrazumeva temeljnu brigu o svakom kutku vašeg prostora.Kada radimo generalno čišćenje naš tim čisti sve površine, uključujući podove, prozore, kuhinjske elemente, kupatila, i teško dostupna mesta. Detaljno uklanjamo prašinu, mrlje i nečistoće kako bismo osigurali da vaš prostor blista i bude u potpunosti osvežen. Prepustite nam posao, a mi ćemo se pobrinuti za savršenu čistoću!",
  },
  {
    image: "/gradjevinsko.jpg",
    title: "Čišćenje posle građevinskih radova",
    route: "/ciscenjeposlegradjevinskihradova",
    description:
      "Završili ste renoviranje ili građevinske radove? Prepustite nama izazov uklanjanja prašine, ostataka materijala i tvrdokornih nečistoća! Naš tim pažljivo čisti sve površine, uključujući podove, stolariju, prozore i sanitarije, kako bismo vaš prostor doveli u savršeno stanje. Sa PureClean Solutions, vaš prostor će biti spreman za upotrebu brže nego što očekujete!",
  },

  {
    image: "/ciscenjeZgrada.jpg",
    title: "Čišćenje stambenih zgrada",
    route: "/ciscenjezgrada",
    description:
      "Profesionalno održavanje stambenih zgrada podrazumeva redovno čišćenje zajedničkih prostora, uključujući hodnike, stepeništa, liftove i ulaze. Naša usluga obezbeđuje besprekoran izgled i higijenu, koristeći proverene metode i kvalitetna sredstva za čišćenje. Čistoća zgrade doprinosi prijatnijem i zdravijem životu svih stanara.",
  },
  {
    image: "/pranjeProzoraIzloga.jpg",
    title: "Pranje prozora i izloga",
    route: "/pranjeprozoraizloga",
    description:
      "Kristalno čisti prozori i izlozi ostavljaju snažan utisak i osvetljavaju svaki prostor. Naša usluga pranja prozora i izloga garantuje sjaj bez tragova, koristeći profesionalnu opremu i sredstva koja su bezbedna i efikasna. Bilo da se radi o stambenim ili poslovnim objektima, vaši prozori će zablistati kao nikad pre!",
  },
  {
    image: "/dubinsko.jpg",
    title: "Dubinsko pranje nameštaja",
    route: "dubinskopranjenamestaja",
    description:
      "Oživite vaš nameštaj uz našu uslugu dubinskog pranja! Efikasno uklanjamo prljavštinu, fleke i alergene iz dubokih slojeva tkanine, koristeći profesionalnu opremu i bezbedne proizvode. Vaše garniture, fotelje i stolice ne samo da će izgledati kao nove, već će biti i higijenski čiste, spremne za uživanje!",
  },
  {
    image: "/dubinskoPranjeTepiha.jpg",
    title: "Dubinsko pranje tepiha",
    route: "/dubinskopranjetepiha",
    description:
      "Vaši tepisi zaslužuju pažnju koja će im vratiti sjaj i svežinu! Naša usluga dubinskog pranja tepiha efikasno uklanja prašinu, fleke i neprijatne mirise, koristeći profesionalne mašine i visokokvalitetne preparate. Rezultat je temeljno očišćen i osvežen tepih, bez oštećenja, koji će uneti čistoću i udobnost u vaš dom ili poslovni prostor.",
  },
  {
    image: "/dubinskoPranjeAutomobila.jpg",
    title: "Dubinsko pranje automobila",
    route: "/dubinskopranjeautomobila",
    description:
      "Vašem automobilu je potrebna nega iznutra, a ne samo spolja! Naša usluga dubinskog pranja automobila obuhvata detaljno čišćenje sedišta, tepiha i unutrašnjih površina, uz uklanjanje prljavštine, fleka i neprijatnih mirisa. Koristimo savremenu opremu i sredstva koja su sigurna za vaš automobil, ostavljajući enterijer svežim, čistim i poput novog.",
  },
];

export const getPageData = (title) => {
  return pageData.find((page) => page.title === title);
};
