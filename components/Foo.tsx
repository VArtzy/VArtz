import Link from "next/link"
import React from "react"
import { BiMailSend } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"

const Foo: React.FC = () => {
    return (
        <footer className="mt-16 lg:flex justify-between text-snow bg-grayweb py-16 px-16">
            <div className="lg:w-1/3 mb-8">
                <h2 className="text-2xl text-snow mb-2">VArtz</h2>
                <p>
                    Buat Website untuk meningkatkan peluang bisnis online kamu.
                    Kami akan siap menerima konsultasi untuk pembuatan dari
                    kamu.
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
                            <Link className="text-snow" href="/about">
                                About
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl mb-2">Contacts</h3>
                <a
                    href="https://wa.me/6289628196420"
                    className="bg-springGreen px-4 py-2 rounded inline-block text-snow mb-2"
                >
                    <FaWhatsapp className="inline" /> Chat Whatsapp
                </a>
                <p>
                    <BiMailSend className="inline" /> farrelnikoson@gmail.com
                </p>
            </div>
        </footer>
    )
}

export default Foo
