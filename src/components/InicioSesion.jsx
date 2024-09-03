import { useState } from "react";

function InicioSesion({ onLoginSuccess }) {
    const [Nombre, setNombre] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const [Ubicacion, setUbicacion] = useState('');

    const agregarUsuario = () => {
        console.log(`${Nombre} ${Contraseña} ${Ubicacion}`);

        onLoginSuccess();
    };

    const updateNombre = (evento) => {
        setNombre(evento.target.value);
    };

    const updateContraseña = (evento) => {
        setContraseña(evento.target.value);
    };

    const updateUbicacion = (evento) => {
        setUbicacion(evento.target.value);
    };

    return (
        <div>
            <form>
                <i className="fa-solid fa-user"></i>
                <label htmlFor="name">Nombre</label>
                <input onChange={updateNombre} type="text" name="Nombre" value={Nombre} />
            </form>
            <form>
                <i className="fa-solid fa-key"></i>
                <label htmlFor="contra">Contraseña</label>
                <input onChange={updateContraseña} type="password" name="Contraseña" value={Contraseña} />
            </form>
            <button onClick={agregarUsuario}>Siguiente</button>
        </div>
    );
}

export default InicioSesion;
