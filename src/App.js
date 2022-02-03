import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import PageMain from './PageMain/PageMain';
import PageContact from './PageContact/PageContact';
import PageOffer from './PageOffer/PageOffer';
import Header from './Header/Header';
import TopMenu from './TopMenu/TopMenu';
import RespTopMenu from './RespTopMenu/RespTopMenu';
import Footer from './Footer/Footer';
import MoveToTop from './MoveToTop/MoveToTop';
import './App.scss';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// @withRouter
class App extends Component {
  componentDidMount() {
    window.jQuery(function () {
      const $window = window.jQuery(window);
      const $body = window.jQuery('body');

      // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function () {
        $body.removeClass('is-loading');
      });
    });
  }

  isMainPage() {
    return this.props.location.pathname === '/';
  }

  render() {
    if (!this.props.config) {
      return <></>
    }
    return (
      <div id="page-wrapper">
        <RespTopMenu />
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
        <MoveToTop />
        <Footer config={this.props.config?.footerConfig} />
      </div>
    );
  }
}

export default withRouter(App);
