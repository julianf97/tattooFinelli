import './App.css'
import { AppRouter } from './routes/AppRouter'
import { Navbar } from './components/Navbar/Navbar'
import { LenguajeProvider } from './context/LenguajeContext/LenguajeContext'
import { NavbarProvider } from './context/NavbarContext/NavbarContext'
import AppLoading from './components/AppLoading/AppLoading.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    // Evento 'DOMContentLoaded' en lugar de 'load'
    document.addEventListener('DOMContentLoaded', handleLoad);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
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
