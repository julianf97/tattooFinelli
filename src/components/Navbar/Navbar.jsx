/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import "./_navbarIpad.scss";
import "./_navbarMobile.scss";
import "./_navbarDesktop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import italia from "../../assets/img/italia.png";
import reinoUnido from "../../assets/img/reinoUnido.png";
import { useContext, useState, useEffect } from "react";
import { LenguajeContext } from "../../context/LenguajeContext/LenguajeContext";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";

export const Navbar = ({ isPresentacionVisible }) => {
  const {
    idioma,
    handleClickModal,
    handleClickIngles,
    handleClickItaliano,
    inglesElegido,
  } = useContext(LenguajeContext);

  const { handleClickOpen } = useContext(NavbarContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: isPresentacionVisible ? 0 : 1 });
  }, [isPresentacionVisible, controls]);

  return (
    <motion.div
      className="contenedorNavbar"
      hidden={!isPresentacionVisible}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="contenedorInternoNavbar">
        <div className="contenedorBarras">
          {screenWidth <= 1025 && (
            <Hamburger
              className="barras"
              rounded
              onToggle={(toggled) => {
                if (toggled) {
                  handleClickOpen();
                } else {
                  handleClickOpen();
                }
              }}
              size={30}
              color="#AF814F"
            />
          )}
          <div className="contenedorLogoDesktop"></div>
        </div>
        <div className="contenedorMedio">
          <div className="contenedorLogoMobile"></div>
          <div className="contenedorNavbarDesktop">
            <div className="contenedorNavbarInteriorDesktop">
              <nav>
                <ul>
                  {inglesElegido ? (
                    <li>BLACK & GRAY</li>
                  ) : (
                    <li>NERO E GRIGIO</li>
                  )}
                  {inglesElegido ? <li>LETTERING</li> : <li>SCRITTURA</li>}
                  {inglesElegido ? (
                    <li>COMMISSIONED ART</li>
                  ) : (
                    <li>COMMISSIONE ART</li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="contenedorIdioma">
          <div
            onClick={handleClickModal}
            className="contenedorInternoElementosIdioma"
          >
            <div className="contenedorImg">
              <div className="contenedorInternoImg">
                {inglesElegido ? (
                  <img
                    className="imagenReinoUnidoElegida"
                    src={reinoUnido}
                    alt="lenguajeImg"
                  ></img>
                ) : (
                  <img src={italia} alt="lenguajeImg"></img>
                )}
              </div>
            </div>
            {inglesElegido ? (
              <span className="btnIdioma">ENG </span>
            ) : (
              <span className="btnIdioma"> ITA </span>
            )}
            {idioma ? (
              <FontAwesomeIcon
                className="anguloRotado"
                icon={faAngleRight}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className="anguloDerecho"
                icon={faAngleRight}
              ></FontAwesomeIcon>
            )}
          </div>
        </div>
      </div>
      <div className="contenedorAbsoluto">
        <div className="contenedorInteriorAbsoluto">
          <div className="contenedorBarras">
            <FontAwesomeIcon className="barras" icon={faBars}></FontAwesomeIcon>
            <div className="contenedorLogoDesktop"></div>
          </div>
          <div className="contenedorMedio">
            <div className="contenedorLogoMobile"></div>
            <div className="contenedorNavbarDesktop">
              <div className="contenedorNavbarInteriorDesktop">
                <nav>
                  <ul>
                    {inglesElegido ? (
                      <li>BLACK & GRAY</li>
                    ) : (
                      <li>NERO E GRIGIO</li>
                    )}
                    {inglesElegido ? <li>LETTERING</li> : <li>SCRITTURA</li>}
                    {inglesElegido ? (
                      <li>COMMISSIONED ART</li>
                    ) : (
                      <li>COMMISSIONE ART</li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="contenedorIdioma">
            {idioma ? (
              <div className="selectorIdioma">
                <div className="contenedorInternoIdiomas">
                  <div onClick={handleClickItaliano} className="contenedorITA">
                    <div className="contenedorNombre">ITA</div>
                    <div className="contenedorBandera">
                      <div className="contenedorInternoBandera">
                        <img src={italia} alt="lenguajeImg"></img>
                      </div>
                    </div>
                  </div>
                  <div onClick={handleClickIngles} className="contenedorENG">
                    <div className="contenedorNombre">ENG</div>
                    <div className="contenedorBandera">
                      <div className="contenedorInternoBandera">
                        <img src={reinoUnido} alt="lenguajeImg"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;