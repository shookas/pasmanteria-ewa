import React, { Component } from 'react';

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
            <i className="icon fa-angle-double-down fa-2x" />
          </a>
        </footer>
      </div>
    );
  }
}

export default Header;
