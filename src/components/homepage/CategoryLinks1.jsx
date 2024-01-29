import styles from '@/components/homepage/Home.module.css';
import Link from "next/link";
import Image from "next/image";
const CategoryLinks1=()=>{
    const categoryLinks1=[
        {
            title: "Valentine's Day",
            img: "/cat1.webp",
            path: "/category"
        },
        {
            title: "Anniversary",
            img: "/cat2.webp",
            path: "/category"
        },
        {
            title: "Birthday",
            img: "/cat3.webp",
            path: "/category"
        },
        {
            title: "Best of Plants",
            img: "/cat4.webp",
            path: "/category"
        },
        {
            title: "Best of Flowers",
            img: "/cat5.webp",
            path: "/category"
        },
        {
            title: "Unique Gifts",
            img: "/cat6.webp",
            path: "/category"
        },
        {
            title: "For Him",
            img: "/cat7.webp",
            path: "/category"
        },
        {
            title: "For Her",
            img: "/cat8.webp",
            path: "/category"
        }
    ]
    return(
        <>
        <div className={styles.categoryLinks1Container}>
        {categoryLinks1.map(elem=>(
            <Link href={elem.path} key={elem.title}>
                <div className={styles.categoryImgHldr}>
                 <Image src={elem.img} alt={elem.title + "Image"} unoptimized priority height={50} width={50}/>
                </div>
                <span>{elem.title}</span>
            </Link>
        ))}
        </div>
        </>
    )
}
export default CategoryLinks1;