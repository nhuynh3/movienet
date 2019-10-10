import React, { Component } from 'react';

import Graph from './Graph';
import '../../assets/css/style.css';

export default class App extends Component {
  render () {
    return (
      <div>
         <div>Hello Movienet!</div>
         <Graph />
      </div>
    )
  }
}
