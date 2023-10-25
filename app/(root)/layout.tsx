import { Navbar } from '@/components/navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
        <main className="flex bg-red-200 min-h-screen text-foreground-700">
            <Navbar/>
            {children}
        </main>
  )
}

export default layout