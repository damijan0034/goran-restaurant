'use client'

import Image from "next/image"
import {useEffect, useState} from 'react'
import { setInterval } from "timers";
import Button from "./Button";

const data=[
    {
        id:1,
        title:'Hrskavo,vruce,sveze',
        img:'/slide1.png'
    },
    {
        id:2,
        title:'Besplatna isporuka',
        img:'/slide2.png'
    },
    {
        id:3,
        title:'Novi proizvodi',
        img:'/slide3.jpg'
    },
]

export default function Slider() {
    const[currentSlide,setCurrentSlide]=useState(0);

    // useEffect(()=>{
    //     const interval= setInterval(()=>{
    //         setCurrentSlide(prev=>prev===data.length-1 ? 0 : prev+1)
    //     },5000)
    // },[])
  return (
    <div className='flex flex-col lg:flex-row 
   h-[calc(100vh-8rem)]
   '>
    {/* TEXT CONTAINER */}
    <div className=' h-1/2 w-full lg:w-1/2
     lg:h-full uppercase bg-fuchsia-50
    items-center flex flex-col justify-center gap-8
    '>
        <h1 className="md:text-5xl text-3xl text-red-500 
         font-bold">
            {data[currentSlide].title}</h1>
       <Button />
         
            
    </div>
    {/* IMAGE CONTAINER */}
    <div className='relative h-1/2 w-full lg:w-1/2 lg:h-full'>
      <Image src={data[currentSlide].img} alt="slide" fill
      className="object-cover"
      />
    </div>
   </div>
  )
}
