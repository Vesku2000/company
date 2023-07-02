import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Commentspage = () => {
  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <h1 className="title is-1 p-5">Asiakaspalautteet</h1>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Erja 71v</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                  <p className="comment">"Loistava asiakaspalvelu ja nopea vastausaika. Tulen tilaamaan uudestaan."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Kari 70v</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                  <p className="comment">"Saatiin sovitut asiat korjattua ja hyvä palvelu muutenkin."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Esko 64v</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                  <p className="comment">"Asiallinen nuori kaveri. Teki työt sovitusti."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commentspage;
