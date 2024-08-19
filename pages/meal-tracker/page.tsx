'use client'

import { useState, useEffect } from 'react'
import { useMealStore } from '@/utils/meal-store'
import MealCard from '@/components/MealCard'
import { useSession } from 'next-auth/react'

export default function MealTracker() {
  const [session, loading] = useSession()
  const { meals, getMeals } = useMealStore()

  useEffect(() => {
    if (session) {
      getMeals()
    }
  }, [session, getMeals])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse w-48 h-48 rounded-full bg-gray-200" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Meal Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  )
}