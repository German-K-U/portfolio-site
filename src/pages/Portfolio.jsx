import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useState } from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Все', icon: 'bi-grid' },
    { id: 'web', label: 'Веб-сайты', icon: 'bi-laptop' },
    { id: 'app', label: 'Приложения', icon: 'bi-phone' },
    { id: 'design', label: 'Дизайн', icon: 'bi-palette' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Корпоративный портал',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Project+1',
      description: 'Современный корпоративный сайт для финансовой компании',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Мобильное приложение доставки',
      category: 'app',
      image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Project+2',
      description: 'Приложение для заказа еды с интеграцией платёжных систем',
      tags: ['React Native', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 3,
      title: 'Интернет-магазин одежды',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/f093fb/ffffff?text=Project+3',
      description: 'Полноценный e-commerce проект с админ-панелью',
      tags: ['Next.js', 'PostgreSQL', 'Redux'],
      link: '#'
    },
    {
      id: 4,
      title: 'Брендбук компании',
      category: 'design',
      image: 'https://via.placeholder.com/600x400/4facfe/ffffff?text=Project+4',
      description: 'Разработка фирменного стиля и гайдлайнов',
      tags: ['Figma', 'Illustrator', 'Branding'],
      link: '#'
    },
    {
      id: 5,
      title: 'CRM система',
      category: 'app',
      image: 'https://via.placeholder.com/600x400/43e97b/ffffff?text=Project+5',
      description: 'Система управления клиентами для малого бизнеса',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Лендинг для стартапа',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/fa709a/ffffff?text=Project+6',
      description: 'Промо-страница с высокой конверсией',
      tags: ['HTML5', 'SCSS', 'GSAP'],
      link: '#'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <Container>
          <h1 className="page-title">Портфолио</h1>
          <p className="page-subtitle">Мои лучшие работы</p>
        </Container>
      </section>

      <section className="portfolio-filters">
        <Container>
          <div className="filter-buttons">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? 'active' : 'outline'}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                <i className={`bi ${cat.icon}`}></i> {cat.label}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      <section className="portfolio-grid-section">
        <Container>
          <Row>
            {filteredProjects.map((project) => (
              <Col md={6} lg={4} key={project.id} className="mb-4">
                <Card className="portfolio-card animate-scale">
                  <div className="portfolio-image-wrapper">
                    <img 
                      src={project.image} 
                      className="card-img-top" 
                      alt={project.title}
                    />
                    <div className="portfolio-overlay">
                      <Button href={project.link} className="view-project-btn">
                        <i className="bi bi-eye"></i> Смотреть
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="portfolio-title">{project.title}</Card.Title>
                    <Card.Text className="portfolio-description">
                      {project.description}
                    </Card.Text>
                    <div className="portfolio-tags">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="portfolio-tag">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Portfolio;
