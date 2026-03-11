import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'HTML5 / CSS3 / SCSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Git / DevOps', level: 70 },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <Container>
          <h1 className="page-title">Обо мне</h1>
          <p className="page-subtitle">Познакомимся ближе</p>
        </Container>
      </section>

      <section className="about-content">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="about-image-wrapper">
                <div className="about-image-frame">
                  <div className="about-placeholder">
                    <i className="bi bi-person-fill"></i>
                  </div>
                </div>
                <div className="experience-badge">
                  <span className="years">5+</span>
                  <span className="label">лет опыта</span>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="about-text">
                <h2 className="section-heading">
                  Привет! Я <span className="highlight">веб-разработчик</span>
                </h2>
                <p>
                  Создаю современные веб-приложения и сайты более 5 лет. 
                  Моя стража — превращать сложные задачи в простые и элегантные решения.
                </p>
                <p>
                  Специализируюсь на разработке фронтенда с использованием React, 
                  но также имею опыт работы с бэкендом и базами данных.
                </p>
                <p>
                  Всегда стремлюсь к изучению новых технологий и улучшению своих навыков.
                  Открыт для интересных проектов и сотрудничества!
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <i className="bi bi-check-circle"></i>
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Проектов</span>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-heart"></i>
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Довольных клиентов</span>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-clock"></i>
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Лет опыта</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="skills-section">
        <Container>
          <div className="section-title">
            <h2>Мои навыки</h2>
            <div className="title-divider"></div>
          </div>
          <Row>
            <Col md={6}>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      className="skill-progress"
                      animated
                    />
                  </div>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <div className="services-preview">
                <h3>Что я предлагаю</h3>
                <ul className="services-list">
                  <li>
                    <i className="bi bi-arrow-right"></i>
                    Разработка одностраничных приложений
                  </li>
                  <li>
                    <i className="bi bi-arrow-right"></i>
                    Корпоративные сайты
                  </li>
                  <li>
                    <i className="bi bi-arrow-right"></i>
                    Интернет-магазины
                  </li>
                  <li>
                    <i className="bi bi-arrow-right"></i>
                    Адаптивная вёрстка
                  </li>
                  <li>
                    <i className="bi bi-arrow-right"></i>
                    UI/UX дизайн
                  </li>
                  <li>
                    <i className="bi bi-arrow-right"></i>
                    Техническая поддержка
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
