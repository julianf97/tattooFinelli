import './_descripcionMobile.scss';
import './_descripcionIpad.scss';
import './_descripcionDesktop.scss';
import image from "../../../public/img/juanmi.jpeg";

export const DescripcionItaliano = () => {
  return (
    <section className='contenedorDescripcion'>
      <div className='tituloDescripcion'>
        <h2 className='marron'>
          PULITO, CLASSICO E <br/>
          <span className='custom'>PERSONALIZZATO</span>
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
            Nato a San Nicolás de los Arroyos, Buenos Aires, Argentina, Juan Manuel Finelli, conosciuto come “Sr. Finelli”, è un tatuatore con una passione per le lettere e la calligrafia. Dal 2015, ha sviluppato un approccio unico nel mondo dei tatuaggi, specializzandosi nel lettering, nella calligrafia, nel Black & Grey e nel puntinismo di trascinamento. La sua filosofia si basa sulla creazione di tatuaggi 100% personalizzati, evitando la ripetizione di design, “non siamo fotocopiatrici e ogni tatuaggio deve essere unico”. Ispirandosi a varie fonti (fotografie, dipinti, libri), ogni tatuaggio che crea è un’opera unica che riflette l’individualità dei suoi clienti. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

