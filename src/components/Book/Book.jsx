import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './_bookMobile.scss'
import './_bookIpad.scss'
import './_bookDesktop.scss'

export const Book = () => {

    return(
       <section className='contenedorBook'>
            <div className='contenedorAncla'>
                <FontAwesomeIcon className='ancla' icon={ faAnchor }></FontAwesomeIcon>
            </div>
            <div className='contenedorTitulo'>
                <h3>BOOK AN APPOIMENT</h3>
            </div>
            <div className='contenedorParrafoPrimero'>
                <div className='contenedorInteriorParrafo'>
                    <p className='parrafoPrimero'>
                    Contact me through email at 61904rex@gmail.com to get the process started. Please provide detailed reference ideas, placement and size.
                    </p>
                </div>
            </div>
            <div className='contenedorBtn'>
                <button className='BtnEmailMe'>Email Me Today</button>
            </div>
            <div className='contenedorFinalBook'>
                <div className='contenedorSegundaAncla'>
                    <FontAwesomeIcon className='ancla' icon={ faAnchor }></FontAwesomeIcon>
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
