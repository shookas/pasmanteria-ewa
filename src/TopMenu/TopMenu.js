import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './TopMenu.scss';

export default class TopMenu extends Component {
  render() {
    return (
      
        <nav id="nav">
          <ul>
            <li>
              <NavLink exact={true} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/oferta">Oferta</NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="/oferta/artykuly_pasmanteryjne">Artykuły pasmanteryjne</NavLink>
                </li>
                <li>
                  <NavLink to="/oferta/czyszczenie">Punkt przyjęć czyszczenia odzieży</NavLink>
                </li>
                <li>
                  <NavLink to="/oferta/artykuly_sezonowe">Artykuły sezonowe</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
    );
  }
}
