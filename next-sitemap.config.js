/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ciscenje-nis.rs", // Zameni svojom domenom
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
