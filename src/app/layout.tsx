import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { LanguageProvider } from "@/context/LanguageContext";
import StoreProvider from "@/components/provider/StoreProvider";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precision Health",
  description: "Precision Health Laboratory at The University of Tokyo",
  icons: {
    icon: "img/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GNXFPD3F4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GNXFPD3F4F');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <StoreProvider>
          <LanguageProvider>
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWidget />
          </LanguageProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
