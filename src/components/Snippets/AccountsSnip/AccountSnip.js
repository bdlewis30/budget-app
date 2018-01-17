import React, { Component } from 'react';
import './AccountsSnip.css';
import { Route, Link } from 'react-router-dom';
import BankAccts from '../../Accounts/BankAccounts/BankAccts';
import CreditAccts from '../../Accounts/CreditAccounts/CreditAccts';
import LoanLiab from '../../Accounts/LoansLiabilities/LoanLiab';

export default class AccountsSnip extends Component {

    render() {
        return (
            <div>
                <Route path="/bank-accounts" component={BankAccts} />
                <Route path="/credit-accounts" component={CreditAccts} />
                <Route path="/liabilities" component={LoanLiab} />

                <section className="accts-container-snip">
                    <h1>Accounts</h1>
                    <div className="box-container">
                        <Link to="/bank-accounts">
                            <section className="box-1">Bank Accounts
                            <div className="amount">$580.00</div>
                            </section>
                        </Link>
                        <Link to="/credit-accounts">
                            <section className="box-2">Credit Accounts
                            <div className="amount">$300.00</div>
                            </section>
                        </Link>
                        <Link to="/liabilities">
                            <section className="box-3">{`Loans & Liab.`}
                                <div className="amount">$1,500.00</div>
                            </section>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}