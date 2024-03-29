import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
    return (
        <div
            className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
        >
            <p className="text-sm text-slate-500">{props.date}</p>

            <Link href={`/blog/${props.slug}`}>
                <h2 className=" text-violet-600 font-bold hover:underline mb-4">
                    {props.title}
                </h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    )
}

export default PostPreview
