import React, { Component } from 'react';
import './PageMain.scss';

import Baner from '../Baner/Baner';
import Carousel from '../Carousel/Carousel';
import Main from '../Main/Main';
import Features from '../Features/Features';

class PageMain extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Baner />
        <Carousel items={this.props.config.carouselItems} />
        <Main />
        <Features />
      </div>
    );
  }
}

export default PageMain;
