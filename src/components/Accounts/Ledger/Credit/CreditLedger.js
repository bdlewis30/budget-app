import React, { Component } from 'react';
import './CreditLedger.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../../reducer/users';
import AddAccount from '../../AddAccount';
import Transaction from '../../../Transaction';
import DebitsCredits from '../../../DebitsCredits';
import _ from 'lodash';


class CreditLedger extends Component {
    constructor(props) {
        super();

        this.state = {
            disabled: 'disabled',
            showAddAccount: false,
            showAddTransaction: false,
            credit: [],
            transactions: [],
            selectedAccount: 0
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

    componentDidMount() {
        let promise = axios.get('/api/transactions?acct_type=credit')
        promise.then(res => {
            console.log(res)
            this.setState({
                transactions: res.data
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
        const options = _.map(this.state.credit, (credit, index) => {
            return <option key={credit.id} value={credit.id}>{credit.acct_name}</option>
        })
        return (
            <div className="credit-ledger-container">
                <h2>Credit Balance</h2>
                <section className="credit-ledger-header">
                    <select className="acct-dropdown" value={this.state.selectedAccount} onChange={this.chooseAccount}>
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
                {this.state.showAddAccount ? <AddAccount acctType="credit"/> : null}
                {this.state.showAddTransaction ? <Transaction acctType="credit"/> : null}
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

export default connect(mapStatetoProps, { getUserInfo })(CreditLedger);