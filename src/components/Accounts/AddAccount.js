import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo, chooseAccount, getAccounts } from '../../reducer/users';
import './AddAccount.css';

export class AddAccount extends Component {

    constructor(props) {
        super();

        this.state = {
            newAccount: [],
            acct_name: '',
            start_bal: 0,
            apr_int: 0,
            acct_num: 0,
            routing_num: 0,
            memo: ''
        }
    
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    handleAccountName = (value) => {
        this.setState({
            acct_name: value
        })
    }

    handleStartBal = (value) => {
        this.setState({
            start_bal: value
        })
    }

    handleAprInt = (value) => {
        this.setState({
            apr_int: value
        })
    }

    handleAcctNum = (value) => {
        this.setState({
            acct_num: value
        })
    }

    handleRoutingNum = (value) => {
        this.setState({
            routing_num: value
        })
    }

    handleMemo = (value) => {
        this.setState({
            memo: value
        })
    }

    saveAccount = () => {
        const body = {
            acct_type: this.props.acct_type,
            acct_name: this.state.acct_name,
            start_bal: this.state.start_bal,
            apr_int: this.state.apr_int,
            acct_num: this.state.acct_num,
            routing_num: this.state.routing_num,
            memo: this.state.memo
        };
        axios.post('/api/accounts', body)
        .then(res => {
            this.props.getAccounts(this.props.acct_type)
            this.props.chooseAccount(res.data)
        }, error => {
            console.error(error);
        })
    }
 
    render() {
        const acct_type = this.props.acct_type;
        const {acct_name, start_bal, apr_int, acct_num, routing_num, memo} = this.state.newAccount;

        return (
            <div className="accts-container">
                <h2>Add Account:</h2>
                <form onSubmit={(e) => {e.preventDefault(); this.saveAccount(); this.props.action()}}>
                    <label>Account Name:</label><br />
                    <input className="add-inputs" required type="text" name="Account_Name" placeholder="Account Name" onChange={(e) => this.handleAccountName(e.target.value)} /><br />
                    <label>Starting Balance:</label><br />
                    $<input className="add-inputs" required type="number" pattern="^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$" /*pattern="(^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$)"*/ min="0" name="Starting_Balance" placeholder="0.00" onChange={(e) => this.handleStartBal(e.target.value)} /><br />
                    <label>APR/Interest:</label><br />
                    <input className="add-inputs" type="number" pattern="^[-+]?\d+(\.\d+)?$" step="any" min="0" name="APR_Int" placeholder="0.00%" onChange={(e) => this.handleAprInt(e.target.value)} /><br />
                    <label>Account Number (last 4 digits):</label><br />
                    <input className="add-inputs" required type="number" pattern="^[0-9_]+$" name="Account_Number" placeholder="Account Number" onChange={(e) => this.handleAcctNum(e.target.value)} /><br />
                    {(acct_type === 'checking' || acct_type === 'savings') && (
                        <div>
                            <label>Routing Number(123456789):</label><br />
                            <input type="number" pattern="^[0-9_]+$" name="Routing_Number" placeholder="Rounting Number" onChange={(e) => this.handleRoutingNum(e.target.value)} /><br />
                        </div>
                    )}
                    <label>Memo:</label><br />
                    <input className="add-inputs" type="text" name="Memo" placeholder="Memo" onChange={(e) => this.handleMemo(e.target.value)} /><br />
                    <button type='submit' className="submit-btn" >Submit</button>
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

export default connect(mapStatetoProps, { getUserInfo, chooseAccount, getAccounts })(AddAccount);