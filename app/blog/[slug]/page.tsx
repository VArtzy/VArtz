import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"

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
            <div className="py-12 px-8 pt-24 max-w-[50ch] mx-auto text-center">
                <h1 className="text-2xl font-bold text-slate-600">
                    {post.data.title}
                </h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <article className="prose mx-auto px-8">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
}

export default PostPage
