'use client'

import Image from 'next/image'
import { useUserStore } from '@/utils/user-store'

export default function UserCard({ user }: { user: { name: string; email: string; image: string } }) {
  const { setUser } = useUserStore()
  const handleLogout = async () => {
    try {
      await setUser(null)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="flex items-center gap-4">
      <Image
        src={user.image}
        alt={user.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h3 className="font-bold">{user.name}</h3>
        <p className="text-gray-500">{user.email}</p>
      </div>
      <button onClick={handleLogout} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  )
}