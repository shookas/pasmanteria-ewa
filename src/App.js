import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageMain from './PageMain/PageMain';
import PageContact from './PageContact/PageContact';
import PageOffer from './PageOffer/PageOffer';
import Header from './Header/Header';
import TopMenu from './TopMenu/TopMenu';
import Footer from './Footer/Footer';
import './App.scss';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    window.jQuery(function() {
      const $window = window.jQuery(window);
      const $body = window.jQuery('body');

      // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        $body.removeClass('is-loading');
      });
    });
  }

  render() {
    return (
      <Router>
        <div id="page-wrapper">
          <div id="header">
            <TopMenu />
            <Header />
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <PageMain config={this.props.config.mainPageConfig} />
            )}
          />
          <Route path="/oferta" component={PageOffer} />
          <Route path="/kontakt" component={PageContact} />
          <Footer config={this.props.config.footerConfig} />
        </div>
      </Router>
    );
  }
}

export default App;
