import React, { Component } from 'react';
import './App.css';
import BankAccts from './components/Accounts/BankAccounts/BankAccts';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import Bills from './components/Bills/Bills';
import Budget from './components/Budget/Budget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BankAccts />
        <Balance />
        <Bills />
        <Budget />
      </div>
    );
  }
}

export default App;
