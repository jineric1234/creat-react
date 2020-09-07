import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";





export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 46.232192999999995,
    lng: 2.209667,
    zoom: 6,
    
  };
  states = {
    loading: true,
    pays: null,
    payss: null,
    ville: null,
    lati: null,
    long: null,
    zoom: 6,

  };
  

  async componentDidMount(){
    const url ='https://api.openaq.org/v1/measurements'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({pays: data.results[0], loading: false });
    this.setState({ville: data.results[0].city, loading: false });
    this.setState({lati: data.results[0].coordinates.latitude, loading: false });
    this.setState({long: data.results[0].coordinates.longitude, loading: false });
    this.setState({payss: data.results[0].country, loading: false });
  }
  
  render() {
    const position = [this.state.lat , this.state.lng]
   
  return (
    
    <Map center={position} zoom={this.state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          
        <div>{this.state.ville}<br />  </div>
         <div>{this.state.lati}<br /></div>
         <div>{this.state.long}<br /></div>
         <div>{this.state.payss}<br /></div>
        </Popup>
      </Marker>
      <div className= "App">
    <h1>Normalement ya un truc</h1>
  
    </div>
    </Map>
   
  );
  }

}