import React, { useState, useEffect } from 'react';
import styles from '../../styles/dailytasks.module.css'
import moment from 'moment';
import { FaChevronRight } from 'react-icons/fa6';

const DailyTasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [today_d,setToday_d] = useState<any>();
  const [today_dm,setToday_dm] = useState<any>();
  const [todaym,setTodaym] = useState<any>();
  const [tomorrow_d,setTomorrow_d] = useState<any>();
  const [tomorrow_dm,setTomorrow_dm] = useState<any>();
  const [tomorrowm,setTomorrowm] = useState<any>();
  const [nexttomorrow_d,setNextTomorrow_d] = useState<any>();
  const [nexttomorrow_dm,setNextTomorrow_dm] = useState<any>();
  const [nexttomorrowm,setNextTomorrowm] = useState<any>();
  const [nextthree_d,setNextThree_d] = useState<any>();
  const [nextthree_dm,setNextThree_dm] = useState<any>();
  const [nextthree_daysm,setNextThree_daysm] = useState<any>();
  const [nextfour_d,setNextFour_d] = useState<any>();
  const [nextfour_dm,setNextFour_dm] = useState<any>();
  const [nextfour_daysm,setNextFour_daysm] = useState<any>();

  useEffect(() => {
    const getDates:any = () => {
        let today_d_ = "Today";
        let today_dm_ = moment().format('DD, MMM');
        let today_m = moment().format("YYYY-MM-DD");
        let tomorrow_d_ = moment().add(1,'day').format('ddd');
        let tomorrow_dm_ = moment().add(1,'day').format('DD, MMM');
        let tomorrow_m = moment().add(1,'day').format("YYYY-MM-DD");
        let nexttomorrow_d_ = moment().add(2,'day').format('ddd');
        let nexttomorrow_dm_ = moment().add(2,'day').format('DD, MMM');
        let nexttomorrow_m = moment().add(2,'day').format('YYYY-MM-DD');
        let nextthree_d_ = moment().add(3,'day').format('ddd');
        let nextthree_dm_ = moment().add(3,'day').format('DD, MMM');
        let nextthree_dm = moment().add(3,'day').format('YYYY-MM-DD');
        let nextfour_d_ = moment().add(4,'day').format('ddd');
        let nextfour_dm_ = moment().add(4,'day').format('DD, MMM');
        let nextfour_dm = moment().add(4,'day').format('YYYY-MM-DD');
        
        setToday_d(today_d_);
        setToday_dm(today_dm_);
        setTodaym(today_m);
        setTomorrow_d(tomorrow_d_);
        setTomorrow_dm(tomorrow_dm_);
        setTomorrowm(tomorrow_m)
        setNextTomorrow_d(nexttomorrow_d_);
        setNextTomorrow_dm(nexttomorrow_dm_);
        setNextTomorrowm(nexttomorrow_m)
        setNextThree_d(nextthree_d_);
        setNextThree_dm(nextthree_dm_);
        setNextThree_daysm(nextthree_dm)
        setNextFour_d(nextfour_d_);
        setNextFour_dm(nextfour_dm_);
        setNextFour_daysm(nextfour_dm)
      }
      getDates()
    
  },[])
  return (
    <div className={styles.tabmain}>
        <div>
            <h3>
                Daily Tasks
            </h3>
        </div>
      <div className={styles.tabmain_inner}>
        <div>
            <button
            className={`${activeTab === 0 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(0)}
            >
            {today_d}
            <div className={styles.dm}>{today_dm}</div>
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 1 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(1)}
            >
            {tomorrow_d}
            <div className={styles.dm}>{tomorrow_dm}</div>
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 2 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(2)}
            >
            {nexttomorrow_d}
            <div className={styles.dm}>{nextthree_dm}</div>
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 3 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(3)}
            >
            {nextthree_d}
            <div className={styles.dm}>{nextthree_dm}</div>
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 4 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(4)}
            >
            {nextfour_d}
            <div className={styles.dm}>{nextfour_dm}</div>
            </button>
        </div>
      </div>
      <div className="p-4">
        <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
            
            <div className={styles.day}>
                <h3>List of your activities for today  </h3>
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

        <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          <p>Check back tomorrow for <span className={styles.fdate}>{tomorrow_dm}'s</span> tasks</p>
        </div>
        <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
          <p>Check back for <span className={styles.fdate}>{nexttomorrow_dm}'s</span> tasks </p>
        </div>
        <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
          <p>Check back for <span className={styles.fdate}>{nextthree_dm}'s</span> tasks</p>
        </div>
        <div style={{ display: activeTab === 4 ? 'block' : 'none' }}>
          <p>Check back for <span className={styles.fdate}>{nextfour_dm}'s</span> tasks</p>
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;
