import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../reducer/users';
import './AddAccount.css';

class AddAccount extends Component {

    constructor() {
        super();

        this.state = {
            creditAccount: [],
            disabled: 'disabled',
            showLedger: false,
            date: 0,
            acctName: '',
            startBal: 0,
            apr_int: 0,
            acctNum: 0,
            routingNum: 0,
            memo: ''
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
            acctName: value
        })
        console.log(this.state.acctName)
    }

    handleStartBal = (value) => {
        this.setState({
            startBal: value
        })
        console.log(this.state.startBal)
    }

    handleAprInt = (value) => {
        this.setState({
            apr_int: value
        })
        console.log(this.state.apr_int)
    }

    handleAcctNum = (value) => {
        this.setState({
            acctNum: value
        })
        console.log(this.state.acctNum)
    }

    handleRoutingNum = (value) => {
        this.setState({
            routingNum: value
        })
        console.log(this.state.routingNum)
    }

    handleMemo = (value) => {
        this.setState({
            memo: value
        })
        console.log(this.state.memo)
    }

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
            acctName: this.state.acctName,
            amount: this.state.startBal,
            apr_int: this.state.apr_int,
            acctNum: this.state.acctNum,
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
        const {date, acctName, startBal, apr_int, acctNum, memo} = this.state.creditAccount;
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
                    <label>APR/Interest:</label><br />
                    <input type="number" pattern="^[0-9]+$" step="any" min="0" name="APR_Int" placeholder="0.00%" onChange={(e) => this.handleAprInt(e.target.value)} /><br />
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

export default connect(mapStatetoProps, { getUserInfo })(AddAccount);