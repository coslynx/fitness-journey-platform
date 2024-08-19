'use client'

import { useGoalStore } from '@/utils/goal-store'

export default function GoalCard({ goal }: { goal: { id: number; name: string; target: number; targetDate: Date; metric: string; progress: number } }) {
  const { deleteGoal } = useGoalStore()

  const handleDelete = async () => {
    try {
      await deleteGoal(goal.id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold text-gray-800 text-xl mb-2">{goal.name}</h3>
      <p className="text-gray-600 text-sm mb-2">Target: {goal.target} {goal.metric}</p>
      <p className="text-gray-600 text-sm mb-2">Target Date: {goal.targetDate.toLocaleDateString()}</p>
      <p className="text-gray-600 text-sm mb-2">Progress: {goal.progress}%</p>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </div>
  )
}