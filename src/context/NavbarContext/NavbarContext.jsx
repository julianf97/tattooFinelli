// NavbarContext.js
import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // Nuevo estado para rastrear el estado del menú

  const handleExitNavbar = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
    setMenuOpen((prev) => !prev);
  };

  return (
    <NavbarContext.Provider value={{ isOpen, setOpen, handleClickOpen, handleExitNavbar, isMenuOpen, setMenuOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};
