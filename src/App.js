import React, { Component } from 'react';
import './App.css';
import SmartContractGraphic from './img/DDASmartcontractgraphic.png';
import Infographic from './img/DDAPg3graphic+text.png';
import DiscordLogo from './img/discord-white.png';
import BlockchainLogo from './img/blockchain-logo2.png';
import Triangle from './img/DDATrianglegraphic.png';

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
          <div className="Centered-div">
            <img src={SmartContractGraphic}  width={'20%'}/>
            <p className="Medium-dark-blue-text">DDA creates long and<br/> short tokens on the<br/> Ethereum network</p>            
          </div>
          <div className="Centered-div">
            <h3 className="Large-black-text">...AND WE ARE 100%<br/> DECENTRALIZED.</h3>
          </div>
        </div>{/*end of page 2*/}
        <div className="Page-break-2">
          <h3 className="Page-break-text">DDA IS REINVENTING THE<br/> MODEL FOR DERIVATIVES</h3>
          <img src={BlockchainLogo} width={'8%'}/>
        </div>
        <div className="Page-3">
          <div className="Centered-div">
            <h3 className="Medium-black-text">
            We are a technology that uses smart contracts<br/> 
            on Ethereum to issue tokens that represent the <br/>
            short and long time sides of an asset.
            </h3>
          </div>
          <div className="Centered-div">
            <h3 className="Large-black-text">...here's how that works</h3>
          </div>
          <div className="Centered-div">
            <img src={Infographic} width={'80%'} />
          </div>
        </div>{/* end Page 3*/}
        <div className="Page-break-3" />
        <div className="Page-4">
          <div className="Centered-div">
            <h3 className="Large-dark-blue-text">Membership</h3>
          </div>
          <div className="Centered-div">          
            <p className="Small-light-blue-text">
              The cooperative structure of DDA properly aligns business incentives by creating<br/>
              a platform owned by those who ultimately use the underlying products.<br/>
              DDA memberships are non-transferable tokens on the Ethereum network.
            </p>
          </div>
          <div className="Centered-div">
            <p className="Small-dark-blue-text">
              The cooperative provides members with access to a unique suite of risk<br/>
              mitigation and hedging services.
            </p>
          </div>
          <div className="Centered-div">
            <img src={Triangle} />
          </div>
        </div>
      </div>/*end of App div*/
    );
  }
}
/* discord button: <div className="Circle-button"><img src={DiscordLogo} width={'100%'}/></div> */
export default App;
