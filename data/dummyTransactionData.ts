import { TransactionSummaryProps } from "../models/transactionSummary.model";

const dummyTransactionData: TransactionSummaryProps = {
  transaction: {
    hash: "0x3f455538cc4dc7f317b5b47569ac5493f3d61fbca53b2e8ffd8b4b016f66bd9a",
    fromAddress: "0x3f455538cc4dc7f317b5b47569ac5493f3d61fbca53b2e8ffd8b4b016f66bd9a",
    toAddress: "0x3f455538cc4dc7f317b5b47569ac5493f3d61fbca53b2e8ffd8b4b016f66bd9a",
    timestamp: Date.now() - 10000,
    amount: 2.34,
  }
};

export default dummyTransactionData;
