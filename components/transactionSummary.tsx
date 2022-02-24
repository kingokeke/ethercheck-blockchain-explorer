import { TransactionSummaryProps } from '../models/transactionSummary.model';
import styles from '../styles/transactionSummary.module.scss';
import computeTimeSince from '../utilities/computeTimeSince';

const TransactionSummary = ({ transaction }: TransactionSummaryProps) => {
  const { hash, timestamp, fromAddress, toAddress, amount } = transaction;

  return (
    <div className={styles.transactionSummary_wrapper}>
      <div className={styles.transactionSummary_number}>
        <div className={styles.transactionSummary_number_icon}>Tx</div>
        <div className={styles.transactionSummary_number_details}>
          <p className={styles.transactionSummary_number_hash}>{hash}</p>
          <p className={styles.transactionSummary_number_time}>{computeTimeSince(timestamp)}</p>
        </div>
      </div>
      <div className={styles.transactionSummary_addresses}>
        <p className={styles.transactionSummary_addresses_from}>From {fromAddress}</p>
        <p className={styles.transactionSummary_addresses_to}>To {toAddress}</p>
      </div>
      <div className={styles.transactionSummary_reward}>
        <div className={styles.transactionSummary_reward_badge}>
          <p className={styles.transactionSummary_reward_value}>{amount} Eth</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;