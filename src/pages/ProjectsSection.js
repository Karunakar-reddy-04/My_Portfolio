import React from 'react';
import cryptoImg from '../assets/projects/ai_crypto.png';
import vscodeImg from '../assets/projects/llm_vscode.png';
import chatImg from '../assets/projects/team_chat.png';
import blogImg from '../assets/projects/blog_nest.png';

const projects = [
  {
    title: 'AI-Enhanced Crypto Portfolio Tracker',
    img: cryptoImg,
    github: 'https://github.com/Karunakar-reddy-04/Real_Time_Messaging_Platform',
    desc: 'Real-time crypto tracker with GPT-based AI insights using React, Node.js, and CoinGecko API.'
  },
  {
    title: 'Cross-LLM VS Code Extension',
    img: vscodeImg,
    github: 'https://github.com/Karunakar-reddy-04/Real_Time_Messaging_Platform',
    desc: 'VS Code plugin integrating GPT-4, Bard, AI21 with TypeScript for real-time code validation.'
  },
  {
    title: 'Real-Time Team Chat App',
    img: chatImg,
    github: 'https://github.com/Karunakar-reddy-04/Real_Time_Messaging_Platform',
    desc: 'Spring Boot + React app with JWT auth, WebSocket messaging, PostgreSQL-backed storage.'
  },
  {
    title: 'Blog-Nest Full Stack App',
    img: blogImg,
    github: 'https://github.com/Karunakar-reddy-04/Real_Time_Messaging_Platform',
    desc: 'Node.js + React blog app with JWT, PostgreSQL, Elasticsearch, and full CRUD capabilities.'
  }
];

function ProjectsSection() {
  return (
    <section className="py-5 mt-5 bg-dark text-light">
      <div className="container">

        <div className="row g-4">
          {projects.map((proj, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="project-card p-3 rounded-4 border border-secondary bg-dark shadow-sm h-100 d-flex flex-column">
                <div className="overflow-hidden rounded-3 mb-3 project-img-wrapper">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="img-fluid project-img"
                    style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h6 className="mb-2">{proj.title}</h6>
                <p className="text-secondary small flex-grow-1">{proj.desc}</p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary mt-2"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background: #1b1b1b;
          }

          .project-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            border-color: #0d6efd;
          }

          .project-img-wrapper {
            transition: transform 0.3s ease;
          }

          .project-card:hover .project-img {
            transform: scale(1.05);
            transition: transform 0.5s ease;
          }

          @media (max-width: 767px) {
            .project-img {
              height: 150px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default ProjectsSection;
