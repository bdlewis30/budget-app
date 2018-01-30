import React, { Component } from 'react';
import axios from 'axios';
import './DebitsCredits.css';
import _ from 'lodash';
import Transaction from './Transaction';

export default class DebitsCredits extends Component {

    constructor(props) {
        super();

        this.state = {
            transactions: [],
            t_date: [],
            account: [],
            debit: [],
            credit: [],
            balance: []
        }
        this.getTransactions(props.acctId);
        this.getBalance(props.acctId);
    }

    componentWillReceiveProps(newProps, oldProps) {
        if (newProps.acctId !== oldProps.acctId) {
            this.getTransactions(newProps.acctId);
        }
    }

    getTransactions = (acctId) => {
        if (acctId === 0) {
            return
        }
        axios.get(`/api/accounts/${acctId}/transactions`).then((res) => {
            this.setState({ transactions: res.data });
        })
    }

    getBalance = (acctId) => {
        if (acctId === 0) {
            return
        }
        axios.get(`/api/accounts/${acctId}`).then((res) => {
            this.setState({ start_bal: res.data });
        })
    }

    toNumber(num) {
        return Number(num.replace(/\$|\,/, ''))
    }

    toFinance(num) {
        return (
            '$' + parseFloat(num)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
    }

    // pass in the account id
    render() {
        let total = 0
        const rows = _.map(this.state.transactions, (t, index) => {
            let currentBalance = this.toFinance(this.toNumber(t.start_bal) + total)
            total += this.toNumber(t.credits) - this.toNumber(t.debits)
            return (
                <tr key={index}>
                    <td>{t.t_date}</td>
                    <td>{t.acct_name}</td>
                    <td className="currency">{t.debits}</td>
                    <td className="currency">{t.credits}</td>
                    <td className="currency" type="number" pattern="(^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$)">{currentBalance}</td>
                </tr>
            )
        })

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
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}