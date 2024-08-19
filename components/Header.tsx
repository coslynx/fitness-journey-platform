'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Navigation from './Navigation'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Fitness Journey
        </Link>
        <Navigation />
      </div>
    </header>
  )
}