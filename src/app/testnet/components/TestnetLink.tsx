'use client'
import type { NextPage } from "next";
import styles from "../../styles/testnetlink.module.css"
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const TestnetLink: NextPage = () => {
    

  return (
    <>
      <div className={styles.testnetlink}>
        <div className={styles.testnetlinkc}>
            <div className={styles.linka}>
                <img src="/frdlogo300.png" alt="logo" className={styles.timage}/><h3>Be part of our testnet</h3>
            </div>
            <Link href={`/testnet`}>
                <div className={styles.link}>
                     <FaChevronRight textDecoration='none' />
                </div>
            </Link>
            </div>
        
      </div>      
    </>
  );
};

export default TestnetLink;
