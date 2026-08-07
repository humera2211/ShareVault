import { FileText, X } from 'lucide-react'
import React from 'react'

const FilePreview = ({file , removeFile}) => {
  return (
    <div className='flex justify-between items-center border-1 p-2 rounded-lg bg-zinc-400 mt-3 '>
    <FileText width={50} height={50} className='text-yellow-600 bg-zinc-300 rounded-lg p-1'/>
    <div className='text-black'>
    <h1>{file.name}</h1>
    <h1>{file?.type} &nbsp; &nbsp;{(file.size/1021/1024).toFixed(2)}MB</h1>
    </div>
    <X height={30} width={30} className='text-red-500 font-bold hover:text-red-700 cursor-pointer' onClick={()=>removeFile()}/>
    </div>
  )
}

export default FilePreview