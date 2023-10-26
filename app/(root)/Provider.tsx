import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'

type Props = {
    children:ReactNode
}

const Provider = ({children}: Props) => {

  const router = useRouter()
  const [loading, setLoading] = React.useState(true)

  useEffect(()=>{
    setTimeout(()=>{
        if(!auth.currentUser?.uid){
            router.push("/sign-in")
        }else{
            setLoading(false)
        }
    },500)
  },[auth,router])

  return (
    <div>{
        !loading &&
        children
    }</div>
  )
}

export default Provider