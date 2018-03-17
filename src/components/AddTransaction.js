import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../reducer/users';
import './Accounts/Accounts.css';

export class AddTransaction extends Component {

    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            t_date: 0,
            t_desc: '',
            debits: 0,
            credits: 0,
        }
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    saveTransaction = (e) => {
        const body = {
            acct_type: this.props.acct_type,
            t_date: this.state.t_date,
            t_desc: this.state.t_desc,
            debits: this.state.debits,
            credits: this.state.credits
        };
        axios.post(`/api/accounts/${this.props.acctId}/transactions`, body)
            .then(res => {
                // this.props.getTransactions(this.props.t_id)
            }, error => {
                console.error(error);
            })
    }

    handleDate = (value) => {
        this.setState({
            t_date: value
        })
    }

    handleDescription = (value) => {
        this.setState({
            t_desc: value
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
        const { t_date, t_desc, debits, credits } = this.state.transactions;
        return (
            <div className="accts-container">
                <h2>Add Transactoion:</h2>
                <form onSubmit={(e) => { e.preventDefault(); this.saveTransaction(); this.props.action() }}>
                    <label>Date:</label><br />
                    <input className="add-inputs" type="date" name="Date" onChange={(e) => this.handleDate(e.target.value)} /><br />
                    <label>Description:</label><br />
                    <input className="add-inputs" type="text" name="Description" placeholder="Description" onChange={(e) => this.handleDescription(e.target.value)} /><br />
                    <label>Debit:</label><br />
                    $<input className="add-inputs" type="number" step="any" min="0" name="Debit" placeholder="0.00" onChange={(e) => this.handleDebit(e.target.value)} /><br />
                    <label>Credit:</label><br />
                    $<input className="add-inputs" type="number"  step="any" min="0" name="Credit" placeholder="0.00" onChange={(e) => this.handleCredit(e.target.value)} /><br />
                    <button className="submit-btn" type="submit">Submit</button>
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

export default connect(mapStatetoProps, { getUserInfo })(AddTransaction);