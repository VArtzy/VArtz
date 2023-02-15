import Link from "next/link"

const Promo = () => {
    return (
        <div className="bg-white p-10 rounded-lg shadow-md" id="promo">
            <h2 className="text-2xl font-bold mb-4">
                Dapatkan 10% Diskon Untuk Pembelian Pertamamu Hari Ini Juga!
            </h2>
            <p className="text-grayweb mb-4">
                Gunakan kode promo LANGGANAN10 khusus hari ini. Nikmati website
                terbaik untuk berbagai macam keebutuhan bisnis kamu. Tingkatkan
                to the <span className="font-semibold">next level</span>.
            </p>
            <Link
                className="block uppercase bg-mediumSpringGreen text-white p-2 rounded-full w-full hover:bg-springGreen"
                href="/#pricing"
            >
                Dapatkan Promo
            </Link>
        </div>
    )
}

export default Promo
