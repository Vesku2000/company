import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';

function TabletAssistanceCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <FontAwesomeIcon icon={faTabletAlt} size="2x" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Tablettiapu</p>
              <p className="subtitle is-6">Ongelmia tabletin kanssa?</p>
            </div>
          </div>
          <div className="content">
            Tabletit voivat olla loistava työkalu vanhemmille aikuisille. Tiimimme voi opastaa sinua käyttämään tabletteja tehokkaasti, oli kyse sitten sähköpostista ja selailusta, videopuheluista tai viihde-sovelluksista.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletAssistanceCard;
