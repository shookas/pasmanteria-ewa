import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import PageMain from './PageMain/PageMain';
import PageContact from './PageContact/PageContact';
import PageOffer from './PageOffer/PageOffer';
import Header from './Header/Header';
import TopMenu from './TopMenu/TopMenu';
import Footer from './Footer/Footer';
import './App.scss';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// @withRouter
class App extends Component {
  fullBaner = 'dupa';

  constructor(props) {
    super(props);
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

  isMainPage() {
    return this.props.location.pathname === '/';
  }

  render() {
    return (
      <div id="page-wrapper">
        <div id="header" className={this.isMainPage() ? 'full-height' : ''}>
          <TopMenu />
          <Header isMainPage={this.isMainPage()} />
        </div>
        <Route
          exact
          path="/"
          render={() => <PageMain config={this.props.config.mainPageConfig} />}
        />
        <Route path="/oferta" component={PageOffer} />
        <Route path="/kontakt" component={PageContact} />
        <Footer config={this.props.config.footerConfig} />
      </div>
    );
  }
}

export default withRouter(App);
