import Link from "next/link"

const Promo = () => {
    return (
        <div className="bg-white p-10 rounded-lg shadow-md" id="promo">
            <h4 className="text-2xl font-bold mb-4">
                Dapatkan 10% Diskon Untuk Pembelian web Pertamamu Hari Ini Juga!
            </h4>
            <p className="text-grayweb mb-4">
                Gunakan kode promo DISKON10 khusus hari ini. Nikmati website
                terbaik untuk berbagai macam keebutuhan bisnis kamu. Tingkatkan
                to the <span className="font-semibold">next level</span>.
            </p>
            <div className="flex gap-4 justify-between w-full">
                <a
                    id="konversi_konsultasi_web"
                    className="uppercase text-center bg-mediumSpringGreen text-white px-4 py-2 rounded-md w-full hover:bg-springGreen"
                    href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0AKode%20Promo%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                >
                    Dapatkan Promo
                </a>
                <a
                    id="konversi_konsultasi_web"
                    className="uppercase text-center bg-springGreen text-white px-4 py-2 rounded-md w-full hover:bg-mediumSpringGreen"
                    href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%20konsultasi%20buat%20website?"
                >
                    Konsultasi Gratis
                </a>
            </div>
        </div>
    )
}

export default Promo
