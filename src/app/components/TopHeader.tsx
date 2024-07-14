'use client'
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import styles from "../styles/topheader.module.css";
import { FaChevronLeft, FaGear } from "react-icons/fa6";

const TopHeader: NextPage<{}> = () => {
    
    const router = useRouter();
    const goBack = () => {
        router.back()
    }

  return (
    <>
        <div className={styles.head}>
            <div className={styles.top}>
                <div>
                    <button onClick={goBack}> <FaChevronLeft/> </button>
                </div>
                <div>
                    <h3>Fifareward</h3>
                </div>
                <div>
                    <div>Reload</div>
                </div>
            </div>
        </div>
    </>
  );
};

export default TopHeader;
