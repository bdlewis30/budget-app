import React, { Component } from 'react';
import './DebitsCredits.css';

export default class DebitsCredits extends Component {

    constructor() {
        super();

        this.state = {
            date: [],
            acct: [],
            debit: [],
            credit: [],
            balance: [],
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr className="column-header">
                            <th>Date</th>
                            <th>Acct</th>
                            <th>DR</th>
                            <th>CR</th>
                            <th>Bal.</th>
                        </tr>
                        <tr>
                            <td>2017/3/07</td>
                            <td>Mountain America</td>
                            <td className="currency">-</td>
                            <td className="currency">500.00</td>
                            <td className="currency">500.00</td>
                        </tr>
                        <tr>
                            <td>2017/3/07</td>
                            <td>Mountain America</td>
                            <td className="currency">-</td>
                            <td className="currency">200.00</td>
                            <td className="currency">700.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}