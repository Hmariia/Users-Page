import { Navbar , Container, NavDropdown, Link, Nav, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'

const Navbox = () => {
  const history = useHistory()
  const addUser = () => {
    history.push("/add-user")
    window.location.reload()
  }
  const showUser = () => {
    history.push("/users")
    window.location.reload()
  }
  return (
    <Navbar  bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#">Users page</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="#" onClick={showUser}>Users</Nav.Link>
          <NavDropdown title="Users info" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={addUser} >Add User</NavDropdown.Item>
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
            placeholder="Search user"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default Navbox