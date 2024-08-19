'use client'

import { useState, useEffect } from 'react'
import { useWorkoutStore } from '@/utils/workout-store'
import WorkoutCard from '@/components/WorkoutCard'
import { useSession } from 'next-auth/react'

export default function WorkoutLog() {
  const [session, loading] = useSession()
  const { workouts, getWorkouts } = useWorkoutStore()

  useEffect(() => {
    if (session) {
      getWorkouts()
    }
  }, [session, getWorkouts])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse w-48 h-48 rounded-full bg-gray-200" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Workout Log</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  )
}