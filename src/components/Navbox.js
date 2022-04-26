import { Navbar , Container, NavDropdown, Link, Nav, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbox = ({ onAdd, onShow }) => {
  return (
    <Navbar  bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#">STUDENTS PAGE</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href='#'>Home</Nav.Link>
          <Nav.Link href="#" onClick={onShow}>Students</Nav.Link>
          <NavDropdown title="Students info" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={onAdd} >Add Student</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Edit student</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search student"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success"  >Search</Button>
        </Form>
      </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default Navbox