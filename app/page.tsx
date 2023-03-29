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
  type="Store"
  id="http://davesdeptstore.example.com"
  name="Dave's Department Store"
  description="Dave's latest department store in San Jose, now open"
  url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
  telephone="+14088717984"
  address={{
    streetAddress: '1600 Saratoga Ave',
    addressLocality: 'San Jose',
    addressRegion: 'CA',
    postalCode: '95129',
    addressCountry: 'US',
  }}
  geo={{
    latitude: '37.293058',
    longitude: '-121.988331',
  }}
  images={[
    'https://example.com/photos/1x1/photo.jpg',
    'https://example.com/photos/4x3/photo.jpg',
    'https://example.com/photos/16x9/photo.jpg',
  ]}
  sameAs={[
    'www.company-website-url1.dev',
    'www.company-website-url2.dev',
    'www.company-website-url3.dev',
  ]}
  openingHours={[
    {
      opens: '08:00',
      closes: '23:59',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      validFrom: '2019-12-23',
      validThrough: '2020-04-02',
    },
    {
      opens: '14:00',
      closes: '20:00',
      dayOfWeek: 'Sunday',
      validFrom: '2019-12-23',
      validThrough: '2020-04-02',
    },
  ]}
  rating={{
    ratingValue: '4.5',
    ratingCount: '2',
  }}
  review={[
    {
      author: 'John Doe',
      datePublished: '2006-05-04',
      name: 'A masterpiece of literature',
      reviewBody:
        'I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.',
      reviewRating: {
        bestRating: '5',
        worstRating: '1',
        reviewAspect: 'Ambiance',
        ratingValue: '4',
      },
    },
    {
      author: 'Bob Smith',
      datePublished: '2006-06-15',
      name: 'A good read.',
      reviewBody: "Catcher in the Rye is a fun book. It's a good book to read.",
      reviewRating: {
        ratingValue: '4',
      },
    },
  ]}
  makesOffer={[
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '1000-10000',
      },
      itemOffered: {
        name: 'Motion Design Services',
        description:
          'We are the expert of animation and motion design productions.',
      },
    },
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '2000-10000',
      },
      itemOffered: {
        name: 'Branding Services',
        description:
          'Real footage is a powerful tool when it comes to show what the business is about. Can be used to present your company, show your factory, promote a product packshot, or just tell any story. It can help create emotional links with your audience by showing punchy images.',
      },
    },
  ]}
  areaServed={[
    {
      geoMidpoint: {
        latitude: '41.108237',
        longitude: '-80.642982',
      },
      geoRadius: '1000',
    },
    {
      geoMidpoint: {
        latitude: '51.108237',
        longitude: '-80.642982',
      },
      geoRadius: '1000',
    },
  ]}
  action={{
    actionName: 'potentialAction',
    actionType: 'ReviewAction',
    target: 'https://www.example.com/review/this/business',
  }}
/>
        </div>
    )
}

export default Home
