"use client"
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'
import { Button } from '@nextui-org/button'
import { Divider, Input } from '@nextui-org/react'
import React from 'react'

type Props = {}

function Page({}: Props) {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <div className='flex text-forground-700 items-center justify-center min-h-screen '>
        <div className='w-full flex flex-col gap-2 max-w-[400px]'>
            <h1 className='text-2xl'>Sign in</h1>
            <Divider className='my-8'/>
            <EmailInput value={email} onInput={setEmail} label='Email'/>
            <PasswordInput value={password} onInput={setPassword} label='Password'/>
            <Button size='lg' color='secondary'>Sign in</Button>
        </div>
    </div>
  )
}

export default Page