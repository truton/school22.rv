import Image from "next/image"
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/react"
import { urlForImage } from "@/lib/sanity/image"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        rel="noreferrer noopener"
        target="_blank"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null
      }

      const imageUrl = urlForImage(value).width(1200).height(675).fit("crop").url()

      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="w-full rounded-xl object-cover"
          />
          {value.alt ? (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

interface ArticlePortableTextProps {
  value: PortableTextBlock[]
}

export function ArticlePortableText({ value }: ArticlePortableTextProps) {
  return <PortableText value={value} components={components} />
}
