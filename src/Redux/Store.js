import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './CartSlice'
import modalReducer from './ModalSlice'
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartSlice,
  },
})