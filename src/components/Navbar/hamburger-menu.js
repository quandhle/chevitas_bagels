import React, {Fragment} from "react";
import { Menu, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import HamburgerLabels from "./hamburger-labels";

const HamburgerMenu = ({lang}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Fragment>
      <IconButton
        aria-label="more"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ fontSize: 45 }}/>
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        >
        <HamburgerLabels lang={lang} handleClose={handleClose} />
      </Menu>
    </Fragment>
  )
}

export default HamburgerMenu;
