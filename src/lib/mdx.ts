import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getMDXContent(filepath: string) {
  const fullPath = path.join(process.cwd(), filepath)

  const file = fs.readFileSync(fullPath, 'utf-8')

  const { data, content } = matter(file)

  return {
    metadata: data,
    content,
  }
}