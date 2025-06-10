import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';
import { FaDownload } from 'react-icons/fa';


function HeroSection() {
  return (
    <section id="home" className="container py-5 mt-5">
      <div className="row align-items-center">
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={profileImage}
            alt="Karunakar Reddy Kalla"
            className="rounded-circle shadow"
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              border: '6px solid white'
            }}
          />
        </div>

        {/* Info */}
        <div className="col-md-8 text-center text-md-start">
          <p className="text-muted fs-6">Welcome to my portfolio</p>
          <h1 className="fw-bold">Karunakar Reddy Kalla</h1>

          <h4 className="text-primary">
            Full Stack&nbsp;
            <TypeAnimation
              sequence={[
                'Developer', 2000,
                'Java Developer', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h4>

          <p className="mt-2">
            Software engineer with hands-on experience in developing secure, scalable, full-stack applications using React, Spring Boot, and cloud-native technologies.
          </p>

          {/* Resume + Social Icons */}
          <div className="mt-4 d-flex justify-content-center justify-content-md-start align-items-center gap-3">
   <a
  href={resumePDF}
  download="Karunakar_Reddy_Kalla_Resume.pdf"
  className="btn btn-primary d-flex align-items-center gap-2"
>
  <FaDownload size={16} />
  <span>Resume</span>
</a>


            <a
              href="https://github.com/Karunakar-reddy-04"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/karunakar45/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .hero-icon {
          color: #ccc;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .hero-icon:hover {
          color: #0d6efd;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
