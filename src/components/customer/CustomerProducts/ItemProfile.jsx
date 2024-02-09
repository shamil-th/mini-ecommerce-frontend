import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/productSlice";
import ProductImgs from "../../admin/product profile/ProductImgs";
import Price from "./Price";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { addToCart, cartItems } from "../../../features/cartSlice";

const ItemProfile = () => {
  const product = useSelector((state) => state.products.product);
  const [isCart, setIsCart] = useState(false);
  let dispatch = useDispatch();
  let id = useParams();
  useEffect(() => {
    dispatch(getProduct(id.id));
  }, [id]);

  const name = product.name;
  const discountedPrice = product.discountPrice;
  const spec = product.specification;
  const desc = product.description;
  const count = 1;
  const images = product.images;

  const addItemtoCart = async() => {
    const data = {
      name,
      discountedPrice,
      spec,
      desc,
      count,
      images
    };
    await dispatch(addToCart(data));
    dispatch(cartItems())
    setIsCart(true);
  };

  let navigate = useNavigate();
  const gotoCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {product.images && <ProductImgs product={product} />}
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {product.description}
            </Typography>
            <Price product={product} />
            <Typography variant="body2" color="text.secondary">
              {product.specification}
            </Typography>
            {!isCart ? (
              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={addItemtoCart}
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={gotoCart}
              >
                Go to Cart
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ItemProfile;
