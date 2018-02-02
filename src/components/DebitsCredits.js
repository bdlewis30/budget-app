import React, { Component } from 'react';
import axios from 'axios';
import './DebitsCredits.css';
import _ from 'lodash';
import Transaction from './Transaction';

export default class DebitsCredits extends Component {

    constructor(props) {
        super();

        this.state = {
            transactions: []
        }
        this.getTransactions(props.acctId);
        // this.getBalance(props.acctId);
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

    // handleDateChange = (event) => {
    //     this.setState({
    //         t_date: event.target.value
    //     })
    //     axios.put(`/api/accounts/${acctId}/transactions/${id}`, {t_date: this.state.t_date});
    // }

    // getBalance = (acctId) => {
    //     axios.get(`/api/accounts/${acctId}`).then((res) => {
    //         this.setState({ start_bal: res.data.start_bal });
    //     })
    // }

    toNumber(num) {
        return Number(num.replace(/\$|,/, ''))
    }

    toFinance(num) {
        return (
            '$' + parseFloat(num)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
    }

    render() {
        
        let total = 0
        const rows = _.map(this.state.transactions, (t, index) => {
            let currentBalance = this.toFinance(this.toNumber(t.start_bal) + total)
            total += this.toNumber(t.credits) - this.toNumber(t.debits)
            let date = new Date(t.t_date)
            return (
                <tr className="dc-input" key={index}>
                    <td><input className="dc-input" onChange={this.handleDateChange} onBlur={this.handleDateChange} value={date.getFullYear() + '/' + Number(date.getMonth()) + 1 + '/' + date.getDate()}/></td>
                    <td><input className="dc-input" value={t.t_desc}/></td>
                    <td><input className="currency dc-input" value={t.debits}/></td>
                    <td><input className="currency dc-input" value={t.credits}/></td>
                    <td><input className="currency dc-input" value={currentBalance}/></td>
                </tr>
            )
        })

        return (
            <div>
                <table>
                    <tbody>
                        <tr className="dc-table-header">
                            <th>Date</th>
                            <th>Description</th>
                            <th>Debits</th>
                            <th>Credits</th>
                            <th>Balance</th>
                        </tr>
                        {rows}
                        <tr>
                            <td>{this.getBalance}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}