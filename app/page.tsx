"use client"

import { ProductJsonLd } from "next-seo"
import ParallaxRapper from "../components/Parallax"

const Home = () => {
    return (
        <>
            <div className="max-w-5xl px-4 tracking-wider leading-relaxed">
                <ParallaxRapper></ParallaxRapper>
            </div>
            <ProductJsonLd
                type="Product"
                productName="Jasa Pembuatan Website"
                description="Pembuatan Website murah dan cepat untuk penuhi kebutuhan bisnis kamu."
                reviews={[
                    {
                        author: "PRIAMALAS",
                        datePublished: "2023-02-06T03:37:40Z",
                        reviewBody:
                            "Kalo minta rekomendasiku, VArtz ini adalah webmaster yang jago banget buat bikin website. Dari desain, konten sampai teknikal",
                        name: "Keren!!!",
                        reviewRating: {
                            bestRating: "5",
                            ratingValue: "5",
                            worstRating: "4",
                        },
                    },
                ]}
                aggregateRating={{
                    ratingValue: "4.8",
                    reviewCount: "178",
                }}
                aggregateOffer={{
                    lowPrice: "199.000",
                    priceCurrency: "IDR",
                    highPrice: "2.000.000",
                }}
            />
        </>
    )
}

export default Home
