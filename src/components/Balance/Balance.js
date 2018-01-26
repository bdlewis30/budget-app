import React, { Component } from 'react';
import './Balance.css';
// import axios from 'axios';

export default class Balance extends Component {

    constructor() {
        super();

        this.state = {

        }
        
    }

    render() {
        return (
            <div>
                <section className="balance-container">
                    <h1>Balance</h1>
                    <div className="bal-amt">$500.00</div>
                    <section className="dc-container">
                        <div>Debits: <span className="debits">$1,700.00</span></div>
                        <div>Credits: <span className="credits">$1,200.00</span></div>
                    </section>
                </section>
            </div>
        )
    }

}