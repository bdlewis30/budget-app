import React, { Component } from 'react';
import './BankAccts.css';


export default class BankAccts extends Component {

    render() {
        return (
            <div>
                <section className="accts-container">
                    <h1>Accounts</h1>
                    <div className="box-container">
                        <a href="http://localhost:3000">
                            <section className="box-1">Bank Accounts
                                <div className="amount">$580.00</div>
                            </section>
                        </a>
                        <a href="http://localhost:3000">
                            <section className="box-2">Credit Accounts
                                <div className="amount">$300.00</div>
                            </section>
                        </a>
                        <a href="http://localhost:3000">
                            <section className="box-3">{`Loans & Liab.`}
                                <div className="amount">$1,500.00</div>
                            </section>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}