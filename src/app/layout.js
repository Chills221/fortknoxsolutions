import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // choose weights you need
  variable: "--font-montserrat",
});
export const metadata = {
  title: 'Fort Knox Solutions | Security Film & Door Reinforcements for Homes in Toronto',
  description: 'Protect your home and family with Fort Knox Solutions. We specialize in security window film, door reinforcements, and home security upgrades across Toronto & the GTA. Free consultations available.',
  icons: {
    icon: '/favicon.ico', // default favicon
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // for iOS devices
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Magra:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
