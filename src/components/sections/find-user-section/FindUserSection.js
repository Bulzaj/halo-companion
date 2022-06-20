import { useState } from "react";
import { Box, Container, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const HELPER_TEXT = "Field could not be empty";

const FindUserSection = function () {
  const [inputValue, setInputValue] = useState("");
  const [focusOut, setFocusOut] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    navigate(`/dashboard/${inputValue}`);
  };

  const handleInputChange = function (e) {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleBlur = function (e) {
    e.preventDefault();
    setFocusOut(true);
  };

  return (
    <Container id="find-user-section" component="section" maxWidth="lg">
      <Box
        sx={{
          marginTop: 9,
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          SEARCH FOR HALO INFINITE STATS
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            onBlur={handleBlur}
            onChange={handleInputChange}
            id="playertag"
            margin="normal"
            fullWidth
            name="playerstag"
            type="text"
            label="Player's Gametag"
            error={!inputValue && focusOut}
            helperText={!inputValue && focusOut && HELPER_TEXT}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            endIcon={<SearchIcon />}
            sx={{ mt: 3, mb: 2 }}
            disabled={!inputValue}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FindUserSection;
