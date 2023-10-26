"use client"
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'
import { Button } from '@nextui-org/button'
import { Divider, Input } from '@nextui-org/react'
import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'

type Props = {}


function Page({}: Props) {
  
  const router = useRouter()

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [username, setUsername] = React.useState("")

  const CreateUser = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push("/chat")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }



  return (
    <div className='flex  items-center justify-center min-h-screen '>
        <div className='w-full text-forground-900 flex flex-col gap-2 max-w-[400px]'>
            <h1 className='text-2xl'>Sign up</h1>
            <Divider className='my-8'/>
            <EmailInput value={email} onInput={setEmail} label='Email'/>
            <PasswordInput value={password} onInput={setPassword} label='New Password'/>
            <Input
              value={username}
              onInput={(e)=>setUsername((e.target as HTMLInputElement).value)}
              isClearable
              type="email"
              label={"Username"}
              variant="bordered"
              className=""
            />
            <Button onClick={CreateUser} size='lg' color='secondary'>Sign Up</Button>
        </div>
    </div>
  )
}

export default Page