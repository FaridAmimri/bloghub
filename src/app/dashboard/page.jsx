/** @format */
'use client'

import styles from './page.module.css'
import useSWR from 'swr'
import { useSession, signIn, signOut } from 'next-auth/react'

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
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

  const session = useSession()
  console.log(session)

  return <div className={styles.container}>Dashboard</div>
}

export default Dashboard
