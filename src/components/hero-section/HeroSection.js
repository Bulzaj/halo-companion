import { Box, Button, Typography } from "@mui/material";
import classes from "./heroSection.module.css";

const HeroSection = function () {
  const buttonClickHandler = function () {
    console.log("clicked");
  };

  return (
    <Box
      className={classes.wrapper}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography
          variant="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "600",
            background:
              "-webkit-linear-gradient(bottom,  rgba(255, 255, 255, .8), rgba(0, 0, 0, .8))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Halo Companion App
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ margin: "auto" }}
          onClick={buttonClickHandler}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
