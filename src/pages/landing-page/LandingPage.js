import { Box } from "@mui/material";
import FindUserSection from "../../components/sections/find-user-section/FindUserSection";
import HeroSection from "../../components/sections/hero-section/HeroSection";

const LandingPage = function () {
  return (
    <Box>
      <HeroSection />
      <FindUserSection />
    </Box>
  );
};

export default LandingPage;
