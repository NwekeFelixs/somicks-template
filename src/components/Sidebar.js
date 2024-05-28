import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { sideBarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(sideBarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white dark:bg-gray-800 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-auto`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold dark:text-white">
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-9 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl dark:text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="w-full flex justify-between items-center py-4 mt-4 gap-y-3">
        <div className="flex w-full justify-between items-center">
          <div className="dark:text-white uppercase font-semibold">
            <span>Total:</span> ${total}
          </div>
        </div>

        <div
          className="cursor-pointer py-4 bg-red-600 text-white w-12 h-12 flex justify-center items-center text-xl"
          onClick={() => clearCart()}
        >
          <FiTrash2 />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link to={'/'} className="text-white bg-blue-900 flex justify-center items-center py-4 rounded-lg mb-2  hover:bg-gray-500 w-full font-medium  transition-all duration-300">View cart</Link>
        <Link to={'/'} className="text-white bg-gray-500 flex justify-center items-center py-4 rounded-lg mb-2 hover:bg-blue-900 w-full font-medium transition-all duration-300">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
