import './App.css'
import { AppRouter } from './routes/AppRouter'
import { Navbar } from './components/Navbar/Navbar'
import { LenguajeProvider } from './context/LenguajeContext/LenguajeContext'
import { NavbarProvider } from './context/NavbarContext/NavbarContext'
import AppLoading from './components/AppLoading/AppLoading.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    // Agrega el evento load al objeto window
    window.addEventListener('load', handleLoad);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez al montar el componente


  return (
    <>
      {loaded ? (
        <LenguajeProvider>
        <NavbarProvider>
        <AppRouter>
          <Navbar/>
        </AppRouter>
        </NavbarProvider>
        </LenguajeProvider>
      ) : (
        <AppLoading/>
      )}
    </>
  )
}

export default App
