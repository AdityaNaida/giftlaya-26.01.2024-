import styles from '@/components/dynamicpage/Dynamic.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Dynamichead=()=>{
    return(
        <>
        <div className={styles.dynamicHeader}>
      <Link href="/dynamic">
        <Image src="/dynamicBanner.webp" alt='dynamic banner image' unoptimized priority width={50} height={50} className={styles.dynamicBanner}/>
      </Link>
      <Link href="/dynamic">
        <Image src="/dynamicBanner_Mobile.webp" alt='dynamic banner mobile image' unoptimized priority width={50} height={50} className={styles.dynamicBanner_mobile}/>
      </Link>
        </div>
        </>
    )
}
export default Dynamichead;