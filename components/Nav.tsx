"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import useReadingProgress from "./Progress"

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const completion = useReadingProgress()
    return (
        <>
            <nav className="md:flex justify-between w-full fixed z-10 px-16 py-4 items-center">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="VArtz"
                                width="32"
                                height="32"
                                className="object-fit"
                            />
                        </Link>
                        <div className="">
                            <h2 className="text-xl text-grayweb font-bold tracking-widest">
                                VArtz
                            </h2>
                            <p className="text-[10px]">Web Services</p>
                        </div>
                    </div>
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
                    className={`flex flex-wrap text-center pt-8 pb-2 gap-8 justify-center md:hidden items-center transition-all ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600 after:contents after:absolute after:w-2 after:h-4 after:bg-slate-800"
                            href="/"
                        >
                            Home
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600 after:contents after:absolute after:w-2 after:h-4 after:bg-slate-800"
                            href="/pricing"
                        >
                            Services
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/blog"
                        >
                            Blog
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/work"
                        >
                            Works
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/terms-condition"
                        >
                            Terms
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/about"
                        >
                            About
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            id="konversi_quiz_web"
                            className="text-lg text-snow px-4 py-2 rounded-md bg-mediumSpringGreen transition-all hover:bg-springGreen"
                            href="/quiz"
                        >
                            Dapatkan Web{" "}
                            <BsArrowRight className="inline font-bold" />
                        </Link>
                    </li>
                </ul>
                <ul
                    className={`text-center justify-center items-center gap-8 py-4 md:py-0 transition-all hidden md:flex`}
                >
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600 after:contents after:absolute after:w-2 after:h-4 after:bg-slate-800"
                            href="/"
                        >
                            Home
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600 after:contents after:absolute after:w-2 after:h-4 after:bg-slate-800"
                            href="/pricing"
                        >
                            Services
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/blog"
                        >
                            Blog
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/work"
                        >
                            Works
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/terms-condition"
                        >
                            Terms
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-grayweb transition-all hover:text-slate-600"
                            href="/about"
                        >
                            About
                        </Link>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-slate-600"></span>
                    </li>
                    <li className="relative w-max two">
                        <Link
                            className="text-lg text-snow px-4 py-2 rounded-md bg-mediumSpringGreen transition-all hover:bg-springGreen"
                            href="/quiz"
                        >
                            Dapatkan Web{" "}
                            <BsArrowRight className="inline font-bold" />
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
