import styles from '@/components/homepage/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Category4=()=>{
    return(
        <>
        <div className={styles.category4Container}>
         <h5>Category</h5>
         <p>Wide range of gifts for your celebration</p>
         <div className={styles.category4Content}>
         <div className={styles.category4Content1}>
          <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration1.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Decorations</p>
              <Link href="/category">Birthday Decoration</Link><br />
              <Link href="/category">Anniversary Decoration</Link><br />
              <Link href="/category">Welcome Baby</Link><br />
              <Link href="/category">Baby Shower</Link><br />
              <Link href="/category">Haldi Decoration</Link><br />
            </div>
          </div>
          <div>
          <div className={styles.cat4ImgHldr}>
            <Image src="/decoration2.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Cakes</p>
              <Link href="/category">Chocolate Cake</Link><br />
              <Link href="/category">Vanila Cake</Link><br />
              <Link href="/category">Black Forest Cake</Link><br />
              <Link href="/category">Strawberry Cake</Link><br />
              <Link href="/category">Eggless Cake</Link><br />
            </div>
          </div>
         </div>
         <div className={styles.category4Content2}>
         <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration3.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Flowers</p>
              <Link href="/category">Roses</Link><br />
              <Link href="/category">Gerbera</Link><br />
              <Link href="/category">Lily</Link><br />
              <Link href="/category">Orchids</Link><br />
              <Link href="/category">Carnations</Link><br />
            </div>
         </div>
         <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration4.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Personalized</p>
              <Link href="/category">For Him</Link><br />
              <Link href="/category">For Her</Link><br />
              <Link href="/category">For Kids</Link><br />
              <Link href="/category">For Parents</Link><br />
              <Link href="/category">Mugs</Link><br />
            </div>
         </div>
         <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration5.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Plants</p>
              <Link href="/category">Lucky Bambo</Link><br />
              <Link href="/category">Shui Bambo</Link><br />
              <Link href="/category">Rosy Aglaonima</Link><br />
              <Link href="/category">Good Luck Pot</Link><br />
              <Link href="/category">Flowral Delight Hamper</Link><br />
            </div>
         </div>
         </div>

         </div>
        </div>
        </>
    )
}
export default Category4;