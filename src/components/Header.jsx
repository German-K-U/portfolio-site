import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar expand="md" variant="dark" fixed="top" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <i className="bi bi-stars"></i> Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              <i className="bi bi-house"></i> Главная
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
            >
              <i className="bi bi-person"></i> Обо мне
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
            >
              <i className="bi bi-briefcase"></i> Услуги
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio" 
              className={isActive('/portfolio') ? 'active' : ''}
            >
              <i className="bi bi-images"></i> Портфолио
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contacts" 
              className={isActive('/contacts') ? 'active' : ''}
            >
              <i className="bi bi-envelope"></i> Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
