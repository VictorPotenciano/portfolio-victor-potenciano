import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".//../globals.css";
import Navbar from "@/components/helper/Navbar";
import Footer from "@/components/helper/Footer";
import { LanguageProvider } from "@/context/LanguajeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Victor Potenciano",
  description: "Portfolio personal de Victor Potenciano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#0a0f1a]">
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
