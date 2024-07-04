import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./store/useStore";

function Item() {
  const data = useSelector((state) => state.productdata);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  let cartItems = [];
  // let newItems = [];
  // console.log(cartItems);

  return (
    <div className="grid grid-cols-4 gap-4 p-2 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:ml-[200px]">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="px-3 py-2 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all max-md:w-[90%] max-md:m-auto"
          >
            <img
              className="w-2/3 m-auto max-md:w-full"
              src={item.imageURL}
              alt="t-shirt image"
            />
            <h1 className="text-xl font-semibold my-3 text-gray-500">
              {item.name}
            </h1>
            <h1>{item.gender}</h1>
            <div className="flex justify-between items-center p-1">
              <h2 className="text-xl font-semibold text-gray-600">
                Price: {item.price}
              </h2>
              <button
                onClick={() => {
                  // cartItems.unshift(item);
                  // dispatch(addtoCart(cartItems));
                }}
                className="px-3 py-2 text-sm rounded-md bg-gray-700 text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
