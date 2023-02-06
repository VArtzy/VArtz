import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"
import useReadingProgress from "../../../components/Progress"

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

const PostPage = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug)
    const completion = 50
    return (
        <div>
            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-yellow-400`}
            />
            <div className="py-12 pt-24 text-center">
                <h1 className="text-2xl text-slate-600">{post.data.title}</h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <article className="prose mx-auto px-8">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
}

export default PostPage
