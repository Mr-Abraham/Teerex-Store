import { createSlice } from "@reduxjs/toolkit";
import Cart from "../Cart";
import { useState } from "react";

const initialState = {
  mainProductData: [],
  productdata: [],
  CartData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.mainProductData = action.payload;
      state.productdata = action.payload;
    },
    colorFilter: (state, action) => {
      state.productdata = state.mainProductData.filter((item) =>
        action.payload.includes(item.color)
      );
      if (action.payload.length < 1) {
        state.productdata = state.mainProductData;
      }
    },
    genderFilter: (state, action) => {
      state.productdata = state.mainProductData.filter((item) =>
        action.payload.includes(item.gender)
      );
      if (action.payload.length < 1) {
        state.productdata = state.mainProductData;
      }
    },
    priceFilter: (state, action) => {
      let minValue = action.payload[0].min;
      let maxValue = action.payload[0].max;

      for (let i = 0; i < action.payload.length; i++) {
        if (action.payload[i].min < minValue) {
          minValue = action.payload[i].min;
        }
        if (action.payload[i].max > maxValue) {
          maxValue = action.payload[i].max;
        }
      }
      state.productdata = state.mainProductData.filter((item) => {
        return item.price >= minValue && item.price <= maxValue;
      });

      if (action.payload.length < 1) {
        state.productdata = state.mainProductData;
      }
    },
    typeFilter: (state, action) => {
      state.productdata = state.mainProductData.filter((item) =>
        action.payload.includes(item.type)
      );
      if (action.payload.length < 1) {
        state.productdata = state.mainProductData;
      }
    },
    search: (state, action) => {
      state.productdata = state.mainProductData.filter((item) => {
        const searchTerms = action.payload.toLowerCase().split(" ");
        return searchTerms.every((term) => {
          return (
            item.name.toLowerCase().includes(term) ||
            item.color.toLowerCase().includes(term) ||
            item.type.toLowerCase().includes(term) ||
            item.price <= term
          );
        });
      });
    },
    addtoCart: (state, action) => {
      state.CartData = [...state.CartData, { ...action.payload, qty: 1 }];
    },
    removefromCart: (state, action) => {
      state.CartData = state.CartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addQty: (state, action) => {
      state.CartData = state.CartData.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },

    removeQty: (state, action) => {
      state.CartData = state.CartData.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  setProductData,
  colorFilter,
  genderFilter,
  priceFilter,
  typeFilter,
  search,
  addtoCart,
  removefromCart,
  addQty,
  removeQty,
} = userSlice.actions;

export default userSlice.reducer;
