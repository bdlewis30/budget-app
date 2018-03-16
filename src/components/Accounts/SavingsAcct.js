import React, { Component } from 'react';
import './Accounts.css';
import { connect } from 'react-redux';
import { getUserInfo, getAccounts, chooseAccount } from '../../reducer/users';
import AddAccount from './AddAccount';
import AddTransaction from '../AddTransaction';
import DebitsCredits from '../DebitsCredits';
import _ from 'lodash';

class SavingsAccts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAddAccount: false,
            showAddTransaction: false,
            savings: [],
            acct_name: ''
        }
    }

    componentDidMount() {
        this.props.getAccounts('savings')
    }

    handleAccountSelect = (event) => {
        console.log(this.props.savingsAccts)
        const id = event.target.value;
        let savingsName = this.props.savingsAccts.find(savings => { return savings.id === id })
        console.log(id)
        console.log(savingsName)
        this.props.chooseAccount(savingsName)
    }

    closeAddAccount = () => {
        alert('Success! A new account has been created.')

        this.setState({
            showAddAccount: false
        })
    }

    closeAddTransaction = () => {
        alert('Success! A new transaction has been created.')

        this.setState({
            showAddTransaction: false
        })
    }

    handleSelect = (event) => {
        if(event === 'Add-Account') {
            this.setState({
                showAddAccount: true
            })
        }
        if(event === 'Add-Transaction'){
            this.setState({
                showAddTransaction: true
            })
        }
    }

    render() {
        const options = _.map(this.props.savingsAccts, (savings, index) => {
            return <option key={savings.id} value={savings.id}>{savings.acct_name}</option>
        })
        return (
            <div className="ledger-container">
                <h2>Savings Balance</h2>
                <section className="ledger-header">
                    <select className="account-dropdown" onChange={this.handleAccountSelect} value={this.props.selectedAccount}>
                        <option value="0">--Select An Account--</option>
                        {options}
                    </select>
                    <select className="account-dropdown" onChange={event => this.handleSelect(event.target.value)}>
                        <option>Accounts/Transactions</option>
                        <optgroup label="Accounts">
                            <option value="Add-Account">Add Account</option>
                            <option>Update Account</option>
                            <option>Delete Account</option>
                        </optgroup>
                        <optgroup label="Transactions">
                            <option value="Add-Transaction">Add Transaction</option>
                            <option>Update Transaction</option>
                            <option>Delete Transaction</option>
                        </optgroup>
                    </select>
                </section>
                <br /><br />
                {this.state.showAddAccount ? <AddAccount acct_type="savings" action={this.closeAddAccount} /> : null}
                {this.state.showAddTransaction ? <AddTransaction acct_type="savings" action={this.closeAddTransaction} acctId={this.props.selectedAccount} acct_name={this.state.acct_name} /> : null}
                <div>
                    <DebitsCredits acctId={this.props.selectedAccount} action={this.handleDateChange} />
                </div>
            </div >
        )
    }
}


function mapStatetoProps(state) {
    console.log(state)
    return {
        user: state.user,
        savingsAccts: state.savingsAccts,
        selectedAccount: state.selectedAccount
    }
}

export default connect(mapStatetoProps, { getUserInfo, getAccounts, chooseAccount })(SavingsAccts);