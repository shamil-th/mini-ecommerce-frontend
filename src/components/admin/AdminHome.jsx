import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border:"1px solid"
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.8, 1, 0.8, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AdminHome = () => {

  const count = useSelector((state) => state.products.productsCount)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Box m={2} sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{display:'flex', gap:'10px', alignItems:'flex-end'}}>
        <Typography variant="h6">Products: {count}</Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search item…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button variant="outlined" onClick={handleClickOpen} sx={{color:'black', border:'1px solid black'}}  startIcon={<AddCircleOutlineIcon />}>
            Add Item
          </Button>
          
        </Box>
        <Box>
          <ProductList />
        </Box>
      </Box>
      <CreateProduct setOpen={setOpen} open={open} />
    </Container>
  );
};

export default AdminHome;
