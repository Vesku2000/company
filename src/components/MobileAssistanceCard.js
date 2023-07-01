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
              <p className="subtitle is-6">Tarvitsetko apua puhelimen kanssa?</p>
            </div>
          </div>
          <div className="content">
            Asiantuntijamme auttavat sinua älypuhelimen käyttöönotossa, sovellusten asentamisessa, ongelmien vianmäärityksessä ja kaikissa muissa apua tarvitsevissa tilanteissa.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAssistanceCard;
