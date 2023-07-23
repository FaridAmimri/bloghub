/** @format */

import connectToDB from '@/utils/database'
import Post from '@/models/Post'

export const GET = async (req) => {
  const url = new URL(req.url)

  const username = url.searchParams.get('username')

  try {
    await connectToDB()

    const posts = await Post.find(username && { username })

    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch posts', { status: 500 })
  }
}

export const POST = async (req) => {
  const { title, description, image, content } = req.json()

  const newPost = new Post({ title, description, image, content })

  await connectToDB()

  try {
    await newPost.save()

    return new Response('Post has been created', { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new post', { status: 500 })
  }
}
