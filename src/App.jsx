import './App.css';
import { AppRouter } from './routes/AppRouter';
import { Navbar } from './components/Navbar/Navbar';
import { LenguajeProvider } from './context/LenguajeContext/LenguajeContext';
import { NavbarProvider } from './context/NavbarContext/NavbarContext';
import AppLoading from './components/AppLoading/AppLoading.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Agrega un tiempo de espera después de la carga para asegurar que todo se asiente bien
      setTimeout(() => {
        setLoaded(true);
      }, 5000); // Puedes ajustar el tiempo según sea necesario
    };

    // Verificar si el documento ya ha sido completamente cargado
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Si no, usar el evento 'load'
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loaded ? (
        <LenguajeProvider>
          <NavbarProvider>
            <AppRouter>
              <Navbar />
            </AppRouter>
          </NavbarProvider>
        </LenguajeProvider>
      ) : (
        <AppLoading />
      )}
    </>
  );
}

export default App;
