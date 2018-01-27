import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../reducer/users';
import './AddAccount.css';

class Transaction extends Component {

    constructor() {
        super();

        this.state = {
            transactions: [],
            disabled: 'disabled',
            showLedger: false,
            start_bal: 0,
            date: 0,
            acct_name: '',
            debit: 0,
            credit: 0,
            balance: 0
        }
    
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    // postCreditAcct(e) {
    //     e.preventDefault();
    //     axios.post('/accounts/credit', this.state).then(res => {
    //         console.log(res)
    //         let creditAccount = res.data

    //     }).catch(console.log)
    // }


    handleDateChange = (value) => {
        this.setState({
            date: value
        })
        console.log(this.state.date)
    }

    handleAccountName = (value) => {
        this.setState({
            acct_name: value
        })
        console.log(this.state.acctName)
    }

    handleStartBal = (value) => {
        this.setState({
            start_bal: value
        })
        console.log(this.state.startBal)
    }

    handleDebit = (value) => {
        this.setState({
            debit: value
        })
    }

    handleCredit = (value) => {
        this.setState({
            credit: value
        })
    }

    handleBalance

    optionDisabled = (value) => {
        const savings = "Savings";
        const disabled = 'disabled="disabled"';
        if (value === savings) {
            return disabled
        }
        else {
            return null;
        }
    }

    saveAccount = (event) => {
        const body = {
            date: this.state.date,
            acct_name: this.state.acctName,
            amount: this.state.startBal,
            apr_int: this.state.apr,
            acct_num: this.state.acctNum,
            memo: this.state.memo,
            acct_type: this.props.acctType,
            routing_num: this.state.routingNum,
        };
        event.preventDefault();
        axios.post('/api/accounts', body).then(res => {
            console.log({res});
            // this.props.onSave(res.data);
        }, error => {
            console.error(error);
        })
    }
 
    render() {
        const acct_type = this.props.acctType;
        const {date, acctName, startBal, apr, acctNum, memo} = this.state.creditAccount;
        return (
            <div className="accts-container">
                <h2>Add Account:</h2>
                <form>
                    <label>Date:</label><br />
                    <input required type="date" name="Date" onChange={(e) => this.handleDateChange(e.target.value)} /><br />
                    <label>Account Name:</label><br />
                    <input required type="text" name="Account_Name" placeholder="Account Name" onChange={(e) => this.handleAccountName(e.target.value)} /><br />
                    <label>Starting Balance:</label><br />
                    $<input required type="number" pattern="^[0-9]+$" min="0" name="Starting_Balance" placeholder="0.00" onChange={(e) => this.handleStartBal(e.target.value)} /><br />
                    <label>APR:</label><br />
                    <input type="number" pattern="^[0-9]+$" step="any" min="0" name="APR" placeholder="0.00%" onChange={(e) => this.handleApr(e.target.value)} /><br />
                    <label>Account Number (last 4 digits):</label><br />
                    <input required type="number" pattern="^[0-9]+$" name="Account_Number" placeholder="Account Number" onChange={(e) => this.handleAcctNum(e.target.value)} /><br />
                    {(acct_type === 'checkings' || acct_type === 'savings') && (
                        <div>
                            <label>Routing Number:</label><br />
                            <input required type="number" pattern="^[0-9]+$" name="Routing_Number" placeholder="Routing Number" onChange={(e) => this.handleRoutingNum(e.target.value)} /><br />
                        </div>
                    )}
                    <label>Memo:</label><br />
                    <input type="text" name="Memo" placeholder="Memo" onChange={(e) => this.handleMemo(e.target.value)} /><br />
                    <button className="submit-btn" onClick={this.saveAccount}>Submit</button>
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