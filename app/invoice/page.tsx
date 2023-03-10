"use client"

import Link from "next/link"
import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { useSearchParams } from "next/navigation"
import { FaCheck } from "react-icons/fa"

const Invoice = () => {
    const search = useSearchParams()

    const nama = search.get("nama")
    const harga = search.get("harga")
    const dp = search.get("dp")
    const paket = search.get("paket")
    const url = search.get("url")
    const durasi = search.get("durasi")
    const domain = search.get("domain")

    const divRef = useRef<HTMLDivElement>(document.createElement("div"))

    const handleClick = () => {
        // Create a new jsPDF instance
        const doc = new jsPDF()

        // Use html2canvas to capture the div element as an image
        html2canvas(divRef.current).then(function (canvas) {
            // Add the image to the PDF
            doc.setFontSize(24)
            doc.text(`Invoice Jasa Web - Atas Nama ${nama}`, 0, 25)
            const imgData = canvas.toDataURL("image/png")
            doc.addImage(imgData, "PNG", 15, 40, 180, 240)

            // Save the PDF
            doc.save(`invoice-jasa-web-${nama}.pdf`)
        })
    }

    return (
        <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
            <FaCheck className="text-snow text-4xl" />
            <h1 className="text-3xl md:text-4xl w-full font-bold mt-24">
                <span className="text-springGreen">Terimakasih</span> {nama}{" "}
                atas pembelian Anda 🤗!
            </h1>
            <h2>
                Pemesanan Anda akan segera diproses dan dikerjakan. Silahkan cek
                berkala progress website Anda di{" "}
                <a className="underline" href={`https://${url}`}>
                    https://{url}
                </a>{" "}
                atau{" "}
                <a
                    className="underline"
                    href={`https://wa.me/6289628196420?text=Hai,%20min.%20Progress%20website%20saya%20(https://${url})%20bagaimana?`}
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
            <div
                ref={divRef}
                className="lg:grid grid-cols-[60%_1fr] gap-8 mb-16"
            >
                {paket === "basic" && (
                    <div className="bg-snow text-grayweb shadow-md mb-4 rounded p-4 text-center lg:text-left">
                        <h3 className="text-lg font-bold">Basic</h3>
                        <h4 className="font-bold mb-4">Start From</h4>
                        <hr className="mb-4" />
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp {harga}</h4>
                            <p>/{durasi}</p>
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
                {paket === "super" && (
                    <div className="bg-turquoise text-snow mb-4 shadow-md rounded p-4 text-center lg:text-left scale-105">
                        <h3 className="text-lg font-bold">Super</h3>
                        <h4 className="font-bold mb-4">Start From</h4>
                        <hr className="mb-4" />
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp {harga}</h4>
                            <p>/{durasi}</p>
                        </div>
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
                    </div>
                )}
                {paket === "custom" && (
                    <div className="bg-snow mb-4 text-grayweb shadow-md rounded p-4 text-center lg:text-left">
                        <h3 className="text-lg font-bold">Custom</h3>
                        <h4 className="font-bold mb-4">Start From</h4>
                        <hr className="mb-4" />
                        <div className="flex justify-center lg:justify-start">
                            <h4 className="text-xl font-bold">Rp {harga}</h4>
                            <p>/{durasi}</p>
                        </div>
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
                    </div>
                )}
                <div className="">
                    <p>
                        Total:{" "}
                        <span className="font-semibold">Rp. {harga}</span>
                    </p>
                    {dp && (
                        <p>
                            Pemb. DP:{" "}
                            <span className="font-semibold">Rp.{dp}</span>
                        </p>
                    )}
                    {nama && (
                        <p>
                            Nama: <span className="font-semibold">{nama}</span>
                        </p>
                    )}
                    {durasi && (
                        <p>
                            Durasi:{" "}
                            <span className="font-semibold">{durasi}</span>
                        </p>
                    )}
                    {domain && (
                        <p>
                            Domain:{" "}
                            <span className="font-semibold">{domain}</span>
                        </p>
                    )}
                </div>
            </div>

            <button
                className="bg-springGreen mx-auto px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block mt-4 text-snow"
                onClick={handleClick}
            >
                Cetak PDF
            </button>

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

            <p className="mb-4">
                Selanjutnya ngapain? Anda bisa{" "}
                <Link className="underline" href="/blog">
                    belajar bisnis online dari blog kami
                </Link>
                <p className="text-sm">
                    (Secara otomatis terdaftar ke newsletter blog. jika anda
                    tidak ingin silahkan{" "}
                    <a
                        className="underline"
                        href={`https://wa.me/6289628196420?text=Unsubscribe%20newsletter%20blog%20vartz%20atas%20nama:%20${nama}`}
                    >
                        unsubscribe
                    </a>
                    .)
                </p>
            </p>
        </div>
    )
}

export default Invoice
