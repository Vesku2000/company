import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyLogo from './Logo.png';

function MyComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <a className="navbar-item" href="/" style={{ textDecoration: 'none' }}>
  <h3 style={{ fontWeight: 'bold', color: 'black' }}>Easy Help</h3>
</a>



        <a
          role="button"
          className={`navbar-burger ${isMobileMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isMobileMenuOpen}
          onClick={handleMobileMenuToggle}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item" onClick={closeMobileMenu}>
            Etusivu
          </Link>

          <Link to="/Pricing" className="navbar-item" onClick={closeMobileMenu}>
            Hinnat
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" onClick={closeMobileMenu}>
              Enemmän
            </a>

            <div className="navbar-dropdown">
              <Link to="/Whopage" className="navbar-item" onClick={closeMobileMenu}>
                Kenelle palvelu sopii
              </Link>
              <Link to="/AboutCompanypage" className="navbar-item" onClick={closeMobileMenu}>
                Yrityksestä
              </Link>
              <Link to="/Contact" className="navbar-item" onClick={closeMobileMenu}>
                Yhteystiedot
              </Link>
              <hr className="navbar-divider" />
              <Link to="Commentspage" className="navbar-item" onClick={closeMobileMenu}>
                Asiakaspalaute
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyComponent;
