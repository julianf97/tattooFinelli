import Navbar from "../../components/Navbar/Navbar";
import { NavbarOpen } from "../../components/Navbar/NavbarOpen";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";
import { useEffect } from "react";
import { useContext } from "react";
import foto1 from "../../../public/img/blackAndGrey/foto1.jpg"
import foto2 from "../../../public/img/blackAndGrey/foto2.jpg"
import foto3 from "../../../public/img/blackAndGrey/foto3.jpg"
import foto4 from "../../../public/img/blackAndGrey/foto4.jpg"
import foto5 from "../../../public/img/blackAndGrey/foto5.jpg"
import foto6 from "../../../public/img/blackAndGrey/foto6.jpg"
import foto7 from "../../../public/img/blackAndGrey/foto7.png"
import foto8 from "../../../public/img/blackAndGrey/foto8.jpg"
import foto9 from "../../../public/img/blackAndGrey/foto9.jpg"
import foto10 from "../../../public/img/blackAndGrey/foto10.jpg"
import foto11 from "../../../public/img/blackAndGrey/foto11.jpg"
import foto12 from "../../../public/img/blackAndGrey/foto12.jpg"

import "./_blackandgrey.scss";

export default function BlackAndGrey() {
  const { isOpen, handleExitNavbar } = useContext(NavbarContext);

  const useScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

  const useCloseNavbar = () => {
    useEffect(() => {
      handleExitNavbar();
    }, []);
  }

  useScrollToTopOnMount()
  useCloseNavbar()


  return (
    <>
      <Navbar />
      {isOpen ? <NavbarOpen /> : <div></div>}
      <div className="galleryContainer">
        <div className="internoGaleria">
          <div className="foto">
            <img src={foto1} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto2} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto3} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto4} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto5} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto6} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto7} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto8} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto9} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto10} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto11} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto12} alt="firstpicture"></img>
          </div>
        </div>
      </div>
    </>
  );
}
