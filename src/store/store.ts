import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice'
import  selectedProductReducer from './liquidSlice'

export const store = configureStore({
    reducer: {
      cart: cartSlice,
      selectedProduct: selectedProductReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;