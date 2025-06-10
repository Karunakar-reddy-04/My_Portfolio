import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3 border-top">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} Karunakar Reddy Kalla. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
