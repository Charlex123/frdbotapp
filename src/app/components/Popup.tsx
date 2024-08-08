'use client'
import React, { useState, useEffect } from 'react';
import type { NextPage } from "next";
import styles from "../styles/popup.module.css";
import { useAppUser } from '../provider';
import { useTelegram } from '../provider';
import BottomNav from "../components/BottomNav";
import Confetti from 'react-confetti-boom';

const Popup: NextPage = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [isOpen, setIsOpen] = useState(false);
    const [earning,setEarnings] = useState('')
    const { user } = useTelegram();
    const chat_id = user!.id;
    // const chat_id = 730149343;
    const { appuser, fetchAndUpdateUser } = useAppUser();
    const [isExploding, setIsExploding] = useState(false);
    useEffect(() => {
        setIsExploding(true);
        setIsOpen(true)
    },[isExploding])

    const Claim = async() => {
        try {
            setIsOpen(false)
            await fetch(`${apiUrl}/api/users/${chat_id}/updatepoints`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ earning: earning }),
            });
            await fetchAndUpdateUser(chat_id);  
            
            // toggleDisplay!;
        } catch (error) {
            console.error("Error updating exchange:", error);
        }

    };

  return (
    <>
    {isOpen === true ? <div className={styles.popup}>
        <div className={styles.confetti}>{isExploding && <Confetti mode='fall' colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0', '#3498db']} shapeSize={18}/>}</div>
        <div className={styles.popupc}>
            <div className={styles.header}>
                <h4>Congratulations <span className={styles.worker}>{appuser?.exchange}</span> </h4>
                <p>Is working for you</p>
            </div>
            
            <div className={styles.popuplink}>
                <div className={styles.popupbtns}>
                    <button type='button' onClick={Claim} className={styles.sharebtn}>
                        {320000} Claim
                    </button>
                </div>
            </div>
        </div>
      </div> : ''}
    </>
  );
};

export default Popup;
