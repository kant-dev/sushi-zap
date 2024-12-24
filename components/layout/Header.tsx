"use client"

import React from 'react'
import Logo from './Logo'
import { ModeToggle } from '@/components/ModeToggle'
import CartSidebar from '@/components/layout/Cart/CartSidebar'

export default function Header() {
      return (
            <header className='flex justify-between items-center my-4 mx-2'>
                  <div className='flex items-center gap-3'>
                        <Logo/>
                        <ModeToggle/>
                  </div> 
                  <div className='flex items-center gap-3'>
                        <CartSidebar/>
                  </div>
            </header>
      )
}
