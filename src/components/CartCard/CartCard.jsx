import React from "react";
import "./CartCard.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../../Redux/CartSlice";

const CartCard = () => {
  const cartProductList = useSelector((state) => state.cart.cartArray);
  const dispatch = useDispatch();
  console.log(cartProductList);
  const onRemoveItem = (e) => {
    dispatch(deleteCartItem(e.target.id))
  }
  const imgLink =
    "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      {cartProductList.map((el,index) => {
        return (
          <div className="cc-wrapper">
            <div className="cc-img">
              <img src={el.path} alt="" />
            </div>
            <h2>{el.Name}</h2>
            <h2>$ {el.Price}</h2>
            <h3>
              Quantity <span>1</span>
            </h3>
            <div className="cc-function">
              <Button variant="outlined" className="btn-fun">+</Button>
              <Button variant="outlined" className="btn-fun">-</Button>
              <Button variant="contained" id={index} onClick={(e) => onRemoveItem(e)} >Remove</Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartCard;
