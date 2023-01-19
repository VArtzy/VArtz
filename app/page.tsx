"use client"

import type { NextPage } from "next"
import ParallaxRapper from "../components/Parallax"

const Home: NextPage = () => {
    return (
        <>
            <div className="max-w-5xl px-4 tracking-wider leading-relaxed">
                <ParallaxRapper></ParallaxRapper>
            </div>
        </>
    )
}

export default Home
