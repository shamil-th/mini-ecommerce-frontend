import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';

export const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice
  },
})

export default store;