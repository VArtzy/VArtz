import type { NextPage } from "next"
import Image from "next/image"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useEffect, useRef, useState } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import {
    BsArrowRight,
    BsFillJournalBookmarkFill,
    BsWhatsapp,
} from "react-icons/bs"
import { BiDevices } from "react-icons/bi"
import { SiMaterialdesignicons } from "react-icons/si"
import {
    FaKissWinkHeart,
    FaRegGrinHearts,
    FaRegWindowRestore,
    FaArrowUp,
    FaBolt,
    FaInfo,
} from "react-icons/fa"
import { useInView } from "react-intersection-observer"

import Link from "next/link"
import Accordion from "./Accor"
import Foo from "./Foo"

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
        "Premium",
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
                pages={22}
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
                            Jasa Pembuatan Website dan jalankan berbagai
                            bisnismu sekarang juga.
                        </h1>
                        <div className="">
                            <animated.div
                                onClick={() => ParallaxRef.current?.scrollTo(5)}
                                className="lg:flex gap-2 hover:cursor-pointer lg:relative right-4"
                                style={props}
                            >
                                <h2 className="text-3xl md:text-4xl w-full lg:text-right font-bold lg:mb-4 text-grayweb mt-36 lg:mt-0">
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
                                <p className="max-w-lg mb-4 lg:text-lg font-medium">
                                    Jasa Web Terbaik: Web Mudah, Garansi Hasil,
                                    Bonus Domain & Transparan.
                                </p>
                                <p className="max-w-lg mb-8">
                                    Nikmati website eksklusif, ramah anggaran
                                    yang luar biasa. Untuk Anda dan bisnis
                                    kecil-menengah yang mendambakan web efektif,
                                    ramah pengguna &amp; indah. Mudah digunakan
                                    dan disukai pelanggan.
                                </p>
                            </animated.div>
                            <animated.div
                                style={{
                                    ...styles,
                                }}
                            >
                                <div className="flex gap-4">
                                    <a
                                        href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                                        id="konversi_konsultasi_web"
                                        className="inline-block text-md rounded bg-springGreen hover:bg-mediumSpringGreen transition px-4 py-2 text-white"
                                    >
                                        Saya Ambil Harga Promo
                                    </a>
                                    <a
                                        href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%20konsultasi%20buat%20website?"
                                        id="konversi_konsultasi_web"
                                        className="flex items-center gap-2 text-md rounded bg-mediumSpringGreen hover:bg-SpringGreen transition px-4 py-2 text-snow"
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
                                    <button
                                        id="hate-button"
                                        aria-label="aku suka"
                                    >
                                        <FaRegGrinHearts className="text-mediumSpringGreen" />
                                    </button>
                                    <button
                                        id="love-button"
                                        aria-label="ini keren"
                                    >
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
                    id="portofolio"
                >
                    <div
                        className={`text-3xl md:text-4xl text-center text-grayweb w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 mt-16 lg:mt-0`}
                    >
                        <h2 className="">
                            Kami{" "}
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
                            First Media
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/13] lg:aspect-video">
                            <Image
                                alt="First media web thumbail"
                                src="/img/eb2.webp"
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
                                alt="Mie Bandung web thumbail"
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
                    <div
                        className={`items-center justify-center max-w-[640px]`}
                    >
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

                        <a
                            href="/work"
                            className="text-grayweb px-8 block md:inline mt-4"
                        >
                            Kami bangga dengan hubungan klien dan situs web yang
                            telah kami bangun
                            <BsArrowRight className="inline" />
                        </a>
                        <a
                            href="/blog/lika-liku-pengembangan-web-app"
                            className="text-grayweb px-8 block md:inline"
                        >
                            Lihat alur proses pengerjaan{" "}
                            <BsArrowRight className="inline" />
                        </a>
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
                    <h2 className="max-w-3xl text-3xl text-center lg:text-4xl font-bold mt-8">
                        Penting! Sekarang Semua Punya Website, Jangan Mau
                        Ketinggalan.
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <p className="mt-4">
                                Hampir setiap kali Anda mengakses iklan di media
                                sosial seperti facebook, instagram, tiktok dan
                                youtube pasti akan menyuruh Anda untuk
                                mengunjungi Website akun mereka. Kenapa para
                                pelaku usaha tersebut membuat Website? Apa
                                keuntungannya? Inilah alasan harus menggunakan
                                jasa pembuatan website dan buat/bikin website.
                            </p>

                            <ul className="text-xs flex flex-col gap-2 list-disc mt-4">
                                <li>
                                    Website ibarat lapak untuk mempromosikan
                                    produk/usaha/diri Anda kepada dunia
                                </li>
                                <li>Membangun kredibilitas usaha Anda</li>
                                <li>
                                    Website/landing dapat memberikan informasi
                                    yang Anda berikan
                                </li>
                                <li>
                                    Customer Anda akan selalu mengecek informasi
                                    usaha Anda lewat website. Bayangkan saja
                                    jika Anda tidak punya atau sudah punya namun
                                    kurang menarik. 100% RUGI.{" "}
                                </li>
                                <li>
                                    Dan masih banyak lagi. Anda seharusnya sudah
                                    tahu betapa banyak benefit yang dimiliki
                                    jika mempunyai website/landing page
                                </li>
                            </ul>

                            <div className="">
                                <h3 className="text-xs">
                                    Baca Blog atau Tentang Kontak Kami untuk
                                    optimalkan Website Anda.
                                </h3>
                                <Link
                                    href="/blog"
                                    className="bg-mediumSpringGreen px-4 py-2 hover:bg-springGreen transition-all rounded inline-block mt-4 text-snow mr-4"
                                >
                                    <BsFillJournalBookmarkFill className="inline" />{" "}
                                    Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-mediumSpringGreen px-4 py-2 hover:bg-springGreen transition-all rounded inline-block mt-4 text-snow"
                                >
                                    <FaInfo className="inline" /> About &
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video">
                            <Image
                                alt="Performa website"
                                src="/img/eb12.webp"
                                width={464}
                                height={229}
                                className="w-full object-cover object-top aspect-[9/15] lg:aspect-video"
                            ></Image>
                            </div>
                            <p className="mt-4 lg:ml-8 text-xs">
                                Dalam banyak kasus, situs web tidak
                                memperhatikan prinsip-prinsip dasar dan lanjutan
                                dalam desain UX (User Experience), yang
                                mengakibatkan konversi yang rendah, kehilangan
                                penjualan dan prospek, serta sulit digunakan dan
                                dipahami secara efektif.
                            </p>
                            <p className="mt-4 lg:ml-8 text-xs">
                                Oleh karena itu, sebagai seorang yang ingin
                                membuat internet menjadi tempat yang lebih baik
                                dan bermanfaat, saya berkomitmen untuk
                                memperbaiki satu situs web pada satu waktu
                                dengan menerapkan praktik desain UX yang baik.
                            </p>
                        </div>
                    </div>
                    <span className="block text-center text-slate-800">
                        Berpikir membuat sendiri/web builder?
                        <Link
                            href="/blog/membuat-web-sendiri-vs-jasa-vs-builder"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            coba pikir lagi <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={6}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={7}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                        color: "white",
                        height: "auto",
                    }}
                    className="max-w-3xl mx-auto px-8"
                    id="testimonial"
                >
                    <h2
                        className="pt-4 text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb"
                        onClick={() => ParallaxRef.current?.scrollTo(0)}
                    >
                        Sukses Online Bersama Kami: Ini Kata Mereka.
                    </h2>

                    <p className="text-xl mb-8 text-grayweb text-center">
                        Pelanggan kami telah meningkatkan penjualan{" "}
                        <span className="font-bold">
                            hingga delapan kali lipat
                        </span>{" "}
                        setelah membuat laman penjualan mereka, apakah Anda
                        ingin mendapatkan hasil yang sama?
                    </p>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">
                                <img
                                    className="object-fit rounded-full"
                                    alt="Gambar Testimoni"
                                    width="50"
                                    height="50"
                                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3V5fHx8fHx8MTY3NTYxNjYyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                                />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        PRIAMALAS
                                    </h3>
                                    <h4 className="text-md">Joga Computer</h4>
                                </div>
                            </div>

                            <p>
                                Kalau kamu serius berbisnis online dan pemasaran
                                digital termasuk e-commerce, buatlah segera
                                disini. Kalo minta rekomendasiku, VArtz ini
                                adalah webmaster yang jago banget buat bikin
                                website. Dari desain, konten sampai teknikal.
                            </p>
                        </div>

                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">
                                <img
                                    className="object-fit rounded-full"
                                    alt="Gambar Testimoni"
                                    width="50"
                                    height="50"
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTY3NTYxNDcyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                                />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Sanusi Sulvavian
                                    </h3>
                                    <h4 className="text-md">Techopreneur</h4>
                                </div>
                            </div>

                            <p>
                                Jasa pembuatan website membuat website bisnis
                                kami secara tepat waktu dan efisien, dan mereka
                                selalu bersedia membantu memperbarui situs web
                                kami bila diperlukan. Mereka sangat responsif
                                dan hebat untuk diajak bekerja sama! Sangat
                                merekomendasikan kepada siapa saja yang
                                membutuhkan situs web baru yang cantik.
                            </p>
                        </div>
                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">
                                <img
                                    className="object-fit rounded-full"
                                    alt="Gambar Testimoni"
                                    width="50"
                                    height="50"
                                    src="https://images.unsplash.com/photo-1437623889155-075d40e2e59f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTY3NTYxNTU1NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                                />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Janni Chandra
                                    </h3>
                                    <h4 className="text-md">
                                        Mie Bandung Singosaren
                                    </h4>
                                </div>
                            </div>

                            <p>
                                Jasa pembuatan website terbaik. Bikin website
                                mudah. Saya sebenarnya nggak punya jualan
                                online, saya jualan mie ayam di sekitar
                                Singosaren dan Surakarta. Setelah membuat situs,
                                sudah pasti restoran saya jadi lebih kredible.
                                Berasa kaya restoran bintang 5 padahal mah beda
                                jauh. Mana murah banget lagi buatnya disini{" "}
                                <span className="text-xs">#RECOMMENDED</span>
                            </p>
                        </div>
                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">
                                <img
                                    className="object-fit rounded-full"
                                    alt="Gambar Testimoni"
                                    width="50"
                                    height="50"
                                    src="https://images.unsplash.com/photo-1536500152107-01ab1422f932?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0fHx8fHx8MTY3NTYxODA0Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                                />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Evangeline Divia K.
                                    </h3>
                                    <h4 className="text-md">
                                        Sukulen & Tanaman Hias
                                    </h4>
                                </div>
                            </div>

                            <p>
                                Dari dulu hobi bisa bikin dan tanem tanaman
                                hias. Ndak ada yang tau tentang hobi saya ini.
                                Suatu saat terinspirasi dari YouTuber, bikin
                                blogging tentang Tanaman hias dan Sukulen. Eh
                                malah jadi bisnis yang bisa dimonetisasi. Ketika
                                saya upgrade website saya di sini, semakin
                                ciamik dan aesthethic sesuai dengan kemauan
                                saya. Ini memang jasa pembuatan website bagus.
                            </p>
                        </div>
                    </div>
                    <span className="block text-center text-slate-800">
                        Kami tidak mengatakan kami yang terbaik,
                        <Link
                            href="/work"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            mereka yang mengatakan{" "}
                            <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={8}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={9}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="md:hidden max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={10}
                    speed={2}
                    className="bg-mediumSpringGreen"
                />

                <ParallaxLayer
                    offset={10}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                        color: "white",
                        height: "auto",
                    }}
                    className="max-w-3xl mx-auto px-8"
                    id="feature"
                >
                    <h2
                        className="pt-4 text-3xl text-center lg:text-4xl font-bold mt-8"
                        onClick={() => ParallaxRef.current?.scrollTo(0)}
                    >
                        Go Online dan Lebarkan Sayap Bisnis Anda.
                    </h2>

                    <p className="text-xl mb-8 text-center">
                        Dengan situs buatan kami, peningkatan bisnis Anda akan
                        lebih mudah dan hasilnya akan lebih maksimal. Kami
                        percaya pada komunikasi yang baik dan transparan untuk
                        proses pengembangan.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <BiDevices /> Mobile Freindly
                            </h3>
                            <p>
                                Website Anda dapat diakses optimal dalam
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
                                sesuai dengan brand dan karateristik Anda.
                                Dengan desain yang modern juga.{" "}
                                <span className="font-bold">100% Original</span>
                                .
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <FaRegWindowRestore /> Sesuai Kebutuhan Anda
                            </h3>
                            <p>
                                Kami dapat membangun Website sesuai kebutuhan
                                Anda. Cukup konsultasi dan Website kamu jadi.
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
                    <span className="block text-center text-slate-800">
                        Garansi uang kembali
                        <Link
                            href="/terms-condition#faq"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            jika hasil tidak sesuai kemauan{" "}
                            <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={11}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={12}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-16">
                        <div className="">
                            <Image
                                src="/img/online.webp"
                                width={640}
                                height={900}
                                alt="Onlinekan bisnis Anda dengan mudah"
                                className="object-fit rounded-md"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-grayweb">
                                Siap buat{" "}
                                <span className="text-turquoise">
                                    Website Bisnis dan Landing Page
                                </span>{" "}
                                yang Sesuai dengan Kebutuhan UMKM Anda.
                            </h2>
                            <p className="text-grayweb text-xl mb-16">
                                Kami adalah jasa web profesional yang
                                menyediakan layanan pembuatan website dan
                                landing page untuk membantu UMKM meningkatkan
                                bisnis online mereka. Kami menawarkan solusi
                                yang tepat untuk membuat website bisnis yang
                                menarik dan efektif, serta landing page yang
                                menghasilkan konversi tinggi.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="">
                                    <div className="bg-grayweb text-center mb-2 text-snow px-1 py-1 rounded-xl">
                                        Terjangkau & Fleksible
                                    </div>
                                    <h3 className="text-lg text-semibold mb-4">
                                        Dapatkan situs berkulitas dengan mudah
                                    </h3>
                                    <p>
                                        Tidak hanya itu, kami juga menawarkan
                                        harga yang terjangkau dan fleksibel agar
                                        sesuai dengan budget UMKM. Mendapatkan
                                        kualitas yang baik dan{" "}
                                        <Link
                                            href="/pricing"
                                            className="underline"
                                        >
                                            layanan yang memuaskan
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div className="">
                                    <div className="bg-grayweb text-center mb-2 text-snow px-1 py-1 rounded-xl">
                                        Ahli & Terampil
                                    </div>
                                    <h3 className="text-lg text-semibold mb-4">
                                        Tim ahli yang terampil dan berdedikasi
                                    </h3>
                                    <p>
                                        Dengan pengalaman bertahun-tahun dalam
                                        industri ini, kami telah membantu banyak
                                        klien dalam berbagai industri mencapai
                                        tujuan mereka. Jangan ragu{" "}
                                        <a
                                            id="konversi_konsultasi_web"
                                            className="underline"
                                            href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                                        >
                                            menghubungi kami
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={13}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={14}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8"
                    id="cara-order"
                >
                    <h2 className="text-3xl text-center text-grayweb lg:text-4xl font-bold mt-12">
                        Buat Website{" "}
                        <span className="underline">
                            Gak Perlu Ribet & Lama
                        </span>
                        .
                    </h2>
                    <p className="text-grayweb text-xl text-center mb-8 max-w-prose">
                        Gak perlu pusing mikirin gimana buat bikinnya, Anda
                        hanya perlu ikut intsruksi saja. Sisanya waktu anda
                        fokus kepada bisnis Anda.
                    </p>
                    <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 lg:overflow-hidden">
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    1
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] dark:bg-gray-700"></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 dark:text-white">
                                    Melakukan Pemesanan
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Lima Belas Menit
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Pastinya Anda selalu bisa{" "}
                                    <a
                                        id="konversi_konsultasi_web"
                                        href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%buatkan%20saya%20website?"
                                        className="underline"
                                    >
                                        {" "}
                                        Konsultasi dengan kami{" "}
                                    </a>
                                    {"  "}
                                    untuk mendapatkan hasil dan solusi terbaik
                                    yang Anda inginkan. Jangan lepaskan
                                    kesempatan ini!{"  "}
                                    <span className="font-semibold">
                                        Lakukan pemesanan di platform whatsapp,
                                        pembayaran secara tunai atau down
                                        payment (DP) minimal 50% dengan{" "}
                                        <Link
                                            href="/terms-condition#faq"
                                            className="underline"
                                        >
                                            metode pembayaran
                                        </Link>
                                        . Lalu mengisi data untuk keperluan web.
                                    </span>
                                    <Link
                                        href="/terms-condition"
                                        className="underline"
                                    >
                                        S&K Berlaku.
                                    </Link>
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    2
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] dark:bg-gray-700"></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 dark:text-white">
                                    Pengecekan Berkala
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Kapan Saja
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Setelah melakukan pembayaran dan menentukan
                                    apa yang akan dibuat. Anda dapat melakukan
                                    pengecekan website Anda secara berkala.
                                    Nantinya, web akan dihosting sementara. Anda
                                    akan selalu bisa datang/visit ke website
                                    selama masa pengembangan. Memperbaiki apa
                                    yang perlu diperbaiki.{"  "}
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    3
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] dark:bg-gray-700"></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 dark:text-white">
                                    Penyelesaian & Publikasi
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Sepuluh Menit
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Lalu setelah progress development selesai,
                                    Anda dapat melakukan evaluasi dan revisi
                                    untuk memperbaiki. Akhirnya website
                                    dipublikasikan ke internet sesuai dengan
                                    domain yang Anda inginkan serta siap untuk
                                    mengembangkan bisnis Anda.{"  "}
                                </p>
                            </div>
                        </li>
                    </ol>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={15}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4em",
                        color: "white",
                    }}
                    className="md:hidden max-w-6xl mx-auto px-8"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={16}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "4em"
                    }}
                    className="max-w-4xl mx-auto text-grayweb"
                >
                <h2
                    id="faq"
                    className="text-3xl md:text-4xl w-full font-bold mt-24"
                >
                    FAQs
                </h2>
                <div className="p-4">
                    <div className="accordion">
                        <Accordion
                            title="Apa itu VArtz jasa pembuatan web? 👋"
                            content="merupakan personil jasa yang menyediakan
                                berbagai macam layanan IT mulai dari Pembuatan
                                Website seperti toko online, company profile,
                                portofiolio, personal dan lainnya, Pengembangan
                                Aplikasi lengkap disertai pemeliharaan atau
                                maintenance berkala."
                        />
                        <Accordion
                            title="Jasa pembuatan termasuk pembuatan apa saja?"
                            content="
                                Secara umum layanan berlangganan sudah termasuk
                                biaya HAKI (Hak Kekayaan Intelektual), desain, copy advices, developemnt (pembuatan), nama domain, hosting/server,
                                optimasi mobile, optimasi SEO (agar website Anda
                                masuk ke mesin pencarian), pengoperasian dan
                                pemeliharaan."
                        />
                        <Accordion
                            title="Data apa saja yang perlu saya sediakan? 🤟"
                            content="Hal pertama dan utama adalah konten situs web. Ini semua teks, paragraf, gambar, halaman, dan daftar semua fungsi yang Anda perlukan (formulir kontak, feed Instagram).

Selanjutnya, saya memerlukan aset merek apa pun seperti logo, kode warna, dan font. Tidak apa-apa jika Anda tidak memilikinya karena beberapa organisasi nirlaba yang memulai belum memilikinya. Dalam hal ini, tunjukkan beberapa warna yang Anda suka dan kami dapat membuat merek/rasa untuk situs tersebut."
                        />
                        <Accordion
                            title="Apakah ada garansi?"
                            content="Kami tumbuh ketika usaha Anda sukses. Garansi
                                sudah kami sertakan dalam setiap paket pembuatan
                                web agar sesuai dengan kemauan Anda. dan kami siap membantu untuk melakukan
                                perbaikan gratis ketika terjadi website “error”."
                        />
                        <Accordion
                            title="Metode pembayaran apa sajakah yang tersedia?"
                            content="Transfer Rekening BCA atau Gopay. Nomor akan dikirim setelah melakukan pemesanan."
                        />
                        <Accordion
                            title="Melayani ekstensi kebutuhan situs?"
                            content="Ya, Kami menerima berbagai macam ekstensi tambahan situs untuk Anda. Misalnya, mendaftarkan situs ke google search console, memambahkan opengraph meta untuk socmed/wa, dll. *beberapa ekstensi dikenai biaya tambahan."
                        />
                        <Accordion
                            title="Bagaimana saya dapat mengembangkan bisnis
                                    saya?"
                            content="Kami tumbuh bersama usaha Anda. Anda dapat
                                membaca blog milik kami yang selalu update dan
                                relevan dengan perkembagan zaman. Tentu anda
                                akan mendapatkan ilmu yang banyak dari sana dan
                                selamat membaca! (Jika anda menggunakan jasa
                                VArtz, secara otomatis anda akan terdaftar di
                                blog 😀)"
                        />
                        <Accordion
                            title="Bisakah saya melakukan slicing desain?"
                            content="Tentu Boleh. Jika anda memiliki desain dalam bentuk PDF atau figma files, dengan senang hati kami akan melakukan slicing desain ke HTML CSS untuk kamu. Biaya dapat dikurangi dengan 50ribu!"
                        />
                        <Accordion
                            title="Bisakah saya menggunakan template sendiri?"
                            content="Jika Anda sudah mempunyai template sendiri,
                                silakan kirimkan kepada kami. Dengan senang hati
                                kami akan mengeditkan dan menguploadnya untuk
                                Anda. Biaya dikurangi 50ribu!"
                        />
                        <Accordion
                            title="Maintenance apa saja yang termasuk dalam
                                    paket di atas? 🤖"
                            content="Maintenance yang kami lakukan yaitu memastikan
                                website tidak down dan tidak kena hack."
                        />
                        <Accordion
                            title="Ada pertanyaan lain?"
                            content="Jangan sungkan untuk tanya kepada kami! silahkan lakukan konsultasi dibawah ini. 100% GRATIS. Kami akan selalu mencari SOLUSI untuk bisnis anda!"
                        />
                    </div>
                </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={17}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                    }}
                    className="bg-springGreen justify-center py-8"
                >
                <div className="grid md:grid-cols-2 place-items-center">
                    <div className="max-w-4xl mx-auto px-8 flex flex-col gap-8 md:gap-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Suka dengan {" "}
                            <span className="underline">karya kami?</span>.
                        </h2>
                        <p className="text-xl font-semibold md:text-4xl">
                        Ide-ide Anda sangat berarti bagi kami. Ceritakan kebutuhan Anda, diskusikan (gratis), dan lihat bagaimana kami bisa mewujudkannya!
                        </p>
                        <a
                            id="konversi_konsultasi_web"
                            href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                            className="inline-block text-xl text-center  rounded-lg bg-snow text-springGreen px-8 py-4"
                        >
                            Saya Mau{" "}
                        </a>
                    </div>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 540 540" width="540" height="540" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_263"><rect width="540" height="540" x="0" y="0"></rect></clipPath><image xlink:href="data:image/png;base64,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"></image><image xlink:href="data:image/png;base64,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"></image><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAgAElEQVR4nO3db2zU153v8Q8LtZ3EjofYK2xvED+SynaigKfCV0s3KzHkwZWp1vFEvYnIFolBWa3IfbKTB1dNH9Cadldq6ZV2iHRVIi1ifFVS0k1UHFa7QFUx1t7w58ZWx4Xd2O6a/iyCsXPxMs6YxJ7E5D74MZPhN7+xx/b8n/dLQqAz45mTYOyPz/me75EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQGdYVegIlxiXpdUkHJX0u6X1JYUmh+4+b938BAIAkBI6V+QdJr2T43GFJkft/Dt3/3dRXgSSc9DgAAGVtQ6EnUGJGVvDcjqQ/71rmuQP3fzeVGkgi9/8MAEDJYoVjZdySflvA95/Q0oHEFFs6AIAiROBYOZ+kE4WeRAbiWzrpAglbOgCAvCFwrE6vpB+s5AM2NTyklj9+RA/XrNfcp19oeGwmNzNbuVk5B5LQ/d/Z0gEArBmBY/WCkvav9IPqa6vk62mV/zvbZLTUyZyMypyMSpLCozOKRGOKRBcUHrECiTkZ1cStuWzOey2St3RC939nSwcAsCwCx9oEtYrQEbdrR7P8+7bJu9vI6PmhwUlJUiQaU3j0fiC5+VVgGRi6tdqp5EK8EDY5kCRv44TyPSEAQOEQONYuqDWEDkna0lwrX0+bfM+3ymipW/OErEByW5JkTs4lAknog68CS5Fu6TgFErZ0AKAMEDiyIyhb6KipWq/52OKKX2h/d6t8Pa3ydLZkaWpLs7ZxFiRJoUFrhSR5Syc8OqPZuVhe5pIBp94m6VZQAABFhMCRPUHZQofRUqfFe1/qxtTKazC2NNeq99VOeXcbctVVZWeGa+S0pRMe+SqwFOmWjinnkzmh/E4HACobgSN7XLK+iSU3/FJHa4O6nt2sY//476taKaivrZJ3t6HeV3dkZbslH5K3dOKFsNJXWzpFXAjrFEhMUQgLAGtG4MiutKHjf//dbn3/fw2qP2Su+sV37WhO1HqUC6ctneRC2BLY0jFFbxMAWBaBI/vSho7Q8W6FR2/Lf+TSmoo2s11kWiriWzrJhbDxLZ0iLoQ1Rbt6ACBw5Ihj6Ni1o1mh492SpMDJq+r92dCaf3rv8Rjy73smb0WmpaCEe5vQrh5A2SJw5I5j6Njf3argjzySrFoH/5GL6jszlvZFOjZtVGQ+ponZu0u+2ZbmWvn3bZPv+baiKTItBfEtnXS9TYpsS8ept4mp1GZsAFB0CBy5Zcj6xlCfPJgcOiRrq6D3Z0NpT3l0bNoob/tmmZE59Q1fX/IN40Wm/n3b5G5rWNvskVDCvU1M0a4eQBEgcOSeW9YX+iVDhyQF3xuT/8jFtD9R7+94Qj73kwqZ0wqGx5dd9SjHItNSkLyl49TbpIi3dEL3f6e3CYCsI3DkR8ahIxKNqffYoI6evOb4QvXVX5N/51Pq9WzX6ZEbClwe0cDE9JJvXl9bdX+7pbKKTEsB7eoBVAoCR/5kHDok66dg36FQ2m84W+ofUdD7Z/IYm2RG5hS4PKJgeFyzC58vOQmKTEvTcr1NinhLh94mACQROPLNMXSc+KEn7bbH6Qum/Ecupl2C37Vlk4Leb8pw1SoyH0usegxP31lyIhSZlq8yaFdvit4mQNkhcOSfW9Jv7YNLhY5INKbAyas6fGwo7Yv+YNd2+Xe2y1VjhYd4ncdyRaaStcpCkWllWqq3iVS0WzqmaFcPlBwCR2H4JJ2wDy4VOiRrm8V/5FLabqVb6h9Rr2e7fO4nE2OR+Vhiu2W5ItOO1oZErQeQzKm3iVRS7erpbQIUGIGjcHxaReiQrJ9KfYdCS26zBLo65W7a+MD4SopMfT2t8n9nG0WmWLESbVefLpCwpQNkCYGjsHxaZeiQpN5jQwr8/GraL95/86ft6vVsT2yzxK20yNTX0yrvbmPZ+QArka63Ce3qgfJE4Cg8nxxCx2/f/nZGNRXLdSutr/6aej0d8u9sd3w8GB6nyBRFr4Tb1Yfu/86WDioegaM4+GQLHfW1VQod7864kDM0OLnkpXAdmzYq0NUpj7HJ8fHw1B0FLn9IkSlKXhn0NjFFu3qUIQJH8QhK2p88sNLQIWXWrbTXs12Gq9bx8ch8TMHwdQUuf5hxkal3t8GqB0pOibSrn5Xkl/X1AShpBI7iElQWQsdKupUu5fTIDQXD19U/emPJ51FkinK3XLv6PBTC8rUaJY9P4uITVBZCh2R9EfQfuZhRt9KlrKTIdNeO5sSqB1CJnLZ0stDbhK/VKHl8EhenoBxCR/iX317VCsJKupUuO7EVFJn6etrk/842tlsAB07t6sMjM059do7K2lYBShqBo3gFZQsdHa0NCh3vXtU38NV0K11KvMj09MiNZVc99ne3ytfTyv0twDLcL71rrxuZlWSIXiAoAwSO4haStCt5YC2hQ1pdt9KlUGQKZEfg5FW99tNL9uEDomAUZYLAUdxcskJHR/LgWkOHtPpupUu+pjmtwOWRjIpMvbsN9b66gyJTQNYKpLHnLXvh6YAkT2FmBGTf+kJPAEual3RK0h5JTfHB6ZnPdPb9G9rb9XXVVK/ur9BoqZN/3zZJVkHbQmzxgccnZu/qzaHfKzIf087HG1WzYfn3MVy12vuMIZ/7CblqqhSe+k8tLN5Led5CbFHDYzM6evKadQRx3Tp6eqCi7f3ub5yO4O4WWykoI6xwlIacrXRIa+9WupRgeFzB8PVl72+JF5n6nm9l1QMVJTQ4qd1/9U/24cOSevM/GyB3WOEoDWlXOqZufyrvc8aaXrymer28zxnydDYrPDKj6ZnPHnh8YfGezo1P6vTIDbU31md0miXO3fSYfO4n5W3frPkvFmVG5hxXPWbnYhoYvKWjJ6/JvBmV69EqggcqgueVM/atlAlZ3YfnCzIhIEcIHKUjHjpelrXiIUkaHpuReTO65tAhWdssB198WkZLnUIfTKZss0zfnVff8HWZkTm5mzZmdJolrqn2IXnbN+tgZ6vaGx9VeOpO2tMtw2Mz6ntvTMH+UbkerZbRUrfqrSOgmPUeG1J/aMI+fEBcBIcyxFfx0jIva2vlZUk18cFshg5Jcrc16OCLT2s+9oWuXP045fHh6TsKhsc1/8W9ZZuG2dVsWC9302Py73wq8bHpenrMzsXUf8HUsX/8d438ISJ3e4NcddUr/w8CipA5GZXvUMge7AckvV6gKQE5ReAoPVOSzirHoaOmer26nt0s725DI3+IpJxmWVi8p4GJaQXD4zJctWpvrF/xexiuWnnbNyeKTM3InOOqB0WmKEe+QwNOPTe6RKEoyhRFo6XLLWu144Hv9Pu7WxX8kSfrb5bNbqVLybTItL62Sv592ygyRUk6fcHUC6+dtw9TKIqyxgpH6Uq70iEp610927e65OtpU031+rTHaI9eGZEkuZs2ZnSM1km8yNTnfkKR+VjaItOF2GKiyDQ8MqOmxocIHigJkWhMXv85p0JRb4GmBOQFgaO0OYaOgcFbMlrqsr7tUFO9Xp7OFu3telLmzTmNmqkrvwMT0zo2OKam2ofkbnps1e/lqqnKuMh01Iwkiky1TmrfupEiUxStH58IOxWKviDJzP9sgPxhS6U8eCX9yj544oce+Z5vzdmb5qJb6ZLvZ1o1I33D15d8XryTqX/fNmo9UFTMyai2fusX9uF+sbqBCsCPgeVhRA5Lsv0XzJysdMTFu5W66qp0+Xcfp+1Wakbm5DE2rXqbJfF+94tM/TvbVbNh/bJFpm++8yFFpigqXv95e0CfldW+nJ4bKHsEjvIRVgFChyTt3L5JB198WlO3P3Vqz6zh6Ts6Njimmg0btPPxxjW/X82G9fIYm+Tf+ZTcTRs1NTef9uK4iVtz6r9gKvDzq5qPLcpoqeNoLQoi+N6Yjr51zT78PVnF30DZY0ul/PgknbAP/urv/6u8u42cv3locFK9PxvSwNAtx8e31D+ioPfPVty/YzlmZE6ByyMKhsfT1nrE9XgM+Xpa8/L/A5DSXs42LOu0GVARWOEoP44rHWffv6GuZzerqfHhnL650VInX09b2m6lswufq2/4usJTd7Tz8cYVdStdiqumSl1fb0kUmZqRu5q+67xKPWpG9Pa5cYpMkTevv3HFKYS/LApFUUH4KluewrJWrzzxgYXYok6dHc9L6JC+6lZaU71eA4Opqx2jM58kupWu5RitXbyT6cHO1ow6mZ67+JF+ciIs82ZUxp/U5eX/DSpLeHRGB74/YB/ukxQowHSAgmFLpbwFJe1PHqivrVLoeHdeiyjjLZyX2mYJdHXK2745J+8fmY8ltlvS1XrEdbQ2JBqKAdngeeWM/XN/VpIhOoqiwhA4yl9QRRA6pMy6lWbzGK3jHEZuKBi+rv7RG0s+r762Sr6eVvm/s42GYli1wMmreu2nl+zDB2T9uwQqClsq5e+0pK1KKk7L9/ZKXPtWl/z7tklS2m6lbw79XpH5mHY+3pi1bZYH5tBYr73PGPK5n5AkjdyeTdvJ9MrVjxOdTGuq16t9qyvleUA6VkfR806Xs/kLNCWgoAgclcExdJx9/0aiXXk+xbuVRj6JOR6jvXLzdlaP0TqJF5m+/ufPyHA9knGRaWQuJndbI0WmWNbBv/1XXbmWctvyC7I6BAMVhy2VyhKUbXulo7VBoePdctVl57TISoUGJ+U/cskxeEhSx6aNCnR1Zv0YrZPw1B0FLn+4bCdTybokz9fTmvU7a1AeQoOT2v1X/2QfPipWN1DBCByVxSWryVBH8mChQ4dk7XX3/mzI3qcgYX/HE+r1bF/zbbSZiMzHFAxfV+DyhxkXmXp3GwX9/4fi4n7pXXuInpC1wkihKCoW68KVZV7SKUl7JDXFB6dnPtPZ929ob9fXC7ZVEO9WOh/7QleupixDa3j6TuIYba5XO2o2rNfOxxsTnUznv7in0ZlPHJ87PfOZ+i+YOvaP/66pmU/VvtVFJ9MK13tsSG+fG7cPH5B1XB2oWKxwVKaiXemQrL4F/iMXC3aM1okZmUuseizXyXTXjubEqgcqizkZlfuld+0rdQNK6okDVCoCR+VyDB27djQrdLy7IBOyy+QYbdD7zbxssyQLhscVDF/XwMT0ks/b0lwrX0+b/N/ZVvAQh/zw+s+rP2Tah7eKjqIAWyoVzHF7ZeLWnMybUXmfMwo1r4T2ra7EKZp0x2iPXhnJ6TFaJ+6mx+RzPylv+2bNf7EoMzLneLR2di6mgcFbiU6mrker6OlRxkKDk/reG//XPnxY1ikxoOKxwgFD1t5yffLg/u5WBX/kKcR8HJmTUfmPXHL66VGSVF/9NQW6OuVzP5nfiWllRaZbmmvV+2onRaZlyNjzln01jkJRIAkrHIhIOivrIqma+ODw2EzRrHRIkquuWnu7npSns1nhkRlNz3z2wOMLi/fUP/qRTo/cUHtjfV63WZKLTD3GJkXmP09bZDo7F0sUmY78ISJ3ewNFpmWg99iQ+kMT9uEXJI0UYDpAUSJwQLIaERV96JCs22gPvvi0XHVVuvy7j1O2Wabvzqtv+LrMyJzcTRuzdhttxvNz1SY6mbpqqhSe+s+0nUyHx2Z09OQ1hT6YlNaty3ureWSHORnVC6+dtw/3S/pxAaYDFC0CB+JKJnRIXx2jnbr9qWPTsHweo3XiqqmSx9iU6GQamf887XbLxK059V8wE51MjZY6Vj1KiNd/3r6VMivJK7ZSgAcQOJAsbegwWuqK7ifwmur18j5nyLvb0MgfIimnWRYW72lgYlrB8LgMV63aG+udXyjH4kWmPvcTiszHli0yPXryGkWmJeL0BVM/OTFsH/6JKBQFUlA0CiceSRfsgyd+6Cnqa9uD742p92eDRXeM1i4yH9PpkRvqDf2OItMSFonG5H7pHfvn27CS7iwC8BVWOODElFVh700e7L9gFuVKR5y7rSFxjHZgMLVpWKGO0drVbFgvd9NjiSJTydoCcmIvMjX+pC6vN/wivdffuKJzFz+yD78sem4AjggcSCesEgwdNdXr5elske/5Vpk35zRqpm6jx2+jbap9SO6mxwowy68Yrlp52zcnikzNyJxjJ9N4kemb73xIkWkRCI/O6MD3B+zDfZICBZgOUBIIHFhKSYYO6cFjtKEPJlMuhSvkMVon8SJT/86nMi4yDfz8quZjixSZFsDe7/7GqVC0S1ZDPQAOCBxYTtrQ4d1tFP3yvtFSJ/++bUV7jNZJpkWmC7HFRJFpeGRGTY0PUWSaB8H3xnT0rWv24e/JuioAQBoUjSJTPkknkgfqa6sUOt5d1CsdySLRmPxHLqrvzJjj4/XVX5N/51Pq9WzP88yWFi8yDVweSVvrEbeluVb+fdvke76NItMciERjMva8ZV8xo1AUyAArHMhUWNYlVIkvrAuxRZ06O66uZzcX/UqHVDrHaO3iRaYHO1szKjI9d/Ejikxz5PU3rjjdYrxH1pFyAEtghQMrFZS0P3mg1FY64krlGK2TyHxMgcsjCobHlz1au2tHs3w9bUV9pLkUhAYntfuv/sk+fFSSvwDTAUoOgQOrEVSZhI5INKbAyas6fGwo7XP+5k/b1evZXhT1HU7i2y0DE9NLPq++tkq+nlb5v7ONWo9VcL/0rr2r7aysyw/pKApkgMCB1QrKIXSEf/ntkvxmVsy30WbKjMwlVj2cjtYm6/EY8vW0yrvbyMvcSl3g5FW99tNL9uEDsv4dAMgAgQNrEZQtdHS0Nih0vLtkCxZDg5PyHQql3Wbp2LRRga7OgtzPkimKTLMrTaHogKyOvAAyRODAWoUldSQPlHrokKyfaHt/NpTSvyNuf8cT6vVsL8r6jmThqTsKXP5QfcPXl33u/u5W+fdtK7ltsVzz+s87rXx9Q9bnPoAMETiwVi5Z/QfKLnREojH1HhvU0ZMpPRckfXWM1r+zvWjrO+Ii8zEFw9cVuPzhskWmHa0N91c9KDJNUyh6WFJv/mcDlDYCB7KhbEOHZLWx9h+56HQcUpK0pf4RBbo65W3fnOeZrc7pkRsKhq+rf/TGks+jyFQy9rxl316bkHU0nEJRYIUIHMiWsg4dknUVuf/IxSWP0Qa6OuVu2pjnma3OSopMd+1oln/ftooqMu09NuR0eukFcfU8sCo0/kK2zEs6JasJUlN8cHrmM03d/lTe54xCzStr2re6ErfRhkdmUtqkT8ze1ZtDvy/4bbSZctVUqevrLXr9z5+R4XpEZuSupu86XwUycWtOb58bV7B/VJG5mNxtjaqpLu7/vrUwJ6PyHQrZ/44HJL1eoCkBJa98v2KgEOKh42VZKx6SpOGxGZk3o2UROuK30e7tenLZ22hrNmzQzscbCzDLlYt3MvW2b9b8F4tLdjIdGLyln5wIy7wZlevRqrLcbvEdGnDqudEltlKAVWNLBbnglrW98kBv8P3drQr+yFOI+eRMaHBS/iOX7N+cErbUP6Kg98+K+hitk9UUmXp3G2WzdfbCa+ftwxSKAmtE4ECuVEzokKw26f4jF9Meo+1p26xA146iP0brJGROK3B5pCKKTCPRmNwvveNUKGoUZkZA+WBLBbkyJemsrO2VmvhgOW2vJHO3Nejgi09rPvaFrlz9OOXx0ZlPdPTKiPXcpo1FX9+RzHDVau8zhnzuJ+SqqVJ46j+1sHgv5XkLsUVdufqxjp68ptAHk3I9Wq32rS6HVyxePz4RVn9owj78giQz/7MBygsrHMg1x5WOHxzcod6DOwoyoVyLFxymO0ZbCm3SlxMMjysYvr7s/S1bmmsTF8cV+6qHORnV1m/9wj7cL8lbgOkAZad0fsxCqXJc6RgYvCWjpa4su1q66qrl62mTp7NZoQ8mU7ZZFhbvqX/0I4XMaRmu2pLcZnE3PSaf+8lEkakZmXNc9YgXmR49ea3oi0y9/vP2rZRZWe3LnY/uAFgRAgfyYer+rwd+Uuy/YJZt6JAko6VO/n3bJCntMdq+4esyI3NyN20s+m6lTppqH5K3fbMOdraqqfYhjdyeTdvTY3hsRn3vjSnYPyrXo9UyWuqK5mht8L0xHX0rpaPs92StzgHIArZUkE8+SSfsgyd+6Cn7NtqRaEz+IxfVd2bM8fF4m/Rez/Y8zyz7VlJk6t1tqPfVHQVd9UhzOduwrO1AAFlSHD9eoFKEZVX8V9RKh2T17/A+Z8jT2SzzZjSlW+nC4j0NTEwrGB6X4apVe2N9mlcqfvYiUzMy57jqsRBb1PDYTKLIVOvWFeRz4PU3rjjV27wsCkWBrCJwIN/Shg53W0PJnWpYKaOlTr6eNhktdQqP3E6p75hd+Fxv/9uEQua03E2Pqan2oQLNdO1cNVXyGJvk3/mUDNcjisx/nranx8StOfVfMBOdTI2WOrnqqnM+x/DojA58f8A+3CcpkPM3ByoMgQOF4Bg6zr5/Q13PblZT48OFmVUeudsayqpN+nLiRaY+9xOKzMeKpsh073d/41Qo2iUKRYGsK+2vYihlYVk1RJ74wEJsUafOjldM6CjXNulLcdVUJYpM2xsfVXjqTkZFplontW/dmNUi08DJq3rznQ/tw69Kupy1NwGQQNEoCi0oaX/yQH1tlULHu8u6psNJubZJX07ItGpX+oavL/m8eJGpf9+2NX9upCkUHVBSAAaQXQQOFIOgCB0Jy7VJ37Vlk4Leb5Zk/46lmJE5BcPXFQyPL3t/y64dzYmGYqvhOxRyOjH0DVkrbwBygC0VFIPTkrYq6RhipW2vJFuuTfrE7F0dvTJSNvUdcaspMg38/KrmY4srKjINDU7qtf95yT58VFbwBZAjrHCgmARlW+nY0lyr8C//W1ncQroaldAmfSlmZE6ByyMKhsfT1nrE9XgM+fc9I09ny5LPc7/0rn3bakJW2OXqeSCHCBwoNqcl9SQPdLQ2KHS8u2JDh2T9VO47FErp3xHXsWmjAl2dZVffEReZj+n0yA0FLo9oePrOks/d0lwr/75t8j3flvI503tsSIePDdk/5AVZn3cAcojAgWLjktVOuiN5kNBhCZy8qt6fDaWt7+hp26xA146yq+9IlmmRqSTt725NFJmak1G5X3qXQlGgQAgcKEaEjiVEojH1HhvU0ZMpd38k/GDXdvl3tpfk/SyZiszHEtstyxWZdrQ26I/+aJ1+O3Lb/tBW0VEUyAsCB4oVoWMZ4dEZ+Y9crNj6jmTx7ZaBiemVfNhhSb25mREAOwIHiplj6Ni1o1mh490FmVAxOn3BlP/IxYqt70i2giJTCkWBPCuP83QoV/OSTknaI6kpPjhxa07mzai8zxmFmldRad/qkn/fNklybJM+fXdefcPXFZ66o52PN5b1NourpkpdX2/R63/+jAzXIzIjdzV917FL+QuSRvI8PaCiscKBUmDIasj0wBWq+7tbFfyRpxDzKVqRaEz+IxedmlpJsrZZ/DufKvv6jmTB8LgO9D/Qd+O2pD8u0HSAisUKB0pBRNJZWVeG18QHh8dmWOmwqaleL+9zhry7DY38IZKyzbKweE8DE9M6dc2Uq6ZK7qbHCjPRPIrMf24/0XJV0j8UaDpAxSJwoFRMidCRsabGh+XraZO7rUGXfzedcox2duFz9Y9+pJA5LcNVW9bHaM3IXXvgGBddRYG8I3CglKQNHZHogrqe3VywiRWr5eo7Jmatb8ZmZE7upo1luc3iqqnST97/t+QhQ9YJFQB5ROBAqXEMHVeufiyjpa4iL3vLhKezRQdffFpTtz91vI12ePqOguFxzX9xT+6mjWVzP4sk1WxYr8MDv7MPEziAPCufryqoJFOSLkvyJQ/2XzAJHUuI13d4Optl3oymre84NjimptqHyqq+g8ABFB6BA6XKlNVLwZs8SOhYntFSJ19Pm4yWOoVHbqfUdyws3lP/6Ec6PXJD7Y31ZVHfEbj8oRYW7yUP9YkeHEBeEThQysIidKyau62hYvp3nP2PW/b25/2ipTmQVwQOlDpCxxotV98xOvOJjl6xemSVan1HMHzdHjj6ROAA8qr0vnIAqdKGDu9uQ02NDxdkUqVkuf4dkkq6vuP0yEcanfkkeWhA1ucNgDwhcKBcOIaOU2fH1fXsZkJHhpbr31Gq9R0jtz+xX+w2LOueHgB58keFngCQRUFZS+UJs3MxeV45o/Bo6lYB0vPuNmT+y1/qBwd3qL42tXZjePqOdvf9Wp7gr2VGnC+NA4BkrHCg3JyWtFXWTaCSpIXYIisdq7RcfcfE7F0dvTKiyHxMOx9vLNr6jpA5bV/hmJD1uQIgT4rzqwOwNoSOLMqkvuPKzds6Njimmg0btPPxxvxPMgO29uazor05kFdsqaBc+ZRmeyUSjTl/BJbkbmtQ6Hi3LvzDX2hLc2rtxuzC53rt3KCMwK90euRGAWYIoJgROFDOfCJ0ZJ2ns4cdn8sAAA2VSURBVEXmv/yl/v5/fNOxvmNi9q5eeHtAnuCvFZ66U4AZpnLoIeJ2eh6A3FlX6AkAeRCW1JE80NFq/bTuqivdZlbFIBKNqffYoI6evJb2Ofs7nlCvZ3vBT7SsO/zzlKFCzAOoVPyDQyVwyToCSejIEXMyKv+RS+oPmY6P11d/Tf6dT8m/s71gHUsJHEBhUTSKSjAv6ZSkPZKa4oPTM5/p7Ps3tLfr66qp5p/CWrjqqrW360l5OpsVHpnR9MxnDzxeDBfDnR65oem788lDA6LbKJA31HCgUkQkeWQ1fEoYHpuhpiOLPJ0tCv/y2zrxQ0/awtID/ZdkBH6lkDmd+gI5VMp3wQDlgB/rUEnSrnRM3f5U3ueMQs2r7LjbGuTraVNN9XrHi+FmFz5X3/B1hcxpuZseU1PtQzmfk0N782FJl3P+xgAkEThQeeKh42VZtR2SrJUO82aU0JFFNdXr5els0d6uJxX5JJa2cdibQ7+XGZmTu2ljTlchHNqbXxHtzYG8IXCgEs3L+kbzsqSa+CChIzdcddXLNg4bnr6jYHhc81/cy9mNtHQbBQqLwIFKNSXprAgdeRO/GM7T2azQB5OOF8PlurCUbqNA4RA4UMkIHQVgtNTJv2+bjJY6hT6YTKnviN9IGwyPy3DVqr2xPivva0bu2gPHOkmBrLw4gGUROFDp0oYOV12Vdm7fVLCJlTt3W4MOvvj0koWlb//bhELmtAxX7ZobhxmuWh0e+F3ykEvS4TW9KICMETiANKHj3MWPZLTUyd3WULCJlbtMC0v7hq8rPHVHOx9vXFNhqS1wSFbr+8iqXxBAxggcgGXq/i9v8mD/BZPQkQfxwlLf860Kj8w4FpaOznyio1dGZEbm5DE2raqwNGROa2L2bvJQv2j+BeQFgQP4SljWyQVCR4G46qoThaXX/uOObv2/T1OeMzx9R8cGx1Z1ooVeHEDhEDiABxE6ioDRUqe3/vk/HFc6pAdPtMx/cU8eI7NaG4deHKOyttMA5BiBA0iVNnS42xrUvtXl/FHImsDJq3rznQ/tw59J+lryQDx4BMPjctVULXuU1ozMqX/0owdeQhyNBfKCwAE4cwwdZ9+/oa5nN6up8eHCzKoCRKIxef3n7adWBiT9F1kB4RtKKu6VrBMt8aO0SwWPyPzn9qOxGyX9OJvzB+CMy9uA9IKyHZucnYvJ88oZhUdTT1MgO/xHLqY0BZPkl3WapFeSIet0SYqJ2btLXg7nsPVSf//1AOQYgQNYWq9s39wIHbkTGpxU35kx+/BRWStOcRFJPklbtUTw2N33a3mCv04JHh2bNtqf7l7DlAFkiC0VYHmnZX1zS3xjWogt6tTZcbZXsszrP6/pmc+Sh2ZlbWvNOzw9Iuvvpl/SU3JYqYj38AiZ03LVVKm9sV6XP7qt4ek7yU8bFZe4ATm3rtATAEpIUNL+5IH62iqFjndzeiULAiev6rWfXrIPv6DML1jzyFqR2pXuCVvqH5G76TH1j95IHh4WqxxAzhE4gJUJyhY6OlobFDreLVdd7q5WL3fmZFTul961124MyAoRK+XRMsHDwUbRcRTIKWo4gJXxyVrCTxgem5HnlTOKRFMKHZEh/5FLToWivlW+XEhW6NgtK7RkYrXvBSBDBA5g5XyyluETCB2rFxqcVH/ItA8f1tpbjoeUefDwrPG9ACyDwAGsXETWNyhCRxb4DoXsQxPK7rXxIVl/X99QmlMt4j4VIOeo4QBWzyXrm1lH8iA1HZnrPTakw8eG7MO7ldtTI4asky/xpm6mvurzASBHCBzA2jiGjl07mhU63l2QCZUKczKqrd/6hX24X7burgDKA304gLWZl3RK0h5JTfHBiVtzMm9G5X3OKNS8ip7Xf95+OVu85wYrDUAZooYDWLuIrG+Us8mDfWfGnOoTIOn0BVMDQ7fswwFRSwGULVY4gOyIyLrm/GUlXSw2PDbDSoeNdTnbOfsx2JSL8gCUF1Y4gOwJyzoNwUrHEgInr9q3UiT6YABljxUOILumlGalIxJdUNezmws2sWIQHp3Ry6//xj7cp+wegwVQhAgcQPY5ho4rVz+W0VJX0feu7P3ub5wKRbvkfDkbgDLClgqQG2E51CQc+H5IwfdSrl+vCMH3xpwKRXvFqRSgIrDCAeSOKYdiyP4LZsWtdESiMXX993/WQmwxeXhY1G4AFYPAAeRWWIQOvf7GFafVjT2ytp8AVAACB5B7FR06QoOTevXv/o99+KikYP5nA6BQaG0O5I9P0gn74G/f/nZZhw73S+9qeGwmeWhW1n0m1G4AFYSiUSB/gpIO2Ac9r5xReHQm9dllIHDyqj1sSFyUBlQkVjiA/AtK2p88UF9bpdDx7rJa6YhEYzL2vGXvKDogqzkagArDCgeQfz5Zza4SZudiZbfS4T9y0R42JGt1A0AFInAAheFTGYeO0OCk+s6k9Bs5LKuAFkAFYksFKKygHLZXzH/5S7nqqgozoyww9rxl7yg6IcktajeAisUKB1BYPqVZ6YhEU7YjSkLvsSGny9koFAUqHCscQHEIS+pIHuhobVDoeHdJrXSYk1G5X3qXQlEAKVjhAIqDR1ar74ThsZmSW+nwH7lkDxuzon05ABE4gGIRUYmHjtMXTPWHTPtwQNadMgAqHFsqQHFxSQqpxLZXItGY3C+941QoahRmRgCKDSscQHFJu9LhP3KxIBPKRODkVadCUV8BpgKgSLHCARQnl6xC0i3Jg/u7WxX8kacgE0rHnIxq67d+YR/ul+2yOgCVjdtigeI0L2tr5WVJNfHB4bEZmTej8j5nFGhaqbz+8/bVjVlZYYNjsAAS2FIBildY1vbKbPJg35kx+Q6FCjGfFKcvmBoYumUf7hWFogBs2FIBip9b1mpHffJgobdX0lzONixrvgDwALZUgOI3JemsHLZXXHVV2rl9U0Em9fobV5xWN14WqxsAHBA4gNLgGDrOXfxIRktd3q+1D4/O6MD3B+zDfbL6bgBACgIHUDqm7v964PRH/wUz76Fj73d/41Qo2iWr2BUAUhA4gNISltVQq2ChI3Dyqt5850P78KuSLuf8zQGULAIHUHoKFjoi0Zi8/vNaiC0mDw/Iug0WANIicAClKW3ocLc1qH2rKydvevBv/1VXrn1sH35B1lYPAKRFHw6gdAUlHbAP+g6FFB6dyfqbhQYn1XdmzD58VFb4AYAlscIBlLawrH46nvjAQmxRp86Oq+vZzWpqfDhrb+T1n9f0zGfJQ/GOohSKAlgWKxxA6euVdSQ1YXYuJs8rZ7K20hE4eVXDYymv5RPtywFkiE6jQPkIStqfPFBfW6XQ8e41FZKak1G5X3rX3lF0QEmrKgCwHFY4gPLhUw5WOvxHLtnDRvy9ACBjBA6gvPjkEDp8h0KKRFNCw7JCg5PqD5n24cOifTmAFWJLBShPpyX1JA90tDYodLxbrrqqjF/E2POWvaPohKzL2ajdALAirHAA5ckn6+bWhOGxGXleOZPxSkfvsSF72Ii/LmEDwIqxwgGUL5esa+07kgczWekwJ6Pa+q1f2If7ZWs0BgCZYoUDKF8RWSdJVrzS4TsUsg/NivblANaAwAGUt7Shw+s/5/gBpy+YGhi6ZR8OiEJRAGtAp1Gg/M1LOiVpj6Sm+ODErTmZN6PyPmcknmhdznbOfgw25c4WAACAdAxZKx5fJv/a39365Zfhv/7yy/Bff/mDgzu+tD8uGnwBAIAVih9pTQkdv337205hI1igeQIAgBLnGDrqa6vsYSMi66QLAADAqjiGDtsvTqUAAIA1Wyp0hAs4LwAAUGY8cg4c7gLOCQAAlCGfHgwbgYLOBgAAlC1DVtCg3wYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQFv4/4elJ2uGebuUAAAAASUVORK5CYII="></image><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAALB0lEQVR4nO3dwXEaWxYG4MNLoMmAngggA8gAJgLIQMqgFYHlDKQM4EVAezc74SpvZiW8nIULHEHPAskPIWTJguYC+r6qLqopCV1dXObXOfd2RwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACw0kg9AIA1+cOxaf5wACdK4ABSySNiEBG9iOhEROuN3/c1IpYRMXt4LEMgAQA25BFxGxFVDUcZEZ8jYhSrEAMAfEBXUU/QeGsIyev99YCXaKkAh3IbEcPXvqjb7T57bjabxc+fP/c1jp+xCiGzh8dyXy8MvEzgAA7hNraEjVarFYPBIAaDQfR6vVdfZLlcxmw2+/U4n89jPp/Hly9fdh3fl3gaQJa7viAAcFiD2GhzZFlWXV9fV/t0d3dXjcfjqiiKqtvtVlmW7dKGmcUqJI1CGwb2QoUDqNs81nagZFkWZVlGp1P/ms75fB5lWcZsNovZbLZLJeR7/FP9mD0cAMCRGMVG9WA6ne61svGnptNpdX19XfX7/V2qIMuImIQKCAAchUmsfVB3u92kYWOb+/v76ubmphoOh1Wr1XpvAJnHPy2Y5gHnFwCIjQ/m8XicOl+8arFYVOPxuLq4uKja7fYua0A+x+qiZkBYwwHUpxMRd48nWZbFcnl6mz8ed8SUZRllWb5nHcjjNtzJw3F6kwAAR6wXR95Oea/pdFoVRfGeCsgytFwAYK+uYu3Ddjgcps4JtVhvwbxxDchVijcDAM7VVax90BZFkTobHMTjItTf7IIpU70hkNJfqQcAcE7yPI/RaBSTySSWy2WMx+O4uLiIbrcbnz59+m9YSAoAezWKM13DsaM86bsCiahwAHWZr5+c4g6VmgxSDwBSsC0WqEszIhbrTywWi2g2P/wmja+NRqP+67rDkVHhAOqyjNU9SH4pyzLNSI5LW1uFj0jgAOpUrp/c3t6mGcXxuUw9ADg0LRWgToOIGK8/cX9/H3mepxnN8fjeaDTy1IOAQ1LhAOo0iY22yuWlP+4jolVVlXUcfCgCB1C3q/WTv//+W2tlZZR6AABwbuaxccXNm5ubtFfDSM8+YQDYs15sua9Iv9+v7u7uUn/wp+SaHACwZ6N44YZm7Xa7KoriI4aP23RvBxyWXSrAIV1GxPXvviDLsuj1ejEYDKLX6537jpafjUbjw18JDQDq0IstazpeOlqtVnVxcVGNx+PU1Yi6jFK8CQDwUYwiYhZvDB4RUWVZVg2Hw3MLH5Mksw8AH0weq1bLJN4RPqbTaerAsA/aKgBwYL2I+Bx/UP1otVpVURTV/f196uDwXqMUEw0ArDRj1XqZxOpmcK+Gj263W93c3FSLxSJ1iPgTZYrJBQC2G0TEbbwhfDy2XE5oq22eZkoBgJesVz5erXq02+1TuLKpm8wAwBHLY7XodB5vqHoURXGs7ZZZmukDAP5UJ97QcsmyrLq+vk4dMLbJE80bAPAOjy2X3+50abVax7at9nOqCQMAdvNY9XgxeBRFkTpoPJqnmiQAYD/y+E3wGA6Hx7K2o5NshgCAvckjoowXdrMcQejQVgGAMzKKLYtLh8Nh6sCxTDkpAMD+dWJL6DiCNR2DpLMCAOzd1tCR+AqltyknBACox7PQ0e12UwYObRUAOFOXsVHlSHyNDm0VADhTZawFjn6/nzJwTNJOBQBQl15sVDkSb5NtJp0N2KO/Ug8A4IiUEfF9/YnJJGmhQVuFsyFwADz1JGGUZZloGBEhcHBGBA6Ap8r1k/l8nmYUK/3KHWQB4CzlsbGOI7HLpLMBe9JIPQCAI1Q9Oamql77uEL42Gg03dOPkCRwAzx1T4IiI+Fej0ZinHgTswhoOgOee7FRJvHA0YnWjOThpAgfAc/PUA9gwSj0A2JXAAXD8WlVVWcfBSRM4AE7DKPUAYBcCB8BpcBEwTprAAXAaWpU7yHLCBA6A0yFwcLIEDoDTIXBwsgQOgFckvp/KukxbhVMlcAA8V66fzGazRMPYapR6APAeAgfAc/P1kyO40ui6flVVzdSDAAB2l8fGHWPv7++T3S52i1HKyYH3UOEAeG4eEV/Xn7i6ukoykBdYxwEAZ+IyNqocd3d3qSsb6/KkswMA7EUzIpaxFjja7Xa1WCxSB41Hl2mnBwDYl2dVjuFwmDpoPDqqrTMAwG7K2BI6jqTSkaecGABgf561VuKhvXIEazquUk4MALBfndgSOiKiKooiZbVjnnBOAIAavBg6sixLGTw6KScFANi/ZmxZ07F+9Pv96ubm5pDh43Oy2QAAanUZL1Q71o9ut1sVRVFNp9M6A8c81STAn2ikHgDAiWpGxFVEXLz1G9rtduR5Hp1OJzqdTjSbzV+PO/p3o9GY7PoiUCeBA2A3zVhVPEYR0drlhbrd7pPzPM8jz/Pffk9ZlvHjx4//ffv27T+xCkCuzwEAZ24QEbfxhnZLTcey9t8Q3kmFA6AenYjorR3ZgX6u/9c5Sv5hAhxG/nD0YtWG6Tw8tvf4M748vD4cHYED4DjkD8ejx1Dymln800op9zoiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJL4P+sF6ypM7GPYAAAAAElFTkSuQmCC"></image><image xlink:href="data:image/png;base64,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nIlsUEwaI8wBgG3W3sFyrqu3AQAGWi0l4wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbIf/D6fO6Kp5IYbTAAAAAElFTkSuQmCC"></image><image xlink:href="data:image/png;base64,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"></image><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAPqklEQVR4nO3d3XEqS5IA4OqJfb8yQR6MPFhMkAmsBzKB9UAeLGPBYEKPBzKB8QAPch+6CTGoK6tBHH6k74tQxL0H5enq80JGVVZmKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUdbdeAHxHRDyXUl5LKU+llE3XdR+3XREAcLci4ikiFhGxOCFmGV+t/twqAYCHNSYOu4OkYRcRL42Y54lkY29xpaUDAI8gSRx2EfGUxL0lCcfqiq8AwAx/u/UC+PWWlT//K/kMgAcj4eCeVXc4Simb5DOFowB3RsLBrW2Tz6qJQ9d121LK/0589I+u67JkBIAbcC2Wm4uIj1LK34/++F9d1y1mxC5KKfvf+5BsAABVYxFoP/683Xo9AAAAAAAAAHBlikb5tcZuposyFJv2t10NAHDXDuawZH07jn+/P+pO+tFqpw4A/FIR8X6UOLyfEXPYTv35CssGAG5pnK0ya6chSRzSTqMRsU3msDQTFgDgQUXEy9Exxy4iXhsxu8mUYbA8M66/9LsBoLU5FxZDfcT64At8M/OYYlNK+e+D//+rlPLPxm7HX8ln2TP75LNt8hkAcA9iKL48to181PzinCOOyI9GVkncc7LLsfjevwAA8EdFxGuSAFTblTcSjv7M5y0aaz2+qbKL5BgGALgTEbFKEoBVEvdyTqIyxr7G192K5QlrfgrXYQHgcUTE8huJw3oiZhczemvEZx+ORbjWCgA/X0zXcMxNHFbxOTF2LXkAACaNuw2bg2Sjd2QBAAAAcG9iuFa7Pjj+SRuUAWBaLL/YWFeyLKXs60vWXddtGzHPpZSP8rXp2D+6rltedoUAwEMba02OG4c1e3FUbtPspbEAwAOL4TruYS+O99atmEbisEjijsfaH+ov/W4AwIXF0MRr/4X+Mac2IurdRj+ypCPytuibJG6TxPVnvjoAcA1J4rBuxGU7DqskbqpfSDNxSNbZXCsAcGHx2cRrGzMmxjYSgGUSd9YRR+Rt2NeNtb5NxOxa7wgAXFAMNRQnfSEnX/4Rf+CII74ObzspcYihjfpm/DveJRsAcEUx9KioWSdxWU1Fn8Rlg99WM9a7Onj2JnRFBYD7F+ePmp86pthrDX57ia8TY6vPAgAeXGPHoXo0MsZO1VWkt00OYp9iuB67sksBAL9A1As5FzNiFzHURKxDIy0AoCa+FmQ2O3j+NmNiZScGAL5rTDx8qR6Ir11Rt/6NAIBJ4w7Fx8EOzpx26rWC2p2kAwB+uBi6h65iuCnzPOP3a4WxrXbqU/1J9vpLvhMA8IfE0ANkMac49SBmaojb8oyYvXUSlzUpi9kvCgDcxsTuwUc0jiliqKeoqQ6Oi7yd+jaJy3qN7L7x+gDAKWLYpViPX+p9zLjdkiQOaW1E5DsOH0lctsOxTeKeoj4zZt16TwDgAsZk47hjaPPLOPIdh2psI+GoHnHEdGfTuWudmuHSx4zmZgDABUReVLlK4s6dGJsdqVR3OMbYqaRjVlfUg3i9OADg2hqJw7lHHH3jmbXYag3HQexTDHUZq9DYDAAeQ+RHHNWiyvGLvzZtdjnjuav43K3YSh4A4AeLfNJsa/DbVG3E+7XWDgA8kJiuq5jdiTM+e3EowgS4I92tFwDHYmjctSylPJdStqWUVdd125st6I6Mxz3P4/9uu65b32wxAMB9i+GWylvMbKc+xkwVuK7/7EoBgIcU09d/l42YrL5FrQoA/FRjoep6rDHZjf997sTYNOmI4SZN1cVfDgC4rDFxWMVwy2XT2m04iJm6ituaGJslDtsz4yI0EAOA64oTOnhGfb7JuhGXDWLrk7izdipiuH1TY/AbAFxLDFdqD9uNb1uJRyNxWCVx5yYOWTv1NHFIYqvrBAAuKOo7AN+ZGJt1N80SlbSmIurt1Fcz3nNxsOaPiHhrxQAAFxL5jsO5c1iynYqnqE+M3c5c72G8myYAcO8aCUeWOGS3Rs6ZGDu7KyrAb/Jft14AXMhZhZNd1/UR8T+llP+b+Dg9rui67iOGpl3LUsr+ZspaV1QA+KGiftskYkY3zvisjdhfjV38+VUDAA8npifG9mGQGwBwaWNtxexeHL9BfHZFPUzE/PsAAF/Ff3ZF7WOYy9LcwakcN+0i4vUa6wYAbmRMHhbjz6xjn0risC9ercVkN3F0KQWARxFD47HnE37/Nb5eqU1vxYwxNX0SlyUcEQpkAeC+xVAvcjjEbU479axp2CqJaw1we07WKOEAgHsQw6yS9xiKK5czfr+WOOyyL/HI56lEVI5XZsRlzzy+vXO4Vrd4AOAaYrrF+Sb7Mo58nsr2zLhq4hD5zkhr8NtTfJ0bo2gUAK4l8iOHdRLXOuKo7VS0jjiyYXNT7dQjZuzIjPGv47rf4oSaEwDgm76ROKRHHI1n1obG9TPW+zQmDP349yzOe3MA4GrizCOOMbbWTr2f+dzD3QpdUQHgp4rhSuu5OxVT7dSbN1WO/o5FON4AgJ8v6scj7zPjX8Ydi8UfXioA8MjGpGF/k+MjGo24fpNxJ2cZQ72LGSwAQC5Ob6c+dTMmvTIMAPxS8bUr6m7OLs5RzKH+CssGAG4lhn4amzhtYmwtcajWqYQ5LADw+MZdh9X4M6vrZ0z3DUlvxsxIHJ7PjFud9+YAwFXE9M2YVjv17ArvNok7e6ci6u3UI7RGB4DriOEGx2Hn0I9oT4zNEodNEndW4tB4XivheK3EbGf+EwEA3xX1bqPLJKY1+fW5EvednYr3cxOH+Fpw2tfWCABcWOSD2Kqj36O+azAncagVf0a0d1aO27if1BUVALiBOP+IIxs1H5HsHsTX3Ya99cw1P43rnlwbAHBnoj1qfpHE1o5VqjUcB7FPMRyR9OPP8pLvBQDcmfg6vG2veqRyEPtyEL+LmT01AIBfZtxt2EwkHMtbrw3gXnS3XgD8FOPxyaKUsiulbLqu295yPfcihl4d+xbqu1LKe9d1/e1WBADcrbHQdD0eAb3NOfpJ6lSWV1gyAHBL4zHQ4oTfn0ocmldq48ybOADAA5uoN9nFjHkoSeKQFsYmyUbMeS4AcGMxDHHbJwJ9a7dhjFlXvvzXSUyr18gyiZVwAMA9iGHXYRmnTYytJQ7LxnMyi0pcaw7LKnlmrZ16ulYA4IJi6MNxfFzRx/kTY3dRn8PSalK2Sp5ZmxcT0UiSYjo5ajY3AwAuJOpzUT6SmO8ccWRFnKskrtZOvbrOo/hlDLUjm2x9AMCFRXvHYXLnINpHHMvkmcfD2w49N9b7FJ/XYvsYjoB0RQWAezYj4VglsVOdTecmDlNXXJcXfj0A4F5EPmp+mcTtdxvOShxi2CV5HX+eL/Q6AFVam8MNxXAzZFNK+evoo3+XUl66rts14l9LKfvrsL2W4QDApPjPibERM3tq/BbjbszCvwkA8EdMHBulV4YBgF8shgZg+yu5c9upryq1LR+SDgD4wcZi1bcxGZg7MbaWOKwbcVnPkLcsFgC4E2NdxNvc2oiY7oq6a8U3EodlEpfpT3tbAOCqYijCPG5V3qyNiHrvj2o79TEuszrjeRGN3REA4IJi6KOx7/y5icoAtqOYvvIlnrYp/0bikPUayeKmdlT2mu8JAFxATHcMjWg0/2okDtXYRlx/xjqbiUNMz3BJ3w8AuKCJL+JZX+SNxGGVxE11Nm3GjbFTScf7Ce/6EkPNidspAHBN30gcskSlevsjhhsqU2Pq0xqOg/jn+LzhookXADyC+N6o+anYZuIQnzNc9vEbyQMA/GAxNNOqWTZij2sjthIHAGBSTNdV9CfEP885DgH4LtNi4cHFMDH2tZTyVErZdF23vu2KAAAAAAAAOFMMXVH312pnTYwFAH6p8YbLJk5rp76o3KbZXGHJAMAtjbdUFnOvxCaJw7IRlw1iM2oeAH6qiSu1cybGTnUa3VskcbWBcRFGzQPAzxRDe/EpH1nSkSQNEcnIeAkH8LdbLwC4iWXlz/9eSlklcf9OPntOPssGtfXJZwDAo4p8DkufxNV2RiIatRgxTIw9fm66owIAPLDIizjTmyMx3U59VuIQQ5HqavxZXuyFAID7E/WJsRFDq/RW/DI+r8au7FIAAJPGpOP41sny1usCfibD2+CXi6EHx1Mp5aPrut2t1wMAAAAAAAAAAADAnYiIp4h4G6/FrmPGxFgAgNnGZGNqiNvq1msDAH6IiHhPupQub70+4D4Z3gac6iX5bHmtRQCPRcIBAPxxEg7gVOvkM51KAYDLqEyM3Y1t0gEALiMiXsdrsf04OVayAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwA/w/asPcJ0+ycxYAAAAASUVORK5CYII="></image><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAaqklEQVR4nO3dTWyd15kf8D/FD3340qIjoKDQhRTUFFLAqEW2wDQLS8xiMB1xgDiziBwUaDSwgaLJwsomnqJWq9QBBvYmyiKeLGyMMjPAxN3EWchIkSwsZeNsKLtIgECcAawUKL0oGiumY31GXbyifEnx496re+577+XvBxDS+96X5LMQqf895znnJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlDNSdwHAjjKV5GiLz36Y5N2CtQA9JHAAnVoND80h4vC9j9XXn+zy97yWtSHk7Xt/vn/vQ0iBPiVwAFtZDRNHUwWJ1YDR7SDRbavB5P17H+82/QnUQOAAVh3d4GN/rRWV8V4+DR9v3/vzwxrrgR1B4ICdaSrJ/L2Po0mO9+obj8/OtvTcH5aXc+eDDwpXc9/VfBo+Vv8EukjggJ1hKsnT+TRkHOrGF10ND+NHZjLSmKz+PvdpoJiYm+vGt7nv9tJS/vDRR0nuBZLlKpDcXFy8//rdlZVufKtrqYLH6ocAAg9J4IDhNZ9PQ0bHPRdjM49n9ODBjM0cydiRmYw0Ghk/ciQjjUaXyuy+1WBya/Fy7q58lFtXlh42jFxL8mY+DSDvd6VQ2EEEDhgeq6MYqyGjrf6LkUYjYzMzmZiby+jB6YwdOZKxmZkCZdbn7spKbl25kluLl3N76UpuX1nqdNrmvVQB5M0Y/YCWCBww2JpDxhfb+cSxmcczNnMkE3OzQxkuWtUcQm4uLubW5cvtfomrqYLH+QgfsCmBAwZPRyFjdHo6u48fy/jcXCbm5vp6SqRuNxcXOw0gq+HjXEy7wBoCBwyO1ZDx1VYeHmk0MjE3m93HqpAxevBg2eqG2I1Ll3JrcTE3Ll5qZwrmvVSjHudj2S0IHNDnDic5de9j25UlzaMYu48dK1vZDnVneTk3Ll3K9QsXcnvpH1v9tB+kCh5vl6oL+p3AAf1pPsnptDBlshoy9iws7Ng+jLrcXVnJjYsX88mFt1qdermaarrlfIx6sMMIHNA/Vnszzmab0YyRRiO7jx3LvmdOChl9os2Rj9Vltmej14MdQuCA+h1ONWVyOtssZd197KnsWVgwXdLnbi8t5fqFC/nkwlut7P1xMVXweLt0XVAngQPqczjVfzRbNoGOTk9nz8JC9iyc0Pg5gFaDRwtTLhfzaZMpDB2BA3rvcFoIGuOzs9n3zEmjGUPizvJyPnnjjVZGPa6m+vdxvhd1Qa8IHNA7h9NC0Nhz4kQeee5ZoxlDarXR9OPXXt9uia3gwVAROKC8w9kmaIw0Gtl38mT2PXPShlw7yI1Ll/L7H76x3XTL1VQ9Pm/3oiYoReCAcqZSNYL+t80eGJ2ezt5nTmbvwoKgsYPdXFzMx6+9vl3w0FzKQBM4oIzTqf5z2HDVyej0dB557tnsWVjoaVH0txaDx49T/ft6vydFQZcIHNBd86nm3DfcR2Ok0cjk6ecFDbbUYvD4VqpNxGwgxkAQOKA7DqcKGsc3elGPBp1oIXhoLGVgCBzw8M5miz6NfSe/nEeee07QoGPXL1zYblXLxVSNpe/3qiZo12jdBcAAm0/VwLfheSfjs7N57NXvZc8f/3FGJiZ6WRdDZuzIkex75mSSahfT3Ly5/pHDqfo6RqKplD5lhAPaN5VqVOP5jV4cnZ7O5JkXMzE319Oi2Bnurqzko++cy/W33trsEcto6UsCB7RnPps0ha72aTzy3LO9rokd6ObiYlbOndvqoLjvpgrGmkrpCwIHtGbLUY3x2dk8euZFu4PSc79/4418/Nrrm22XfjXVCcTv9rYqeJDAAdubzxajGo+eedF5J9TqzvJyfvfSt7dazfKtVIEZaiNwwNbOZpMVKLuPPZVHz5yx+oS+cePSpfzupW9vNtrxXqrRjvd7WhTcI3DAxg4neTPJk+tfMKpBP7u7spLfvfRSblz6+UYvX0u1muV8T4uCWBYLG3k6yU+ywRTK7mNP5bFXX83YzEzvq4IWjExMVEuxJxu59ctfrV9CuyfVv+/PplrFcr2GEtmhjHDAWueyQWOoLckZRHeWl3PthRc2W8nyXqrlsxpK6QkjHFCZSvJONtjEa2zm8Tz26vfsq8HA2TU5mb1f+lKSbNRQOp3kK0l+fe8DihI4IDma6l3eA1Mo+05+Oftffjm7Jid7XxV0ycTcXMbnZnPj0qWNplieSfJYqmlEKMaUCjvdqSR/s/6mxlCG0d2VlXz4zRc2Wz7741Q/DzYKowgjHOxk55L81fqbq1Mo4088UUNJUM7IxET2Lizk7spHufWrX61/+XNJ/jTV1OKmp8RBp4xwsBNNpVoW+EC/xp4TJzL5jdP21mDobbFnx7VUm91pJqWrBA52mqlUywEf2F+jcfr57Dt5sucFQV1uLy3l2jdf2OzY+7+I/TroIlMq7CQbNoeONBrZ/9J/z15LXtlhdh04kL1/tpBbv/xl/vBg6Hg61WjHO72vjGEkcLBTHE01srG/+ebo9HSmzn3Hkld2rNW+jjvLy7m9tLT+5X+XapOwN3tfGcNG4GAnOJXkh1kXNsZmHs9nXn/NCa+QZPfxYxmZbOTmO79Y/9LRCB10gcDBsDuVatnrnuabu489lalXXtEcCk3Gn3giowenNzqH5WiSL6QKHbZDpyOaRhlmp7LBHht7TpzIo2de7H01MCBuLy3lt1/7+kYrWN5LtYLFXh20TeBgWJ3KBmFj38kvp3H6dO+rgQEjdNBtAgfD6FQ2CBuPvvhfHL4GbdgidPwyyVMROmiDwMGwORVhA7rm7spKfvu1r2104uyVJH8UoYMWCRwMk1MRNqDrhA66QeBgWJyKsAHFbBE6/neSfxWhg20IHAyDUxE2oLgtQsf/SfLPayiJASJwMOieTvKj9TeFDShji9DxT0ker6EkBoTAwSDbcLtyYQPKuruykv/7pT/faPWK0MGmdtVdAHRI2ICajDQaeezV7220U++/SPJ+qlOZYQ2Bg0E0lWqL5TVhY8+JE8IG9MjYzMxmoeNQkv8VoYN1TKkwaKZSjWw82XzTduVQj9tLS/l//+GrG730T0n+Taxe4R6HtzFovp/kT5pv7D72VPa/9FJN5cDOtuvAgc0OfPtMkj9P8vdx4BsROBgs55L8x+YbYzOPV6e+TkzUVBIwduTIZqHjQJI/S/IPETp2PIGDQXEqyV813xhpNHLg7/7WEfPQB8aOHMmd5eXcXlpa/9I/S/KnSX4YoWNH08PBIHhgRcpql/zYzExtRQEP+u3Xvp5bly9v9JJTZnc4q1TodxuuSHn0zIvCBvShqVdeztjMhltxPJnqjQM7lCkV+t1Psm5FyiPPPpu9X/pSTeUAWxmZmMj4E0/k+k9/lty8uf7l6SSfTfUmgh1G4KCfnU2yZr3d7mNPZfKFb9ZTDdCSXQcOZOzwodz42c82evlohI4dSeCgX81n3YFsVqTA4Bg7dChJNuvnOJqqh/Dt3lVE3QQO+tFUkneS7Fm9MdJoZOqVlzN68GB9VQFtmZiby+2lK7lz9TcbvTyf5GqSd3taFLXRNEo/eqBJdPL085pEYQA9euZMRqenN3v5b1IFD3YAgYN+czrJ8eYbzkiBwTXSaGT/Ky9v9cibqaZYGHKmVOgnR5P8qPnG2Mzj2f/tl/RtwADbdeBARiYbufnOLzZ6eU+qjcHOx8ZgQ80IB/3k/Pobj545YydRGAL7Tp7M+OzsZi8filUrQ0/goF+cy7r9Nhr6NmCoTL3y8lZvII6n+j3AkDKlQj+YT/LXzTfGZ2fzqP02YKiMTExstT9HkvzbWLkytAQO+sHbqZbCJrm3BPbcd7JrcrK+ioAixg4d2mqpbJJ8IdUOwx/0rip6wZQKdTubav72vsnTz9tvA4bYNr1Z+1P1c0xt9gCDyQgHdTqa5B+ab4zPzmbyG6drKgfohRamVqaS/MtUR9ozJAQO6vTDJIdXL0ylwM7RwtTK55JcS7XrMEPAlAp1eWCDr0eee9ZUCuwgLSx7/05sCjY0jHBQh6lUc7T3z0qxKgV2npGJiYwe+ExuXPr5Vo99PtVoqE3BBpzAQR2+n+SPmm9MvfJydh04UFM5QF3GjhzJzcXF/OGDTRelTCfZm2rlCgPMlAq9Np/kq8039p38sg2+YAd79MyL2z3yfBzyNvCMcNBr57O+UfSVl52VAjvYaqP4rcuXt3rsC3HeykAzwkEvncq6RtHJ0887KwXIvmdObve74FA2OG+JwWGEg15as5mPPTeAVS02kH4uycUk7/ekKLrKCAe9cjbrdhR95Lln66kE6Et7FhYyNvP4do+dj11IB5IRDnphKtWytvvLYPecOJF9z5ysryKgL40eOpTrb7211SNTsWplIBnhoBdOpzof4T6jG8BGJubmMj47u91jVq0MIIGD0qZSBY779pw4YUdRYFMtLJNNknOl66C7TKlQ2l8m+ZPVi5FGI4+d+45lsMCmdk1O5s7ycm4vLW312HSctTJQjHBQ0gOjG/tObrv0DaDVadez0UA6MAQOSlrTuzHSaGgUBVoyevBg9pw4sd1j+2NqZWAIHJRidAN4KC2Ocnw1TpQdCAIHpRjdAB5Ki6MciVGOgSBwUILRDaArWhzlOJ7k6cKl8JAEDkp4Ouv23diz0NK7FIA1jHIMD4GDEs42X9h3A3gYLU7HHkp1QCR9SuCg256OM1OALhqbmWll99HEMtm+JnDQbWt6N8ZnZ41uAA+tjVEOR1D3KYGDbjqcqnnrPqMbQDfsPnYso9PTrTx6OkY5+pLAQTeteWcxOj2dibm5umoBhsze1kY59scoR18SOOimU80XLf5yAGjJ3oWFVpfXG+XoQwIH3XIq6zb62ruwUF81wNAZaTSy+9ixVh7dHytW+o7AQbecar7YfeyYjb6Armtjx2LTKn1G4KAbDmdds6htzIESxmZmMjbzeCuP2pejzwgcdMMDzaJjMzN11QIMuX0nW35Dc7ZgGbRJ4KAb1pxhoFkUKGn38ePbP1Q5lGS+XCW0Q+DgYR3Nup1FW2zqAuhI1Tz6VKuPny1YCm0QOHhYa6ZTdh97ys6iQHF7Wl8FdzxVnxk1Ezh4WGumU4xuAL3Q5ko4K1b6gMDBw3jgGPo25lYBHkobb3BOxUZgtRM4eBjrRjeesvcG0DO7j7ccOPZn3e8rek/g4GHMN1+YTgF6ybTKYBE46NSDq1NMpwA91sYbnSdT/d6iJgIHnTrVfGE6BahDG9MqiZ1HayVw0Kn55otxx9ADNWhzKvdUoTJogcBBJw6nGp68T/8GUJc2NgHTPFojgYNOzDdfjM08brMvoDZtjrAKHDUROOjEmh/YCdMpQI3aHGF9OvbkqIXAQSfmmy8mTKcANRo9eDCj09OtPm5apSYCB+06mnW7ixrhAOrW5moVgaMGAgftmm++GJ+drakMgE+12cfxxZhW6TmBg3bNN18Y3QD6QQe/i+YLlMEWBA7aNd98MT5nhAOo30ijkbGZx9v5FNMqPSZw0A79G0DfavP3kcDRYwIH7VhzDoH+DaCfjM3MtPP4/phW6SmBg3bMN18Y3QD6SQdHLBjl6CGBg3asGeEYO9LWuwmAokYPHmz3EMn5QqWwAYGDdqw5P6XN4UuA4ibaa2R/MpbH9ozAQavmmy9GGg3npwB9Z2zmSLufYlqlRwQOWrV2OsXoBtCHOliqP1+gDDYgcNCqw80XGkaBftTByOt8gTLYgMBBqzSMAn2vg8bRQ1n3hooyBA5atSZw6N8A+lUHU77zBcpgHYGDVkxl3Q6jejiAfjXe/gjs0e0f4WEJHLRiXcNoW+cVAPTULn0cfUngoBVrAsdIY7KuOgC21cEI7JPbP8LDEjhoxZqNcaxQAfpZhz1m810ug3UEDlqxdoRjsq0OcICe6jBw6OMoTOCgFWtGODSMAv2ug14zgaMwgYNWHG++sCQW6Hcd9JoJHIUJHLRN4AD6XQdLYzWOFiZwsJ11K1T0bwD9r8PVdEY5ChI42I7+DWDgjB6c7uTTDne5DJoIHGxnavtHAPpLB5t/JUY4ihI42M6aH8AO5kUBBoXAUZDAQVvsMgoMgvEjRzr5NCO6BQkcAAydDhvcj2//CJ0SONjOfPPFmCkVYLgZ5ShE4KAtlsUCg2J0uqOVKvo4ChE4ABhKHa5UMcJRiMABAJ8ywlGIwMF2Djdf7Jq0SgWA9gkcbOdQ84WdRoEhN193AcNK4AAAihM4ABhKHe6MrGm0EIEDgKHU4c7IjqkvROAAAIoTOACA4gQOAFjLXhwFCBwAsJbG0QIEDgCgOIEDAChO4AAAihM4AGAtPRwFCBwAsJZVKgUIHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAQAUJ3AAAMUJHABAcQIHAFCcwAEAFCdwAADFCRwAQHECBwBQnMABABQncAAAxQkcAEBxAgcAUJzAAcBQurvyUd0l0ETgoC13V1bqLgGgJbeuLNVdAk0EDrbzXvPFrStX6qoDgAEmcLCdD5svjHAAg+L2khGOfiJwsJ13my9uG6IEBsCd5WVvkPqMwMF23m++uLm4WFMZAK275XdV3xE42M7bzRe3Ll/2rgHoezcXL9ddAusIHGzn3STXmm/cuHixplIAWnPj0qW6S2AdgYNWvNl84QcZ6Gc3Ll0yEtuHBA5asS5w/Dx3lpfrqgVgS9cvXKi7BDYgcNCKN5Ncbb7xyRtv1FQKwObuLC/nxqWf110GGxA4aNX55otPLrxllAPoOx+/9no3vsy72z9CuwQOWnUuTc2jd1dWuvWDDdAVNxcXc/2tt7rxpT7c/hHaJXDQqg9ThY77rr/1ln05gL6xcu7c9g+1RuAoYKTuAhgoU6k2Atu/emN0ejqf+bu/zUijUVtRACvnzuX3b/yPbn05/zcWYISDdnyY5FTzjTsffJDfvfRSPdUApFoG28Ww8d72j9CJ0boLYOD8Oslsks+t3rhz9Te5s7yc3ceP1VcVsCPdXlrKtRf+Mrl5s1tf8n9m3VYAdIfAQSd+kuQrqaZYklQ/9EIH0Eu3l5by2699vdubfH0r1RsrukzgoBPXU52x8pUke1ZvCh1ArxQKG0nyn1L9jqPLBA469UGqdwHPNN+8vbSU20tXsvvzn8/IxEQ9lQFD7fqFC7l25r+WCBs/zro9h+gegYOH8etUO5A+3XzzztXf5MZPf5qJfz2XXQcO1FMZMHTurqzk41dfzcpff7+bPRvNXo5Nv4oROHhY76YKHV9I0/TK3ZWVfPKjN3N35aOMP/GE0Q7gody4dCnXvvlCbv7iF6W+xdWsW4VHd1lrTLccTdXXsX/9CyONRvadPJl9z5y0XwfQlpuLi/n4tddz6/Ll0t/qG1m3uSHdJXDQTVOplpMd3+jFkUYjexdOZM/CQsZmZnpbGTAw7q6s5MbFi/n9G2/k9tI/9uJbXk31pskOowUJHJTwn5N8O1tsLDc6PZ3xublMzM1m7MgRAQR2sLsrK7l15UpuLV7OzcXFXoxmrPcX0SxanMBBKf8+yd+38wkjjYbgATvIH5aXc+eDD+ou42KS+bqL2AkEDkp6M8kX6y4CYBPXUk2lvF9zHTuCs1Qo6VSquVGAfnQ6wkbPCByU9GGqPTqu1V0IwDrfjb6NnhI4KO3dWNsO9JcfpBrdoIds/EUvbLgjKUANfhBvgmohcNArG+5ICtBDwkaNrFKh1zbdkRSgoO/GNEqtBA7qsOWOpABddC3VqMabNdex45lSoQ7XU3WHX0vy+ZhiAcr4capNvZwA2weMcFC3qVQHJn217kKAobF68uvb9ZZBM8tiqduHqX4xfDZVQxdAp95LdS7K4QgbfccIB/1mKtXy2dNJnqy5FqD/XU3Vn3E+pk76msBBP5tKNf86n2p1y9FY3QI73XuptiN/+96HkDEgBA4G0dFUYQTYOd6uuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOhf/x/wKfcOGn+jTgAAAABJRU5ErkJggg=="></image><image xlink:href="data:image/png;base64,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"></image></defs><g clip-path="url(#__lottie_element_263)"><g class="ai" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(0.9876883625984192,0.15643446147441864,-0.15643446147441864,0.9876883625984192,66.75173950195312,-64.16143798828125)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(0,0,0,0,110.5881576538086,112.40028381347656)" opacity="0.9257931034481796" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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nIlsUEwaI8wBgG3W3sFyrqu3AQAGWi0l4wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbIf/D6fO6Kp5IYbTAAAAAElFTkSuQmCC"></image></g><g class="ai" transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,141.5986328125,-103.04571533203125)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(0,0,0,0,109.10594177246094,119.12797546386719)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,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"></image></g><g class="ai" transform="matrix(0,0,0,0,443,224)" opacity="1" style="display: block;"><image width="540px" height="540px" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAKkklEQVR4nO3d4VEi2xYG0P1uAk0GTQaYAWTgZAAZYAaYgWSAGehEADcCfBHAiwAngvN+IPc6bbfACByBtaq6LLHG2uCP/maf3edEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDOWhHRy10EAHC5ehGR3q5l1koAgIv1GP8GjhQ6Hdn8lbsAADiidu4CWBM4ALgmN7kLuFYCBwDXpJW7gGslcABwyQQMAODoUuV6zlvO9dLhAOBS1XU3dDwAgIPqxccOx2vOgq6ZDgcAl6ruiZQiPCqbhcABwKVqegTWo7EZCBwAXKrenq8DAOylHR/nNzbXS76yAIBLchfNgSOFOY6Ts6QCwCXqffHnAACfakWlo9Htdqsdjlm26gCAi/DbckpZlmk+n1tWAQAOahnvgsVwOEwppVSWZTVw3GerEAA4a72odDLm83lKKaXRaGTXUQDgIGZRmd3YWCwWdcsqg1yFAgDnqReVQDGZTNJ7/X6/GjiWuYoFAM7TLCrDolUNXY67bBUDAGflR2zpbmzc3t7WzXI4th4A+FQrKk+m1HU3tnQ5xrmKBwDOwzgqAWI6nTYGjoZZjhR2HwUAGvSiEhxub28/DRsppbRarVJRFHUDpJZWAIDffFhKKYoiLRaLrYEjpZQmk0ldl+Mx03sBAL6p56gEhoeHh53CxkbNGSv25gAA/vFhbmOXpZQdl1ZSRNxke2cAwLcwiEpAKMsyrVarvQNHSilNp9O6wPEaQgcAXK1BVMJBURT/nJfyp2rOWRE6AOBKDeJjKGjc4GtfDY/KCh0AcEUGccSwsdHpdIQOALhSHwZEIyINh8ODho2U1kOkn4SOXp63DwAcUytqHn2NI4WNHUKHg94A4MLcRGVTrzjSMkpT6Kg55G1zPYcdSQHg7N1HzY2+KIqThI33GgZJN0ssP7J8OgDAl/SioatRluWXH339Uw8PD02hY9PtaJ/8kwIA9nYTEbNouKl3u90/3tTrUObzeSrL8rPgcR+WWQDgW+pFw1BovC2h7Hs2yjFtmevYLLPch44HAGTXivWeGi/RfONO3W5351NfT206nW7rdqRYnzprxgMATmgTMhq7GZurLMv09PSUO1NstVqt0mg0ajr47f21jPU+IsIHABxYL9YBYxxbOhnxLmic+gmUQ1itVqnf7+8SPDbXLNbLLj/iypZe/pO7AADOzk38+z/2XuX1Yp9f1Ol04u7uLgaDwWEqy+T19TXG43GMx+P49evXvv/8f7HuhMTb12Ws50Ee374CwNVpx27/k2+8iqJI/X4/22OuxzaZTLYNl+56vRz7jwkA39UgvnAT/c7DoIe243DptgsArlIr1m3+L91IO51Omkwm2ffXOLTFYpFGo9EhgkaK9ZDtxTDDAcC+Nk+dtCqv3bx97ez6i4qiiMFgEHd3d9Futw9Z40nNZrMYj8fx8+fPff/p35tfUXn9JS4scADAMfRifbLqYzRsV169+v3+2XU8ptNp6na7+8xkbB6RbZ/krwAAV+Ym1jfbZWwZKB2NRt8+eCwWi10HQ59j3Q1qn/CzBgBiHT4e45MbdVmWaTqd5s4VtXbY8GsZtjgHgG+jFesbc+MQ6nA4/Dbdjvl8njqdzragMTjxZwgA7GgTPBqfaMm9Z8dkMvmsq7EMQQMAzkY7Go6pL4oi29bn/X7/s67GfTiWHgDO0o9oWGYZjUYnCxqr1eqzJZSXWM+iAABnrBUN3Y5+v587bNzn+EAAgOO5jxOHjvl83rRT6Gv8flgdAHBBBnGi0LFarZrChiUUALgCN1Ez13HI0PHJMspLGAwFgKtRGzoONUgqbAAAG7Wh4+np6Utho+HRV2EDAK5YL2r26VgsFn8UNiaTibABANQaRM2OpPuaz+d1O4i+hgFRAODNOL44z9Ewt9HL9YYAgO/pJSqBYddzV0ajkU29AICdtKMyRLrL0spisagLG7NM7wEAOAN3UQkP2w5663a7dXMb7VxvAAA4D7N4FyDKskyr1ao2bEynU0spAMAf6cWOA6Q13Y1lrqIBgPPzGJW9OapdjobuxiBXwQDA+WnHllmOmu7GS7ZqAYCz9RiVWY4tT6YMchUKAJyvm6iEiul0mlJKaTgcmt0AAA5mFjVH2NdsYX6Xr0QA4NwNojI8+vT0VLec4nA2AOCPtaKy+2hZltWw8ZyvPADgUjzHx46GYVEA4KAG8XngsJwCAHxZK5rDxixfWdfrr9wFAMARvEbEfxt+NjthHbwROAC4VE27iM5OWQRrAgcAl2rW8LrtzDMQOAC4VMua137FerkFAOBgDIx+EzocAFyTZe4CrpXAAcAl+7vy/TJHEQgcAMAJCBwAXBMDo5kIHABcE4/EZiJwAHDJlpXvdTgAgINrxzp0eCQWADi6du4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOH//B58p1H/Zf/kdAAAAAElFTkSuQmCC"></image></g></g></svg>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={18}
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

                    <Foo />
                    </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default ParallaxRapper
