"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'
import { useCartStorage } from '@/storage/cart-storage'
import { Product } from '@/types/Product'
import React from 'react'

type ProductItemProps= {
  item: Product,
}

export default function ProductItem({item} : ProductItemProps) {

  const {toast} = useToast()
  const {upsertCartItem} = useCartStorage(state=> state)

  const handleAddProduct = () => {
    upsertCartItem(item, 1)
    toast({
      title: 'Adicionado ao carrinho!',
      description: item.name,
      action: <ToastAction altText='fechar'>Fechar</ToastAction>
    })
  }

  return (
    <Card className='rounded-md p-2'>
      <div className="overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-md" />
      </div>
      <div className='mt-2 flex flex-col gap-2 p-2'>
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
        <Button onClick={handleAddProduct} className='rounded-none'>Comprar</Button>
      </div>
    </Card>
  )
}
