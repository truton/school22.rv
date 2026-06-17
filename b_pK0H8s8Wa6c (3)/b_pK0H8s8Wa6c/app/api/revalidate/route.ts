import { revalidatePath, revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"
import { parseBody } from "next-sanity/webhook"

type WebhookPayload = {
  _type: string
  slug?: {
    current?: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 })
    }

    if (body?._type === "article") {
      revalidateTag("articles")

      if (body.slug?.current) {
        revalidateTag(`article:${body.slug.current}`)
        revalidatePath(`/news/${body.slug.current}`)
      }

      revalidatePath("/")
      revalidatePath("/news")
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    console.error("Revalidation error:", error)
    return new Response("Webhook error", { status: 500 })
  }
}
