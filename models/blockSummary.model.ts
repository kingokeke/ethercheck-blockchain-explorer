export interface BlockSummaryProps {
  block: {
    number: number;
    transactions: number;
    timestamp: number;
    miner: string;
    reward: number;
    duration: number;
  },
}
