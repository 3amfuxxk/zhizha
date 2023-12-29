import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Product {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption;
    totalQuantity: number;
  }
  
  interface ProductOption {
    id: number;
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
  }
  
  interface CartState {
    products: Product[];
  }
  
  const initialState: CartState = {
    products: [],
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action: PayloadAction<Product>) {
        state.products.push(action.payload);
      },
      removeFromCart(state, action: PayloadAction<number>) {
        state.products = state.products.filter(item => item.options.id !== action.payload);
      },
      clearCart(state) {
        state.products = [];
      },
    },
  });
  
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  
  export const selectCart = (state: RootState) => state.cart.products;
  
  export default cartSlice.reducer;
