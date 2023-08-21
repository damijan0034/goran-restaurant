import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon'
import Menu from './Menu'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-12
    border-b-2 border-b-red-500 py-7 md:py-12 px-10 uppercase
    
    '>
        {/* LEFT LINKS */}
        <div className='flex justify-between items-center flex-1
 '>
            {/* LINKS */}
            <div className='gap-4 hidden md:flex'>
                <Link className='pr-2' href='/'>Home</Link>
                <Link className='pr-2' href='/'>Menu</Link>
                <Link className='pr-2' href='/'>Contact</Link>
            </div>
            {/* BRAND */}
            <div>
                <Link className='text-xl md:font-bold md:text-3xl ' href='/' >
                    CHALABRCHAK</Link>
            </div>
        </div>
        {/* RIGHT LINKS */}
        <div className='flex-1  justify-end gap-4 hidden md:flex'>
            {/* NUMBER */}
           
            <div className='bg-orange-400 flex  rounded-md 
             px-2
            '>
                <Image src='/phone.png' alt='phone'
                 width={20} height={20} />
                <span>123456</span>
            </div>
            {/* LOGIN */}
            <div className='hidden md:flex'>
                <Link href='/login'>Login</Link>
            </div>
            {/* CART */}
            <div className='hidden md:flex'>
                <CartIcon />
               
            </div>
           
        </div>
        <div className='flex md:hidden'>
            <Menu />
        </div>
        
    </div>
  )
}
