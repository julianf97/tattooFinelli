// NavbarOpen.js
import { useContext } from 'react';
import { LenguajeContext } from "../../context/LenguajeContext/LenguajeContext";
import './_navbarOpen.scss';
import { NavbarContext } from '../../context/NavbarContext/NavbarContext';
import { Link } from "react-router-dom";
export const NavbarOpen = () => {
  const { inglesElegido } = useContext(LenguajeContext);
  const { handleExitNavbar, isMenuOpen } = useContext(NavbarContext);

  if (!isMenuOpen) {
    return null; 
  }

  return (
    <div className='contenedorPrincipalOpen'>
      <div className='contenedorInternoOpen'>
        <div className='contenedorNav'>
          <ul className='secciones'>
            {
              inglesElegido ? <Link className="linkNavbar" to={"/blackandgrey"}>BLACK & GRAY </Link> : <li><Link className="linkNavbar" to={"/blackandgrey"}>NERO E GRIGIO </Link></li>
            }
            {
              inglesElegido ? <Link className="linkNavbar" to={"/lettering"}>LETTERING </Link> : <Link className="linkNavbar" to={"/lettering"}>SCRITTURA </Link>
            }
            {
              inglesElegido ? <Link className="linkNavbar" to={"/commissionedart"}>COMMISSIONED ART </Link>: <Link className="linkNavbar" to={"/commissionedart"}>COMMISSIONE ART </Link>
            }
          </ul>
        </div>
      </div>
      <div className='contenedorRestante' onClick={handleExitNavbar}></div>
    </div>
  );
};
