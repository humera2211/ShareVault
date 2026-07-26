import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'
//responsiveness pr kaam krna h*
const TopHeader = () => {
  return (
    <div className='mt-1 p-4 h-16 border-b-2 flex justify-between'>
    <Menu/>
    <UserButton/>
    </div>
  )
}

export default TopHeader