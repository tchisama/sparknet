import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Avatar, Spinner} from "@nextui-org/react";
import { MessageCircle, Search, UserPlus } from "lucide-react";
import MessageBubble from "./MessageBubble";
import { collection, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase";

type User = {
  name: string;
  username: string;
  email: string;
  id: string;
  UserId: string;
}
export default function SearchFriend() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [username, setUsername] = React.useState("");
  const [user, setUser] = React.useState<User|null>();
  const [loading, setLoading] = React.useState(false);
  const handleSearch = (e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    const q = query(collection(db,"users"),where("username","==",username))
    try {
      onSnapshot(q,(snapShot)=>{
        if (snapShot.docs.length > 0) {
          const user_ = snapShot.docs[0].data()
          user_.id = snapShot.docs[0].id
          setUser(user_ as User)
        } else {
          setUser(null)
        }
        setTimeout(()=>{
          setLoading(false)
        },300)
      })
    } catch (error) {
        setUser(null)
        setLoading(false)
    }
  }
    return (
    <>
      <Button variant="light" onPress={onOpen} isIconOnly><Search size={20}/></Button>
      <Modal className="text-foreground-700" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add by username</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSearch}>
                  <Input className="outline-secondary" onClear={()=>setUsername("")} value={username} onInput={(e)=>setUsername((e.target as HTMLInputElement).value)} isClearable label="Search username" />
                </form>
                {
                  loading && 
                  <div className="flex p-4 items-center justify-center">
                    <Spinner size={"sm"} color="secondary"/>
                  </div>
                }
                
                {
                user && !loading ?
                <div className="py-4 items-end flex gap-4 ">
                    <Avatar name={user.name} size="lg"/>
                    <div className="flex-1 py-1">
                        <h1 className='text-md'>{user.name}</h1>
                        <h3 className="text-sm">@{user.username}</h3>
                    </div>
                    <div className="flex h-full items-end">
                      <Button color={"secondary"}>Open <MessageCircle size={20}/></Button>
                    </div>
                </div>
                :
                <div></div>
                }
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
