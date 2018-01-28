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
            date: [],
            account: [],
            debit: [],
            credit: [],
            balance: []
        }
        this.getTransactions(props.acctId);
    }

    componentWillReceiveProps(newProps, oldProps) {
        if (newProps.acctId !== oldProps.acctId) {
            this.getTransactions(newProps.acctId);
        }
    }

    getTransactions = (acctId) => {
        if(acctId === 0 ){
            return
        }
        axios.get(`/api/accounts/${acctId}/transactions`).then((res) => {
            this.setState({ transactions: res.data});
        })
    }

    // pass in the account id
    render() {
        const rows = _.map(this.state.transactions, (t, index) => {
            return (
                <tr key={index}>
                    <td>{t.date}</td>
                    <td>{t.acct_name}</td>
                    <td className="currency">{t.debits}</td>
                    <td className="currency">{t.credits}</td>
                    <td className="currency">{t.balance}</td>
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