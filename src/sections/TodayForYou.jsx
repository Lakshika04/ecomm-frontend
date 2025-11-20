import React from 'react'
import Cards from '../components/Cards'

const TodayForYou = () => {
  return (
    <>
    <div >
        <div className='flex mt-8 justify-between'>
            <div className='text-2xl font-bold pl-12'>
                Today's For You!
            </div>
            <div className='flex gap-6 items-center mr-8'>
                <div className='border-2 rounded-lg bg-black text-white w-26 pl-4'>Best Seller</div>
                <div className='border-2 w-26 rounded-lg pl-3'>keep Stylish</div>
                <div className='border-2 w-36 rounded-lg pl-3'>Special Discount</div>
                <div className='border-2 w-28 rounded-lg pl-2'>Official Store</div>
                <div className='border-2 w-36 rounded-lg pl-3'>Coveted Product</div>
            </div>
        </div>
    </div>

    <div className='flex ml-7 flex-wrap gap-5 mt-9'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
    </>
  )
}

export default TodayForYou