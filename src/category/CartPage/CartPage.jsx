import React from 'react'
import CartCard from '../../components/CartCard/CartCard'
import './CartPage.css'
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../Redux/CartSlice';
const CartPage = () => {
  const cartAmountAry = useSelector((state) => state.cart.priceArray)
  // console.log(cartAmountAry);
  const cartAmount = cartAmountAry.reduce((acc,cur) => {
    return acc + cur
  },0)
  const dispatch = useDispatch()
  const onClearCart = () => {
    console.log('Clear Cart Click');
    dispatch(clearCart())
  }
  return (
    <>
    <div className="cp-wrapper">
        <CartCard />
        <div className="cp-summary">
          <h1>Total Price<span>${cartAmount}</span></h1>
          <Button variant="contained" onClick={onClearCart}>Clear Cart</Button>
          <Button variant="contained">Buy Now</Button>
        </div>
    </div>
    </>
  )
}

export default CartPage