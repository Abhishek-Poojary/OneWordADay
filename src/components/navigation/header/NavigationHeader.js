import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Form, Button } from 'react-bootstrap';
const NavigationHeader = () => {
    return (
        <Navbar expand="sm" variant='dark' collapseOnSelect className='pt-4'>
            <Container>
                <Navbar.Brand href='/' className='custom-brand-size'>OneWordADay</Navbar.Brand>
                <Navbar.Toggle aria-controls='collpase-nav-id' />
                <Navbar.Collapse id="collapse-nav-id" className="justify-content-end flex-grow-1 pe-3">
                    <Nav >
                        <Nav.Link className="custom-nav-text" href='/'>About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationHeader;