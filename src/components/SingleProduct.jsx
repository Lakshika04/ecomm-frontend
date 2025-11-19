import React from 'react'


const SingleProduct = () => {

 
  return (
    <div className='flex'>
        <div className='flex gap-3 h-120 m-10'>
            <img src="/clothes.avif" alt="image" />
            <img src="/cloth.avif" alt="image" />
        </div>
        <div className='mt-9'>
            <div>
                <h1 className='font-bold text-3xl'>NOBERO</h1>
            </div>
            <div>
                <h1 className='text-2xl pt-4 text-gray-500'>Men Oversized Graphic Printed T-shirt</h1>
            </div>
            <div className='flex gap-4 border-2 border-gray-600 w-40 mt-4'>
                <h1 className='pl-2 border-r-2'>4.4⭐</h1>
                <h1 className='text-gray-500 '>575 ratings</h1>
            </div>
            <div className='mt-3 border-t-2 flex gap-4'>
                <h1 className='text-3xl font-bold mt-4'>₹499</h1>
                <h1 className='text-gray-500 text-2xl mt-4 '>MRP <span className='line-through'>₹1799</span> </h1>
                <h1 className='text-orange-400 text-3xl font-bold mt-4'>(75% OFF)</h1>
            </div>
            <div>
                <h1 className='text-green-700 font-bold text-lg mt-2'>Inclusive of all taxes</h1>
                <h1 className='font-bold mt-2 text-lg'>MORE COLORS</h1>
            </div>
            <div className='flex gap-3.5 h-20 mt-3'>
                <img src="/cloth.avif" alt="image" />
                <img src="/cloth.avif" alt="image" />
            </div>
            <div className='flex gap-6'>
                <h1 className='font-bold mt-3 text-lg'>SELECT SIZE</h1>
                <h1 className='font-bold mt-3 text-lg text-pink-600'>SIZE CHART &gt;</h1>
            </div>
            <div className='flex gap-4 font-bold '>
                <div className='h-10 w-10 border rounded-full pl-4 pt-2 '>S</div>
                <div className='h-10 w-10 border rounded-full pl-3 pt-2'>M</div>
                <div className='h-10 w-10 border rounded-full pl-4 pt-2'>L</div>
                <div className='h-10 w-10 border rounded-full pl-3 pt-2'>XL</div>
                <div className='h-10 w-10 border rounded-full pl-1 pt-2'>XXL</div>
                <div className='h-10 w-10 border rounded-full pl-1 pt-2'>3XL</div>
            </div>
            <div className='mt-4 flex gap-8'>
                <h1 className='text-white font-bold text-lg bg-pink-600 w-40 pl-5'>ADD TO BAG</h1>
                <h1 className='text-lg font-bold border w-30 pl-4'>WISHLIST</h1>
            </div>

        </div>
    </div>
  )
}

export default SingleProduct