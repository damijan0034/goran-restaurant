'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CartIcon() {
  return (
    <div className='flex gap-4 md:gap-1'>
        
        <Image src='/cart.png' alt='cart'
                 width={20} height={10} className='cursor-pointer' />
                  <Link href='/cart'>Cart</Link>
                  <span>(3)</span>
                
    </div>
  )
}
