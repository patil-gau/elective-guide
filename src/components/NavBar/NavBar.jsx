import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBarComp() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Link to="/dashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
      <Link to="/report"><Nav.Link href="#features">Elective Report</Nav.Link></Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBarComp;