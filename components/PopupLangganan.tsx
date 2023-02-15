const Langganan = () => {
    return (
        <form
            className="bg-white p-10 rounded-lg shadow-md"
            id="newsletter"
            action="https://script.google.com/macros/s/AKfycbwLfPkzm7xIF7Xg-PwMLKhMdJp8W0RO5s4EBnPcAi_NnIQP2wfWx2fezGBjndyeFyDYbg/exec"
            method="post"
        >
            <h2 className="text-2xl font-bold mb-4">
                Dapatkan Email terbaru setiap update! GRATIS.
            </h2>
            <p className="text-grayweb mb-4">
                Berlangganan ke blog dan dapatkan berita dan penawaran menarik
                tentang website setiap saat (otomatis berlangganan jika
                menggunakan layanan)
            </p>
            <div className="md:flex justify-between">
                <input
                    className="border border-grayweb rounded-md p-2 md:w-[60%] w-full mb-4"
                    type="email"
                    name="email"
                    required
                    placeholder="Alamat email aktif kamu"
                />
                <input
                    className="border border-grayweb rounded-md p-2 md:w-[35%] w-full mb-4"
                    type="text"
                    name="nama"
                    placeholder="Nama depan / panggilan"
                />
            </div>
            <input type="hidden" name="sheetName" value="Emails" />
            <input type="hidden" name="sheetTab" value="Emails" />
            <button
                className="bg-indigo-500 text-white p-2 rounded-md w-full hover:bg-indigo-600"
                type="submit"
            >
                Berlangganan
            </button>
        </form>
    )
}

export default Langganan
