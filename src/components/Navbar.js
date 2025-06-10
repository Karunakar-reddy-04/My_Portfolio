import React from 'react';
import Scrollspy from 'react-scrollspy';

function Navbar({ onNavigate, activePage }) {
  const navItems = ['home', 'skills', 'experience', 'education', 'projects', 'contact'];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top navbar-glow">
      <div className="container">
        <span className="navbar-brand fw-bold text-primary">Portfolio</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {navItems.map(section => (
              <li key={section} className="nav-item">
                <button
                  onClick={() => onNavigate(section)}
                  className={`nav-link btn btn-link text-capitalize ${
                    activePage === section ? 'text-primary fw-bold' : 'text-light'
                  }`}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .navbar-glow {
          box-shadow: 0 1px 6px rgb(255, 255, 255);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
