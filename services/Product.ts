import { products } from "@/data/products"
import { Product } from "@/types/Product"
import { useEffect } from "react"

export const getAllProducts = async(): Promise<Product [] > => {

  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(products)
    }, 1000)
  })

}