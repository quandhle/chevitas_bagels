import React from "react";
import TileRow from "./tile-row";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  heroImageWrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "562.25px",
  }
})

export default function TileBackground(props) {
  const classes = useStyles(props);
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
      <div className={classes.heroImageWrapper}>
        <div className={props.image}></div>
      </div>
      {rows}
    </>
  )
}
