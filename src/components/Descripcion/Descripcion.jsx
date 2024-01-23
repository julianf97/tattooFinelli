import './_descripcionMobile.scss';
import './_descripcionIpad.scss';
import './_descripcionDesktop.scss';
import image from "../../../public/img/juanmi.jpeg";

export const Descripcion = () => {
  return (
    <section className='contenedorDescripcion'>
      <div className='tituloDescripcion'>
        <h2 className='marron'>
          CLEAN, CLASSIC, AND <br/>
          <span className='custom'>CUSTOM</span>
        </h2>
      </div>
      <div className='internoDescripcion'>
        <div className='contenedorImagen'>
          <div className='internoImagen'>
            <img src={image} alt='juanmi'></img>
          </div>
        </div>
        <div className='contenedorParrafo'>
          <div className='internoParrafo'>
            <p>
            Born in San Nicolás de los Arroyos, Buenos Aires, Argentina, Juan Manuel Finelli, known as “Sr. Finelli”, is a tattoo artist with a passion for letters and calligraphy. Since 2015, he has developed a unique approach to the world of tattoos, specializing in lettering, calligraphy, Black & Gray and drag pointillism. His philosophy is based on the creation of 100% personalized tattoos, avoiding the repetition of designs, "we are not photocopiers and each tattoo must be unique". Drawing inspiration from various sources (photographs, paintings, books), each tattoo he creates is a unique work that reflects the individuality of his clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
