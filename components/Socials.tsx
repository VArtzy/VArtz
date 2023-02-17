"use client"

interface SocialMetadata {
    slug: string
    title: string
    subtitle: string
    content: string
}

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
    return (
        <div className="flex gap-4 justify-center w-full mb-4 mx-auto">
            <FacebookShareButton
                title={title}
                url={`${window.location.hostname}/${slug}`}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                url={`${window.location.hostname}/${slug}`}
                title={title}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <PinterestShareButton
                media={title}
                description={subtitle}
                url={`${window.location.hostname}/${slug}`}
            >
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <WhatsappShareButton
                title={title}
                url={`${window.location.hostname}/${slug}`}
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={`${window.location.hostname}/${slug}`}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton
                url={`${window.location.hostname}/${slug}`}
                subject={title}
                body={content}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}

export default Social
