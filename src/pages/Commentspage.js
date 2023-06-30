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
                  <p className="title is-4">Asiakas 1</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                  <p className="comment">"Hyvä palvelu ja nopea toimitus!"</p>
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
                  <p className="title is-4">Asiakas 2</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                  <p className="comment">"Loistava tuote laadukkaalla hinta-laatusuhteella."</p>
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
                  <p className="title is-4">Asiakas 3</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                  </div>
                  <p className="comment">"Erinomainen asiakaspalvelu ja nopea vastausaika."</p>
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
