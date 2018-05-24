import React, { Component } from 'react';
import './PageMain.scss';

import Baner from '../Baner/Baner';
import Carousel from '../Carousel/Carousel';
import Main from '../Main/Main';
import Features from '../Features/Features';

class PageMain extends Component {

  render() {
    return (
      <div>
        <Baner />
        <Carousel />
        <Main />
        <Features />
      </div>
    );
  }
}

export default PageMain;
