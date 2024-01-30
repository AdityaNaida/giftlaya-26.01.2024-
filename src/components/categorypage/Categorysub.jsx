import styles from '@/components/categorypage/Category.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Categorysub = () => {
    const categorySubLinks=[
        {
            img: "/subCat1.webp",
            title: "Metal Planters",
            path: "/"
        },
        {
            img: "/subCat2.webp",
            title: "Terracotta Planters",
            path: "/"
        },
        {
            img: "/subCat3.webp",
            title: "Gift Hampers",
            path: "/"
        },
        {
            img: "/subCat4.webp",
            title: "Same Day Gifts",
            path: "/"
        },
        {
            img: "/subCat5.webp",
            title: "Flower Hampers",
            path: "/"
        },
        {
            img: "/subCat6.webp",
            title: "Love & Affection",
            path: "/"
        },
        {
            img: "/subCat7.webp",
            title: "Combos & Hampers",
            path: "/"
        },
        {
            img: "/subCat8.webp",
            title: "Sameday Delivery",
            path: "/"
        }
    ]
  return (
    <>
    <div className={styles.categorySubContainer}>
     <h2>Trending Cakes</h2>
     <div className={styles.categorySubContent}>
      {categorySubLinks.map((elem)=>(
        <Link href="/" key={elem.title}>
            <div className={styles.categorySubImgHldr}>
              <Image src={elem.img} alt={elem.title + "Image"} height={50} width={50} unoptimized priority/>
            </div>
            <p>{elem.title}</p>
        </Link>
      ))}
     </div>
    </div>
    </>
  )
}

export default Categorysub