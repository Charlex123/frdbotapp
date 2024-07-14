import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "../../styles/minegroupcomponent.module.css";

export type GroupComponentType = {
  className?: string;
  exclude?: string;
  x30?: string;
  marginTradingX30?: string;
  tradingLevelDivider?: string;
  levelIcon?: string;
  group9?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  exclude,
  x30,
  marginTradingX30,
  tradingLevelDivider,
  levelIcon,
  group9,
  propLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <img className={styles.excludeIcon} alt="" src={exclude} />
      <div className={styles.labelsContainerWrapper}>
        <div className={styles.labelsContainer}>
          <b className={styles.x30}>{x30}</b>
          <div className={styles.tradingLevelInfo}>
            <div className={styles.marginTradingX30}>{marginTradingX30}</div>
            <div className={styles.hourlyProfitContainer}>
              <div className={styles.profitPerHour}>Profit per hour</div>
              <div className={styles.tradingProfitValue}>
                <input
                  className={styles.tradingProfitValueChild}
                  type="radio"
                />
                <div className={styles.k}>5.5K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.tradingLevelDivider}
        alt=""
        src={tradingLevelDivider}
      />
      <div className={styles.tradingLevelDetails}>
        <div className={styles.levelInfo}>
          <div className={styles.tradingLevelNumber}>
            <div className={styles.lvl13}>lvl 13</div>
          </div>
          <img className={styles.levelIcon} alt="" src={levelIcon} />
          <div className={styles.tradingLevelBar}>
            <div className={styles.levelBar}>
              <img
                className={styles.levelBarChild}
                loading="lazy"
                alt=""
                src={group9}
              />
              <div className={styles.levelProgress}>
                <div className={styles.k1}>313.92K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
