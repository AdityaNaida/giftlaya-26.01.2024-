import styles from '@/components/categorypage/Category.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Categoryupper = () => {
  return (
    <>
        <div className={styles.categoryBanner}>
         <Link href="/" className={styles.categorBanner}><Image src="/categorybanner.webp" alt='category banner' height={50} width={50} unoptimized priority/></Link>
         <Link href="/" className={styles.categorMobileBanner}><Image src="/categorybanner_mobile.webp" alt='category banner' height={50} width={50} unoptimized priority/></Link>
         </div>
    </>
  )
}

export default Categoryupper