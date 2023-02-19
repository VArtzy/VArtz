import { FaCheck, FaWhatsapp } from "react-icons/fa"
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
                    color: "white",
                }}
                className="max-w-6xl mx-auto px-8"
                id="pricing"
            >
                <h2 className="text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb">
                    Mulai Buat. Dari Sekarang.
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
                            <h4 className="text-xl font-bold">Rp 199.000</h4>
                            <p>/Bulan</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp 999.000</h4>
                            <p>/Tahun</p>
                        </div>
                        <p className="text-xs">*Harga akan naik nantinya.</p>
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
                            <p className="text-xs">Hosted + Domain (.com!)</p>
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
                            href="https://wa.me/6289628196420?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%BASIC.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
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
                            <h4 className="text-xl font-bold">Rp 1.999.000</h4>
                            <p>/Tahun</p>
                        </div>
                        <p className="text-xs">*Harga akan naik nantinya.</p>
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
                            href="https://wa.me/6289628196420?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%SUPER.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
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
                            <h4 className="text-xl font-bold">Rp 299.000</h4>
                            <p>/Bulan</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp 999.000</h4>
                            <p>/Tahun</p>
                        </div>
                        <p className="text-xs">*Harga akan naik nantinya.</p>
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
                            <p className="text-xs">Konsultasi Lebih</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="p-1 bg-springGreen rounded-full mb-2">
                                <FaCheck className="text-snow text-xs" />
                            </div>
                            <p className="text-xs">Revisi maks. 2 kali</p>
                        </div>
                        <a
                            href="https://wa.me/6289628196420?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website%20dengan%20pilihan20%paket20%CUSTOM.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                            className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow"
                        >
                            <FaWhatsapp className="inline" /> Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
            <Foo />
        </>
    )
}

export default Pricing
