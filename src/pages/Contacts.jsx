import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { ContactsScene } from '../components/3d';
import '../styles/Contacts.css';

function Contacts() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
  };

  return (
    <div className="contacts-page">
      <section className="contacts-hero">
        <Container>
          <div className="contacts-3d-background">
            <ContactsScene />
          </div>
          <h1 className="page-title">Контакты</h1>
          <p className="page-subtitle">Свяжитесь со мной</p>
        </Container>
      </section>

      <section className="contacts-content">
        <Container>
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="contact-info">
                <h2 className="section-heading">Давайте обсудим ваш проект</h2>
                <p className="contact-intro">
                  Я всегда открыт для новых возможностей и интересных проектов. 
                  Напишите мне, и я отвечу в течение 24 часов.
                </p>

                <div className="contact-cards">
                  <Card className="contact-card">
                    <Card.Body>
                      <div className="contact-icon">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Локация</h5>
                        <p>Москва, Россия</p>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="contact-card">
                    <Card.Body>
                      <div className="contact-icon">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Email</h5>
                        <p>hello@portfolio.com</p>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="contact-card">
                    <Card.Body>
                      <div className="contact-icon">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="contact-details">
                        <h5>Телефон</h5>
                        <p>+7 (999) 000-00-00</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div className="social-section">
                  <h5>Социальные сети</h5>
                  <div className="social-links-large">
                    <a href="#" className="social-link">
                      <i className="bi bi-telegram"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <Card className="contact-form-card">
                <Card.Body>
                  <Card.Title className="form-title">
                    <i className="bi bi-chat-left-text"></i> Написать сообщение
                  </Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Ваше имя</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Иван Иванов"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            placeholder="email@example.com"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Тема</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Тема сообщения"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Сообщение</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5}
                        placeholder="Расскажите о вашем проекте..."
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="btn-gradient w-100">
                      <i className="bi bi-send"></i> Отправить сообщение
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0!2d37.6!3d55.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzAwLjAiTiAzN8KwMzYnMDAuMCJF!5e0!3m2!1sru!2sru!4v1234567890"
            width="100%"
            height="400"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          />
        </div>
      </section>
    </div>
  );
}

export default Contacts;
