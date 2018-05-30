import React, { Component } from 'react';
import SmoothScroll from '../Helpers/SmoothScroll';

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
      document.querySelector('.scrolly').addEventListener('click', () => {
        new SmoothScroll().scrollIt(
          document.querySelector('#banner'),
          500,
          'easeInOutCubic'
        );
      });
    }
  }

  showFooter() {
    if (this.props.isMainPage) {
      return (
        <footer>
          <a className="button circled scrolly">
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
            <img id="logo" src="/images/logo.png" />
          </h1>
          {this.showDescription()}
        </header>
        {this.showFooter()}
      </div>
    );
  }
}

export default Header;
