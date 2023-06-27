import React from 'react';

function MobileAssistanceCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="phone-icon.png" alt="Phone Icon" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Mobile Assistance</p>
              <p className="subtitle is-6">Get help with your smartphones</p>
            </div>
          </div>
          <div className="content">
            Our experts can assist you with setting up and using your
            smartphones, installing apps, troubleshooting issues, and more.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAssistanceCard;
