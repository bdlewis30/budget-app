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
            debits: 0,
            credits: 0,
        }
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    saveTransaction = (event) => {
        const body = {
            t_date: this.state.t_date,
            debits: this.state.debits,
            credits: this.state.credits,
        };
        event.preventDefault();
        axios.post(`/api/accounts/${this.props.acctId}/transactions`, body)
        .then(res => {
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
        const { t_date, acctName, debits, credits } = this.state.transactions;
        return (
            <div className="accts-container">
                <h2>Add Transactoion:</h2>
                <form>
                    <label>Date:</label><br />
                    <input type="date" name="Date" onChange={(e) => this.handleDate(e.target.value)} /><br />
                    <label>Debit:</label><br />
                    $<input type="number" pattern="(^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$)" step="any" min="0" name="Debit" placeholder="0.00" onChange={(e) => this.handleDebit(e.target.value)} /><br />
                    <label>Credit:</label><br />
                    $<input type="number" pattern="(^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$)" name="Credit" placeholder="0.00" onChange={(e) => this.handleCredit(e.target.value)} /><br />
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