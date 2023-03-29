"use client"

import { FaShoppingCart } from "react-icons/fa"
import { LocalBusinessJsonLd } from "next-seo"
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
        "Beni Setiawan",
        "Imam Abu Salma",
        "Deipan Abdul",
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
        "Surabaya",
        " Bojonegoro",
        "Jogja",
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
        "10 Menit lalu",
        "Kemarin",
        "Hari ini",
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
            }, 3000)

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
<LocalBusinessJsonLd
  type="WebSite"
  id="https://vartz.web.id"
  name="VArtz"
  description="Jasa Pembuatan Situs Web Berkualitas dan Terjangkau untuk Bisnis Kecil Menengah."
  url="https://vartz.web.id"
  telephone="+629611905599"
  address={{
                    streetAddress: "105 Gatot Subroto",
                    addressLocality: "Laweyan",
                    addressRegion: "Surakarta",
                    postalCode: "57111",
                    addressCountry: "ID",
                }}
  makesOffer={[
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'ID',
        price: 'Rp 599.000',
      },
      itemOffered: {
        name: 'Jasa Pembuatan Web Paket Basic',
        description:
          'Paket pembuatan situs web dengan fitur dasar pilihan',
      },
    },
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'IDR',
        price: 'Rp 999.000',
      },
      itemOffered: {
        name: 'Jasa Pembuatan Web Paket Custom',
        description:
          'Paket pembuatan situs web dengan fitur lebih lengkap dan kustom',
      },
{
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'IDR',
        price: 'Rp 1.799.000',
      },
      itemOffered: {
        name: 'Jasa Pembuatan Web Paket Super',
        description:
          'Paket pembuatan situs web dengan fitur lengkap dan desain super',
      },
    },
  ]}
/>
        </div>
    )
}

export default Home
