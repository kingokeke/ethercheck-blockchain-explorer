import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TransactionHistoryData } from '../data/dummyTransactionHistoryData';

export interface TransactionHistoryDataProps {
  data: TransactionHistoryData[];
}

const TransactionHistoryChart = ({data}: TransactionHistoryDataProps) => (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="transactions" stroke="#111" dot={false} activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
);

export default TransactionHistoryChart;