import Nav from "../components/Nav"
import "../styles/globals.css"
import "../styles/blog.module.css"
import { DM_Sans } from "@next/font/google"

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
        <html className={dm.className}>
            <head />
            <body>
                <Nav />
                {children}
            </body>
        </html>
    )
}
