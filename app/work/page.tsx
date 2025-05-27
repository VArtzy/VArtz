import Link from "next/link"
import Foo from "../../components/Foo"
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"
import { useState } from "react"
const Ork = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className="px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl mb-8 md:text-4xl w-full font-bold mt-24">
                        Works Page
                    </h1>
                    <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                        Kami bangga dengan hubungan klien dan situs web yang
                        telah kami bangun
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-16">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-slate-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                CUSTOM
                            </span>
                            <span className="bg-emerald-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute top-[30px] tracking-widest">
                                COMPLETED
                            </span>
                            <Image
                                width={300}
                                height={350}
                                className="w-full aspect-[9/16] bg-top object-cover"
                                src="/img/eb13.webp"
                                alt="Buku Ngooding"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="font-bold text-xl mb-4">
                                Buku Ngooding: solusi sistem otomatisasi monetisasi penjualan buku
                            </div>
                            <p className="mb-8 text-gray-600 text-base">
                                Website order system yang reliabel, menyenangkan bagi ratusan customer yang berbelanja. Desain proses bisnis jelas, UI/UX ciamik disertai pengembangan berkelanjutan!
                            </p>
                            <Link
                                href="/blog"
                                className="block mb-2 text-grayweb"
                            >
                                Bagaimana kami membangunnya{" "}
                                <BsArrowRight className="inline" />
                            </Link>
                            <a
                                target="_blank"
                                href="https://buku.ngooding.com"
                                className="mb-2 text-grayweb"
                            >
                                Lihat langsung web{" "}
                                <BsArrowRight className="inline" />
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #order
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #automation
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #custom
                            </span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-slate-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                BASIC
                            </span>
                            <span className="bg-emerald-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute top-[30px] tracking-widest">
                                COMPLETED
                            </span>
                            <Image
                                width={300}
                                height={350}
                                className="w-full aspect-[9/16] bg-top object-cover"
                                src="/img/eb2.webp"
                                alt="First Media"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="font-bold text-xl mb-4">
                                First Media: membangun yang terbaik diantara
                                terbaik
                            </div>
                            <p className="mb-8 text-gray-600 text-base">
                                Website statis berisi informasi dan penjualan
                                layanan jasa internet fenomenal first media.
                                Terciptalah pengalaman penguna terbaik dan
                                microintercation yang menyenangkan.
                            </p>
                            <Link
                                href="/blog/portofolio-proses-first-media"
                                className="block mb-2 text-grayweb"
                            >
                                Bagaimana kami membangunnya{" "}
                                <BsArrowRight className="inline" />
                            </Link>
                            <a
                                target="_blank"
                                href="https://belifirstmedia.com"
                                className="mb-2 text-grayweb"
                            >
                                Lihat langsung web{" "}
                                <BsArrowRight className="inline" />
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #static
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #landingpage
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #sales
                            </span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-slate-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                SUPER
                            </span>
                            <span className="bg-emerald-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute top-[30px] tracking-widest">
                                ON PROGRESS
                            </span>
                            <Image
                                width={300}
                                height={350}
                                className="w-full aspect-[9/16] bg-top object-cover"
                                src="/img/eb4.webp"
                                alt="Joga Computer"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="font-bold text-xl mb-4">
                                Joga Computer: Lika-liku pengembangan sebuah Web
                                App
                            </div>
                            <p className="mb-8 text-gray-600 text-base">
                                Aplikasi web super
                                inventoris-payroll-e-commerce. Didesign untuk
                                mempermudah dan menikmati keindahan bagi
                                pengguna dan admin website.
                            </p>
                            <Link
                                href="blog/lika-liku-pengembangan-web-app"
                                className="block mb-2 text-grayweb"
                            >
                                Beginilah cerita kita{" "}
                                <BsArrowRight className="inline" />
                            </Link>
                            <a
                                target="_blank"
                                href="https://www.joga-computer.com"
                                className="mb-2 text-grayweb"
                            >
                                Lihat langsung web{" "}
                                <BsArrowRight className="inline" />
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #website
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #application
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #inventory
                            </span>
                        </div>
                    </div>
                    {isActive && <div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-slate-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                CUSTOM
                            </span>
                            <span className="bg-emerald-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute top-[30px] tracking-widest">
                                COMPLETED
                            </span>
                            <Image
                                width={300}
                                height={350}
                                className="w-full aspect-[9/16] bg-top object-cover"
                                src="/img/eb5.webp"
                                alt="Mie Bandung Singosaren"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="font-bold text-xl mb-4">
                                Mie Bandung Singosaren: secercah harapan untuk
                                UMKM Indonesia
                            </div>
                            <p className="mb-8 text-gray-600 text-base">
                                Web Delivery App sekaligus landing page yang
                                dibangun untuk Food & Beverages asli Solo sejak
                                1991. Digitalisasi adalah kunci bagi pemilik F&B
                                di era digital.
                            </p>
                            <a href="#" className="block mb-2 text-grayweb">
                                Kami dan UMKM{" "}
                                <BsArrowRight className="inline" />
                            </a>
                            <a
                                target="_blank"
                                href="https://kuliner.joga-computer.com"
                                className="mb-2 text-grayweb"
                            >
                                Lihat langsung web{" "}
                                <BsArrowRight className="inline" />
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #deliveryapp
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #landingpage
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #UMKM
                            </span>
                        </div>
                    </div>
                    </div>}
                </div>
                <Link
                    href="/quiz"
                    className="block text-grayweb text-lg text-center mt-4 px-8"
                >
                    Mulai Kisah Anda Bersama Kami{" "}
                    <BsArrowRight className="inline" />
                </Link>
                <a
                    className="mx-auto text-md rounded bg-springGreen hover:bg-mediumSpringGreen transition px-4 py-2"
                    onClick={() => setIsActive(true)}
                >
                    Lihat Lebih Banyak
                </a>
            </div>
            <Foo />
        </>
    )
}

export default Ork
