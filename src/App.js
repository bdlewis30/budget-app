import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import BankAccts from './components/Accounts/BankAccounts/BankAccts';
import CreditAccts from './components/Accounts/CreditAccounts/CreditAccts';
import LoanLiab from './components/Accounts/LoansLiabilities/LoanLiab';
import Balance from './components/Balance/Balance';
import Bills from './components/Bills/Bills';
import Budget from './components/Budget/Budget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bank-accounts" component={BankAccts} />
          <Route path="/credit-accounts" component={CreditAccts} />
          <Route path="/liabilities" component={LoanLiab} />
          <Route path="/balance" component={Balance} />
          <Route path="/bills" component={Bills} />
          <Route path="/budget" component={Budget} />
        </Switch>
      </div>
    );
  }
}

export default App;
