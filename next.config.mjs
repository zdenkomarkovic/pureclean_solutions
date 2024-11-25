/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Preporučuje se za otkrivanje problema

  async rewrites() {
    return [
      {
        source: "/ciscenje-nis", // SEO-friendly URL
        destination: "/ciscenje",
      },
      {
        source: "/generalno-ciscenje-nis", // Još jedan primer
        destination: "/generalnoCiscenje",
      },
      {
        source: "/ciscenje-posle-gradjevinskih-radova", // Još jedan primer
        destination: "/ciscenjePosleGradjevinskihRadova",
      },
      {
        source: "/dubinsko-pranje-nis", // Još jedan primer
        destination: "/dubinskoPranje",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true, // 301 redirekcija za SEO
      },
    ];
  },
  env: {
    SITE_URL: "https://www.purecleansolutions.rs", // Korisno za sitemap generaciju
  },
};

export default nextConfig;
