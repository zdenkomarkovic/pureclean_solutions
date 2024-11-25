/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.purecleansolutions.rs", // Zameni svojom domenom
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
