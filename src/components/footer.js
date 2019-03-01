import React, { Component } from 'react';

const bottom = {
  color: '#000',
  padding: '2em',
  textAlign: 'center',
  textDecoration: 'underline',
  textDecorationColor: '#61dafb'
}

export default class Footer extends Component {
  render(){
    return(
      <div>
        <h4 style={bottom}>@dscleadcity &copy; 2019</h4>
      </div>
    );
  }
}
