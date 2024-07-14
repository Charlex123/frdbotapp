import type { NextPage } from "next";
import GroupComponent from "./MineGroupComponent";
import GroupComponent1 from "./MineGroupComponent1";
import BottomNav from "@/app/components/BottomNav";
import styles from "../../styles/mineframecomponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.pairsContainerParent, className].join(" ")}>
      <div className={styles.pairsContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.pairLabelsContainerWrapper}>
            <div className={styles.pairLabelsContainer}>
              <img
                className={styles.excludeIcon}
                loading="lazy"
                alt=""
                src="/exclude.svg"
              />
              <div className={styles.p10CmcPairsParent}>
                <div className={styles.p10Cmc}>Тоp 10 cmc pairs</div>
                <div className={styles.profitPairValuesContainer}>
                  <div className={styles.profitPerHour}>Profit per hour</div>
                  <div className={styles.frameParent}>
                    <input
                      className={styles.frameItem}
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className={styles.k}>1.61K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
          <div className={styles.pairLevelContainerWrapper}>
            <div className={styles.pairLevelContainer}>
              <div className={styles.lvl13Wrapper}>
                <div className={styles.lvl13}>lvl 13</div>
              </div>
              <div className={styles.pairLevelContainerInner}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
              <div className={styles.pairLevelContainerChild}>
                <input
                  className={styles.groupInput}
                  type="radio"
                  name="radioGroup-1"
                />
              </div>
              <div className={styles.kWrapper}>
                <div className={styles.k1}>156.92K</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <img className={styles.excludeIcon1} alt="" src="/exclude.svg" />
          <div className={styles.frameWrapper}>
            <div className={styles.image5Parent}>
              <img
                className={styles.image5Icon}
                loading="lazy"
                alt=""
                src="/image-5-1@2x.png"
              />
              <div className={styles.meneCoinsParent}>
                <div className={styles.meneCoins}>Mene coins</div>
                <div className={styles.profitPerHourParent}>
                  <div className={styles.profitPerHour1}>Profit per hour</div>
                  <div className={styles.frameGroup}>
                    <input
                      className={styles.frameChild1}
                      type="radio"
                      name="radioGroup-2"
                    />
                    <div className={styles.k2}>2.2K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameChild2} alt="" src="/vector-8.svg" />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.lvl13Container}>
                <div className={styles.lvl131}>lvl 13</div>
              </div>
              <img
                className={styles.frameChild3}
                alt=""
                src="/vector-9-1.svg"
              />
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <input
                    className={styles.frameChild4}
                    type="radio"
                    name="radioGroup-2"
                  />
                  <div className={styles.kContainer}>
                    <div className={styles.k3}>312.2K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <GroupComponent1
          exclude="/exclude.svg"
          x10="x10"
          marginTradingX10="Margin trading x10"
          group9Name="radioGroup-3"
          vector8="/vector-8-2.svg"
          vector9="/vector-9-2.svg"
          group9Name1="radioGroup-3"
        />
        <GroupComponent1
          exclude="/exclude.svg"
          x10="x20"
          marginTradingX10="Margin trading x20"
          group9Name="radioGroup-4"
          vector8="/vector-8-3.svg"
          vector9="/vector-9-3.svg"
          group9Name1="radioGroup-4"
        />
      </div>
      <div className={styles.frameParent3}>
        <GroupComponent
          exclude="/exclude.svg"
          x30="x30"
          marginTradingX30="Margin trading x30"
          tradingLevelDivider="/vector-8-4.svg"
          levelIcon="/vector-9-4.svg"
          group9="/group-9-13.svg"
        />
        <GroupComponent
          exclude="/exclude.svg"
          x30="x50"
          marginTradingX30="Margin trading x50"
          tradingLevelDivider="/vector-8-5.svg"
          levelIcon="/vector-9-5.svg"
          group9="/group-9-15.svg"
          propLeft="187.9px"
        />
      </div>
      
    </div>
  );
};

export default FrameComponent;
