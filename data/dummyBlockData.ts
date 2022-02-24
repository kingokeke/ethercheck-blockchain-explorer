import { BlockSummaryProps } from "../models/blockSummary.model";

const dummyBlockData: BlockSummaryProps = {
  block: {
    number: 12345678,
    transactions: 22,
    timestamp: Date.now() - 10000,
    miner: 'F2Pool',
    reward: 2.34,
    duration: 5
  }
};

export default dummyBlockData;