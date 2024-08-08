'use client';
// import { usePathname } from "next/navigation";
import { useAppUser } from "../provider";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/bottomnav.module.css";

export type BottomNavType = {
  className?: string;
};

interface Option {
  name: string;
  image: string;
}

const BottomNav: NextPage<BottomNavType> = ({ className = ""}) => {
  // const pathname = usePathname();
  const { appuser } = useAppUser();
  const selectedExchange = appuser?.exchange;
  const exchanges: Option[] = [
    { name: 'Binance', image: '/bnb-bnb-logo.svg' },
    { name: 'OKX', image: '/okx-seeklogo.svg' },
    { name: 'Kucoin', image: '/kucoin-token-kcs-logo.svg' },
    { name: 'Bitget', image: '/bitget-token-new-bgb-logo.svg' },
];

const matchedExchange = exchanges.find(exchange => exchange.name === selectedExchange);
  return (
    <div className={[styles.bottomnavmain, className].join(" ")}>
      <div className={styles.bottomnavmainc}>
        <div className={styles.bottomnavmaincinna}>
          <Link href={`/`}  className={styles.link}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src={matchedExchange?.image}
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
