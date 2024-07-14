'use client'
import type { NextPage } from "next";
import styles from "../styles/testnet.module.css"
import BottomNav from "../components/BottomNav";
import { FaChevronRight } from "react-icons/fa6";
import ImageWithRays from "../components/ImageWIthRays";
import TopHeader from "../components/TopHeader";

const Testnet: NextPage = () => {
    

  return (
    <>
      <div className={styles.testnet}>
        <TopHeader />
        <div className={styles.testnetc}>
            <div className={styles.header}>
                <ImageWithRays src="/frdlogo300.png" alt="Image" />
                <h2>Welcome To Fifareward Testnet</h2>
                <h3>Be among out community testnet testers to earn amazing rewards and climb to the upper echelon of Fifareward community ranking</h3>
            </div>
            
            <blockquote>
                <p>To qualify to participate in our community testnet, you must have a minimum of <span><img src="/group-9-2.svg" alt="icon" className={styles.icon} />+5m points</span></p>
            </blockquote>

            <div className={styles.about}>
                <img src="/papyrus.png" alt="papyrus" className={styles.papyrus}/>
                <div className={styles.abt}>
                    <h3>About Fifareward</h3>
                    <p>Fifareward is a multichain token that can be transacted in: </p>
                    <ul>
                        <li>
                            <img className={styles.unionIcon} loading="lazy" alt="" src="/bnb-bnb-logo.svg" />BSC
                        </li>
                        <li>
                            <img className={styles.unionIcon} loading="lazy" alt="" src="/solana-sol-logo.svg" /> Solana
                        </li>
                        <li> 
                            <img className={styles.unionIcon} loading="lazy" alt="" src="/ethereum-eth-logo.svg" /> ETH\
                        </li>
                        <li>
                            <img className={styles.unionIcon} loading="lazy" alt="" src="/polygon-matic-logo.svg" />Matic
                        </li>
                        <li>
                            <img className={styles.unionIcon} loading="lazy" alt="" src="/toncoin-ton-logo.svg" />Ton
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.tnet}>
                <h3>List community testnet participants </h3>
                <div className={styles.tnetmain}>
                    <div className={styles.tnetmainc}>
                        <div className={styles.tnetcon}>
                            <div className={styles.tnetcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tnetconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.tnetcon}>
                            <div className={styles.tnetcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tnetconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.tnetcon}>
                            <div className={styles.tnetcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tnetconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.tnetcon}>
                            <div className={styles.tnetcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tnetconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
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

export default Testnet;
