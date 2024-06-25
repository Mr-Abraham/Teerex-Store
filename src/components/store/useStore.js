import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainProductData: [],
  productdata: [],
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
      // console.log(action.payload);
      for (let i = 0; i < action.payload.length; i++) {
        // console.log(action.payload[i]);
        state.productdata = state.mainProductData.filter((item) => {
          return item.price <= action.payload[i];
        });
      }
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
  },
});

export const {
  setProductData,
  colorFilter,
  genderFilter,
  priceFilter,
  typeFilter,
} = userSlice.actions;

export default userSlice.reducer;
