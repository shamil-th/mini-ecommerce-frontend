import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { createProduct, getAllProducts } from "../../features/productSlice";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModalOn from "./ModalOn";

const CreateProduct = ({ setOpen, open,  }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [spec, setSpec] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState("");

   const [modalOn,setModalOn] = useState()

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

  const resetForm = () => {
    setName("");
    setPrice("");
    setDiscount("");
    setDiscountedPrice("");
    setSpec("");
    setDesc("");
    setImages([]);
  };

  const postProduct = async () => {
    const newProduct = {
      name,
      price,
      discount,
      discountedPrice,
      spec,
      desc,
      images,
    };

    await dispatch(createProduct(newProduct));
    dispatch(getAllProducts());

    resetForm();
    handleClose();
    setModalOn(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Product</DialogTitle>
      <DialogContent sx={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'20px'}}>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={postProduct}>Create</Button>
      </DialogActions>
    </Dialog>
    <ModalOn content={'created'} modalOn={modalOn} setModalOn={setModalOn}/>
    </>
  );
};

export default CreateProduct;
