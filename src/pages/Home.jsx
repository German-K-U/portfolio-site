import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <Container className="hero-content">
          <div className="hero-text animate-fade-in">
            <h1 className="hero-title">
              Привет, я <span className="highlight">Креатор</span>
            </h1>
            <p className="hero-subtitle">
              Создаю цифровые решения, которые вдохновляют
            </p>
            <p className="hero-description">
              Веб-разработка • Дизайн • Инновации
            </p>
            <div className="hero-buttons">
              <Button 
                as={Link} 
                to="/portfolio" 
                className="btn-gradient me-3"
              >
                <i className="bi bi-images"></i> Мои работы
              </Button>
              <Button 
                as={Link} 
                to="/contacts" 
                variant="outline-light"
                className="btn-outline-glow"
              >
                <i className="bi bi-envelope"></i> Связаться
              </Button>
            </div>
          </div>
          <div className="hero-image animate-float">
            <div className="profile-frame">
              <div className="profile-placeholder">
                <i className="bi bi-person-circle"></i>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="features-section">
        <Container>
          <div className="section-title">
            <h2>Почему выбирают меня</h2>
            <div className="title-divider"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-slide-up">
              <div className="feature-icon">
                <i className="bi bi-palette"></i>
              </div>
              <h3>Креативный дизайн</h3>
              <p>Уникальные визуальные решения для вашего бренда</p>
            </div>
            <div className="feature-card animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>Чистый код</h3>
              <p>Современные технологии и лучшие практики разработки</p>
            </div>
            <div className="feature-card animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">
                <i className="bi bi-phone"></i>
              </div>
              <h3>Mobile First</h3>
              <p>Идеальное отображение на всех устройствах</p>
            </div>
            <div className="feature-card animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">
                <i className="bi bi-lightning"></i>
              </div>
              <h3>Скорость</h3>
              <p>Быстрая загрузка и оптимизация производительности</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
