export interface TransactionHistoryData {
  date: string;
  transactions: number;
  price: number
}

const dummyTransactionHistoryData: TransactionHistoryData[] = [
  {
    date: 'Feb 19',
    transactions: 1000000,
    price: 2800
  },
  {
    date: 'Feb 20',
    transactions: 1300000,
    price: 2850
  },
  {
    date: 'Feb 21',
    transactions: 1200000,
    price: 2900
  },
  {
    date: 'Feb 22',
    transactions: 1500000,
    price: 2800
  },
  {
    date: 'Feb 23',
    transactions: 1400000,
    price: 2750
  },
  {
    date: 'Feb 24',
    transactions: 1100000,
    price: 2850
  },
  {
    date: 'Feb 25',
    transactions: 1200000,
    price: 3000
  },
];

export default dummyTransactionHistoryData