import React from 'react';
import { Link } from 'react-router-dom';

function MyComponent() {


    
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to="/" class="navbar-item">
        Home
      </Link>

      <Link to="/Pricing" class="navbar-item">
        Pricing
      </Link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Enemmän
        </a>

        <div class="navbar-dropdown">
        <Link to="/" className='navbar-item'>
            Esimerkkejä
        </Link>
        <Link to="/" className='navbar-item'>
            Yrityksestä
        </Link>
        <Link to="/" className='navbar-item'>
            Yhteystiedot
        </Link>
          <hr class="navbar-divider" />
            <Link to="" className='navbar-item'>
                Kokemuksia
            </Link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
      );
    };


export default MyComponent;
