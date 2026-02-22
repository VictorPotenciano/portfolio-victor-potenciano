import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".//../globals.css";
import Navbar from "@/components/helper/Navbar";
import Footer from "@/components/helper/Footer";
import { LanguageProvider } from "@/context/LanguajeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-victor-potenciano.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
