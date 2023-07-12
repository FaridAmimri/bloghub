/** @format */

const { NextResponse } = require('next/server')
import connectToDB from '@/utils/database'
import Post from '@/models/Post'

export const GET = async (req) => {
  try {
    await connectToDB()

    const posts = await Post.find()

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
