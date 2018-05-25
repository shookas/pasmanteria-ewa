import React, { Component } from 'react';
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
                Pasmanteria Ewa (Logo)
              </a>
            </h1>
            <hr />
            <p>U nas znajdziesz czego potrzebujesz</p>
          </header>
          <footer>
            <a href="#banner" className="button circled scrolly">
              <i className="icon fa-angle-double-down fa-2x"></i>  
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
              <Link to="/offer">Oferta</Link>
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
