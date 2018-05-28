import React, { Component } from 'react';
import './MoveToTop.scss';

export default class MoveToTop extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        window.document.body.scrollTop > 1500 ||
        window.document.documentElement.scrollTop > 1500
      ) {
        window.document.querySelector('.move-to-top').style.display = 'flex';
      } else {
        window.document.querySelector('.move-to-top').style.display = 'none';
      }
    }
  }

  onClick() {
    window.document.body.scrollTop = 0; // For Safari
    window.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div className="move-to-top" onClick={this.onClick.bind(this)}>
        <i className="icon fa-arrow-up fa-2x" />
      </div>
    );
  }
}
