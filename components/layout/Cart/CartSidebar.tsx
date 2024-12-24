"use client"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useCartStorage } from '@/storage/cart-storage'
import { RocketIcon } from 'lucide-react'
import React, { useState } from 'react'
import CartItem from './CartItem'
import CheckDialog from '../Checkout/CheckDialog'

export default function CartSidebar() {
  const {cart} = useCartStorage(state => state)

  const [checkoutOpen, setCheckoutOpen] = useState(false)

  let subtotal = 0;

  for(let i of cart) {
    subtotal += i.quantity * i.product.price
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='relative'>
          <RocketIcon />
          <span>Carrinho</span>
          {
            cart.length >0 && <span className='absolute size-4 bg-red-500 rounded-full -right-1 -top-1'></span>
          }
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
      
        <div className='flex flex-col gap-5 my-4'>
            {
              cart.map(item => (<CartItem key={item.product.id} item={item}/>))
            }
        </div>

        <Separator className='my-4'/>

        <div className='flex justify-between items-center text-xs'>
          <div>Subtotal:</div>
          <div>R$ {subtotal.toFixed(2)}</div>
        </div>

        <Separator className='my-4'/>
        <div className="text-center">
          <Button className='w-full rounded-none font-bold' disabled={cart.length === 0} onClick={() => setCheckoutOpen(true)}> Finalizar Compra</Button>
        </div>

        <CheckDialog open={checkoutOpen} onOpenChange={setCheckoutOpen}/>

      </SheetContent>
    </Sheet>
  )
}
