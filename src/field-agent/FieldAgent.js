import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, FormControl, Button, Form, Breadcrumb } from 'react-bootstrap';

export default function FieldAgent(props) {

    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            
        </Navbar>
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
        </div>
        
    )

}