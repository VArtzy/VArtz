import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BiMailSend } from "react-icons/bi"
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa"

const Foo: React.FC = () => {
    return (
        <footer className="mt-16 text-snow bg-grayweb py-16 px-16">
            <div className="lg:flex justify-between gap-16">
                <div className="lg:w-1/3 mb-8">
                    <div className="flex items-center gap-4">
                        <Image
                            width="32"
                            height="32"
                            src="/logo.png"
                            alt="VArtz Logo"
                            className="rounded-md"
                        />
                        <h2 className="text-2xl text-snow mb-2">VArtz</h2>
                    </div>
                    <p>
                        Buat Website untuk meningkatkan peluang bisnis online
                        kamu. Kami akan siap menerima konsultasi untuk pembuatan
                        dari kamu.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl mb-2">Sitemap</h3>
                    <ul className="mb-2">
                        <div className="flex gap-8">
                            <li>
                                <Link className="text-snow" href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-snow" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    href="/terms-condition"
                                >
                                    S&K
                                </Link>
                            </li>
                            <li>
                                <Link className="text-snow" href="/about">
                                    About
                                </Link>
                            </li>
                        </div>
                    </ul>

                    <h3 className="text-xl mb-2">Niche & Frequent</h3>
                    <ul className="mb-2">
                        <div className="lg:flex gap-8">
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/terms-condition#faq"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/pricing"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/blog#newsletter"
                                >
                                    Newsletter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/#cara-order"
                                >
                                    Cara Order
                                </Link>
                            </li>
                        </div>
                    </ul>
                    <ul className="mb-2">
                        <div className="lg:flex gap-8">
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/#testimonial"
                                >
                                    Testimonial
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/#portofolio"
                                >
                                    Portofolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/#feature"
                                >
                                    Feature
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/about"
                                >
                                    Contact
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className="lg:w-1/3 mb-8">
                    <h3 className="text-xl mb-2">Contacts</h3>
                    <div className="flex items-center">
                        <FaLocationArrow className="inline" />
                        <p>
                            Jl. Gatot Subroto No.105, Kemlayan, Kec. Serengan,
                            Kota Surakarta, Jawa Tengah 57111, Indonesia.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/6289628196420"
                        className="bg-springGreen px-4 py-2 rounded inline-block text-snow mb-2"
                    >
                        <FaWhatsapp className="inline" /> Chat Whatsapp
                    </a>
                    <p>
                        <BiMailSend className="inline" />{" "}
                        farrelnikoson@gmail.com
                    </p>
                </div>
            </div>
            <p className="text-lg text-center">
                Copyright © 2023. <Link href="/">VArtz</Link>. All rights
                reserved.
            </p>
        </footer>
    )
}

export default Foo
