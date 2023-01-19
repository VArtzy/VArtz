import type { NextPage } from "next"
import Foo from "../../components/Foo"
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const Blog: NextPage = () => {
const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

    return (
        <>
            <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <h1 className="text-3xl md:text-4xl w-full font-bold mt-16">
                    Blog Page
                </h1>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Tingkatkan peluang dan performa Website dengan membaca blog
                    blog milik kami.
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
            </div>
            <Foo />
        </>
    )
}

export default Blog
