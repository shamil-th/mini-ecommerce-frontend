import { Box, Container, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/productSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EditProduct from "./EditProduct";
import ModalOn from "../ModalOn";
import ProductImgs from "./ProductImgs";

const ProductProfile = () => {
  const product = useSelector((state) => state.products.product);
  const [open, setOpen] = React.useState(false);
  const [modalOn, setModalOn] = useState(false);

  const handleEditPopup = () => {
    setOpen(true);
  };

  let dispatch = useDispatch();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  return (
    <>
      <AdminHeader />
      <Container sx={{ my: 2 }}>
        {product.images && (
          <Box>
            <Card
              sx={{
                maxWidth: "100%",
                boxShadow: "inherit",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ProductImgs product={product} />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ diplay: "inline-block" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      <span style={{ fontSize: "0.8em" }}>MRP:</span>{" "}
                      <CurrencyRupeeIcon />
                      {product.price}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h6" component="div">
                    <span style={{ fontSize: "0.8em" }}>Discount:</span>{" "}
                    {product.discount}%
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      <span style={{ fontSize: "0.8em" }}> RetailPrice: </span>{" "}
                      <CurrencyRupeeIcon /> {product.discountPrice}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {product.specification}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleEditPopup}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" size="small">
                    Delete
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        )}
        <EditProduct
          setOpen={setOpen}
          open={open}
          product={product}
          setModalOn={setModalOn}
        />
        <ModalOn setModalOn={setModalOn} modalOn={modalOn} content={"Edited"} />
      </Container>
    </>
  );
};

export default ProductProfile;
