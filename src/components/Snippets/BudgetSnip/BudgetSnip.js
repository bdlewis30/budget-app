import React, { Component } from 'react';
import './BudgetSnip.css';

export default class BudgetSnip extends Component {

    render() {
        return (
            <div>
                <a href="http://localhost:3000">
                    <section className="budget-container">
                        <h1 className="budget-title">Budget</h1>
                        <div className="total">$2,705.00</div>
                        <section className="list-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Bills</td>
                                        <td>1,724.00</td>
                                    </tr>
                                    <tr>
                                        <td>Dining</td>
                                        <td>170.00</td>
                                    </tr>
                                    <tr>
                                        <td>Auto</td>
                                        <td>60.00</td>
                                    </tr>
                                    <tr>
                                        <td>Household</td>
                                        <td>750.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>
                </a>
            </div>
        )
    }
}