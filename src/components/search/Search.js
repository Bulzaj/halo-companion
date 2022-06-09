import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = function () {
  const placeholder = "Enter tag...";

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 190,
        transition: (theme) => theme.transitions.create("width"),
        "&:hover": { width: 211 },
      }}
    >
      <InputBase
        placeholder={placeholder}
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": placeholder }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon color="info" />
      </IconButton>
    </Paper>
  );
};

export default Search;
