import {
  Container,
  Box,
  AppBar,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Logotype from "../logotype/Logotype";
import Search from "../search/Search";

const Navbar = function () {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <AppBar
      position="fixed"
      color={trigger ? "primary" : "transparent"}
      elevation={trigger ? 4 : 0}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box flexGrow={1}>
            <Logotype light />
          </Box>
          <Box>
            <Search />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
