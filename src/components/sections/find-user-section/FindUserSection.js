import { Box, Container, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FindUserSection = function () {
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <Container component="section" maxWidth="lg">
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
            id="playertag"
            margin="normal"
            fullWidth
            name="playerstag"
            type="text"
            label="Player's Gametag"
          />
          <Button
            variant="contained"
            fullWidth
            endIcon={<SearchIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FindUserSection;
