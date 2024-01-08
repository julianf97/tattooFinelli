import "./_seccionesMobile.scss";
import "./_seccionesIpad.scss";
import "./_seccionesDesktop.scss";
import { Link } from "react-router-dom";



export const Secciones = () => {
  return (
    <div className="contenedorPrincipalSecciones">
      <article className="secciones">
        <section className="seccion seccion1">
          <div className="contenedorSeccion">
            <Link className="link" to={"/blackandgrey"}><h3>BLACK AND GREY</h3></Link>
          </div>
        </section>
        <section className="seccion seccion2">
          <div className="contenedorSeccion">
            <Link className="link" to={"/lettering"}><h3>LETTERING</h3></Link>
          </div>
        </section>
        <section className="seccion seccion3">
          <div className="contenedorSeccion">
            <Link className="link" to={"/commissionedart"}><h3>COMMISSIONNED ART</h3></Link>
          </div>
        </section>
      </article>
    </div>
  );
};
