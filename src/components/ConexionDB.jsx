import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import WeatherCard from './WeatherCard'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const APIKey = "b5e1cd8f5f604e27c863e45c9613c9e4";

const ConexionDB = () => {
    const [ciudad, setCiudad] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);
    const [dataClima, setDataClima] = useState(null);

    const obtenerCoordenadas = async () => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${estado},${pais}&limit=1&appid=${APIKey}`);
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setLatitud(lat);
                setLongitud(lon);
                obtenerDatosClima(lat, lon);
            } else {
                console.error("No se encontraron coordenadas para la ubicación proporcionada.");
            }
        } catch (error) {
            console.error("Error al obtener las coordenadas:", error);
        }
    };

    const obtenerDatosClima = async (lat, lon) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`);
            setDataClima(response.data.list); // Guardar datos horarios
            console.log(response.data.list);
        } catch (error) {
            console.error("Error al obtener los datos del clima:", error);
        }
    };

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <Form>
                        <Form.Group controlId="formCiudad">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el país" value={pais} onChange={(e) => setPais(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" className="mt-3" onClick={obtenerCoordenadas}>Obtener Pronóstico</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                {dataClima && dataClima.slice(0, 5).map((forecast, index) => ( // Mostrar 5 tarjetas como ejemplo
                    <Col key={index} md={4}>
                        <WeatherCard
                            hora={new Date(forecast.dt * 1000).toLocaleTimeString()}
                            estadoClima={forecast.weather[0].description}
                            temperatura={forecast.main.temp}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ConexionDB;
