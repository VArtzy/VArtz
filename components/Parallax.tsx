import type { NextPage } from "next"
import Image from "next/image"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useEffect, useRef, useState } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { BsFillJournalBookmarkFill, BsWhatsapp } from "react-icons/bs"
import { BiDevices, BiMailSend } from "react-icons/bi"
import { SiMaterialdesignicons } from "react-icons/si"
import {
    FaKissWinkHeart,
    FaRegGrinHearts,
    FaRegWindowRestore,
    FaArrowUp,
    FaCheck,
    FaWhatsapp,
    FaBolt,
    FaInfo,
} from "react-icons/fa"
import { useInView } from "react-intersection-observer"

import Link from "next/link"

const ParallaxRapper: NextPage = () => {
    const { ref, entry } = useInView({ trackVisibility: true, delay: 100 })

    const ParallaxRef = useRef<IParallax>(null)

    const alignCenter = { display: "flex", alignItems: "center" }
    const props = useSpring({
        to: { x: 0, opacity: 1 },
        from: { x: -40, opacity: 0 },
        delay: 200,
    })

    const [styles, api] = useSpring(() => ({
        from: { y: 50, opacity: 1 },
    }))

    useEffect(() => {
        api({
            y: -10,
            opacity: 1,
        })
    }, [])

    const [flip, set] = useState(false)

    const words = [
        "Toko Online",
        "Portofolio",
        "Landing Page",
        "            ",
        "Application",
        "Undangan",
        "Interaktif",
        "Responsive",
        "Premium.",
    ]

    const { scroll } = useSpring({
        scroll: (words.length - 1) * 50,
        from: { scroll: 0 },
        reset: true,
        reverse: flip,
        delay: 1500,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return (
        <>
            <Parallax
                ref={ParallaxRef}
                pages={10}
                style={{ top: "0", left: "0" }}
            >
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFFBFE",
                    }}
                >
                    <main className="grid lg:grid-cols-2 px-8 place-items-center min-h-screen">
                        <h1 className="sr-only">
                            Buat Website dan jalankan berbagai bisnismu sekarang
                            juga.
                        </h1>
                        <div className="">
                            <animated.div
                                onClick={() => ParallaxRef.current?.scrollTo(5)}
                                className="lg:flex gap-2 hover:cursor-pointer lg:relative right-4"
                                style={props}
                            >
                                <h2 className="text-3xl md:text-4xl w-full lg:text-right font-bold lg:mb-4 text-grayweb mt-16 lg:mt-0">
                                    Buat Website
                                </h2>
                                <animated.div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: 55,
                                        overflow: "hidden",
                                    }}
                                    scrollTop={scroll}
                                >
                                    {words.map((word, i) => (
                                        <div
                                            key={`${word}_${i}`}
                                            style={{
                                                width: "100%",
                                                height: i === 8 ? 60 : 50,
                                            }}
                                        >
                                            <h2 className="text-3xl text-turquoise md:text-4xl font-bold">
                                                {word}
                                            </h2>
                                        </div>
                                    ))}
                                </animated.div>
                            </animated.div>
                            <animated.div style={props}>
                                <p className="max-w-lg mb-8 text-grayweb">
                                    Sekarang ini semua hal sudah berjalan secara
                                    Online. Mulai dari kegiatan
                                    belanja-berbelanja sampai mencari informasi.
                                    Tentu itu bagus apabila kamu memiliki{" "}
                                    <a
                                        onClick={() =>
                                            ParallaxRef.current?.scrollTo(6)
                                        }
                                        className="underline"
                                    >
                                        super Website
                                    </a>{" "}
                                    untuk menunjang semua informasi atau
                                    menjalankan bisnis kamu!
                                </p>
                            </animated.div>
                            <animated.div
                                style={{
                                    ...styles,
                                }}
                            >
                                <div className="flex gap-4">
                                    <a
                                        href="https://wa.me/6289628196420?text=Hai%20min,%20bisa%buatkan%20saya%20website?"
                                        className="inline-block text-md rounded bg-springGreen px-4 py-2"
                                    >
                                        Buatkan Saya
                                    </a>
                                    <a
                                        href="https://wa.me/6289628196420?text=Hai%20min,%20bisa%20konsultasi%20buat%20website?"
                                        className="flex items-center gap-2 text-md rounded bg-mediumSpringGreen px-4 py-2"
                                    >
                                        <BsWhatsapp />
                                        Konsultasi Gratis
                                    </a>
                                </div>
                            </animated.div>
                        </div>
                        <div className="">
                            <div className="card-swiper">
                                <div className="card-groups">
                                    <div
                                        className="card-group"
                                        data-index="0"
                                        data-status="active"
                                    >
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                    </div>
                                </div>
                                <div className="card-swiper-buttons">
                                    <button id="hate-button">
                                        <FaRegGrinHearts className="text-mediumSpringGreen" />
                                    </button>
                                    <button id="love-button">
                                        <FaKissWinkHeart />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1, end: 4 }}
                    style={{ ...alignCenter, justifyContent: "flex-start" }}
                    className="flex-col lg:flex-row px-8 z-50"
                >
                    <div
                        className={`text-4xl text-center text-grayweb w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 mt-16 lg:mt-0`}
                    >
                        <h2 className="">
                            Kita{" "}
                            <span className="text-turquoise">
                                {`${
                                    entry?.isIntersecting
                                        ? "Mengembangkan"
                                        : "Membangun"
                                }`}
                            </span>
                        </h2>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={1.5}
                    style={{ ...alignCenter }}
                    className="items-center justify-center lg:justify-end"
                >
                    <div className={`items-center justify-center`}>
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                                Landing Page
                            </span>{" "}
                            Produk E-Book The Malaka
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/13] lg:aspect-video">
                            <Image
                                alt="Joga Computer web thumbail"
                                src="/img/eb1.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/13] lg:aspect-video"
                            ></Image>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={1.5}
                    style={{ ...alignCenter }}
                    className="items-center justify-center lg:justify-end"
                >
                    <div ref={ref} className={`items-center justify-center`}>
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                                Personal Portofolio
                            </span>{" "}
                            Mie Bandung Singosaren
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/13] lg:aspect-video">
                            <Image
                                alt="Joga Computer web thumbail"
                                src="/img/eb5.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/13] lg:aspect-video"
                            ></Image>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.5}
                    speed={1.5}
                    style={{ ...alignCenter }}
                    className="items-center justify-center lg:justify-end"
                >
                    <div className={`items-center justify-center`}>
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                                E-Commerce
                            </span>{" "}
                            Joga Computer
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video">
                            <Image
                                alt="Joga Computer web thumbail"
                                src="/img/eb4.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/15] lg:aspect-video"
                            ></Image>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                >
                    <h2 className="text-3xl text-center lg:text-4xl font-bold mt-8">
                        Tingkatkan Bisnis Anda dengan Website
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <p>
                                Hampir setiap kali anda mengakses iklan di media
                                sosial seperti facebook, instagram, tiktok dan
                                youtube pasti akan menyuruh Anda untuk
                                mengunjungi Website akun mereka. Kenapa para
                                pelaku usaha tersebut membuat Website? Apa
                                keuntungannya?
                            </p>

                            <ul className="text-xs flex flex-col gap-2 list-disc">
                                <li>
                                    Website ibarat lapak untuk mempromosikan
                                    produk/usaha/diri anda kepada dunia
                                </li>
                                <li>Membangun kredibilitas usaha Anda</li>
                                <li>
                                    Website dapat memberikan informasi yang anda
                                    berikan
                                </li>
                                <li>
                                    Laman bertenggernya pelanggan untuk
                                    mementukan pilihan pembelian
                                </li>
                            </ul>

                            <div className="">
                                <h3 className="text-xs">
                                    Baca Blog atau Tentang Kontak Kami untuk
                                    optimalkan Website anda.
                                </h3>
                                <Link
                                    href="/blog"
                                    className="bg-springGreen px-4 py-2 rounded inline-block mt-4 text-snow mr-4"
                                >
                                    <BsFillJournalBookmarkFill className="inline" />{" "}
                                    Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-springGreen px-4 py-2 rounded inline-block mt-4 text-snow"
                                >
                                    <FaInfo className="inline" /> About &
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video"></div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={6}
                    speed={2}
                    className="bg-mediumSpringGreen"
                />

                <ParallaxLayer
                    offset={6}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                        color: "white",
                    }}
                    className="max-w-3xl mx-auto px-8"
                >
                    <h2
                        className="pt-4 text-3xl text-center lg:text-4xl font-bold mt-8"
                        onClick={() => ParallaxRef.current?.scrollTo(0)}
                    >
                        Go Online dan lebarkan sayap bisnis Anda.
                    </h2>

                    <p>Dengan Website yang lebih baik.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <BiDevices /> Mobile Freindly
                            </h3>
                            <p>
                                Website anda dapat diakses optimal dalam
                                desktop, tablet dan handphone. Menjangkau lebih
                                banyak pengguna.
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <SiMaterialdesignicons /> Desain Ekslusif
                            </h3>
                            <p>
                                Kami membangun desain Website yang EKSLUSIF.
                                sesuai dengan brand dan karateristik anda.
                                Dengan desain yang modern juga.
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <FaRegWindowRestore /> Sesuai Kebutuhan Anda
                            </h3>
                            <p>
                                Kami dapat membangun Website sesuai kebutuhan
                                anda. Cukup konsultasi dan Website kamu jadi.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-md rounded bg-grayweb p-4">
                        <h3 className="text-lg font-bold mb-4">
                            <FaBolt />
                            Website cepat, seperti kilat.{" "}
                        </h3>
                        <p>
                            Performa Website kami sangatlah cepat. Pastinya kamu
                            tidak akan kehilangan pelanggan hanya karena Website
                            yang lelet dan lemot itu.
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={7}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4em",
                        color: "white",
                    }}
                    className="max-w-6xl mx-auto px-8"
                >
                    <h2 className="text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb">
                        Mulai Buat. Dari Sekarang.
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        <div className="bg-snow text-grayweb shadow-md rounded p-4 text-center lg:text-left">
                            <h3 className="text-lg font-bold">Basic</h3>
                            <h4 className="font-bold mb-4">Start From</h4>
                            <hr className="mb-4" />
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold">
                                    Rp 199.000
                                </h4>
                                <p>/Bulan</p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold mb-4">
                                    Rp 999.000
                                </h4>
                                <p>/Tahun</p>
                            </div>
                            <p className="text-md mb-4">
                                Landing Page dengan 1 halaman serta maks. 5
                                Section. Cocok untuk produk/portofolio.
                            </p>
                            <div className="flex gap-4 items-center text-center lg:text-left">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Informasi Tersampaikan
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Design Eklusfif (+Customable)
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Responsive + Interaktif
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Hosted + Domain (.com!)
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Chat To whatsapp + Icon Socmed
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">Revisi maks. 2 kali</p>
                            </div>

                            <a
                                href="https://wa.me/6289628196420?text=Pesan%20Website%20basic%20dong%20min!"
                                className="bg-springGreen px-4 py-2 rounded inline-block mt-4 text-snow"
                            >
                                <FaWhatsapp className="inline" /> Pesan Sekarang
                            </a>
                        </div>
                        <div className="bg-turquoise text-snow shadow-md rounded p-4 text-center lg:text-left scale-105">
                            <h3 className="text-lg font-bold">Super</h3>
                            <h4 className="font-bold mb-4">Start From</h4>
                            <hr className="mb-4" />
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold mb-4">
                                    Rp 1.999.000
                                </h4>
                                <p>/Tahun</p>
                            </div>
                            <p className="text-md mb-4">
                                Company Profile Website. Cocok dengan bisnis
                                skala besar untuk menunjukan berbagai visi, misi
                                dan inovasi dari bisnis kamu.
                            </p>
                            <div className="flex gap-4 items-center text-center lg:text-left">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Semua fitur di harga bawahnya
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Bussiness Based Website
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">5 atau lebih halaman</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Copywrite & Content writing
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">Revisi maks. 5 kali</p>
                            </div>

                            <a
                                href="https://wa.me/6289628196420?text=Pesan%20Website%20super%20dong%20min!"
                                className="bg-springGreen px-4 py-2 rounded inline-block mt-4 text-snow"
                            >
                                <FaWhatsapp className="inline" /> Pesan Sekarang
                            </a>
                        </div>
                        <div className="bg-snow text-grayweb shadow-md rounded p-4 text-center lg:text-left">
                            <h3 className="text-lg font-bold">Custom</h3>
                            <h4 className="font-bold mb-4">Start From</h4>
                            <hr className="mb-4" />
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold">
                                    Rp 299.000
                                </h4>
                                <p>/Bulan</p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold mb-4">
                                    Rp 999.000
                                </h4>
                                <p>/Tahun</p>
                            </div>
                            <p className="text-md mb-4">
                                Custom Website. Cocok dengan pembuatan Website
                                blogging, web App, Kartu Undangan,
                                Email/Newsletter.
                            </p>
                            <div className="flex gap-4 items-center text-center lg:text-left">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Semua fitur di harga bawahnya
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Custom Sesuai Kemauan Anda
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">
                                    Berbagai Jenis Website
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">Konsultasi Lebih</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">Revisi maks. 2 kali</p>
                            </div>
                            <a
                                href="https://wa.me/6289628196420?text=Pesan%20Website%20customnya%20dong%20min!"
                                className="bg-springGreen px-4 py-2 rounded inline-block mt-4 text-snow"
                            >
                                <FaWhatsapp className="inline" /> Pesan Sekarang
                            </a>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={8}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4em",
                        color: "white",
                    }}
                    className="max-w-6xl mx-auto px-8"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={9}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "4em",
                        color: "white",
                    }}
                >
                    <div
                        onClick={() => ParallaxRef.current?.scrollTo(0)}
                        className="mx-auto p-4 bg-mediumSpringGreen rounded cursor-pointer"
                    >
                        <FaArrowUp className="text-snow" />
                    </div>

                    <footer className="mt-16 lg:flex justify-between text-snow bg-grayweb py-16 px-16">
                        <div className="lg:w-1/3 mb-8">
                            <h2 className="text-2xl text-snow mb-2">VArtz</h2>
                            <p>
                                Buat Website untuk meningkatkan peluang bisnis
                                online kamu. Kami akan siap menerima konsultasi
                                untuk pembuatan dari kamu.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl mb-2">Sitemap</h3>
                            <ul className="mb-2">
                                <div className="flex gap-8">
                                    <li>
                                        <Link className="text-snow" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-snow"
                                            href="/blog"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-snow"
                                            href="/about"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl mb-2">Contacts</h3>
                            <a
                                href="https://wa.me/6289628196420"
                                className="bg-springGreen px-4 py-2 rounded inline-block text-snow mb-2"
                            >
                                <FaWhatsapp className="inline" /> Chat Whatsapp
                            </a>
                            <p>
                                <BiMailSend className="inline" />{" "}
                                farrelnikoson@gmail.com
                            </p>
                        </div>
                    </footer>
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default ParallaxRapper
