import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer has-background-primary has-text-white">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-4">Company Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa.</p>
          </div>
          <div className="column">
            <h3 className="title is-4">Contact Us</h3>
            <p>123 Street, City</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456789</p>
          </div>
          <div className="column">
            <h3 className="title is-4">Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;