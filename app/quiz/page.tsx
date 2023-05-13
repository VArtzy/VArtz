"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
    FaRegArrowAltCircleRight,
    FaRegArrowAltCircleLeft,
} from "react-icons/fa"
import { BsWhatsapp } from 'react-icons/bs'

const OptinForm = () => {
    const [step, setStep] = useState(1)
    const [type, setType] = useState("")
    const [tujuan, setTujuan] = useState("")
    const [points, setPoints] = useState(0)
    const [budget, setBudget] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // Kirim data ke API atau formulir Google di sini
        console.log({ type, points, budget })
    }

    const handleNext = () => {
        if (step === 2 || step === 3 || step === 4) {
            if (step === 2 && type) {
                setStep(step + 1)
                setMessage("")
            } else if (step === 3 && tujuan) {
                setStep(step + 1)
                setMessage("")
            } else if (step === 4 && budget) {
                setStep(step + 1)
                setMessage("")
            } else {
                setMessage("Anda belum mengisi pilihan yang tersedia!")
            }
window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
        } else {
            setStep(step + 1)
            setMessage("")
        }
    }

    const handleTypeChange = (e: any) => {
        setType(e.target.value)
        setMessage("")

        // Hitung poin berdasarkan jenis situs web yang dipilih
        let newPoints = 0
        if (e.target.value === "sales-page") {
            newPoints = 10
        } else if (e.target.value === "squeeze-page") {
            newPoints = 15
        } else if (e.target.value === "web-page") {
            newPoints = 20
        }
        setPoints(points + newPoints)
    }

    const handleTujuanChange = (e: any) => {
        setTujuan(e.target.value)
        setMessage("")
        // Hitung poin berdasarkan jenis situs web yang dipilih
        let newPoints = 0
        if (e.target.value === "informasi") {
            newPoints = 6
        } else if (e.target.value === "konversi") {
            newPoints = 8
        } else if (e.target.value === "tidak-yakin") {
            newPoints = 6
        }
        setPoints(points + newPoints)
    }

    const handleBudgetChange = (e: any) => {
        setBudget(e.target.value)
        setMessage("")
        // Hitung poin berdasarkan jenis situs web yang dipilih
        let newPoints = 0
        if (e.target.value === "199") {
            newPoints = 6
        } else if (e.target.value === "599") {
            newPoints = 8
        } else if (e.target.value === "999") {
            newPoints = 10
        }
        setPoints(points + newPoints)
    }

    return (
        <form
            className="pt-24 px-4 mb-8 mx-auto max-w-3xl text-center flex flex-col items-center justify-center gap-2"
            onSubmit={handleSubmit}
        >
            {step === 1 && (
                <>
                    <h2 className="text-3xl font-bold mb-2">
                        Dapatkan website promo terbatas terbaik yang sesuai dengan tujuan yang
                        Anda miliki
                    </h2>
                    <p className="text-xl mb-8">
                        Hanya dengan mengikuti kuis kami. Luangkan sedikit waktu
                        untuk hasil yang maksimal. Hanya butuh 1-5 menit atau
                        Anda bisa mengerjakannya kapan saja. Mulai kuis dengan
                        menekan tombol mulai dibawah ini.
                    </p>

                    <button
                        className="text-xl"
                        type="button"
                        onClick={handleNext}
                    >
                        Mulai <FaRegArrowAltCircleRight className="inline" />
                    </button>
                </>
            )}
            {step === 2 && (
                <>
                    <h3 className="text-xl">1 dari 3 langkah</h3>
                    <h2 className="text-3xl font-bold">Langkah 1</h2>
                    <p className="text-2xl font-semibold mb-8">
                        Pilih jenis situs web yang Anda butuhkan:
                    </p>
                    <div className="flex flex-wrap gap-16">
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${type === "sales-page"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="sales-page"
                                checked={type === "sales-page"}
                                onChange={handleTypeChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Halaman Penjualan{" "}
                                <span className="text-lg opacity-50">
                                    *Best Seller
                                </span>
                            </p>
                            <p>
                                Halaman yang dikhususkan untuk terjadinya
                                transaksi dan biasanya hanya terdiri dari 1
                                halaman. Contohnya seperti halaman penjualan
                                produk herbal, personal portofolio singkat,
                                penjualan buku dan lain lain.
                            </p>
                        </label>
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${type === "squeeze-page"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="squeeze-page"
                                checked={type === "squeeze-page"}
                                onChange={handleTypeChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Halaman Prospek
                            </p>
                            <p>
                                Halaman yang menunjukan prospek untuk bisnis
                                Anda. Contohnya seperti halaman email
                                collecting, formulir khusus, squeeze page, blog,
                                forum.
                            </p>
                        </label>
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${type === "web-page"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="web-page"
                                checked={type === "web-page"}
                                onChange={handleTypeChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Halaman web
                            </p>
                            <p>
                                webpage penuh dan terdiri berbagai banyak
                                halaman dan section. Cotohnya seperti toko
                                online, binis/bussiness web atau personal,
                                portofolio web yang panjang, blog.
                            </p>
                        </label>
                    </div>

                    {message && (
                        <h3 className="text-rose-500 text-xl text-center text-semibold">
                            {message}
                        </h3>
                    )}

                    <div className="flex justify-between w-full mt-8">
                        <button
                            className="text-xl"
                            type="button"
                            onClick={() => setStep(step - 1)}
                        >
                            <FaRegArrowAltCircleLeft className="inline" />{" "}
                            Kembali{" "}
                        </button>
                        <button
                            className="text-xl"
                            type="button"
                            onClick={handleNext}
                        >
                            Selanjutnya{" "}
                            <FaRegArrowAltCircleRight className="inline" />
                        </button>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <h3 className="text-xl">2 dari 3 langkah</h3>
                    <h2 className="text-3xl font-bold">Langkah 2</h2>
                    <p className="text-2xl font-semibold mb-8">
                        Pilih tujuan Anda memiliki web:
                    </p>
                    <div className="flex flex-wrap gap-16">
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${tujuan === "informasi"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="informasi"
                                checked={tujuan === "informasi"}
                                onChange={handleTujuanChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Informasi
                            </p>
                            <p>
                                Membagikan berbagai informasi seperti promo,
                                tentang perusahaan, prospek dan apa yang
                                dikerjakan perusahaan, social proof, unique
                                selling proposition, blog, artikel, dsb.
                            </p>
                        </label>
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${tujuan === "konversi"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="konversi"
                                checked={tujuan === "konversi"}
                                onChange={handleTujuanChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Konversi
                            </p>
                            <p>
                                Konversi adalah tindakan yang dilakukan
                                pengguna. Contohnya seperti mengklik button pada
                                halaman, melakukan telepon dan pendaftaraan.
                            </p>
                        </label>
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${tujuan === "tidak-yakin"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="tidak-yakin"
                                checked={tujuan === "tidak-yakin"}
                                onChange={handleTujuanChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Tidak yakin
                            </p>
                            <p>
                                Saya tidak yakin dengan tujuan saya membuat
                                website atau tujuan saya tidak ada di pilihan
                                ini. Lanjutkan diskusi saat wa nanti.
                            </p>
                        </label>
                    </div>

                    {message && (
                        <h3 className="text-rose-500 text-xl text-center text-semibold">
                            {message}
                        </h3>
                    )}

                    <div className="flex justify-between w-full mt-8">
                        <button
                            className="text-xl"
                            type="button"
                            onClick={() => setStep(step - 1)}
                        >
                            <FaRegArrowAltCircleLeft className="inline" />{" "}
                            Kembali{" "}
                        </button>
                        <button
                            className="text-xl"
                            type="button"
                            onClick={handleNext}
                        >
                            Selanjutnya{" "}
                            <FaRegArrowAltCircleRight className="inline" />
                        </button>
                    </div>
                </>
            )}

            {step === 4 && (
                <>
                    <h3 className="text-xl">3 dari 3 langkah</h3>
                    <h2 className="text-3xl font-bold">Langkah 3</h2>
                    <p className="text-2xl font-semibold mb-8">
                        Budget atau uang yang Anda miliki untuk pembuatan:
                    </p>
                    <div className="flex flex-wrap gap-16">
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${budget === "199"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="199"
                                checked={budget === "199"}
                                onChange={handleBudgetChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Rp. 599.000 - 999.000
                            </p>
                            <p>
                                Anda memiliki budget sebesar 599.000 sampai
                                999.000. Pilih pilihan ini jika budget Anda ada
                                di range ini. Perlu diperhatikan hukum
                                value-for-money atau ada-kualitas-ada-harga
                                berlaku. Biasanya akan cocok dengan paket basic.
                            </p>
                        </label>
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${budget === "599"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="599"
                                checked={budget === "599"}
                                onChange={handleBudgetChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Rp. 999.000 - 1.799.000
                            </p>
                            <p>
                                Anda memiliki budget sebesar 999.000 sampai
                                1.799.000. Pilih pilihan ini jika budget Anda ada
                                di range ini. Biasanya akan cocok dengan paket
                                basic/custom.
                            </p>
                        </label>
                        <label
                            className={`p-8 outline outline-black rounded-md transition-all hover:outline-grayweb ${budget === "999"
                                ? "bg-green-500 text-white outline-grayweb"
                                : ""
                                }`}
                        >
                            <input
                                className="hidden"
                                type="radio"
                                value="999"
                                checked={budget === "999"}
                                onChange={handleBudgetChange}
                            />
                            <p className="font-semibold text-xl mb-2">
                                Diatas 2 Juta
                            </p>
                            <p>
                                Anda memiliki budget diatas 1.799.000 sampai
                                5.000.000. Pilih pilihan ini jika budget Anda
                                ada di range ini. Biasanya akan cocok dengan
                                paket custom/super.
                            </p>
                        </label>
                    </div>

                    {message && (
                        <h3 className="text-rose-500 text-xl text-center text-semibold">
                            {message}
                        </h3>
                    )}

                    <div className="flex justify-between w-full mt-8">
                        <button
                            className="text-xl"
                            type="button"
                            onClick={() => setStep(step - 1)}
                        >
                            <FaRegArrowAltCircleLeft className="inline" />{" "}
                            Kembali{" "}
                        </button>
                        <button
                            className="text-xl"
                            type="button"
                            onClick={handleNext}
                        >
                            Selanjutnya{" "}
                            <FaRegArrowAltCircleRight className="inline" />
                        </button>
                    </div>
                </>
            )}

            {step === 5 && (
                <div>
                    <h2 className="text-3xl font-bold mb-2">
                        Selamat! Anda telah menyelesaikan quiz dan mendapatkan
                        diagnosis pilihan paket.
                    </h2>
                    <p className="text-2xl mb-8">
                        Pilihan paket untuk Anda adalah{" "}
                        <span className="font-bold">
                            {points < 25
                                ? "BASIC"
                                : points > 25 && points < 32
                                    ? "CUSTOM"
                                    : points > 32
                                        ? "SUPER"
                                        : "belum terdifinisi"}
                        </span>
                        .
                    </p>

                    <p>
                        Perlu diketahui diagnosis tidak 100% akurat. Silahkan
                        konsultasi atau pesan dengan tombol di untuk
                        menvalidasi.
                    </p>
<a
                        id="konversi_konsultasi_web"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl bg-mediumSpringGreen text-snow px-4 py-2 rounded-md mb-4"
                        type="submit"
                        href={`https://wa.me/6289611905599?text=Hai%20min,%20saya%ingin%20membuat%20website%20paket%20${points < 25
                            ? "BASIC"
                            : points > 25 && points < 32
                                ? "CUSTOM"
                                : points > 32
                                    ? "SUPER"
                                    : "belum terdifinisi"
                            }%20dengan%20tipe%20${type === "sales-page"
                                ? "halaman%20penjualan"
                                : type === "squeeze-page"
                                    ? "halaman%20prospek"
                                    : "halaman%20web"
                            }%20dan%20tujuan%20${tujuan}%20serta%20budget%20minimal%20sebesar%20Rp.%20${budget === '199' ? '599' : budget === '599' ? '999' : '1.799'}.000.`}
                    >
                        <BsWhatsapp className="inline" /> Lakukan Pemesanan Sekarang
                    </a>

                    <div className="md:flex justify-between w-full mt-8">
                        <button
                            className="text-xl mb-4"
                            type="button"
                            onClick={() => setStep(step - 1)}
                        >
                            {" "}
                            <FaRegArrowAltCircleLeft className="inline" />
                            Kembali
                        </button>
                        <Link href="/pricing" className="block text-xl mb-4">
                            Kembali ke layanan & harga
                            <FaRegArrowAltCircleRight className="inline" />
                        </Link>
                    </div>
                </div>
            )}
        </form>
    )
}

export default OptinForm
