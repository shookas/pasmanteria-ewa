import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Baner.scss';

class Baner extends Component {
  render() {
    return (
      <section id='banner'>
        <header>
          <h2>
            Zapraszamy do <strong>Pasmenterii Ewa</strong>
          </h2>
          <p>
            Zachęcamy do zapoznania się z naszą ofertą{' '}
            <Link to='/oferta'>OFERTĄ</Link>. <br></br>
            Posiadamy duży asortyment i na pewno znajdziesz coś dla siebie.
          </p>
          <p>
            ulica Głogowska 67. Między Parkiem Wilsona a Rynkiem Łazarskim.
            <br></br>
            Czynne w godzinach 10:00 - 17:00. W sobotę i niedzielę sklep jest nieczynny.
          </p>
        </header>
      </section>
    );
  }
}

export default Baner;
