'use client'
import React, { useState } from 'react';
import { NextPage } from 'next';
import styles from '../styles/languagesdropdown.module.css'
import { FaChevronRight } from 'react-icons/fa';

interface Option {
    value: string;
    label: string;
}
  
interface LanguageDropdownProps {
    selectedvalue: string;
    toggleLangSet?: () => void;
    onLanguageSelect: (selectedLanguage: string) => void;
}

const LanguageDropdown: NextPage<LanguageDropdownProps> = ({ selectedvalue, toggleLangSet, onLanguageSelect }) => {

    const [selectedValue, setSelectedValue] = useState<string>(selectedvalue);

    const handleChange = (value: string) => {
        setSelectedValue(value);
        if (toggleLangSet) {
            toggleLangSet();
        }
        onLanguageSelect(value);
    };

    const languages: Option[] = [
        { value: 'de', label: 'Deutsch (de)' },
        { value: 'en', label: 'English (en)' },
        { value: 'es', label: 'Espanol (es)' },
        { value: 'fr', label: 'Francais (fr)' },
    ];

    return (
        <>
            <div className={styles.language}>
                <h2>Select Language</h2>
                <div className={styles.languagelist}>
                    <div className={styles.languagelistmain}>
                        <div className={styles.languagelistmainc}>
                            {languages.map((lang, index) => (
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LanguageDropdown;
