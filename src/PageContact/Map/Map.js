import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import './Map.scss';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick(props, marker, e) {
    console.log(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    const style = {
      width: '100%',
      height: '400px',
    };

    const position = {
      lat: 52.396103,
      lng: 16.901238,
    };
    return (
      <div className='map_container'>
        <Map
          google={this.props.google}
          style={style}
          zoom={15}
          initialCenter={position}
          onClick={this.onMapClicked.bind(this)}
        >
          <Marker
            title={'Pasmanteria Ewa'}
            adress={'Głogowska 67'}
            position={position}
            onClick={this.onMarkerClick.bind(this)}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.title}</h1>
              <p>Zapraszamy na adres: {this.state.selectedPlace.adress}</p>
              <img alt='mały obrazek sklepu' src='images/sklep-male.png'></img>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(MapContainer);
