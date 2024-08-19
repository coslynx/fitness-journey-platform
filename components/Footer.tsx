'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10 fixed bottom-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Fitness Journey Platform. All rights reserved.</p>
        <ul className="flex gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}