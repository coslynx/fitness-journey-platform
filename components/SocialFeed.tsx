'use client'

import { useState, useEffect } from 'react'
import { useSocialStore } from '@/utils/social-store'
import PostCard from '@/components/PostCard'

export default function SocialFeed({ posts }: { posts: any[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Social Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}