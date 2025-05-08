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
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QR9EGES1FV');
        `}
                </Script>
            </head>
            <body>
                <Nav />
                {children}
            </body>
        </html>
    )
}
