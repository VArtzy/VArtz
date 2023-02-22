import Script from "next/script"

export default function Head() {
    return (
        <>
            <title>
                VArtz - Mulai Dari 199.000 - Buat Website Dan Jalankan Berbagai
                Bisnismu Sekarang Juga
            </title>
            <meta
                name="description"
                content="Sekarang ini semua hal sudah berjalan secara
                                    Online. Mulai dari kegiatan
                                    belanja-berbelanja sampai mencari informasi.
                                    Tentu itu bagus apabila kamu memiliki super Website
                                    untuk menunjang semua informasi atau
                                    menjalankan bisnis kamu!"
            />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link rel="icon" href="/favicon.ico" />
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
        </>
    )
}
