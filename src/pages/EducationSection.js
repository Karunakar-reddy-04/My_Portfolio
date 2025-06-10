import React from 'react';
import gmuLogo from '../assets/logos/GMU.png';
import vitLogo from '../assets/logos/Vit.png';

const educationData = [
  {
    university: 'George Mason University',
    degree: "Master’s in Computer Science",
    location: 'Fairfax, VA',
    gpa: '3.67',
    duration: '2022 - 2024',
    logo: gmuLogo,
  },
  {
    university: 'Vellore Institute of Technology',
    degree: 'Bachelor’s in Computer Science and Engineering',
    location: 'Vellore, India',
    gpa: '3.18',
    duration: '2018 - 2022',
    logo: vitLogo,
  },
];

function EducationSection() {
  return (
    <section className="py-5 mt-5 bg-dark text-light">
      <div className="container">
        <div className="row g-4">
          {educationData.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div className="education-card p-4 rounded-4 border border-secondary bg-dark shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={edu.logo}
                    alt={edu.university}
                    style={{ width: '48px', height: '48px', marginRight: '1rem', objectFit: 'contain' }}
                  />
                  <div>
                    <h5 className="mb-0">{edu.university}</h5>
                    <small className="text-secondary">{edu.location}</small>
                  </div>
                </div>
                <p className="mb-1"><strong>Degree:</strong> {edu.degree}</p>
                <p className="mb-1"><strong>GPA:</strong> {edu.gpa}</p>
                <p className="mb-0"><strong>Duration:</strong> {edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .education-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .education-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </section>
  );
}

export default EducationSection;
