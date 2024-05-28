import React, { createContext, useState } from "react";

export const sideBarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <sideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</sideBarContext.Provider>;
};

export default SidebarProvider;
