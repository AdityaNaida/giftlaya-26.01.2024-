"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/components/categorypage/Category.module.css';
import Sortmodal from '../dynamicpage/Sortmodal';
const Categorysort = () => {
    const [sortMenu, setSortMenu] = useState(false);
    function sortMenuHandler(){
        setSortMenu(!sortMenu)
    }
  return (
 
    <>
    <div className={styles.sortCategory}>
    <h2>Best Seller Cakes</h2>
    <span className={styles.sortBtn} onClick={sortMenuHandler}>Sort <Image src="/icons/down-chevron.svg" width={10} height={10} alt='down chevron image' unoptimized/></span>
    </div>

    {sortMenu?(
        <Sortmodal closeSort={sortMenuHandler}>
        <div className={styles.sortBox}>
         <div className={styles.sortBoxHeading}>
           <p>Sort By <Image src="/icons/sort-white-icon.svg" width={25} height={30} alt='sort icon' unoptimized/></p>
           <Image src="/icons/white-close-btn.svg" width={30} height={30} alt='close white icon' unoptimized onClick={sortMenuHandler}/>
         </div>
         <label htmlFor="lowToHigh">
            <input type="checkbox" id='lowToHigh' name='sorttype'/>
            <span>Low To High</span>
         </label>
         <label htmlFor="HighTolow">
            <input type="checkbox" id='HighTolow' name='sorttype'/>
            <span>High To Low</span>
         </label>
         <label htmlFor="alphabetically">
            <input type="checkbox" id='alphabetically' name='sorttype'/>
            <span>Alphabetically</span>
         </label>
       </div>
       </Sortmodal>
      ) : false}
    </>
  )
}

export default Categorysort