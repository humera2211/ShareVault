import React from 'react'

const ProgressBar = ({progress=40}) => {
  return (
    <div className='w-full bg-slate-400 rounded-full mt-4 text-sm'>
    <div className='bg-green-500 rounded-full  '
    style={{width:`${progress}%`}}>
    {`${Number(progress).toFixed(0)}%`}
    </div>
    </div>
  )
}

export default ProgressBar