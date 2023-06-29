import React from 'react';

function ComputerSupportCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="../assets/img/computer.jpg" alt="Tietokoneikon" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Tietokoneen tuki</p>
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
