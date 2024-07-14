'use client'
import { useState, useRef } from "react";
import type { NextPage } from "next";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import styles from "../styles/community.module.css"
import BottomNav from "../components/BottomNav";
import { FaCopy } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";

const Community: NextPage = () => {
    const [toggleMoreBonus, setToggleMoreBonuses] = useState<boolean>(false);

    const toggleMoreBonuses = () => {
        setToggleMoreBonuses(!toggleMoreBonus);
    }

  return (
    <>
      <div className={styles.community}>
      <TopHeader />
        <div className={styles.communityc}>
            <div className={styles.header}>
                <h2>Invite your friends!</h2>
                <h3>Grow your community</h3>
                <h4>You and your friends will earn points</h4>
            </div>
            <div className={styles.cearn}>
                <div className={styles.cearnc}>
                    <div>
                        <img src="/group-9-3.svg" alt="image" className={styles.img}/>
                    </div>
                    <div>
                        <h3>Invite a friend</h3>
                        <div className={styles.el}><img src="/group-9-2.svg" alt="image" className={styles.img1}/> <div><span>+5,000</span> for you and your friend</div></div>
                    </div>
                </div>
                <div className={styles.cearnc}>
                    <div>
                        <img src="/group-9-3.svg" alt="image" className={styles.img}/>
                    </div>
                    <div>
                        <h3>Invite a friend with Telegram Premium</h3>
                        <div className={styles.el}><img src="/group-9-2.svg" alt="image" className={styles.img1}/> <div><span>+25,000</span> for you and your friend</div></div>
                    </div>
                </div>
            </div>
            <div className={styles.mbonuses} >
                <div><button onClick={toggleMoreBonuses}>More bonuses</button></div>
                {toggleMoreBonus && 
                    <div className={`${styles.bonuseslist}`} id="morebonuses">
                    <h3>
                        Bonuses for leveling up
                    </h3>
                    <div className={styles.blisthead}>
                        <div>
                            Level
                        </div>
                        <div>
                            For friend
                        </div>
                        <div>
                            Premium
                        </div>
                    </div>
                    <div className={styles.blistcon}>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.bcon}>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img0}/> <div className={styles.lvlname}>Beginner</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+20,000</div>
                            </div>
                            <div>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>

            <div className={styles.reflist}>
                <h3>List of your community members (3) </h3>
                <div className={styles.reflistmain}>
                    <div className={styles.reflistmainc}>
                        <div className={styles.refcon}>
                            <div className={styles.refcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.refconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.refcon}>
                            <div className={styles.refcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.refconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.refcon}>
                            <div className={styles.refcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.refconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                        <div className={styles.refcon}>
                            <div className={styles.refcona}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.refimg}/></div> 
                                <div className={styles.refdet}>
                                    <div className={styles.refname}>John Jegede</div>
                                    <div className={styles.reflvl}>
                                        <div>Beginner</div> <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.refconb}>
                                <img src="/group-9-2.svg" alt="img" className={styles.img1} /> <div className={styles.lvl}>+25,0000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.reflink}>
                <h3>Share to grow your community </h3>
                <input type="text" value={`https://t.me/start/234567654321345`}/>
                <div className={styles.refbtns}>
                    <button className={styles.sharebtn}>
                        Invite a friend
                    </button>
                    <button className={styles.copybtn}>
                        <FaCopy />
                    </button>
                </div>
            </div>
        </div>
        <BottomNav />
      </div>      
    </>
  );
};

export default Community;
