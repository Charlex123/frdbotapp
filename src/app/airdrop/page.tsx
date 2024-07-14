'use client'
import type { NextPage } from "next";
import styles from "../styles/airdrop.module.css"
import BottomNav from "../components/BottomNav";
import { FaCopy } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";
import ImageWithRays from "../components/ImageWIthRays";

const Airdrop: NextPage = () => {
    
  return (
    <>
      <div className={styles.airdrop}>
        <TopHeader />
        <ImageWithRays src="/frdlogo300.png" alt="image"/>

        <div className={styles.airdropc}>
            <div className={styles.header}>
                <h2>Airdrop</h2>
                <h3>Share in the community airdrop rewards</h3>
            </div>
            
            <div className={styles.airdroplink}>
                <div className={styles.airdropbtns}>
                    <button className={styles.sharebtn}>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
        <BottomNav />
      </div>      
    </>
  );
};

export default Airdrop;
