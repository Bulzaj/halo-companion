import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landing-page/LandingPage";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

// TODO: validate player finder input
// TODO: validate navbar player finder input
// TODO: scroll to player finder section after button click
// TODO: navigate to dashboard page after form submit & navbar finder & pasing player's tag in url

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
