import { formatDate } from './date-helpers';

export const calculateProgress = (
  goal: { target: number; targetDate: Date; metric: string },
  progressData: { weight: number[]; date: Date[] }
): number => {
  const targetDate = new Date(goal.targetDate);
  const today = new Date();
  const daysRemaining = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysRemaining <= 0) {
    return 100;
  }

  const startDate = new Date(progressData.date[0]);
  const daysElapsed = Math.ceil(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (goal.metric === 'weight') {
    const startingWeight = progressData.weight[0];
    const currentWeight =
      progressData.weight[progressData.weight.length - 1] || startingWeight;
    const weightDifference = startingWeight - currentWeight;
    const weightProgress =
      (weightDifference / (goal.target - startingWeight)) * 100;
    return weightProgress;
  } else {
    const progress = (daysElapsed / (targetDate.getDate() - startDate.getDate())) * 100;
    return progress;
  }
};

export const calculateCaloriesBurned = (
  workouts: { duration: number; intensity: string }[]
): number => {
  let totalCaloriesBurned = 0;

  workouts.forEach((workout) => {
    if (workout.intensity === 'Low') {
      totalCaloriesBurned += workout.duration * 3;
    } else if (workout.intensity === 'Moderate') {
      totalCaloriesBurned += workout.duration * 5;
    } else if (workout.intensity === 'High') {
      totalCaloriesBurned += workout.duration * 8;
    }
  });

  return totalCaloriesBurned;
};

export const calculateTotalCaloriesConsumed = (meals: { calories: number }[]): number => {
  return meals.reduce((total, meal) => total + meal.calories, 0);
};

export const calculateWeightDifference = (
  progressData: { weight: number[]; date: Date[] }
): number => {
  if (progressData.weight.length < 2) {
    return 0;
  }
  const startingWeight = progressData.weight[0];
  const currentWeight =
    progressData.weight[progressData.weight.length - 1] || startingWeight;
  return startingWeight - currentWeight;
};

export const generateProgressData = (
  goals: { target: number; targetDate: Date; metric: string }[],
  workouts: { duration: number; intensity: string }[],
  meals: { calories: number }[],
  progressData: { weight: number[]; date: Date[] }
): { weight: number[]; date: Date[] }[] => {
  const progress = goals.map((goal) => {
    const totalCaloriesBurned = calculateCaloriesBurned(workouts);
    const totalCaloriesConsumed = calculateTotalCaloriesConsumed(meals);
    const weightDifference = calculateWeightDifference(progressData);

    const progressData = {
      weight: [
        progressData.weight[0],
        progressData.weight[progressData.weight.length - 1]
          ? progressData.weight[progressData.weight.length - 1]
          : progressData.weight[0],
      ],
      date: [progressData.date[0], new Date()],
    };

    return {
      ...goal,
      progress: calculateProgress(goal, progressData),
      weightDifference: weightDifference,
      caloriesBurned: totalCaloriesBurned,
      caloriesConsumed: totalCaloriesConsumed,
    };
  });
  return progress;
};

export const formatProgressData = (progressData: { weight: number[]; date: Date[] }[]): { weight: number[]; date: string[] }[] => {
  return progressData.map((data) => ({
    ...data,
    date: data.date.map(formatDate),
  }));
};