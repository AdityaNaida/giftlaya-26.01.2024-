"use client";
import styles from '@/components/dynamicpage/Dynamic.module.css';
const Sortmodal=({children, closeSort})=>{
    return(
        <>
        <div className={styles.sortModal} onClick={closeSort}/>
        {children}
        </>
    )
}
export default Sortmodal;