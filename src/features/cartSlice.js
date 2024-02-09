import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// post cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("discountPrice", data.discountedPrice);
    formData.append("specification", data.spec);
    formData.append("description", data.desc);
    formData.append("count", data.count);
    data.images.map((image) => formData.append("images", image));

    try {
      const response = await axios.post(
        "http://localhost:4000/cart",
        formData
      );
      if (!response.data) {
        throw new Error("cannot add item to cart");
      }
      return response.data;
    } catch (error) {
      console.error(error, "cannot add item to cart");
    }
  }
);

// retrive cart items
export const cartItems = createAsyncThunk(
  "cart/cartItems",
  async () => {
    try {
      const response = await axios.get("http://localhost:4000/cart");
      if (!response.data) {
        throw new Error("error while retriving cart items");
      }
      return response.data;
    } catch (error) {
      console.error(error, "cannot retrive cart items");
    }
  }
);


// edit cart item
export const updateCartCount = createAsyncThunk(
  "cart/updateCartCount",
  async (data) => {
    const id = data.id;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("discountPrice", data.discountedPrice);
    formData.append("specification", data.spec);
    formData.append("description", data.desc);
    formData.append("count", data.count);
    data.images.map((image) => formData.append("images", image));

    try {
      const response = await axios.put(
        `http://localhost:4000/cart/${id}`,
        formData
      );
      if (!response.data) {
        throw new Error("cannot edit item count", Error);
      }
      return response.data;
    } catch (err) {
      console.error("cannot edit item count", err);
    }
  }
);

// remove item from cart
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/cart/${id}`
      );
      if (!response.data) {
        throw new Error("error while removing item from cart");
      }
      return response.data;
    } catch (error) {
      console.error(error, "cannot remoove item");
    }
  }
);

const initialState = {
  cart: [],
  cartCount:"",
  status: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addToCart.fulfilled, (state) => {
        state.status = "success";
    })
    .addCase(cartItems.fulfilled, (state, action) => {
      state.status = "success";
      state.cart = action.payload;
    })
    .addCase(removeCartItem.fulfilled, (state) => {
        state.status = ' item removed';
    })
    .addCase(updateCartCount.fulfilled, (state) => {
        state.status = 'successfully updated'
    })
  },
});

export default cartSlice.reducer;
