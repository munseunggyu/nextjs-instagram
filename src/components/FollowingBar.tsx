"use client"

import useSWR from "swr"

// 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자 정보 api 호출
// 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용하여 사용자의 상세정보를 Sanity에서 가지고온다
// 3. ui 표시

export default function FollowingBar() {
  const { data } = useSWR('/api/me')
  console.log(data)
  return (
    <div>FollowingBar</div>
  )
}
