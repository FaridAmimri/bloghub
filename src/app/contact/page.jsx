/** @format */

import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Letʼs keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='contact us'
            fill
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input} />
          <textarea
            placeholder='message'
            className={styles.textArea}
            cols='30'
            rows='10'
          />
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  )
}

export default Contact
