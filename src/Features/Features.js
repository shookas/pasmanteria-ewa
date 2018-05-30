import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Features.scss';

class Features extends Component {
  render() {
    return (
      <div className="wrapper style1">
        <section id="features" className="container special">
          <header>
            <h2>Czym się zajmujemy?</h2>
            <p>Zapraszamy do zapoznania się z naszymi usługami</p>
          </header>
          <div className="row">
            <article className="4u 12u(mobile) special">
              <Link to="/oferta" className="image featured">
                <img src="images/art_pas.jpg" alt="" />
              </Link>
              <header>
                <h3>
                  <Link to="/oferta" >Artykuły pasmanteryjne</Link>
                </h3>
              </header>
              <p>
                Szeroki asortyment artykułów pasmanteryjnych dostosowany do potrzeb naszych klientów.
              </p>
            </article>
            <article className="4u 12u(mobile) special">
              <Link to="/oferta" className="image featured">
                <img src="images/art_sez.jpg" alt="" />
              </Link>
              <header>
                <h3>
                  <Link to="/oferta">Artykuły sezownowe</Link>
                </h3>
              </header>
              <p>
                Sprzedajemy także artykuły sezonowe renomowanych marek.
              </p>
            </article>
            <article className="4u 12u(mobile) special">
              <Link to="/oferta" className="image featured">
                <img src="images/art_clean.jpg" alt="" />
              </Link>
              <header>
                <h3>
                  <Link to="/oferta">Punkt przyjęć czyszczenia odzieży</Link>
                </h3>
              </header>
              <p>
                Czyścimy odzież, kurtki letnie i zimowe, kołdry, koce, bieżniki
                oraz kurtki skórzane.
              </p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
