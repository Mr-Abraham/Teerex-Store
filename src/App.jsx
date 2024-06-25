import React from "react";
import { useState, useEffect } from "react";
import Item from "./components/Item";
import Footer from "./components/Footer";
import Header from "./Header";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "./components/store/useStore";

function App() {
  useEffect(() => {
    getData();
  }, []);
  const dispatch = useDispatch();
  const getData = async () => {
    const raw = await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    );
    const response = await raw.json();
    dispatch(setProductData(response));
  };
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Item />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
