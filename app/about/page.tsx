import Foo from "../../components/Foo"
const About = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <h1 className="text-3xl md:text-4xl w-full font-bold mt-16">
                    About Page
                </h1>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Yuk cari tahu tentang kami dibawah ini...
                </h2>
                <p>
                    merupakan personil jasa yang menyediakan berbagai macam
                    layanan IT mulai dari Pembuatan Website seperti toko online,
                    company profile, portofiolio, personal dan lainnya,
                    Pengembangan Aplikasi lengkap disertai pemeliharaan atau
                    maintenance berkala.
                </p>

                <p>
                    Secara umum layanan berlangganan sudah termasuk biaya
                    pembuatan, nama domain, hosting/server, optimasi mobile,
                    optimasi SEO (agar website Anda masuk ke mesin pencarian),
                    pengoperasian dan pemeliharaan.
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
