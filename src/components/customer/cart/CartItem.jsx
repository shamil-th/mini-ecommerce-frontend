import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box } from "@mui/material";

const CartItem = ({ item }) => {
  return (
    <>
      <Card sx={{ minWidth: 200, maxWidth: 345, backgroundColor: "#f9fafb" }}>
        <CardMedia
          component="img"
          alt="product"
          height="140"
          image={`http://localhost:4000/cart/${item.images[0]}`}
          sx={{ objectFit: "cover" }}        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Box  display="flex" alignItems="center" >
        <CurrencyRupeeIcon />
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'20px'}}>
          {item.discountPrice}
        </Typography>
      </Box>
          <Typography variant="body2" color="text.secondary">
            {item.specification}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CartItem;
