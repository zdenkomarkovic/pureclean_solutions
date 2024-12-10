import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pure Clean Solutions - Čišćenje Niš ",
  description:
    "Ciscenje prepustite nama. Dok vi odmarate ili radite nesto drugo, mi cemo vam srediti stan, kancelariju, poslovni prostor.",
  icons: {
    icon: "/pureclean_logo.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "ciscenje",
    "ciscenje nis",
    "dubinsko pranje",
    "dubinsko pranje automobila",
    "ciscenje kancelarija",
    "ciscenje poslovnog prostora",
    "ciscenje zgrada",
  ],
  alternates: {
    canonical: "https://www.ciscenje-nis.rs/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,  maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
