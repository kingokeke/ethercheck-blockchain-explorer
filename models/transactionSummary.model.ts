export interface TransactionSummaryProps {
  transaction: {
    hash: string;
    fromAddress: string;
    toAddress: string;
    timestamp: number;
    amount: number;
  },
}
