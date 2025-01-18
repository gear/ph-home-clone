import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precision Health",
  description: "Precision Health Laboratory at The University of Tokyo",
  icons: {
    icon: '@/public/img/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
      </body>
    </html>
  );
}
