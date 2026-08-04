
import "../style/index.scss";
import "../style/tailwind.css";

export const metadata = {
  metadataBase: new URL('https://www.aquabrim.com'),
  title: 'Aquabrim',
  description: 'Aquabrim delivers smart, affordable, and reliable water automation solutions for homes, apartments, and industries. Efficient water level management since 2008.',
  alternates: {
    canonical: '/',
  },
};


import { Suspense } from "react";
import Script from "next/script";
import FloatingIcons from "../components/common/FloatingIcons";
import TrackingInit from "../components/common/TrackingInit";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/assets/images/logo_blue.png" />
        <link rel="shortcut icon" type="image/png" href="/assets/images/logo_blue.png" />
        <link rel="apple-touch-icon" href="/assets/images/logo_blue.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WLN7QDB');`}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DFZNDERB6G"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFZNDERB6G');
          `}
        </Script>
      </head>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLN7QDB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Suspense fallback={null}>
          <TrackingInit />
        </Suspense>
        {children}
        <FloatingIcons />
      </body>
    </html>
  )
}
