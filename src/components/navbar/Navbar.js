import { AppBar, Toolbar } from "@mui/material";
import Logotype from "../logotype/Logotype";

const Navbar = function () {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logotype />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
