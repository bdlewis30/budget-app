import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BalanceSnip.css';

export default class BalanceSnip extends Component {

    render() {
        return (
            <div>
                <Link to="/balance">
                    <section className="balance-container">
                        <h1>Balance</h1>
                        <div className="bal-amt">$500.00</div>
                        <section className="dc-container">
                            <div className="debit">Debits: <span className="green">$1,700.00</span></div>
                            <div className="credit">Credits: <span className="red">$1,200.00</span></div>
                        </section>
                    </section>
                </Link>
            </div>
        )
    }

}