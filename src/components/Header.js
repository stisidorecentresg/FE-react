import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  const willingHeartUrl = "http://willingheartsorphanage.org/"
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ borderRadius: "5px", marginTop: "1px", marginBottom: "1px"}}>
      <Navbar.Brand href="#home">St. Isidore Centre</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" className="text-white">
        <Nav className="mr-auto"></Nav>
        <span>Part of</span>
        <Nav>
          <Nav.Link href={ willingHeartUrl } target="_blank">Willing Hearts Orphanage </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
