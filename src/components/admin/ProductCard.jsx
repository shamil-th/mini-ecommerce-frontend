import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { delProduct, getAllProducts } from "../../features/productSlice";
import { useNavigate } from "react-router-dom";
import DeleteAlert from "./DeleteAlert";

const ProductCard = ({ product }) => {

  const [deleteDialog,setDeleteDialog] = useState(false);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const profileView = () => {
    navigate('/admin/product-profile',{ state: { id: product._id } });
  }

  const deleteModal = () => {
    setDeleteDialog(true);
  }
  const handleDelete = () => {
    dispatch(delProduct(product._id));
    dispatch(getAllProducts());
    setDeleteDialog(false);
  };
  return (
    <>
    <Card sx={{minWidth:200, maxWidth: 345 , backgroundColor:'#f9fafb' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`http://localhost:4000/products/${product.images[0]}`}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyRupeeIcon />
          <Typography gutterBottom variant="h6" component="div">
            {product.discountPrice}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.specification}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" onClick={profileView}>
          View
        </Button>
        <Button variant="contained" size="small" onClick={deleteModal}>
          Delete
        </Button>
      </CardActions>
    </Card>
    <DeleteAlert handleDelete={handleDelete} setDeleteDialog={setDeleteDialog} deleteDialog={deleteDialog} product={product.name}/>
    </>
  );
};

export default ProductCard;
