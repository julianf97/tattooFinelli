import React from 'react'
import { useContext } from 'react'
import { LenguajeContext } from "../../context/LenguajeContext/LenguajeContext"
import './_navbarOpen.scss'


export const NavbarOpen = () => {

    const { inglesElegido } = useContext(LenguajeContext)

    return(
       <div className='contenedorPrincipalOpen'>
            <div className='contenedorInternoOpen'>
                <div className='contenedorNav'>
                    <ul className='secciones'>
                        {
                            inglesElegido ? <li>BLACK AND GREY</li>
                                        : <li>NERO E GRIGIO</li>
                        }
                        {
                            inglesElegido ? <li>LETTERING</li>
                                        : <li>SCRITTURA</li>
                        }
                        {
                                            
                            inglesElegido ? <li>COMMISSIONED ART</li>
                                        : <li>COMMISSIONE ART</li>
                        }
                    </ul>
                </div>
            </div>
       </div>
    )

}


