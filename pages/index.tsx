'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useGoalStore } from '@/utils/goal-store'
import GoalCard from '@/components/GoalCard'
import { useWorkoutStore } from '@/utils/workout-store'
import WorkoutCard from '@/components/WorkoutCard'
import { useMealStore } from '@/utils/meal-store'
import MealCard from '@/components/MealCard'
import { useUserStore } from '@/utils/user-store'
import UserCard from '@/components/UserCard'
import { useProgressStore } from '@/utils/progress-store'
import ProgressChart from '@/components/ProgressChart'
import { useSocialStore } from '@/utils/social-store'
import SocialFeed from '@/components/SocialFeed'

export default function Home() {
  const [session, loading] = useSession()
  const { goals } = useGoalStore()
  const { workouts } = useWorkoutStore()
  const { meals } = useMealStore()
  const { user } = useUserStore()
  const { progress } = useProgressStore()
  const { socialFeed } = useSocialStore()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse w-48 h-48 rounded-full bg-gray-200" />
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-start gap-10">
        <UserCard user={user} />

        <h1 className="text-4xl font-bold">
          Welcome to Your Fitness Journey!
        </h1>

        {/* Display Goals */}
        {goals.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        )}

        {/* Display Workouts */}
        {workouts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}

        {/* Display Meals */}
        {meals.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        )}

        {/* Display Progress Chart */}
        {progress && <ProgressChart progress={progress} />}

        {/* Display Social Feed */}
        <SocialFeed posts={socialFeed} />
      </div>
    </main>
  )
}