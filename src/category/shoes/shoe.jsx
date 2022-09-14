import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoeData } from "./shoedata";
import GridCol4 from "../../Container/GridCol4";

export default function ShoeCard() {
  return (
    <>
    <GridCol4 catName={ShoeData}/>
    </>
  );
}
