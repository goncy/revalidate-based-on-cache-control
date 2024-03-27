import { revalidatePath } from "next/cache";

export default async function HomePage() {
  const revalidation = await fetch('http://localhost:3000/revalidation')
  const time = revalidation.headers.get('cache-control')!.split('=')[1]
  const data = await revalidation.text()

  await fetch('http://localhost:3000/revalidation', { next: {revalidate: Number(time)} })

  async function revalidate() {
    'use server'

    revalidatePath('/')
  }

  return <section>
    <h1>Cache page based on Cache-Control headers</h1>
    <p>{data}</p>
    <hr />
    <form action={revalidate}>
      <button type="submit">Revalidate</button>
    </form>
  </section>;
}
