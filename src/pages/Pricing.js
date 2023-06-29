import React from 'react';
import 'bulma/css/bulma.min.css';
import './Pricing.css';

function Pricing() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">Pricing</h1>
          <p>Here is our pricing information:</p>

          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">Basic</h2>
                  <p className="subtitle is-6">Perfect for occasional help</p>
                  <hr />
                  <ul>
                    <li>Phone support</li>
                    <li>Remote assistance</li>
                    <li>Email support</li>
                  </ul>
                  <div className="has-text-centered">
                    <a className="button is-primary" href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">Advanced</h2>
                  <p className="subtitle is-6">Ideal for regular assistance</p>
                  <hr />
                  <ul>
                    <li>Phone support</li>
                    <li>Remote assistance</li>
                    <li>Email support</li>
                    <li>On-site visits</li>
                  </ul>
                  <div className="has-text-centered">
                    <a className="button is-primary" href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">Premium</h2>
                  <p className="subtitle is-6">For advanced tech needs</p>
                  <hr />
                  <ul>
                    <li>Phone support</li>
                    <li>Remote assistance</li>
                    <li>Email support</li>
                    <li>On-site visits</li>
                    <li>Hardware repairs</li>
                  </ul>
                  <div className="has-text-centered">
                    <a className="button is-primary" href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Additional Section 1</h2>
          <p>Some additional content here...</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Additional Section 2</h2>
          <p>Some more content here...</p>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
