import type { NextPage } from "next";
import BottomNav from "./BottomNav";
import styles from "../styles/boost.module.css";
import Link from "next/link";
import { useAppUser } from "../provider";

export type BoostType = {
  className?: string;
  dailypointscounter: number;
  dailypoints?: number;
};

const Boost: NextPage<BoostType> = ({ className = "" }) => {
  const { appuser } = useAppUser();

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
          <div className={styles.boosterinna}>{appuser!.dailypointscounter.toLocaleString()} / {appuser!.dailypoints.toLocaleString()}</div>
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
