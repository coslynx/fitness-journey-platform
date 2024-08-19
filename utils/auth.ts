import { getServerSession } from 'next-auth/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const session = await getServerSession({ req });
        if (session) {
          const user = await prisma.user.findUnique({
            where: {
              email: session.user.email,
            },
          });
          res.status(200).json(user);
        } else {
          res.status(401).json({ message: 'Unauthorized' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get user' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}