'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useUserStore } from '@/utils/user-store'
import { useGoalStore } from '@/utils/goal-store'
import { useWorkoutStore } from '@/utils/workout-store'
import { useMealStore } from '@/utils/meal-store'
import { useProgressStore } from '@/utils/progress-store'
import { useSocialStore } from '@/utils/social-store'
import UserCard from '@/components/UserCard'
import GoalCard from '@/components/GoalCard'
import WorkoutCard from '@/components/WorkoutCard'
import MealCard from '@/components/MealCard'
import ProgressChart from '@/components/ProgressChart'
import SocialFeed from '@/components/SocialFeed'

export default function Profile() {
  const [session, loading] = useSession()
  const { user } = useUserStore()
  const { goals } = useGoalStore()
  const { workouts } = useWorkoutStore()
  const { meals } = useMealStore()
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile</h1>
      <UserCard user={user} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Progress</h2>
        <ProgressChart progress={progress} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Feed</h2>
        <SocialFeed posts={socialFeed} />
      </div>
    </div>
  )
}