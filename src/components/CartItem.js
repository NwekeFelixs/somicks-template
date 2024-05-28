import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-700 dark:text-gray-300 dark:border-gray-300">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link  to={`/products/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-gray-900 dark:text-white font-semibold uppercase text-sm hover:underline max-w-[240px]"
              to={`/products/${id}`}
            >
              {title}
            </Link>
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="text-gray-500 dark:text-gray-400 hover:text-red-600 transition duration-300" />
            </div>
          </div>
          <div className="flex flex-1  gap-x-2 h-[36]">
            <div className="flex justify-between item-center flex-1 max-w-[100px] h-full border text-gray-800 bg-gray-100 dark:bg-gray-800">
              <div
                className="flex-1 flex justify-center items-center  cursor-pointer dark:text-white"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2 dark:text-white">
                {amount}
              </div>
              <div
                className="flex-1 flex justify-center items-center  cursor-pointer dark:text-white"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="text-gray-800 dark:text-gray-300 flex-1 flex items-center justify-around">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center text-gray-800 dark:text-white font-medium">
              {" "}
              ${parseFloat(price * amount).toFixed(2)}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
