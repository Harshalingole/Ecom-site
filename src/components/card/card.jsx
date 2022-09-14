import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectImgState, setImgId } from "../../Redux/ModalSlice";

export default function MediaCard({catName}) {
  const imgId = useSelector((state) => state.modal.value)
  // console.log(imgId);
  const dispatch = useDispatch()
  const onImgClick = (e) => {
    console.log('ImgCLick');
    dispatch(setImgId(e.target.id))
  }
  return (
    <>
        {catName.map((id, Name, Price, path,) => {
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
                <Button variant="outlined">Add To Cart</Button>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
}
