"use client"

import ParallaxRapperEn from "../components/ParallaxEn"

const Home = () => {
    return (
        <div className="max-w-5xl px-4 tracking-wider leading-relaxed">
            <ParallaxRapperEn></ParallaxRapperEn>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "VArtz",
                        url: "https://vartz.web.id/",
                        description:
                            "Jasa Pembuatan Situs Web Berkualitas dan Terjangkau untuk Bisnis Kecil Menengah.",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: "https://vartz.web.id/search?q={search_term_string}",
                            "query-input": "required name=search_term_string",
                        },
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Paket Pembuatan Situs Web",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Paket Basic",
                                        description:
                                            "Paket pembuatan situs web dengan fitur dasar dan basic",
                                        url: "https://vartz.web.id/pricing",
                                        provider: {
                                            "@type": "Organization",
                                            name: "VArtz",
                                        },
                                    },
                                    priceSpecification: {
                                        "@type": "PriceSpecification",
                                        price: "Rp 599.000",
                                        priceCurrency: "IDR",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Paket Custom",
                                        description:
                                            "Paket pembuatan situs web dengan fitur lebih lengkap dan kustom",
                                        url: "https://vartz.web.id/pricing",
                                        provider: {
                                            "@type": "Organization",
                                            name: "VArtz",
                                        },
                                    },
                                    priceSpecification: {
                                        "@type": "PriceSpecification",
                                        price: "Rp 999.000",
                                        priceCurrency: "IDR",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Paket Super",
                                        description:
                                            "Paket pembuatan situs web dengan fitur lengkap dan desain kustom serta premium",
                                        url: "https://vartz.web.id/pricing",
                                        provider: {
                                            "@type": "Organization",
                                            name: "VArtz",
                                        },
                                    },
                                    priceSpecification: {
                                        "@type": "PriceSpecification",
                                        price: "Rp 1.799.000",
                                        priceCurrency: "IDR",
                                    },
                                },
                            ],
                        },
                    }),
                }}
            />
        </div>
    )
}

export default Home
