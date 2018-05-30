import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageOffer.scss';

class PageOffer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div class="wrapper style1">
        <div class="container">
          <div class="row 200%">
            <div class="4u 12u(mobile)" id="sidebar">
              <hr class="first" />
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
                  <Link to="/kontakt" class="button">
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
                <p>Zapraszamy do zapoznania się z naszą ofertą <br />
                Honorujemy płątność kartą
                </p>
                <div class="row 50%">
                  <div class="4u">
                    <Link to="" class="image fit">
                      <img src="images/art_pas.jpg" alt="" />
                    </Link>
                  </div>
                  <div class="8u">
                    <h4>Artykuły pasmanteryjne</h4>
                    <Link to="">Więcej</Link>
                  </div>
                </div>
                <div class="row 50%">
                  <div class="4u">
                    <Link to="" class="image fit">
                      <img src="images/art_clean.jpg" alt="" />
                    </Link>
                  </div>
                  <div class="8u">
                    <h4>Punkt przyjęć czyszczenia odzieży</h4>
                    <Link to="">Więcej</Link>
                  </div>
                </div>
                <div class="row 50%">
                  <div class="4u">
                    <Link to="" class="image fit">
                      <img src="images/art_sez.jpg" alt="" />
                    </Link>
                  </div>
                  <div class="8u">
                    <h4>Artykuły sezonowe</h4>
                    <Link to="">Więcej</Link>
                  </div>
                </div>
              </section>
            </div>
            <div class="8u 12u(mobile) important(mobile)" id="content">
              <article id="main">
                <header>
                  <h2>Pasmanteria Ewa</h2>
                  <p>U nas znajdziesz czego potrzebujesz</p>
                </header>
                <a href="#" class="image featured">
                  <img src="images/pic_main.jpg" alt="" />
                </a>
                <p>
                  Oferujemy cały zakres dodatków krawieckich, przyborów do
                  szycia, haftowania, przeróbek, naprawy odzieży. Gwarantujemy
                  miłą i fachową obsługę i zawsze chętnie doradzimy i wykonamy
                  bezpłatnie drobne naprawy np. wymiana suwaków w zamkach do
                  kurtek, torebek itp. Ponadto oferujemy również sprzedaż
                  polskich parasoli firmy "Kulik" z Wrocławia z roczną
                  gwarancją. W sezonie zimowym duży wybór beretów, czapek,
                  rękawiczek i szali, natomiast wiosną i latem cienkie szale,
                  bawełniane chusteczki na głowę oraz parea na stroje kąpielowe.
                </p>
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
