import styles from '@/components/dynamicpage/Dynamic.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Dynamiccontent=()=>{
    const dynamicContentLinks=[
        {
            img: "/flower1.webp",
            title: "Forever 12 Red Rose Bunch",
            price: "₹ 695",
            rating: "4.8",
            reviews: 828,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower3.webp",
            title: "Radiant Love Treasure",
            price: "₹ 1245",
            rating: "4.8",
            reviews: 828,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower3.webp",
            title: "Blue Vanda 6 Orchid Jute Bouquet ",
            price: "₹ 850",
            rating: "4.9",
            reviews: 326,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower4.webp",
            title: "Beautiful Blossoms Medley",
            price: "₹ 2095",
            rating: "5.0",
            reviews: 1,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower5.webp",
            title: "Opulent Blooms In A Ceramic Mug",
            price: "₹ 1200",
            rating: "5.0",
            reviews: 4,
            path: "/category",
            dTime: "Next Day Delivery"
        },
        {
            img: "/flower6.webp",
            title: "Classic 10 Red Roses Bouquet",
            price: "₹ 595",
            rating: "4.8",
            reviews: 828,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower7.webp",
            title: "Anniversary Red Roses With A Pop Of Love",
            price: "₹ 645",
            rating: "4.8",
            reviews: 828,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower8.webp",
            title: "Enchanting Pink Symphony",
            price: "₹ 2245",
            rating: "4.8",
            reviews: 828,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower9.webp",
            title: "A Colorful Serenade",
            price: "₹ 1890",
            rating: "4.8",
            reviews: 828,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower10.webp",
            title: "Enchanted Blue Box",
            price: "₹ 1095",
            rating: "4.9",
            reviews: 175,
            path: "/category",
            dTime: "Next Day Delivery"
        },
        {
            img: "/flower11.webp",
            title: "Whispers Of Love",
            price: "₹ 2000",
            rating: "4.8",
            reviews: 6,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/flower12.webp",
            title: "Pink Blooms In Glass Elegance",
            price: "₹ 1345",
            rating: "4.0",
            reviews: 5,
            path: "/category",
            dTime: "Next Day Delivery"
        }
    ]
    return(
        <>
        <div className={styles.dynamicContent}>
        {dynamicContentLinks.map(elem=>(
            <Link href={elem.path} key={elem.title}>
                <div className={styles.category3ImgHldr}>
                 <Image src={elem.img} unoptimized priority width={50} height={50} alt={elem.title + "Image"}/>
                </div>
                <div className={styles.productDetails}>
                 <h4>{elem.title}</h4>
                 <p>{elem.price}</p>
                 <small><span className={styles.rating}>{elem.rating} <Image src="/rating-star.svg" height={20} width={20} alt='rating star image' unoptimized/></span><span className={styles.reviews}>({elem.reviews})</span></small>
                 <p className={styles.deliverydate}>{elem.dTime}</p>
                </div>
            </Link>
        ))}
        </div>
        </>
    )
}
export default Dynamiccontent;