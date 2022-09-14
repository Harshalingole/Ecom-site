import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { HatData } from "./hatdata";
import GridCol4 from "../../Container/GridCol4";

export default function HatCard() {
  return (
    <>
    <GridCol4 catName={HatData} /> 
    </>
  );
}
