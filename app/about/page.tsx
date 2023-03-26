import Link from "next/link"
import Foo from "../../components/Foo"
const About = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <h1 className="text-3xl md:text-4xl w-full font-bold mt-24">
                    About Page
                </h1>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Yuk cari tahu tentang kami dibawah ini...
                </h2>
                <p>
                    Merupakan personil jasa yang menyediakan berbagai macam
                    layanan IT mulai dari Pembuatan Website seperti toko online,
                    company profile, portofiolio, personal dan lainnya,
                    Pengembangan Aplikasi lengkap disertai pemeliharaan atau
                    maintenance berkala.
                </p>
                <p>
                    VArtz pun dimiliki oleh seorang profesional bernama Farrel
                    Nikoson. Seorang Developer, Desainer, Penulis, Internet
                    Marketer atau apapun yang berkaitan dengan komputer selama
                    masuk kategori apapun-dikerjakan-selama-ada-manfaatnya. Anda
                    bisa{" "}
                    <a
                        href="https://vartzy.github.io"
                        className="underline text-bold"
                    >
                        melihat lebih banyak tentangnya
                    </a>
                    .
                </p>
                <p>
                    Mari kita hadapi, banyak situs payah. Saya mencoba
                    mengubahnya dengan membuat setiap situs web dirancang dengan
                    tujuan dan makna yang dijamin untuk menciptakan pengalaman
                    yang lebih baik bagi para pengguna situs web.
                </p>
                <p>
                    Banyak situs web tidak mengikuti praktik desain UX dasar dan
                    lanjutan, Hal ini menyebabkan situs web kurang berkonversi
                    (kehilangan penjualan & prospek), lebih sulit digunakan,
                    lebih sulit dikonsumsi & dipahami, dan secara keseluruhan
                    kurang efektif.
                </p>
                <p>
                    Tujuan saya adalah menjadikan Internet tempat yang lebih
                    indah dan bermanfaat, satu situs web dalam satu waktu.
                </p>
                <p>
                    Profesional yang memahami pentingnya sebuah bisnis memiliki
                    website yang menarik, mudah digunakan, desain bagus, serta
                    responsif. Semua kredibilitas kami dapat anda lihat di
                    website ini sendiri, blog post yang benar-benar expertise,
                    dan klien yang puas.
                </p>

                <p>
                    Secara umum layanan berlangganan sudah termasuk biaya
                    pembuatan, nama domain, hosting/server, optimasi mobile,
                    optimasi SEO (agar website Anda masuk ke mesin pencarian),
                    pengoperasian dan pemeliharaan.{" "}
                    <Link href="/pricing" className="font-semibold">
                        Lihat apa yang kami lakukan untuk meningkatkan bisnis
                        Anda
                    </Link>
                    .
                </p>

                <p>
                    bikin website sekarang juga bersama kami. sangat cocok untuk
                    semua bisnis dan yayasan (portal berita, website company
                    profile atau website perusahaan, sekolah, etc)
                </p>
            </div>
            <Foo />
        </>
    )
}

export default About
