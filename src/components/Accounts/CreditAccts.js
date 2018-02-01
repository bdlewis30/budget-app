import React, { Component } from 'react';
import './Accounts.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo, getAccounts, chooseAccount } from '../../reducer/users';
import AddAccount from './AddAccount';
import Transaction from '../Transaction';
import DebitsCredits from '../DebitsCredits';
import _ from 'lodash';

export class CreditAccts extends Component {

    constructor(props) {
        super();

        this.state = {
            disabled: 'disabled',
            showAddAccount: false,
            showAddTransaction: false,
            credit: [],
            acct_name: ''
        }
    }

    componentDidMount() {
       this.props.getAccounts('credit')
    }


    handleSelect = (event) => {
        const id = event.target.value;
        let creditName = this.props.creditAccts.find(credit => { return credit.id == id })
        console.log(creditName)
        this.props.chooseAccount(creditName)
    }

    closeAddAccount = () => {
        alert('Success! A new account has been submitted.')

        this.setState({
            showAddAccount: false
        })
    }

    render() {
        const options = _.map(this.props.creditAccts, (credit, index) => {
            return <option key={credit.id} value={credit.id}>{credit.acct_name}</option>
        })
        return (
            <div className="ledger-container">
                <h2>Credit Balance</h2>
                <section className="ledger-header">
                    <select className="acct-dropdown" onChange={this.handleSelect} value={this.props.selectedAccount}>
                        <option value="0">--Select An Account--</option>
                        {options}
                    </select>
                    <br />
                    <br />
                    <div className="buttons-container">
                        <button className="btn" onClick={() => {
                            this.setState({
                                showAddAccount: true
                            })
                        }}>Add Account
                        </button>
                        <button className="btn" onClick={() => {
                            this.setState({
                                showAddTransaction: true
                            })
                        }}>Add Transaction
                        </button>
                        <button className="btn">Update Transaction</button>
                    </div>
                </section>
                <br /><br />
                {this.state.showAddAccount ? <AddAccount acct_type="credit" action={this.closeAddAccount} /> : null}
                {this.state.showAddTransaction ? <Transaction acct_type="credit" acctId={this.props.selectedAccount} acct_name={this.state.acct_name} /> : null}
                <div>
                    <DebitsCredits acctId={this.props.selectedAccount} />
                </div>
            </div >
        )
    }
}


function mapStatetoProps(state) {
    console.log(state)
    return {
        user: state.user,
        creditAccts: state.creditAccts,
        selectedAccount: state.selectedAccount
    }
}

export default connect(mapStatetoProps, { getUserInfo, getAccounts, chooseAccount })(CreditAccts);