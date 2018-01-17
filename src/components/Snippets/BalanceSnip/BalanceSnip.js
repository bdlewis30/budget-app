import React, { Component } from 'react';
import './BalanceSnip.css';

export default class BalanceSnip extends Component {

    render() {
        return (
            <div>
                <a href="http://localhost:3000">
                    <section className="balance-container">
                        <h1>Balance</h1>
                        <div className="bal-amt">$500.00</div>
                        <section className="dc-container">
                            <div>Debits: <span className="debits">$1,700.00</span></div>
                            <div>Credits: <span className="credits">$1,200.00</span></div>
                        </section>
                    </section>
                </a>
            </div>
        )
    }

}