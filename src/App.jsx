import { useState } from 'react';
import './App.css';
import ConexionDB from './components/ConexionDB';
import Navbar from './components/navBar';
import InicioSesion from './components/InicioSesion';
import WeatherCard from './components/WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Estado para controlar si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXhW+ALEwIH"
        crossOrigin="anonymous"
      ></link>

      {/* Mostrar el componente InicioSesion si el usuario no ha iniciado sesión */}
      {!isLoggedIn ? (
        <InicioSesion onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          {/* Mostrar los otros componentes solo si el usuario ha iniciado sesión */}
          <Navbar />
          <div className="container mt-4">
            <ConexionDB />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
