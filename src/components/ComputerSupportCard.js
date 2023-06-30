import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

function ComputerSupportCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <FontAwesomeIcon icon={faDesktop} size="2x" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Tietokone tuki</p>
              <p className="subtitle is-6">Apua tietokoneisiin liittyen</p>
            </div>
          </div>
          <div className="content">
            Tarvitsetko apua tietokoneesi kanssa? Kokeneet teknikkomme ovat täällä tarjoamassa asiantuntijatukea, oli kyse sitten laitteistoon tai ohjelmistoon liittyvistä ongelmista, laitteiden asennuksesta tai suorituskyvyn optimoinnista.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerSupportCard;
