'use client'
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/settings.module.css"
import BottomNav from "../components/BottomNav";
import { FaChevronRight, FaXmark, } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";
import LanguageDropdown from "./LanguagesDropDown";
import Exchanges from "./Exchanges";

export type SettingsType = {
    toggleDisplay?: () => void;
}
const Settings: NextPage<SettingsType> = ({toggleDisplay}) => {
    const [exchanges, setExchanges] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [selectedExchange, setSelectedExchange] = useState<string>('');
    const [landdrpdown, setLangDrpDown] = useState(false);
    const [showlang, setShowLang] = useState(true);
    const [showexchange, setShowExchange] = useState(true);

    const toggleLangDropDown = () => {
        setLangDrpDown(prev => !prev)
    }

    const toggleLangSet = () => {
        setShowLang(prev => !prev)
    }

    const toggleExchangesDisplay = () => {
        setExchanges(prev => !prev);
    }

    const handleExchangeSelect = (language: string) => {
        setSelectedExchange(language);
        setShowExchange(true);
        setExchanges(false); // Hide dropdown when a language is selected
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        setShowLang(true);
        setLangDrpDown(false); // Hide dropdown when a language is selected
    };

  return (
    <>
      <div className={styles.settings} id="settings">
            <div className={styles.close} onClick={toggleDisplay}>
                <FaXmark />
            </div>
            {exchanges && <Exchanges selectedexchange={selectedExchange} toggleDisplay={toggleExchangesDisplay} onExchangeSelect={handleExchangeSelect} />}
            {landdrpdown && <LanguageDropdown selectedvalue={selectedLanguage} toggleLangSet={toggleLangSet} onLanguageSelect={handleLanguageSelect} /> }
            <TopHeader />
            <div className={styles.settingsc}>
                <div className={styles.header}>
                    <h2>settings</h2>
                </div>
                
                <div className={styles.settingslist}>
                    <div className={styles.settingslistmain}>
                        <div className={styles.settingslistmainc}>
                            {showlang && 
                            <div className={styles.settingscon} onClick={toggleLangDropDown}>
                                <div className={styles.settingscona}>
                                    <div className={styles.settingsdet}>
                                        <div className={styles.settingsname}>
                                            Select Language 
                                            <div>{selectedLanguage}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.settingsconb}>
                                    <FaChevronRight />
                                </div>
                            </div>}
                            {
                                showexchange && <div className={styles.settingscon}>
                                <div className={styles.settingscona}>
                                    <div className={styles.settingsdet}>
                                        <div className={styles.settingsname}>
                                            Choose Exchange
                                            <div>Binance</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.settingsconb}>
                                    <FaChevronRight />
                                </div>
                            </div>
                            }
                            <div className={styles.settingscon}>
                                <div className={styles.settingscona}>
                                    <div className={styles.settingsdet}>
                                        <div className={styles.settingsname}>Delete Account</div>
                                    </div>
                                </div>
                                <div className={styles.settingsconb}>
                                    <FaChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default Settings;
