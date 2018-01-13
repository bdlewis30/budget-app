import React, { Component } from 'react';
import './App.css';
import BankAccts from './components/Accounts/BankAccounts/BankAccts';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BankAccts />
      </div>
    );
  }
}

export default App;
