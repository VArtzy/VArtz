"use client"

import { ProductJsonLd } from "next-seo"
import { FaShoppingCart } from "react-icons/fa"
import ParallaxRapper from "../components/Parallax"
import { useState, useEffect } from "react"

const Home = () => {
    const [nama, setNama] = useState("")
    const [alamat, setAlamat] = useState("")
    const [paket, setPaket] = useState("")
    const [time, setTime] = useState("")
    const namas = [
        "Ihsan Jihad",
        "Nenti Dian Ratnasari",
        "Aryo Segolo",
        "Sigit Prayit",
        "Rian Jihadi",
        "Meli Irene",
        "Nathanael",
        "Neri Suhadi",
        "Agus Sugiarto",
        "Reynhard Tanuwijaya",
        "Mumhammad Iwan",
        "Yusuf Dharmawan",
        "Angelina Nadeak",
        "Fevrie Barmaka",
    ]
    const alamats = [
        "Depok",
        "Surabaya",
        "Solo",
        "Jogja",
        "Bandung",
        "Medan",
        "Kudus",
        "Jakarta",
        "Semarang",
        "Jambi",
        "Surakarta",
        "Blitar",
        "Jember",
        "Makassar",
    ]
    const pakets = ["Basic", "Super", "Custom"]
    const times = [
        "Kemarin",
        "Hari ini",
        "2 Hari lalu",
        "1 Jam lalu",
        "5 Jam lalu",
        "12 Jam lalu",
        "7 Jam lalu",
        "3 Hari lalu",
        "29 Menit lalu",
        "12 Menit lalu",
        "4 Jam lalu",
        "54 Menit lalu",
        "22 Jam lalu",
        "45 Menit lalu",
    ]

    const [show, setShow] = useState(false)
    const [sudah, setSudah] = useState(0)

    useEffect(() => {
        if (sudah < 2 && !show) {
            const timeout = setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * namas.length)
                const randomIndexPaket = Math.floor(
                    Math.random() * pakets.length
                )
                setNama(namas[randomIndex])
                setAlamat(alamats[randomIndex])
                setPaket(pakets[randomIndexPaket])
                setTime(times[randomIndex])
                setTimeout(() => {
                    setNama("")
                    setSudah(sudah + 1)
                }, 10000)
            }, 5000)

            return () => clearTimeout(timeout)
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * namas.length)
            const randomIndexPaket = Math.floor(Math.random() * pakets.length)
            setNama(namas[randomIndex])
            setAlamat(alamats[randomIndex])
            setPaket(pakets[randomIndexPaket])
            setTime(times[randomIndex])
            setTimeout(() => {
                setNama("")
            }, 10000)
        }, 30000)

        return () => clearInterval(interval)
    }, [namas, alamats, pakets, times])

    useEffect(() => {
        if (nama) {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 9500)
        }
    }, [namas])

    return (
        <>
            <div className="max-w-5xl px-4 tracking-wider leading-relaxed">
                <ParallaxRapper></ParallaxRapper>
                {nama && (
                    <div
                        className={`fixed bottom-0 right-0 left-0 w-[80%] max-w-xs md:-right-auto bg-snow mx-auto md:mx-4 p-4 rounded-tl-md rounded-tr-md shadow-sm ${
                            show ? "animate-fade-in" : "animate-fade-out"
                        }`}
                    >
                        <div className="flex gap-4 items-center">
                            <FaShoppingCart className="text-mediumSpringGreen text-xl" />
                            <div className="">
                                <h2 className="text-xs md:text-md font-semibold">
                                    {nama} dari {alamat}
                                </h2>
                                <p className="text-xs md:text-md">
                                    telah membeli web {paket}
                                </p>
                                <p className="text-xs md:text-md opacity-50">
                                    {time}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
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
