import { BlockSummaryProps } from '../models/blockSummary.model';
import styles from '../styles/blockSummary.module.scss';
import computeTimeSince from '../utilities/computeTimeSince';

const BlockSummary = ({ block }: BlockSummaryProps) => {
  const { number, timestamp, miner, reward, transactions, duration } = block;

  return (
    <div className={styles.blockSummary_wrapper}>
      <div className={styles.blockSummary_number}>
        <div className={styles.blockSummary_number_icon}>Bk</div>
        <div className={styles.blockSummary_number_details}>
          <p className={styles.blockSummary_number_value}>{number}</p>
          <p className={styles.blockSummary_number_time}>{computeTimeSince(timestamp)}</p>
        </div>
      </div>
      <div className={styles.blockSummary_miner}>
        <p className={styles.blockSummary_miner_name}>Miner {miner}</p>
        <p className={styles.blockSummary_miner_txns}>{`${transactions} ${transactions === 1 ? 'txn' : 'txns'}`} <span className={styles.blockSummary_miner_txns_time}>in {`${duration} ${duration === 1 ? 'sec' : 'secs'}`}</span></p>
      </div>
      <div className={styles.blockSummary_reward}>
        <div className={styles.blockSummary_reward_badge}>
          <p className={styles.blockSummary_reward_value}>{reward} Eth</p>
        </div>
      </div>
    </div>
  );
};

export default BlockSummary;