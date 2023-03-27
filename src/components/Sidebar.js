import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handelClose } = useContext(SidebarContext);
  return (
    <div className="w-full bg-white fixed top-0 h-full shadow-2xl md:-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-5 lg:px-[35px]">
      Sidebar
    </div>
  );
};

export default Sidebar;
