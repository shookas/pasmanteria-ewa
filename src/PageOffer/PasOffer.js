import React from 'react';

const MainOffer = () => {
  return (
    <div>
      <header>
        <h2>Artykuły pasmanteryjne</h2>
        <p>U nas znajdziesz czego potrzebujesz </p>
      </header>
      <div className="image featured">
        <img src="/images/art_pas.jpg" alt="" />
      </div>
      <p>
        Oferujemy szeroki wybór artykułów pasmanteryjnych:
        <ul>
          <li>Guziki</li>
          <li>Przybory do szycia</li>
          <li>Gumy i taśmy</li>
          <li>Zamki</li>
          <li>Wstążki i koronki</li>
          <li>Artykuły do haftowania</li>
          <li>Włóczka</li>
          <li>Barwniki do tkanin</li>
          <li>Sznury i sznurki ozdobne</li>
          <li>Sznurowadła</li>
          <li>Aplikacje dla dzieci i dorosłych</li>
          <li>Klamry do pasków</li>
        </ul>
      </p>
    </div>
  );
};

export default MainOffer;
