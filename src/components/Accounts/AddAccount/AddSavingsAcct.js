import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../../reducer/users';
import './AddAccount.css';

export default class AddSavingsAcct extends Component {

    constructor(){
        super();

        this.state = {
            acct_name: '',
            acct_type: '',
            start_balance: 0,
            apr: 0,
            acct_num: 0,
            memo: '',
            user_id: 0,
        }
    }

    render(){
        return(
            <div>
                <div className="accts-container">
                <h2>Add Account:</h2>
                <select className="account-type" autofocus="autofocus" form="account">
                    <option value="-Account Type-">-Account Type-</option>
                    <option value="Credit">Credit</option>
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                    <option value="Loan">Loan</option>
                </select><br /><br />
                <div className="form-new-acct">
                    <form id="accounts">
                        <label>Date:</label>
                        <input required type="date" name="Date" placeholder="yyyy/mm/dd" /><br />
                        <label>Account Name:</label>
                        <input required type="text" pattern="^[a-zA-Z]$" name="Account_Name" placeholder="Account Name" /><br />
                        <label>APR:</label>
                        <input type="number" step="any" min="0" name="APR" placeholder="0.00%" /><br />
                        <label>Account Number:</label>
                        <input required type="number" name="Account_Number" placeholder="Account Number" /><br />
                        <label>Memo:</label><input type="text" name="Memo" placeholder="Memo" /><br />
                        <button onClick={(e) => this.postCreditAcct(e)}>Add</button>
                    </form>
                </div>
                <button onClick={this.state.addAccount}>Add Account</button>
            </div>
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

export default connect(mapStatetoProps, { getUserInfo })(AddSavingsAcct);