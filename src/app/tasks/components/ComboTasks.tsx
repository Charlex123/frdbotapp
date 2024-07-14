import React, { useState, useEffect } from 'react';
import styles from '../../styles/combotasks.module.css'
import moment from 'moment';
import { FaChevronRight } from 'react-icons/fa6';

const ComboTasks: React.FC = () => {
  
  return (
    <div className={styles.tabmain}>
        <div>
            <h3>
                Combo Tasks
            </h3>
        </div>
        
        <div className="p-4">
        <div className={styles.day}>
            <div className={styles.daymain}>
                <div className={styles.daymainc}>
                    <div className={styles.daycon}>
                        <div className={styles.daycona}>
                            <div><img src="/3dyoutube.png" alt="img" className={styles.dayimg}/></div> 
                            <div className={styles.daydet}>
                                <div className={styles.dayname}>Watch Youtube Video</div>
                                <div className={styles.daylvl}>
                                    <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dayconb}>
                            <FaChevronRight className={styles.chevron}/>
                        </div>
                    </div>
                    <div className={styles.daycon}>
                        <div className={styles.daycona}>
                            <div><img src="/3dxlogo.png" alt="img" className={styles.dayimg}/></div> 
                            <div className={styles.daydet}>
                                <div className={styles.dayname}>Repost, Like And Tweet </div>
                                <div className={styles.daylvl}>
                                    <img src="/group-9-2.svg" alt="img" className={styles.img1}/> <div>1.99M</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dayconb}>
                            <FaChevronRight  className={styles.chevron}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ComboTasks;
