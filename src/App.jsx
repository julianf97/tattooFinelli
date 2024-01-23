import './App.css';
import { AppRouter } from './routes/AppRouter';
import { Navbar } from './components/Navbar/Navbar';
import { LenguajeProvider } from './context/LenguajeContext/LenguajeContext';
import { NavbarProvider } from './context/NavbarContext/NavbarContext';
import AppLoading from './components/AppLoading/AppLoading.jsx';
import { useEffect, useState } from 'react';
import BlackAndGrey from './pages/BlackAndGrey/BlackAndGrey.jsx';
import CommissionedArt from './pages/CommissionedArt/CommissionedArt.jsx';
import Lettering from './pages/Lettering/Lettering.jsx';
import { HashRouter as BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoaded(true);
      }, 200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
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
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<AppRouter><Navbar/></AppRouter>}></Route>
                  <Route path='/blackandgrey' element={<BlackAndGrey><Navbar/></BlackAndGrey>}></Route>
                  <Route path='/commissionedart' element={<CommissionedArt/>}></Route>
                  <Route path='/lettering' element={<Lettering/>}></Route>
                  <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
              </BrowserRouter>
            </NavbarProvider>
          </LenguajeProvider>
      ) : (
        <AppLoading />
      )}
    </>
  );
}

export default App;
