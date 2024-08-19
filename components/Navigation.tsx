'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Navigation() {
  const { data: session } = useSession()

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Fitness Journey
        </Link>
        <ul className="flex gap-4">
          {session && (
            <>
              <li>
                <Link href="/goals">Goals</Link>
              </li>
              <li>
                <Link href="/workout-log">Workout Log</Link>
              </li>
              <li>
                <Link href="/meal-tracker">Meal Tracker</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
            </>
          )}
          {!session && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}