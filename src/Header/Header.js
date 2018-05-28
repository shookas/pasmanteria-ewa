import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  componentDidMount() {
    require('../libs/jquery.scrolly.min.js');
    // Scrolly links.
    const $ = window.$;
    $('.scrolly').scrolly();
    console.log('header did mount')
  }

  componentDidUpdate() {
    console.log('header did update')
  }

  componentWillMount() {
    console.log('header will mount')
  }

  componentWillUpdate() {
    console.log('header will update')
  }

  shouldComponentUpdate() {
    console.log('header should update')
  }

  componentWillReceiveProps() {
    console.log('header will receive props')
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
