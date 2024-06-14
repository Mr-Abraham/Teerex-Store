import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./components/Item";
import Footer from "./components/Footer";
import Header from "./Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const raw = await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    );
    const response = await raw.json();
    console.log(response);
    setData(response);
  };
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Item data={data} />;
      </div>
      <Footer />
    </>
  );
}

export default App;
