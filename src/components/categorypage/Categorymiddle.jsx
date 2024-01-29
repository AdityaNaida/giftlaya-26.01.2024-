import styles from "@/components/categorypage/Category.module.css";
import Link from "next/link";
import Image from "next/image";
const Categorymiddle = () => {
  return (
    <>
      <div className={styles.categoryTypesContainer}>
        <h1>
          <span>India's no. 1</span> Cake Delivery Website
        </h1>
        <div className={styles.categoryTypes}>
          <Link href="/dynamic">
            <div className={styles.imgHolder}>
              <Image
                src="/sub-catgory1.webp"
                alt="cakes sub category"
                height={50}
                width={50}
                unoptimized
                priority
              />
            </div>
            <p>Birthday Cakes</p>
          </Link>
          <Link href="/dynamic">
            <div className={styles.imgHolder}>
              <Image
                src="/sub-catgory2.webp"
                alt="cakes sub category"
                height={50}
                width={50}
                unoptimized
                priority
              />
            </div>
            <p>Anniversay Cakes</p>
          </Link>
          <Link href="/dynamic">
            <div className={styles.imgHolder}>
              <Image
                src="/sub-catgory3.webp"
                alt="cakes sub category"
                height={50}
                width={50}
                unoptimized
                priority
              />
            </div>
            <p>Regular Cakes</p>
          </Link>
          <Link href="/dynamic">
            <div className={styles.imgHolder}>
              <Image
                src="/sub-catgory4.webp"
                alt="cakes sub category"
                height={50}
                width={50}
                unoptimized
                priority
              />
            </div>
            <p>Photo Cakes</p>
          </Link>
          <Link href="/dynamic">
            <div className={styles.imgHolder}>
              <Image
                src="/sub-catgory5.webp"
                alt="cakes sub category"
                height={50}
                width={50}
                unoptimized
                priority
              />
            </div>
            <p>Designer Cakes</p>
          </Link>
          <Link href="/dynamic">
            <div className={styles.imgHolder}>
              <Image
                src="/sub-catgory6.webp"
                alt="cakes sub category"
                height={50}
                width={50}
                unoptimized
                priority
              />
            </div>
            <p>Eggless Cakes</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categorymiddle;
