import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/productSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <Box sx={{display:'flex', gap:'20px', mt:'20px'}}>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </Box>
  );
};

export default ProductList;
