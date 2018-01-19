import React, { Component } from 'react';
import './AccountsSnip.css';
import { Route, Link } from 'react-router-dom';
import CheckingAcct from '../../Accounts/CheckingAcct';
import SavingsAcct from '../../Accounts/SavingsAcct';
import CreditAccts from '../../Accounts/CreditAccts';
import Loans from '../../Accounts/Loans';

export default class AccountsSnip extends Component {

    render() {
        return (
            <div>
                {/* <Route path="/bank-accounts" component={BankAccts} /> */}
                <Route path="/accounts/checking" component={CheckingAcct} />
                <Route path="/accounts/savings" component={SavingsAcct} />
                <Route path="/accounts/credit" component={CreditAccts} />
                <Route path="/accounts/loans" component={Loans} />

                <section className="accts-container-snip">
                    <h1>Accounts</h1>
                    <div className="content">
                        <div className="box-container">
                            <Link to="/accounts/checking">
                                <section className="box-1">Checking Accounts
                            <div className="amount">$580.00</div>
                                </section>
                            </Link>
                            <Link to="/accounts/savings">
                                <section className="box-2">Savings Accounts
                            <div className="amount">$1000.00</div>
                                </section>
                            </Link>
                            <Link to="/accounts/credit">
                                <section className="box-3">Credit Accounts
                            <div className="amount">$300.00</div>
                                </section>
                            </Link>
                            <Link to="/accounts/loans">
                                <section className="box-4">Loan Accounts
                                <div className="amount">$2,500.00</div>
                                </section>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}