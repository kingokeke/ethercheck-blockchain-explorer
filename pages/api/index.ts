import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = {message: 'Server is running...'}
  res.status(200).json(response);
}
