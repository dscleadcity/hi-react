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
        <h1 style={header}>Learn Once, Write Anywhere</h1>
        <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
        <p>React can also render on the server using Node and power mobile apps using React Native.</p>
      </div>
    );
  }
}
