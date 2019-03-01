import React, { Component } from 'react';

import Head from './components/head';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component {
  render() {
    return(
      <div>
        <Head />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
