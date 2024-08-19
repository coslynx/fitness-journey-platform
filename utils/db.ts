import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUser = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
};

export const getGoals = async (userId: number) => {
  try {
    const goals = await prisma.goal.findMany({
      where: { userId },
    });
    return goals;
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw new Error('Failed to fetch goals');
  }
};

export const getWorkouts = async (userId: number) => {
  try {
    const workouts = await prisma.workout.findMany({
      where: { userId },
    });
    return workouts;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw new Error('Failed to fetch workouts');
  }
};

export const getMeals = async (userId: number) => {
  try {
    const meals = await prisma.meal.findMany({
      where: { userId },
    });
    return meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw new Error('Failed to fetch meals');
  }
};

export const getProgress = async (userId: number) => {
  try {
    const progress = await prisma.progress.findUnique({
      where: { userId },
    });
    return progress;
  } catch (error) {
    console.error('Error fetching progress:', error);
    throw new Error('Failed to fetch progress');
  }
};

export const createGoal = async (goal: {
  userId: number;
  name: string;
  target: number;
  targetDate: Date;
  metric: string;
}) => {
  try {
    const newGoal = await prisma.goal.create({
      data: {
        ...goal,
        progress: 0,
      },
    });
    return newGoal;
  } catch (error) {
    console.error('Error creating goal:', error);
    throw new Error('Failed to create goal');
  }
};

export const createWorkout = async (workout: {
  userId: number;
  name: string;
  type: string;
  duration: number;
  intensity: string;
  caloriesBurned: number;
}) => {
  try {
    const newWorkout = await prisma.workout.create({
      data: {
        ...workout,
      },
    });
    return newWorkout;
  } catch (error) {
    console.error('Error creating workout:', error);
    throw new Error('Failed to create workout');
  }
};

export const createMeal = async (meal: {
  userId: number;
  name: string;
  description: string;
  calories: number;
  date: Date;
  time: string;
}) => {
  try {
    const newMeal = await prisma.meal.create({
      data: {
        ...meal,
      },
    });
    return newMeal;
  } catch (error) {
    console.error('Error creating meal:', error);
    throw new Error('Failed to create meal');
  }
};

export const updateGoal = async (goalId: number, goal: {
  name: string;
  target: number;
  targetDate: Date;
  metric: string;
}) => {
  try {
    const updatedGoal = await prisma.goal.update({
      where: { id: goalId },
      data: goal,
    });
    return updatedGoal;
  } catch (error) {
    console.error('Error updating goal:', error);
    throw new Error('Failed to update goal');
  }
};

export const updateWorkout = async (workoutId: number, workout: {
  name: string;
  type: string;
  duration: number;
  intensity: string;
  caloriesBurned: number;
}) => {
  try {
    const updatedWorkout = await prisma.workout.update({
      where: { id: workoutId },
      data: workout,
    });
    return updatedWorkout;
  } catch (error) {
    console.error('Error updating workout:', error);
    throw new Error('Failed to update workout');
  }
};

export const updateMeal = async (mealId: number, meal: {
  name: string;
  description: string;
  calories: number;
  date: Date;
  time: string;
}) => {
  try {
    const updatedMeal = await prisma.meal.update({
      where: { id: mealId },
      data: meal,
    });
    return updatedMeal;
  } catch (error) {
    console.error('Error updating meal:', error);
    throw new Error('Failed to update meal');
  }
};

export const deleteGoal = async (goalId: number) => {
  try {
    await prisma.goal.delete({
      where: { id: goalId },
    });
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw new Error('Failed to delete goal');
  }
};

export const deleteWorkout = async (workoutId: number) => {
  try {
    await prisma.workout.delete({
      where: { id: workoutId },
    });
  } catch (error) {
    console.error('Error deleting workout:', error);
    throw new Error('Failed to delete workout');
  }
};

export const deleteMeal = async (mealId: number) => {
  try {
    await prisma.meal.delete({
      where: { id: mealId },
    });
  } catch (error) {
    console.error('Error deleting meal:', error);
    throw new Error('Failed to delete meal');
  }
};

export const updateProgress = async (userId: number, progress: {
  weight: number[];
  date: Date[];
}) => {
  try {
    const updatedProgress = await prisma.progress.update({
      where: { userId },
      data: {
        ...progress,
      },
    });
    return updatedProgress;
  } catch (error) {
    console.error('Error updating progress:', error);
    throw new Error('Failed to update progress');
  }
};