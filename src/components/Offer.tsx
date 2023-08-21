import React from 'react'
import CountDown from './CountDown'
import Image from 'next/image'

export default function Offer() {
  return (
    <div className='bg-black text-center flex flex-col h-screen
    md:h-[70vh] md:flex-row md:bg-[url("/offerBg.png")]
    '>
        {/* TEXT CONTAINER */}
        <div className='text-white flex-1 flex flex-col 
        gap-4 justify-center'>
            <h1 className='text-5xl  font-bold'>Delicious burger & French fry </h1>
            <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nisi sit iure aliquid, numquam consequatur
                perspiciatis voluptatibus error mollitia 
                voluptatum assumenda vero placeat voluptas
                </p>
            <CountDown />
            <button className='bg-red-500  text-white 
            px-6 py-3 rounded-md mx-auto '>
                Order now</button>    
        </div>
       {/* IMAGE CONTAINER */}
       <div className='flex-1 relative h-full items-center
        w-full'>
        <Image src='/offerProduct.png' alt='' fill 
        className='object-contain'
        />
       </div>
    </div>
  )
}
