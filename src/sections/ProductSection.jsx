import React from 'react'
import Cards from '../components/Cards'

const ProductSection = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-6xl font-semibold p-6 text-center'>New Arrival</h1>
        <div className='p-10 m-5'>
            <Cards/>
        </div>
    </div>
  )
}

export default ProductSection