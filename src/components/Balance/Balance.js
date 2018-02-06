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
                    <div className="bal-amt">$549.55</div>
                    <section className="dc-container">
                        <div>Debits: <span className="debits">$1,785.72</span></div>
                        <div>Credits: <span className="credits">$1,236.17</span></div>
                    </section>
                </section>
            </div>
        )
    }

}