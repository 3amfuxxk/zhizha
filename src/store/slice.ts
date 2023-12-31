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
  interface PodProduct {
    id: string;
    title: string;
    code: number;
    image: string;
    starting_price: number;
    sale_price: number;
    chars: Chars;
    totalQuantity: number;
  }
  interface Detail {
    id: string;
    title: string;
    code: number;
    image: string;
    starting_price: number;
    sale_price: number;
    totalQuantity: number;
  }

  interface Chars {
    id: number;
    color: string;
  }
  
  interface CartState {
    products: Product[];
    pods: PodProduct[];
    details: Detail[];
  }
  
  const initialState: CartState = {
    products: [],
    pods: [],
    details: [],
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action: PayloadAction<Product>) {
        state.products.push(action.payload);
      },
      addPodToCart(state, action: PayloadAction<PodProduct>) {
        state.pods.push(action.payload);
      },
      addDetailToCart(state, action: PayloadAction<Detail>) {
        state.details.push(action.payload);
      },
      removeDetailFromCart(state, action: PayloadAction<string>) {
        state.details = state.details.filter(item => item.id !== action.payload);
      },
      removePodFromCart(state, action: PayloadAction<number>) {
        state.pods = state.pods.filter(item => item.chars.id !== action.payload);
      },
      removeFromCart(state, action: PayloadAction<number>) {
        state.products = state.products.filter(item => item.options.id !== action.payload);
      },
      clearCart(state) {
        state.products = [];
        state.details = [];
        state.pods = [];
      },
    },
  });
  
  
  export const { addToCart, removeFromCart, clearCart, addPodToCart, removePodFromCart, addDetailToCart, removeDetailFromCart } = cartSlice.actions;
  
  export const selectCart = (state: RootState) => state.cart.products;
  export const selectPods = (state: RootState) => state.cart.pods;
  export const selectDetails = (state: RootState) => state.cart.details;
  
  export default cartSlice.reducer;
