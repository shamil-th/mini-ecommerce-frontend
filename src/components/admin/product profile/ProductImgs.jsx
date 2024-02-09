import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";

const ProductImgs = ({ product }) => {
  const [viewImg, setViewImg] = useState(0);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="cover"
            height="300"
            image={`http://localhost:4000/products/${product.images[viewImg]}`}
            sx={{
              objectFit: "contain",
              width: "100%",
              justifyContent: "center",
            }}
          />
        </Box>
        <Box sx={{ display: "flex" }} gap={"10px"} m={2}>
          {product.images.map((image, index) => (
            <CardMedia
              component="img"
              alt="product"
              height="140"
              image={`http://localhost:4000/products/${image}`}
              sx={{
                objectFit: "contain",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              key={index}
              onClick={() => setViewImg(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductImgs;
