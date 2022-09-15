import React from 'react'
import CartCard from '../../components/CartCard/CartCard'
import Button from "@mui/material/Button";
const CartPage = () => {
  return (
    <>
    <div className="cp-wrapper">
        <CartCard />
        <div className="cp-summary">
          <h1>Total Price<span>$ Amount</span></h1>
          <Button variant="contained">Clear Cart</Button>
          <Button variant="contained">Buy Now</Button>
        </div>
    </div>
    </>
  )
}

export default CartPage