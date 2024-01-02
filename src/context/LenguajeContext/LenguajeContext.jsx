import { createContext, useState } from "react"

export const LenguajeContext = createContext();

export const LenguajeProvider = ( { children } ) => {
 
    const [idioma, setIdioma] = useState(false);
    const [inglesElegido, setInglesElegido] = useState(false);

   


    const handleClickModal = () => {
        if( idioma === false ){
            setIdioma(true)
        } else {
            setIdioma(false)
        }

    }

    const handleClickIngles = () => {
        setInglesElegido(true)
        setIdioma(false)
    }

    const handleClickItaliano = () => {
        setInglesElegido(false)
        setIdioma(false)
    }



    return(
        
        <LenguajeContext.Provider value={{
            idioma, 
            setIdioma, 
            handleClickModal,
            inglesElegido,
            setInglesElegido,
            handleClickIngles,
            handleClickItaliano
        }}>
        {children}
        </LenguajeContext.Provider>
    )
}   