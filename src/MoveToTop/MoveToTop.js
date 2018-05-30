import React, { Component } from 'react';
import './MoveToTop.scss';
import SmoothScroll from '../Helpers/SmoothScroll';

export default class MoveToTop extends Component {
  showButtonThreshold = 1500;

  constructor(props) {
    super();
  }

  componentDidMount() {
    this.moveToTopButton = window.document.querySelector('.move-to-top');
    window.onscroll = this.scrollFunction.bind(this);
    if (!this.showButton()) {
      this.moveToTopButton.style.display = 'none';
    }
  }

  scrollFunction() {
    if (this.showButton()) {
      this.moveToTopButton.style.display = 'flex';
    } else {
      this.moveToTopButton.style.display = 'none';
    }
  }

  showButton() {
    return (
      window.document.body.scrollTop > this.showButtonThreshold ||
      window.document.documentElement.scrollTop > this.showButtonThreshold
    );
  }

  smoothScroll() {
    new SmoothScroll().scrollIt(
      document.querySelector('body'),
      500,
      'easeInOutCubic'
    );
  }

  render() {
    return (
      <div
        className="button circled move-to-top"
        onClick={this.smoothScroll.bind(this)}
      >
        <i className="icon fa-arrow-up fa-2x" />
      </div>
    );
  }
}
