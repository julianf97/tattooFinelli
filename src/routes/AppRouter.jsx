import { Presentacion } from "../components/Presentacion/Presentacion";
import { Navbar } from "../components/Navbar/Navbar";
import { NavbarOpen } from "../components/Navbar/NavbarOpen";
import { Secciones } from "../components/Secciones/Secciones";
import { SeccionesItaliano } from "../components/SeccionesItaliano/SeccionesItaliano";
import { Descripcion } from "../components/Descripcion/Descripcion";
import { DescripcionItaliano } from "../components/DescripcionItaliano/DescripcionItaliano";
import { Book } from "../components/Book/Book";
import { BookItaliano } from "../components/BookItaliano/BookItaliano";
import { Ending } from "../components/Ending/Ending";
import { EndingItaliano } from "../components/EndingItaliano/EndingItaliano";
import { LenguajeContext } from "../context/LenguajeContext/LenguajeContext";
import { NavbarContext } from "../context/NavbarContext/NavbarContext";
import { useContext, useRef, useEffect, useState } from "react";
import "./_appRouter.scss";

export const AppRouter = () => {
  const refPresentacion = useRef(null);
  const [isPresentacionVisible, setisPresentacionVisible] = useState(false);
  const { inglesElegido } = useContext(LenguajeContext);
  const { isOpen } = useContext(NavbarContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setisPresentacionVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (refPresentacion.current) {
      observer.observe(refPresentacion.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="AppRouter">
      {<Navbar isPresentacionVisible={isPresentacionVisible} />}
      {isOpen ? <NavbarOpen /> : <div></div>}
      <Presentacion ref={refPresentacion} />
      {inglesElegido ? <Secciones /> : <SeccionesItaliano />}
      {inglesElegido ? <Descripcion /> : <DescripcionItaliano />}
      {inglesElegido ? <Book /> : <BookItaliano />}
      {inglesElegido ? <Ending /> : <EndingItaliano />}
    </div>
  );
};
