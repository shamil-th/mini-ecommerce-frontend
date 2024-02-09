import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";
import ProductListing from "./CustomerProducts/ProductListing";

const Home = ({ cartItemCount }) => {
  return (
    <>
      <Header />
      <Container>
        <ProductListing/>
      </Container>
    </>
  );
};

export default Home;
