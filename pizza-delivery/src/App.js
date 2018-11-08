import React, { Component } from 'react';

import './App.css';
import ItemCard from './Components/ItemCard/ItemCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pizza
          </p>
        </header>
          <body className="App-body">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
          </body>
      </div>
    );
  }
}

export default App;
