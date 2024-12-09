export const pageData = [
  {
    image: "/ciscenje.jpg",
    title: "Redovno čišćenje",
    route: "/redovnociscenje",
    description:
      "Redovno održavanje prostora ključ je za urednost i higijenu u svakodnevnom životu. Naša usluga redovnog čišćenja obuhvata sve što je potrebno za čist i svež prostor, bilo da se radi o stanovima, kancelarijama ili poslovnim objektima. Fleksibilno se prilagođavamo vašim potrebama kako bismo osigurali besprekoran izgled vašeg prostora u svakom trenutku.",
  },
  {
    image: "/generalnociscenje.jpg",
    title: "Generalno čišćenje",
    route: "/generalnociscenje",
    description:
      "Generalno čišćenje podrazumeva temeljnu brigu o svakom kutku vašeg prostora. Naš tim čisti sve površine, uključujući podove, prozore, kuhinjske elemente, kupatila, i teško dostupna mesta. Detaljno uklanjamo prašinu, mrlje i nečistoće kako bismo osigurali da vaš prostor blista i bude u potpunosti osvežen. Prepustite nam posao, a mi ćemo se pobrinuti za savršenu čistoću!",
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

// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://www.ciscenje-nis.rs", // Zameni svojom domenom
//   generateRobotsTxt: true,
//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//     ],
//   },
// };
// next-sitemap.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Preporučuje se za otkrivanje problema

//   async rewrites() {
//     return [
//       {
//         source: "/ciscenje-nis", // SEO-friendly URL
//         destination: "/ciscenje",
//       },
//       {
//         source: "/generalno-ciscenje-nis", // Još jedan primer
//         destination: "/generalnociscenje",
//       },
//       {
//         source: "/ciscenje-posle-gradjevinskih-radova", // Još jedan primer
//         destination: "/ciscenjeposlegradjevinskihradova",
//       },
//       {
//         source: "/dubinsko-pranje-nis", // Još jedan primer
//         destination: "/dubinskopranje",
//       },
//     ];
//   },
//   async redirects() {
//     return [
//       {
//         source: "/old-route",
//         destination: "/new-route",
//         permanent: true, // 301 redirekcija za SEO
//       },
//     ];
//   },
//   env: {
//     SITE_URL: "https://www.ciscenje-nis.rs", // Korisno za sitemap generaciju
//   },
// };

// export default nextConfig;

// next.config.mjs
