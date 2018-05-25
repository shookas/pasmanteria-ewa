import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Baner.scss';

class Baner extends Component {
  render() {
    return (
      <section id="banner">
        <header>
          <h2>
            Zapraszamy do <strong>Pasmenterii Ewa</strong>.
          </h2>
          <p>
            Zachęcamy do zapoznania się z naszą ofertą {' '}
            <Link to="/oferta">OFERTĄ</Link>. <br></br>
            Posiadamy duży asortyment i na pewno znajdziesz coś dla siebie.
          </p>
        </header>
      </section>
    );
  }
}

export default Baner;
