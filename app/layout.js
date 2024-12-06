import localFont from "next/font/local";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
