import React, { Component } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import MapContainer from "./Map/Map";
import Baner from "../Baner/Baner";
import './PageContact.scss';

class Contact extends Component {
  render() {
    return (
      <div>
      <Baner />
      <MapContainer />
      <ContactForm />
      </div>
    );
  }
}

export default Contact;
