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
            user_id: 0,
            disabled: 'disabled',
            showLedger: false,
            date: 0,
            acctName: '',
            startBal: 0,
            apr: 0,
            acctNum: 0,
            memo: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAccountName = this.handleAccountName.bind(this);
        this.handleApr = this.handleApr.bind(this);
        this.handleAcctNum = this.handleAcctNum.bind(this);
        this.handleMemo = this.handleMemo.bind(this);
        this.optionDisabled = this.optionDisabled.bind(this);
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


    handleDateChange(value){
        console.log(this.state.date)
        this.setState({
            date: this.state.date
        })
    }

    handleAccountName(value){
        console.log(this.state.acctName)
        this.setState({
            acctName: this.state.acctName
        })
    }

    handleStartBal(value){
        console.log(this.state.startBal)
        this.setState({
            startBal: this.state.startBal
        })
    }

    handleApr(value){
        console.log(this.state.apr)
        this.setState({
            apr: this.state.apr
        })
    }

    handleAcctNum(value) {
        console.log(this.state.acctNum)
        this.setState({
            acctNum: this.state.acctNum
        })
    }

    handleMemo(value){
        console.log(this.state.memo)
        this.setState({
            memo: this.state.memo
        })
    }

    optionDisabled(value) {
        const savings = "Savings";
        const disabled = 'disabled="disabled"';
        if (value === savings) {
            return disabled
        }
        else {
            return null;
        }
    }

    render() {
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
                    $<input required type="number" pattern="^[0-9]$" min="0" name="Starting_Balance" placeholder="0.00" onChange={(e) => this.handleStartBal(e.target.value)} /><br />
                    <label>APR:</label><br />
                    <input type="number" pattern="^[0-9]$" step="any" min="0" name="APR" placeholder="0.00%" onChange={(e) => this.handleApr(e.target.value)} /><br />
                    <label>Account Number (last 4 digits):</label><br />
                    <input required type="number" pattern="^[0-9]$" name="Account_Number" placeholder="Account Number" onChange={(e) => this.handleAcctNum(e.target.value)} /><br />
                    <label>Memo:</label><br />
                    <input type="text" name="Memo" placeholder="Memo" onChange={(e) => this.handleMemo(e.target.value)} /><br />
                    <button className="submit-btn" onClick={() => this.setState({creditAccount: this.state.creditAccount})}>Submit</button>
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