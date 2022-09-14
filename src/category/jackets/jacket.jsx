import * as React from "react";
import { JacketData } from "./jacketdata";
import GridCol4 from "../../Container/GridCol4";

export default function JacketCard() {
  return (
    <>
    <GridCol4 catName={JacketData}/>
    </>
  );
}
