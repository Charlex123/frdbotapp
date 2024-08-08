'use client'
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/deleteaccount.module.css";
import { useTelegram } from "../provider";
import { useAppUser } from "../provider";
import { FaChevronRight, FaXmark } from "react-icons/fa6";
import TopHeader from "../components/TopHeader";

interface DeleteAccountProps {
    toggleDisplay?: () => void;
}

const DeleteAccount: NextPage<DeleteAccountProps> = ({ toggleDisplay}) => {

    const { user } = useTelegram();
    const { fetchAndUpdateUser } = useAppUser();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // const chat_id = user.id;
    const chat_id = 730149343;

    const Delete = async() => {
        
        try {
            await fetch(`${apiUrl}/api/users/${chat_id}/deleteaccount`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chat_id: chat_id }),
            });
            await fetchAndUpdateUser(chat_id);  // Call fetchAndUpdateUser after updating exchange
            toggleDisplay!;
        } catch (error) {
            console.error("Error updating exchange:", error);
        }

    };


    return (
        <div className={styles.deleteaccount} id="deleteaccount">
            <div className={styles.close} onClick={toggleDisplay}>
                <FaXmark />
            </div>
            <TopHeader />
            <div className={styles.deleteaccountc}>
                <div className={styles.header}>
                    <h2>Delete My Account</h2>
                </div>

                <div className={styles.deleteaccountlist}>
                    <div className={styles.deleteaccountlistmain}>
                        <div className={styles.deleteaccountlistmainc}>
                            <h2>Are you sure you want to delete your account?</h2>
                            <div>
                                <p>
                                    Delete your account will terminate all your points and reward accumulations. All your efforts till date will vanish!
                                </p>
                            </div>
                            <div className={styles.del_btns}>
                                <div>
                                    <button type="button" className={styles.btn_cancel} onClick={toggleDisplay}>
                                        Cancel
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className={styles.btn_delete} onClick={Delete}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
