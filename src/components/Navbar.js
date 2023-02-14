import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <NavLink
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#FC1503",
          fontSize: "1.25rem",
        }}
      >
        <span>STEELO</span>
      </NavLink>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
