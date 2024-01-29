import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/categorypage/Category.module.css';
const CategoryProducts = () => {
    const categoryProductsLinks=[
     {
        img: "/cake1.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake2.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake3.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake4.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake5.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake6.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake7.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake8.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake9.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake10.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake11.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     },
     {
        img: "/cake12.webp",
        path: "/dynamic",
        title: "Chocolate Cake",
        price: "₹ 695",
        rating: "4.8",
        reviews: 828,
        dTime: "Same Day Delivery"
     }
    ]
  return (
    <>
    <div className={styles.productContainer}>
     {categoryProductsLinks.map((elem)=>(
        <Link href={elem.path} key={elem.img}>
            <div className={styles.imgHolder}>
                <Image src={elem.img} alt='cakes images' width={50} height={50} unoptimized priority />
            </div>
            <div className={styles.productDetails}>
                 <h3>{elem.title}</h3>
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

export default CategoryProducts