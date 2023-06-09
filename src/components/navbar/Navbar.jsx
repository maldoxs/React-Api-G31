import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ onChangeNavbar, valores }) => {
    const handlerSearch = (e) => {
        const search = e.target.value;
        let resultado = !search
            ? valores
            : valores.filter(
                  (dato) =>
                      dato.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                      dato.species.toLowerCase().includes(search.toLocaleLowerCase())
              );
        onChangeNavbar(resultado);
    };

    return (
        <div>
            <Navbar>
                <Container className="bg-dark p-3">
                    <Navbar.Brand className="text-white fw-100" href="#home">
                        <i class="bi bi-search"></i> Buscar Personaje
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    onChange={(e) => handlerSearch(e)}
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button variant="success">Search</Button> */}
                            </Form>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
