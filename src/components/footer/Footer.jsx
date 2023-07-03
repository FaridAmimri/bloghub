/** @format */

import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Blog Hub 2023. All Rights Reserved ©</div>
      <div className={styles.social}>
        <Image
          src='/facebook.png'
          width={15}
          height={15}
          alt='Blog Hub Facebook Account'
          className={styles.icon}
        />
        <Image
          src='/instagram.png'
          width={15}
          height={15}
          alt='Blog Hub Instagram Account'
          className={styles.icon}
        />
        <Image
          src='/twitter.png'
          width={15}
          height={15}
          alt='Blog Hub Twitter Account'
          className={styles.icon}
        />
        <Image
          src='/youtube.png'
          width={15}
          height={15}
          alt='Blog Hub Youtube Account'
          className={styles.icon}
        />
      </div>
    </div>
  )
}

export default Footer
