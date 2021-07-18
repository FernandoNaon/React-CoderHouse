import { Nav, Navbar, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartWidget } from '../CartWidget'
import { NavLink, Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Strymon Pedals</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact={true} activeClassName="active" to="/category/reverb">Reverb</Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/delay">Delay</Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/Modulation">Modulation</Nav.Link>
          <Nav.Link as={NavLink} activeClassName="active" to="/category/drive">Drive and Preamp</Nav.Link>


        </Nav>
        <Form inline>
          <Button variant="outline-info"><CartWidget /></Button>
        </Form>
      </Navbar>
    </div>
  )
}