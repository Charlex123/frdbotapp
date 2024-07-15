import type { NextPage } from "next";
import BottomNav from "./BottomNav";
import styles from "../styles/boost.module.css";
import Link from "next/link";

export type BoostType = {
  className?: string;
};

const Boost: NextPage<BoostType> = ({ className = "" }) => {
  return (
    <div className={[styles.actions, className].join(" ")}>
      <div className={styles.boostAction}>
        <div className={styles.boost_a}>
          <img
            className={styles.boostIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className={styles.boosterinna}>6500 / 6500</div>
        </div>
        <div className={styles.boost_b}>
          <Link href={`/mine`} className={styles.linka}>
            Boost
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Boost;
