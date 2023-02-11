import Foo from "../../components/Foo"
import getPostMetadata from "../../components/getPostMetadata"
import PostPreview from "../../components/PostPreview"

const Blog = () => {
    const postMetadata = getPostMetadata()
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <>
            <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <h1 className="text-3xl md:text-4xl w-full font-bold mt-24">
                    Blog Page
                </h1>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Tingkatkan peluang dan performa Website dengan membaca blog
                    blog milik kami.
                </h2>
                <form
                    className="bg-white p-10 rounded-lg shadow-md"
                    action="https://script.google.com/macros/s/AKfycbwLfPkzm7xIF7Xg-PwMLKhMdJp8W0RO5s4EBnPcAi_NnIQP2wfWx2fezGBjndyeFyDYbg/exec"
                    method="post"
                >
                    <h2 className="text-2xl font-bold mb-4">
                        Dapatkan Email terbaru setiap update! GRATIS.
                    </h2>
                    <p className="text-grayweb mb-4">
                        Berlangganan ke blog dan dapatkan berita dan penawaran
                        menarik tentang website setiap saat (otomatis
                        berlangganan jika menggunakan layanan)
                    </p>
                    <div className="md:flex justify-between">
                        <input
                            className="border border-grayweb rounded-md p-2 w-[60%] md:w-full mb-4"
                            type="email"
                            name="email"
                            placeholder="Alamat email aktif kamu"
                        />
                        <input
                            className="border border-grayweb rounded-md p-2 w-[35%] md:w-full mb-4"
                            type="text"
                            name="nama"
                            placeholder="Nama depan / panggilan"
                        />
                    </div>
                    <input type="hidden" name="sheetName" value="Emails" />
                    <input type="hidden" name="sheetTab" value="Emails" />
                    <button
                        className="bg-indigo-500 text-white p-2 rounded-full w-full hover:bg-indigo-600"
                        type="submit"
                    >
                        Berlangganan
                    </button>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {postPreviews}
                </div>
            </div>
            <Foo />
        </>
    )
}

export default Blog
