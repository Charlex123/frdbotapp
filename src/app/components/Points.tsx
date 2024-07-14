import type { NextPage } from "next";
import styles from "../styles/points.module.css";

export type PointsType = {
  className?: string;
};

const Points: NextPage<PointsType> = ({ className = "" }) => {
  return (
    <>
      <div className={[styles.Points, className].join(" ")}>
        <div className={styles.levelProgress}>
          <div className={styles.wrapperGroup9Parent}>
            <div className={styles.wrapperGroup9}>
              <img
                className={styles.wrapperGroup9Child}
                loading="lazy"
                alt=""
                src="/group-9-2.svg"
              />
            </div>
            <b className={styles.levelValue}>507, 981</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
