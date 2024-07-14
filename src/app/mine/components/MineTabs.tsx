import React, { useState } from 'react';
import styles from '../../styles/minetabs.module.css'

const MineTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabmain}>
      <div className={styles.tabmain_inner}>
        <div>
            <button
            className={`${activeTab === 0 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(0)}
            >
            Blockchain
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 1 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(1)}
            >
            Layer 1
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 2 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(2)}
            >
            Layer 2
            </button>
        </div>
        <div>
            <button
            className={`${activeTab === 3 ? styles.active : styles.tabbtn}`}
            onClick={() => setActiveTab(3)}
            >
            Roll Up
            </button>
        </div>
      </div>
      <div className="p-4">
        <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
            
            <div className={styles.chain}>
                <div className={styles.chain_c}>
                    <div className={styles.chain_d}>
                        <div className={styles.pairLabelsContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/bitcoin-btc-logo.svg"
                            />
                            <div className={styles.blkchain}>
                                <div className={styles.chainname}>BTC</div>
                                <div className={styles.profitPairValuesContainer}>
                                    <div className={styles.profitPerHour}>Profit per hour</div>
                                    <div className={styles.chain_e}>
                                        <img src='/group-9-2.svg' alt='image' className={styles.cimg}/>
                                        <div className={styles.k}>1.61K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinlvl}>
                            <div className={styles.clvl}>level 3 </div>
                            <div className={styles.ccoin}>
                                <img src='/group-9-2.svg' alt='image' className={styles.cimg} />
                                <div className={styles.k}>1.61K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.chain_c}>
                    <div className={styles.chain_d}>
                        <div className={styles.pairLabelsContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/ethereum-eth-logo.svg"
                            />
                            <div className={styles.blkchain}>
                                <div className={styles.chainname}>ETH</div>
                                <div className={styles.profitPairValuesContainer}>
                                    <div className={styles.profitPerHour}>Profit per hour</div>
                                    <div className={styles.chain_e}>
                                        <img src='/group-9-2.svg' alt='image' className={styles.cimg}/>
                                        <div className={styles.k}>1.61K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinlvl}>
                            <div className={styles.clvl}>level 3 </div>
                            <div className={styles.ccoin}>
                                <img src='/group-9-2.svg' alt='image' className={styles.cimg} />
                                <div className={styles.k}>1.61K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.chain_c}>
                    <div className={styles.chain_d}>
                        <div className={styles.pairLabelsContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/tether-usdt-logo.svg"
                            />
                            <div className={styles.blkchain}>
                                <div className={styles.chainname}>USDT</div>
                                <div className={styles.profitPairValuesContainer}>
                                    <div className={styles.profitPerHour}>Profit per hour</div>
                                    <div className={styles.chain_e}>
                                        <img src='/group-9-2.svg' alt='image' className={styles.cimg}/>
                                        <div className={styles.k}>1.61K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinlvl}>
                            <div className={styles.clvl}>level 3 </div>
                            <div className={styles.ccoin}>
                                <img src='/group-9-2.svg' alt='image' className={styles.cimg} />
                                <div className={styles.k}>1.61K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.chain_c}>
                    <div className={styles.chain_d}>
                        <div className={styles.pairLabelsContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/dogecoin-doge-logo.svg"
                            />
                            <div className={styles.blkchain}>
                                <div className={styles.chainname}>DOGE</div>
                                <div className={styles.profitPairValuesContainer}>
                                    <div className={styles.profitPerHour}>Profit per hour</div>
                                    <div className={styles.chain_e}>
                                        <img src='/group-9-2.svg' alt='image' className={styles.cimg}/>
                                        <div className={styles.k}>1.61K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinlvl}>
                            <div className={styles.clvl}>level 3 </div>
                            <div className={styles.ccoin}>
                                <img src='/group-9-2.svg' alt='image' className={styles.cimg} />
                                <div className={styles.k}>1.61K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.chain_c}>
                    <div className={styles.chain_d}>
                        <div className={styles.pairLabelsContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/xrp-xrp-logo.svg"
                            />
                            <div className={styles.blkchain}>
                                <div className={styles.chainname}>XRP</div>
                                <div className={styles.profitPairValuesContainer}>
                                    <div className={styles.profitPerHour}>Profit per hour</div>
                                    <div className={styles.chain_e}>
                                        <img src='/group-9-2.svg' alt='image' className={styles.cimg}/>
                                        <div className={styles.k}>1.61K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinlvl}>
                            <div className={styles.clvl}>level 3 </div>
                            <div className={styles.ccoin}>
                                <img src='/group-9-2.svg' alt='image' className={styles.cimg} />
                                <div className={styles.k}>1.61K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.chain_c}>
                    <div className={styles.chain_d}>
                        <div className={styles.pairLabelsContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/bnb-bnb-logo.svg"
                            />
                            <div className={styles.blkchain}>
                                <div className={styles.chainname}>BSC</div>
                                <div className={styles.profitPairValuesContainer}>
                                    <div className={styles.profitPerHour}>Profit per hour</div>
                                    <div className={styles.chain_e}>
                                        <img src='/group-9-2.svg' alt='image' className={styles.cimg}/>
                                        <div className={styles.k}>1.61K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinlvl}>
                            <div className={styles.clvl}>level 3 </div>
                            <div className={styles.ccoin}>
                                <img src='/group-9-2.svg' alt='image' className={styles.cimg} />
                                <div className={styles.k}>1.61K</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          <h2 className="text-2xl font-bold">Tab 2 Content</h2>
          <p>This is the content for the Tab 2.</p>
        </div>
        <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
          <h2 className="text-2xl font-bold">Tab 3 Content</h2>
          <p>This is the content for the Tab 3.</p>
        </div>
        <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
          <h2 className="text-2xl font-bold">Tab 4 Content</h2>
          <p>This is the content for the Tab 4.</p>
        </div>
      </div>
    </div>
  );
};

export default MineTabs;
