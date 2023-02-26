import Nav from "../components/Nav"
import "../styles/globals.css"
import { DM_Sans } from "@next/font/google"
import Script from "next/script"

const dm = DM_Sans({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="id"
            className={`${dm.className} scroll-smooth scroll-pt-16`}
        >
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-QR9EGES1FV"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QR9EGES1FV');
        `}
                </Script>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WS3M94S');`}
                </Script>
            </head>
            <body>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WS3M94S"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <Nav />
                {children}
            </body>
        </html>
    )
}
