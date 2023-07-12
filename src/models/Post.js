/** @format */

import { Schema, models, model } from 'mongoose'

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

//If the Post collection does not exist create a new one.
const Post = models.Post || model('Post', PostSchema)

export default Post
