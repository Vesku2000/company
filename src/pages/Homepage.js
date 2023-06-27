import React from 'react';
import Navbar from '../components/Navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            Welcome to Tech Assist
          </h1>
          <h2 className="subtitle is-3">
            Empowering Older Adults with Technology
          </h2>
          <p className="is-size-5">
            We provide expert assistance and support for all your IT needs,
            from smartphones to computers and more. Our friendly team of
            professionals is dedicated to helping older adults navigate the
            digital world with ease.
          </p>
          <a href="#contact" className="button is-light is-large mt-5">
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
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
        </div>
      </div>
    </section>

    <section id="contact" className="section is-primary">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered has-text-white">
              Contact Us
            </h2>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-light">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Homepage;
