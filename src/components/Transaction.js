import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../reducer/users';
import _ from 'lodash';

class Transaction extends Component {

    constructor() {
        super();

        this.state = {
            transactions: [],
            t_date: 0,
            acctName: '',
            debits: 0,
            credits: 0,
        }
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    saveTransaction = (event) => {
        const body = {
            t_date: this.state.date,
            acctName: this.state.acctName,
            debits: this.state.debits,
            credits: this.state.credits,
        };
        event.preventDefault();
        axios.post('/accounts/:acctId/transactions', body).then(res => {
            console.log({ res });
            // this.props.onSave(res.data);
        }, error => {
            console.error(error);
        })
    }

    handleDate = (value) => {
        this.setState({
            date: value
        })
    }

    handleAcctName = (value) => {
        this.setState({
            acctName: value
        })
    }

    handleDebit = (value) => {
        this.setState({
            debits: value
        })
    }

    handleCredit = (value) => {
        this.setState({
            credits: value
        })
    }

    render() {
        const acct_type = this.props.acctType;
        const { t_date, acctName, amount, debits, credits } = this.state.transactions;
        return (
            <div className="accts-container">
                <h2>Add Transactoion:</h2>
                <form>
                    <label>Date:</label><br />
                    <input required type="date" name="Date" onChange={(e) => this.handleDate(e.target.value)} /><br />
                    <label>Account Name:</label><br />
                    <input required type="text" pattern="^[a-zA-Z]+$" name="Account_Name" onChange={(e) => this.handleAcctName(e.target.value)} /><br />
                    <label>Debit:</label><br />
                    $<input type="number" pattern="^[0-9]+$" step="any" min="0" name="Debit" placeholder="0.00" onChange={(e) => this.handleDebit(e.target.value)} /><br />
                    <label>Credit:</label><br />
                    $<input required type="number" pattern="^[0-9]+$" name="Credit" placeholder="0.00" onChange={(e) => this.handleCredit(e.target.value)} /><br />
                    <button className="submit-btn" onClick={this.saveTransaction}>Submit</button>
                </form>

            </div>
        )
    }
}

function mapStatetoProps(state) {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, { getUserInfo })(Transaction);