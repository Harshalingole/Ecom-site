import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  open: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setImgId: (state,action) => {
        state.value = action.payload - 1
        state.open = true
    },
    handleOpen: (state) => {
        console.log('CLick Open');
        state.open = true
    },
    handleClose:(state) => {
        console.log('CLick CLose');
        state.open = false
    }
  },
})
export const selectImgState = state => state.counter.value
// Action creators are generated for each case reducer function
export const {setImgId,handleOpen,handleClose} = modalSlice.actions

export default modalSlice.reducer