import React from 'react';
import { Navbar,NavDropdown,Nav,Container,Form,Button } from 'react-bootstrap';


const NavigationHeader = () => {
    return (
        <Navbar bg="primary"  expand="sm" variant='dark' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/' className='custom-brand-size'>OneWordADay</Navbar.Brand>
                <Navbar.Toggle aria-controls='collpase-nav-id'/>
                <Navbar.Collapse id="collapse-nav-id">
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className='d-flex py-2'>
                    <Form.Control placeholder='Search a Word' aria-label='Search' type='Search' className='me-2 px-2'/>
                    <Button variant='outline-dark'>Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default NavigationHeader;