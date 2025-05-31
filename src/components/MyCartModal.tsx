"use client"
import React, { useState } from "react";

const MyCartModal = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productName: "T-Shirt",
      quantity: 2,
      price: 19.99,
      availability: "In Stock",
    },
    {
      id: 2,
      productName: "Sneakers",
      quantity: 1,
      price: 49.99,
      availability: "Limited Stock",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id:number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Checkout simulated!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="absolute top-12 right-0 w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col gap-6 z-20">
      {cartItems.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Shopping Cart</h2>

          <div className="flex flex-col gap-8">
            {cartItems.map((item) => (
              <div className="flex gap-4" key={item.id}>
                <img
                  src="https://via.placeholder.com/72x96"
                  alt="Product"
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.productName}</h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity > 1 && (
                          <span className="text-xs text-green-500">
                            {item.quantity} x
                          </span>
                        )}
                        ${item.price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.availability}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={loading}
                onClick={handleCheckout}
              >
                {loading ? "Processing..." : "Checkout"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCartModal;
