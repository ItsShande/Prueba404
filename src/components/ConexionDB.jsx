import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

const APIKey = "b5e1cd8f5f604e27c863e45c9613c9e4";

const ConexionDB = () => {
    const [ciudad, setCiudad] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);
    const [dataClima, setDataClima] = useState(null);
    const [dataAire, setDataAire] = useState(null);

    const obtenerCoordenadas = async () => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${estado},${pais}&limit=1&appid=${APIKey}`);
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setLatitud(lat);
                setLongitud(lon);
                obtenerDatosClima(lat, lon);
                obtenerCalidadAire(lat, lon);
            } else {
                console.error("No se encontraron coordenadas para la ubicación proporcionada.");
            }
        } catch (error) {
            console.error("Error al obtener las coordenadas:", error);
        }
    };

    const obtenerCalidadAire = async (lat, lon) => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`);
            setDataAire(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al obtener los datos de calidad del aire:", error);
        }
    };

    const obtenerDatosClima = async (lat, lon) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`);
            setDataClima(response.data);
            console.log(response.data);
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
                        <Button variant="primary" className="mt-3" onClick={obtenerCoordenadas}>Obtener Clima y Calidad de Aire</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    {dataClima && (
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Datos del Clima</Card.Title>
                                <Card.Text>Temperatura: {dataClima.main.temp} °C</Card.Text>
                                <Card.Text>Humedad: {dataClima.main.humidity} %</Card.Text>
                                <Card.Text>Presión: {dataClima.main.pressure} hPa</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
                <Col>
                    {dataAire && dataAire.list && dataAire.list.length > 0 && (
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Calidad de Aire</Card.Title>
                                <Card.Text>Índice de Calidad de Aire: {dataAire.list[0].main.aqi}</Card.Text>
                                <Card.Text>CO: {dataAire.list[0].components.co} µg/m³</Card.Text>
                                <Card.Text>NO: {dataAire.list[0].components.no} µg/m³</Card.Text>
                                <Card.Text>NO₂: {dataAire.list[0].components.no2} µg/m³</Card.Text>
                                <Card.Text>O₃: {dataAire.list[0].components.o3} µg/m³</Card.Text>
                                <Card.Text>PM2.5: {dataAire.list[0].components.pm2_5} µg/m³</Card.Text>
                                <Card.Text>PM10: {dataAire.list[0].components.pm10} µg/m³</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ConexionDB;
