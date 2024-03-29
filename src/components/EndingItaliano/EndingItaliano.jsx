import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import foto1 from "../../../public/img/endingPic/foto1.jpg" 
import foto2 from "../../../public/img/endingPic/foto2.jpg" 
import foto3 from "../../../public/img/endingPic/foto3.jpg" 
import foto4 from "../../../public/img/endingPic/foto4.jpg"  
import foto5 from "../../../public/img/endingPic/foto5.png" 
import foto6 from "../../../public/img/endingPic/foto6.jpg" 
import foto7 from "../../../public/img/endingPic/foto7.jpg" 
import foto8 from "../../../public/img/endingPic/foto8.png" 
import { Link } from 'react-router-dom';
import './_endingMobile.scss';
import './_endingIpad.scss';
import './_endingDesktop.scss';


export const EndingItaliano = () => {

    const instagramUrl = 'https://www.instagram.com/sr.finellitattoos/'

    return(
        <section>
            <div className='contenedorFinal'>
                <div className='contenedorTitulo'>
                    <div className='interiorTitulo'>
                        <h3>VISITAMI SU INSTAGRAM<br/>
                        <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className='link'>
                            <span className='marron'>@sr.finellitattoos</span>
                        </Link>
                        </h3>
                    </div>
                </div>
                <div className='contenedorIcono'>
                    <div className='circuloIcono'>
                        <Link to={instagramUrl} target="_blank" rel="noopener noreferrer"> 
                            <FontAwesomeIcon className='instagram' icon={ faInstagram }></FontAwesomeIcon>
                        </Link>
                    </div>
                    <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className='link'> 
                        <h6 className='nombreDeft'>sr.finellitattoos</h6>
                    </Link>
                </div>
                <div className='contenedorFotos'>
                    <div className='contenedorInternoFotos'>
                    <div className='foto'>
                            <img src={foto1} alt='firstpicture'></img>
                        </div>
                        <div className='foto'>
                            <img src={foto2} alt='firstpicture'></img>
                        </div>
                        <div className='foto'>
                            <img src={foto3} alt='firstpicture'></img>
                        </div>
                        <div className='foto'>
                            <img src={foto4} alt='firstpicture'></img>
                        </div>
                        <div className='foto'>
                            <img src={foto5} alt='firstpicture'></img>
                        </div>
                        <div className='foto'>
                            <img src={foto6} alt='firstpicture'></img>
                        </div>
                        <div className='foto'>
                            <img src={foto7} alt='firstpicture'></img>
                        </div>
                        <div className='foto '>
                            <img src={foto8} alt='firstpicture'></img>
                        </div>
                    </div>
                </div>
                <div className='ultimoContenedor'>
                    <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className='link'>
                        <div className='cuadradoRedondeadoFollow'>
                            <FontAwesomeIcon className='instagram' icon={ faInstagram }></FontAwesomeIcon>
                            Segui su instagram
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )

}
