import React, { Component } from 'react';

import Info1 from './info_1';
import Info2 from './info_2';
import Info3 from './info_3';

export default class Body extends Component {
  render() {
    return(
      <div>
        <Info1 />
        <Info2 />
        <Info3 />
      </div>
    );
  }
}
