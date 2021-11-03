import React from 'react'
import './Nav.css'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl,  Button } from 'react-bootstrap'
import imgperfil from '../../../assets/imgs/profileimg.jpg'

function Header(props) {

    return(
        <>
        <div>

        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

      </Nav>
      <Form className="d-flex">
        <FormControl style={{backgroundColor: "#FFFFFF"}}
          type="search"
          placeholder="Search Here"
          className="me-2"
          aria-label="Search"
        />
        <img style={{borderRadius: "50px", width:""}} src={imgperfil}></img>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>






        </div>
        </>
    )
}

export default Header