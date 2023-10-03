'use client'

import { SimplePost } from "@/model/post"
import useSWR from "swr"

export default function PostList() {
  const {data, isLoading, error} = useSWR<SimplePost>('/api/posts')
  return (
    <ul>
      
    </ul>
  )
}
