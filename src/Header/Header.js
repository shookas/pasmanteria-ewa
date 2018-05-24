import React, { Component, ReactDOM } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  componentDidMount() {
    require('../libs/jquery.scrolly.min.js');
    // Scrolly links.
    const $ = window.$;
    $('.scrolly').scrolly();
  }

  render() {
    return (
      <div id="header">
        {/* // Inner */}
        <div className="inner">
          <header>
            <h1>
              <a href="index.html" id="logo">
                Helios
              </a>
            </h1>
            <hr />
            <p>Another fine freebie by HTML5 UP</p>
          </header>
          <footer>
            <a href="#banner" className="button circled scrolly">
              Start
            </a>
          </footer>
        </div>

        {/* // Nav */}
        <nav id="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Oferta</a>
              <ul>
                <li>
                  <a href="#">Lorem ipsum dolor</a>
                </li>
                <li>
                  <a href="#">Magna phasellus</a>
                </li>
                <li>
                  <a href="#">Etiam dolore nisl</a>
                </li>
                <li>
                  <a href="#">And a submenu &hellip;</a>
                  <ul>
                    <li>
                      <a href="#">Lorem ipsum dolor</a>
                    </li>
                    <li>
                      <a href="#">Phasellus consequat</a>
                    </li>
                    <li>
                      <a href="#">Magna phasellus</a>
                    </li>
                    <li>
                      <a href="#">Etiam dolore nisl</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Veroeros feugiat</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
