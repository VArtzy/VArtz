"use client"

interface SocialMetadata {
    slug: string
    title: string
    subtitle: string
    content: string
}

import { useRouter } from "next/router"
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    PinterestShareButton,
    PinterestIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
} from "next-share"

const Social = ({ slug, title, subtitle, content }: SocialMetadata) => {
    const router = useRouter()
    return (
        <div className="flex gap-4 justify-center w-full mb-4 mx-auto">
            <FacebookShareButton
                title={title}
                url={`${router.basePath}/${slug}`}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                url={`${router.basePath}/${slug}`}
                title={title}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <PinterestShareButton
                media={title}
                description={subtitle}
                url={`${router.basePath}/${slug}`}
            >
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <WhatsappShareButton
                title={title}
                url={`${router.basePath}/${slug}`}
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={`${router.basePath}/${slug}`}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton
                url={`${router.basePath}/${slug}`}
                subject={title}
                body={content}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}

export default Social
