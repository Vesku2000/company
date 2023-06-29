import React from 'react';
import { Link } from 'react-router-dom';

function MyComponent() {
  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma Logo" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Etusivu
          </Link>

          <Link to="/Pricing" className="navbar-item">
            Hinnat
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Enemmän
            </a>

            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">
                Esimerkkejä
              </Link>
              <Link to="/" className="navbar-item">
                Yrityksestä
              </Link>
              <Link to="/" className="navbar-item">
                Yhteystiedot
              </Link>
              <hr className="navbar-divider" />
              <Link to="" className="navbar-item">
                Kokemuksia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyComponent;
