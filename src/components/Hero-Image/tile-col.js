import React from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  tileColumn: {
    display: "inline-block",
    border: "0.2rem solid white",
    backgroundColor: props => props.color,
    minHeight: "40px",
    minWidth: "310px",
  }
})

export default function TileCol(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.tileColumn}></div>
  )
}
