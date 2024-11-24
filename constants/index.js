export const pageData = [
  {
    image: "/ciscenje.jpg",
    title: "Čišćenje",
    route: "/ciscenje",
    description:
      "Učinite vaš prostor blistavim uz usluge profesionalnog čišćenja! Bilo da je u pitanju stan, poslovni prostor ili kancelarija, PureClean Solutions garantuje besprekornu higijenu i pažnju prema svakom detalju. Naš tim koristi kvalitetna sredstva i efikasne metode kako bi obezbedio čistoću koja traje. Prepustite brigu nama i uživajte u savršenoj svežini vašeg prostora!",
  },
  {
    image: "/generalnociscenje.jpg",
    title: "Generalno čišćenje",
    route: "/generalnoCiscenje",
    description:
      "Generalno čišćenje podrazumeva temeljnu brigu o svakom kutku vašeg prostora. Naš tim čisti sve površine, uključujući podove, prozore, kuhinjske elemente, kupatila, i teško dostupna mesta. Detaljno uklanjamo prašinu, mrlje i nečistoće kako bismo osigurali da vaš prostor blista i bude u potpunosti osvežen. Prepustite nam posao, a mi ćemo se pobrinuti za savršenu čistoću!",
  },
  {
    image: "/gradjevinsko.jpg",
    title: "Čišćenje posle građevinskih radova",
    route: "/ciscenjePosleGradjevinskihRadova",
    description:
      "Završili ste renoviranje ili građevinske radove? Prepustite nama izazov uklanjanja prašine, ostataka materijala i tvrdokornih nečistoća! Naš tim pažljivo čisti sve površine, uključujući podove, stolariju, prozore i sanitarije, kako bismo vaš prostor doveli u savršeno stanje. Sa PureClean Solutions, vaš prostor će biti spreman za upotrebu brže nego što očekujete!",
  },
  {
    image: "/dubinsko.jpg",
    title: "Dubinsko pranje",
    route: "dubinskoPranje",
    description:
      "Oživite nameštaj i osvežite svoj prostor uz naše usluge dubinskog pranja! Uklanjamo duboko ukorenjenu prljavštinu, mrlje i alergene iz tapaciranog nameštaja, tepiha i dušeka. Koristimo profesionalne tehnike i sredstva koja su sigurna za vaš dom i porodicu. Sa PureClean Solutions, svaki kutak vašeg prostora dobija novu svežinu i higijensku čistoću!",
  },
  {
    image: "/generalnociscenje.jpg",
    title: "Restauracija",
    route: "/ciscenje",
    description:
      "Oživite nameštaj i osvežite svoj prostor uz naše usluge dubinskog pranja! Uklanjamo duboko ukorenjenu prljavštinu, mrlje i alergene iz tapaciranog nameštaja, tepiha i dušeka. Koristimo profesionalne tehnike i sredstva koja su sigurna za vaš dom i porodicu. Sa PureClean Solutions, svaki kutak vašeg prostora dobija novu svežinu i higijensku čistoću!",
  },
  {
    image: "/generalnociscenje.jpg",
    title: "Restauracija",
    route: "/ciscenje",
    description:
      "Oživite nameštaj i osvežite svoj prostor uz naše usluge dubinskog pranja! Uklanjamo duboko ukorenjenu prljavštinu, mrlje i alergene iz tapaciranog nameštaja, tepiha i dušeka. Koristimo profesionalne tehnike i sredstva koja su sigurna za vaš dom i porodicu. Sa PureClean Solutions, svaki kutak vašeg prostora dobija novu svežinu i higijensku čistoću!",
  },
  {
    image: "/generalnociscenje.jpg",
    title: "Cenovnik",
    route: "/ciscenje",
    description:
      "Oživite nameštaj i osvežite svoj prostor uz naše usluge dubinskog pranja! Uklanjamo duboko ukorenjenu prljavštinu, mrlje i alergene iz tapaciranog nameštaja, tepiha i dušeka. Koristimo profesionalne tehnike i sredstva koja su sigurna za vaš dom i porodicu. Sa PureClean Solutions, svaki kutak vašeg prostora dobija novu svežinu i higijensku čistoću!",
  },
  {
    image: "/ciscenje.jpg",
    title: "Dubinsko pranje automobila",
    route: "/dubinskoPranjeAutomobila",
    description:
      "Učinite vaš prostor blistavim uz usluge profesionalnog čišćenja! Bilo da je u pitanju stan, poslovni prostor ili kancelarija, PureClean Solutions garantuje besprekornu higijenu i pažnju prema svakom detalju. Naš tim koristi kvalitetna sredstva i efikasne metode kako bi obezbedio čistoću koja traje. Prepustite brigu nama i uživajte u savršenoj svežini vašeg prostora!",
  },
  {
    image: "/ciscenje.jpg",
    title: "Čišćenje",
    route: "/ciscenje",
    description:
      "Učinite vaš prostor blistavim uz usluge profesionalnog čišćenja! Bilo da je u pitanju stan, poslovni prostor ili kancelarija, PureClean Solutions garantuje besprekornu higijenu i pažnju prema svakom detalju. Naš tim koristi kvalitetna sredstva i efikasne metode kako bi obezbedio čistoću koja traje. Prepustite brigu nama i uživajte u savršenoj svežini vašeg prostora!",
  },
];

export const getPageData = (title) => {
  return pageData.find((page) => page.title === title);
};
