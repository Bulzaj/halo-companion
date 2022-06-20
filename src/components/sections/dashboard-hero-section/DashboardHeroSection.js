import { Box } from "@mui/material";
import heroImg from "../../../assets/images/dashboard-hero-img.jpg";

const styles = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .57), 81%, #fff), 
  url(${heroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "20% 80%",
  height: 380,
};

const DashboardHeroSection = function () {
  return <Box sx={styles}></Box>;
};

export default DashboardHeroSection;
