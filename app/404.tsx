import Link from "next/link"

const Custom404 = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-6xl font-bold mb-8">
                404 - Halaman Tidak Ditemukan
            </h1>
            <p className="text-xl mb-8 max-w-prose">
                Uhhh, maaf halaman yang kamu cari telah dihapus atau memang
                tidak ada. Jelajahi web keren kami sekarang dengan mengklik
                tombol dibawah!
            </p>
            <Link href="/">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Kembali ke Halaman Utama
                </a>
            </Link>
        </div>
    )
}

export default Custom404
