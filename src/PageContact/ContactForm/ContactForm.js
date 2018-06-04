import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from './FormErrors';

class ContactForm extends Component {
  constructor(props) {
    super();

    this.state = {
      name: '',
      email: '',
      text: '',
      formErrors: { email: '', text: '' },
      emailValid: false,
      textValid: false,
      formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isDisabled() {
    return !this.state.formValid;
  }

  checkActiveButton() {
    return this.isDisabled() ? 'button--disabled' : '';
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let textValid = this.state.textValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' jest nieprawidłowy';
        break;
      case 'text':
        textValid = value.length;
        fieldValidationErrors.text = textValid ? '' : ' jest za któtki';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        textValid: textValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.textValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'error';
  }

  showErrors() {
    if (Object.values(this.state.formErrors).some(err => !!err)) {
      return <FormErrors formErrors={this.state.formErrors} />;
    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  handleSubmit(event) {
    const body = {
      email: this.state.email,
      name: this.state.name,
      text: this.state.text
    };
    axios
      .post(' http://localhost:3001/contact', body)
      .then(response => {
        
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper style2">
        <article id="main" className="container special">
          <header>
            <h2>Skontaktuj się z nami</h2>
            <p>
              W razie pytań o asortyment lub w celu innej informacji prosimy o
              kontakt.
            </p>
          </header>
          <form>
            <label>
              Imię
              <input
                type="text"
                name="name"
                placeholder="Podaj swoje imię"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              * email
              <input
                className={this.errorClass(this.state.formErrors.email)}
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              * Treść wiadomości
              <textarea
                className={this.errorClass(this.state.formErrors.text)}
                name="text"
                placeholder="Treść wiadomości"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </label>
            {this.showErrors()}
          </form>
          <footer>
            <button
              className={this.checkActiveButton()}
              onClick={this.handleSubmit}
              disabled={this.isDisabled()}
            >
              Wyślij
            </button>
          </footer>
        </article>
      </div>
    );
  }
}

export default ContactForm;
