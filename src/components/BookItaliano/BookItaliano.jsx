import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './_bookMobile.scss'
import './_bookIpad.scss'
import './_bookDesktop.scss'

export const BookItaliano = () => {

    return(
       <section className='contenedorBook'>
            <div className='contenedorAncla'>
                <FontAwesomeIcon className='ancla' icon={ faAnchor }></FontAwesomeIcon>
            </div>
            <div className='contenedorTitulo'>
                <h3>PRENOTA UN APPUNTAMENTO</h3>
            </div>
            <div className='contenedorParrafoPrimero'>
                <div className='contenedorInteriorParrafo'>
                    <p className='parrafoPrimero'>
                    Contattami tramite email all'indirizzo 61904rex@gmail.com per avviare il processo. Fornisci dettagliate idee di riferimento, posizione e dimensioni.
                    </p>
                </div>
            </div>
            <div className='contenedorBtn'>
                <button className='BtnEmailMe'>Scrivimi oggi via email</button>
            </div>
            <div className='contenedorFinalBook'>
                <div className='contenedorSegundaAncla'>
                    <FontAwesomeIcon className='ancla' icon={ faAnchor }></FontAwesomeIcon>
                </div>
                <div className='contenedorTitulo segundoTitulo'>
                    <h3>ARTE PERSONALIZZATA IN VENDITA</h3>
                </div>
                <div className='contenedorParrafoPrimero'>
                    <div className='contenedorInteriorParrafo'>
                        <p className='parrafoPrimero parrafoSegundo'>
                        Per le ultime creazioni disponibili, visita il mio profilo Instagram per progetti aggiornati
                        </p>
                    </div>
                </div>
            </div>
       </section>
    )

}
