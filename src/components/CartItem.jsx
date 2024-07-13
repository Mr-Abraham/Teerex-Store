import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQty, removeQty, removefromCart } from "./store/useStore";

function CartItem({ item, ind }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  return (
    <div>
      <div key={ind} className="flex gap-10 border p-5 rounded-lg mb-2">
        <section className="w-[250px]">
          <img src={item.imageURL} alt={item.name} />
        </section>

        <div className="px-5 py-5 w-[350px] max-md:p-0">
          <section className="flex justify-between items-center font-bold">
            <p className="text-xl font-bold">{item.name}</p>
            <p>Avl Qty : {item.quantity}</p>
          </section>
          <section className="flex justify-between mt-5">
            <p className="text-xl">{item.price * item.qty}</p>
            <section className="flex items-center gap-3">
              <button
                className="text-2xl font-semibold"
                onClick={() => {
                  if (item.qty <= 1) {
                    dispatch(removefromCart(item));
                  }
                  dispatch(removeQty(item));
                }}
              >
                -
              </button>
              <h1 className="text-2xl font-semibold">{item.qty}</h1>
              <button
                onClick={() => {
                  if (item.qty >= item.quantity) {
                    setError(true);
                    alert(" You Can't Add More than Available Quantity");
                    return;
                  }
                  dispatch(addQty(item));
                }}
                className="text-2xl font-semibold"
              >
                +
              </button>
            </section>
          </section>
          <button
            onClick={() => dispatch(removefromCart(item))}
            className="bg-red-400 px-3 py-1 rounded-lg mt-10"
          >
            Remove from Cart
          </button>
        </div>
      </div>
      {/* <h1>Error: You Can't Add More than Available Quantity</h1> */}
      {error && (
        <div className="flex justify-between items-center p-2">
          <h1 className="text-red-600 ml-1 font-bold text-lg ">
            You Can't Add More than Available Quantity
          </h1>
          <button
            className="border rounded-full w-[30px] h-[30px] text-center text-lg bg-red-500 text-white"
            onClick={() => setError(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
