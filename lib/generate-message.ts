import { useCartStorage } from "@/storage/cart-storage"
import { useCheckoutStorage } from "@/storage/checkout-storage"

export const genereateMessage = () => {
  const {cart} = useCartStorage(state => state)
  const {name, address} = useCheckoutStorage(state => state)

  let orderProduct = []

  for(let i of cart) {
    orderProduct.push(`${i.product.name} x qtd: ${i.quantity}`)
  }

  return `
*Dados do Usuário:*
*Nome:* ${name}
Endereço: 
  - Rua: ${address.street}, ${address.number}, ${address.complement}
  - Bairro: ${address.district}

*Carrinho:*
  - Pedido: ${orderProduct.join('\n')}`
}

