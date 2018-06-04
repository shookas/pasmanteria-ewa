import React from 'react';

const CleanOffer = () => {
  return (
    <div>
      <header>
        <h2>Punkt przyjęcia odzieży do czyszczenia</h2>
        <p>Punkt przyjęć firmy NATA</p>
      </header>
      <a className="image featured">
        <img src="/images/art_clean.jpg" alt="" />
      </a>
      <p>
        Czyścimy odzież, kurtki letnie i zimowe, kołdry, koce, bieżniki oraz
        kurtki skórzane. W zależności od typu prania usługa trwa od 24 godz. do
        2 dni.
        <p>
          Pralnia wykonuje usługi:
          <ul>
            <li>Pranie chemiczne</li>
            <li>Pranie wodne</li>
            <li>Prasowanie</li>
          </ul>
        </p>
        W razie dodatkwoych pytań prosimy o kontakt telefoniczny (61) 865 25 40
      </p>
    </div>
  );
};

export default CleanOffer;
