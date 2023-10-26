import { auth, userRef } from '@/firebase'
import useUserStore from '@/store/userStore'
import { User } from '@/types'
import { getDocs, query, where } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'

type Props = {
    children:ReactNode
}

const Provider = ({children}: Props) => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)
  const {setUser} = useUserStore()

  useEffect(()=>{
    if(auth.currentUser?.uid){
      getDocs(query(userRef,where("UserId","==",auth.currentUser?.uid)))
      .then((res)=>{
        setUser({...res.docs[0].data() as User,id:res.docs[0].id})
      })
    }
    setTimeout(()=>{
        if(!auth.currentUser?.uid){
            router.push("/sign-in")
        }else{
            setLoading(false)
        }
    },1000)
  },[router,setUser,auth.currentUser?.uid])

  return (
    <div>{
        !loading &&
        children
    }</div>
  )
}

export default Provider