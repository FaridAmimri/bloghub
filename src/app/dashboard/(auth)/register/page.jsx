/** @format */

'use client'

import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { publicRequest } from '@/utils/requests'

const Register = () => {
  const [error, setError] = useState(null)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    }

    try {
      const response = await publicRequest.post('auth/register', newUser)

      response.status === 201 &&
        router.push('/dashboard/login?success=Account has been created')
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          className={styles.input}
          required
        />
        <input
          type='email'
          placeholder='email'
          className={styles.input}
          required
        />
        <input
          type='password'
          placeholder='password'
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
      </form>
      {error && 'something went wrong'}
      <Link href='/dashbord/login'>Login with an existing account</Link>
    </div>
  )
}

export default Register
