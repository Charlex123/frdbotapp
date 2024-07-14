import type { NextPage } from "next";
import styles from "../../styles/minegroupcomponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  exclude?: string;
  x10?: string;
  marginTradingX10?: string;
  group9Name?: string;
  vector8?: string;
  vector9?: string;
  group9Name1?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  exclude,
  x10,
  marginTradingX10,
  group9Name,
  vector8,
  vector9,
  group9Name1,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img className={styles.excludeIcon} alt="" src={exclude} />
      <div className={styles.marginLabelsContainerWrapper}>
        <div className={styles.marginLabelsContainer}>
          <b className={styles.x10}>{x10}</b>
          <div className={styles.marginTradingX10Parent}>
            <div className={styles.marginTradingX10}>{marginTradingX10}</div>
            <div className={styles.profitMarginValuesContainer}>
              <div className={styles.profitPerHour}>Profit per hour</div>
              <div className={styles.frameParent}>
                <input
                  className={styles.frameItem}
                  type="radio"
                  name={group9Name}
                />
                <div className={styles.k}>5.5K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameInner} alt="" src={vector8} />
      <div className={styles.marginLevelContainerWrapper}>
        <div className={styles.marginLevelContainer}>
          <div className={styles.lvl13Wrapper}>
            <div className={styles.lvl13}>lvl 13</div>
          </div>
          <img
            className={styles.marginLevelContainerChild}
            alt=""
            src={vector9}
          />
          <div className={styles.marginProgressContainerWrapper}>
            <div className={styles.marginProgressContainer}>
              <input
                className={styles.marginProgressContainerChild}
                type="radio"
                name={group9Name1}
              />
              <div className={styles.kWrapper}>
                <div className={styles.k1}>313.92K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
