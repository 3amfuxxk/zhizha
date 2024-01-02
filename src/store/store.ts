import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice'
import  selectedProductReducer from './liquidSlice'
import favsSlice from './favs'

export const store = configureStore({
    reducer: {
      cart: cartSlice,
      selectedProduct: selectedProductReducer,
      favs: favsSlice,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;