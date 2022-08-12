import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='text-decoration-none text-dark fs-6 fw-bold p-3'>Home</Link>
            <Link to="/add-question" className='text-decoration-none text-dark fs-6 fw-bold p-3'>Add Question</Link>
            <Link to="/exam-home" className='text-decoration-none text-dark fs-6 fw-bold p-3'>Exam</Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default Navigation
