import React from 'react';

function ComputerSupportCard() {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="computer-icon.png" alt="Computer Icon" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Computer Support</p>
              <p className="subtitle is-6">Assistance with computers</p>
            </div>
          </div>
          <div className="content">
            Need help with your computer? Our skilled technicians are here
            to provide you with expert support, whether it's hardware or
            software-related issues, setting up devices, or optimizing
            performance.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerSupportCard;
