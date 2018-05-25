import React, { Component } from 'react';
import Viewer from 'react-viewer';

export default class FooterGallery extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }
  render() {
    return (
      <div className="6u">
        <a
          className="image fit"
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          <img src={this.props.image} alt={this.props.image} />
        </a>
        <Viewer
          visible={this.state.visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
          images={[{ src: this.props.image, alt: this.props.image }]}
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
    );
  }
}
