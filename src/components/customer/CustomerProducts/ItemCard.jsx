import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Price from "./Price";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ product }) => {
  let id = product._id;
  let navigate = useNavigate();

  const itemProfile = () => {
    navigate(`/item-profile/${id}`);
  };
  return (
    <>
      <Card sx={{ minWidth: 200, maxWidth: 345, backgroundColor: "#f9fafb" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`http://localhost:4000/products/${product.images[0]}`}
          sx={{ objectFit: "cover" }}
          onClick={itemProfile}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Price product={product} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {product.specification}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemCard;
