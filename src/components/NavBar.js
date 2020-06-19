import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FaceIcon from "@material-ui/icons/Face";

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit">
          <FaceIcon />
        </IconButton>
        <Typography variant="h6">Employee viewer</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
