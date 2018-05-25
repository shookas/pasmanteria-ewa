import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="wrapper style2">
        <article id="main" className="container special">
            <img className="image featured" src="images/pic06.jpg" alt="" />
          <header>
            <h2>
              <a>Pasmanteria Ewa</a>
            </h2>
            <p>
              Firma Pasmanteria Ewa jest małą ale prężną firmą rodzinną
              działającą od 1997 roku niezmiennie w tym samym miejscu w Poznaniu
              na ulicy Głogowskiej 67. Między Parkiem Wilsona a Rynkiem
              Łazarskim.
            </p>
            <p>Czynne w godzinach 10:00 - 18:00 i każdą sobotę od 10:00 do 14:00.</p>
          </header>
          <p>
            Oferujemy cały zakres dodatków krawieckich, przyborów do szycia,
            haftowania, przeróbek, naprawy odzieży. Gwarantujemy miłą i fachową
            obsługę i zawsze chętnie doradzimy i wykonamy bezpłatnie drobne
            naprawy np. wymiana suwaków w zamkach do kurtek, torebek itp.
          </p>
          <p>
            Ponadto oferujemy również sprzedaż polskich parasoli firmy "Kulik" z
            Wrocławia z roczną gwarancją. W sezonie zimowym duży wybór beretów,
            czapek, rękawiczek i szali, natomiast wiosną i latem cienkie szale,
            bawełniane chusteczki na głowę oraz parea na stroje kąpielowe.
          </p>
          <footer>
            <Link to="/contact" className="button">
              Kontakt
            </Link>
          </footer>
        </article>
      </div>
    );
  }
}

export default Main;
