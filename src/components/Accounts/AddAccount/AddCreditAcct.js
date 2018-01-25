import React, { Component } from 'react';
import './AddAccount.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../reducer/users';
import CreditLedger from '../Ledger/Credit/CreditLedger';

class AddCreditAcct extends Component {

    constructor() {
        super();

        this.state = {
            acct_name: '',
            acct_type: '',
            start_balance: 0,
            apr: 0,
            acct_num: 0,
            memo: '',
            user_id: 0,
            disabled: 'disabled',
            showLedger: false
        }
        this.addAccount = this.addAccount.bind(this);
        this.optionDisabled = this.optionDisabled.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    postCreditAcct(e) {
        e.preventDefault();
        axios.post('/accounts/credit', this.state).then(res => {
            console.log(res)
            let creditAccount = res.data

        }).catch(console.log)
    }

    addAccount() {
        this.setState({
            addAccount: !this.state.addAccount
        })
    }

    optionDisabled(value) {
        const savings = "Savings";
        const disabled = 'disabled="disabled"';
        if (value == savings) {
            return disabled
        }
        else {
            return null;
        }
    }

    render() {
        let { acct_name, acct_type, start_balance, apr, acct_num, memo, user_id } = this.state;
        return (
            <div className="accts-container">
                <h2>Add Account:</h2>
                <select onChange={(e) => { this.optionDisabled(e.target.value) }} className="account-type" autofocus="autofocus" form="account">
                    <option value="-Account Type-">-Account Type-</option>
                    <option value="Credit">Credit</option>
                    <option value="Checking">Checking</option>
                    <option value={this.savings}>Savings</option>
                    <option value="Loan">Loan</option>
                </select><br /><br />
                {/* <div className="form-new-acct">
                    <form id="accounts">
                        <label>Date:</label>
                        <input required type="date" name="Date" placeholder="yyyy/mm/dd" /><br />
                        <label>Account Name:</label>
                        <input required type="text" pattern="^[a-zA-Z]$" name="Account_Name" placeholder="Account Name" /><br />
                        <label>APR:</label>
                        <input type="number" step="any" min="0" name="APR" placeholder="0.00%" disabled={this.state.disabled} /><br />
                        <label>Account Number:</label>
                        <input required type="number" name="Account_Number" placeholder="Account Number" /><br />
                        <label>Memo:</label><input type="text" name="Memo" placeholder="Memo" /><br />
                        <button onClick={(e) => this.postCreditAcct(e)}>Submit</button>
                    </form>
                </div> */}
                <button onClick={() => {
                    this.setState({
                        showLedger: true
                    })
                }}
                >Add Account</button>
                {this.state.showLedger ? <CreditLedger /> : null}
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

export default connect(mapStatetoProps, { getUserInfo })(AddCreditAcct);