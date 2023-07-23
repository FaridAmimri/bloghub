/** @format */
'use client'

import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { publicRequest } from '@/utils/requests'
import Image from 'next/image'

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const session = useSession()

  console.log(session)

  const router = useRouter()

  const { data, error, isLoading } = useSWR(
    publicRequest.post(`posts?username=${session?.data?.user.name}`),
    fetcher
  )

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store'
  //     }) // fetch in every request

  //     if (!res.ok) {
  //       setError(true)
  //     }

  //     const posts = await res.json()

  //     setData(posts)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const post = {
      title: e.target[0].value,
      description: e.target[1].value,
      image: e.target[2].value,
      content: e.target[3].value,
      username: session.data.user.name
    }

    try {
      publicRequest.post('/posts', post)
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? 'Loading...'
            : data?.map((post) => (
                <div className={styles.post} key={post.id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt='' width={200} height={200} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete}>X</span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input
            type='text'
            placeholder='Description'
            className={styles.input}
          />
          <input type='text' placeholder='Image' className={styles.input} />
          <textarea
            placeholder='Content'
            className={styles.textArea}
            cols='30'
            rows='10'
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    )
  }
}

export default Dashboard
