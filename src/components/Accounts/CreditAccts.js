import React, { Component } from 'react';
import './Accounts.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../reducer/users';
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
            transactions: [],
            selectedAccount: 0,
            acct_name: ''
        }
    }

    componentDidMount() {
        let promise = axios.get('/api/accounts?acct_type=credit')
        promise.then(res => {
            console.log(res)
            this.setState({
                credit: res.data
            })
        })
    }

    chooseAccount = (event) => {
        const id = event.target.value;
        console.log(id);
        let creditName = this.state.credit.find(credit => {return credit.id == id})
        this.setState({ selectedAccount: id, acct_name: creditName.acct_name});
        // get transactions with selectedAccount 
        
    }

    closeAddAccount = () => {
        alert('Success! A new account has been submitted.')
        this.setState({
            showAddAccount: false
        })
    }

    render() {
        const options = _.map(this.state.credit, (credit, index) => {
            return <option key={credit.id} value={credit.id}>{credit.acct_name}</option>
        })
        return (
            <div className="ledger-container">
                <h2>Credit Balance</h2>
                <section className="ledger-header">
                    <select className="acct-dropdown" onChange={this.chooseAccount} value={this.state.selectedAccount}>
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
                {this.state.showAddAccount ? <AddAccount acct_type="credit" action={this.closeAddAccount}/> : null}
                {this.state.showAddTransaction ? <Transaction acct_type="credit" acctId={this.state.selectedAccount} acct_name={this.state.acct_name} /> : null}
                <div>
                    <DebitsCredits acctId={this.state.selectedAccount} />
                </div>
            </div >
        )
    }
}


function mapStatetoProps(state) {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, { getUserInfo })(CreditAccts);