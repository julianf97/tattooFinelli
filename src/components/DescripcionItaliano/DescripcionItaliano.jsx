import React from 'react'
import './_descripcionMobile.scss'
import './_descripcionIpad.scss'
import './_descripcionDesktop.scss'

export const DescripcionItaliano = () => {

    return(
       <section className='contenedorDescripcion'>
            <div className='tituloDescripcion'> 
                <h2 className='marron'>PULITO, CLASSICO E <br/>
                <span className='custom'>PERSONALIZZATO</span></h2>
            </div>
            <div className='contenedorParrafo'>
                <div className='internoParrafo'>
                    <p>Ispirato all'epoca del Rinascimento e del Barocco, sto reinventando ciò che comporta un'esperienza di tatuaggio. Mentre molti affollano la città di San Diego per il clima, la gastronomia e le spiagge, contattami per un'esperienza di tatuaggio in Southern California. Mi rivolgo non solo agli appassionati di tatuaggi, ma anche a persone affini che apprezzano un'opera d'arte personalizzata di qualità. Sono specializzato nel tratto sottile di scrittura e nei tatuaggi di grande scala in bianco e nero. Contattami tramite email e iniziamo il processo di consulenza</p>
                </div>
            </div>
       </section>
    )

}

