import React from 'react'

const Card = () => {
  return (
    <div className=' flex-col items-center mt-5 ml-10 border w-68 h-96 rounded-2xl'>
        <div className='flex items-center p-3'>
            <img src="/shoes.avif" alt="image"  className=' h-58 w-62 rounded-2xl '/>
        </div>
        <div>
            <div className='pl-3 rounded-2xl h-6 w-15 bg-amber-500 ml-3'>
                <h1 className='text-blue-800'>Nike</h1>
            </div>
            <div className='pl-4'>
                <h1 className='text-amber-950'>Coooooool Sneakers</h1>
            </div>
            <div className='pl-4'>
                <h1 className='text-blue-950'>$ 180</h1>
            </div>
            <div className='flex items-center bg-amber-400 w-60 h-11 pl-22 ml-3 rounded-2xl'>
                <button className='text-cyan-950'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card