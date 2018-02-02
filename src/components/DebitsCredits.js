import React, { Component } from 'react';
import axios from 'axios';
import './DebitsCredits.css';
import _ from 'lodash';
import AddTransaction from './AddTransaction';

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

    handleBlur = (event, id) => {
        const body = {
            acct_type: this.props.acct_type,
            to_date: this.state.t_date,
            t_desc: this.state.t_desc,
            debits: this.state.debits,
            credits: this.state.credits
            // id: this.state.id, 
            // user_id: this.state.user_id
        };
        axios.put(`/api/accounts/${this.props.acctId}/transactions/${id}`, body)
            .then(res => {

            }, error => {
                console.log(error);
            })
    }

    handleChange(key, val){
        this.setState({[key]: val})
    }

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
                    <td><input className="dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={date.getFullYear() + '/' + Number(date.getMonth()) + 1 + '/' + date.getDate()} /></td>
                    <td><input className="dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={t.t_desc} /></td>
                    <td><input className="currency dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={t.debits} /></td>
                    <td><input className="currency dc-input" onBlur={(event) => { this.handleBlur(event, t.id) }} defaultValue={t.credits} /></td>
                    <td><input className="currency dc-input" defaultValue={currentBalance} /></td>
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