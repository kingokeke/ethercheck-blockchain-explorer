import type { NextPage } from 'next'
import Image from 'next/image';
import SiteContainer from '../components/layout/container';
import ListCard from '../components/listcard';
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.home}>
      <section className={styles.home__search_section}>
        <SiteContainer>
          <div className={styles.home__search_form}>
            <p className={styles.home__search_form_title}>The Ethereum Blockchain Explorer</p>
            <input type="text" className={styles.home__search_form_field}/>
          </div>
        </SiteContainer>
      </section>
      <section className={styles.home__stats_section}>
        <SiteContainer>
          <div className={`${styles.home__stats_summary} card`}>
            <div className={styles.home__stats_summary_section_one}>
              <div className={styles.home__stats_summary_price}>
                <div className={styles.home__stats_summary_price_icon}>
                  <Image src="/ethereum icon.png" height="20px" width="20px"/>
                </div>
                <div className={styles.home__stats_summary_price_content}>
                  <p className={styles.home__stats_summary_price_content_title}>Ether Price</p>
                  <p className={styles.home__stats_summary_price_content_value}>$2800</p>
                </div>
              </div>
              <hr className='horizontal-divider' />
              <div className={styles.home__stats_summary_marketcap}>
                <div className={styles.home__stats_summary_marketcap_icon}>
                  <Image src="/globe_icon.png" height="20px" width="20px"/>
                </div>
                <div className={styles.home__stats_summary_marketcap_content}>
                  <p className={styles.home__stats_summary_marketcap_content_title}>Market Cap</p>
                  <p className={styles.home__stats_summary_marketcap_content_value}>$300,800,000,000</p>
                </div>
              </div>
            </div>
            <div className={styles.home__stats_summary_section_two}>
              <div className={styles.home__stats_summary_transactions}>Transactions</div>
              <div className={styles.home__stats_summary_difficulty}>Hash Difficulty</div>
            </div>
            <div className={styles.home__stats_summary_section_three}>3</div>
          </div>
          <div className={styles.home__stats_latest}>
            <div className={styles.home__stats_latest_blocks}>
              <ListCard title='Latest Blocks' link='#' buttonText='View all blocks'>
              </ListCard>
            </div>
            <div className={styles.home__stats_latest_transactions}>
              <ListCard title='Latest Transactions' link='#' buttonText='View all transactions'>
              </ListCard>
            </div>
          </div>
        </SiteContainer>
      </section>
    </main>
  )
}

export default Home
