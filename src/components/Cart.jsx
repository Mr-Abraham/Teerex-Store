import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  //   const cartItems = [
  //     {
  //       id: 1,
  //       imageURL:
  //         "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
  //       name: "Black Hoodie",
  //       type: "Polo",
  //       price: 250,
  //       currency: "INR",
  //       color: "Black",
  //       gender: "Men",
  //       quantity: 3,
  //     },
  //     {
  //       id: 2,
  //       imageURL:
  //         "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png",
  //       name: "Blue Polo",
  //       type: "Polo",
  //       price: 350,
  //       currency: "INR",
  //       color: "Blue",
  //       gender: "Women",
  //       quantity: 3,
  //     },
  //   ];

  const cartItems = useSelector((state) => state.CartData);
  //   console.log(cartItems);
  return (
    <div className="m-5">
      <h1 className="text-6xl mb-5 font-extrabold">Cart</h1>
      <div className="flex p-5 gap-10 items-start max-md:flex-col max-md:gap-4 max-md:p-2">
        <div className="w-[60%] max-md:w-full">
          {cartItems.map((item, ind) => {
            let itemQty = 1;
            return (
              <div key={ind} className="flex gap-10 border p-5 rounded-lg mb-2">
                <section className="w-[250px]">
                  <img src={item.imageURL} alt={item.name} />
                </section>

                <div className="px-5 py-5 w-[350px] max-md:p-0">
                  <section>
                    <p className="text-xl font-bold">{item.name}</p>
                  </section>
                  <section className="flex justify-between mt-5">
                    <p className="text-xl">{item.price * itemQty}</p>
                    <section className="flex items-center gap-3">
                      <button className="text-2xl font-semibold">-</button>
                      <h1 className="text-2xl font-semibold">{itemQty}</h1>
                      <button className="text-2xl font-semibold">+</button>
                    </section>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border bg-gray-100 rounded-lg w-3/10 max-md:w-full px-10 py-10">
          <h1 className="text-4xl mb-5 font-semibold">Summary</h1>
          <div>
            <section className="flex justify-between items-center mb-5">
              <h1 className="font-light text-lg  ">Subtotal</h1>
              <h1 className="font-semibold">Rs. 0</h1>
            </section>
            <section className="flex justify-between items-center mb-5">
              <h1 className="font-light text-lg  ">Total Items</h1>
              <h1 className="font-semibold">2</h1>
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
