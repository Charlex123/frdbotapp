import type { NextPage } from "next";
import styles from "../../styles/minelicensecontainer.module.css";

export type LicenseContainerType = {
  className?: string;
};

const LicenseContainer: NextPage<LicenseContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.licenseContainer, className].join(" ")}>
      

      {/* daily combo ends here */}

      <div className={styles.teamContainerWrapper}>
        <div className={styles.teamContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectinna}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/gem.png"
                />
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectinna}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/gem.png"
                />
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectinna}>
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/gem.png"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LicenseContainer;
