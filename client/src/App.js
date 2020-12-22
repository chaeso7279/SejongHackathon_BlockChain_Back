import React, { Component } from "react";
import MyNFTContract from "./contracts/MyNFT.json";
import AuctionsContract from "./contracts/Auctions.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        this.instantiateContract();
      })
      .catch(() => {
        console.log("Error finding web3.");
      });
  }

  instantiateContract() {
    const contract = require("truffle-contract");
    const MyNFT = contract(MyNFTContract);
    const Auctions = contract(AuctionsContract);
    
    MyNFT.setProvider(this.state.web3.currentProvider);
    Auctions.setProvider(this.state.web3.currentProvider);
    
  }

  render() {
    return <div className="App">Fruit shop</div>;
  }
}
