import { Button } from '@/components/ui/button'
import { Cart } from '@/types/Cart'
import { Plus } from 'lucide-react'
import React from 'react'
import CartItemQuantity from './CartItemQuantity'

type CartItemProps = {
  item: Cart
}

export default function CartItem({item} : CartItemProps) {
  return (
    <div className='flex items-center gap-6'>
      <div className='w-16 overflow-hidden'>
        <img src={item.product.image} alt="" className='w-full h-auto object-cover'/>
      </div>
      <div className='flex-1'>
        <p className='text-md'>{item.product.name}</p>
        <p className='text-xs opacity-90'>R$ {item.product.price.toFixed(2)}</p>
      </div>
      <div>
        <CartItemQuantity item={item}/>
      </div>
    </div>
  )
}
