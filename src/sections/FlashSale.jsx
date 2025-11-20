
import { MoveLeft, MoveRight } from 'lucide-react'
import React from 'react'
import Card from '../components/Card'

const FlashSale = () => {
  return (
    <>
    <div className='flex gap-5 mt-5 ml-20 justify-between'>
        <div className='flex gap-4'>
            <div>
              <img src="energy.png" alt="logo" className='size-10'/>
        </div>
        <div>
            <h1 className=' font-bold mt-2'>Flash Sale</h1>
        </div>
      <div className='flex gap-1.5 items-center'>
          <div className='bg-pink-600 rounded-full size-9 p-1.5 text-white font-bold text-center'>08</div>
        <h1 className='font-bold text-2xl'>:</h1>
        <div className='bg-pink-600 rounded-full size-9 p-2 text-white font-bold text-center'>17</div>
        <h1 className='font-bold text-2xl'>:</h1>
        <div className='bg-pink-600 rounded-full size-9 p-2 text-white font-bold text-center'>56</div>
      </div>
        </div>
       <div className='flex gap-2 mr-15'>
         <div className='border-2 h-8 w-10 flex items-center justify-center -left-1 rounded-lg'>
              <MoveLeft />
        </div>
        <div className='border-2 h-8 w-18 flex items-center justify-center bg-black rounded-lg'>
                  <MoveRight className='text-white'/>
        </div>
       </div>
    </div>

    <div className='mt-8 ml-9 flex flex-wrap gap-10'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
    
  )
}

export default FlashSale