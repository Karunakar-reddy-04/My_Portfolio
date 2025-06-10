import React from 'react';
import heartlandLogo from '../assets/logos/heartland.png';
import cognizantLogo from '../assets/logos/cognizant.png';

const experiences = [
  {
    company: 'Heartland Community Network',
    role: 'Full Stack Developer',
    duration: 'Jun 2024 – Jun 2025',
    location: 'Bloomington, IN, USA',
    logo: heartlandLogo,
    bullets: [
      'Built a full-stack app with React, Redux, Node.js, PostgreSQL; cut API latency 40% with Redis caching.',
      'Created secure REST & GraphQL APIs improving frontend flexibility and performance.',
      'Used JWT with RBAC to improve security, cutting unauthorized access by 25%.',
      'Dockerized apps and deployed via AWS ECS & GitHub Actions; CI/CD cut release time by 50%.'
    ]
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Engineer',
    duration: 'Apr 2020 – Jun 2022',
    location: 'Hyderabad, India',
    logo: cognizantLogo,
    bullets: [
      'Built microservices with Spring Boot, Kafka, React; improved latency 40% with Kubernetes.',
      'Created observability dashboards (Prometheus, Grafana, ELK) cutting MTTR by 65%.',
      'Optimized PostgreSQL APIs using Redis and JPA; reduced API time from 5s to 250ms.',
      'Automated CI/CD with Jenkins, SonarQube, and TDD for high deployment speed and code quality.'
    ]
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Associate Software Engineer',
    duration: 'Sep 2019 – Mar 2020',
    location: 'Hyderabad, India',
    logo: cognizantLogo,
    bullets: [
      'Improved frontend UX with React, Redux, and TypeScript; increased engagement by 20%.',
      'Migrated backend to Node.js with JWT and Stripe; improved transaction rate by 15%.',
      'Reduced page load by 30% with Webpack tweaks, lazy loading, and SASS theming.'
    ]
  }
];

function ExperienceSection() {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker" />
              <div className="timeline-content card border border-secondary bg-dark text-light shadow-sm rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    style={{ width: '48px', height: '48px', marginRight: '16px', objectFit: 'contain' }}
                  />
                  <div>
                    <h5 className="mb-0">{exp.role}</h5>
                    <small className="text-secondary">{exp.company}</small>
                  </div>
                </div>
                <p className="mb-1"><strong>Duration:</strong> {exp.duration}</p>
                <p><strong>Location:</strong> {exp.location}</p>
                <ul className="mb-0 ps-3">
                  {exp.bullets.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .timeline {
            position: relative;
            padding-left: 30px;
          }

          .timeline::before {
            content: '';
            position: absolute;
            top: 0;
            left: 15px;
            width: 2px;
            height: 100%;
            background: #6c757d;
          }

          .timeline-item {
            position: relative;
            margin-bottom: 40px;
          }

          .timeline-marker {
            position: absolute;
            top: 12px;
            left: 7px;
            width: 16px;
            height: 16px;
            background-color: #0d6efd;
            border-radius: 50%;
            z-index: 1;
            box-shadow: 0 0 6px #0d6efd;
          }

          .timeline-content {
            margin-left: 30px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .timeline-content:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          }
        `}
      </style>
    </section>
  );
}

export default ExperienceSection;
