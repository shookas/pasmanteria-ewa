import React, { Component } from 'react';
import Viewer from 'react-viewer';

import CarouselElement from './CarouselElement/CarouselElement';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    require('../libs/jquery.onvisible.min.js');
    require('./jquery-carousel');
  }

  viewItem(itemIndex) {
    this.setState({ visible: true, active: itemIndex });
  }

  render() {
    return (
      <section className="carousel">
        <div className="reel">
          {this.props.items.map((el, i) => {
            return (
              <CarouselElement
                key={i}
                index={i}
                text={el.text}
                header={el.header}
                image={el.src}
                view={this.viewItem.bind(this)}
              />
            );
          })}
        </div>
        <Viewer
          visible={this.state.visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
          images={this.props.items}
          activeIndex={this.state.active}
          rotatable={false}
          scalable={false}
          onMaskClick={() => {
            this.setState({ visible: false });
          }}
        />
      </section>
    );
  }
}

export default Carousel;
