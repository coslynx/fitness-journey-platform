'use client'

import Image from 'next/image'
import { useMealStore } from '@/utils/meal-store'

export default function MealCard({ meal }: { meal: { name: string; description: string; calories: number; date: Date; time: string } }) {
  const { deleteMeal } = useMealStore()

  const handleDelete = async () => {
    try {
      await deleteMeal(meal.id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800 text-xl">{meal.name}</h3>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-2">{meal.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-bold text-sm">
          Calories: {meal.calories}
        </p>
        <p className="text-gray-600 font-bold text-sm">
          {meal.date.toLocaleDateString()} - {meal.time}
        </p>
      </div>
    </div>
  )
}