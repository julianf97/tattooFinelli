import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { useState } from 'react';
import logo from "../../../public/img/logo.png"
import './_bookMobile.scss'
import './_bookIpad.scss'
import './_bookDesktop.scss'
import "./_sweetAlert.scss"

export const Book = () => {

    const [showAbsolutoBook, setShowAbsolutoBook] = useState(false);
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleEmailMe = () => {
        const destinatario = 'juanmfinelli@hotmail.com';
        const asunto = 'I want to book an appointment';

        const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}`;

        window.location.href = mailtoLink;
    }

    const handleForm = () => {
        setShowAbsolutoBook(true);
    }

    const exitHandleForm = () => {
        setShowAbsolutoBook(false);
    }
    
    const handleClickBtn = () => {
        window.innerWidth >= 1026 ? handleForm() : handleEmailMe();
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    
        // Obtener los valores de los campos del formulario
        const nuevoEmail = email
        const nuevoMensaje = mensaje
    
        // Mostrar la información en la consola
        console.log('Email:', nuevoEmail);
        console.log('Mensaje:', nuevoMensaje);
    
        // Limpiar los campos del formulario
        setEmail('');
        setMensaje('');
    
        // Mostrar un mensaje de éxito
        showAlert()
    };

    const showAlert = () => {

        let timerInterval
    
        Swal.fire({
          html: `<div class="contenedor-logo-alert"><img src="${logo}"></div>` + 
          `<div class="contenedor-titulo-alert"><h2 class="titulo-alert">Thanks for contacting me </h2></div> ` +
          `<div class="contenedor-titulo-alert"><h3 class="titulo">
          I will contact you as soon as possible</h3></div>` ,
          background: '#101010',
          timerProgressBar: true,
          showCloseButton: true, 
          timer: 2000,
          didOpen: () => {
            timerInterval = setInterval(() => {
            }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        })
    }
    

    return(
       <section className='contenedorBook'>
            <div className={`contenedorAbsolutoBook ${showAbsolutoBook ? 'display-block' : ''}`}>
                <form className='contenedorForm' onSubmit={handleSubmit}>
                    <div className='contenedorCruz' onClick={exitHandleForm}>
                        <div className='cruz'>
                            <FontAwesomeIcon className='iconCruz' icon={ faXmark }></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className='contenedorInputEmail'>
                        <label className='emailLabel'>Email</label>
                        <input type='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='contenedorInputMensaje'>
                        <label className='emailLabel'>Message</label>
                        <input type='text' name='message' required value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                    </div>
                    <div className='contenedorBtnForm'>
                        <button className='enviarForm' type="submit">Send</button>
                    </div>
                </form>
            </div>
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
                <button className='BtnEmailMe' onClick={handleClickBtn}>Email Me Today</button>
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
