import Link from "next/link"
import Foo from "../../components/Foo"
import Image from "next/image"
const About = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <h1 className="text-3xl md:text-4xl w-full font-bold mt-24">
                    Works Page
                </h1>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Kami bangga dengan hubungan klien dan situs web yang telah
                    kami bangun
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-16">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-gray-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                BASIC
                            </span>
                            <Image
                                width="300"
                                height="350"
                                className="w-full"
                                src="https://tailwindcss.com/img/card-top.jpg"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p className="text-gray-600 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #photography
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #travel
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #winter
                            </span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-gray-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                BASIC
                            </span>
                            <Image
                                width="300"
                                height="350"
                                className="w-full"
                                src="https://tailwindcss.com/img/card-top.jpg"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p className="text-gray-600 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #photography
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #travel
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #winter
                            </span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8">
                        <div className="relative">
                            <span className="bg-gray-100 text-gray-800 text-sm font-medium mt-4 ml-6 px-6 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-300 absolute bottom-[30px] tracking-widest">
                                BASIC
                            </span>
                            <Image
                                width="300"
                                height="350"
                                className="w-full"
                                src="https://tailwindcss.com/img/card-top.jpg"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p className="text-gray-600 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #photography
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                                #travel
                            </span>
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                                #winter
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Foo />
        </>
    )
}

export default About
