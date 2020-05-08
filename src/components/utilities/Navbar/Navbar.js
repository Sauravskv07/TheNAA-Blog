import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from "react-router";

const myNavbar = (props) => {
    const { location } = props;
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">School Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" activeKey={location.pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    {/* <NavDropdown title="Articles" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">News</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Stories</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Poems</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(myNavbar)