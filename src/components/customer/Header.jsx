import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let cartItemCount = 2;
  let navigate = useNavigate();
  const gotoCart = () => {
    navigate("/cart");
  };
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ShoppingCartIcon />
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Shopping Cart
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", marginRight: "20px" }}>
            <div
              style={{
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search products…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                ml: 1,
                color: "inherit",
                "& .MuiInputBase-input": {
                  pl: "25px",
                  pr: "10px",
                  width: "200px",
                  transition: (theme) => theme.transitions.create("width"),
                  "&:focus": {
                    width: "250px",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: alpha("#ffff", 0.9),
                },
              }}
            />
          </div>
          <Badge
            badgeContent={cartItemCount}
            color="secondary"
            onClick={gotoCart}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <ShoppingCartIcon />
          </Badge>

          <Box sx={{ ml: 2 }}>
            <AccountCircleIcon />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
