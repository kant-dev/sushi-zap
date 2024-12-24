import { Cart } from '@/types/Cart'
import { Product } from '@/types/Product';
import { create } from 'zustand'

type States = {
  cart: Cart[]
}

type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void;
}

const initialState: States = {
  cart: [],
}

export const useCartStorage = create<States & Actions>()(set => ({
  ...initialState,
  upsertCartItem: (product, quantity) => set(state => {
    let newCart = [...state.cart];

    let indexProd = newCart.findIndex(item => item.product.id === product.id);

    if (indexProd < 0) {
      // Produto não existe no carrinho, então adicionamos
      newCart.push({ product, quantity: 0 });
      indexProd = newCart.findIndex(item => item.product.id === product.id);
    }

    // Atualiza a quantidade
    newCart[indexProd].quantity += quantity;

    // Se a quantidade for menor ou igual a zero, removemos o item
    if (newCart[indexProd].quantity <= 0) {
      newCart = newCart.filter(item => item.product.id !== product.id);
    }

    return { ...state, cart: newCart }
  })
}))