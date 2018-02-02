import React, { Component } from 'react';
import './Accounts.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../reducer/users';
import AddAccount from './AddAccount';
import AddTransaction from '../AddTransaction';
import DebitsCredits from '../DebitsCredits';
import _ from 'lodash';

class CheckingAcct extends Component {

    constructor(props) {
        super();

        this.state = {
            disabled: 'disabled',
            showAddAccount: false,
            showAddTransaction: false,
            checking: [],
            transactions: [],
            selectedAccount: 0
        }
    }

    componentDidMount() {
        let promise = axios.get('/api/accounts?acct_type=checking')
        promise.then(res => {
            console.log(res)
            this.setState({
                checking: res.data
            })
        })
    }

    chooseAccount = (event) => {
        const id = event.target.value;
        console.log(id);
        this.setState({ selectedAccount: id });
        // get transactions with selectedAccount 
        
    }

    render() {
        const options = _.map(this.state.checking, (checking, index) => {
            return <option key={checking.id} value={checking.id}>{checking.acct_name}</option>
        })
        return (
            <div className="ledger-container">
                <h2>Checking Balance</h2>
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
                {this.state.showAddAccount ? <AddAccount acct_type="checking"/> : null}
                {this.state.showAddTransaction ? <AddTransaction acct_type="checking" acctId={this.state.selectedAccount}/> : null}
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

export default connect(mapStatetoProps, { getUserInfo })(CheckingAcct);