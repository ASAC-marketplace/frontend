import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import React from 'react'

import Provider from '@/components/provider/provider'

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Market place',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body className={`${pretendard.className} bg-fixed flex items-center justify-center h-full`}>
        <div className="bg-white overflow-auto w-96 h-screen ">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  )
}
