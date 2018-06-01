import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MainOffer from './MainOffer.js';
import SezonOffer from './SezonOffer';
import PasOffer from './PasOffer';
import CleanOffer from './CleanOffer';
import './PageOffer.scss';

class PageOffer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="wrapper style1">
        <div className="container">
          <div className="row 200%">
            <div className="4u mobile" id="sidebar">
              <hr className="first" />
              <section>
                <header>
                  <h3>
                    <Link to="/kontakt">
                      W przypadku pytań o asortyment prosimy o kontakt
                    </Link>
                  </h3>
                </header>
                <p>
                  Jeśli nie znajdziesz na stronie interesujących Cię rzeczy to
                  prosimy o kontakt. Istnieje możliwość zamówienia produktu.
                </p>
                <footer>
                  <Link to="/kontakt" className="button">
                    Kontakt
                  </Link>
                </footer>
              </section>
              <hr />
              <section>
                <header>
                  <h3>
                    <Link to="/oferta">Oferta</Link>
                  </h3>
                </header>
                <p>
                  Zapraszamy do zapoznania się z naszą ofertą <br />
                  Honorujemy płątność kartą
                </p>
                <div className="row 50%">
                  <div className="4u">
                    <Link to="/oferta/artykuly_pasmanteryjne" className="image fit">
                      <img src="/images/art_pas.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="8u">
                    <h4>Artykuły pasmanteryjne</h4>
                    <Link to="/oferta/artykuly_pasmanteryjne">Więcej</Link>
                  </div>
                </div>
                <div className="row 50%">
                  <div className="4u">
                    <Link to="/oferta/czyszczenie" className="image fit">
                      <img src="/images/art_clean.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="8u">
                    <h4>Punkt przyjęć czyszczenia odzieży</h4>
                    <Link to="/oferta/czyszczenie">Więcej</Link>
                  </div>
                </div>
                <div className="row 50%">
                  <div className="4u">
                    <Link to="/oferta/artykuly_sezonowe" className="image fit">
                      <img src="/images/art_sez.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="8u">
                    <h4>Artykuły sezonowe</h4>
                    <Link to="/oferta/artykuly_sezonowe">Więcej</Link>
                  </div>
                </div>
              </section>
            </div>
            <div className="8u mobile important(mobile)" id="content">
              <article id="main">
                <Route path="/oferta/czyszczenie" component={CleanOffer} />
                <Route path="/oferta/artykuly_pasmanteryjne" component={PasOffer} />
                <Route path="/oferta/artykuly_sezonowe" component={SezonOffer} />
                <Route path="/oferta" exact component={MainOffer} />
                <h5>Istnieje możliwość płacenia kartą płatniczą</h5>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageOffer;
