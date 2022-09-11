import React from "react";
import './hat.css';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
class Hat extends React.Component {
  render() {
    this.state = [
      {
        id: "1",
        Name: "Nike Hat",
        Price: 500,
        path: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: "2",
        Name: "Causal Hat",
        Price: 300,
        path: "https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: "3",
        Name: "LA Hat",
        Price: 450,
        path: "https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: "4",
        Name: "Black Hat",
        Price: 150,
        path: "https://images.pexels.com/photos/2146723/pexels-photo-2146723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ];
    return (
      <div>
        {this.state.map((userInfo) => {
          return (
            <>
              {/* <div>
                            <img src={userInfo.path} />
                            <h1>{userInfo.Name}</h1>
                            <h3>{userInfo.Price}</h3>
                            <button>Add to Cart</button>
                        </div> */}

              <Card sx={{ maxWidth: 345 }} className="Card">
                <CardMedia
                  component="img"
                  height="140"
                  image={userInfo.path}
                  alt="Hats"
                />
                <CardContent className="CardContent">
                  <Typography gutterBottom variant="h5" component="div">
                  Product Name - {userInfo.Name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                  Price - {userInfo.Price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className='btn'>Add to cart</Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    );
  }
}
export default Hat;
