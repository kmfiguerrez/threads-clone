import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
// These styles apply to every route in the application
import '../../styles/globals.css'
import Topbar from '@/components/shared/Topbar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSideBar'
import Bottombar from '@/components/shared/Bottombar'


export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
}

// Fonts.
const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>          
          <Topbar />

          <main className='flex flex-row'>
            <LeftSideBar />
              
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>              
              </section>
              
            <RightSideBar />
          </main>

          <Bottombar />       
        </body>
      </html>
    </ClerkProvider>
  )
}
