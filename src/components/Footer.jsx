import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5><i className="bi bi-stars"></i> Portfolio</h5>
            <p>Креативные решения для вашего бизнеса</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Навигация</h5>
            <ul className="footer-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">Обо мне</Link></li>
              <li><Link to="/services">Услуги</Link></li>
              <li><Link to="/portfolio">Портфолио</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Контакты</h5>
            <div className="social-links">
              <a href="#" target="_blank" rel="noreferrer">
                <i className="bi bi-telegram"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <p className="copyright">
              &copy; {currentYear} Все права защищены
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
