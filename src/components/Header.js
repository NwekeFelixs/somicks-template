import React, { useContext, useEffect, useState } from "react";
import { sideBarContext } from "../contexts/SidebarContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logoLight from "../images/logo.svg";
import logoDark from "../images/logo-light.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(sideBarContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${ isActive ? 'bg-white py-4 shadow-md' : 'bg-slate-50 py-6'} bg-white dark:bg-gray-800 p-4  fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div>
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="logo"
              className="w-[40px]"
            />
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-xl border rounded-full p-2 dark:text-white"
          >
            {theme === "dark" ? <IoSunnySharp /> : <IoMoonSharp />}
          </button>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative max-w-[50px]"
          >
            <BsBag className="text-2xl dark:text-white" />
            <div className="bg-blue-900 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
