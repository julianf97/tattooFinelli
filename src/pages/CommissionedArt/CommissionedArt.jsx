import Navbar from "../../components/Navbar/Navbar";
import { NavbarOpen } from "../../components/Navbar/NavbarOpen";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";
import { useContext, useEffect } from "react";
import "../BlackAndGrey/_blackandgrey.scss";
import foto1 from "../../../public/img/commisionedArt/foto1.jpg"
import foto2 from "../../../public/img/commisionedArt/foto2.jpg"
import foto3 from "../../../public/img/commisionedArt/foto3.jpg"
import foto4 from "../../../public/img/commisionedArt/foto4.jpeg"
import foto5 from "../../../public/img/commisionedArt/foto5.png"
import foto6 from "../../../public/img/commisionedArt/foto6.jpg"
import foto7 from "../../../public/img/commisionedArt/foto7.jpeg"
import foto8 from "../../../public/img/commisionedArt/foto8.jpg"
import foto9 from "../../../public/img/commisionedArt/foto9.png"
import foto10 from "../../../public/img/commisionedArt/foto10.jpeg"
import foto11 from "../../../public/img/commisionedArt/foto11.jpg"
import foto12 from "../../../public/img/commisionedArt/foto12.jpeg"
import foto13 from "../../../public/img/commisionedArt/foto13.jpg"
import foto14 from "../../../public/img/commisionedArt/foto14.jpg"
import foto15 from "../../../public/img/commisionedArt/foto15.jpg"
import foto16 from "../../../public/img/commisionedArt/foto16.jpg"
import foto17 from "../../../public/img/commisionedArt/foto17.jpg"
import foto18 from "../../../public/img/commisionedArt/foto18.jpg"
import foto19 from "../../../public/img/commisionedArt/foto19.jpg"
import foto20 from "../../../public/img/commisionedArt/foto20.jpg"
import foto21 from "../../../public/img/commisionedArt/foto21.jpg"
import foto22 from "../../../public/img/commisionedArt/foto22.jpg"
import foto23 from "../../../public/img/commisionedArt/foto23.jpg"

export default function CommissionedArt() {
  const { isOpen } = useContext(NavbarContext);

  const useScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

  useScrollToTopOnMount()


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
          <div className="foto">
            <img src={foto13} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto14} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto15} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto16} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto17} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto18} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto19} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto20} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto21} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto22} alt="firstpicture"></img>
          </div>
          <div className="foto">
            <img src={foto23} alt="firstpicture"></img>
          </div>
        </div>
      </div>
    </>
    
  )
}
