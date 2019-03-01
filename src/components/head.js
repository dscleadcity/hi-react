import React, { Component } from 'react';

const top = {
  color: '#61dafb',
  padding: '0.5em',
  backgroundColor: '#212121',
  textDecoration: 'underline',
  textDecorationColor: '#f0f0f0'

}

export default class Head extends Component {
  render(){
    return(
      <div>
        <h1 style={top}>React App</h1>
      </div>
    );
  }
}
