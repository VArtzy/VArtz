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
    const { slug } = params
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
            <meta property="og:title" content={post.data.title} />
            <meta
                property="og:url"
                content={`https://vartz.web.id/blog/${slug}`}
            />
            <meta property="og:locale" content="id_ID" />
            <meta
                property="og:image"
                content="https://vartz.web.id/og/logo.png"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="256" />
            <meta property="og:image:height" content="256" />
            <meta property="og:image:alt" content="VArtz Blog" />
            <meta property="og:description" content={post.data.subtitle} />
            <meta property="og:type" content="article" />
        </>
    )
}
