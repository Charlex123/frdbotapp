'use client'
import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/exchanges.module.css"
import { FaChevronRight, FaXmark } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";

interface Option {
    name: string;
    image: string;
}
  
interface ExchangeProps {
    selectedexchange: string;
    toggleDisplay?: () => void;
    onExchangeSelect: (selectedExchange: string) => void;
}

const Exchanges: NextPage<ExchangeProps> = ({ selectedexchange,toggleDisplay , onExchangeSelect}) => {

    const [selectedExchange, setSelectedExchange] = useState<string>(selectedexchange);

    const handleChange = (exchange: string) => {
        setSelectedExchange(exchange);
        if (toggleDisplay) {
            toggleDisplay();
        }
        onExchangeSelect(exchange);
    };

    const exchanges: Option[] = [
        { name: 'Binance', image: '/group-9-2.svg' },
        { name: 'OKX', image: '/okx-seeklogo.svg' },
        { name: 'Kucoin', image: '/kucoin-token-kcs-logo.svg' },
        { name: 'Bitget', image: '/bitget-token-new-bgb-logo.svg' },
    ];

    return (
        <div className={styles.exchanges} id="exchanges">
            <div className={styles.close} onClick={toggleDisplay}>
                <FaXmark />
            </div>
            <TopHeader />
            <div className={styles.exchangesc}>
                <div className={styles.header}>
                    <h2>Exchanges</h2>
                </div>

                {/* {languages.map((lang, index) => (
                    <div className={styles.languagecon} key={index} onClick={() => handleChange(lang.label)}>  
                        <div className={styles.languagecona}>
                            <div className={styles.languagedet}>
                                <div className={styles.languagename}>
                                    {lang.label}
                                </div>
                            </div>
                        </div>
                        <div className={styles.languageconb}>
                            <FaChevronRight />
                        </div>
                    </div>
                ))} */}

                <div className={styles.exchangeslist}>
                    <div className={styles.exchangeslistmain}>
                        <div className={styles.exchangeslistmainc}>
                            {exchanges.map((exchange,index) => (
                                <div className={styles.exchangescon} key={index} onClick={() => handleChange(exchange.name)} >
                                    <div className={styles.exchangescona}>
                                        <div><img src={exchange.image} alt="img" className={styles.exchangesimg} /></div>
                                        <div className={styles.exchangesdet}>
                                            <div className={styles.exchangesname}>{exchange.name}</div>
                                        </div>
                                    </div>
                                    <div className={styles.exchangesconb}>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exchanges;
