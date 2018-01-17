import React, { Component } from 'react';
import './BillsSnip.css';


export default class BillsSnip extends Component {

    render() {
        return (
            <div>
                <a href="http://localhost:3000">
                    <section className="bills-container">
                        <h1 className="bills-title">Bills Next 30 Days</h1>
                        <div className="total">$2,400.00</div>
                        <div></div>
                        <section className="list-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Mortgage</td>
                                        <td>96.00</td>
                                    </tr>
                                    <tr>
                                        <td>Utilities</td>
                                        <td>1,275.00</td>
                                    </tr>
                                    <tr>
                                        <td>Car Loan</td>
                                        <td>90.00</td>
                                    </tr>
                                    <tr>
                                        <td>Car Insurance</td>
                                        <td>78.00</td>
                                    </tr>
                                    <tr>
                                        <td>College Loan</td>
                                        <td>75.00</td>
                                    </tr>
                                    <tr>
                                        <td>Life Insurance</td>
                                        <td>45.00</td>
                                    </tr>
                                    <tr>
                                        <td>Internet</td>
                                        <td>55.00</td>
                                    </tr>
                                    <tr>
                                        <td>Netflix</td>
                                        <td>10.00</td>
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