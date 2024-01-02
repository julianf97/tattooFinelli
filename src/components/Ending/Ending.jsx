import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './_endingMobile.scss';
import './_endingIpad.scss';
import './_endingDesktop.scss';


export const Ending = () => {

    return(
        <section>
            <div className='contenedorFinal'>
                <div className='contenedorTitulo'>
                    <div className='interiorTitulo'>
                        <h3>VISIT ME ON INSTAGRAM <br/>
                            <span className='marron'>@deft_ink</span>
                        </h3>
                    </div>
                </div>
                <div className='contenedorIcono'>
                    <div className='circuloIcono'>
                        <FontAwesomeIcon className='instagram' icon={ faInstagram }></FontAwesomeIcon>
                    </div>
                    <h6 className='nombreDeft'>deft_ink</h6>
                </div>
                <div className='contenedorFotos'>
                    <div className='contenedorInternoFotos'>
                        <div className='foto foto1'>

                        </div>
                        <div className='foto foto2'>
    
                        </div>
                        <div className='foto foto3'>
    
                        </div>
                        <div className='foto foto4'>
    
                        </div>
                        <div className='foto foto5'>
    
                        </div>
                        <div className='foto foto6'>
    
                        </div>
                        <div className='foto foto7'>
    
                        </div>
                        <div className='foto foto8'>
    
                        </div>
                        <div className='foto foto9'>
    
                        </div>
                    </div>
                </div>
                <div className='ultimoContenedor'>
                    <div className='cuadradoRedondeadoFollow'>
                        <FontAwesomeIcon className='instagram' icon={ faInstagram }></FontAwesomeIcon>
                        Follow on Instagram
                    </div>
                </div>
            </div>
        </section>
    )

}
