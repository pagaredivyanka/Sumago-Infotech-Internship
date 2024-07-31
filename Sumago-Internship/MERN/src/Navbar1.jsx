import React from 'react';
// import logo from './logo.svg';
// import Cssstyle from './Cssstyle'
import { Link } from 'react-router-dom';
import'./abc.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">
              <p style={{padding:"30px" ,height:"80px"}}>
                <Link to='/'>Home</Link>
              </p>
            </Nav.Link>

            <Nav.Link href="#About">
              <p style={{padding:"30px" ,height:"80px"}}> 
                <Link to='/About'>About</Link>
              </p>
            </Nav.Link>

            <Nav.Link href="#Contact">
              <p style={{padding:"30px" ,height:"80px"}}>
                <Link to='/Contact'>Contact</Link>
              </p>
            </Nav.Link>

            <Nav.Link href="#Team">
              <p style={{padding:"30px" ,height:"80px"}}>
                <Link to='/Team'>Team</Link>
              </p>
            </Nav.Link>
            <button style={{height:"70px", width:"100px"}}>Sign in</button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
// const Navbar = () => {
//     return (
//       <div style={{display:"flex", justifyContent:"space-evenly", height:"100px", backgroundColor:"pink"}}>
//         <img src={logo} alt="react-logo" style={{height:"90px", width:"90px"}}/>
        
        
//       </div>
      
//     );
// }
