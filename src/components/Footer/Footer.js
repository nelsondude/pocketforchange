import React from 'react';
import './Footer.css';

const footer = () => (
  <footer className='Footer'>
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-md-offset-2">
          <img className="logo" src="https://cdn.onlinewebfonts.com/svg/img_451440.png" alt=""/>
        </div>
        <div className="col-md-6">
          <div className="row col-xs-12 col-md-6">
            <ul className="footer-links col-xs-6 col-md-6">
              <h5>Company</h5>
              <li><a href="">Home</a></li>
              <li><a href="">Link</a></li>
            </ul>
            <ul className="footer-links col-xs-6 col-md-6">
              <h5>Mission</h5>
              <li><a href="">Home</a></li>
              <li><a href="">Link</a></li>
            </ul>
          </div>
          <div className="row col-xs-12 col-md-6">
            <ul className="footer-links col-xs-6 col-md-6">
              <h5>Product</h5>
              <li><a href="">Home</a></li>
              <li><a href="">Link</a></li>
            </ul>
            <ul className="footer-links col-xs-6 col-md-6">
              <h5>Support</h5>
              <li><a href="">Contact</a></li>
              <li><a href="">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
