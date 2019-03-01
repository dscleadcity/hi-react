import React, { Component } from 'react';

const space = {
  padding: '2em'
}

const header = {
  color: '#5d5d5d',
  fontWeight: 'bold'
}

export default class Info1 extends Component {
  render(){
    return(
      <div style={space}>
        <h1 style={header}>Component-Based</h1>
        <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
      </div>
    );
  }
}
