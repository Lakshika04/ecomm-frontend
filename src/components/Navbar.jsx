import { House, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  h-16 items-center justify-between px-10 text-lg  '>
        <div>
            <img src="/logo.png" alt="logo" className='h-14 w-14'/>
        
        </div>
        <div className='flex gap-4 '>
            <h1 className='flex gap-2.5'>  <House />Home</h1>
            <h1>About us</h1>
            <h1>Products</h1>
        </div>
        <div className='flex gap-4 '>
            <h1> <ShoppingCart /></h1>
            <h1><User /></h1>
        </div>
    </div>
  )
}

export default Navbar