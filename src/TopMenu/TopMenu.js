import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './TopMenu.scss';

export default class TopMenu extends Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <ul>
            <li>
              <NavLink exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/oferta">Oferta</NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="/oferta/artykuly_pasmanteryjne">
                    Artykuły pasmanteryjne
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/oferta/czyszczenie">
                    Punkt przyjęć czyszczenia odzieży
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/oferta/artykuly_sezonowe">
                    Artykuły sezonowe
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
        <div id="navButton">
          <a href="#navPanel" class="toggle" />
        </div>
        <div id="navPanel">
          <nav>
            <a class="link depth-0" href="index.html">
              <span class="indent-0" />Home
            </a>
            <a class="link depth-0" href="#">
              <span class="indent-0" />Dropdown
            </a>
            <a class="link depth-1" href="#">
              <span class="indent-1" />Lorem ipsum dolor
            </a>
            <a class="link depth-1" href="#">
              <span class="indent-1" />Magna phasellus
            </a>
            <a class="link depth-1" href="#">
              <span class="indent-1" />Etiam dolore nisl
            </a>
            <a class="link depth-1" href="#">
              <span class="indent-1" />And a submenu …
            </a>
            <a class="link depth-2" href="#">
              <span class="indent-2" />Lorem ipsum dolor
            </a>
            <a class="link depth-2" href="#">
              <span class="indent-2" />Phasellus consequat
            </a>
            <a class="link depth-2" href="#">
              <span class="indent-2" />Magna phasellus
            </a>
            <a class="link depth-2" href="#">
              <span class="indent-2" />Etiam dolore nisl
            </a>
            <a class="link depth-1" href="#">
              <span class="indent-1" />Veroeros feugiat
            </a>
            <a class="link depth-0" href="left-sidebar.html">
              <span class="indent-0" />Left Sidebar
            </a>
            <a class="link depth-0" href="right-sidebar.html">
              <span class="indent-0" />Right Sidebar
            </a>
            <a class="link depth-0" href="no-sidebar.html">
              <span class="indent-0" />No Sidebar
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
