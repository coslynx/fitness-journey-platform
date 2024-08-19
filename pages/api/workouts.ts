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
        const workouts = await prisma.workout.findMany();
        res.status(200).json(workouts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch workouts' });
      }
      break;
    case 'POST':
      try {
        const { name, type, duration, intensity, caloriesBurned } = req.body;
        const workout = await prisma.workout.create({
          data: {
            name,
            type,
            duration,
            intensity,
            caloriesBurned,
          },
        });
        res.status(201).json(workout);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create workout' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}