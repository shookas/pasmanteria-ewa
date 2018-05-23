import React, { Component } from 'react';
import Header from './Header/Header';
import Baner from './Baner/Baner';
import Carousel from './Carousel/Carousel';
import Main from './Main/Main';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import logo from './logo.svg';
import './App.scss';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

class App extends Component {
  componentDidMount() {
    require('./libs/jquery.dropotron.min.js');
    require('./libs/jquery.scrolly.min.js');
    require('./libs/jquery.onvisible.min.js');
    require('./libs/util.js');
    require('./libs/main.js');
  }

  render() {
    return (
      <div id="page-wrapper">
        <Header />
        <Baner />
        <Carousel />
        <Main />
        <Features />
        <Footer />
       

        {/* // Footer */}
        
      </div>
    );
  }
}

export default App;
