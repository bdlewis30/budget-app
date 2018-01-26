import React, { Component } from 'react';
import './CreditLedger.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../../reducer/users';
import AddAccount from '../../AddAccount';
import DebitsCredits from '../../../DebitsCredits';

// get data from router.read_all_credit.sql

class CreditLedger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: 'disabled',
            showAddAccount: false,
        }
    }

    componentDidMount() {
        let promise = axios.get('/api/accounts/credit-accounts')
        promise.then(res => {
            console.log(res)
            this.setState({
                credit: res.data
            })
        })
    }

    render() {
        return (
            <div className="credit-ledger-container">
                <h2>Credit Balance</h2>
                <section className="credit-ledger-header">
                    <select className="acct-dropdown">
                        <option value="Select Account">--Select Account--</option>
                        <option value="Beehive">Beehive</option>
                        <option value="First Tech">First Tech</option>
                    </select>
                    <br />
                    <br />
                    <div className="buttons-container">
                        <button className="btn" onClick={() => {
                            this.setState({
                                showAddAccount: true
                            })
                        }}
                        >Add Account</button>
                        <button className="btn">Add Transaction</button>
                        <button className="btn">Update Transaction</button>
                    </div>
                </section>
                <br /><br />
                {this.state.showAddAccount ? <AddAccount /> : null}
                <div>
                    <DebitsCredits />
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