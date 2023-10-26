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
            <h1 className='text-2xl'>Sign up</h1>
            <Divider className='my-8'/>
            <EmailInput label='Email'/>
            <PasswordInput label='New Password'/>
            <Input
              isClearable
              type="email"
              label={"Username"}
              variant="bordered"
              className=""
            />
            <Button size='lg' color='secondary'>Sign Up</Button>
        </div>
    </div>
  )
}

export default Page