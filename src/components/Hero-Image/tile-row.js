import React from "react";
import TileCol from "./tile-col";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  tileRow: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "nowrap",
    overflow: "hidden",
    margin: "0.25rem auto",
  }
})

export default function TileRow(props) {
  const classes = useStyles();
  const columns = [];

  for(let i = 0; i < props.cols; i++) {
    columns.push(<TileCol key={i} color={props.color}/>)
  }

  return (
    <div className={classes.tileRow}>
      {columns}
    </div>
  )
}
