'use client'
import type { NextPage } from "next";
import styles from "../styles/tasks.module.css"
// import DailyTasks from "./components/DailyTasks";
import ComboTasks from "./components/ComboTasks";
import BottomNav from "../components/BottomNav";
import { FaChevronRight } from "react-icons/fa6";
import TestnetLink from "../testnet/components/TestnetLink";
import TopHeader from "../components/TopHeader";

const Tasks: NextPage = () => {
    

  return (
    <>
      <div className={styles.tasks}>
        <TopHeader />
        <div className={styles.tasksc}>
            <div className={styles.header}>
                <h2>Earn More And Climb The Ladder</h2>
                <div className={styles.imagecontainer}>
                    <div className={styles.rays}></div>
                    <img src="/3dtasks.png" alt="image" className={styles.image} />
                </div>
            </div>
            
            <TestnetLink />

            <ComboTasks />

            <div className={styles.compultasks}>
                <h3>Compulsory Tasks </h3>
                <div className={styles.compulmain}>
                    <div className={styles.compulmainc}>
                        <div className={styles.compulcon}>
                            <div className={styles.compulcona}>
                                <div><img src="/3dyoutube.png" alt="img" className={styles.compulimg}/></div> 
                                <div className={styles.compuldet}>
                                    <div className={styles.compulname}>Subscribe To Our Youtube</div>
                                    <div className={styles.compullvl}>
                                        <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.compulconb}>
                                <FaChevronRight className={styles.chevron}/>
                            </div>
                        </div>
                        <div className={styles.compulcon}>
                            <div className={styles.compulcona}>
                                <div><img src="/3dxlogo.png" alt="img" className={styles.compulimg}/></div> 
                                <div className={styles.compuldet}>
                                    <div className={styles.compulname}>Follow Us On Twitter</div>
                                    <div className={styles.compullvl}>
                                        <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.compulconb}>
                                <FaChevronRight  className={styles.chevron}/>
                            </div>
                        </div>
                        <div className={styles.compulcon}>
                            <div className={styles.compulcona}>
                                <div><img src="/3dtelegram.png" alt="img" className={styles.compulimg}/></div> 
                                <div className={styles.compuldet}>
                                    <div className={styles.compulname}>Join Our Telegram</div>
                                    <div className={styles.compullvl}>
                                        <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.compulconb}>
                                <FaChevronRight  className={styles.chevron}/>
                            </div>
                        </div>
                        <div className={styles.compulcon}>
                            <div className={styles.compulcona}>
                                <div><img src="/3dgroup.png" alt="img" className={styles.compulimg}/></div> 
                                <div className={styles.compuldet}>
                                    <div className={styles.compulname}>Share To Friends </div>
                                    <div className={styles.compullvl}>
                                        <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.compulconb}>
                                <FaChevronRight  className={styles.chevron}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <BottomNav />
      </div>      
    </>
  );
};

export default Tasks;
