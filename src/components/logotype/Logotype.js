import { Typography, Box } from "@mui/material";
import logo from "../../assets/images/halo_logo.png";

const Logotype = function () {
  return (
    <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
      <Box
        component="img"
        src={logo}
        sx={{ height: "50px" }}
        alt="halo_logotype_img"
      />
      <Typography variant="h6">Halo Companion</Typography>
    </Box>
  );
};

export default Logotype;
