import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartArray: [],
  value: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        return {cartArray: [...state.cartArray,action.payload]}
    },
    deleteCartItem: (state, action) => {
        let newList = [...state.cartArray];
        newList.splice([action.payload], 1);
        return { cartArray: [...newList] };
      }
  },
})
export const selectCartArray = state => state.cart.cartArray
// Action creators are generated for each case reducer function
export const {addToCart,deleteCartItem} = cartSlice.actions

export default cartSlice.reducer