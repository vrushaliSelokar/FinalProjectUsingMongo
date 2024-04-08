import react from "react";
//import styles from "./header.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(){
    return(
     <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        {/* <ul>
            <li> 
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li style={{float:"right"}}>
                <a className="active" href="#about">About</a>
            </li>
        </ul> */}

     </>
    );
}

export default Header;