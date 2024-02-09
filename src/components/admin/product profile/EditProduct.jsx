import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getProduct, updateProduct } from "../../../features/productSlice";
import { Box } from "@mui/material";

const EditProduct = ({ product, open, setOpen, setModalOn }) => {

  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price);
  const [discount, setDiscount] = useState(product?.discount);
  const [spec, setSpec] = useState(product?.specification);
  const [desc, setDesc] = useState(product?.description);
  const [images, setImages] = useState(product?.images);
  const [discountedPrice, setDiscountedPrice] = useState(
    product?.discountedPrice
  );
  const id = product._id;

  let dispatch = useDispatch();
  

  // discount calculation
  useEffect(() => {
    const discountDecimal = discount / 100;
    const calculatedDiscountedPrice = Math.ceil(
      price - price * discountDecimal
    );
    setDiscountedPrice(calculatedDiscountedPrice || "");
  }, [discount, price]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const editProduct = async () => {
    const newProduct = {
      id,
      name,
      price,
      discount,
      discountedPrice,
      spec,
      desc,
      images,
    };

    await dispatch(updateProduct(newProduct));
    dispatch(getProduct(id));
    handleClose();
    setModalOn(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{
        sx: {
          width: "500px",
        },
      }}>
         <Box sx={{ display: "flex", flexDirection: "column",}}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column", // Set to column layout
          gap: "20px",
          maxWidth: "90%"
        }}
      >
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "#2196f3",
            color: "white",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          Upload Images
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'20px' }}>
          <TextField
            label="Product Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Actual Price"
            variant="filled"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Discount Percentage"
            variant="filled"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <TextField
            label="Discounted Price"
            variant="filled"
            value={discountedPrice}
            disabled
          />
          <TextField
            label="Specifications"
            variant="filled"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          />
          <TextField
            label="Description"
            variant="filled"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Box>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={editProduct}>Save</Button>
      </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditProduct;
