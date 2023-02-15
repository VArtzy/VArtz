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
        <div className="mx-auto">
            <FacebookShareButton title={title} url={`./${slug}`}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={`./${slug}`} title={title}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <PinterestShareButton
                media={title}
                description={subtitle}
                url={`./${slug}`}
            >
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <WhatsappShareButton title={title} url={`./${slug}`}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={`./${slug}`}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton url={`./${slug}`} subject={title} body={content}>
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}

export default Social
