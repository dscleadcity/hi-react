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
        <h1 style={header}>Declarative</h1>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        <p>Declarative views make your code more predictable and easier to debug.</p>
      </div>
    );
  }
}
