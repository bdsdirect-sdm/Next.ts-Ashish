// import type { NextApiRequest, NextApiResponse } from 'next';
// import sequelize from '@/lib/sequelize';
// import User from '@/models/User';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync({ alter: true });
//     res.status(200).json({ message: 'Database synchronized successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: 'Database sync failed', details: error });
//   }
// }
