'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useGoalStore } from '@/utils/goal-store'
import GoalCard from '@/components/GoalCard'
import { useUserStore } from '@/utils/user-store'
import UserCard from '@/components/UserCard'
import { useProgressStore } from '@/utils/progress-store'
import ProgressChart from '@/components/ProgressChart'
import { useSocialStore } from '@/utils/social-store'
import SocialFeed from '@/components/SocialFeed'
import GoalForm from '@/components/GoalForm'

export default function Goals() {
  const [session, loading] = useSession()
  const { user } = useUserStore()
  const { goals, addGoal } = useGoalStore()
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
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Goals</h1>
      <UserCard user={user} />
      <div className="mt-8">
        <GoalForm addGoal={addGoal} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
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