import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// post product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("discountPrice", data.discountedPrice);
    formData.append("specification", data.spec);
    formData.append("description", data.desc);
    data.images.map((image) => formData.append("images", image));
    try {
      const response = await axios.post(
        "http://localhost:4000/products",
        formData
      );
      if (!response.data) {
        throw new Error("error while creating product");
      }
      return response.data;
    } catch (error) {
      console.error(error, "cannot create product");
    }
  }
);

// retrive all product
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      if (!response.data) {
        throw new Error("error while retriving products");
      }
      return response.data;
    } catch (error) {
      console.error(error, "cannot retrive products");
    }
  }
);

// retrive single product
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/products/${id}`);
    if (!response.data) {
      throw new Error("product not found");
    }
    return response.data;
  } catch (err) {
    console.Error("error while retriving data");
  }
});

// edit product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    const id = data.id;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("discountPrice", data.discountedPrice);
    formData.append("specification", data.spec);
    formData.append("description", data.desc);
    data.images.map((image) => formData.append("images", image));

    try {
      const response = await axios.put(
        `http://localhost:4000/products/${id}`,
        formData
      );
      if (!response.data) {
        throw new Error("Product update failed", Error);
      }
      return response.data;
    } catch (err) {
      console.error("Product update failed", err);
    }
  }
);

// delete product
export const delProduct = createAsyncThunk(
  "products/delProduct",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/products/${id}`
      );
      if (!response.data) {
        throw new Error("error while deleting product");
      }
      return response.data;
    } catch (error) {
      console.error(error, "cannot delete product");
    }
  }
);

const initialState = {
  products: [],
  productsCount:"",
  product: [],
  status: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createProduct.fulfilled, (state) => {
        state.status = "Product Created";
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = "products retrived";
      state.products = action.payload;
      state.productsCount = action.payload.length;
    })
    .addCase(delProduct.fulfilled, (state) => {
        state.status = 'product deleted';
    })
    .addCase(getProduct.fulfilled, (state,action) => {
        state.status = 'product retrived';
        state.product = action.payload;
    })
    .addCase(updateProduct.fulfilled, (state) => {
        state.status = 'successfully updated'
    })
  },
});

export default productSlice.reducer;
