import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import CheckingAcct from './components/Accounts/CheckingAcct';
import SavingsAcct from './components/Accounts/SavingsAcct';
import CreditAccts from './components/Accounts/CreditAccts';
import Loans from './components/Accounts/Loans';
import Balance from './components/Balance/Balance';
import Bills from './components/Bills/Bills';
import Budget from './components/Budget/Budget';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        {window.location.hash === '#/' ? null : <Header />}
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/accounts" exact />
          <Route path="/accounts/checking-accounts" component={CheckingAcct} />
          <Route path="/accounts/savings-accounts" component={SavingsAcct} />
          <Route path="/accounts/credit-accounts" component={CreditAccts} />
          <Route path="/accounts/loans" component={Loans} />
          <Route path="/balance" component={Balance} />
          <Route path="/bills" component={Bills} />
          <Route path="/budget" component={Budget} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
