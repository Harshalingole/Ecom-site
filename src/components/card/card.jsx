import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectImgState, setImgId } from "../../Redux/ModalSlice";
import { addPrice, addToCart, selectCartArray } from "../../Redux/CartSlice";

export default function MediaCard({catName}) {
  const imgId = useSelector((state) => state.modal.value)
  const cartArr = useSelector((state) => state.cart.cartArray)
  // console.log(cartArr);
  // console.log(catName);
  const dispatch = useDispatch()
  const onImgClick = (e) => {
    console.log('ImgCLick');
    dispatch(setImgId(e.target.id))
  }
  const onAddToCart = (e) => {
    console.log('AddToCart Click');
    const prdObj = catName[Number(e.target.id)];
    // dispatch(addPrice(prdObj.Price))
    dispatch(addToCart(prdObj))
  }
  return (
    <>
        {catName.map((id) => {
          return (
            <Card className="Card" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={id.path}
                id={id.id}
                onClick={(e) => onImgClick(e)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name : {id.Name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Price : {id.Price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" id={Number(id.id -1)} onClick={onAddToCart}>Add To Cart</Button>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
}
