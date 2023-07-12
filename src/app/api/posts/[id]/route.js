/** @format */

import connectToDB from '@/utils/database'
import Post from '@/models/Post'

// GET A POST
export const GET = async (req, { params }) => {
  const { id } = params

  try {
    await connectToDB()

    const post = await Post.findById(id)

    if (!post) return new Response('Post not found', { status: 404 })

    return new Response(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch post', { status: 500 })
  }
}
