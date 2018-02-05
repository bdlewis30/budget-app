import React, { Component } from 'react';
import './Bills.css';


export default class Bills extends Component {

    render() {
        return (
            <div>
                <section className="bills-container">
                    <h1 className="bills-title">Bills Next 30 Days</h1>
                    <div className="total">$2,400.00</div>
                    <section className="bills-list-container">
                        <table className="bills-table">
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
            </div>
        )
    }
}