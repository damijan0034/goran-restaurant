'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links=[
    {id:1,href:'/',title:'home'},
    {id:2,href:'/menu',title:'menu'},
    {id:3,href:'/',title:'working hours'},
    {id:4,href:'/contact',title:'contact'},
    {id:5,href:'/login',title:'login'},
   
]

export default function Menu() {
    const[open,setOpen]=useState(false);
  return (
   <div className='text-white flex z-50'>
        {
            open ===  false ?(
                <Image src='/open.png' alt='open' 
                height={20} width={20} onClick={()=>setOpen(true)} />
            ):(
                <Image src='/close.png' alt='open' onClick={()=>setOpen(false)} 
                height={20} width={20} />
            )
        }

        {
            open  && (
                <div className='bg-red-500 w-full h-[calc(100vh-9rem)]
                absolute right-0 top-[100px] flex flex-col 
                justify-center items-center gap-6 text-3xl
                '>
                  {
                    links.map(link=>(
                        <Link href={link.href} key={link.id}
                        className=''
                        >
                            {link.title}</Link>
                    ))
                  } 
                   <CartIcon />     
                </div>
            )
        }
       
   </div>
  )
}
