import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlockSummary from '../components/blockSummary';
import SiteContainer from '../components/layout/container';
import ListCard from '../components/listcard';
import styles from '../styles/home.module.scss';
import dummyBlockData from '../data/dummyBlockData';
import TransactionSummary from '../components/transactionSummary';
import dummyTransactionData from '../data/dummyTransactionData';
import TransactionHistoryChart from '../components/TransactionHistoryChart';
import dummyTransactionHistoryData from '../data/dummyTransactionHistoryData';

const Home: NextPage = () => {
  return (
    <main className={styles.home}>
      <section className={styles.home__search_section}>
        <SiteContainer>
          <div className={styles.home__search_form}>
            <p className={styles.home__search_form_title}>The Ethereum Blockchain Explorer</p>
            <div className={styles.home__search_form_content}>
              <select name="search" title="search" id="" className={styles.home__search_form_select_field}>
                <option value="a">All Filters</option>
                <option value="b">Addresses</option>
                <option value="c">Tokens</option>
                <option value="c">Name Tags</option>
                <option value="c">Labels</option>
                <option value="c">Websites</option>
              </select>
              <input type="text" className={styles.home__search_form_input_field} placeholder="Search by Address / Txn Hash / Block / Token" />
              <Link href="#" passHref>
                <button className={styles.home__search_form_search_button}>
                  <Image src='/search.png' width={30} height={30} />
                </button>
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>
      <section className={styles.home__stats_section}>
        <SiteContainer>
          <div className={`${styles.home__stats_summary} card`}>
            <div className={styles.home__stats_summary_section_one}>
              <div className={styles.home__stats_summary_price}>
                <div className={styles.home__stats_summary_price_icon}>
                  <Image src="/ethereum icon.png" height="20px" width="20px" />
                </div>
                <div className={styles.home__stats_summary_price_content}>
                  <p className={styles.home__stats_summary_price_content_title}>Ether Price</p>
                  <p className={styles.home__stats_summary_price_content_value}>$2800</p>
                </div>
              </div>
              <hr className='horizontal-divider' />
              <div className={styles.home__stats_summary_marketcap}>
                <div className={styles.home__stats_summary_marketcap_icon}>
                  <Image src="/globe_icon.png" height="20px" width="20px" />
                </div>
                <div className={styles.home__stats_summary_marketcap_content}>
                  <p className={styles.home__stats_summary_marketcap_content_title}>Market Cap</p>
                  <p className={styles.home__stats_summary_marketcap_content_value}>$300,800,000,000</p>
                </div>
              </div>
            </div>
            <div className={styles.home__stats_summary_section_two}>
              <div className={styles.home__stats_summary_transactions}>
                <div className={styles.home__stats_summary_transactions_icon}>
                  <Image src="/transaction.png" height="30px" width="30px" />
                </div>
                <div className={styles.home__stats_summary_transactions_content}>
                  <div className="">
                    <p className={styles.home__stats_summary_transactions_content_title}>Transactions</p>
                    <p className={styles.home__stats_summary_transactions_content_value}>1,234.56 M <span className=''>(15TPS)</span></p>
                  </div>
                  <div className="text-right">
                    <p className={styles.home__stats_summary_transactions_content_title}>Med Gas Price</p>
                    <p className={styles.home__stats_summary_transactions_content_value}>49 Gwei <span className=''>($2.80)</span></p>
                  </div>
                </div>
              </div>
              <hr className='horizontal-divider' />
              <div className={styles.home__stats_summary_difficulty}>
                <div className={styles.home__stats_summary_difficulty_icon}>
                  <Image src="/mining.png" height="30px" width="30px" />
                </div>
                <div className={styles.home__stats_summary_difficulty_content}>
                  <div className="">
                    <p className={styles.home__stats_summary_difficulty_content_title}>Difficulty</p>
                    <p className={styles.home__stats_summary_difficulty_content_value}>12,345.67 TH</p>
                  </div>
                  <div className="text-right">
                    <p className={styles.home__stats_summary_difficulty_content_title}>Hash Rate</p>
                    <p className={styles.home__stats_summary_difficulty_content_value}>1,234,567 GH/s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home__stats_summary_section_three}>
              <div className={styles.home__stats_summary_transaction_history_chart}>
                <TransactionHistoryChart data={ dummyTransactionHistoryData }/>
              </div>
            </div>
          </div>
          <div className={styles.home__stats_latest}>
            <div className={styles.home__stats_latest_blocks}>
              <ListCard title='Latest Blocks' link='#' buttonText='View all blocks'>
                {new Array(10).fill(0).map((_, index) => (
                  <div key={index}>
                    {index !== 0 && <hr className='horizontal-divider' />}
                    <BlockSummary  {...dummyBlockData} />
                  </div>
                ))}
              </ListCard>
            </div>
            <div className={styles.home__stats_latest_transactions}>
              <ListCard title='Latest Transactions' link='#' buttonText='View all transactions'>
                {new Array(10).fill(0).map((_, index) => (
                  <div key={index}>
                    {index !== 0 && <hr className='horizontal-divider' />}
                    <TransactionSummary  {...dummyTransactionData} />
                  </div>
                ))}
              </ListCard>
            </div>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
};

export default Home;
