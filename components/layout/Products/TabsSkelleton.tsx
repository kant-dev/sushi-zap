"use client"

import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function TabsSkelleton() {
  return (
    <div>
      <Skeleton className='w-full h-9 rounded-md'/>
      <div className="mt-4 grid  gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          Array.from({length: 6}, (item, index) => (
            <div key={index} className=''>
              <Skeleton className='w-full h-32 rounded-xl' />
              <Skeleton className='mt-2 w-full h-6 rounded-md'/>
              <Skeleton className='mt-2 w-full h-6 rounded-md'/>
              <Skeleton className='mt-2 w-full h-8 rounded-md'/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
