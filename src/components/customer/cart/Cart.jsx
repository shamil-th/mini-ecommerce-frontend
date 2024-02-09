import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { cartItems } from "../../../features/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartItems());
  },[]);
  return (
    <>
      <Header />
      <Container>
        <Box>
          {cart?.map((item) => (
          <CartItem item={item} key={item._id} />
          ))
}
        </Box>
      </Container>
    </>
  );
};

export default Cart;
