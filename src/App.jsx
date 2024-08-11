import React from 'react'
import { Button } from './components/ui/button'
import user from './assets/user.jpg'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
"use client"
import { useToast } from "@/components/ui/use-toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Textarea } from "@/components/ui/textarea"

const App = () => {
  const { toast } = useToast()
  return (

    <div className='outer-contaier w-full flex justify-center items-center h-screen'>

    <Card className="w-full max-w-2xl sm:max-w-3xl md:max-w-screen-lg p-3 shadow-xl">
  
  
  {/* ekhane inner contaiber jeta w-fix hoye profile page hobe */}

    

      <CardHeader>
      <div className="profile flex items-center gap-3">
      <img src={user} alt="" className="w-16 h-16 rounded-full object-cover" />
      <div className="edit-btn">
      <Dialog>
      <DialogTrigger asChild>
        <Button size='lg' variant='outline'>Upload new picture</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
      </Dialog>
      </div>
    </div>
      </CardHeader>
  
      <CardContent >

    
<form>
    
    <div className="input-elements pt-5">
      <div className="input-section-1 grid sm:grid-cols-2 grid-cols-1 gap-4 pb-4">
      <div className="username ">
        <p className='text-[#000000] font-semibold'>First Name</p>
        <Input className="bg-[#FFFFFF]" />
      </div>
      <div className="username ">
        <p className='text-[#000000] font-semibold'>Last Name</p>
        <Input className="bg-[#FFFFFF]" />
      </div>
      <div className="username ">
        <p className='text-[#000000] font-semibold'>Email</p>
        <Input type='email' className="bg-[#FFFFFF]" />
      </div>
      <div className="username ">
        <p className='text-[#000000] font-semibold'>Mobile Number</p>
        <Input type="number" className="bg-[#FFFFFF]" />
      </div>
      </div>
      <div className="input-section w-full">
        <p className='text-[#000000] font-semibold'>Address</p>
        <Textarea placeholder="Type your message here." />
      </div>

    </div>
    
    </form>
  

  </CardContent>

  <CardFooter className="side-buttons flex justify-end gap-4 w-full pt-4">
  <Button size='lg' variant='outline'>cancel</Button>
      <Button
      size='lg' variant='outline'
      
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  </CardFooter>
  
  

  </Card>

  </div>
  )
}

export default App