import React, { Component } from 'react';

export default class FooterGalleryItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="6u">
        <a
          className="image fit"
          onClick={() => this.props.view(this.props.index)}
        >
          <img src={this.props.image} alt={this.props.image} />
        </a>
      </div>
    );
  }
}
