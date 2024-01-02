import './App.css'
import { AppRouter } from './routes/AppRouter'
import { Navbar } from './components/Navbar/Navbar'
import { LenguajeProvider } from './context/LenguajeContext/LenguajeContext'
import { NavbarProvider } from './context/NavbarContext/NavbarContext'

function App() {


  return (
    <>
      <LenguajeProvider>
        <NavbarProvider>
          <AppRouter>
            <Navbar/>
          </AppRouter>
        </NavbarProvider>
      </LenguajeProvider>
    </>
  )
}

export default App
