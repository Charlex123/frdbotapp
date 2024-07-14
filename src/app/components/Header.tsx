'use client'
import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/header.module.css";
import { FaGear } from "react-icons/fa6";
import TopHeader from "./TopHeader";
import Exchanges from "./Exchanges";
import Settings from "./Settings";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
    const [selectedExchange, setSelectedExchange] = useState<string>('');
    const [exchanges, setExchanges] = useState(false);
    const [settings, setSettings] = useState(false);

    const toggleExchangesDisplay = () => {
        setExchanges(prev => !prev);
    }

    const handleExchangeSelect = (exchange: string) => {
        setSelectedExchange(exchange);
        setExchanges(false); // Hide dropdown when a language is selected
    };


    const toggleSettings = () => {
        setSettings(prev => !prev)
    }

    return (
        <>
            {exchanges && <Exchanges selectedexchange={selectedExchange}  toggleDisplay={toggleExchangesDisplay} onExchangeSelect={handleExchangeSelect} />}
            {settings && <Settings toggleDisplay={toggleSettings} />}
            <div className={styles.head}>
                <TopHeader />
                <div className={styles.profile}>
                    <Image src="/frdlogo300.png" alt="user profile" width={30} height={30} className={styles.pimage} />
                    <div className={styles.badge}>Charles More (Gamer Supa)</div>
                </div>
                <nav className={[styles.userinfo, className].join(" ")}>
                    <div className={styles.level}>
                        <div className={styles.levelTitle}>
                            <div className={styles.currentLevel}>
                                <div className={styles.epic}>Epic</div>
                                <div className={styles.levelIcon}>
                                    <img
                                        className={styles.levelImageIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/vector-1.svg"
                                    />
                                </div>
                            </div>
                            <div className={styles.level610}>
                                <span>{`Level `}</span>
                                <span className={styles.span}>6/10</span>
                            </div>
                        </div>
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <div className={styles.levelBackground} />
                        </div>
                    </div>

                    <div className={styles.details}>
                        <button type="button" onClick={toggleExchangesDisplay} style={{border: 'none', backgroundColor: 'none'}}>
                            <img src="/union-2.svg" alt="pic" />
                        </button>
                        <div className={styles.b_earn}>
                            <div>profit per hour</div>
                            <div className={styles.bst_earn}>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.bimg} /></div>
                                <div>+680</div>
                                <div><img src="/group-9-2.svg" alt="img" className={styles.bimg} /></div>
                            </div>
                        </div>
                        <div>
                            <FaGear size={22} className={styles.settingsicon} onClick={toggleSettings} />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
