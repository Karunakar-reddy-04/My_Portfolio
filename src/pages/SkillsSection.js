import React from 'react';
import {
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs,
  FaJava, FaNodeJs, FaPython, FaDocker,
  FaAws, FaLinux, FaGitAlt, FaGithub, FaBootstrap
} from 'react-icons/fa';
import {
  SiTailwindcss, SiSpringboot, SiExpress,
  SiPostgresql, SiMongodb, SiRedis, SiMysql,
  SiPrometheus, SiGrafana, SiSonarqube, SiGitlab,
  SiPostman, SiJenkins
} from 'react-icons/si';

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Angular", icon: <FaAngular color="#DD0031" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
      { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Linux", icon: <FaLinux color="#FCC624" /> },
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
      { name: "GitLab", icon: <SiGitlab color="#FC6D26" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Jenkins", icon: <SiJenkins color="#D24939" /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Prometheus", icon: <SiPrometheus color="#E6522C" /> },
      { name: "Grafana", icon: <SiGrafana color="#F46800" /> },
      { name: "SonarQube", icon: <SiSonarqube color="#4E9BCD" /> },
    ]
  }
];

function SkillsSection() {
  return (
    <section className="py-5 mt-5 bg-dark text-light">
      <div className="container">
        <div className="row g-4">
          {skillsData.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="skill-card h-100 p-3 rounded-4 shadow-sm border border-secondary">
                <h5 className="text-center mb-3">{category.title}</h5>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="skill-icon-wrapper"
                      title={skill.name}
                    >
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .skill-card {
            background-color: #1e1e1e;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          }

          .skill-icon-wrapper {
            cursor: pointer;
            transition: transform 0.3s ease;
            font-size: 2.2rem;
          }

          .skill-icon-wrapper:hover {
            transform: scale(1.2);
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
          }
        `}
      </style>
    </section>
  );
}

export default SkillsSection;
