"use client"
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'
import { Button } from '@nextui-org/button'
import { Code, Divider, Input, Spinner } from '@nextui-org/react'
import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'

type Props = {}


function Page({}: Props) {
  
  const router = useRouter()

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [err , setErr] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const CreateUser = ()=>{
    setLoading(true)
    if(name && email && password && username){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push("/chat")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage)
        setLoading(false)
        // ..
      });
    }else{
      setErr("Please fill all the fields")
        setLoading(false)
    }
  }



  return (
    <div className='flex  items-center justify-center min-h-screen '>
        <div className='w-full text-forground-900 flex flex-col gap-2 max-w-[400px]'>
            <h1 className='text-2xl'>Sign up</h1>
            <Divider className='my-8'/>
            <Input
              value={name}
              onInput={(e)=>setName((e.target as HTMLInputElement).value)}
              isClearable
              type="email"
              label={"name"}
              variant="bordered"
              className=""
            />
            <EmailInput value={email} onInput={setEmail} label='Email'/>
            <PasswordInput value={password} onInput={setPassword} label='New Password'/>
            <Input
              value={username}
              onInput={(e)=>setUsername((e.target as HTMLInputElement).value)}
              isClearable
              type="email"
              label={"Choose Username"}
              variant="bordered"
              className=""
            />
            <Button disabled={loading} onClick={CreateUser} size='lg' color='secondary'>
              {
                loading ?
                <>
               <Spinner color='white' size='sm'/>
               Loading
                </>
                :
                <>Sign Up</>

              }
              </Button>
            {
              err && 
              <p className="text-danger">{err}</p>
            }
        </div>
    </div>
  )
}

export default Page