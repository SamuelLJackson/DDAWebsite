import React, { Component } from 'react';
import './App.css';
import Contract from './img/Contract.png';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="Page-1">
          <header className="App-header">
            <h1 className="Nav-bar">DDA</h1>
          </header>
          <h1 className="Page-1-title">
            DDA
          </h1>
          <h3 className="Page-1-subtext-1">
            DECENTRALIZED DERIVATIVES ASSOCIATION
          </h3>
          <h3 className="Page-1-subtext-2">
            rEINVENTING THE MODEL FOR DERIVATIVES
          </h3>
        </div>
        <div className="Page-break-1"></div>
        <div className="Page-2">
          <div className="Page-2-div">
            <img src={Contract}  width={'20%'}/>
            <p className="DDA-creates-paragraph">DDA creates long and<br/> short tokens on the<br/> Ethereum network</p>            
          </div>
          <div className="Page-2-div">
            <h3 className="And-we-are-paragraph">...AND WE ARE 100%<br/> DECENTRALIZED.</h3>
          </div>
        </div>
        <div className="Page-break-2">
          <h3>DDA IS REINVENTING THE<br/> MODEL FOR DERIVATIVES</h3>
        </div>
      </div>
    );    
  }
}

export default App;
