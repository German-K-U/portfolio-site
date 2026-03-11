import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: 'bi-laptop',
      title: 'Веб-разработка',
      description: 'Создание современных сайтов и веб-приложений с использованием React, Node.js и других передовых технологий',
      price: 'от 50 000 ₽',
      features: ['Адаптивный дизайн', 'SEO-оптимизация', 'Быстрая загрузка']
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Дизайн',
      description: 'Проектирование удобных и красивых интерфейсов, которые понравятся вашим пользователям',
      price: 'от 30 000 ₽',
      features: ['Прототипирование', 'Дизайн-система', 'Адаптивность']
    },
    {
      icon: 'bi-cart',
      title: 'Интернет-магазины',
      description: 'Полноценные торговые площадки с корзиной, оплатой и интеграцией с системами учёта',
      price: 'от 100 000 ₽',
      features: ['Каталог товаров', 'Онлайн-оплата', 'Админ-панель']
    },
    {
      icon: 'bi-phone',
      title: 'Мобильные приложения',
      description: 'Разработка кроссплатформенных приложений для iOS и Android на React Native',
      price: 'от 150 000 ₽',
      features: ['iOS и Android', 'Push-уведомления', 'Интеграция с API']
    },
    {
      icon: 'bi-search',
      title: 'SEO и Продвижение',
      description: 'Оптимизация сайтов для поисковых систем и настройка контекстной рекламы',
      price: 'от 20 000 ₽/мес',
      features: ['Аудит сайта', 'Ключевые слова', 'Аналитика']
    },
    {
      icon: 'bi-gear',
      title: 'Техподдержка',
      description: 'Обслуживание и поддержка ваших проектов, обновление контента и функционала',
      price: 'от 15 000 ₽/мес',
      features: ['Мониторинг 24/7', 'Обновления', 'Консультации']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <Container>
          <h1 className="page-title">Услуги</h1>
          <p className="page-subtitle">Что я могу предложить</p>
        </Container>
      </section>

      <section className="services-grid-section">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="service-card animate-scale">
                  <Card.Body>
                    <div className="service-icon-wrapper">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <Card.Title className="service-title">{service.title}</Card.Title>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="bi bi-check-circle-fill"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="service-footer">
                      <span className="service-price">{service.price}</span>
                      <Button variant="outline-primary" className="service-btn">
                        Заказать <i className="bi bi-arrow-right"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <div className="cta-box">
            <h2>Нужен индивидуальный подход?</h2>
            <p>Обсудим ваш проект и подберём оптимальное решение</p>
            <Button href="/contacts" className="btn-gradient">
              <i className="bi bi-chat-dots"></i> Обсудить проект
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Services;
