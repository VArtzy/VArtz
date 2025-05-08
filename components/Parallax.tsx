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
    FaLocationArrow,
} from "react-icons/fa"
import { useInView } from "react-intersection-observer"

import Link from "next/link"
import Accordion from "./Accor"

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
                                <p className="max-w-lg mb-4 lg:text-lg font-medium text-grayweb">
                                    Jasa Web Terbaik: Web Mudah, Garansi Hasil,
                                    Bonus Domain & Transparan.
                                </p>
                                <p className="max-w-lg mb-8 text-grayweb">
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
                                        className="inline-block text-md rounded bg-springGreen hover:bg-mediumSpringGreen transition px-4 py-2"
                                    >
                                        Saya Ambil Harga Promo
                                    </a>
                                    <a
                                        href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%20konsultasi%20buat%20website?"
                                        id="konversi_konsultasi_web"
                                        className="flex items-center gap-2 text-md rounded bg-mediumSpringGreen hover:bg-SpringGreen transition px-4 py-2"
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
                                src="/img/eb21.webp"
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
                                src="/img/eb41.webp"
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
                                    className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow mr-4"
                                >
                                    <BsFillJournalBookmarkFill className="inline" />{" "}
                                    Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow"
                                >
                                    <FaInfo className="inline" /> About &
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video"></div>
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
                        color: "white",
                    }}
                    className="max-w-6xl mx-auto px-8"
                    id="pricing"
                >
                    <h2 className="text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb max-w-4xl">
                        Hemat! Dapatkan Harga Promo Terbaik yang Terbatas Untuk
                        Hari Ini.
                    </h2>
                    <p className="text-grayweb text-xl text-center mb-8">
                        Solusi yang didukung kinerja untuk membantu menumbuhkan
                        bisnismu.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        <div className="bg-snow text-grayweb shadow-md rounded p-4 text-center lg:text-left">
                            <h3 className="text-lg font-bold">Basic</h3>
                            <h4 className="font-bold mb-4">Start From</h4>
                            <hr className="mb-4" />
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="line-through text-xl font-bold">
                                    Rp 999.000
                                </h4>
                                <p className="line-through">/Tahun</p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold">
                                    Rp 599.000
                                </h4>
                                <p>/Tahun</p>
                            </div>
                            <p className="text-xs">*Harga promo terbatas.</p>
                            <p className="text-xs mb-4">
                                Perpanjangan hanya dikenai 50%
                            </p>
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
                                    <strong>Bonus Spesial</strong> Hosting +
                                    Domain (.com!){" "}
                                    <strong>senilai 309rb</strong>
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
                                id="konversi_penjualan_web_basic"
                                href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%BASIC.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                                className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow"
                            >
                                <FaWhatsapp className="inline" /> Pesan Sekarang
                            </a>
                        </div>
                        <div className="bg-turquoise text-snow shadow-md rounded p-4 text-center lg:text-left scale-105">
                            <h3 className="text-lg font-bold">Super</h3>
                            <h4 className="font-bold mb-4">Start From</h4>
                            <hr className="mb-4" />
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="line-through text-xl font-bold">
                                    Rp 4.799.000
                                </h4>
                                <p className="line-through">/Tahun</p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold">
                                    Rp 1.799.000
                                </h4>
                                <p>/Tahun</p>
                            </div>
                            <p className="text-xs">*Harga promo terbatas.</p>
                            <p className="text-xs mb-4">
                                Perpanjangan hanya dikenai 80%
                            </p>
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
                                    <strong>Bonus</strong> Copywrite & Content
                                    writing <strong>senilai 209rb</strong>
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">Revisi maks. 5 kali</p>
                            </div>

                            <a
                                id="konversi_penjualan_web_super"
                                href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%SUPER.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                                className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow"
                            >
                                <FaWhatsapp className="inline" /> Pesan Sekarang
                            </a>
                        </div>
                        <div className="bg-snow text-grayweb shadow-md rounded p-4 text-center lg:text-left">
                            <h3 className="text-lg font-bold">Custom</h3>
                            <h4 className="font-bold mb-4">Start From</h4>
                            <hr className="mb-4" />
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="line-through text-xl font-bold">
                                    Rp 1.899.000
                                </h4>
                                <p className="line-through">/Tahun</p>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <h4 className="text-xl font-bold">
                                    Rp 999.000
                                </h4>
                                <p>/Tahun</p>
                            </div>
                            <p className="text-xs">*Harga promo terbatas.</p>
                            <p className="text-xs mb-4">
                                Perpanjangan hanya dikenai 50%
                            </p>
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
                                <p className="text-xs">
                                    <strong>Bonus</strong> Konsultasi Lebih
                                    <strong> senilai 209rb</strong>
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="p-1 bg-springGreen rounded-full mb-2">
                                    <FaCheck className="text-snow text-xs" />
                                </div>
                                <p className="text-xs">Revisi maks. 2 kali</p>
                            </div>
                            <a
                                id="konversi_penjualan_web_custom"
                                href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%CUSTOM.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                                className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow"
                            >
                                <FaWhatsapp className="inline" /> Pesan Sekarang
                            </a>
                        </div>
                    </div>
                    <span className="block text-slate-800">
                        Bingung memilih?
                        <a
                            href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                            id="konversi_konsultasi_web"
                            className="text-grayweb block md:inline"
                        >
                            {" "}
                            diagnosis dengan kuis singkat untuk pilihan yang
                            optimal <BsArrowRight className="inline" />
                        </a>
                    </span>
                    <Link
                        href="/pricing"
                        className="text-grayweb block md:inline"
                    >
                        Apa yang kami kerjakan untuk meningkatkan bisnis Anda{" "}
                        <BsArrowRight className="inline" />
                    </Link>
                    <Link
                        className="inline-block text-md rounded bg-springGreen hover:bg-mediumSpringGreen transition px-4 py-2 mb-4"
                        href="/pricing#extension"
                    >
                        Layanan & Ekstensi
                    </Link>
                    <p className="text-center text-grayweb">
                        Merasa kurang cocok? Anda bisa{" "}
                        <a
                            id="konversi_konsultasi_web"
                            className="underline"
                            href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%buatkan%20saya%20website?"
                        >
                            berikan penawaran
                        </a>
                        .
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={15}
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
                    offset={16}
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
                    offset={17}
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
                    offset={18}
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
                    offset={19}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "4em"
                    }}
                    className="max-w-4xl"
                >
                <h2
                    id="faq"
                    className="text-3xl md:text-4xl w-full font-bold mt-24"
                >
                    FAQs
                </h2>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Frequently Asked Questions. Pertanyaan yang paling banyak
                    ditanyakan dan mungkin menjawab pertanyaan kamu.
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
                    offset={20}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                    }}
                    className="bg-springGreen justify-center py-8"
                >
                    <div className="max-w-4xl mx-auto px-8 flex flex-col gap-8 md:gap-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Dalam Waktu Dekat, Bisnis Anda Meningkat{" "}
                            <span className="underline">Pesat</span>.
                        </h2>
                        <p className="text-xl font-semibold md:text-4xl">
                            Penawaran Ini Tak Akan Datang 2x
                        </p>
                        <p className="text-xl md:text-2xl">
                            &quot;Jangan ketinggalan kesempatan untuk
                            meningkatkan bisnis Anda dengan membuat
                            website&quot;, Mau miliki sekarang atau menyesal
                            nantinya, pilihan ada di tangan Anda.
                        </p>
                        <a
                            id="konversi_konsultasi_web"
                            href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                            className="inline-block text-xl text-center  rounded-lg bg-snow text-springGreen px-8 py-4"
                        >
                            {" "}
                            Saya Mau{" "}
                        </a>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={21}
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

                    <footer className="mt-16 text-snow">
                        <div className="lg:flex justify-between pt-16 pb-8 px-16 bg-[#2d2d2d] gap-16">
                            <div className="lg:w-1/3 mb-8">
                                <div className="flex items-center gap-4">
                                    <Image
                                        width="32"
                                        height="32"
                                        src="/logo.png"
                                        alt="VArtz Logo"
                                        className="rounded-md invert"
                                    />
                                    <h2 className="text-2xl text-snow mb-2">
                                        VArtz
                                    </h2>
                                </div>
                                <p>
                                    Buat Website untuk meningkatkan peluang
                                    bisnis online kamu. Kami akan siap menerima
                                    konsultasi untuk pembuatan dari kamu.
                                </p>
                                <Link
                                    id="konversi_konsultasi_web"
                                    className="text-snow px-4 py-2 rounded-md inline-block mt-2 bg-mediumSpringGreen transition-all hover:bg-springGreen"
                                    href="/quiz"
                                >
                                    Dapatkan Web{" "}
                                    <BsArrowRight className="inline font-bold" />
                                </Link>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl mb-2">Sitemap</h3>
                                <div className="mb-2">
                                    <ul className="flex flex-wrap gap-8">
                                        <li>
                                            <Link
                                                className="text-snow"
                                                href="/"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                href="/pricing"
                                            >
                                                Layanan
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
                                                href="/work"
                                            >
                                                Works
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                href="/terms-condition"
                                            >
                                                S&K
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
                                    </ul>
                                </div>

                                <h3 className="text-xl mb-2">
                                    Niche & Frequent
                                </h3>
                                <div className="mb-2">
                                    <ul className="lg:flex gap-8">
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/terms-condition#faq"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/pricing"
                                            >
                                                Pricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/blog#newsletter"
                                            >
                                                Newsletter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/cara-order"
                                            >
                                                Cara Order
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-2">
                                    <ul className="lg:flex gap-8">
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/#testimonial"
                                            >
                                                Testimonial
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="https://docs.google.com/forms/d/e/1FAIpQLSd7QAPpeOGmEJX4DlJge-XMWQ8QnZXjPYCnw1R9r7JS0h1ubg/viewform"
                                            >
                                                Feedback
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/pricing"
                                            >
                                                Layanan
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-snow"
                                                scroll={false}
                                                href="/about"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:w-1/3 mb-8">
                                <h3 className="text-xl mb-2">Contacts</h3>
                                <div className="flex gap-2 items-center">
                                    <FaLocationArrow className="inline" />
                                    <p>
                                        Jl. Gatot Subroto No.105, Kemlayan, Kec.
                                        Serengan, Kota Surakarta, Jawa Tengah
                                        57111, Indonesia.
                                    </p>
                                </div>
                                <a
                                    id="konversi_konsultasi_web"
                                    href="https://wa.me/6289611905599"
                                    className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block text-snow mb-2"
                                >
                                    <FaWhatsapp className="inline" /> Chat
                                    Whatsapp
                                </a>
                                <p>
                                    <BiMailSend className="inline" />{" "}
                                    farrelnikoson@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#252525] w-full flex flex-wrap gap-2 justify-between px-16 py-8">
                            <p className="text-lg">
                                Copyright © 2023 | <Link href="/">VArtz</Link>{" "}
                                All rights reserved
                            </p>
                            <p className="text-lg">
                                Dibuat dengan{" "}
                                <span className="text-red-600">❤️</span> oleh{" "}
                                <Link href="/">Farrel Nikoson</Link>
                            </p>
                        </div>
                    </footer>
                    </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default ParallaxRapper
