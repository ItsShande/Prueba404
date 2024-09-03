import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="ex=66d865ef&is=66d7146f&hm=f5cbf2e7d210d10b4a006ddfce1876e922e7e83c77c4e36acc22d1829d1904cc&" alt="" width="30" height="24" />
                    <a className="navbar-brand" href="#">ERROR 404</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* Elementos adicionales de navegación aquí */}
                            </li>
                            <li className="nav-item">
                                {/* Elementos adicionales de navegación aquí */}
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* Texto del Dropdown aquí */}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Concientización</a></li>
                                    <li><a className="dropdown-item" href="#">Modo Oscuro</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* Barra de búsqueda u otros elementos de formulario aquí */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
