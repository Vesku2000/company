import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function MobileAssistanceCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <FontAwesomeIcon icon={faMobileAlt} size="2x" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Mobiiliapu</p>
              <p className="subtitle is-6">Saat apua älypuhelimesi kanssa</p>
            </div>
          </div>
          <div className="content">
            Asiantuntijamme auttavat sinua älypuhelimen asennuksessa ja käytössä, sovellusten asentamisessa, ongelmien vianmäärityksessä ja paljon muussa.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAssistanceCard;
