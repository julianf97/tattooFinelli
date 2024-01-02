import React from "react";
import "./_seccionesMobile.scss";
import "./_seccionesIpad.scss";
import "./_seccionesDesktop.scss";

export const Secciones = () => {
  return (
    <div className="contenedorPrincipalSecciones">
      <article className="secciones">
        <section className="seccion seccion1">
          <div className="contenedorSeccion">
              <h3>BLACK AND GREY</h3>
          </div>
        </section>
        <section className="seccion seccion2">
          <div className="contenedorSeccion">
              <h3>LETTERING</h3>
          </div>
        </section>
        <section className="seccion seccion3">
          <div className="contenedorSeccion">
              <h3>COMMISSIONED ART</h3>
          </div>
        </section>
      </article>
    </div>
  );
};
