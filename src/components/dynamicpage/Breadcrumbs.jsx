import styles from '@/components/dynamicpage/Dynamic.module.css';
import Link from 'next/link';
const Breadcrumbs=()=>{
    return(
        <>
          <div className={styles.dynamicCategory}>
         <p><Link href="/">Home</Link> <span>Flowers</span></p>
         <h1>Flowers</h1>
         <p>Want to send flower online? Giftlaya has more than 1000+ Flower Delivery options available in 500+ cities in India. Choose from Red Rose Bouquet to Exotic lilies Flower Bouquet delivery online we have everything stocked up for you.</p>
         </div>
        </>
    )
}
export default Breadcrumbs;