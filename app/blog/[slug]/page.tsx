import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"
import Foo from "../../../components/Foo"
import Social from "../../../components/Socials"
import Link from "next/link"
import { BsFillJournalBookmarkFill, BsShareFill } from "react-icons/bs"
import Langganan from "../../../components/PopupLangganan"
import Promo from "../../../components/PopupPromo"

const getPostContent = (slug: string) => {
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = ({ params }: any) => {
    const { slug } = params
    const post = getPostContent(slug)
    return (
        <div>
            <div className="py-12 px-8 pt-24 max-w-[65ch] mx-auto text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-600">
                    {post.data.title}
                </h1>
                <p className="text-slate-400 md:text-xl mt-2">
                    {post.data.date}
                </p>
            </div>

            <article className="prose md:prose-lg mx-auto px-8">
                <Markdown
                    options={{
                        overrides: {
                            Langganan: Langganan,
                            Promo: Promo,
                        },
                    }}
                >
                    {post.content}
                </Markdown>
            </article>

            <div className="max-w-[65ch] px-8 mx-auto">
                <p className="text-grayweb mb-2 text-center">
                    Simpan Jika Diperlukan, Bagikan Untuk Mereka Yang
                    Membutuhkan.
                </p>
                <Social
                    slug={slug}
                    title={post.data.title}
                    subtitle={post.data.subtitle}
                    content={post.content}
                />
                <Link
                    href="./"
                    className="block text-center text-snow bg-slate-700 px-4 py-2 uppercase rounded-md text-xl"
                >
                    <BsFillJournalBookmarkFill className="inline" /> Lihat Semua
                    Blog
                </Link>
            </div>

            <Foo />
        </div>
    )
}

export default PostPage
