import React from 'react'


const ClothesSection = () => {

  const data=[
    {
      id:1,
      name:"T-shirt",
      path:"/tshirt.jpg"

  },
  {
    id:2,
    name:"Jacket",
    path:"/tshirt.jpg"
  },
  {
    id:3,
    name:"Shirt",
    path:"/tshirt.jpg"
  },
  {
    id:4,
    name:"Jeans",
    path:"/tshirt.jpg"
  },
  {
    id:5,
    name:"Bag",
    path:"/tshirt.jpg"
  },
  {
    id:6,
    name:"Shoes",
    path:"/tshirt.jpg"
  },
  {
    id:7,
    name:"Watches",
    path:"/tshirt.jpg"
  },
  {
    id:8,
    name:"Cap",
    path:"/tshirt.jpg"
  },
  {
    id:9,
    name:"All categories",
    path:"/tshirt.jpg"
  }]


  return (
    <div className='mt-4 h-32 flex items-center justify-evenly'>

   {
    data.map((element,idx)=>{
      return(
         <div key={idx} className='flex flex-col items-center' >
      <img src={element.path} alt="tshirt" className='h-18 w-18 rounded-full ml-4' />
        <h1 className='text-center text-lg mt-4'>{element.name}</h1>
        
    </div>
      )
    })
   }

    </div>
  )
}

export default ClothesSection