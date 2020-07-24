import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './RespTopMenu.scss';

export default class RespTopMenu extends Component {
  componentDidMount() {
    this.navPanel = document.querySelector('#navPanel');
    this.navButton = document.querySelector('#navButton');
  }
  toggleNavPanel() {
    this.navPanel.classList.toggle('expanded');
    this.navButton.classList.toggle('expanded');
  }

  render() {
    return (
      <div>
        <div id='navPanel'>
          <nav>
            <NavLink exact={true} to='/' className='link depth-0'>
              <span className='indent-0' />
              Home
            </NavLink>
            <NavLink className='link depth-0' to='/oferta'>
              <span className='indent-0' />
              Oferta
            </NavLink>
            <NavLink
              className='link depth-1'
              to='/oferta/artykuly_pasmanteryjne'
            >
              <span className='indent-1' />
              Artykuły pasmanteryjne
            </NavLink>
            <NavLink className='link depth-1' to='/oferta/czyszczenie'>
              <span className='indent-1' />
              Punkt przyjęć czyszczenia odzieży
            </NavLink>
            <NavLink className='link depth-1' to='/oferta/artykuly_sezonowe'>
              <span className='indent-1' />
              Artykuły sezonowe
            </NavLink>
            <NavLink className='link depth-0' to='/kontakt'>
              <span className='indent-0' />
              Kontakt
            </NavLink>
          </nav>
        </div>
        <div id='navButton'>
          <i onClick={this.toggleNavPanel.bind(this)} className='toggle' />
        </div>
      </div>
    );
  }
}
