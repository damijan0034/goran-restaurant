"use client"

import React from 'react'
import Countdown from 'react-countdown'

const endingDate=new Date("2023.08.25")

export default function CountDown() {
  return (
    <Countdown className='text-yellow-400 text-5xl 
    font-bold my-5' 
    date={endingDate} />
  )
}
