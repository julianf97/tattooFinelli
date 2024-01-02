import React from 'react'
import './_descripcionMobile.scss'
import './_descripcionIpad.scss'
import './_descripcionDesktop.scss'

export const Descripcion = () => {

    return(
       <section className='contenedorDescripcion'>
            <div className='tituloDescripcion'> 
                <h2 className='marron'>CLEAN, CLASSIC, AND <br/>
                <span className='custom'>CUSTOM</span></h2>
            </div>
            <div className='contenedorParrafo'>
                <div className='internoParrafo'>
                    <p>Inspired by the Renaissance and Baroque eras, I am reinventing what a tattoo experience entails. While many flock to the city of San Diego for the weather, dining, and beaches, contact me for a Southern California experience in tattooing. I cater to not only tattoo enthusiasts, but also likeminded individuals who enjoy a quality custom artpiece. I specialize in fine-line scriptwork, and large-scale, black-and-gray tattoos. Contact me through email and lets begin the consultation process.</p>
                </div>
            </div>
       </section>
    )

}

