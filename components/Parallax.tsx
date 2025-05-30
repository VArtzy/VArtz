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
                pages={19}
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
                                    Jasa Ahli Web: Web Mudah, Garansi Hasil,
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
                                        ? "Kembangkan"
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
                    <div
                        className={`items-center justify-center`}
                    >
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                            Landing Page
                            </span>{" "}
                            First Media
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video">
                            <Image
                                alt="First media web thumbail"
                                src="/img/eb2.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/15] lg:aspect-video"
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
                                E-Commerce
                            </span>{" "}
                            Joga Computer
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/13] lg:aspect-video">
                            <Image
                                alt="Joga Computer web thumbail"
                                src="/img/eb4.webp"
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
                    <div className={`items-center justify-center max-w-[640px]`}>
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                                Company Profile
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
                    Tinggalkan Cara Lama Berbisnis, Mulai Bangun Website Modern dan Mutakhir
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <p className="mt-8">
                            Kami berdedikasi dalam membangun solusi dengan teknologi terbaru yang tepat. Sadarkah, setiap kali Anda mengakses akun media
                                sosial di Facebook, Instagram, TikTok dan
                                YouTube pasti akan menyuruh Anda untuk
                                mengunjungi Website akun mereka. Kenapa para
                                pelaku usaha tersebut membuat Website? Apa
                                keuntungannya? Inilah alasan harus menggunakan
                                jasa pembuatan website dan buat/bikin website.
                            </p>

                            <ul className="text-sm flex flex-col gap-2 list-disc mt-4">
                                <li>
                                    Website ibarat lapak untuk mempromosikan
                                    produk/usaha/diri Anda kepada dunia.                              </li>
                                <li>
                                Membangun kredibilitas usaha Anda lewat branding mulai dari gaya tema, warna dan tulisan yang autentik membentuk profesionalitas brand Anda.
                                    </li>
                                <li>
                                    Website/landing dapat memberikan informasi
                                    yang Anda berikan.
                                </li>
                                <li>
                                    Customer Anda akan selalu mengecek informasi
                                    usaha Anda lewat website. Bayangkan saja
                                    jika Anda tidak punya atau sudah punya namun
                                    kurang menarik.
                                </li>
                                    <li>Otomatisasi proses bisnis seperti penjualan dan fitur interaktif lainnya lewat sistem informasi atau sistem pembayaran.</li>
                            </ul>
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
                                dan bermanfaat, berkomitmen untuk
                                memperbaiki satu situs web pada satu waktu
                                dengan menerapkan praktik desain UX yang baik.
                            </p>
                        </div>
                    </div>
                            <div>
                                <Link
                                    href="/blog"
                                    className="bg-mediumSpringGreen px-4 py-2 hover:bg-springGreen transition-all rounded inline-block mt-4 text-snow mr-4"
                                >
                                    <BsFillJournalBookmarkFill className="inline" />{" "}
                                    Baca Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-mediumSpringGreen px-4 py-2 hover:bg-springGreen transition-all rounded inline-block mt-4 text-snow"
                                >
                                    <FaInfo className="inline" />
                                    Tentang Kami
                                </Link>
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
                    speed={2}
                    className="bg-mediumSpringGreen"
                />

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
                    id="feature"
                >
                    <h2 className="pt-4 text-3xl text-center lg:text-4xl font-bold mt-16">
                        Ahli Web Reliabel Selama 6 Tahun+
                    </h2>

                    <p className="text-xl mb-8 text-center">
                        Membangun website sejak 2018 untuk berbagai industri, andal dalam <i>traffic</i> tinggi & ribuan pengunjung. <i>Webmaster</i> berdedikasi telah menguasai pengembangan web, API, frontend, backend, database, SEO, UI/UX, cybersecurity, integrasi AI dan terus melakukannya. Kami percaya pada komunikasi yang baik dan pengembangan transparan.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <BiDevices /> Mobile Freindly
                            </h3>
                            <p>
                                Kami memahami responsive web design. Website Anda dapat diakses optimal dalam
                                desktop, tablet dan handphone. Menjangkau lebih
                                banyak pengguna.
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <SiMaterialdesignicons /> Desain Ekslusif
                            </h3>
                            <p>
Kami mengikuti tren UI/UX, membangun desain Website yang EKSLUSIF. sesuai dengan brand dan karateristik. Dengan desain yang modern juga. 100% Original.
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <FaRegWindowRestore /> Sesuai Kebutuhan
                            </h3>
                            <p>
Kami punya metode dalam pengumpulan spesifikasi dan kebutuhan mendetail, membangun Website sesuai kebutuhan Anda. Diskusikan ide Anda bersama sama
                            </p>
                        </div>
                    </div>
                    <div className="shadow-md rounded bg-grayweb p-4">
                        <h3 className="text-lg font-bold mb-4">
                            <FaBolt />
                            Website modern cepat, seperti kilat.{" "}
                        </h3>
                        <p>
Kami mendalami performa & core web vital. Performa website kami sangatlah cepat. Pastinya kamu tidak akan hilang pelanggan hanya karena website lemot.
                        </p>
                    </div>
                    <span className="block text-center text-slate-800">
                        Mulai konsultasi/tanya gratis lewat chat/meet
                        <Link
                            href="https://wa.me/6289611905599?text=Hai%20,%20bisa%20konsultasi?"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            dan buktikan kompetensi kami{" "}
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
                                yang Sesuai dengan Kebutuhan Anda
                            </h2>
                            <p className="text-grayweb text-xl mb-16">
                                Kami adalah jasa web profesional yang
                                menyediakan layanan pembuatan website dan
                                landing page untuk membantu usaha meningkatkan
                                bisnis online mereka. Kami menawarkan solusi
                                yang tepat untuk membuat website bisnis yang
                                fungsional dan reliabel, serta landing page yang
                                menghasilkan konversi tinggi.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="">
                                    <div className="bg-grayweb text-center mb-2 text-snow px-1 py-1 rounded-xl">
                                        Terjangkau & Fleksible
                                    </div>
                                    <h3 className="text-lg text-semibold mb-4">
                                        Jangan takut memenuhi kebutuhan bisnis digital
                                    </h3>
                                    <p>
                                        Kami menawarkan
                                        solusi teknologi informasi yang dapat disesuaikan harga fleksibel dan terjangkau agar
                                        sesuai dengan budget. Dapatkan situs berkulitas dengan mudah, mendapatkan
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
                                        Tim ahli yang berdedikasi dan terampil
                                    </h3>
                                    <p>
                                        Kami mencintai apa yang kami lakukan. Dengan pengalaman bertahun-tahun dalam
                                        industri ini, kami telah membantu banyak
                                        klien dalam berbagai industri mencapai
                                        tujuan mereka. Jangan ragu melihat blog dan {" "}
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
                    offset={10}
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
                    offset={11}
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
                        Buat Website Gak Perlu Ribet & Lama
                    </h2>
                    <p className="text-grayweb text-xl text-center mb-8 max-w-prose">
                        Gak perlu pusing mikirin gimana buat bikinnya, Anda
                        hanya perlu ikut intsruksi saja. Sisanya waktu anda
                        fokus kepada bisnis Anda.
                    </p>
                    <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:overflow-hidden">
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    1
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2]"></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900">
                                    Pemesanan & Konsultasi
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400">
                                    Kurang dari Satu Jam
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
                                    Pastinya Anda selalu bisa meminta bantuan{" "}
                                    <a
                                        id="konversi_konsultasi_web"
                                        href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%buatkan%20saya%20website?"
                                        className="underline"
                                    >
                                        {" "}
                                        konsultasi dengan kami{" "}
                                    </a>
                                    {"  "}
                                    untuk mengubah spesifikasi dan kebutuhan, menentukan SLA website menjadi hasil dan solusi terbaik
                                    yang Anda inginkan. Selanjutnya akan menganalisis, ideasi dari berdasarkan kebutuhan dan spesifikasi. Hingga akhirnya siap mengirimkan proposal proyek dan penawaran harga berdasarkan fitur dan spesifikasi yang perlu disetujui.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    2
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] "></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 ">
                                    Pengecekan Berkala
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 ">
                                    Kapan Saja
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
                                    Setelah melakukan pembayaran dan menentukan
                                    apa yang akan dibuat. Anda dapat melakukan
                                    pengecekan website Anda secara berkala.
                                    Nantinya, web akan dihosting sementara dalam lingkup pengembang. Anda
                                    akan selalu bisa datang/visit ke website
                                    selama masa pengembangan. Memperbaiki apa
                                    yang perlu diperbaiki. Dan membayar tagihan sesuai proposal jika dijanjikan.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    3
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] "></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 ">
                                    Penyelesaian & Publikasi
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 ">
                                    Sepuluh Menit
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
                                    Lalu setelah progress development selesai,
                                    Anda dapat melakukan evaluasi dan revisi sesuai ketentuan
                                    untuk memperbaiki. Membayar tagihan yang belum dibayar. Menerima dan mengirim serah terima. Akhirnya website
                                    dipublikasikan ke internet sesuai dengan
                                    domain yang Anda inginkan serta siap untuk
                                    mengembangkan bisnis Anda. Mendapatkan layanan after sale maintenance dan yang lain.
                                </p>
                            </div>
                        </li>
                    </ol>
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
                    offset={12}
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
                    offset={13}
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
                        Ini Kata Klien Kami
                    </h2>

                    <p className="text-xl mb-8 text-grayweb text-center">
                    Mereka sadar betapa unik kami, mengubah cara pandang mereka dalam pengembangan aplikasi - untuk memukau pengguna dan mengembangkan bisnis lewat teknologi informasi.
                    </p>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">
                            <Image
                            src="/img/yusuf.jpeg"
                            width={50}
                            height={50}
                            alt="Yusuf"
                            className="object-fit rounded-full"
                            />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Yusuf Sutanto
                                    </h3>
                                    <h4 className="text-md">Manager @ Joga Computer</h4>
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
                            <Image
                            src="/img/ahmad.jpeg"
                            width={50}
                            height={50}
                            alt="Ahmad"
                            className="object-fit rounded-full"
                            />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Ahmad Rosid
                                    </h3>
                                    <h4 className="text-md">
                                        Founding Engineer @ Companio.ai
                                    </h4>
                                </div>
                            </div>

                            <p>
So far sudah on track sih,,, you give me good impression. Semoga di tahun depan bisa lebih berkembang lagi. Senang bisa bekerja sama dengan profesional seperti ini. Sekarang tinggal menunggu outcome dari proyek-proyek yang sedang berjalan.
                            </p>
                        </div>

                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">
                            <Image
                            src="/img/nenti.jpg"
                            width={50}
                            height={50}
                            alt="Nenti"
                            className="object-fit rounded-full"
                            />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Nenti Sunenti
                                    </h3>
                                    <h4 className="text-md">Marketing @ First Media</h4>
                                </div>
                            </div>

                            <p>
Dapat menerjemahkan dan menangkap apa yang menjadi kebutuhan perusahaan kami. Selain itu internal kami pun bisa mendapat insight terbaru dari setiap proses pengembangan sistemnya. Sangat profesional dan selalu mengutamakan kepuasan klien. Tidak mudah untuk menemukan kontraktor website developer yang hebat.
                            </p>
                        </div>
                        <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                            <div className="flex gap-4 items-center mb-4">

                            <Image
                            src="/img/janni.png"
                            width={50}
                            height={50}
                            alt="Janni"
                            className="object-fit rounded-full"
                            />
                                <div>
                                    <h3 className="text-lg font-bold tracking-widest">
                                        Janni Chandra
                                    </h3>
                                    <h4 className="text-md">
                                        Owner @ Mie Bandung Singosaren
                                    </h4>
                                </div>
                            </div>

                            <p>
                                Jasa pembuatan website membuat website bisnis
                                kami secara tepat waktu dan efisien, dan mereka
                                selalu bersedia membantu memperbarui situs web
                                kami bila diperlukan. Mereka sangat responsif
                                dan hebat untuk diajak bekerjasama. Sangat
                                merekomendasikan kepada siapa saja yang
                                membutuhkan situs web baru.
                            </p>
                        </div>
                    </div>
                    <span className="block text-center text-slate-800">
                        Hanya membuat yang disukai pelanggan.
                        <Link
                            href="/work"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            desain memukau, rekayasa berdedikasi, keandalan mutlak{" "}
                            <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={14}
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
                        justifyContent: "end",
                        gap: "2em"
                    }}
                    className="max-w-3xl mx-auto text-grayweb px-8"
                >
                <h2
                    id="faq"
                    className="text-3xl text-center md:text-4xl w-full font-bold"
                >
                    FAQs
                </h2>
                    <p className="text-grayweb text-xl text-center max-w-prose">
                    Frequently asked questions (pertanyaan yang sering ditanyakan)
                    </p>
                    <div className="accordion w-full">
                        <Accordion
                            title="Apa itu VArtz jasa pembuatan web?"
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
                            title="Data apa saja yang perlu saya sediakan?"
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
                                    paket di atas?"
                            content="Maintenance yang kami lakukan yaitu memastikan
                                website tidak down dan tidak kena hack."
                        />
                        <Accordion
                            title="Ada pertanyaan lain?"
                            content="Jangan sungkan untuk tanya kepada kami! silahkan lakukan konsultasi dibawah ini. 100% GRATIS. Kami akan selalu mencari SOLUSI untuk bisnis anda!"
                        />
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
                    className="bg-springGreen md:justify-center"
                >
                <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-[420px_1fr] place-items-center">
                    <Image
                    src="/media/pesawat.png"
                    width={420}
                    height={420}
                    alt="Kontak kami"
                    className="object-fit md:w-full rounded-md"
                    />
                    <div className="flex flex-col gap-8 md:gap-16">
                    <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Mau Buat Website Keren?
                    </h2>
                    </div>
                        <p className="text-xl md:text-2xl">
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
                    </div>
                    <div
                        onClick={() => ParallaxRef.current?.scrollTo(0)}
                        className="mx-auto mt-8 p-4 bg-mediumSpringGreen rounded cursor-pointer"
                    >
                        <FaArrowUp className="text-snow" />
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
                    <Foo />
                    </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default ParallaxRapper
