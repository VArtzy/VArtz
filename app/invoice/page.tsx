import { FaCheck } from "react-icons/fa"

const Invoice = ({ searchParams }: any) => {
    return (
        <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
            <FaCheck className="text-snow text-4xl" />
            <h1 className="text-3xl md:text-4xl w-full font-bold mt-24">
                <span className="text-springGreen">Terimakasih</span>{" "}
                {searchParams.nama} atas pembelian Anda 🤗!
            </h1>
            <h2>
                Pemesanan Anda akan segera diproses dan dikerjakan. Silahkan cek
                berkala progress website Anda di{" "}
                <a className="underline" href={`https://${searchParams.url}`}>
                    https://{searchParams.url}
                </a>{" "}
                atau{" "}
                <a
                    className="underline"
                    href={`https://wa.me/6289628196420?text=Hai,%20min.%20Progress%20website%20saya%20(https://${searchParams.url})%20bagaimana?`}
                >
                    kontak kami
                </a>{" "}
                lebih lanjut. Setelah proses development sudah jadi dan
                disetujui, baru web akan diberi ke domain yang diinginkan.
            </h2>
            <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                Detail:
            </h2>
            <p>Paket yang dipilih: </p>
            <div className="lg:grid grid-cols-[60%_1fr] gap-8 mb-8">
                {searchParams.paket === "basic" && (
                    <div className="bg-snow text-grayweb shadow-md mb-4 rounded p-4 text-center lg:text-left">
                        <h3 className="text-lg font-bold">Basic</h3>
                        <h4 className="font-bold mb-4">Start From</h4>
                        <hr className="mb-4" />
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp 199.000</h4>
                            <p>/Bulan</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp 599.000</h4>
                            <p>/Tahun</p>
                        </div>
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
                    </div>
                )}
                <div className="">
                    <p>
                        Total:{" "}
                        <span className="font-semibold">
                            Rp. {searchParams.harga}
                        </span>
                    </p>
                    {searchParams.dp && (
                        <p>
                            Pemb. DP:{" "}
                            <span className="font-semibold">
                                Rp.{searchParams.dp}
                            </span>
                        </p>
                    )}
                    {searchParams.nama && (
                        <p>
                            Nama:{" "}
                            <span className="font-semibold">
                                {searchParams.nama}
                            </span>
                        </p>
                    )}
                </div>
            </div>
            <p className="text-xs text-center italic mb-4">
                Merasa ada kesalahan?{" "}
                <a href="" className="underline">
                    Hubungi Kami
                </a>
                .
            </p>
            <p className="text-sm mb-4">
                Kami sangat senang dapat membantu Anda untuk mempermudah
                mendapatkan web impian. Bagikan jika anda merasa terbantu oleh
                kami. Kami juga siap untuk membantu kamu jika ada masalah & ada
                penambahan lainnya. Sekali lagi terimakasih!
            </p>
        </div>
    )
}

export default Invoice
