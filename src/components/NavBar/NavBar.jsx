import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'

function NavBarComp() {
  const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.clear()
    navigate('/login')  
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Link to="/dashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
      <Link to="/report"><Nav.Link href="#features">Elective Report</Nav.Link></Link>
      <Button color="danger" onClick={handleLogout}>Logout</Button>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBarComp;