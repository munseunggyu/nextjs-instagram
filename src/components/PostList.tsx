'use client'

import { SimplePost } from "@/model/post"
import useSWR from "swr"
import GridSpinner from "./GridSpinner"
import PostListCard from "./PostListCard"

export default function PostList() {
  const {data: posts, isLoading: loading, error} = useSWR<SimplePost[]>('/api/posts')
  console.log(posts)
  return (
    <section>
        {loading && (
        <div className='text-center mt-32'>
          <GridSpinner color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
