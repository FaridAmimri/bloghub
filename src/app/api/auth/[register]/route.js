/** @format */

import connectToDB from '@/utils/database'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export const POST = async (req) => {
  const { name, email, password } = await req.json()

  await connectToDB()

  const hashedPassword = await bcrypt.hash(password, 5)

  const newUser = new User({ name, email, password: hashedPassword })

  try {
    await newUser.save()
    return new Response('User has been created', { status: 201 })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}
