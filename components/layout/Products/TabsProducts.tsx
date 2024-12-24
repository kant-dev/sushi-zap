"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAllProducts } from '@/services/Product'
import { Product } from '@/types/Product'
import React, { useEffect, useState } from 'react'
import MessageOffProducts from './MessageOffProducts'
import ProductItem from './ProductItem'
import ProductSkeleton from './ProductSkelleton'


type TabProps = {
  title: string,
  value: string,
  products: Product[],
}

export default function TabsProducts() {
  // O erro era tentar chamar a função assíncrona `getAllProducts` diretamente no componente. Isso não é permitido porque componentes React precisam ser síncronos.  
  // A solução foi mover a lógica assíncrona para dentro de um useEffect e armazenar os dados no estado,  garantindo que a chamada acontecesse apenas após a montagem do componente.
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      setIsLoading(false);
    }

    fetchProducts();
  })

  const tabs: TabProps[] = [
    { title: 'Sushi', value: 'sushi', products: products.filter(item => item.category === 'sushi') },
    { title: 'Temaki', value: 'temaki', products: products.filter(item => item.category === 'temaki') },
    { title: 'Combo', value: 'pack', products: products.filter(item => item.category === 'pack') },
    { title: 'Bebidas', value: 'drinks', products: products.filter(item => item.category === 'drinks') },
  ];


  return (
    <Tabs className='rounded-none' defaultValue='sushi'>
      <TabsList className='flex'>

        {
          tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className='flex-1'>
              {tab.title}
            </TabsTrigger>
          ))
        }
      </TabsList>

      {
        tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className='my=8'>
            {
              isLoading ? (
                <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6'>
                  <ProductSkeleton /> 
                  <ProductSkeleton /> 
                  <ProductSkeleton /> 
                </div>
              ) : tab.products.length > 0 ? (
                <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6'>
                  {
                    tab.products.map(product => (
                      <ProductItem key={product.id} item={product} />
                    ))
                  }
                </div>
              ) : (
                <MessageOffProducts />
              )
            }
          </TabsContent>
        ))
      }
    </Tabs>
  )
}
