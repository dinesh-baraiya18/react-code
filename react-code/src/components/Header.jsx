import "../styles/HeaderStyle.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container>
            <Link to={"/"} className="logo-wrapper">
              <img src={logo} alt="logo" />
            </Link>
            <div className="d-flex align-items-center gap-2">
              <div>cart</div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to={"/about"}>
                  about
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/services"}>
                  services
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/offer"}>
                  offer
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/price"}>
                  price
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/cart"}>
                  <div>cart</div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section style={{ height: "100vh", background: "red" }}>
        <h1>HERO SECTION</h1>
      </section>
    </>
  );
}

export default Header;
