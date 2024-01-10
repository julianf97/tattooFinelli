import Navbar from "../../components/Navbar/Navbar"
import { NavbarOpen } from "../../components/Navbar/NavbarOpen";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";
import { useContext } from "react";
import foto1 from "../../assets/img/endingPic/foto1.jpg";
import foto2 from "../../assets/img/endingPic/foto2.jpg";
import foto3 from "../../assets/img/endingPic/foto3.jpg";
import foto4 from "../../assets/img/endingPic/foto4.jpg";
import foto5 from "../../assets/img/endingPic/foto5.png";
import foto6 from "../../assets/img/endingPic/foto6.jpg";
import foto7 from "../../assets/img/endingPic/foto7.jpg";
import foto8 from "../../assets/img/endingPic/foto8.png";
import "../BlackAndGrey/_blackandgrey.scss"

export default function Lettering() {
  const { isOpen } = useContext(NavbarContext);

  return (
    <>
      <Navbar/>
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
            <img src={foto8} alt="firstpicture"></img>
          </div>
        </div>
      </div>
    </>
    
  )
}
