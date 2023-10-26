"use client"
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'
import { auth } from '@/firebase'
import { Button } from '@nextui-org/button'
import { Divider, Input } from '@nextui-org/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

function Page({}: Props) {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")


  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push("/chat")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }

  return (
    <div className='flex text-forground-700 items-center justify-center min-h-screen '>
        <form onSubmit={handleLogin} className='w-full flex flex-col gap-2 max-w-[400px]'>
            <h1 className='text-2xl'>Sign in</h1>
            <Divider className='my-8'/>
            <EmailInput value={email} onInput={setEmail} label='Email'/>
            <PasswordInput value={password} onInput={setPassword} label='Password'/>
            <Button type='submit' onClick={handleLogin} size='lg' color='secondary'>Sign in</Button>
        </form>
    </div>
  )
}

export default Page