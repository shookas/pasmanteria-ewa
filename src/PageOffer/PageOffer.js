import React, { Component } from 'react';
import './PageOffer.scss';

import Baner from '../Baner/Baner';
import Carousel from '../Carousel/Carousel';
import Main from '../Main/Main';
import Features from '../Features/Features';

class PageOffer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Main />
        <Features />
      </div>
    );
  }
}

export default PageOffer;
