import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import './_bookMobile.scss'
import './_bookIpad.scss'
import './_bookDesktop.scss'

export const Book = () => {

    const handleEmailMe = () => {
        const destinatario = 'juanmfinelli@hotmail.com';
        const asunto = 'I want to book an appointment';

        const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}`;

        window.location.href = mailtoLink;
    }

    return(
       <section className='contenedorBook'>
            <div className='contenedorAncla'>
                <FontAwesomeIcon className='ancla' icon={ faPenNib }></FontAwesomeIcon>
            </div>
            <div className='contenedorTitulo'>
                <h3>BOOK AN APPOIMENT</h3>
            </div>
            <div className='contenedorParrafoPrimero'>
                <div className='contenedorInteriorParrafo'>
                    <p className='parrafoPrimero'>
                    Contact me through email at juanmfinelli@hotmail.com to get the process started. Please provide detailed reference ideas, placement and size.
                    </p>
                </div>
            </div>
            <div className='contenedorBtn'>
                <button className='BtnEmailMe' onClick={handleEmailMe}>Email Me Today</button>
            </div>
            <div className='contenedorFinalBook'>
                <div className='contenedorSegundaAncla'>
                    <FontAwesomeIcon className='ancla' icon={ faPenNib }></FontAwesomeIcon>
                </div>
                <div className='contenedorTitulo segundoTitulo'>
                    <h3>CUSTOM ART FOR SALE</h3>
                </div>
                <div className='contenedorParrafoPrimero'>
                    <div className='contenedorInteriorParrafo'>
                        <p className='parrafoPrimero parrafoSegundo'>
                        For latest available designs, please visit my Instagram for up-to-date projects.
                        </p>
                    </div>
                </div>
            </div>
       </section>
    )

}
