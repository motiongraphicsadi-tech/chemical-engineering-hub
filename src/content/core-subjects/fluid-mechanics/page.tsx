import { compileMDX } from 'next-mdx-remote/rsc'
import { getMDXContent } from '@/lib/mdx'
import Breadcrumb from "@/components/navigation/Breadcrumb"

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string
    subject: string
    topic: string
  }>
}) {
  const resolvedParams = await params

  const filepath = `src/content/${resolvedParams.category}/${resolvedParams.subject}/${resolvedParams.topic}.mdx`

  const { metadata } = await getMDXContent(filepath)

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{
    category: string
    subject: string
    topic: string
  }>
}) {
  const resolvedParams = await params

  const filepath = `src/content/${resolvedParams.category}/${resolvedParams.subject}/${resolvedParams.topic}.mdx`

  const { content } = await getMDXContent(filepath)

const mdx = await compileMDX({
  source: content,
  options: {
    parseFrontmatter: true,
  },
})

return (
    <main className="max-w-4xl mx-auto px-6 py-10">
  
      <Breadcrumb />
  
      <article className="mdx-content">
        {mdx.content}
      </article>
  
    </main>
  )
}