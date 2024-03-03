import React from 'react'

import MyPageHeader from '@/components/feature/myPage/MyPageHeader'

export default function myPagelayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed w-96 top-0 h-16 z-10">
        <MyPageHeader />
      </div>
      <div className="w-full mt-16">{children}</div>
    </>
  )
}
