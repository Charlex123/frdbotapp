import type { NextPage } from "next";
import styles from "../styles/levelinfo.module.css";

export type LevelInfoType = {
  className?: string;
  points: number;
};

const LevelInfo: NextPage<LevelInfoType> = ({ className = "", points }) => {
  return (
    <>
      <div className={[styles.levelInfo, className].join(" ")}>
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
            <b className={styles.levelValue}>576,909</b>
            {/* <b className={styles.levelValue}>{points?.toLocaleString()}</b> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelInfo;
