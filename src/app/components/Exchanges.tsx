'use client'
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/exchanges.module.css";
import { useTelegram } from "../provider";
import { useAppUser } from "../provider";
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

    const [exchange, setSelectedExchange] = useState<string>(selectedexchange);
    const { user } = useTelegram();
    const { fetchAndUpdateUser } = useAppUser();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const chat_id = user!.id;
    // const chat_id = 730149343;

    useEffect(() => {
        setSelectedExchange(selectedexchange);
    }, [selectedexchange]);

    const handleChange = async(exchange: string) => {
        setSelectedExchange(exchange);
        
        try {
            await fetch(`${apiUrl}/api/users/${chat_id}/updateexchange`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ exchange: exchange }),
            });
            await fetchAndUpdateUser(chat_id);  // Call fetchAndUpdateUser after updating exchange
            onExchangeSelect(exchange);
            toggleDisplay!;
        } catch (error) {
            console.error("Error updating exchange:", error);
        }

    };

    const exchanges: Option[] = [
        { name: 'Binance', image: '/bnb-bnb-logo.svg' },
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
