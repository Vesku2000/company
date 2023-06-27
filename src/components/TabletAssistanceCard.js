import React from 'react';

function TabletAssistanceCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="tablet-icon.png" alt="Tablet Icon" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Tablet Assistance</p>
              <p className="subtitle is-6">Help with tablets</p>
            </div>
          </div>
          <div className="content">
            Tablets can be a great tool for older adults. Our team can
            guide you through using tablets effectively, from email and
            browsing to video calls and entertainment apps.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletAssistanceCard;
