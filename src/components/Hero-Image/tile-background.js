import React from "react";
import TileRow from "./tile-row";

export default function TileBackground(props) {
  const rows = [];
  let color = "#E8FF00";

  for(let i = 0; i < props.rows; i++) {
    if (i === props.rows / 2) {
      color = "#FFFFCC";
    }
    rows.push(<TileRow key={i} cols={props.cols} color={color}/>)
  }

  return (
    <>
      {rows}
    </>
  )
}
