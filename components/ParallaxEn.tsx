import type { NextPage } from "next"
import Image from "next/image"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useEffect, useRef, useState } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import {
    BsArrowRight,
    BsFillJournalBookmarkFill,
    BsWhatsapp,
} from "react-icons/bs"
import { BiDevices } from "react-icons/bi"
import { SiMaterialdesignicons } from "react-icons/si"
import {
    FaKissWinkHeart,
    FaRegGrinHearts,
    FaRegWindowRestore,
    FaArrowUp,
    FaBolt,
    FaInfo,
} from "react-icons/fa"
import { useInView } from "react-intersection-observer"

import Link from "next/link"
import Accordion from "./Accor"
import Foo from "./Foo"

const ParallaxRapperEn: NextPage = () => {
    const { ref, entry } = useInView({ trackVisibility: true, delay: 100 })

    const ParallaxRef = useRef<IParallax>(null)

    const alignCenter = { display: "flex", alignItems: "center" }
    const props = useSpring({
        to: { x: 0, opacity: 1 },
        from: { x: -40, opacity: 0 },
        delay: 200,
    })

    const [styles, api] = useSpring(() => ({
        from: { y: 50, opacity: 1 },
    }))

    useEffect(() => {
        api({
            y: -10,
            opacity: 1,
        })
    }, [])

    const [flip, set] = useState(false)

    const words = [
        "E-Commerce",
        "Custom",
        "Landing Page",
        "            ",
        "Application",
        "Company Profile",
        "Interactive",
        "Responsive",
        "Premium",
    ]

    const { scroll } = useSpring({
        scroll: (words.length - 1) * 50,
        from: { scroll: 0 },
        reset: true,
        reverse: flip,
        delay: 1500,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return (
        <>
            <Parallax
                ref={ParallaxRef}
                pages={19}
                style={{ top: "0", left: "0" }}
            >
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFFBFE",
                    }}
                >
                    <main className="grid lg:grid-cols-2 px-8 place-items-center min-h-screen">
                        <h1 className="sr-only">
                            Professional Website Development Services to Power All Your Businesses Workflow
                        </h1>
                        <div className="">
                                <h2 className="text-3xl md:text-4xl w-full lg:text-right font-bold lg:mb-4 text-grayweb mt-36 lg:mt-0">
                                    Build
                                </h2>
                            <animated.div
                                onClick={() => ParallaxRef.current?.scrollTo(5)}
                                className="lg:flex gap-2 hover:cursor-pointer lg:relative right-4"
                                style={props}
                            >
                            <animated.div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: 55,
                                overflow: "hidden",
                            }}
                            scrollTop={scroll}
                            >
                            {words.map((word, i) => (
                                <div
                                key={`${word}_${i}`}
                                style={{
                                    width: "100%",
                                    height: i === 8 ? 60 : 50,
                                }}
                                >
                                <h2 className="text-3xl text-turquoise md:text-4xl font-bold">
                                {word} Website
                                </h2>
                                </div>
                            ))}
                            </animated.div>
                            </animated.div>
                            <animated.div style={props}>
                                <p className="max-w-lg mb-4 lg:text-lg font-medium">
Pro Web Service: Simple Setup, Performance Guarantee + Free Domain & Honest Pricing.
                                </p>
                                <p className="max-w-lg mb-8">
Enjoy an exclusive, budget-friendly website like no other. Designed for you and small-to-medium businesses craving an effective, user-friendly, and stunning online presence. Easy to use and loved by customers.
                                </p>
                            </animated.div>
                            <animated.div
                                style={{
                                    ...styles,
                                }}
                            >
                                <div className="flex gap-4">
                                    <a
href="https://wa.me/6289611905599?text=Hi%20VArtz%20Team!%20I%20need%20consultation%20about%20website%20development.%20When%20are%20you%20available%20to%20chat?"
                                        id="konversi_konsultasi_web"
                                        className="inline-block text-md rounded bg-springGreen hover:bg-mediumSpringGreen transition px-4 py-2 text-white"
                                    >
                                        Saya Ambil Harga Promo
                                    </a>
                                    <a
href="https://wa.me/6289611905599?text=Hi%20team,%20website%20consultation%20please!"
                                        id="konversi_konsultasi_web"
                                        className="flex items-center gap-2 text-md rounded bg-mediumSpringGreen hover:bg-SpringGreen transition px-4 py-2 text-snow"
                                    >
                                        <BsWhatsapp />
                                        Konsultasi Gratis
                                    </a>
                                </div>
                            </animated.div>
                        </div>
                        <div className="">
                            <div className="card-swiper">
                                <div className="card-groups">
                                    <div
                                        className="card-group"
                                        data-index="0"
                                        data-status="active"
                                    >
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                        <div className="little-card card"></div>
                                        <div className="big-card card"></div>
                                    </div>
                                </div>
                                <div className="card-swiper-buttons">
                                    <button
                                        id="hate-button"
                                        aria-label="aku suka"
                                    >
                                        <FaRegGrinHearts className="text-mediumSpringGreen" />
                                    </button>
                                    <button
                                        id="love-button"
                                        aria-label="ini keren"
                                    >
                                        <FaKissWinkHeart />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1, end: 4 }}
                    style={{ ...alignCenter, justifyContent: "flex-start" }}
                    className="flex-col lg:flex-row px-8 z-50"
                    id="portofolio"
                >
                    <div
                        className={`text-3xl md:text-4xl text-center text-grayweb w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 mt-16 lg:mt-0`}
                    >
                        <h2 className="">
                            We{" "}
                            <span className="text-turquoise">
                                {`${
                                    entry?.isIntersecting
                                        ? "Scale"
                                        : "Build"
                                }`}
                            </span>
                        </h2>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={1.5}
                    style={{ ...alignCenter }}
                    className="items-center justify-center lg:justify-end"
                >
                    <div
                        className={`items-center justify-center`}
                    >
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                            Landing Page
                            </span>{" "}
                            First Media
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video">
                            <Image
                                alt="First media web thumbail"
                                src="/img/eb2.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/15] lg:aspect-video"
                            ></Image>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2.5}
                    speed={1.5}
                    style={{ ...alignCenter }}
                    className="items-center justify-center lg:justify-end"
                >
                    <div ref={ref} className={`items-center justify-center`}>
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                                E-Commerce
                            </span>{" "}
                            Joga Computer
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/13] lg:aspect-video">
                            <Image
                                alt="Joga Computer web thumbail"
                                src="/img/eb4.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/13] lg:aspect-video"
                            ></Image>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.5}
                    speed={1.5}
                    style={{ ...alignCenter }}
                    className="items-center justify-center lg:justify-end"
                >
                    <div className={`items-center justify-center max-w-[640px]`}>
                        <h2 className="text-grayweb text-center lg:text-left text-xl mb-4 px-8">
                            <span className="text-mediumSpringGreen">
                                Company Profile
                            </span>{" "}
                            Mie Bandung Singosaren
                        </h2>
                        <div className="browser-mockup with-url shadow-lg aspect-[9/13] lg:aspect-video">
                            <Image
                                alt="Mie Bandung web thumbail"
                                src="/img/eb5.webp"
                                width={500}
                                height={700}
                                className="w-full object-cover object-top aspect-[9/13] lg:aspect-video"
                            ></Image>
                        </div>

                        <a
                            href="/work"
                            className="text-grayweb px-8 block md:inline mt-4"
                        >
                        Proud architects of exceptional websites and even better client partnerships.
                            <BsArrowRight className="inline" />
                        </a>
                        <a
                            href="/blog/lika-liku-pengembangan-web-app"
                            className="text-grayweb px-8 block md:inline"
                        >
                            Explore Our Workflow Process{" "}
                            <BsArrowRight className="inline" />
                        </a>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                >
                    <h2 className="max-w-3xl text-3xl text-center lg:text-4xl font-bold mt-8">
                    Ditch Outdated Business Methods, Start Build a Modern Cutting-Edge Website
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <p className="mt-8">
We&apos;re passionate to building solutions with precisely the latest technology.
Have you noticed? Every time you access social media accounts on Facebook, Instagram, TikTok or YouTube, they always direct you to visit their Website. Why do these businesses create Websites? What benefits do they gain?
Here&apos;s why you need professional website development services and should create your website today.
                            </p>

                            <ul className="text-sm flex flex-col gap-2 list-disc mt-4">
                                <li>
                                A website is your digital storefront to showcase your products/business/yourself to the world.
                                </li>
                                <li>
                                Build your business credibility through authentic branding – from theme styles and colors to typography – crafting a professional brand identity.
                                    </li>
                                <li>
                                A website or landing page communicates your exact information to your audience.
                                </li>
                                <li>
Your customers will always check your business information through your website. Now imagine if you don&apos;t have one - or already do but it&apos;s unappealing.
                                </li>
                                    <li>Automate business processes like sales and other interactive features through information systems or payment gateways.</li>
                            </ul>
                            </div>
                        <div className="">
                            <div className="browser-mockup with-url shadow-lg aspect-[9/15] lg:aspect-video">
                            <Image
                                alt="Performa website"
                                src="/img/eb12.webp"
                                width={464}
                                height={229}
                                className="w-full object-cover object-top aspect-[9/15] lg:aspect-video"
                            ></Image>
                            </div>
                            <p className="mt-4 lg:ml-8 text-xs">
In many cases, websites fail to implement basic and advanced UX (User Experience) design principles. This results in low conversion rates, lost sales and leads, plus poor usability and comprehension.
                            </p>
                            <p className="mt-4 lg:ml-8 text-xs">
That&apos;s why, as someone committed to making the internet a better and more useful place, I&apos;m dedicated to improving one website at a time through proper UX design practices.
                            </p>
                        </div>
                    </div>
                            <div>
                                <Link
                                    href="/blog"
                                    className="bg-mediumSpringGreen px-4 py-2 hover:bg-springGreen transition-all rounded inline-block mt-4 text-snow mr-4"
                                >
                                    <BsFillJournalBookmarkFill className="inline" />{" "}
                                    Read Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-mediumSpringGreen px-4 py-2 hover:bg-springGreen transition-all rounded inline-block mt-4 text-snow"
                                >
                                    <FaInfo className="inline" />
                                    About Us
                                </Link>
                                </div>
                    <span className="block text-center text-slate-800">
                        DIY or website builders seem easy... 
                        <Link
                            href="/blog/membuat-web-sendiri-vs-jasa-vs-builder"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            until you need real results <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={6}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={7}
                    speed={2}
                    className="bg-mediumSpringGreen"
                />

                <ParallaxLayer
                    offset={7}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                        color: "white",
                        height: "auto",
                    }}
                    className="max-w-3xl mx-auto px-8"
                    id="feature"
                >
                    <h2 className="pt-4 text-3xl text-center lg:text-4xl font-bold mt-16">
                    6+ Years Delivering Reliable Web Solutions
                    </h2>

                    <p className="text-xl mb-8 text-center">
Building websites since 2018 for diverse industries – proven reliable under high traffic & thousands of visitors. Our dedicated webmasters excel in full-stack development: APIs, frontend/backend, databases, SEO, UI/UX, cybersecurity, and AI integration. We champion clear communication and transparent development.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <BiDevices /> Mobile Freindly
                            </h3>
                            <p>
We specialize in responsive web design. Your website will deliver optimal performance across desktops, tablets, and mobile devices – reaching more users effectively.
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <SiMaterialdesignicons /> Desain Ekslusif
                            </h3>
                            <p>
We stay ahead of UI/UX trends to craft EXCLUSIVE website designs – perfectly tailored to your brand identity with cutting-edge aesthetics. 100% original creations.
                            </p>
                        </div>
                        <div className="shadow-md rounded bg-grayweb p-4">
                            <h3 className="text-lg font-bold mb-4">
                                <FaRegWindowRestore /> Sesuai Kebutuhan
                            </h3>
                            <p>
We follow a proven method for gathering detailed specifications and requirements, building websites tailored to your exact needs. Let&apos;s discuss your ideas together.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-md rounded bg-grayweb p-4">
                        <h3 className="text-lg font-bold mb-4">
                            <FaBolt />
                            Modern, Lightning-fast Websites
                        </h3>
                        <p>
                        We specialize in performance optimization and Core Web Vitals. Our websites are blazing fast - you&apos;ll never lose customers to slow loading again.
                        </p>
                    </div>
                    <span className="block text-center text-slate-800">
                        Start with a free consultation and
                        <Link
href="https://wa.me/6289611905599?text=Hi%20VArtz%20Team!%20Available%20for%20a%20quick%20consultation?"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            Experience our expertise{" "}
                            <BsArrowRight className="inline" />
                        </Link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={8}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={9}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-16">
                        <div className="">
                            <Image
                                src="/img/online.webp"
                                width={640}
                                height={900}
                                alt="Onlinekan bisnis Anda dengan mudah"
                                className="object-fit rounded-md"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-grayweb">
                                Ready to build Your{" "}
                                <span className="text-turquoise">
                                    Business Website & Landing Page
                                </span>{" "}
                                Tailored to Your Exact Needs
                            </h2>
                            <p className="text-grayweb text-xl mb-16">
                            We are professional web developers specializing in high-performance websites and conversion-optimized landing pages. Our tailored solutions help businesses strengthen their online presence with reliable, fully-functional websites and high-converting landing experiences.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="">
                                    <div className="bg-grayweb text-center mb-2 text-snow px-1 py-1 rounded-xl">
                                    Affordable & Flexible
                                    </div>
                                    <h3 className="text-lg text-semibold mb-4">
                                    Don&apos;t let digital business needs intimidate you
                                    </h3>
                                    <p>
We provide customizable IT solutions with flexible, budget-friendly pricing. 
  Get a quality site effortlessly — enjoy premium results and {" "}
                                        <Link
                                            href="/pricing"
                                            className="underline"
                                        >
                                        satisfying service
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div className="">
                                    <div className="bg-grayweb text-center mb-2 text-snow px-1 py-1 rounded-xl">
                                    Expert & Skilled
                                    </div>
                                    <h3 className="text-lg text-semibold mb-4">
                                    A dedicated team of skilled professionals
                                    </h3>
                                    <p>
We&apos;re passionate about what we do. With years of industry experience, we&apos;ve helped numerous clients across various industries achieve their goals. Feel free to explore our blog or {" "}
                                        <a
                                            id="konversi_konsultasi_web"
                                            className="underline"
href="https://wa.me/6289611905599?text=Hi%20team!%20I'm%20interested%20in%20website%20development.%20Here's%20my%20info%3A%0A%0AName%3A%0ABusiness%20Type%3A%0A%0A%28Please%20fill%20above%20details%20then%20send%29"
                                        >
                                            contact us
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={10}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={11}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8"
                    id="cara-order"
                >
                    <h2 className="text-3xl text-center text-grayweb lg:text-4xl font-bold mt-12">
                    Get a Website Done—Fast & Hassle-Free.
                    </h2>
                    <p className="text-grayweb text-xl text-center mb-8 max-w-prose">
                    No need to stress about how to build it - just follow our lead.
                        Meanwhile, you focus on what matters: your business.
                    </p>
                    <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:overflow-hidden">
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    1
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2]"></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900">
                                Order & Consultation
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400">
                                Under One Hour
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
                                    You can always request{" "}
                                    <a
                                        id="konversi_konsultasi_web"
href="https://wa.me/6289611905599?text=Hi%20team%2C%20can%20you%20build%20a%20website%20for%20me%3F"
                                        className="underline"
                                    >
                                        {" "}
                                        our consultation support{" "}
                                    </a>
to modify specifications and requirements, helping determine the best SLA, solutions, and outcomes for your website. Our team will then analyze and brainstorm based on your needs and specs. Finally, we&apos;ll prepare and send a project proposal with pricing based on the features and specifications requiring your approval.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    2
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] "></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 ">
                                Progress Checks
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 ">
                                Anytime Access
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
After completing payment and finalizing project requirements, you can regularly monitor your website&apos;s development progress. We&apos;ll host a temporary development version for your review. You&apos;ll have full access to check the website throughout the development phase, request necessary adjustments, and make payments according to the agreed proposal terms.
                                </p>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-springGreen text-snow font-bold rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    3
                                </div>
                                <div className="hidden sm:flex w-full bg-mediumSpringGreen h-0.5 scale-x-[2] "></div>
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-semibold text-gray-900 ">
                                Completion & Launch
                                </h3>
                                <time className="block mb-6 text-sm font-normal leading-none text-gray-400 ">
                                Ten-Minute Deployment
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
Once development is complete, you&apos;ll review the website and request final adjustments as needed. After settling any remaining payments and completing the handover process, we&apos;ll publish your website to your preferred domain in just 10 minutes. Your business-ready site will then go live, complete with optional after-sale maintenance and support services.
                                </p>
                            </div>
                        </li>
                    </ol>
                    <span className="block text-center text-slate-800">
                        money-back guarantee
                        <link
                            href="/terms-condition#faq"
                            className="text-grayweb block mt-4 md:inline"
                        >
                            {" "}
                            if results don&apos;t match expectations{" "}
                            <BsArrowRight className="inline" />
                        </link>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={12}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                offset={13}
                speed={0.5}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2em",
                    color: "white",
                    height: "auto",
                }}
                className="max-w-3xl mx-auto px-8"
                id="testimonial"
                >
                <h2
                className="pt-4 text-3xl text-center lg:text-4xl font-bold mt-8 text-grayweb"
                onClick={() => ParallaxRef.current?.scrollTo(0)}
                >
                What people say about VArtz
                </h2>

                <p className="text-xl mb-8 text-grayweb text-center">
                They recognize our unique approach - transforming perspectives in app development to captivate users and grow businesses through IT solutions.
                    </p>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                <div className="flex gap-4 items-center mb-4">
                <Image
                src="/img/yusuf.jpeg"
                width={50}
                height={50}
                alt="Yusuf"
                className="object-fit rounded-full"
                />
                <div>
                <h3 className="text-lg font-bold tracking-widest">Yusuf Sutanto</h3>
                <h4 className="text-md">Manager @ Joga Computer</h4>
                </div>
                </div>
                <p>
                If you&apos;re serious about online business and digital marketing including e-commerce, build your website here immediately. For my recommendation, VArtz are exceptional webmasters - experts in design, content, and technical execution.
                    </p>
                </div>
                <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                <div className="flex gap-4 items-center mb-4">
                <Image
                src="/img/ahmad.jpeg"
                width={50}
                height={50}
                alt="Ahmad"
                className="object-fit rounded-full"
                />
                <div>
                <h3 className="text-lg font-bold tracking-widest">Ahmad Rosid</h3>
                <h4 className="text-md">Founding Engineer @ Companio.ai</h4>
                </div>
                </div>
                <p>
                Everything has been on track so far... you&apos;ve made an excellent impression. Hopefully next year we can grow even more together. It&apos;s been a pleasure working with true professionals. Now we&apos;re just awaiting the outcomes of our ongoing projects.
                    </p>
                </div>
                <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                <div className="flex gap-4 items-center mb-4">
                <Image
                src="/img/nenti.jpg"
                width={50}
                height={50}
                alt="Nenti"
                className="object-fit rounded-full"
                />
                <div>
                <h3 className="text-lg font-bold tracking-widest">Nenti Sunenti</h3>
                <h4 className="text-md">Marketing @ First Media</h4>
                </div>
                </div>
                <p>
                They perfectly understood and translated our company&apos;s needs. Our internal team also gained valuable insights throughout the development process. Extremely professional and always prioritizing client satisfaction. It&apos;s rare to find such exceptional web developers.
                    </p>
                </div>
                <div className="shadow-md rounded border border-grayweb text-grayweb p-8">
                <div className="flex gap-4 items-center mb-4">
                <Image
                src="/img/janni.png"
                width={50}
                height={50}
                alt="Janni"
                className="object-fit rounded-full"
                />
                <div>
                <h3 className="text-lg font-bold tracking-widest">Janni Chandra</h3>
                <h4 className="text-md">Owner @ Mie Bandung Singosaren</h4>
                </div>
                </div>
                <p>
                The website development service delivered our business site on time and efficiently, and they&apos;re always willing to help update our website when needed. Highly responsive and fantastic to work with. I strongly recommend them to anyone needing a new website.
                    </p>
                </div>
                </div>

                <span className="block text-center text-slate-800">
                We only create what customers love.
                    <Link
                href="/work"
                className="text-grayweb block mt-4 md:inline"
                >
                {" "}
                stunning designs, dedicated engineering, absolute reliability{" "}
                <BsArrowRight className="inline" />
                </Link>
                </span>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={14}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={15}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2em",
                    }}
                    className="md:hidden max-w-6xl mx-auto px-8 text-grayweb"
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={16}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "2em"
                    }}
                    className="max-w-3xl mx-auto text-grayweb px-8"
                >
                <h2 id="faq" className="text-3xl text-center md:text-4xl w-full font-bold">
                FAQs
                </h2>
                <p className="text-grayweb text-xl text-center max-w-prose">
                Frequently asked questions
                </p>
                <div className="accordion w-full">
                <Accordion
                title="What is VArtz web development service?"
                content="We&apos;re a professional IT service provider offering comprehensive solutions including website development (e-commerce, company profiles, portfolios, personal sites), custom application development, and ongoing maintenance services."
                />
                <Accordion
                title="What&apos;s included in your web development service?"
                content="Our subscription packages include intellectual property rights, custom design, copywriting consultation, development, domain registration, hosting/server setup, mobile optimization, SEO setup (to get your website indexed), deployment, and ongoing maintenance."
                />
                <Accordion
                title="What materials do I need to provide?"
                content="First and foremost: your website content (all text, paragraphs, images, pages) and functional requirements (contact forms, Instagram feeds, etc.). Also provide brand assets like logos, color codes, and fonts. Don&apos;t worry if you don&apos;t have these yet - we can help develop your brand identity based on your preferences."
                    />
                <Accordion
                title="Do you offer any guarantees?"
                content="We succeed when your business succeeds. Every package includes our satisfaction guarantee to ensure the final product meets your expectations. We also provide free fixes for any technical errors that may occur."
                    />
                <Accordion
                title="What payment methods do you accept?"
                content="We accept BCA bank transfers and Gopay. Payment details will be provided after order confirmation."
                />
                <Accordion
                title="Do you offer website extensions?"
                content="Yes! We provide various website extensions including Google Search Console registration, Open Graph meta tags for social media/WhatsApp, etc. *Some extensions may incur additional charges."
                    />
                <Accordion
                title="How can I grow my business?"
                content="We grow alongside your business. Check out our regularly updated blog for relevant, timely business growth strategies (automatically included for all VArtz clients!)."
                    />
                <Accordion
                title="Can you code my existing design?"
                content="Absolutely! If you have designs in PDF or Figma format, we&apos;ll happily convert them to HTML/CSS. Enjoy a 50K discount for this service!"
                    />
                <Accordion
                title="Can I use my own template?"
                content="Yes! Just send us your template and we&apos;ll customize and deploy it for you. Receive a 50K discount when providing your own template."
                    />
                <Accordion
                title="What does maintenance include?"
                content="Our maintenance ensures your website stays online, secure, and protected from hacking attempts."
                />
                <Accordion
                title="Have other questions?"
                content="Don&apos;t hesitate to ask! Consult with us below - 100% FREE. We&apos;re committed to finding the perfect SOLUTION for your business!"
                    />
                </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={17}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                    }}
                    className="bg-springGreen md:justify-center"
                >
<div className="max-w-6xl mx-auto px-8 grid md:grid-cols-[420px_1fr] place-items-center">
    <Image
        src="/media/pesawat.png"
        width={420}
        height={420}
        alt="Contact us"
        className="object-fit md:w-full rounded-md"
    />
    <div className="flex flex-col gap-8 md:gap-16">
        <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready for an Amazing Website?
            </h2>
        </div>
        <p className="text-xl md:text-2xl">
            Your ideas matter to us. Share your vision, discuss your needs (free), and discover how we can bring it to life!
        </p>
        <a
            id="web_consultation_conversion"
            href="https://wa.me/6289611905599?text=Hi%20team,%20I'm%20interested%20in%20website%20development.%20Here's%20my%20information%3A%0A%0AName%3A%0ABusiness%20Field%3A%0A%0A%28Please%20fill%20the%20above%20details%20then%20send%29"
            className="inline-block text-xl text-center rounded-lg bg-snow text-springGreen px-8 py-4 hover:bg-springGreen hover:text-snow transition-colors"
        >
            Let&apos;s Talk
        </a>
    </div>
</div>
<div
    onClick={() => ParallaxRef.current?.scrollTo(0)}
    className="mx-auto mt-8 p-4 bg-mediumSpringGreen rounded-full cursor-pointer hover:bg-springGreen transition-colors"
    aria-label="Back to top"
>
    <FaArrowUp className="text-snow text-xl" />
</div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={18}
                    speed={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "4em",
                        color: "white",
                    }}
                >
                    <Foo />
                    </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default ParallaxRapperEn
