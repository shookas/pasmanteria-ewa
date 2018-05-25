import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TopMenu.scss';

export default class TopMenu extends Component {
  render() {
    return (
        <nav id="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/oferta">Oferta</Link>
              <ul>
                <li>
                  <a href="#">Artykuły pasmanteryjne</a>
                </li>
                <li>
                  <a href="#">Punkt przyjęć czyszczenia odzieży</a>
                </li>
                <li>
                  <a href="#">Artykuły sezonowe</a>
                  <ul>
                    <li>
                      <a href="#">Galanteria</a>
                    </li>
                    <li>
                      <a href="#">Parasole</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
    );
  }
}
