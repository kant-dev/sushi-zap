"use client"

import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className='mt-6'>
      <Separator/>
      <p className='text-center text-sm my-6 opacity-50 flex flex-col'>
        <span>&copy; 2024 SushiZap. All rights reserved.</span>
        <span className='text-[14px]'>Created by: kant-dev</span>
      </p>
    </footer>
  )
}
