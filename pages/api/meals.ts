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
        const meals = await prisma.meal.findMany();
        res.status(200).json(meals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch meals' });
      }
      break;
    case 'POST':
      try {
        const { name, description, calories, date, time } = req.body;
        const meal = await prisma.meal.create({
          data: {
            name,
            description,
            calories,
            date,
            time,
          },
        });
        res.status(201).json(meal);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create meal' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}