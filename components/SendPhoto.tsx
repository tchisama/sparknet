"use client"
import { Button } from '@nextui-org/button'
import { Image } from 'lucide-react'
import React, { useEffect,useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { auth, db, storage } from '@/firebase'
import { addDoc, collection } from 'firebase/firestore'
import useChatStore from '@/store/chatsStore'

type Props = {}

const SendPhoto = (props: Props) => {
    const [file, setFile] = useState<File|null>();
    const [percent, setPercent] = useState(0);
    const {currentChat} = useChatStore()
   
    // Handles input change event and updates state
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if(event.target?.files) {
          setFile(event.target?.files[0]);
      }
    }
  
    useEffect(() => {
      if (file) {
          const storageRef = ref(storage, `/files/${file?.name}`)
          const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on(
              "state_changed",
              (snapshot) => {
                  const percent = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
       
                  // update progress
                  setPercent(percent);
              },
              (err) => console.log(err),
              () => {
                  // download url
                  getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
                      const docRef = await addDoc(collection(db, "messages"), {
                            img:url,
                            timestamp:Date.now(),
                            senderID:auth.currentUser?.uid,
                            chatID:currentChat,
                            seen:false,
                            type:"image"
                      });
                      setFile(null);
                  });
              }
          ); 
      }
    },[file])
  return (
    <div>
            <input onChange={handleChange} accept='image/*' hidden id='photo' name='photo' type="file" />
            <label htmlFor="photo" className='cursor-pointer '>
                <div className='p-3 rounded-xl hover:bg-foreground-200'>
                    <Image/>
                </div>
            </label>
    </div>
  )
}

export default SendPhoto