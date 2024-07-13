import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { addQty, addtoCart, removeQty } from "./store/useStore";

function Cart() {
  const dispatch = useDispatch();
  let Items = useSelector((state) => state.CartData);
  const [cartItems, setCartItems] = useState(Items);

  useEffect(() => {
    setCartItems(Items);
  }, [addQty, Items, removeQty]);

  return (
    <div className="m-5">
      <h1 className="text-6xl mb-5 font-extrabold">Cart</h1>
      <div className="flex p-5 gap-10 items-start max-md:flex-col max-md:gap-4 max-md:p-2">
        <div className="w-[60%] max-md:w-full">
          {cartItems.map((item, ind) => {
            return <CartItem key={ind} item={item} ind={ind} />;
          })}
        </div>
        <div className="border bg-gray-100 rounded-lg w-3/10 max-md:w-full px-10 py-10">
          <h1 className="text-4xl mb-5 font-semibold">Summary</h1>
          <div>
            <section className="flex justify-between items-center mb-5">
              <h1>Subtotal</h1>
              <h1 className="font-semibold">
                Rs{" "}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.qty,
                  0
                )}
              </h1>
            </section>
            <section className="flex justify-between items-center mb-5">
              <h1>Total Products</h1>
              {cartItems.length}
            </section>
            <section className="flex justify-between items-center mb-5">
              <h1>Total Quantity</h1>
              {cartItems.reduce((total, item) => total + item.qty, 0)}
            </section>
            <button className="bg-black rounded-full px-3 py-3 text-white w-[250px] font-bold text-xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
