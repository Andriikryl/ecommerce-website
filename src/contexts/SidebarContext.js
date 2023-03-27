import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ childred }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {childred}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
