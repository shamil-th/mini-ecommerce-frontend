import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Price = ({ product }) => {
  return (
    <Box display="flex" alignItems="center" gap={"10px"}>
      <Box  display="flex" alignItems="center" >
        <CurrencyRupeeIcon />
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'20px'}}>
          {product.discountPrice}
        </Typography>
      </Box>
      {product.discount && <><Box  display="flex" alignItems="center" sx={{ textDecoration: 'line-through', color: 'grey'}} >
        <CurrencyRupeeIcon  />
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'16px'}}>
          {product.price}
        </Typography>
      </Box>
      <Box  display="flex" alignItems="center">
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'16px'}}>
         ({product.discount}% OFF)
        </Typography>
      </Box></>}
    </Box>
  );
};

export default Price;
