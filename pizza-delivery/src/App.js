import React , { Component } from 'react';

import './App.css';
import ItemCard from './Components/ItemCard/ItemCard'
import AddressForm from "./Components/AddressForm/AddressForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pizza
          </p>
        </header>
          <div className="App-body">
              <div className="App-body-left">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
              </div>
              <div className="App-body-right">
                  <AddressForm/>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
