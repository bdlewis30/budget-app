import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BudgetSnip.css';

export default class BudgetSnip extends Component {

    render() {
        return (
            <div>
                <Link to="/budget">
                    <section className="budget-snip-container">
                        <h1 className="budget-title">Budget</h1>
                        <div className="total">$2,705.00</div>
                        <section className="budget-list-container">
                            <table className="budget-table">
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
                </Link>
            </div>
        )
    }
}