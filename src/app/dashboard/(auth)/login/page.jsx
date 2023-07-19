/** @format */

'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      email: e.target[0].value,
      password: e.target[1].value
    }

    console.log(user)

    signIn('credentials', user)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
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
        <button className={styles.button}>Login</button>
      </form>
      <button
        onClick={() => {
          signIn('google')
        }}
        className={styles.button + ' ' + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href='/dashboard/register'>
        Create new account
      </Link>
    </div>
  )
}

export default Login
