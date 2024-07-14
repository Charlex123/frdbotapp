import type { NextPage } from "next";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import LevelInfo from "./components/LevelInfo";
import Footer from "./components/Footer";
import styles from "./styles/index.module.css";
import "./styles/global.css";
import TapComponent from "./mine/components/TapComponent";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.root}>
        <Header />
        {/* <main className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </main> */}
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <div className={styles.gameInfo}>
          <div className={styles.componentParent}>
            <TopNav />
            <LevelInfo />
            <TapComponent />
          </div>
          <Footer />
        </div>
      </div>
      
    </>
  );
};

export default Home;
