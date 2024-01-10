import Navbar from "../../components/Navbar/Navbar"
import { NavbarOpen } from "../../components/Navbar/NavbarOpen";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";
import { useContext } from "react";

export default function Lettering() {
  const { isOpen } = useContext(NavbarContext);

  return (
    <>
      <Navbar/>
      {isOpen ? <NavbarOpen /> : <div></div>}
    </>
    
  )
}
