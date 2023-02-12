"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import useReadingProgress from "./Progress"

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const completion = useReadingProgress()
    return (
        <>
            <nav className="md:flex justify-between w-full fixed z-10 px-16 py-4 items-center">
                <div className="flex justify-between items-center">
                    <Image
                        src="/logo.png"
                        alt="VArtz"
                        width="32"
                        height="32"
                        className="object-fit"
                    />
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col md:hidden cursor-pointer"
                    >
                        <span
                            className={`block bg-grayweb h-0.5 w-8 mb-2 rounded-md transition-all ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`block bg-grayweb h-0.5 w-8 mb-2 rounded-md transition-all ${
                                isOpen ? "rotate-45" : "rotate-0"
                            }`}
                        />
                        <span
                            className={`block bg-grayweb h-0.5 w-8 rounded-md transition-all ${
                                isOpen
                                    ? "-rotate-45 -translate-y-[13px]"
                                    : "rotate-0"
                            }`}
                        />
                    </div>
                </div>
                <ul
                    className={`flex text-center pt-6 pb-2 gap-8 md:hidden items-center transition-all ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <li>
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600 after:contents after:absolute after:w-2 after:h-4 after:bg-slate-800"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <ul
                    className={`text-center gap-8 py-4 md:py-0 justify-between transition-all hidden md:flex`}
                >
                    <li>
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600 after:contents after:absolute after:w-2 after:h-4 after:bg-slate-800"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>

            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className={`fixed bottom-0 w-full transition-transform duration-150 h-1 bg-mediumSpringGreen`}
            ></span>
        </>
    )
}

export default Nav
