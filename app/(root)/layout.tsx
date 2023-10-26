"use client"
import { Navbar } from '@/components/navbar'
import { auth } from '@/firebase'
import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Provider from './Provider'

type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
    return (
      <Provider>
        <main className="flex bg-red-200 min-h-screen text-foreground-700">
            <Navbar/>
            {children}
        </main>
      </Provider>
    )
}

export default layout