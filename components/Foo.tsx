import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BiMailSend } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import { FaLocationArrow, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa"

const Foo: React.FC = () => {
    return (
        <footer className="mt-16 text-snow">
            <div className="lg:flex justify-between pt-16 pb-8 px-16 bg-[#2d2d2d] gap-16">
                <div className="lg:w-1/3 mb-8">
                    <div className="flex items-center gap-4">
                        <Image
                            width="32"
                            height="32"
                            src="/logo.png"
                            alt="VArtz Logo"
                            className="rounded-md invert"
                        />
                        <h2 className="text-2xl text-snow mb-2">VArtz</h2>
                    </div>
                    <p>
                        Buat Website untuk meningkatkan peluang bisnis online
                        kamu. Kami akan siap menerima konsultasi untuk pembuatan
                        dari kamu.
                    </p>
                    <Link
                        id="konversi_quiz_web"
                        className="text-lg text-snow px-4 py-2 rounded-md inline-block mt-2 bg-mediumSpringGreen transition-all hover:bg-springGreen"
                        href="/quiz"
                    >
                        Dapatkan Web{" "}
                        <BsArrowRight className="inline font-bold" />
                    </Link>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl mb-2">Sitemap</h3>
                    <div className="mb-2">
                        <ul className="flex flex-wrap gap-2">
                            <li>
                                <Link className="text-snow" href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-snow" href="/pricing">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="text-snow" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="text-snow" href="/work">
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    href="/terms-condition"
                                >
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link className="text-snow" href="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <h3 className="text-xl mb-2">Niche & Frequent</h3>
                    <div className="mb-2">
                        <ul className="lg:flex gap-8">
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
                                    href="/cara-order"
                                >
                                    Order Process
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <ul className="lg:flex gap-8">
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
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd7QAPpeOGmEJX4DlJge-XMWQ8QnZXjPYCnw1R9r7JS0h1ubg/viewform"
                                >
                                    Feedback
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-snow"
                                    scroll={false}
                                    href="/pricing"
                                >
                                    Services
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
                        </ul>
                    </div>
                </div>

                <div className="lg:w-1/3 mb-8">
                    <h3 className="text-xl mb-2">Contacts</h3>
                    <div className="flex gap-2 items-center">
                        <FaLocationArrow className="inline" />
                        <p>
                            Jl. Gatot Subroto No.105, Kemlayan, Kec. Serengan,
                            Kota Surakarta, Jawa Tengah 57111, Indonesia.
                        </p>
                    </div>
                    <a
                        id="konversi_konsultasi_web"
                        href="https://wa.me/6289611905599"
                        className="bg-springGreen px-4 py-2 hover:bg-mediumSpringGreen transition-all rounded inline-block text-snow mb-2"
                    >
                        <FaWhatsapp className="inline" /> Chat Whatsapp
                    </a>
                    <p>
                        <BiMailSend className="inline" />{" "}
                        admin@vartz.web.id
                    </p>
                    <a className="mr-2" href="https://instagram.com/@vartz.web" aria-label="instagram">
                        <FaInstagram className="inline" size={32} />
                    </a>
                    <a href="https://tiktok.com/@vartz.web" aria-label="tiktok">
                        <FaTiktok className="inline" size={32} />
                    </a>
                </div>
            </div>
            <div className="bg-[#252525] w-full flex flex-wrap gap-2 justify-between px-16 py-8">
                <p className="text-lg">
                    Copyright © 2025 | <Link href="/">VArtz</Link> All rights
                    reserved
                </p>
                <p className="text-lg">
                    Dibuat dengan passion <span className="text-red-600">❤️</span> oleh{" "}
                    <Link href="/">vartz.web.id</Link>
                </p>
            </div>
        </footer>
    )
}

export default Foo
