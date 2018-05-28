import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  componentDidMount() {
    this.addScrolly();
  }

  componentDidUpdate() {
    this.addScrolly();
  }

  addScrolly() {
    if (this.props.isMainPage) {
      require('../libs/jquery.scrolly.min.js');
      window.$('.scrolly').scrolly();
    }
  }

  showFooter() {
    if (this.props.isMainPage) {
      return (
        <footer>
          <a href="#banner" className="button circled scrolly">
            <i className="icon fa-angle-double-down fa-2x" />
          </a>
        </footer>
      );
    }
  }

  showDescription() {
    if (this.props.isMainPage) {
      return (
        <div>
          <hr />
          <p className="description">U nas znajdziesz czego potrzebujesz</p>
        </div>
      );
    }
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
          {this.showDescription()}
        </header>
        {this.showFooter()}
      </div>
    );
  }
}

export default Header;
