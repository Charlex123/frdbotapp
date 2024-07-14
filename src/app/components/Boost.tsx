import type { NextPage } from "next";
import BottomNav from "./BottomNav";
import styles from "../styles/boost.module.css";

export type BoostType = {
  className?: string;
};

const Boost: NextPage<BoostType> = ({ className = "" }) => {
  return (
    <div className={[styles.actions, className].join(" ")}>
      <div className={styles.boostAction}>
        <div>
          <img
            className={styles.boostIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className={styles.div}>6500 / 6500</div>
        </div>
        <div className={styles.boost}>Boost</div>
      </div>
    </div>
  );
};

export default Boost;
