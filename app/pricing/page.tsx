import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { FaCheck, FaWhatsapp, FaPager, FaReact } from "react-icons/fa"
import { MdScreenSearchDesktop, MdOutlineDesignServices } from "react-icons/md"
import { SiGoogleads, SiPagespeedinsights, SiWritedotas } from "react-icons/si"
import Foo from "../../components/Foo"
const Pricing = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2em",
                }}
                className="max-w-6xl mx-auto px-8"
                id="pricing"
            >
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl w-full font-bold mt-24 mb-8">
                        Layanan Kami
                    </h1>
                    <h2 className="text-2xl md:text-3xl w-full mb-8">
                        <span className="font-semibold">
                            Kami akan membantu Anda mengirimkan Website yang
                            lebih baik, lebih cepat.
                        </span>{" "}
Tim ahli kami memiliki pengalaman dalam mengembangkan solusi digital yang optimal dan efesien untuk berbagai kebutuhan bisnis.
                    </h2>
                    <ul className="mb-24 flex flex-col gap-2">
                        <p>Layanan kami:</p>
                        <li>
                        <span className="font-semibold">Konsultasi:</span>{" "}
                        Konsultasi satu-dengan-satu dengan ahli Website
                        (Webmaster) dan perbaikan bug
                        </li>
                        <li>
                        <span className="font-semibold">
                        Pengembangan Website:
                        </span>{" "}
                        Dari ide sampai online. Proses penulisan, desain, pengembangan sampai online
                        </li>
                        <li>
                        <span className="font-semibold">
                        Desain Produk dan UI & UX:
                        </span>{" "}
                        Dari kebutuhan sampai spesifikasi. Solusi dari nol dengan desain mengagumkan, fungsi tepat guna – untuk pengalaman digital customer yang berarti.
                        </li>
                        <li>
                        <span className="font-semibold">
                        Sistem Informasi, Manajemen:
                        </span>{" "}
                        Solusi sistem digital end-to-end dari UI/UX, frontend, backend hingga deployment. Desain produk kami memadukan estetika yang ramping dan inovatif dengan fungsionalitas yang disesuaikan, didorong oleh visi yang penuh semangat untuk menciptakan pengalaman pengguna yang mulus yang membuat perbedaan.
                        </li>
                        <li>
                            <span className="font-semibold">
                                Monetisasi Website:
                            </span>{" "}
                            Pembuatan halaman penjualan produk digital (e-book, template, kursus online). Integrasi payment gateway (Duitku, Midtrans, PayPal, dll.) untuk transaksi otomatis.
                        </li>
                            <li>
                            <span className="font-semibold">
                            WebAI:
                            </span>{" "}
                            Integrasi AI dengan website (chatbot, object detection, image classification, generative AI, agent AI)
                            </li>
                            <li>
                            <span className="font-semibold">
                            Pengembangan & Integrasi Modul Kustom:
                            </span>{" "}
                            Integrasi dengan cloud service. Pengembangan UI, animasi, gerakan, atau modul asli khusus untuk Website yang ada. Embed feed Instagram, YouTube, atau portofolio secara otomatis. Pembuatan landing page untuk promosi layanan/produk. Pemasangan Google Analytics / Google Tag Manager, dsb.
                            </li>
                        <li>
                            <span className="font-semibold">
                                Redesign Website:
                            </span>{" "}
                            Punya Website lama yang udah usang? jaga website tetap modern dengan tren dan teknologi terbaru agar tetap relevan dalam mendukung bisnis Anda dengan perbaikan UI/UX desain, kode refactoring yang dirancang dengan baik, peningkatan keandalan, peningkatan skalabilitas, dan keamanan yang lebih baik.
                        </li>
                            <li>
                            <span className="font-semibold">
                            Optimasi Performa:
                                </span>{" "}
                            Waktu mulai, Animasi, dan pengoptimalan kelancaran
                            keseluruhan untuk Website yang ada
                            </li>
                    </ul>
                </div>

                <h2
                    id="extension"
                    className="text-3xl text-center lg:text-4xl font-bold text-grayweb"
                >
                    Perluas Fungsionalitas Situs Web dengan Ekstensi
                </h2>
                <p className="text-grayweb text-xl text-center mb-8 max-w-prose">
                    Dengan ekstensi yang tepat, situs web-mu akan menjadi lebih
                    baik dalam hal kinerja, tampilan, penjualan, keamanan, dan
                    pengalaman pengguna.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-16">
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <MdOutlineDesignServices className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">Design Figma</h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 100K
                        </h4>
                        <p>
                            Dengan adanya ekstensi ini, proses desain dapat
                            jelas dan diatur secara lebih efisien. Berbeda
                            dengan tanpa ekstensi, situs akan didesign secara
                            langsung bersama proses development.
                        </p>
                    </div>
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <FaPager className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">
                                Halaman/Section Tambahan
                            </h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 50K
                        </h4>
                        <p>
                            Tambahkan konteks dan konten baru di situs Anda biar
                            pembeli dan visitor lebih mengerti konteks dan
                            tujuan bisnis Anda.
                        </p>
                    </div>
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <SiGoogleads className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">
                                Search Engine Marketing
                            </h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 200K
                            + Budget
                        </h4>
                        <p>
                            Perbanyak channel marketing bisnis anda dengan jasa
                            SEM atau ADS. Biaya termasuk operasi, pembuatan
                            iklan dan laporan berkala.
                        </p>
                    </div>
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <MdScreenSearchDesktop className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">
                                Search Engine Optimization
                            </h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 500K
                            / bln
                        </h4>
                        <p>
                            Buat Bisnis Online Anda menjadi sustain dengan SEO.
                            layanan yang ditawarkan oleh para ahli digital
                            marketing untuk membantu meningkatkan visibilitas
                            sebuah website di mesin pencari seperti Google,
                            Bing, dan Yahoo.
                        </p>
                    </div>
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <FaReact className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">
                                Super Interactive
                            </h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 100K
                        </h4>
                        <p>
                            Situs lebih interaktif. Buat pengalaman terbaik di
                            situs Anda. Parralax dan efek tingkat tinggi
                            lainnya.
                        </p>
                    </div>
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <SiPagespeedinsights className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">Speedy Task</h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 50K
                        </h4>
                        <p>
                            Hasilkan Situs dengan Page Speed paling optimal.
                            Seluruh media terutama gambar akan dioptimasi dengan
                            compress, crop dan lazy load. Pelajari{" "}
                            <Link
                                className="underline"
                                href="/blog/website-lebih-cepat-dengan-teknik-ini"
                            >
                                Teknik membuat website lebih cepat{" "}
                            </Link>
                        </p>
                    </div>
                    <div className="py-2 px-4 outline-offset-2 outline-2 outline-springGreen rounded bg-snow text-grayweb">
                        <div className="flex justify-center align-center gap-2 mb-2">
                            <div className="p-1 rounded-full mb-2">
                                <SiWritedotas className="text-mediumSpringGreen text-xl" />
                            </div>
                            <h3 className="text-xl font-bold">Super Copy</h3>
                        </div>
                        <h4 className="text-2xl text-center font-bold mb-4">
                            <span className="text-lg">Start from</span> Rp 50K
                        </h4>
                        <p>
                            Hasilkan Copy dan Tulisan dengan persuasi dan
                            penjualan paling optimal. Seluruh copy atau tulisan
                            akan dibuat dan dipikirkan secara matang
                            dioptimalkan untuk menuju tujuan konversi Anda.
                            Peningkatan hasilpun tak terbendung lagi,
                            peningkatan akusisi bisa meningkat hingga 200%.
                            Pelajari
                            <Link
                                className="underline"
                                href="/blog/copywriting-untuk-pemula"
                            >
                                membuat copywriting optimal{" "}
                            </Link>
                        </p>
                    </div>
                </div>

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

                <h2 className="text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb max-w-4xl">
                    Hemat! Dapatkan Harga Promo Terbaik yang Terbatas Untuk Hari
                    Ini.
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
                            <h4 className="text-xl font-bold">Rp 599.000</h4>
                            <p>/Tahun</p>
                        </div>
                        <p className="text-xs">*Harga promo terbatas.</p>
                        <p className="text-xs mb-4">
                            Perpanjangan hanya dikenai 50%
                        </p>
                        <p className="text-md mb-4">
                            Landing Page dengan 1 halaman serta maks. 5 Section.
                            Cocok untuk produk/portofolio.
                        </p>
                        <div className="flex gap-4 items-center text-center lg:text-left">
                            <div className="p-1 bg-springGreen rounded-full mb-2">
                                <FaCheck className="text-snow text-xs" />
                            </div>
                            <p className="text-xs">Informasi Tersampaikan</p>
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
                            <p className="text-xs">Responsive + Interaktif</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="p-1 bg-springGreen rounded-full mb-2">
                                <FaCheck className="text-snow text-xs" />
                            </div>
                            <p className="text-xs">
                                <strong>Bonus Spesial</strong> Hosting + Domain
                                (.com!) <strong>senilai 309rb</strong>
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
                                Rp 5.009.000
                            </h4>
                            <p>/Tahun</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp 1.799.000</h4>
                            <p>/Tahun</p>
                        </div>
                        <p className="text-xs">*Harga promo terbatas.</p>
                        <p className="text-xs mb-4">
                            Perpanjangan hanya dikenai 80%
                        </p>
                        <p className="text-md mb-4">
                            Company Profile Website. Cocok dengan bisnis skala
                            besar untuk menunjukan berbagai visi, misi dan
                            inovasi dari bisnis kamu.
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
                            <p className="text-xs">Bussiness Based Website</p>
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
                            id="konversi_penjualan_web_custom"
                            href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%CUSTOM.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
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
                            <h4 className="text-xl font-bold">Rp 999.000</h4>
                            <p>/Tahun</p>
                        </div>
                        <p className="text-xs">*Harga promo terbatas.</p>
                        <p className="text-xs mb-4">
                            Perpanjangan hanya dikenai 50%
                        </p>
                        <p className="text-md mb-4">
                            Custom Website. Cocok dengan pembuatan Website
                            blogging, web App, Kartu Undangan, Email/Newsletter.
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
                            <p className="text-xs">Berbagai Jenis Website</p>
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
                    <p className="text-grayweb text-sm">
                        Banyak pilihan jasa pembuatan website yang ditawarkan
                        dengan harga berbeda di Google. VArtz mungkin tidak
                        termurah, apalagi paling mahal. Tetapi menawarkan value
                        for money terbaik dengan web berkualitas dan support
                        yang baik, sehingga Anda bisa fokus pada pengembangan
                        bisnis Anda.
                    </p>
                    <span>
                        Bingung memilih?
                        <Link
                            id="konversi_quiz_web"
                            href="/contact"
                            className="text-grayweb text-center md:px-0 block md:inline"
                        >
                            {" "}
                            diagnosis dengan kuis singkat untuk pilihan yang
                            optimal <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </div>
            </div>
            <Foo />
        </>
    )
}

export default Pricing
