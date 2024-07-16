'use client';
import { usePathname } from "next/navigation";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/bottomnav.module.css";

export type BottomNavType = {
  className?: string;
};

const BottomNav: NextPage<BottomNavType> = ({ className = "" }) => {
  const pathname = usePathname();
  console.log("pathname",pathname)

  return (
    <div className={[styles.bottomnavmain, className].join(" ")}>
      <div className={styles.bottomnavmainc}>
        <div className={styles.bottomnavmaincinna}>
          <Link href={`/`}  className={styles.link}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/union-2.svg"
              />
              <div className={styles.txt}>Exchange</div>
          </Link>
          <Link href={`/mine`} className={styles.link}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/group@2x.png"
              />
              <div className={styles.txt}>Mine</div>
          </Link>

          <Link href={`/community`} className={styles.link}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <div className={styles.txt}>Community</div>
          </Link>

          <Link href={`/tasks`} className={styles.link}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/group-8@2x.png"
              />
              <div className={styles.txt}>Tasks</div>
          </Link>

          <Link href={`/airdrop`} className={styles.link}>
              <img
                loading="lazy"
                alt="image"
                src="/group-9-2.svg"
                className={styles.icon}
              />
              <div className={styles.txt}>Airdrop</div>
          </Link>

          <Link href={`/testnet`} className={styles.link}>
              <img
                loading="lazy"
                alt="image"
                src="/frdlogo300.png"
                className={styles.icon}
              />
              <div className={styles.txt}>Testnet</div>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default BottomNav;
