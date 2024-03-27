import { unstable_noStore as noStore } from "next/cache";

export function GET() {
  noStore()

  const seconds = Math.ceil(Math.random() * 60)

  return new Response(`This should be cached for ${seconds} seconds`, {
    headers: {
      "Cache-Control": "max-age=" + seconds
    }
  })
}
