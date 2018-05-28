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
    require('./libs/jquery.dropotron.min.js');

    require('./libs/util.js');

    (function($) {
      $(function() {
        const $window = $(window);
        const $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
          $body.removeClass('is-loading');
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Off-Canvas Navigation.

        // Navigation Button.
        $(
          '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>'
        ).appendTo($body);

        // Navigation Panel.
        $(
          '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
          .appendTo($body)
          .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            target: $body,
            visibleClass: 'navPanel-visible'
          });
      });
    })(window.jQuery);
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
