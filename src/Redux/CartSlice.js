import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
  priceArray: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const idExist = state.cartArray.filter((el) => {
        return action.payload.id
      })
      return {
        cartArray: [...state.cartArray, action.payload],
        priceArray: [...state.priceArray, action.payload.Price],
      };
    },
    deleteCartItem: (state, action) => {
      let newCartAry = [...state.cartArray];
      newCartAry.splice([action.payload], 1);
      let newPriceAry = [...state.priceArray];
      newPriceAry.splice([action.payload], 1);
      return { cartArray: [...newCartAry], priceArray: [...newPriceAry] };
    },
    clearCart: (state, action) => {
      state.cartArray.length = 0;
      state.priceArray.length = 0;
    },
  },
});
export const selectCartArray = (state) => state.cart.cartArray;
// Action creators are generated for each case reducer function
export const { addToCart, deleteCartItem, clearCart, addPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
