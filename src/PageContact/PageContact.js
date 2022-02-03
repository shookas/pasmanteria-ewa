import React, { Component } from 'react';
import MapContainer from "./Map/Map";
import Baner from "../Baner/Baner";
import './PageContact.scss';

class Contact extends Component {
  render() {
    return (
      <div>
      <Baner />
      <MapContainer />
      </div>
    );
  }
}

export default Contact;
