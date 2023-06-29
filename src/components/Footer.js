import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="footer-heading">Yritys</h3>
            <ul className="footer-list">
              <li className="footer-item">Tietoja meistä</li>
              <li className="footer-item">Yhteystiedot</li>
              <li className="footer-item">Sijainti</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="footer-heading">Palvelut</h3>
            <ul className="footer-list">
              <li className="footer-item">Tuotteet</li>
              <li className="footer-item">Asiakastuki</li>
              <li className="footer-item">Usein kysytyt kysymykset</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="footer-heading">Seuraa meitä</h3>
            <ul className="footer-icons">
              <li className="footer-icon">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="footer-icon">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="footer-icon">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
