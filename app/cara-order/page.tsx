import Link from "next/link"
import Foo from "../../components/Foo"
const CaraOrder = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2em",
                }}
                className="max-w-6xl mx-auto px-8 py-16"
                id="cara-order"
            >
                <h2 className="text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb">
                    Buat website{" "}
                    <span className="underline">
                        Order jasa semudah mengklik tombol di layar ponsel atau
                        komputer Anda
                    </span>
                    .
                </h2>
                <p className="text-grayweb text-xl text-center mb-8">
                    Gak perlu pusing mikirin gimana buat bikinnya, Anda hanya
                    perlu ikut intsruksi saja. Sisanya waktu anda fokus kepada
                    bisnis anda. Udah gak perlu ribet & lama.
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
                                Pastinya anda selalu bisa{" "}
                                <a
                                    id="konversi_konsultasi_web"
                                    href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%buatkan%20saya%20website?"
                                    className="underline"
                                >
                                    {" "}
                                    Konsultasi dengan kami{" "}
                                </a>
                                {"  "}
                                untuk mendapatkan hasil dan solusi terbaik yang
                                anda inginkan. Jangan lepaskan kesempatan ini!
                                {"  "}
                                <span className="font-semibold">
                                    Lakukan pemesanan di platform whatsapp,
                                    pembayaran secara tunai atau down payment
                                    (DP) minimal 50% dengan{" "}
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
                                Setelah melakukan pembayaran dan menentukan apa
                                yang akan dibuat. Anda dapat melakukan
                                pengecekan website anda secara berkala.
                                Nantinya, web akan dihosting sementara. Anda
                                akan selalu bisa datang/visit ke website selama
                                masa pengembangan. Memperbaiki apa yang perlu
                                diperbaiki.{"  "}
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
                                Lalu setelah progress development selesai, anda
                                dapat melakukan evaluasi dan revisi untuk
                                memperbaiki. Akhirnya website dipublikasikan ke
                                internet sesuai dengan domain yang anda inginkan
                                serta siap untuk mengembangkan bisnis anda.
                                {"  "}
                            </p>
                        </div>
                    </li>
                </ol>
                <Link
                    href="/pricing"
                    className="inline-block text-xl text-center mx-auto rounded-lg text-snow bg-springGreen px-8 py-4"
                >
                    {" "}
                    Lihat Harga{" "}
                </Link>
                <a
                    id="konversi_konsultasi_web"
                    href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                    className="inline-block text-xl text-center mx-auto rounded-lg bg-snow text-springGreen px-8 py-4"
                >
                    {" "}
                    Pesan Sekarang{" "}
                </a>
            </div>
            <Foo />
        </>
    )
}

export default CaraOrder
