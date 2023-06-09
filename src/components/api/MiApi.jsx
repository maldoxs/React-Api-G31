import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import NavBar from "../navbar/Navbar";

const MiApi = () => {
    // 3. info guardará los valores traídos desde la API
    const [usuarios, setUsuarios] = useState([]);
    const [search, setSearch] = useState("");

    // 2. LLamamos al función que consume la API al momento de montar el componente;
    useEffect(() => {
        consultarInformacion();
    }, []);
    // 1. Función que consulta la API
    const consultarInformacion = async () => {
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(url);
        const data = await response.json();
        const resultado = data.results;
        setUsuarios([...resultado]);
    };

    const handlerSearchNavbar = (listaFilter) => {
        setSearch(listaFilter);
    };

    //Filtro de busqueda.
    let resultado = !search ? usuarios : search;

    return (
        <div className="container mb-5">
            <NavBar onChangeNavbar={(e) => handlerSearchNavbar(e)} valores={usuarios}></NavBar>
            <h1>
                Cosumiendo datos de Api <small className="fs-5">The Rick and Morty</small>
            </h1>
            <div className="grid__columna">
                {resultado.map((usuario, i) => {
                    return (
                        <Card style={{ width: "18rem" }} key={i}>
                            <Card.Img variant="top" src={usuario.image} />
                            <Card.Body>
                                <Card.Title>{usuario.name}</Card.Title>
                                <Card.Text>Tipo de Especie: {usuario.species}</Card.Text>
                                <Button variant="primary">Detalles...</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default MiApi;
