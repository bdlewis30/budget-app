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
                        <div className="bal-amt">$549.55</div>
                        <section className="dc-container">
                            <div className="debit">Debits: <span className="green">$1,785.72</span></div>
                            <div className="credit">Credits: <span className="red">$1,236.17</span></div>
                        </section>
                    </section>
                </Link>
            </div>
        )
    }

}