import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CarouselElement extends Component {
  render() {
    return (
      <article>
        <a className='image featured'>
          <img
            // style={{height: '300px'}}
            src={this.props.image}
            alt={this.props.image}
            onClick={() => this.props.view(this.props.index)}
          />
        </a>
        <header>
          <h3>
            <Link to='/oferta'>{this.props.header}</Link>
          </h3>
        </header>
        <p>{this.props.text}</p>
        <div />
      </article>
    );
  }
}
