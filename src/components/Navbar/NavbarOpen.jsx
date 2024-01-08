// NavbarOpen.js
import { useContext } from 'react';
import { LenguajeContext } from "../../context/LenguajeContext/LenguajeContext";
import './_navbarOpen.scss';
import { NavbarContext } from '../../context/NavbarContext/NavbarContext';

export const NavbarOpen = () => {
  const { inglesElegido } = useContext(LenguajeContext);
  const { handleExitNavbar, isMenuOpen } = useContext(NavbarContext);

  if (!isMenuOpen) {
    return null; // No renderizar si el menú no está abierto
  }

  return (
    <div className='contenedorPrincipalOpen'>
      <div className='contenedorInternoOpen'>
        <div className='contenedorNav'>
          <ul className='secciones'>
            {
              inglesElegido ? <li>BLACK AND GREY</li> : <li>NERO E GRIGIO</li>
            }
            {
              inglesElegido ? <li>LETTERING</li> : <li>SCRITTURA</li>
            }
            {
              inglesElegido ? <li>COMMISSIONED ART</li> : <li>COMMISSIONE ART</li>
            }
          </ul>
        </div>
      </div>
      <div className='contenedorRestante' onClick={handleExitNavbar}></div>
    </div>
  );
};
