import React, { Component } from 'react';
import './CreditLedger.css';

export default class CreditData extends Component {

    render() {
        return (
            <div className="credit-ledger-container">
                <section className="credit-ledger-colum">
                    <div className="credit-ledger-date">Date</div>
                    <div className="credit-ledger-date-data">2017/3/07</div>
                    <div className="credit-ledger-date-data">2017/3/07</div>
                    <div className="credit-ledger-date-data">2017/3/08</div>
                    <div className="credit-ledger-date-data">2017/3/15</div>
                    <div className="credit-ledger-date-data">2017/3/27</div>
                    <div className="credit-ledger-date-data">2017/4/05</div>
                    <div className="credit-ledger-date-data">2017/4/16</div>
                    <div className="credit-ledger-date-data">2017/4/18</div>
                </section>
                <section className="credit-ledger-colum">
                    <div className="credit-ledger-acct">Account</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                    <div className="credit-ledger-acct-data">Citi Bank</div>
                </section>
                <section className="credit-ledger-colum">
                    <div className="credit-ledger-debit">Debit</div>
                    <div className="credit-ledger-debit-amount">-</div>
                    <div className="credit-ledger-debit-amount">500.00</div>
                    <div className="credit-ledger-debit-amount">100.00</div>
                    <div className="credit-ledger-debit-amount">200.00</div>
                    <div className="credit-ledger-debit-amount">150.00</div>
                    <div className="credit-ledger-debit-amount">50.00</div>
                    <div className="credit-ledger-debit-amount">-</div>
                    <div className="credit-ledger-debit-amount">-</div>
                </section>
                <section className="credit-ledger-colum">
                    <div className="credit-ledger-credit">Credit</div>
                    <div className="credit-ledger-credit-amount">-</div>
                    <div className="credit-ledger-credit-amount">-</div>
                    <div className="credit-ledger-credit-amount">-</div>
                    <div className="credit-ledger-credit-amount">-</div>
                    <div className="credit-ledger-credit-amount">-</div>
                    <div className="credit-ledger-credit-amount">-</div>
                    <div className="credit-ledger-credit-amount">20.00</div>
                    <div className="credit-ledger-credit-amount">15.00</div>
                </section>
                <section className="credit-ledger-colum">
                    <div className="credit-ledger-bal">Bal</div>
                    <div className="credit-ledger-begin-bal">2000.00</div>
                    <div className="credit-ledger-bal-amount">1500.00</div>
                    <div className="credit-ledger-bal-amount">1400.00</div>
                    <div className="credit-ledger-bal-amount">1200.00</div>
                    <div className="credit-ledger-bal-amount">1150.00</div>
                    <div className="credit-ledger-bal-amount">1100.00</div>
                    <div className="credit-ledger-bal-amount">1120.00</div>
                    <div className="credit-ledger-bal-amount">1135.00</div>
                </section>
            </div>
        )
    }
}
