import { useState } from 'react'
import './App.css'
import ConexionDB from './components/ConexionDB'
import Navbar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <Navbar />
      <div className="container mt-4">
        <ConexionDB />
      </div>
    </div>
  )
}

export default App
