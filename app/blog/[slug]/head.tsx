import fs from "fs"
import matter from "gray-matter"

const getPostContent = (slug: string) => {
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
}

export default function Head({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const post = getPostContent(slug)
    return (
        <>
            <title>{post.data.title}</title>
            <meta name="description" content={post.data.subtitle} />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
