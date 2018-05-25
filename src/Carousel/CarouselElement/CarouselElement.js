import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Viewer from 'react-viewer';

export default class CarouselElement extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <article>
        <a className="image featured">
          <img
            src={this.props.image}
            alt={this.props.image}
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          />
        </a>
        <header>
          <h3>
            <Link to="/offer">{this.props.header}</Link>
          </h3>
        </header>
        <p>{this.props.text}</p>
        <div>
          <Viewer
            visible={this.state.visible}
            onClose={() => {
              this.setState({ visible: false });
            }}
            images={[{ src: this.props.image, alt: '' }]}
            rotatable={false}
            scalable={false}
            zoomable={false}
            changeable={false}
            onMaskClick={() => {
              this.setState({ visible: false });
            }}
            noNavbar={true}
            noToolbar={true}
          />
        </div>
      </article>
    );
  }
}
