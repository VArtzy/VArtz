import Link from "next/link"
import React from "react"

const Nav: React.FC = () => {
    return (
        <>
            <nav className="w-full fixed z-10 px-16 py-4">
                <ul className="flex md:justify-between">
                    <div className="">
                        <h2 className="text-2xl text-grayweb">VArtz</h2>
                    </div>
                    <div className="flex gap-8">
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
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Nav
