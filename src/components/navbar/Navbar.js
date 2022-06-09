import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import Logotype from "../logotype/Logotype";
import { blueGrey } from "@mui/material/colors";

const Navbar = function () {
  const trigger = useScrollTrigger();

  return (
    <AppBar
      position="fixed"
      color={trigger ? "primary" : "transparent"}
      elevation={trigger ? 4 : 0}
    >
      <Toolbar>
        <Logotype light />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
