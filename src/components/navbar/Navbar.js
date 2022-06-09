import { AppBar, Toolbar } from "@mui/material";
import Logotype from "../logotype/Logotype";

const Navbar = function () {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Logotype light />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
