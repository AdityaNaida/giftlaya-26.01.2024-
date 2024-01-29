import styles from '@/components/homepage/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CategoryLinks2=()=>{
    const categoryLinks2=[
        {
            title: "Chocolate Cake",
            img: "/cat9.webp",
            path: "/category"
        },
        {
            title: "Cake",
            img: "/cat10.webp",
            path: "/category"
        },
        {
            title: "Teddy",
            img: "/cat11.webp",
            path: "/category"
        },
        {
            title: "Soft Toys",
            img: "/cat12.webp",
            path: "/category"
        },
        {
            title: "Plants",
            img: "/cat13.webp",
            path: "/category"
        },
        {
            title: "Bonsai",
            img: "/cat14.webp",
            path: "/category"
        },
        {
            title: "Gift",
            img: "/cat15.webp",
            path: "/category"
        },
        {
            title: "Personalized",
            img: "/cat16.webp",
            path: "/category"
        }
    ]
    return(
        <>
         <div className={styles.categoryLinks2Container}>
        {categoryLinks2.map(elem=>(
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

export default CategoryLinks2;