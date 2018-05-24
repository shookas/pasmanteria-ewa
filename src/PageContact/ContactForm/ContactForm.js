import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="wrapper style2">
        <article id="main" className="container special">
          <header>
            <h2>
              Skontaktuj się z nami
            </h2>
            <p>
              W razie pytań o asortyment lub w celu innej informacji prosimy o kontakt.
            </p>
          </header>
      <form>
        <label for="name">Imię</label>
        <input type="text" name="name" value="Podaj swoje imię" />
        <label for="email">email</label>
        <input type="email" name="email" value="email" />
        <label for="text">Treść wiadomości</label>
        <textarea name="text" value="Treść wiadomości" />
        <input type="submit" value="Submit" />
      </form>
          <footer>
            <a href="#" className="button">
              Continue Reading
            </a>
          </footer>
        </article>
      </div>
    );
  }
}

export default ContactForm;
