'use client'

import Image from 'next/image'
import { useWorkoutStore } from '@/utils/workout-store'

export default function WorkoutCard({ workout }: { workout: { name: string; type: string; duration: number; intensity: string; caloriesBurned: number; id: number } }) {
  const { deleteWorkout } = useWorkoutStore()

  const handleDelete = async () => {
    try {
      await deleteWorkout(workout.id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold text-gray-800 text-xl mb-2">{workout.name}</h3>
      <p className="text-gray-600 text-sm mb-2">Type: {workout.type}</p>
      <p className="text-gray-600 text-sm mb-2">Duration: {workout.duration} minutes</p>
      <p className="text-gray-600 text-sm mb-2">Intensity: {workout.intensity}</p>
      <p className="text-gray-600 text-sm mb-2">Calories Burned: {workout.caloriesBurned}</p>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </div>
  )
}