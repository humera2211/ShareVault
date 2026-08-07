import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMsg = ({msg}) => {
  return (
    <div className='bg-red-500 text-black flex flex-row justify-center items-center p-3 rounded-2xl'>
    <AlertCircle/>
    <h1>{msg}</h1>
    </div>
  )
}

export default AlertMsg