'use client'

import { useState, useEffect } from 'react'
import { useProgressStore } from '@/utils/progress-store'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js'

Chart.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title)

export default function ProgressChart({ progress }: { progress: { weight: number[]; date: Date[] } }) {
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: { label: string; data: number[]; borderColor: string; tension: number }[] }>({
    labels: [],
    datasets: [
      {
        label: 'Weight',
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.4,
      },
    ],
  })

  useEffect(() => {
    if (progress) {
      const labels = progress.date.map((date) => date.toLocaleDateString())
      setChartData({
        labels,
        datasets: [
          {
            label: 'Weight',
            data: progress.weight,
            borderColor: 'rgb(53, 162, 235)',
            tension: 0.4,
          },
        ],
      })
    }
  }, [progress])

  return (
    <div className="container mx-auto px-4 py-8">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Weight Progress',
            },
          },
        }}
      />
    </div>
  )
}