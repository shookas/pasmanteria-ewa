import React, { Component } from 'react';
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
              <a className="image featured">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a >Artykuły pasmanteryjne</a>
                </h3>
              </header>
              <p>
                Szeroki asortyment artykułów pasmanteryjnych dostosowany do potrzeb naszych klientów.
              </p>
            </article>
            <article className="4u 12u(mobile) special">
              <a className="image featured">
                <img src="images/pic08.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a>Artykuły sezownowe</a>
                </h3>
              </header>
              <p>
                Sprzedajemy także artykuły sezonowe renomowanych marek.
              </p>
            </article>
            <article className="4u 12u(mobile) special">
              <a className="image featured">
                <img src="images/pic09.jpg" alt="" />
              </a>
              <header>
                <h3>
                  <a>Punkt przyjęć czyszczenia odzieży</a>
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
