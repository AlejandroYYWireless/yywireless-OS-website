import type { Metadata } from "next";
import {
  Inter,
  Lexend_Exa,
  Lexend_Mega,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/navbar";

const lexendmega = Lexend_Mega({
  variable: "--font-lexendmega",
  subsets: ["latin"],
});
const lexendexa = Lexend_Exa({
  variable: "--font-lexendexa",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YYWireless - Refurbished Electronics",
  description:
    "YYWireless is a leading provider of refurbished electronics, offering high-quality products at affordable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${lexendexa.variable} ${lexendmega.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
