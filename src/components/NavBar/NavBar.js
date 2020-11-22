import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import brand from '../../athena-design-resources/Illustration/brandLogo.png'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="navbar-bg">
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="w-50"  src={brand} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="pr-3" href="#home">Home</Nav.Link>
                            <Nav.Link className="pr-3" href="#link">About</Nav.Link>
                            <Nav.Link className="pr-3" href="#link">Services</Nav.Link>
                            <Nav.Link className="pr-3" href="#link">Pricing</Nav.Link>
                            <Nav.Link className="pr-3" href="#link">Our Team</Nav.Link>
                            <Nav.Link className="curve-button " href="#link">Contact Us</Nav.Link>

                        </Nav>
                        {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;