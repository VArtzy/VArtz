import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"
import Foo from "../../../components/Foo"

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

            <article className="prose prose-img:rounded-md md:prose-lg mx-auto px-8">
                <Markdown>{post.content}</Markdown>
            </article>

            <Foo />
        </div>
    )
}

export default PostPage
